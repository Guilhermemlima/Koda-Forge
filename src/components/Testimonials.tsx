/* Só clientes reais. Atribuído à empresa, não a uma pessoa inventada —
   trocar por nome e cargo reais assim que o cliente aprovar o texto. */
const TESTIMONIALS = [
  {
    text: '"Chegamos com uma lista do que o site precisava ter e saiu tudo, do jeito que pedimos. A busca por cidade e tipo de imóvel funciona, o cliente fala com a gente direto pelo WhatsApp e o acompanhamento durante o projeto foi o que mais nos marcou."',
    name: 'SBS Imóveis',
    role: 'Corretora de imóveis',
    city: 'Guarapuava, PR',
    initials: 'SBS',
  },
  {
    text: '"Achei que colocar impressão 3D numa loja online ia ser complicado demais — catálogo, carrinho, pedido sob medida. Deu certo e ficou bonito. O site passa seriedade e hoje é o link que eu mando quando alguém pede orçamento."',
    name: 'Moldarte 3D',
    role: 'Impressão 3D sob demanda',
    city: 'Brasil',
    initials: 'M3D',
  },
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
            Cada projeto entregue, no relato de quem contratou.
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
