'use client'

import { useEffect, useLayoutEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* useLayoutEffect roda antes da pintura (evita piscar o estado final),
   mas não existe no SSR — no servidor cai para useEffect. */
const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

/* Piso de opacidade para TEXTO. Antes os títulos partiam de 0 e ficavam
   ilegíveis até o ScrollTrigger disparar — num scroll rápido dava para ver
   o espaço do título vazio. Com o piso, o texto nunca some; o movimento
   vertical é que faz o efeito. */
const OPACITY_FLOOR = 0.35

/* A seta que fecha varios links/CTAs, separada para deslizar no hover. */
const ARROW = '\u2192'

/* Elementos cujo texto usa background-clip: não podem ser divididos em
   palavras, senão o gradiente reinicia em cada palavra. */
const ATOMIC = '.grad-text, .hero-title span, h2.section-title span, h2.section-title em, .page-hero-title span'

/** Envolve cada palavra num <span> preservando a estrutura de elementos. */
function splitWords(root: HTMLElement): HTMLElement[] {
  if (root.dataset.split === 'done') {
    return Array.from(root.querySelectorAll<HTMLElement>('.anim-word'))
  }

  const words: HTMLElement[] = []

  const walk = (node: Node) => {
    // Elemento com gradiente: vira uma única "palavra", sem descer nele.
    if (node.nodeType === Node.ELEMENT_NODE) {
      const el = node as HTMLElement
      if (el.matches(ATOMIC)) {
        el.classList.add('anim-word')
        words.push(el)
        return
      }
      if (el.tagName === 'BR') return
      Array.from(el.childNodes).forEach(walk)
      return
    }

    if (node.nodeType !== Node.TEXT_NODE) return
    const text = node.textContent ?? ''
    if (!text.trim()) return

    const frag = document.createDocumentFragment()
    // Mantém os espaços como texto solto para não colar as palavras.
    text.split(/(\s+)/).forEach((chunk) => {
      if (!chunk) return
      if (/^\s+$/.test(chunk)) {
        frag.appendChild(document.createTextNode(chunk))
        return
      }
      const span = document.createElement('span')
      span.className = 'anim-word'
      span.textContent = chunk
      frag.appendChild(span)
      words.push(span)
    })
    node.parentNode?.replaceChild(frag, node)
  }

  Array.from(root.childNodes).forEach(walk)
  root.dataset.split = 'done'
  return words
}

/** Anima um número de 0 até o valor final, preservando prefixo/sufixo. */
function animateCounter(el: HTMLElement) {
  /* Guarda o texto original na primeira passagem. Sem isso, um segundo
     mount (StrictMode em dev, ou troca de rota) leria o valor no meio da
     animação — "0+" — e passaria a tratá-lo como o número final. */
  if (el.dataset.counterRaw === undefined) {
    el.dataset.counterRaw = (el.textContent ?? '').trim()
  }
  const raw = el.dataset.counterRaw
  // Aceita: 120, 1.200, 12,5, +87, 98%, 3x, R$ 1.200
  const match = raw.match(/^(\D*?)([\d]+(?:[.,]\d+)?)(\D*)$/)
  if (!match) return

  const [, prefix, numStr, suffix] = match
  // Separador decimal só conta se houver 1 ou 2 dígitos depois dele.
  const decMatch = numStr.match(/[.,](\d{1,2})$/)
  const decimals = decMatch ? decMatch[1].length : 0
  const target = parseFloat(numStr.replace(/[.,](?=\d{3}\b)/g, '').replace(',', '.'))
  if (!isFinite(target)) return

  const hasThousands = /\d[.,]\d{3}\b/.test(numStr)
  const obj = { v: 0 }

  const render = () => {
    const n = decimals
      ? obj.v.toFixed(decimals).replace('.', ',')
      : hasThousands
        ? Math.round(obj.v).toLocaleString('pt-BR')
        : String(Math.round(obj.v))
    el.textContent = `${prefix}${n}${suffix}`
  }

  // Criado dentro do gsap.context() do effect, então é revertido junto.
  gsap.to(obj, {
    v: target,
    duration: 1.6,
    ease: 'power2.out',
    onUpdate: render,
    // Garante o valor exato no fim (sem erro de arredondamento).
    onComplete: () => { el.textContent = raw },
    scrollTrigger: { trigger: el, start: 'top 88%', once: true },
  })
}

export default function GsapAnimations() {
  const pathname = usePathname()
  const navRef = useRef<{ last: number; hidden: boolean }>({ last: 0, hidden: false })

  useIsomorphicLayoutEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      // Sem animação: garante tudo visível e sai.
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
      return
    }

    document.documentElement.classList.add('gsap-ready')

    // Limpezas que o gsap.context() não cobre (listeners, nós criados à mão).
    const cleanups: Array<() => void> = []

    const ctx = gsap.context(() => {
      /* O GSAP avisa no console quando recebe uma lista vazia — nem toda
         página tem todos os blocos, então filtramos antes de animar. */
      const pick = (root: ParentNode, sel: string): HTMLElement[] =>
        Array.from(root.querySelectorAll<HTMLElement>(sel))

      /* ---------- HERO: timeline de entrada ---------- */
      const hero = document.querySelector<HTMLElement>('#hero')
      if (hero) {
        const title = hero.querySelector<HTMLElement>('.hero-title')
        const words = title ? splitWords(title) : []

        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

        const add = (sel: string, vars: gsap.TweenVars, pos?: string) => {
          const targets = pick(hero, sel)
          if (targets.length) tl.from(targets, vars, pos)
        }

        add('.hero-badge, .tag', { y: 18, opacity: 0, duration: .6, stagger: .08 })

        if (words.length) {
          tl.from(words, {
            yPercent: 60, opacity: OPACITY_FLOOR, duration: .8,
            stagger: { each: .04, from: 'start' },
          }, '-=.3')
        }

        add('.hero-geo, .hero-desc, .hero-actions, .hero-trust',
          { y: 24, opacity: 0, duration: .7, stagger: .1 }, '-=.5')

        /* Os badges flutuantes têm a própria entrada, logo abaixo — se
           entrassem também por `.hero-visual > *`, dois `from` sobrepostos
           no mesmo alvo fariam o segundo capturar o valor no meio da
           animação como destino, e eles ficariam invisíveis. */
        add('.hero-visual > *:not(.floating-badge):not(.hero-metrics-card):not(.hero-price-badge)',
          { y: 40, opacity: 0, scale: .96, duration: 1, stagger: .12 }, '-=.9')

        add('.floating-badge, .hero-metrics-card, .hero-price-badge',
          { y: 16, opacity: 0, scale: .9, duration: .5, stagger: .1 }, '-=.4')

        /* Parallax suave do visual do hero */
        const visual = hero.querySelector('.hero-visual')
        if (visual) {
          gsap.to(visual, {
            yPercent: 12, ease: 'none',
            scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
          })
        }
        /* O conteúdo textual sobe um pouco mais devagar e desaparece */
        const heroText = hero.querySelector('.hero-grid > *:first-child')
        if (heroText) {
          gsap.to(heroText, {
            yPercent: -6, opacity: .25, ease: 'none',
            scrollTrigger: { trigger: hero, start: 'center top', end: 'bottom top', scrub: true },
          })
        }
      }

      /* ---------- TÍTULOS DE SEÇÃO: reveal por palavra ---------- */
      document.querySelectorAll<HTMLElement>(
        'h2.section-title, .page-hero-title, .cta-box h2, .cmp-cta-box h2'
      ).forEach((title) => {
        const words = splitWords(title)
        if (!words.length) return
        gsap.from(words, {
          yPercent: 40, opacity: OPACITY_FLOOR, duration: .7, ease: 'power3.out',
          stagger: .035,
          scrollTrigger: { trigger: title, start: 'top 95%', once: true },
        })
      })

      /* ---------- SUBTÍTULOS E TEXTOS DE APOIO ---------- */
      gsap.utils.toArray<HTMLElement>('p.section-sub, .page-hero-sub, .cta-box p, .cmp-cta-box p')
        .forEach((el) => {
          gsap.from(el, {
            y: 18, opacity: OPACITY_FLOOR, duration: .6, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 95%', once: true },
          })
        })

      /* ---------- CARDS: entrada em stagger por grade ---------- */
      const CARD_GROUPS = [
        '.services-grid', '.maintenance-grid', '.pricing-grid', '.testimonials-grid',
        '.portfolio-grid', '.blog-grid', '.indicacao-grid', '.process-steps',
        '.home-services-grid', '.home-benefits-grid', '.home-testi-grid',
        '.cmp-diffs-grid', '.faq-list', '.why-items', '.mini-cards', '.contact-details',
      ]
      CARD_GROUPS.forEach((sel) => {
        document.querySelectorAll<HTMLElement>(sel).forEach((grid) => {
          const items = Array.from(grid.children) as HTMLElement[]
          if (!items.length) return
          gsap.from(items, {
            y: 46, opacity: 0, duration: .8, ease: 'power3.out',
            stagger: .07,
            scrollTrigger: { trigger: grid, start: 'top 92%', once: true },
            // popular tem scale(1.03) no CSS — não sobrescrever a transform final
            clearProps: 'transform,opacity',
          })
        })
      })

      /* ---------- BLOCOS SOLTOS ---------- */
      gsap.utils.toArray<HTMLElement>(
        '.metrics-card, .contact-form, .cta-box, .cmp-cta-box, .cmp-honest-box, .indicacao-cta, .blog-post-cta, .cmp-table-wrap'
      ).forEach((el) => {
        gsap.from(el, {
          y: 34, opacity: 0, duration: .8, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          clearProps: 'transform,opacity',
        })
      })

      /* ---------- BARRAS DE MÉTRICA ---------- */
      gsap.utils.toArray<HTMLElement>('.metric-bar').forEach((bar) => {
        const finalWidth = bar.style.width || getComputedStyle(bar).width
        gsap.fromTo(bar,
          { width: 0 },
          {
            width: finalWidth, duration: 1.4, ease: 'power2.out',
            scrollTrigger: { trigger: bar, start: 'top 90%', once: true },
          }
        )
      })

      /* ---------- CONTADORES ---------- */
      const counters = pick(document,
        '.mini-card strong, .metric-val, .indicacao-reward')
      counters.forEach((el) => animateCounter(el))
      // Se o effect for desmontado no meio, devolve o número final.
      cleanups.push(() => {
        counters.forEach((el) => {
          if (el.dataset.counterRaw !== undefined) el.textContent = el.dataset.counterRaw
        })
      })

      /* ---------- HOVER MAGNÉTICO 3D NOS CARDS ---------- */
      const magnetic = document.querySelectorAll<HTMLElement>(
        '.service-card, .price-card, .testi-card, .portfolio-card, .blog-card, .home-service-card, .cmp-diff-card, .indicacao-card'
      )
      // Só em ponteiro fino (mouse) — em toque não faz sentido e atrapalha.
      const finePointer = window.matchMedia('(pointer: fine)').matches
      if (finePointer) {
        magnetic.forEach((card) => {
          card.classList.add('magnetic')
          const move = (e: MouseEvent) => {
            const r = card.getBoundingClientRect()
            const px = (e.clientX - r.left) / r.width - .5
            const py = (e.clientY - r.top) / r.height - .5
            gsap.to(card, {
              rotateY: px * 7, rotateX: -py * 7, duration: .5,
              ease: 'power2.out', transformPerspective: 900, overwrite: 'auto',
            })
          }
          const leave = () => {
            gsap.to(card, { rotateY: 0, rotateX: 0, duration: .6, ease: 'power3.out', overwrite: 'auto' })
          }
          card.addEventListener('mousemove', move)
          card.addEventListener('mouseleave', leave)
          cleanups.push(() => {
            card.removeEventListener('mousemove', move)
            card.removeEventListener('mouseleave', leave)
          })
        })
      }

      /* ---------- FLUTUAÇÃO CONTÍNUA DOS BADGES DO HERO ----------
         Cada um com duração e defasagem própria, senão sobem e descem
         em bloco e parece um único elemento. */
      pick(document, '.floating-badge, .hero-metrics-card, .hero-price-badge')
        .forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 === 0 ? -9 : 9,
            duration: 2.6 + i * .45,
            delay: 2.4 + i * .2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true,
          })
        })

      /* ---------- BOTOES ----------
         Cada familia tem um efeito proprio, em vez de todos iguais:
         preenchidos ganham brilho que atravessa, contornados ganham um
         preenchimento suave, e todos respondem ao toque e ao clique. */
      const FILLED = '.btn-primary, .form-submit, .btn-plan-fill, .launch-banner-btn'
      const OUTLINED = '.btn-outline, .btn-plan-outline, .nav-cta'

      const on = (el: Element, ev: string, fn: EventListener) => {
        el.addEventListener(ev, fn)
        cleanups.push(() => el.removeEventListener(ev, fn))
      }

      pick(document, FILLED + ', ' + OUTLINED).forEach((btn) => {
        const outlined = btn.matches(OUTLINED)
        btn.classList.add('btn-fx')
        if (outlined) btn.classList.add('btn-fx--outline')

        /* 1. Afunda ao pressionar e volta com elastico. Vale no toque
              tambem - e o unico retorno tatil que o mobile tem. */
        const press = () => gsap.to(btn, { scale: .96, duration: .12, ease: 'power2.out', overwrite: 'auto' })
        const release = () => gsap.to(btn, { scale: 1, duration: .55, ease: 'elastic.out(1,.45)', overwrite: 'auto' })
        on(btn, 'pointerdown', press)
        on(btn, 'pointerup', release)
        on(btn, 'pointercancel', release)
        on(btn, 'pointerleave', release)

        /* 2. Onda a partir de onde o dedo/cursor tocou */
        on(btn, 'pointerdown', ((e: PointerEvent) => {
          const r = btn.getBoundingClientRect()
          const px = e.clientX - r.left
          const py = e.clientY - r.top
          gsap.set(btn, {
            '--fx-x': px + 'px',
            '--fx-y': py + 'px',
            '--fx-ripple': 0,
            '--fx-ripple-o': 1,
          })
          // A escala precisa cobrir o canto mais distante do ponto clicado.
          const reach = Math.hypot(
            Math.max(px, r.width - px),
            Math.max(py, r.height - py),
          )
          gsap.to(btn, {
            '--fx-ripple': reach / 9,
            '--fx-ripple-o': 0,
            duration: .65, ease: 'power2.out', overwrite: 'auto',
          })
        }) as EventListener)

        if (finePointer) {
          /* 3. Brilho atravessando no hover */
          on(btn, 'mouseenter', () => {
            gsap.fromTo(btn,
              { '--fx-shine': '-130%' },
              { '--fx-shine': '130%', duration: .75, ease: 'power2.inOut', overwrite: 'auto' })
          })

          /* 4. Magnetico, mais contido nos contornados */
          const pull = outlined ? 5 : 9
          on(btn, 'mousemove', ((e: MouseEvent) => {
            const r = btn.getBoundingClientRect()
            gsap.to(btn, {
              x: ((e.clientX - r.left) / r.width - .5) * pull,
              y: ((e.clientY - r.top) / r.height - .5) * (pull * .6),
              duration: .4, ease: 'power2.out', overwrite: 'auto',
            })
          }) as EventListener)
          on(btn, 'mouseleave', () => {
            gsap.to(btn, { x: 0, y: 0, duration: .5, ease: 'elastic.out(1,.5)', overwrite: 'auto' })
          })

          /* 5. O icone acompanha: o raio pulsa, os demais deslizam */
          const icon = btn.querySelector('svg')
          if (icon) {
            const bolt = !!icon.querySelector('path[d^="M13 2"]')
            on(btn, 'mouseenter', () => {
              gsap.to(icon, bolt
                ? { scale: 1.25, rotate: -8, duration: .35, ease: 'back.out(3)', overwrite: 'auto' }
                : { x: 3, duration: .35, ease: 'power2.out', overwrite: 'auto' })
            })
            on(btn, 'mouseleave', () => {
              gsap.to(icon, { scale: 1, rotate: 0, x: 0, duration: .4, ease: 'power2.out', overwrite: 'auto' })
            })
          }
        }
      })

      /* ---------- SETAS DESLIZANDO ----------
         Separa a seta final do texto para ela andar sozinha no hover. */
      pick(document, 'a, span, button').forEach((el) => {
        if (el.dataset.arrow === 'done') return
        const last = el.lastChild
        if (!last || last.nodeType !== Node.TEXT_NODE) return
        const txt = last.textContent ?? ''
        const i = txt.lastIndexOf(ARROW)
        if (i === -1 || txt.slice(i + 1).trim() !== '') return

        last.textContent = txt.slice(0, i)
        const arrow = document.createElement('span')
        arrow.className = 'anim-arrow'
        arrow.textContent = ARROW
        el.appendChild(arrow)
        el.dataset.arrow = 'done'

        if (!finePointer) return
        const target = el.closest('a, button') ?? el
        on(target, 'mouseenter', () => {
          gsap.to(arrow, { x: 5, duration: .3, ease: 'power2.out', overwrite: 'auto' })
        })
        on(target, 'mouseleave', () => {
          gsap.to(arrow, { x: 0, duration: .4, ease: 'elastic.out(1,.6)', overwrite: 'auto' })
        })
      })

      /* ---------- CTA PRINCIPAL: respiro ocasional ----------
         Chama atencao sem piscar sem parar. Pausa enquanto o mouse esta
         em cima, para nao brigar com o hover. */
      const mainCta = document.querySelector<HTMLElement>('#hero .btn-primary')
      if (mainCta) {
        const breathe = gsap.timeline({ repeat: -1, repeatDelay: 5, delay: 4 })
        breathe
          .to(mainCta, { scale: 1.04, duration: .5, ease: 'power2.out' })
          .to(mainCta, { scale: 1, duration: .8, ease: 'elastic.out(1,.4)' })
        on(mainCta, 'mouseenter', () => breathe.pause())
        on(mainCta, 'mouseleave', () => breathe.play())
      }

      /* ---------- WHATSAPP: chacoalhada periodica ---------- */
      const wa = document.querySelector<HTMLElement>('.whatsapp-float svg')
      if (wa) {
        gsap.timeline({ repeat: -1, repeatDelay: 7, delay: 6 })
          .to(wa, { rotate: 14, duration: .1 })
          .to(wa, { rotate: -12, duration: .1 })
          .to(wa, { rotate: 9, duration: .1 })
          .to(wa, { rotate: -6, duration: .1 })
          .to(wa, { rotate: 0, duration: .15 })
      }

      /* ---------- CAPAS: revelação por clip-path ---------- */
      pick(document, '.portfolio-cover, .blog-cover, .blog-post-cover').forEach((cover) => {
        gsap.from(cover, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 1, ease: 'power3.inOut',
          scrollTrigger: { trigger: cover, start: 'top 88%', once: true },
          clearProps: 'clipPath',
        })
      })

      /* ---------- ESTRELAS DOS DEPOIMENTOS ---------- */
      pick(document, '.stars').forEach((box) => {
        // Divide em caracteres para escaloná-los um a um.
        if (box.dataset.starsSplit !== 'done') {
          const chars = Array.from(box.textContent ?? '').filter((c) => c.trim())
          if (chars.length) {
            box.textContent = ''
            chars.forEach((c) => {
              const s = document.createElement('span')
              s.className = 'anim-star'
              s.textContent = c
              box.appendChild(s)
            })
            box.dataset.starsSplit = 'done'
          }
        }
        const stars = box.querySelectorAll('.anim-star')
        if (!stars.length) return
        gsap.from(stars, {
          scale: 0, opacity: 0, rotate: -110,
          duration: .5, ease: 'back.out(2.2)', stagger: .07,
          scrollTrigger: { trigger: box, start: 'top 92%', once: true },
        })
      })

      /* ---------- LOGOS DAS TECNOLOGIAS ---------- */
      const logosTrack = document.querySelector('.logos-track')
      if (logosTrack) {
        const items = pick(logosTrack, '.logo-item-wrap')
        if (items.length) {
          gsap.from(items, {
            y: 22, opacity: 0, scale: .9, duration: .6,
            ease: 'back.out(1.6)', stagger: .05,
            scrollTrigger: { trigger: logosTrack, start: 'top 88%', once: true },
            clearProps: 'all',
          })
        }
      }

      /* ---------- RODAPÉ EM CASCATA ---------- */
      const footer = document.querySelector('footer')
      if (footer) {
        const cols = pick(footer, '.footer-brand, .footer-col')
        if (cols.length) {
          gsap.from(cols, {
            y: 30, opacity: 0, duration: .7, ease: 'power3.out', stagger: .1,
            scrollTrigger: { trigger: footer, start: 'top 92%', once: true },
            clearProps: 'all',
          })
        }
      }

      /* ---------- LUZ QUE SEGUE O CURSOR NO HERO ---------- */
      if (hero && finePointer) {
        const spot = document.createElement('div')
        spot.className = 'hero-spotlight'
        hero.appendChild(spot)
        const qx = gsap.quickTo(spot, 'x', { duration: .6, ease: 'power3.out' })
        const qy = gsap.quickTo(spot, 'y', { duration: .6, ease: 'power3.out' })
        let shown = false
        const onMove = (e: MouseEvent) => {
          const r = hero.getBoundingClientRect()
          qx(e.clientX - r.left)
          qy(e.clientY - r.top)
          if (!shown) { shown = true; gsap.to(spot, { opacity: 1, duration: .5 }) }
        }
        const onLeave = () => { shown = false; gsap.to(spot, { opacity: 0, duration: .5 }) }
        hero.addEventListener('mousemove', onMove)
        hero.addEventListener('mouseleave', onLeave)
        cleanups.push(() => {
          hero.removeEventListener('mousemove', onMove)
          hero.removeEventListener('mouseleave', onLeave)
          spot.remove()
        })
      }

      /* ---------- BARRA DE PROGRESSO DE SCROLL ---------- */
      const bar = document.createElement('div')
      bar.className = 'scroll-progress'
      document.body.appendChild(bar)
      gsap.to(bar, {
        scaleX: 1, ease: 'none',
        scrollTrigger: { start: 0, end: 'max', scrub: .3 },
      })
      cleanups.push(() => bar.remove())

      /* ---------- NAVBAR INTELIGENTE ---------- */
      const nav = document.querySelector<HTMLElement>('nav')
      if (nav) {
        navRef.current.last = window.scrollY
        const onScroll = () => {
          const y = window.scrollY
          const down = y > navRef.current.last
          const past = y > 220
          // Não esconde com o menu mobile aberto.
          const menuOpen = !!nav.querySelector('.nav-links.open')

          if (down && past && !navRef.current.hidden && !menuOpen) {
            navRef.current.hidden = true
            gsap.to(nav, { yPercent: -100, duration: .4, ease: 'power2.out' })
          } else if ((!down || !past) && navRef.current.hidden) {
            navRef.current.hidden = false
            gsap.to(nav, { yPercent: 0, duration: .4, ease: 'power2.out' })
          }
          navRef.current.last = y
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        cleanups.push(() => {
          window.removeEventListener('scroll', onScroll)
          gsap.set(nav, { yPercent: 0 })
        })
      }

      /* ---------- BRILHOS AMBIENTAIS EM PARALLAX ---------- */
      gsap.utils.toArray<HTMLElement>('#services, #why, #pricing, #faq, #process, #testimonials, #contact')
        .forEach((section) => {
          gsap.fromTo(section,
            { backgroundPositionY: '0%' },
            {
              backgroundPositionY: '18%', ease: 'none',
              scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: true },
            }
          )
        })

      ScrollTrigger.refresh()
    })

    return () => {
      cleanups.forEach((fn) => fn())
      ctx.revert()
      document.documentElement.classList.remove('gsap-ready')
    }
  }, [pathname])

  /* Recalcula posições quando fontes/imagens terminam de carregar. */
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => window.removeEventListener('load', refresh)
  }, [pathname])

  return null
}
