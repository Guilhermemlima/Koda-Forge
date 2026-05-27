'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

const STATS = [
  { target: 120, suffix: '+', label: 'Projetos entregues' },
  { target: 97,  suffix: '%', label: 'Clientes satisfeitos' },
  { target: 48,  suffix: 'h', label: 'Resposta média' },
]

export default function Hero() {
  const [counts, setCounts] = useState(STATS.map(() => 0))
  const heroRef  = useRef<HTMLElement>(null)
  const counted  = useRef(false)

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
      { threshold: 0.5 }
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

          {/* ── LEFT — copy ── */}
          <div className="hero-content reveal">

            {/* Social proof bar */}
            <div className="hero-social-proof">
              <span className="hero-stars">★★★★★</span>
              <span className="hero-rating-text">4.9 · <strong>120+ projetos</strong> entregues</span>
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

            <div className="hero-actions">
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

            {/* Trust signals */}
            <div className="hero-trust">
              <span>✓ Orçamento gratuito</span>
              <span>✓ Sem compromisso</span>
              <span>✓ Resposta em até 24 h</span>
            </div>

            <div className="hero-stats">
              {STATS.map(({ suffix, label }, i) => (
                <div className="hero-stat" key={label}>
                  <strong>{counts[i]}{suffix}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — browser mock ── */}
          <div className="hero-visual reveal">
            <div className="floating-badge fb-1">
              <div className="fb-dot" />
              Projeto ao vivo
            </div>

            <div className="browser-mock">
              <div className="browser-bar">
                <div className="browser-dots">
                  <span /><span /><span />
                </div>
                <div className="browser-url">seusite.com.br</div>
              </div>
              <div className="browser-body">
                <div className="mock-hero">
                  <div className="mock-hero-text">
                    <div className="mock-bar" />
                    <div className="mock-bar short" />
                  </div>
                </div>
                <div className="mock-cards">
                  <div className="mock-card" />
                  <div className="mock-card" />
                  <div className="mock-card" />
                </div>
                <div className="mock-btn" />
              </div>
            </div>

            {/* Conversion badge */}
            <div className="floating-badge fb-2">
              ⚡ SEO + velocidade acima de 90
            </div>

            {/* Price anchor badge */}
            <div className="hero-price-badge">
              <div className="hpb-from">a partir de</div>
              <div className="hpb-price">R$ 1.497</div>
              <div className="hpb-sub">pagamento único</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
