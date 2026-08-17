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
      const hero = document.querySelector('#hero')
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
            yPercent: 110, opacity: 0, duration: .9,
            stagger: { each: .045, from: 'start' },
          }, '-=.3')
        }

        add('.hero-social-proof, .hero-geo, .hero-desc, .hero-actions, .hero-trust',
          { y: 24, opacity: 0, duration: .7, stagger: .1 }, '-=.5')

        add('.hero-stat', { y: 20, opacity: 0, duration: .6, stagger: .1 }, '-=.4')

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
          yPercent: 100, opacity: 0, duration: .8, ease: 'power3.out',
          stagger: .04,
          scrollTrigger: { trigger: title, start: 'top 85%', once: true },
        })
      })

      /* ---------- SUBTÍTULOS E TEXTOS DE APOIO ---------- */
      gsap.utils.toArray<HTMLElement>('p.section-sub, .page-hero-sub, .cta-box p, .cmp-cta-box p')
        .forEach((el) => {
          gsap.from(el, {
            y: 20, opacity: 0, duration: .7, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
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
            stagger: .09,
            scrollTrigger: { trigger: grid, start: 'top 82%', once: true },
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
          y: 40, opacity: 0, duration: .9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
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

      /* ---------- CONTADORES ----------
         Fora daqui: .hero-stat strong. O Hero já anima aqueles números via
         estado do React — mexer no textContent brigaria com a reconciliação. */
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
