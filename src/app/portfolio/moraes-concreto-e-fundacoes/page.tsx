import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Moraes Concreto e Fundações — KodaForge',
  description: 'Site institucional desenvolvido pela KodaForge para a Moraes Concreto e Fundações — serviços de concretagem e fundações em Guarapuava, PR.',
}

const SERVICES = [
  { icon: '🏗️', title: 'Concretagem',      desc: 'Lajes, pilares, vigas e estruturas em geral.' },
  { icon: '⚓',  title: 'Fundações',         desc: 'Estacas, sapatas e blocos de fundação.' },
  { icon: '🔩',  title: 'Estruturas Metálicas', desc: 'Montagem e fixação de estruturas de aço.' },
  { icon: '📐',  title: 'Projetos & Laudos', desc: 'Assessoria técnica e documentação de obra.' },
]

const STATS = [
  { value: '10+', label: 'Anos de experiência' },
  { value: '200+', label: 'Obras concluídas' },
  { value: '100%', label: 'Clientes satisfeitos' },
]

export default function MoraesConcreto() {
  const SITE_URL = 'https://moraes-concreto-e-fundacoes.vercel.app/index.html'

  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f8fafc', minHeight: '100vh', color: '#1e293b' }}>

      {/* KodaForge banner */}
      <div style={{ background: '#ea580c', color: '#fff', padding: '.6rem 1rem', textAlign: 'center', fontSize: '.82rem' }}>
        🔨 <strong>Projeto Real — KodaForge</strong> — Site desenvolvido para Moraes Concreto e Fundações.{' '}
        <Link href="/portfolio" style={{ color: '#fed7aa', textDecoration: 'underline' }}>← Voltar ao portfólio</Link>
        {' · '}
        <Link href="/contato" style={{ color: '#fed7aa', textDecoration: 'underline' }}>Quero um site assim</Link>
      </div>

      {/* Hero do projeto */}
      <section style={{
        background: 'linear-gradient(135deg, #1c1917 0%, #292524 60%, #1c1917 100%)',
        padding: '5rem 2rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=60&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: .18 }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: '#ea580c', color: '#fff', padding: '.3rem .9rem', borderRadius: 999, fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Projeto Real · Construção Civil
          </div>
          <h1 style={{ color: '#fff', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 800, lineHeight: 1.1, margin: '0 0 1.2rem' }}>
            Moraes Concreto<br />e Fundações
          </h1>
          <p style={{ color: '#a8a29e', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Site institucional com foco em captação de orçamentos, apresentação de serviços
            e presença digital profissional para empresa de concretagem e fundações de Guarapuava, PR.
          </p>
          <a
            href={SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '.5rem',
              background: '#ea580c', color: '#fff',
              padding: '1rem 2rem', borderRadius: 12,
              fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
              boxShadow: '0 8px 30px rgba(234,88,12,.4)',
            }}
          >
            🌐 Visitar o site
          </a>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#ea580c', padding: '2.5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '4rem', flexWrap: 'wrap' }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ color: '#fff', fontSize: '2rem', fontWeight: 800 }}>{s.value}</div>
              <div style={{ color: '#fed7aa', fontSize: '.85rem', marginTop: '.25rem' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Serviços */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, marginBottom: '3rem', color: '#1c1917' }}>
            Serviços desenvolvidos no site
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {SERVICES.map(s => (
              <div key={s.title} style={{
                background: '#fff', borderRadius: 16, padding: '1.75rem',
                boxShadow: '0 1px 3px rgba(0,0,0,.08)', border: '1px solid #e7e5e4',
                textAlign: 'center',
              }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '.75rem' }}>{s.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '.4rem', color: '#1c1917' }}>{s.title}</div>
                <div style={{ fontSize: '.85rem', color: '#78716c', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview do site */}
      <section style={{ padding: '0 2rem 5rem' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 800, marginBottom: '2rem', color: '#1c1917' }}>
            Preview do site
          </h2>
          <div style={{ borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,.15)', border: '1px solid #e7e5e4' }}>
            {/* Barra do navegador */}
            <div style={{ background: '#292524', padding: '.75rem 1rem', display: 'flex', alignItems: 'center', gap: '.6rem' }}>
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57', display: 'inline-block' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e', display: 'inline-block' }} />
              <span style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840', display: 'inline-block' }} />
              <div style={{ flex: 1, background: '#1c1917', borderRadius: 6, padding: '.35rem 1rem', fontSize: '.78rem', color: '#a8a29e', marginLeft: '.5rem' }}>
                moraes-concreto-e-fundacoes.vercel.app
              </div>
            </div>
            <iframe
              src={SITE_URL}
              style={{ width: '100%', height: 540, border: 'none', display: 'block', background: '#fff' }}
              title="Moraes Concreto e Fundações — preview"
              loading="lazy"
            />
          </div>
          <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
            <a
              href={SITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#ea580c', fontWeight: 600, textDecoration: 'none', fontSize: '.95rem' }}
            >
              Abrir site completo em nova aba →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1c1917', padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ color: '#fff', fontSize: '1.9rem', fontWeight: 800, marginBottom: '1rem' }}>
            Quer um site como esse?
          </h2>
          <p style={{ color: '#a8a29e', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            A KodaForge cria sites profissionais para empresas de construção civil, fundações,
            concretagem e outros segmentos. Orçamento gratuito em até 24 horas.
          </p>
          <Link
            href="/contato"
            style={{
              display: 'inline-block',
              background: '#ea580c', color: '#fff',
              padding: '1rem 2.5rem', borderRadius: 12,
              fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
            }}
          >
            Solicitar orçamento gratuito
          </Link>
        </div>
      </section>

    </div>
  )
}
