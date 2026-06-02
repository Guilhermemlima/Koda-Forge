'use client'

import { useState, useRef, useEffect } from 'react'

const TECHS = [
  {
    name: 'React',
    icon: '⚛️',
    category: 'Front-end',
    color: '#61dafb',
    desc: 'Biblioteca JavaScript criada pelo Facebook para construir interfaces com componentes reutilizáveis.',
    uses: ['Sites com conteúdo dinâmico', 'Dashboards interativos', 'Single Page Apps (SPA)'],
  },
  {
    name: 'Next.js',
    icon: '▲',
    category: 'Framework Full-stack',
    color: '#ffffff',
    desc: 'Framework baseado em React que adiciona roteamento, renderização no servidor e otimizações automáticas de performance.',
    uses: ['Sites institucionais rápidos', 'Blogs com SEO otimizado', 'Aplicações full-stack'],
  },
  {
    name: 'WordPress',
    icon: '🔵',
    category: 'CMS',
    color: '#21759b',
    desc: 'Sistema de gerenciamento de conteúdo que permite criar e editar páginas sem precisar programar.',
    uses: ['Sites com atualizações frequentes', 'Blogs e portais de notícias', 'E-commerce com WooCommerce'],
  },
  {
    name: 'Shopify',
    icon: '🛍️',
    category: 'E-commerce',
    color: '#96bf48',
    desc: 'Plataforma completa para lojas virtuais com gestão de produtos, pagamentos e estoque já integrados.',
    uses: ['Lojas virtuais', 'Dropshipping', 'Vendas com múltiplos canais'],
  },
  {
    name: 'Figma',
    icon: '🎨',
    category: 'Design & Prototipagem',
    color: '#f24e1e',
    desc: 'Ferramenta de design colaborativo usada para criar wireframes, protótipos clicáveis e o visual final do site antes de programar.',
    uses: ['Prototipagem de interfaces', 'Design system', 'Aprovação visual com o cliente'],
  },
  {
    name: 'Tailwind',
    icon: '💨',
    category: 'CSS Framework',
    color: '#38bdf8',
    desc: 'Framework CSS utilitário que acelera a estilização com classes prontas, garantindo consistência visual em todo o projeto.',
    uses: ['Estilização rápida e consistente', 'Design responsivo', 'Manutenção facilitada de estilos'],
  },
  {
    name: 'Node.js',
    icon: '🟩',
    category: 'Back-end',
    color: '#68a063',
    desc: 'Ambiente que executa JavaScript no servidor, permitindo criar APIs, processar dados e conectar o site a bancos de dados.',
    uses: ['APIs REST', 'Integrações com serviços externos', 'Lógica de negócio no back-end'],
  },
  {
    name: 'Vercel',
    icon: '🚀',
    category: 'Deploy & Hospedagem',
    color: '#ffffff',
    desc: 'Plataforma de hospedagem especializada em Next.js com deploy automático, CDN global e SSL gratuito.',
    uses: ['Hospedagem de sites Next.js', 'Deploy automático via GitHub', 'Performance global com CDN'],
  },
  {
    name: 'Hotmart',
    icon: '🔥',
    category: 'Plataforma de Infoprodutos',
    color: '#ff4d00',
    desc: 'Plataforma líder para venda de cursos online, e-books e assinaturas digitais, com checkout otimizado e área de membros.',
    uses: ['Landing pages de cursos e infoprodutos', 'Integração com área de membros', 'Páginas de vendas otimizadas para conversão'],
  },
  {
    name: 'Kiwify',
    icon: '🥝',
    category: 'Plataforma de Infoprodutos',
    color: '#00c28e',
    desc: 'Plataforma brasileira para venda de produtos digitais com checkout de alta conversão e integração nativa com ferramentas de marketing.',
    uses: ['Páginas de vendas integradas', 'Funis de upsell e downsell', 'Integração com pixel e analytics'],
  },
  {
    name: 'Cakto',
    icon: '🎂',
    category: 'Plataforma de Pagamentos',
    color: '#6c47ff',
    desc: 'Plataforma de checkout inteligente para produtos digitais e físicos com foco em recuperação de vendas e maximização de conversão.',
    uses: ['Checkout de alta conversão', 'Recuperação de carrinho abandonado', 'Integração com sites e landing pages'],
  },
  {
    name: 'Kirvano',
    icon: '⚡',
    category: 'Plataforma de Vendas Digitais',
    color: '#f59e0b',
    desc: 'Solução completa para criadores digitais com checkout, área de membros e funis de vendas integrados em uma única plataforma.',
    uses: ['Sites de vendas para infoprodutores', 'Integração com área de membros', 'Funis de vendas automatizados'],
  },
]

type Tech = (typeof TECHS)[number]

export default function LogosStrip() {
  const [active, setActive] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  /* Fecha ao clicar fora */
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActive(null)
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('mousedown', handleClick)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('mousedown', handleClick)
      document.removeEventListener('keydown', handleKey)
    }
  }, [])

  return (
    <section id="logos">
      <div className="container">
        <p className="logos-label">Tecnologias que dominamos</p>
        <p className="logos-hint">Passe o mouse ou toque para saber mais</p>
        <div className="logos-track" ref={containerRef}>
          {TECHS.map((tech) => (
            <TechItem
              key={tech.name}
              tech={tech}
              isOpen={active === tech.name}
              onToggle={() => setActive(active === tech.name ? null : tech.name)}
              onHoverEnter={() => setActive(tech.name)}
              onHoverLeave={() => setActive(null)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function TechItem({
  tech,
  isOpen,
  onToggle,
  onHoverEnter,
  onHoverLeave,
}: {
  tech: Tech
  isOpen: boolean
  onToggle: () => void
  onHoverEnter: () => void
  onHoverLeave: () => void
}) {
  return (
    <div
      className={`logo-item-wrap${isOpen ? ' logo-item-wrap--open' : ''}`}
      onMouseEnter={onHoverEnter}
      onMouseLeave={onHoverLeave}
      onClick={onToggle}
    >
      {/* Nome da tecnologia */}
      <span className={`logo-item${isOpen ? ' logo-item--active' : ''}`}>
        <span className="logo-item-icon">{tech.icon}</span>
        {tech.name}
      </span>

      {/* Tooltip */}
      {isOpen && (
        <div className="tech-tooltip" role="tooltip">
          <div className="tt-arrow" />

          <div className="tt-header">
            <span className="tt-icon">{tech.icon}</span>
            <div>
              <p className="tt-name">{tech.name}</p>
              <span className="tt-category" style={{ color: tech.color }}>
                {tech.category}
              </span>
            </div>
          </div>

          <p className="tt-desc">{tech.desc}</p>

          <div className="tt-uses">
            <p className="tt-uses-label">Usado para:</p>
            <ul>
              {tech.uses.map((use) => (
                <li key={use}>{use}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
