import Link from 'next/link'

export default function CTA() {
  return (
    <section id="cta">
      <div className="container">
        <div className="cta-box reveal">
          <span className="tag" style={{ marginBottom: '1.5rem' }}>Pronto para começar?</span>
          <h2>Seu próximo cliente está<br />esperando te encontrar</h2>
          <p>
            Não deixe sua concorrência sair na frente. Entre em contato hoje e receba um
            orçamento sem compromisso em menos de 24 horas.
          </p>
          <div className="cta-actions">
            <Link href="/contato" className="btn-primary">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Solicitar orçamento grátis
            </Link>
            <a
              href="https://wa.me/5542991250274"
              className="btn-outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              💬 Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
