import Link from 'next/link'

const LINKS = {
  Serviços: [
    { href: '/servicos', label: 'Criação de sites' },
    { href: '/servicos', label: 'Redesign' },
    { href: '/servicos', label: 'E-commerce' },
    { href: '/servicos', label: 'Manutenção mensal' },
    { href: '/precos',   label: 'Ver preços' },
  ],
  Empresa: [
    { href: '/comparativo', label: 'Comparativo'  },
    { href: '/depoimentos', label: 'Depoimentos'  },
    { href: '/faq',         label: 'FAQ'          },
    { href: '/contato',     label: 'Contato'      },
  ],
  Suporte: [
    { href: '/faq',     label: 'Central de ajuda' },
    { href: '/contato', label: 'Solicitar orçamento' },
    { href: '#',        label: 'Política de privacidade' },
    { href: '#',        label: 'Termos de uso' },
  ],
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="logo logo-text logo-footer">
              <span className="logo-koda">Koda</span><span className="logo-forge">Forge</span>
            </Link>
            <p>
              Criamos sites que convertem — do design ao deploy,
              com excelência e comprometimento.
            </p>
            <div className="footer-social">
              <a href="#" className="soc-btn" title="Instagram">📸</a>
              <a href="#" className="soc-btn" title="LinkedIn">💼</a>
              <a
                href="https://wa.me/5542991250274"
                className="soc-btn"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                💬
              </a>
              <a href="#" className="soc-btn" title="Behance">🎨</a>
            </div>
          </div>

          {/* Columns */}
          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title} className="footer-col">
              <h5>{title}</h5>
              <ul>
                {items.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p>© 2026 KodaForge. Todos os direitos reservados.</p>
          <p>Feito com ♥ para negócios que querem crescer</p>
        </div>
      </div>
    </footer>
  )
}
