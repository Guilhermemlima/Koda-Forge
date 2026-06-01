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
    name: 'Clínica Bem Estar',
    segment: 'Saúde',
    desc: 'Redesign completo com foco em agendamento online. Aumento de 3x nas consultas em 60 dias.',
    tags: ['Next.js', 'Tailwind', 'SEO'],
    label: 'Projeto Conceitual',
    color: '#7c3aed',
  },
  {
    name: 'Construtora Alves Lima',
    segment: 'Construção Civil',
    desc: 'Site institucional com portfólio de obras, formulário de orçamento e integração com WhatsApp.',
    tags: ['React', 'Node.js', 'Google Maps'],
    label: 'Projeto Conceitual',
    color: '#0891b2',
  },
  {
    name: 'Escola de Idiomas Prime',
    segment: 'Educação',
    desc: 'Plataforma de captação de alunos com landing pages por curso, blog e chatbot de atendimento.',
    tags: ['Next.js', 'CMS', 'Analytics'],
    label: 'Projeto Conceitual',
    color: '#059669',
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
              <div key={p.name} className="portfolio-card reveal">
                <div className="portfolio-cover" style={{ background: `linear-gradient(135deg, ${p.color}33, ${p.color}11)` }}>
                  <div className="portfolio-mock">
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
                </div>
              </div>
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
