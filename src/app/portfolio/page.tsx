import type { Metadata } from 'next'
import Link from 'next/link'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Portfólio — KodaForge',
  description: 'Conheça os projetos desenvolvidos pela KodaForge. Sites que geram resultado para negócios reais.',
}

const PROJECTS = [
  {
    slug: 'sbs-imobiliaria',
    name: 'SBS Imóveis',
    segment: 'Imobiliário',
    desc: 'Plataforma de compra, venda e aluguel de imóveis com busca por cidade e tipo, vitrine de oportunidades e contato direto pelo WhatsApp.',
    tags: ['Next.js', 'Busca de imóveis', 'SEO', 'Responsivo'],
    label: 'Projeto Real',
    color: '#c9a24d',
    externalUrl: 'https://www.sbsimobiliaria.com.br/',
    image: '/portfolio/sbs-preview.jpg',
  },
  {
    slug: 'moraes-concreto-e-fundacoes',
    name: 'Moraes Concreto e Fundações',
    segment: 'Construção Civil',
    desc: 'Site institucional completo com apresentação de serviços, área de atuação e captação de orçamentos pelo WhatsApp.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsivo'],
    label: 'Projeto Real',
    color: '#15803d',
    externalUrl: 'https://moraes-concreto-e-fundacoes.vercel.app/index.html',
    image: '/portfolio/moraes-preview.jpg',
  },
  {
    slug: 'clinica-bem-estar',
    name: 'Clínica Bem Estar',
    segment: 'Saúde',
    desc: 'Redesign completo com foco em agendamento online. Aumento de 3x nas consultas em 60 dias.',
    tags: ['Next.js', 'Tailwind', 'SEO'],
    label: 'Projeto Conceitual',
    color: '#7c3aed',
    externalUrl: null,
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80&auto=format&fit=crop',
  },
  {
    slug: 'construtora-alves-lima',
    name: 'Construtora Alves Lima',
    segment: 'Construção Civil',
    desc: 'Site institucional com portfólio de obras, formulário de orçamento e integração com WhatsApp.',
    tags: ['React', 'Node.js', 'Google Maps'],
    label: 'Projeto Conceitual',
    color: '#0891b2',
    externalUrl: null,
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80&auto=format&fit=crop',
  },
  {
    slug: 'escola-de-idiomas-prime',
    name: 'Escola de Idiomas Prime',
    segment: 'Educação',
    desc: 'Plataforma de captação de alunos com landing pages por curso, blog e chatbot de atendimento.',
    tags: ['Next.js', 'CMS', 'Analytics'],
    label: 'Projeto Conceitual',
    color: '#059669',
    externalUrl: null,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80&auto=format&fit=crop',
  },
]

export default function PortfolioPage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="Portfólio"
        title="Projetos que geram<br/>resultado de verdade"
        subtitle="Conheça alguns dos trabalhos entregues pela KodaForge. Cada site foi criado para converter visitas em clientes."
      />

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="portfolio-grid">
            {PROJECTS.map((p) => {
              const cardInner = (
                <>
                  <div
                    className="portfolio-cover"
                    style={{
                      backgroundImage: p.image ? `url(${p.image})` : undefined,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center top',
                      padding: 0,
                    }}
                  >
                    <div className="portfolio-cover-overlay" style={{ borderColor: p.color }} />
                    {!p.externalUrl && (
                      <div className="portfolio-mock portfolio-mock-float">
                        <div className="portfolio-mock-bar">
                          <span /><span /><span />
                        </div>
                        <div className="portfolio-mock-body">
                          <div className="portfolio-mock-line" />
                          <div className="portfolio-mock-line short" />
                          <div className="portfolio-mock-btn" style={{ background: p.color }} />
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="portfolio-info">
                    <div className="portfolio-meta">
                      <span className="portfolio-segment">{p.segment}</span>
                      <span className="portfolio-label">{p.label}</span>
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <div className="portfolio-tags">
                      {p.tags.map(t => (
                        <span key={t} className="portfolio-tag">{t}</span>
                      ))}
                    </div>
                    <span className="portfolio-view-demo">{p.externalUrl ? 'Visitar o site →' : 'Ver demonstração →'}</span>
                  </div>
                </>
              )

              return p.externalUrl ? (
                <a
                  key={p.name}
                  href={p.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card reveal"
                  style={{ textDecoration: 'none', display: 'block' }}
                >
                  {cardInner}
                </a>
              ) : (
                <Link key={p.name} href={`/portfolio/${p.slug}`} className="portfolio-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
                  {cardInner}
                </Link>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
              Quer ter seu projeto nesta página?
            </p>
            <Link href="/contato" className="btn-primary">
              Solicitar orçamento gratuito
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </ClientLayout>
  )
}
