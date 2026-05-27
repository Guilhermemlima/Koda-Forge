const SERVICES = [
  {
    icon: '🚀',
    title: 'Criação de Site',
    desc: 'Do briefing ao deploy. Desenvolvemos sites modernos, rápidos e prontos para converter visitantes em clientes.',
    items: [
      'Design exclusivo e responsivo',
      'Otimização SEO on-page',
      'Integração com Google Analytics',
      'Velocidade acima de 90 no PageSpeed',
      'Entrega em até 15 dias úteis',
    ],
    featured: false,
    badge: null,
  },
  {
    icon: '✨',
    title: 'Redesign Completo',
    desc: 'Transformamos sites antigos em experiências modernas que geram confiança, retêm visitantes e aumentam conversões.',
    items: [
      'Auditoria completa do site atual',
      'Novo visual alinhado à sua marca',
      'Migração de conteúdo sem perda',
      'Melhora na experiência mobile',
      'Aumento de velocidade garantido',
    ],
    featured: true,
    badge: 'MAIS PEDIDO',
  },
  {
    icon: '🔄',
    title: 'Manutenção Mensal',
    desc: 'Sua presença digital nunca para. Atualizações, backups, segurança e suporte — tudo incluído no plano mensal.',
    items: [
      'Suporte prioritário por WhatsApp',
      'Atualizações ilimitadas de conteúdo',
      'Backups diários automáticos',
      'Monitoramento de uptime 24/7',
      'Relatório mensal de performance',
    ],
    featured: false,
    badge: null,
  },
]

export default function Services() {
  return (
    <section id="services">
      <div className="blob" />
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Serviços</span>
          <h2 className="section-title" style={{ marginTop: '.8rem' }}>
            Tudo que seu negócio<br />precisa no digital
          </h2>
          <p className="section-sub">
            Soluções sob medida — desde a criação do zero até a manutenção mensal com suporte dedicado.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s) => (
            <div key={s.title} className={`service-card${s.featured ? ' featured' : ''} reveal`}>
              {s.badge && <span className="featured-badge">{s.badge}</span>}
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul className="service-list">
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
