const METRICS = [
  { label: 'Velocidade do site', pct: 94,  display: '94' },
  { label: 'Taxa de conversão',  pct: 78,  display: '+78%' },
  { label: 'Tráfego orgânico',   pct: 65,  display: '+65%' },
  { label: 'Tempo no site',      pct: 82,  display: '+82%' },
]

const MINI = [
  { val: '120+', label: 'Clientes ativos' },
  { val: '4.9★', label: 'Avaliação média' },
  { val: '15d',  label: 'Entrega média' },
  { val: '100%', label: 'Uptime garantido' },
]

const ITEMS = [
  { icon: '⚡', title: 'Performance que converte', desc: 'Sites lentos perdem clientes. Entregamos acima de 90 no Google PageSpeed — velocidade real, não só promessa.' },
  { icon: '🎨', title: 'Design focado em UX',      desc: 'Interface intuitiva e bonita que guia o visitante até a conversão. Design pensado para pessoas, não para prêmios.' },
  { icon: '🔒', title: 'Segurança e estabilidade', desc: 'SSL, backups diários e monitoramento 24/7. Seu site fica no ar e protegido enquanto você foca no seu negócio.' },
  { icon: '📈', title: 'SEO desde o primeiro dia', desc: 'Estrutura técnica correta, metatags, sitemap e velocidade — para seu site aparecer no Google de verdade.' },
]

export default function WhyUs() {
  return (
    <section id="why">
      <div className="container">
        <div className="why-grid">
          {/* Visual / metrics */}
          <div className="why-visual reveal">
            <div className="metrics-card">
              <h4>Resultados médios dos nossos clientes</h4>
              {METRICS.map((m) => (
                <div key={m.label} className="metric-row">
                  <span className="metric-label">{m.label}</span>
                  <div className="metric-bar-wrap">
                    <div className="metric-bar" style={{ width: `${m.pct}%` }} />
                  </div>
                  <span className="metric-val">{m.display}</span>
                </div>
              ))}
            </div>

            <div className="mini-cards">
              {MINI.map((s) => (
                <div key={s.label} className="mini-card">
                  <strong>{s.val}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="why-content reveal">
            <span className="tag">Por que a KodaForge</span>
            <h2 className="section-title" style={{ textAlign: 'left', marginTop: '.8rem' }}>
              Sites que trabalham<br />por você
            </h2>
            <div className="why-items">
              {ITEMS.map((item) => (
                <div key={item.title} className="why-item">
                  <div className="why-icon">{item.icon}</div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
