'use client'

import { useState, useEffect, useRef } from 'react'

const STATS = [
  { target: 120, suffix: '+', label: 'Projetos entregues' },
  { target: 97,  suffix: '%', label: 'Clientes satisfeitos' },
  { target: 48,  suffix: 'h', label: 'Tempo médio de resposta' },
]

export default function Hero() {
  const [counts, setCounts] = useState(STATS.map(() => 0))
  const heroRef = useRef<HTMLElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !counted.current) {
          counted.current = true
          STATS.forEach(({ target }, i) => {
            let current = 0
            const step = Math.ceil(target / 40)
            const timer = setInterval(() => {
              current = Math.min(current + step, target)
              setCounts((prev) => {
                const next = [...prev]
                next[i] = current
                return next
              })
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
          {/* LEFT — copy */}
          <div className="hero-content reveal">
            <div className="hero-badge">
              <span className="tag">
                <svg viewBox="0 0 12 12" fill="currentColor">
                  <circle cx="6" cy="6" r="6" />
                </svg>
                Mais de 120 projetos entregues
              </span>
            </div>

            <h1 className="hero-title">
              Sites que vendem,<br />
              <span>não só que existem</span>
            </h1>

            <p className="hero-desc">
              Criamos, redesenhamos e mantemos sites com foco em conversão,
              desempenho e identidade visual. Seu negócio merece uma presença
              digital à altura.
            </p>

            <div className="hero-actions">
              <a href="#pricing" className="btn-primary">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Ver planos
              </a>
              <a href="#services" className="btn-outline">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 8v4m0 4h.01" />
                </svg>
                Como funciona
              </a>
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

          {/* RIGHT — browser mock */}
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

            <div className="floating-badge fb-2">
              ⚡ Otimizado para SEO &amp; velocidade
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
