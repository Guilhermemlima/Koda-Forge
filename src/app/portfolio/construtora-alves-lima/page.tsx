import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Construtora Alves Lima — Demo KodaForge',
  description: 'Demonstração do site da Construtora Alves Lima, desenvolvido pela KodaForge.',
}

const PROJECTS = [
  { name: 'Residencial Altos do Xarquinho', type: 'Residencial', status: 'Entregue', area: '320m²' },
  { name: 'Edifício Comercial Centro', type: 'Comercial', status: 'Em obra', area: '850m²' },
  { name: 'Condomínio Vila Verde', type: 'Residencial', status: 'Entregue', area: '1.200m²' },
]

const SERVICES = [
  { icon: '🏠', title: 'Construção Residencial', desc: 'Casas e sobrados personalizados do zero.' },
  { icon: '🏢', title: 'Obras Comerciais', desc: 'Edifícios, lojas e espaços corporativos.' },
  { icon: '🔨', title: 'Reformas', desc: 'Reformas completas com acabamento de alto padrão.' },
  { icon: '📐', title: 'Projetos & Consultoria', desc: 'Do projeto até a obra — acompanhamento total.' },
]

export default function ConstrutoraDemoPage() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f1f5f9', minHeight: '100vh', color: '#1e293b' }}>

      {/* Demo Banner */}
      <div style={{ background: '#0891b2', color: '#fff', padding: '.6rem 1rem', textAlign: 'center', fontSize: '.82rem' }}>
        🎨 <strong>Demonstração KodaForge</strong> — Este é um exemplo de site criado para a Construtora Alves Lima.{' '}
        <Link href="/portfolio" style={{ color: '#bae6fd', textDecoration: 'underline' }}>Ver portfólio completo</Link>
        {' · '}
        <Link href="/contato" style={{ color: '#bae6fd', textDecoration: 'underline' }}>Quero um site assim</Link>
      </div>

      {/* Navbar */}
      <nav style={{ background: '#0f172a', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '68px', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
          <div style={{ width: 36, height: 36, borderRadius: 8, background: '#0891b2', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#fff', fontSize: '.8rem' }}>AL</div>
          <div>
            <div style={{ color: '#fff', fontWeight: 800, fontSize: '.95rem', lineHeight: 1 }}>Alves Lima</div>
            <div style={{ color: '#64748b', fontSize: '.7rem' }}>Construtora</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '.88rem' }}>
          {['Início','Serviços','Obras','Orçamento'].map(l => (
            <a key={l} href="#" style={{ color: '#94a3b8', textDecoration: 'none', fontWeight: 500 }}>{l}</a>
          ))}
        </div>
        <a href="#orcamento" style={{ background: '#0891b2', color: '#fff', padding: '.55rem 1.3rem', borderRadius: 8, fontWeight: 700, fontSize: '.85rem', textDecoration: 'none' }}>
          Solicitar orçamento
        </a>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#0f172a 0%,#1e3a5f 100%)', padding: '6rem 2rem', color: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span style={{ background: 'rgba(8,145,178,.2)', color: '#38bdf8', padding: '.3rem .8rem', borderRadius: 20, fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em', border: '1px solid rgba(56,189,248,.2)' }}>
              Desde 1998 em Guarapuava, PR
            </span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, margin: '1rem 0', lineHeight: 1.2 }}>
              Construímos o seu<br /><span style={{ color: '#38bdf8' }}>sonho com solidez</span>
            </h1>
            <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '2rem' }}>
              Mais de 25 anos de experiência em construção residencial e comercial. Do projeto à entrega, com qualidade e prazo garantidos.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a id="orcamento" href="#" style={{ background: '#0891b2', color: '#fff', padding: '.75rem 1.75rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '.95rem' }}>
                📋 Pedir orçamento grátis
              </a>
              <a href="#obras" style={{ border: '2px solid rgba(255,255,255,.2)', color: '#fff', padding: '.75rem 1.75rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '.95rem' }}>
                Ver obras
              </a>
            </div>
            <div style={{ display: 'flex', gap: '2.5rem', marginTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,.1)', paddingTop: '2rem' }}>
              {[['200+','Obras entregues'],['25+','Anos de mercado'],['100%','Prazo garantido']].map(([n,l]) => (
                <div key={l}>
                  <strong style={{ fontSize: '1.4rem', color: '#38bdf8' }}>{n}</strong>
                  <p style={{ fontSize: '.75rem', color: '#64748b', margin: '.2rem 0 0' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'rgba(8,145,178,.1)', borderRadius: 20, height: 360, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(8,145,178,.2)' }}>
            <div style={{ textAlign: 'center', color: '#38bdf8' }}>
              <div style={{ fontSize: '5rem' }}>🏗️</div>
              <p style={{ fontWeight: 700, marginTop: '.5rem', color: '#fff' }}>Construtora Alves Lima</p>
              <p style={{ fontSize: '.8rem', color: '#64748b' }}>Guarapuava, PR — CREA: 12345-PR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>O que fazemos</h2>
            <p style={{ color: '#64748b', marginTop: '.5rem' }}>Soluções completas em construção civil</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1.75rem', borderTop: '3px solid #0891b2' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '.75rem' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '.4rem', fontSize: '.95rem' }}>{s.title}</h3>
                <p style={{ color: '#64748b', fontSize: '.83rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfólio de obras */}
      <section id="obras" style={{ padding: '5rem 2rem', background: '#f1f5f9' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Nossas obras</h2>
            <p style={{ color: '#64748b', marginTop: '.5rem' }}>Conheça alguns dos projetos que entregamos</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {PROJECTS.map(p => (
              <div key={p.name} style={{ background: '#fff', borderRadius: 14, overflow: 'hidden', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,.05)' }}>
                <div style={{ height: 160, background: 'linear-gradient(135deg,#0891b222,#06b6d411)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>🏛️</div>
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '.5rem', marginBottom: '.6rem' }}>
                    <span style={{ fontSize: '.7rem', fontWeight: 700, color: '#0891b2', background: '#e0f2fe', padding: '.2rem .55rem', borderRadius: 20 }}>{p.type}</span>
                    <span style={{ fontSize: '.7rem', fontWeight: 700, color: p.status === 'Entregue' ? '#059669' : '#d97706', background: p.status === 'Entregue' ? '#dcfce7' : '#fef3c7', padding: '.2rem .55rem', borderRadius: 20 }}>{p.status}</span>
                  </div>
                  <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: '.95rem', marginBottom: '.3rem' }}>{p.name}</h3>
                  <p style={{ color: '#64748b', fontSize: '.82rem' }}>Área total: {p.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0891b2', padding: '4rem 2rem', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Pronto para construir?</h2>
        <p style={{ opacity: .9, marginBottom: '2rem', fontSize: '1.05rem' }}>Solicite um orçamento gratuito e sem compromisso. Respondemos em até 24h.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" style={{ background: '#fff', color: '#0891b2', padding: '.75rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none' }}>📋 Solicitar orçamento</a>
          <a href="https://wa.me/5542999999999" style={{ border: '2px solid rgba(255,255,255,.5)', color: '#fff', padding: '.75rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none' }}>💬 WhatsApp</a>
        </div>
      </section>

      <footer style={{ background: '#0f172a', color: '#64748b', padding: '2rem', textAlign: 'center', fontSize: '.82rem' }}>
        <p>© 2026 Construtora Alves Lima — Guarapuava, PR | CREA-PR 12345</p>
        <p style={{ marginTop: '.4rem' }}>
          Site desenvolvido por{' '}
          <Link href="/" style={{ color: '#38bdf8', textDecoration: 'none', fontWeight: 600 }}>KodaForge</Link>
          {' · '}
          <Link href="/contato" style={{ color: '#38bdf8', textDecoration: 'none' }}>Quero um site assim</Link>
        </p>
      </footer>
    </div>
  )
}
