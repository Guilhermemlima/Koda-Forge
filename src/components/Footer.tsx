const LINKS = {
  Serviços: [
    { href: '#services', label: 'Criação de sites' },
    { href: '#services', label: 'Redesign' },
    { href: '#services', label: 'E-commerce' },
    { href: '#services', label: 'Manutenção' },
    { href: '#services', label: 'SEO' },
  ],
  Empresa: [
    { href: '#why',          label: 'Sobre nós' },
    { href: '#testimonials', label: 'Portfólio' },
    { href: '#testimonials', label: 'Depoimentos' },
    { href: '#contact',      label: 'Contato' },
    { href: '#',             label: 'Blog' },
  ],
  Suporte: [
    { href: '#faq', label: 'FAQ' },
    { href: '#',    label: 'Política de privacidade' },
    { href: '#',    label: 'Termos de uso' },
    { href: '#contact', label: 'Área do cliente' },
  ],
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <a href="#" className="logo logo-footer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/Logo.svg" alt="KodaForge" />
            </a>
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
                    <a href={item.href}>{item.label}</a>
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
