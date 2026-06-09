'use client'

/**
 * Hero — Scroll-Driven Cinematic Background
 * UI/UX Pro Max: Scroll-Triggered Storytelling + Video-First + Motion-Driven
 *
 * Layout:
 *   #hero  → 300vh tall  (gives scroll room)
 *   .hero-sticky → position: sticky; top: 0; height: 100vh  (pins during scroll)
 *   .hero-bg-canvas (HeroScrollCanvas) → absolute full-screen, frame follows scroll
 *   .hero-bg-overlay → dark gradient over canvas, keeps text legible
 *   .hero-content-layer → the actual grid (left: copy, right: code editor)
 */

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import HeroScrollCanvas from './HeroScrollCanvas'

const STATS = [
  { target: 120, suffix: '+',  label: 'Projetos entregues' },
  { target: 100, suffix: '%',  label: 'Clientes satisfeitos' },
  { target: 24,  suffix: 'h',  label: 'Resposta média', prefix: '<' },
]

/* ── Code lines displayed in the editor mock ── */
const CODE_LINES = [
  { indent: 0, tokens: [{ t: 'keyword', v: 'const' }, { t: 'name', v: ' forge' }, { t: 'op', v: ' =' }, { t: 'fn', v: ' createWebsite' }, { t: 'plain', v: '({' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'client' },  { t: 'op', v: ':' }, { t: 'str', v: ' "sua empresa"' },  { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'stack' },   { t: 'op', v: ':' }, { t: 'arr', v: ' [' }, { t: 'str', v: '"Next.js"' }, { t: 'plain', v: ', ' }, { t: 'str', v: '"TypeScript"' }, { t: 'arr', v: ']' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'seo' },     { t: 'op', v: ':' }, { t: 'bool', v: ' true' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'speed' },   { t: 'op', v: ':' }, { t: 'num', v: ' 98' }, { t: 'plain', v: ',' }] },
  { indent: 1, tokens: [{ t: 'prop', v: 'design' },  { t: 'op', v: ':' }, { t: 'str', v: ' "premium"' }, { t: 'plain', v: ',' }] },
  { indent: 0, tokens: [{ t: 'plain', v: '})' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'comment', v: '// Resultado garantido ✓' }] },
  { indent: 0, tokens: [{ t: 'keyword', v: 'await' }, { t: 'name', v: ' forge' }, { t: 'plain', v: '.' }, { t: 'fn', v: 'deploy' }, { t: 'plain', v: '()' }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ t: 'comment', v: '// ✅ Online em tempo recorde' }] },
]

const TOKEN_COLORS: Record<string, string> = {
  keyword: '#c792ea',
  name:    '#82aaff',
  op:      '#89ddff',
  fn:      '#82aaff',
  prop:    '#f07178',
  str:     '#c3e88d',
  num:     '#f78c6c',
  bool:    '#ff9cac',
  arr:     '#89ddff',
  comment: '#546e7a',
  plain:   '#d4d4d4',
}

export default function Hero() {
  const [counts, setCounts]     = useState(STATS.map(() => 0))
  const [typedLines, setTyped]  = useState(0)   // code-typing effect
  const heroRef  = useRef<HTMLElement>(null)
  const counted  = useRef(false)

  /* animated counters on scroll into view */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted.current) {
          counted.current = true
          STATS.forEach(({ target }, i) => {
            let current = 0
            const step  = Math.ceil(target / 40)
            const timer = setInterval(() => {
              current = Math.min(current + step, target)
              setCounts((prev) => { const n = [...prev]; n[i] = current; return n })
              if (current >= target) clearInterval(timer)
            }, 35)
          })
        }
      },
      { threshold: 0.3 },
    )
    const el = heroRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  /* code typing effect — reveal lines one by one */
  useEffect(() => {
    if (typedLines >= CODE_LINES.length) return
    const t = setTimeout(() => setTyped((n) => n + 1), typedLines === 0 ? 800 : 160)
    return () => clearTimeout(t)
  }, [typedLines])

  return (
    <section id="hero" ref={heroRef}>

      {/* ── Sticky wrapper — pins at top while scrolling 300vh ── */}
      <div className="hero-sticky">

        {/* 🎬 Scroll-driven video background (sprite sheet driven by scroll) */}
        <HeroScrollCanvas />

        {/* dark gradient overlay — keeps text readable over vivid frames */}
        <div className="hero-bg-overlay" aria-hidden="true" />

        {/* ambient blobs (subtle — mostly covered by canvas) */}
        <div className="blob" aria-hidden="true" />
        <div className="blob" aria-hidden="true" />

        {/* ── foreground content ── */}
        <div className="hero-content-layer">
          <div className="container">
            <div className="hero-grid">

              {/* ══ LEFT — copy ════════════════════════════════════ */}
              <div className="hero-content reveal">

                {/* social-proof bar */}
                <div className="hero-social-proof">
                  <span className="hero-stars">★★★★★</span>
                  <span className="hero-rating-text">
                    4.9 · <strong>120+ projetos</strong> entregues
                  </span>
                </div>

                <h1 className="hero-title">
                  Sites que vendem,<br />
                  <span>não só que existem</span>
                </h1>

                <p className="hero-desc">
                  Criamos, redesenhamos e mantemos sites com foco em conversão,
                  desempenho e identidade visual. Sem enrolação — do briefing ao ar
                  em tempo recorde.
                </p>

                <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
                  <Link href="/contato" className="btn-primary">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    Quero meu site agora
                  </Link>
                  <Link href="/precos" className="btn-outline">
                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <path d="M8 21h8M12 17v4" />
                    </svg>
                    Ver planos e preços
                  </Link>
                </div>

                {/* geo trust */}
                <p className="hero-geo">
                  Agência de criação de sites em Guarapuava, PR — atendemos todo o Brasil.
                </p>

                {/* micro trust signals */}
                <div className="hero-trust">
                  <span>✓ Orçamento gratuito</span>
                  <span>✓ Sem compromisso</span>
                  <span>✓ Resposta em até 24 h</span>
                </div>

                {/* animated counters */}
                <div className="hero-stats">
                  {STATS.map(({ suffix, label, prefix }, i) => (
                    <div className="hero-stat" key={label}>
                      <strong>{prefix ?? ''}{counts[i]}{suffix}</strong>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ══ RIGHT — code editor mock ════════════════════════ */}
              <div className="hero-visual reveal">

                {/* top badge */}
                <div className="floating-badge fb-1">
                  <div className="fb-dot" />
                  Forjando seu site
                </div>

                {/* ── Code editor window ── */}
                <div className="code-editor-window">
                  {/* title bar */}
                  <div className="ced-titlebar">
                    <span className="ced-dot red"   />
                    <span className="ced-dot yellow" />
                    <span className="ced-dot green"  />
                    <span className="ced-filename">kodaforge.ts</span>
                    <span className="ced-lang">TypeScript</span>
                  </div>

                  {/* code body */}
                  <div className="ced-body" aria-label="Exemplo de código KodaForge">
                    {CODE_LINES.slice(0, typedLines).map((line, li) => (
                      <div key={li} className="ced-line">
                        <span className="ced-ln">{li + 1}</span>
                        <span style={{ paddingLeft: `${line.indent * 1.5}em` }}>
                          {line.tokens.map((tk, ti) => (
                            <span key={ti} style={{ color: TOKEN_COLORS[tk.t] ?? '#d4d4d4' }}>
                              {tk.v}
                            </span>
                          ))}
                          {/* blinking cursor on last visible line */}
                          {li === typedLines - 1 && typedLines < CODE_LINES.length && (
                            <span className="ced-cursor" />
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* status bar */}
                  <div className="ced-statusbar">
                    <span className="ced-status-dot" />
                    <span>TypeScript · UTF-8</span>
                    <span className="ced-status-right">KodaForge v2.0</span>
                  </div>
                </div>

                {/* bottom badge */}
                <div className="floating-badge fb-2">
                  ⚡ PageSpeed 98 · SEO 100
                </div>

                {/* metrics card */}
                <div className="hero-metrics-card">
                  <div className="hmc-row">
                    <span className="hmc-dot green" />
                    <span className="hmc-label">Conversão</span>
                    <div className="hmc-bar">
                      <div className="hmc-fill" style={{ width: '78%', background: '#10b981' }} />
                    </div>
                    <span className="hmc-val">+78%</span>
                  </div>
                  <div className="hmc-row">
                    <span className="hmc-dot purple" />
                    <span className="hmc-label">Tráfego</span>
                    <div className="hmc-bar">
                      <div className="hmc-fill" style={{ width: '92%', background: '#a855f7' }} />
                    </div>
                    <span className="hmc-val">+92%</span>
                  </div>
                  <div className="hmc-row">
                    <span className="hmc-dot blue" />
                    <span className="hmc-label">Leads</span>
                    <div className="hmc-bar">
                      <div className="hmc-fill" style={{ width: '65%', background: '#38bdf8' }} />
                    </div>
                    <span className="hmc-val">+65%</span>
                  </div>
                </div>

              </div>{/* end .hero-visual */}
            </div>
          </div>
        </div>{/* end .hero-content-layer */}

        {/* scroll hint arrow */}
        <div className="hero-scroll-hint" aria-hidden="true">
          <span>scroll</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <path d="M8 4v16M4 16l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

      </div>{/* end .hero-sticky */}
    </section>
  )
}
