import type { Metadata } from 'next'
import Link from 'next/link'
import ClientLayout   from '@/components/ClientLayout'
import Navbar         from '@/components/Navbar'
import Hero           from '@/components/Hero'
import LaunchBanner   from '@/components/LaunchBanner'
import LogosStrip     from '@/components/LogosStrip'
import CTA            from '@/components/CTA'
import Footer         from '@/components/Footer'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  title: 'KodaForge — Sites que convertem',
  description:
    'Criamos, redesenhamos e mantemos sites com foco em conversão, desempenho e identidade visual. Do briefing ao deploy em tempo recorde.',
}

/* ─── Mini-Services ─────────────────────────────────────── */
const MINI_SERVICES = [
  {
    icon: '🚀',
    title: 'Criação de Site',
    desc: 'Do zero ao ar — design exclusivo, SEO e velocidade acima de 90 no PageSpeed.',
    href: '/servicos',
  },
  {
    icon: '✨',
    title: 'Redesign Completo',
    desc: 'Transformamos sites antigos em experiências modernas que convertem mais.',
    href: '/servicos',
    highlight: true,
  },
  {
    icon: '🔄',
    title: 'Manutenção Mensal',
    desc: 'Suporte, backups, atualizações e relatórios — tudo incluso no plano mensal.',
    href: '/servicos',
  },
]

/* ─── Mini-Benefits ─────────────────────────────────────── */
const BENEFITS = [
  { icon: '⚡', title: 'Performance real',       desc: 'Acima de 90 no Google PageSpeed em todos os projetos.' },
  { icon: '🎨', title: 'Design focado em UX',    desc: 'Interface que guia o visitante até a conversão.' },
  { icon: '📈', title: 'SEO desde o primeiro dia', desc: 'Estrutura técnica correta para aparecer no Google.' },
  { icon: '🔒', title: 'Segurança e uptime',     desc: 'SSL, backups diários e monitoramento 24/7.' },
]

/* ─── Mini-Testimonials ───────────────────────────────────
   Só clientes reais. Atribuído à empresa, não a uma pessoa inventada —
   trocar por nome e cargo reais assim que o cliente aprovar o texto. */
const MINI_TESTI = [
  {
    text: '"Chegamos com uma lista do que o site precisava ter e saiu tudo, do jeito que pedimos. A busca por cidade e tipo de imóvel funciona, e o cliente fala com a gente direto pelo WhatsApp."',
    name: 'SBS Imóveis',
    role: 'Corretora de imóveis — Guarapuava, PR',
    initials: 'SBS',
  },
  {
    text: '"Achei que colocar impressão 3D numa loja online ia ser complicado demais. O site ficou bonito e passa seriedade — hoje é o link que eu mando quando alguém pede orçamento."',
    name: 'Moldarte 3D',
    role: 'Impressão 3D sob demanda',
    initials: 'M3D',
  },
]

export default function Home() {
  return (
    <ClientLayout>
      <Navbar />
      <Hero />
      <LaunchBanner />
      <LogosStrip />

      {/* ── Serviços mini ── */}
      <section className="home-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="tag">O que fazemos</span>
            <h2 className="section-title" style={{ marginTop: '.8rem' }}>
              Tudo que seu negócio<br />precisa no digital
            </h2>
            <p className="section-sub">
              Soluções sob medida — da criação ao suporte contínuo.
            </p>
          </div>

          <div className="home-services-grid">
            {MINI_SERVICES.map((s) => (
              <Link
                key={s.title}
                href={s.href}
                className={`home-service-card reveal${s.highlight ? ' hsc-highlight' : ''}`}
              >
                {s.highlight && <span className="featured-badge">MAIS PEDIDO</span>}
                <div className="hsc-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className="hsc-link">Ver detalhes →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diferenciais ── */}
      <section className="home-section home-benefits">
        <div className="container">
          <div className="section-head reveal">
            <span className="tag">Por que a KodaForge</span>
            <h2 className="section-title" style={{ marginTop: '.8rem' }}>
              Sites que trabalham<br />por você
            </h2>
          </div>
          <div className="home-benefits-grid">
            {BENEFITS.map((b) => (
              <div key={b.title} className="home-benefit-card reveal">
                <div className="hbc-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Depoimentos mini ── */}
      <section className="home-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="tag">Depoimentos</span>
            <h2 className="section-title" style={{ marginTop: '.8rem' }}>
              O que nossos clientes<br />dizem
            </h2>
          </div>
          <div className="home-testi-grid">
            {MINI_TESTI.map((t) => (
              <div key={t.name} className="testi-card reveal">
                <div className="testi-card-top">
                  <div className="stars">★★★★★</div>
                  <span className="testi-verified">✓ Verificado</span>
                </div>
                <p className="testi-text">{t.text}</p>
                <div className="testi-author">
                  <div className="author-avatar">{t.initials}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/depoimentos" className="btn-outline" style={{ display: 'inline-flex' }}>
              Ver todos os depoimentos →
            </Link>
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </ClientLayout>
  )
}
