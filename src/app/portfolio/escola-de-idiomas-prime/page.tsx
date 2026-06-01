import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Escola de Idiomas Prime — Demo KodaForge',
  description: 'Demonstração do site da Escola de Idiomas Prime, desenvolvido pela KodaForge.',
}

const COURSES = [
  { lang: '🇺🇸', name: 'Inglês', levels: '6 níveis', duration: '18 meses', highlight: true },
  { lang: '🇪🇸', name: 'Espanhol', levels: '4 níveis', duration: '12 meses', highlight: false },
  { lang: '🇫🇷', name: 'Francês', levels: '4 níveis', duration: '12 meses', highlight: false },
  { lang: '🇩🇪', name: 'Alemão', levels: '3 níveis', duration: '10 meses', highlight: false },
]

const BENEFITS = [
  { icon: '👨‍🏫', title: 'Professores nativos', desc: 'Aulas com falantes nativos e certificados internacionais.' },
  { icon: '📱', title: 'Aulas online e presenciais', desc: 'Escolha o formato que encaixa na sua rotina.' },
  { icon: '📜', title: 'Certificação reconhecida', desc: 'Certificado com validade para candidaturas no exterior.' },
  { icon: '🚀', title: 'Método acelerado', desc: 'Metodologia exclusiva para aprendizado rápido e eficiente.' },
]

export default function EscolaDemoPage() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', background: '#fff', minHeight: '100vh', color: '#1e293b' }}>

      {/* Demo Banner */}
      <div style={{ background: '#059669', color: '#fff', padding: '.6rem 1rem', textAlign: 'center', fontSize: '.82rem' }}>
        🎨 <strong>Demonstração KodaForge</strong> — Este é um exemplo de site criado para a Escola de Idiomas Prime.{' '}
        <Link href="/portfolio" style={{ color: '#bbf7d0', textDecoration: 'underline' }}>Ver portfólio completo</Link>
        {' · '}
        <Link href="/contato" style={{ color: '#bbf7d0', textDecoration: 'underline' }}>Quero um site assim</Link>
      </div>

      {/* Navbar */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #e2e8f0', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', position: 'sticky', top: 0, zIndex: 100, boxShadow: '0 1px 8px rgba(0,0,0,.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: 'linear-gradient(135deg,#059669,#10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '.8rem' }}>P</div>
          <div>
            <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '.95rem', lineHeight: 1 }}>Prime</div>
            <div style={{ color: '#059669', fontSize: '.68rem', fontWeight: 600 }}>Escola de Idiomas</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '.9rem' }}>
          {['Cursos','Metodologia','Depoimentos','Contato'].map(l => (
            <a key={l} href="#" style={{ color: '#475569', textDecoration: 'none', fontWeight: 500 }}>{l}</a>
          ))}
        </div>
        <a href="#matricula" style={{ background: '#059669', color: '#fff', padding: '.55rem 1.3rem', borderRadius: 8, fontWeight: 700, fontSize: '.85rem', textDecoration: 'none' }}>
          Matricular-se
        </a>
      </nav>

      {/* Hero */}
      <section style={{ background: 'linear-gradient(135deg,#f0fdf4 0%,#ecfdf5 60%,#f0f9ff 100%)', padding: '5.5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span style={{ background: '#dcfce7', color: '#059669', padding: '.3rem .8rem', borderRadius: 20, fontSize: '.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.05em' }}>
              🌍 Fale o mundo
            </span>
            <h1 style={{ fontSize: 'clamp(2rem,4vw,2.8rem)', fontWeight: 800, color: '#0f172a', margin: '1rem 0', lineHeight: 1.2 }}>
              Aprenda um idioma.<br /><span style={{ color: '#059669' }}>Abra portas para o mundo.</span>
            </h1>
            <p style={{ color: '#475569', lineHeight: 1.7, fontSize: '1.05rem', marginBottom: '2rem' }}>
              Metodologia comprovada, professores certificados e aulas que se encaixam na sua rotina. Comece hoje e veja a diferença em 3 meses.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a id="matricula" href="#" style={{ background: '#059669', color: '#fff', padding: '.75rem 1.75rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '.95rem' }}>
                🎓 Aula experimental grátis
              </a>
              <a href="#cursos" style={{ border: '2px solid #059669', color: '#059669', padding: '.75rem 1.75rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none', fontSize: '.95rem' }}>
                Ver cursos
              </a>
            </div>
            <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
              {[['800+','Alunos formados'],['4','Idiomas disponíveis'],['4.9★','Satisfação']].map(([n,l]) => (
                <div key={l}>
                  <strong style={{ fontSize: '1.3rem', color: '#0f172a' }}>{n}</strong>
                  <p style={{ fontSize: '.75rem', color: '#64748b', margin: '.2rem 0 0' }}>{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ background: 'linear-gradient(135deg,#05996922,#10b98111)', borderRadius: 20, height: 340, display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #bbf7d0' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4rem' }}>🌐</div>
                <p style={{ fontWeight: 700, color: '#0f172a', marginTop: '.5rem' }}>Escola de Idiomas Prime</p>
                <p style={{ fontSize: '.8rem', color: '#64748b' }}>Guarapuava, PR • Online em todo o Brasil</p>
                <div style={{ display: 'flex', gap: '.5rem', justifyContent: 'center', marginTop: '1rem', fontSize: '1.8rem' }}>
                  <span>🇺🇸</span><span>🇪🇸</span><span>🇫🇷</span><span>🇩🇪</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursos */}
      <section id="cursos" style={{ padding: '5rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Nossos cursos</h2>
            <p style={{ color: '#64748b', marginTop: '.5rem' }}>Escolha o idioma e comece sua jornada</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.25rem' }}>
            {COURSES.map(c => (
              <div key={c.name} style={{ background: c.highlight ? 'linear-gradient(135deg,#059669,#10b981)' : '#f8fafc', border: c.highlight ? 'none' : '1px solid #e2e8f0', borderRadius: 14, padding: '1.75rem', textAlign: 'center', color: c.highlight ? '#fff' : 'inherit', position: 'relative' }}>
                {c.highlight && <span style={{ position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)', background: '#fbbf24', color: '#0f172a', fontSize: '.65rem', fontWeight: 800, padding: '.2rem .6rem', borderRadius: 20, whiteSpace: 'nowrap' }}>MAIS POPULAR</span>}
                <div style={{ fontSize: '2.8rem', marginBottom: '.5rem' }}>{c.lang}</div>
                <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '.4rem' }}>{c.name}</h3>
                <p style={{ fontSize: '.8rem', opacity: c.highlight ? .85 : undefined, color: c.highlight ? undefined : '#64748b', marginBottom: '.25rem' }}>{c.levels}</p>
                <p style={{ fontSize: '.8rem', opacity: c.highlight ? .85 : undefined, color: c.highlight ? undefined : '#64748b', marginBottom: '1rem' }}>⏱ {c.duration}</p>
                <a href="#" style={{ display: 'block', background: c.highlight ? 'rgba(255,255,255,.2)' : '#059669', color: c.highlight ? '#fff' : '#fff', padding: '.5rem', borderRadius: 8, fontWeight: 700, textDecoration: 'none', fontSize: '.83rem', border: c.highlight ? '1px solid rgba(255,255,255,.3)' : 'none' }}>
                  Saiba mais
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section style={{ padding: '5rem 2rem', background: '#f0fdf4' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a' }}>Por que a Prime?</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1.5rem' }}>
            {BENEFITS.map(b => (
              <div key={b.title} style={{ background: '#fff', borderRadius: 14, padding: '1.75rem', textAlign: 'center', border: '1px solid #bbf7d0' }}>
                <div style={{ fontSize: '2.2rem', marginBottom: '.75rem' }}>{b.icon}</div>
                <h3 style={{ fontWeight: 700, color: '#0f172a', fontSize: '.95rem', marginBottom: '.4rem' }}>{b.title}</h3>
                <p style={{ color: '#64748b', fontSize: '.82rem', lineHeight: 1.6 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section style={{ padding: '4rem 2rem', background: '#fff' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '1.5rem', color: '#fbbf24', marginBottom: '1rem' }}>★★★★★</div>
          <p style={{ fontSize: '1.15rem', color: '#334155', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem' }}>
            "Depois de 8 meses na Prime, consegui meu visto para intercâmbio no Canadá. O método deles é diferente de tudo que tentei antes — aprendes de verdade, não decora."
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg,#059669,#10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>CS</div>
            <div style={{ textAlign: 'left' }}>
              <strong style={{ color: '#0f172a' }}>Camila Santos</strong>
              <p style={{ fontSize: '.8rem', color: '#64748b' }}>Aluna desde 2025 • Guarapuava, PR</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg,#059669,#10b981)', padding: '4rem 2rem', textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1rem' }}>Sua aula experimental é grátis</h2>
        <p style={{ opacity: .9, marginBottom: '2rem', fontSize: '1.05rem' }}>Sem compromisso. Venha conhecer nossa metodologia e sentir a diferença.</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#" style={{ background: '#fff', color: '#059669', padding: '.75rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none' }}>🎓 Agendar aula grátis</a>
          <a href="https://wa.me/5542999999999" style={{ border: '2px solid rgba(255,255,255,.5)', color: '#fff', padding: '.75rem 2rem', borderRadius: 10, fontWeight: 700, textDecoration: 'none' }}>💬 Falar no WhatsApp</a>
        </div>
      </section>

      <footer style={{ background: '#0f172a', color: '#64748b', padding: '2rem', textAlign: 'center', fontSize: '.82rem' }}>
        <p>© 2026 Escola de Idiomas Prime — Guarapuava, PR | Online em todo o Brasil</p>
        <p style={{ marginTop: '.4rem' }}>
          Site desenvolvido por{' '}
          <Link href="/" style={{ color: '#34d399', textDecoration: 'none', fontWeight: 600 }}>KodaForge</Link>
          {' · '}
          <Link href="/contato" style={{ color: '#34d399', textDecoration: 'none' }}>Quero um site assim</Link>
        </p>
      </footer>
    </div>
  )
}
