'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#services', label: 'Serviços' },
    { href: '#process', label: 'Como funciona' },
    { href: '#pricing', label: 'Preços' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
  ]

  return (
    <nav style={{ background: scrolled ? 'rgba(6,6,26,.95)' : 'rgba(6,6,26,.75)' }}>
      <div className="nav-inner">
        <a href="#" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo.svg" alt="KodaForge" />
        </a>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>
          Solicitar orçamento
        </a>

        <div
          className="hamburger"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </nav>
  )
}
