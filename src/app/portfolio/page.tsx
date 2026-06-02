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
    slug: 'clinica-bem-estar',
    name: 'Clínica Bem Estar',
    segment: 'Saúde',
    desc: 'Redesign completo com foco em agendamento online. Aumento de 3x nas consultas em 60 dias.',
    tags: ['Next.js', 'Tailwind', 'SEO'],
    label: 'Projeto Conceitual',
    color: '#7c3aed',
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
            {PROJECTS.map((p) => (
              <Link key={p.name} href={`/portfolio/${p.slug}`} className="portfolio-card reveal" style={{ textDecoration: 'none', display: 'block' }}>
                <div
                  className="portfolio-cover"
                  style={{
                    backgroundImage: `url(${p.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: 0,
                  }}
                >
                  {/* overlay + browser mock flutuante */}
                  <div className="portfolio-cover-overlay" style={{ borderColor: p.color }} />
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
                  <span className="portfolio-view-demo">Ver demonstração →</span>
                </div>
              </Link>
            ))}
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
