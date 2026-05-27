const STEPS = [
  {
    num: 1,
    title: 'Briefing',
    desc: 'Entendemos seu negócio, objetivos, público-alvo e referências visuais em uma call de 30 minutos.',
  },
  {
    num: 2,
    title: 'Design',
    desc: 'Criamos o layout no Figma com identidade visual única. Você aprova antes de qualquer linha de código.',
  },
  {
    num: 3,
    title: 'Desenvolvimento',
    desc: 'Codificamos com as melhores práticas do mercado — rápido, responsivo, acessível e otimizado para SEO.',
  },
  {
    num: 4,
    title: 'Lançamento',
    desc: 'Deploy, testes finais e entrega. Você recebe o projeto funcionando com suporte pós-entrega incluso.',
  },
]

export default function Process() {
  return (
    <section id="process">
      <div className="blob" />
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Como funciona</span>
          <h2 className="section-title" style={{ marginTop: '.8rem' }}>
            Do briefing ao ar<br />em 4 passos simples
          </h2>
          <p className="section-sub">
            Nosso processo é transparente, ágil e colaborativo. Você acompanha cada etapa.
          </p>
        </div>

        <div className="process-steps">
          {STEPS.map((s) => (
            <div key={s.num} className="step-card reveal">
              <div className="step-num">{s.num}</div>
              <h4>{s.title}</h4>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
