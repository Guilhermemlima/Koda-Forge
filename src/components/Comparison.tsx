'use client'

import Link from 'next/link'

/* ── Linhas da tabela ── */
const ROWS = [
  {
    criterion: 'Investimento médio',
    koda:       'R$ 1.497 – R$ 5.997',
    agency:     'R$ 8.000 – R$ 30.000+',
    freelancer: 'R$ 300 – R$ 800',
    highlight:  true,
  },
  {
    criterion: 'Prazo de entrega',
    koda:       '10 – 15 dias úteis',
    agency:     '45 – 120 dias',
    freelancer: '30 – 90 dias (sem garantia)',
    highlight:  true,
  },
  {
    criterion: 'Qualidade do design',
    koda:       'check',
    agency:     'check',
    freelancer: 'x',
    highlight:  false,
  },
  {
    criterion: 'Performance (PageSpeed 90+)',
    koda:       'check',
    agency:     'partial',
    freelancer: 'x',
    highlight:  false,
  },
  {
    criterion: 'SEO técnico incluso',
    koda:       'check',
    agency:     'partial',
    freelancer: 'x',
    highlight:  false,
  },
  {
    criterion: 'Responsividade mobile',
    koda:       'check',
    agency:     'check',
    freelancer: 'partial',
    highlight:  false,
  },
  {
    criterion: 'Comunicação direta com dev',
    koda:       'check',
    agency:     'x',
    freelancer: 'partial',
    highlight:  false,
  },
  {
    criterion: 'Suporte pós-entrega',
    koda:       'check',
    agency:     'partial',
    freelancer: 'x',
    highlight:  false,
  },
  {
    criterion: 'Revisões sem custo extra',
    koda:       'check',
    agency:     'x',
    freelancer: 'x',
    highlight:  false,
  },
  {
    criterion: 'Transparência de preço',
    koda:       'check',
    agency:     'x',
    freelancer: 'partial',
    highlight:  false,
  },
  {
    criterion: 'Código limpo e escalável',
    koda:       'check',
    agency:     'check',
    freelancer: 'x',
    highlight:  false,
  },
  {
    criterion: 'Garantia de entrega',
    koda:       'check',
    agency:     'partial',
    freelancer: 'x',
    highlight:  false,
  },
]

/* ── Cards de diferenciais ── */
const DIFFS = [
  {
    icon: '⚡',
    title: 'Velocidade sem abrir mão da qualidade',
    text:
      'Agências tradicionais levam meses por conta de processos internos, reuniões e burocracia. Freelancers baratos entregam rápido, mas o resultado costuma ser frágil. Na KodaForge você tem o melhor dos dois mundos: entrega em até 15 dias com design profissional e código sólido.',
  },
  {
    icon: '💰',
    title: 'Preço justo, sem surpresas',
    text:
      'Agências cobram caro por estrutura física, equipe grande e overhead. Freelancers baratos parecem atraentes até surgirem os cobras extras: hospedagem, domínio, ajustes pós-entrega. Na KodaForge o que você vê no plano é o que você paga — sem taxas escondidas.',
  },
  {
    icon: '🎯',
    title: 'Foco em conversão, não só em estética',
    text:
      'A maioria dos sites bonitos não vende. Desenvolvemos cada página pensando em CTAs, velocidade de carregamento e UX que guiam o visitante até o contato ou compra. Cada decisão de design tem um porquê estratégico.',
  },
  {
    icon: '🤝',
    title: 'Você fala direto com quem faz',
    text:
      'Nas agências você passa por vendedor, gerente de projeto e só depois chega ao desenvolvedor — que muitas vezes nem está no Brasil. Na KodaForge você fala diretamente com quem está construindo seu site, o que elimina ruído, retrabalho e frustrações.',
  },
]

/* ── Renderizador de célula ── */
function Cell({ value }: { value: string }) {
  if (value === 'check')
    return <span className="cmp-check">✓</span>
  if (value === 'x')
    return <span className="cmp-x">✗</span>
  if (value === 'partial')
    return <span className="cmp-partial">~</span>
  return <span className="cmp-text">{value}</span>
}

export default function Comparison() {
  return (
    <div className="cmp-wrapper">

      {/* ── Tabela ── */}
      <section className="cmp-table-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="tag">Comparativo</span>
            <h2 className="section-title" style={{ marginTop: '.8rem' }}>
              Por que a KodaForge é a escolha certa?
            </h2>
            <p className="section-sub">
              Veja lado a lado o que cada opção realmente entrega — além do preço.
            </p>
          </div>

          <div className="cmp-scroll-hint">Role para ver a tabela completa →</div>

          <div className="cmp-table-wrap reveal">
            <table className="cmp-table">
              <thead>
                <tr>
                  <th className="cmp-th-criterion">Critério</th>
                  <th className="cmp-th cmp-th-koda">
                    <span className="cmp-koda-label">KodaForge</span>
                    <span className="cmp-best-badge">Melhor escolha</span>
                  </th>
                  <th className="cmp-th">Agência Tradicional</th>
                  <th className="cmp-th">Freelancer Barato</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={i} className={row.highlight ? 'cmp-row-highlight' : ''}>
                    <td className="cmp-td-criterion">{row.criterion}</td>
                    <td className="cmp-td cmp-td-koda"><Cell value={row.koda} /></td>
                    <td className="cmp-td"><Cell value={row.agency} /></td>
                    <td className="cmp-td"><Cell value={row.freelancer} /></td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Legenda */}
            <div className="cmp-legend">
              <span><span className="cmp-check">✓</span> Incluso / Sim</span>
              <span><span className="cmp-partial">~</span> Parcial / Depende</span>
              <span><span className="cmp-x">✗</span> Não incluso / Não</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Diferenciais ── */}
      <section className="cmp-diffs-section">
        <div className="container">
          <div className="section-head reveal">
            <span className="tag">Nossa visão</span>
            <h2 className="section-title" style={{ marginTop: '.8rem' }}>
              O que nos diferencia na prática
            </h2>
            <p className="section-sub">
              Números e ícones contam parte da história. Aqui está o resto.
            </p>
          </div>

          <div className="cmp-diffs-grid">
            {DIFFS.map((d, i) => (
              <div key={i} className="cmp-diff-card reveal">
                <div className="cmp-diff-icon">{d.icon}</div>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aviso honesto ── */}
      <section className="cmp-honest-section">
        <div className="container">
          <div className="cmp-honest-box reveal">
            <div className="cmp-honest-icon">🤔</div>
            <div>
              <h3>Quando a KodaForge pode <em>não</em> ser a melhor opção</h3>
              <p>
                Se você precisa de um sistema complexo com dezenas de integrações, equipe dedicada 24/7
                e estrutura enterprise, uma grande agência pode fazer mais sentido — e o custo se justifica.
                Se seu orçamento é abaixo de R$ 1.000, um freelancer genérico pode atender por ora.
                Somos honestos sobre isso: preferimos clientes que entendem o valor do que entregamos
                do que fechar contratos que não são o fit certo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="cmp-cta-section">
        <div className="container">
          <div className="cmp-cta-box reveal">
            <h2>Pronto para fazer a escolha certa?</h2>
            <p>
              Solicite um orçamento gratuito e sem compromisso. Respondemos em até 24 horas
              com uma proposta personalizada para o seu negócio.
            </p>
            <div className="cta-actions">
              <Link href="/contato" className="btn-primary">Solicitar orçamento grátis →</Link>
              <a
                href="https://wa.me/5542991250274"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                💬 Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
