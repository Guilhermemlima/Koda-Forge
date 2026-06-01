import Link from 'next/link'

const REWARDS = [
  {
    icon: '🎁',
    title: 'Indicou 1 cliente que fechou',
    reward: '1 mês grátis',
    desc: 'no plano de manutenção mensal (qualquer tier)',
    color: '#7c3aed',
    featured: false,
  },
  {
    icon: '🚀',
    title: 'Indicou 2 ou mais clientes',
    reward: '2 meses grátis',
    desc: 'ou R$ 50 de desconto permanente por mês no seu plano',
    color: '#a855f7',
    featured: true,
  },
  {
    icon: '💰',
    title: 'Não tem plano mensal',
    reward: 'R$ 150 em crédito',
    desc: 'para usar em qualquer serviço da KodaForge',
    color: '#059669',
    featured: false,
  },
]

const WA_MESSAGE = encodeURIComponent('Olá! Quero indicar alguém para a KodaForge. Como funciona o programa de indicação?')

export default function Indicacao() {
  return (
    <section id="indicacao" className="indicacao-section">
      <div className="blob" />
      <div className="container">

        <div className="section-head reveal">
          <span className="tag">Programa de Indicação</span>
          <h2 className="section-title" style={{ marginTop: '.8rem' }}>
            Indique e ganhe<br />recompensas reais
          </h2>
          <p className="section-sub">
            Indicou um amigo ou empresa que fechou negócio com a KodaForge? Você é recompensado. Simples assim.
          </p>
        </div>

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

        <div className="indicacao-cta reveal">
          <div className="indicacao-cta-text">
            <strong>Como funciona?</strong>
            <p>Mande o nome e contato de quem você quer indicar no nosso WhatsApp. Se fechar, a recompensa é sua automaticamente.</p>
          </div>
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
  )
}
