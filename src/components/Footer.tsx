import Link from 'next/link'
import { MessageCircle, Mail, Phone, MapPin } from 'lucide-react'
import {
  PHONE_DISPLAY, PHONE_HREF, WHATSAPP_NUMBER, EMAIL,
  CITY, STATE, ADDRESS_LINE, NEIGHBORHOOD, POSTAL_CODE, MAPS_LINK,
} from '@/lib/site'

// Instagram SVG (lucide-react v1 não inclui este ícone)
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

const LINKS = {
  Serviços: [
    { href: '/servicos', label: 'Criação de sites' },
    { href: '/servicos', label: 'Redesign' },
    { href: '/servicos', label: 'E-commerce' },
    { href: '/servicos', label: 'Manutenção mensal' },
    { href: '/precos',   label: 'Ver preços' },
  ],
  Empresa: [
    { href: '/portfolio',   label: 'Portfólio'    },
    { href: '/comparativo', label: 'Comparativo'  },
    { href: '/depoimentos', label: 'Depoimentos'  },
    { href: '/faq',         label: 'FAQ'          },
    { href: '/contato',     label: 'Contato'      },
  ],
  Suporte: [
    { href: '/faq',        label: 'Central de ajuda' },
    { href: '/contato',    label: 'Solicitar orçamento' },
    { href: '/indicacao',  label: 'Indique e Ganhe' },
    { href: '/blog',       label: 'Blog' },
    { href: '/politica-de-privacidade', label: 'Política de privacidade' },
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
            {/* Telefone visível e clicável: o diagnóstico apontou a falta
                dele tanto em conversão quanto em SEO local. */}
            <p className="footer-contact">
              <a href={PHONE_HREF}>
                <Phone size={14} strokeWidth={2} /> {PHONE_DISPLAY}
              </a>
              <a href={MAPS_LINK} target="_blank" rel="noopener noreferrer" className="footer-address">
                <MapPin size={14} strokeWidth={2} />
                <span>
                  {ADDRESS_LINE} — {NEIGHBORHOOD}<br />
                  {CITY}, {STATE} · {POSTAL_CODE}
                </span>
              </a>
              <span className="footer-city">Atendemos todo o Brasil</span>
            </p>
            <div className="footer-social">
              <a
                href="https://www.instagram.com/kodaforge/"
                className="soc-btn"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                className="soc-btn"
                title="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} strokeWidth={1.75} />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="soc-btn"
                title="E-mail"
              >
                <Mail size={18} strokeWidth={1.75} />
              </a>
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
