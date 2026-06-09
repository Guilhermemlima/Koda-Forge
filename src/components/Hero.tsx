'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import SpriteCanvas from './SpriteCanvas'

const STATS = [
  { target: 120, suffix: '+',  label: 'Projetos entregues' },
  { target: 100, suffix: '%',  label: 'Clientes satisfeitos' },
  { target: 24,  suffix: 'h',  label: 'Resposta média', prefix: '<' },
]

export default function Hero() {
  const [counts, setCounts] = useState(STATS.map(() => 0))
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
      { threshold: 0.5 },
    )
    const el = heroRef.current
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="hero" ref={heroRef}>
      <div className="blob" />
      <div className="blob" />

      <div className="container">
        <div className="hero-grid">

          {/* ══ LEFT — copy ══════════════════════════════════ */}
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

          {/* ══ RIGHT — sprite canvas animation ═════════════ */}
          <div className="hero-visual reveal">

            {/* top badge */}
            <div className="floating-badge fb-1">
              <div className="fb-dot" />
              Forjando seu site
            </div>

            {/* 🎬 Sprite sheet animation — hammer × anvil */}
            <SpriteCanvas />

            {/* brand sub-label */}
            <div className="canvas-brand-label" aria-hidden="true">
              <span className="cbl-dot" />
              Precisão · Performance · Código
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

          </div>
        </div>
      </div>
    </section>
  )
}
