import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Clínica Bem Estar — Demo KodaForge',
  description: 'Demonstração do site da Clínica Bem Estar, desenvolvido pela KodaForge.',
}

const SERVICES = [
  { icon: '🦷', name: 'Odontologia', desc: 'Clareamento, implantes, ortodontia e muito mais.' },
  { icon: '🩺', name: 'Clínica Geral', desc: 'Consultas e acompanhamento médico completo.' },
  { icon: '💆', name: 'Estética', desc: 'Tratamentos faciais e corporais especializados.' },
  { icon: '🔬', name: 'Exames', desc: 'Laboratório próprio com resultados em 24h.' },
]

const TEAM = [
  { name: 'Dra. Marina Ferreira', role: 'Clínica Geral — CRM 54321', initials: 'MF' },
  { name: 'Dr. Ricardo Alves', role: 'Odontologista — CRO 12345', initials: 'RA' },
  { name: 'Dra. Paula Costa', role: 'Dermatologista — CRM 98765', initials: 'PC' },
]

export default function ClinicaDemo() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#f8fafc', minHeight: '100vh', color: '#1e293b' }}>

      {/* Demo Banner */}
      <div style={{ background: '#7c3aed', color: '#fff', padding: '.6rem 1rem', textAlign: 'center', fontSize: '.82rem' }}>
        🎨 <strong>Demonstração KodaForge</strong> — Este é um exemplo de site criado para a Clínica Bem Estar.{' '}
        <Link href="/portfolio" style={{ color: '#e9d5ff', textDecoration: 'underline' }}>Ver portfólio completo</Link>
        {' · '}
        <Link href="/contato" style={{ color: '#e9d5ff', textDecoration: 'underline' }}>Quero um site assim</Link>
      </div>

      {/* Navbar */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 8px rgba(0,0,0,.06)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
          <span style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '.75rem', fontWeight: 700 }}>CB</span>
          <span style={{ fontWeight: 700, fontSize: '1rem', color: '#1e293b' }}>Clínica Bem Estar</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '.9rem' }}>
          {['Início','Serviços','Equipe','Contato'].map(l => (
            <a key={l} href="#" style={{ color: '#64748b', textDecoration: 'none', fontWeight: 500 }}>{l}</a>
          ))}
        </div>
        <a href="#agendar" style={{ background: '#7c3aed', color: '#fff', padding: '.5rem 1.2rem', borderRadius: 8, fontWeight: 600, fontSize: '.85rem', textDecoration: 'none' }}>
          Agendar consulta
        </a>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#faf5ff 0%,#f0fdf4 100%)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span style={{ background: '#ede9fe', color: '#7c3aed', padding: '.3rem .8rem', borderRadius: 20, fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em' }}>
              Saúde que transforma vidas
            </span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, color: '#0f172a', margin: '1rem 0', lineHeight: 1.2 }}>
              Cuidado completo para<br /><span style={{ color: '#7c3aed' }}>toda a família</span>
            </h1>
            <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '2rem' }}>
              Atendimento humanizado com profissionais especializados. Consulte, agende e cuide da sua saúde sem complicação.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a id="agendar" href="#" style={{ background: '#7c3aed', color: '#fff', padding: '.75rem 1.75rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '.95rem' }}>
                📅 Agendar consulta
              </a>
              <a href="#" style={{ border: '2px solid #7c3aed', color: '#7c3aed', padding: '.75rem 1.75rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '.95rem' }}>
                Ver serviços
              </a>
            </div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
              {[['1.200+','Pacientes atendidos'],['15+','Anos de experiência'],['4.9★','Avaliação média']].map(([n,l]) => (
                <div key={l}>
                  <strong style={{ fontSize: '1.3rem', color: '#0f172a' }}>{n}</strong>
                  <p style={{ fontSize: '.75rem', color: '#64748b', margin: '.2rem 0 0' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ background: 'linear-gradient(135deg,#7c3aed22,#a855f711)', borderRadius: 20, height: 340, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #ede9fe' }}>
            <div style={{ textAlign: 'center', color: '#7c3aed' }}>
              <div style={{ fontSize: '5rem' }}>🏥</div>
              <p style={{ fontWeight: 600, marginTop: '.5rem' }}>Clínica Bem Estar</p>
              <p style={{ fontSize: '.8rem', color: '#94a3b8' }}>Guarapuava, PR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Nossos serviços</h2>
            <p style={{ color: '#64748b', marginTop: '.5rem' }}>Atendimento especializado em diversas áreas da saúde</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {SERVICES.map(s => (
              <div key={s.name} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '1.75rem', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,.04)', transition: 'transform .2s' }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '.75rem' }}>{s.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '.4rem' }}>{s.name}</h3>
                <p style={{ color: '#64748b', fontSize: '.85rem', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section style={{ background: '#faf5ff', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Nossa equipe</h2>
            <p style={{ color: '#64748b', marginTop: '.5rem' }}>Profissionais qualificados e comprometidos com sua saúde</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem' }}>
            {TEAM.map(t => (
              <div key={t.name} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14, padding: '2rem', textAlign: 'center', boxShadow: '0 1px 4px rgba(0,0,0,.04)' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg,#7c3aed,#a855f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#fff', fontSize: '1.4rem', fontWeight: 700 }}>{t.initials}</div>
                <h3 style={{ fontWeight: 700, color: '#0f172a', marginBottom: '.25rem' }}>{t.name}</h3>
                <p style={{ color: '#7c3aed', fontSize: '.82rem', fontWeight: 600 }}>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)', padding: '4rem 2rem', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Agende sua consulta hoje</h2>
        <p style={{ opacity: .85, marginBottom: '2rem', fontSize: '1.05rem' }}>Atendimento de segunda a sexta, das 8h às 18h. Sábados das 8h às 12h.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" style={{ background: '#fff', color: '#7c3aed', padding: '.75rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none' }}>📅 Agendar online</a>
          <a href="https://wa.me/5542999999999" style={{ border: '2px solid rgba(255,255,255,.5)', color: '#fff', padding: '.75rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none' }}>💬 WhatsApp</a>
        </div>
      </section>

      {/* Footer demo */}
      <footer style={{ background: '#0f172a', color: '#94a3b8', padding: '2rem', textAlign: 'center', fontSize: '.82rem' }}>
        <p>© 2026 Clínica Bem Estar — Guarapuava, PR</p>
        <p style={{ marginTop: '.4rem' }}>
          Site desenvolvido por{' '}
          <Link href="/" style={{ color: '#a78bfa', textDecoration: 'none', fontWeight: 600 }}>KodaForge</Link>
          {' · '}
          <Link href="/contato" style={{ color: '#a78bfa', textDecoration: 'none' }}>Quero um site assim</Link>
        </p>
      </footer>
    </div>
  )
}
