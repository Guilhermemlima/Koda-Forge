const TESTIMONIALS = [
  { text: '"O redesign do nosso site foi um divisor de águas. Em 60 dias, nossas consultas pelo site triplicaram. A equipe entendeu exatamente o que precisávamos."', name: 'Marina Ferreira', role: 'CEO — Clínica Bem Estar',              city: 'Guarapuava, PR', initials: 'MF' },
  { text: '"Profissionalismo do início ao fim. Cumpriram o prazo, o design ficou incrível e o suporte pós-entrega me salvou várias vezes. Recomendo sem hesitar."',   name: 'Rafael Lima',    role: 'Fundador — Construtora Alves Lima',    city: 'Guarapuava, PR', initials: 'RL' },
  { text: '"Assino o plano mensal há 8 meses. Sinto que tenho um time de TI dedicado ao meu negócio. Vale cada centavo. Meu site nunca ficou fora do ar."',          name: 'Camila Santos',  role: 'Diretora — Escola de Idiomas Prime',   city: 'Curitiba, PR',   initials: 'CS' },
  { text: '"Meu e-commerce saiu do zero e já está faturando. Eles cuidaram de tudo — design, produto, checkout, SEO. Resultado acima do esperado."',                  name: 'João Pereira',   role: 'Empreendedor — Loja Orgânicos',        city: 'Guarapuava, PR', initials: 'JP' },
  { text: '"Precisávamos urgente de um site para um cliente importante. Em 10 dias, entregaram algo que superou todas as expectativas. Parceria garantida."',         name: 'Ana Torres',     role: 'Gerente — Agência Connect',            city: 'São Paulo, SP',  initials: 'AT' },
  { text: '"Já contratei dois sites. O segundo ficou ainda melhor que o primeiro. A comunicação é excelente, sem enrolação. Preço justo e resultado de qualidade."',  name: 'Bruno Neves',    role: 'Proprietário — Studio BN Arquitetura', city: 'Guarapuava, PR', initials: 'BN' },
]

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Depoimentos</span>
          <h2 className="section-title" style={{ marginTop: '.8rem' }}>
            O que nossos clientes dizem
          </h2>
          <p className="section-sub">
            Mais de 120 negócios transformados. Veja o que quem já passou por aqui tem a dizer.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS.map((t) => (
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
                  <div className="author-city">📍 {t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="testi-footer reveal">
          <a
            href="https://g.page/r/kodaforge/review"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⭐ Deixar depoimento no Google
          </a>
        </div>
      </div>
    </section>
  )
}
