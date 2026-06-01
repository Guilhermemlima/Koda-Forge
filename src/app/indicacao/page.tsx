import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Indique e Ganhe — KodaForge',
  description: 'Indique amigos e empresas para a KodaForge e ganhe meses grátis ou créditos em serviços. Programa de indicação exclusivo.',
}

const REWARDS = [
  {
    icon: '🎁',
    title: 'Indicou 1 cliente que fechou',
    reward: '1 mês grátis',
    desc: 'no plano de manutenção mensal (qualquer tier)',
    color: '#7c3aed',
  },
  {
    icon: '🚀',
    title: 'Indicou 2 ou mais clientes',
    reward: '2 meses grátis',
    desc: 'ou R$ 50 de desconto permanente por mês no seu plano',
    color: '#0891b2',
    featured: true,
  },
  {
    icon: '💰',
    title: 'Não tem plano mensal',
    reward: 'R$ 150 em crédito',
    desc: 'para usar em qualquer serviço da KodaForge',
    color: '#059669',
  },
]

const WA_MESSAGE = encodeURIComponent('Olá! Quero indicar alguém para a KodaForge. Como funciona o programa de indicação?')

export default function IndicacaoPage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="Programa de Indicação"
        title="Indique e Ganhe<br/>recompensas reais"
        subtitle="Indicou um amigo ou empresa que fechou negócio com a KodaForge? Você é recompensado. Simples assim."
      />

      <section style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="indicacao-grid">
            {REWARDS.map((r) => (
              <div key={r.title} className={`indicacao-card reveal${r.featured ? ' indicacao-featured' : ''}`}>
                {r.featured && <span className="featured-badge">MAIS VANTAJOSO</span>}
                <div className="indicacao-icon" style={{ color: r.color }}>{r.icon}</div>
                <h3>{r.title}</h3>
                <div className="indicacao-reward" style={{ color: r.color }}>{r.reward}</div>
                <p>{r.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <h3 style={{ marginBottom: '1rem', color: 'var(--white)' }}>Pronto para indicar?</h3>
            <p style={{ color: 'var(--muted)', marginBottom: '2rem', maxWidth: '500px', margin: '0 auto 2rem' }}>
              Mande uma mensagem no WhatsApp com o nome e contato de quem você quer indicar. A gente cuida do resto!
            </p>
            <a
              href={`https://wa.me/5542991250274?text=${WA_MESSAGE}`}
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Quero indicar alguém
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </ClientLayout>
  )
}
