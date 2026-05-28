'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/servicos',     label: 'Serviços'       },
  { href: '/precos',       label: 'Preços'          },
  { href: '/comparativo',  label: 'Comparativo'     },
  { href: '/depoimentos',  label: 'Depoimentos'     },
  { href: '/faq',          label: 'FAQ'             },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <nav style={{ background: scrolled ? 'rgba(6,6,26,.95)' : 'rgba(6,6,26,.75)' }}>
      <div className="nav-inner">
        <Link href="/" className="logo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Logo.svg" alt="KodaForge" />
        </Link>

        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className={pathname === l.href ? 'active' : ''}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contato" className="nav-cta" onClick={() => setMenuOpen(false)}>
          Solicitar orçamento
        </Link>

        <div
          className="hamburger"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </div>
      </div>
    </nav>
  )
}
