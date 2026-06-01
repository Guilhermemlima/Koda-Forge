'use client'

// Defina a data de expiração da oferta — altere conforme necessário
const OFFER_END = new Date('2026-07-31T23:59:59')

export default function LaunchBanner() {
  if (new Date() > OFFER_END) return null

  return (
    <div className="launch-banner">
      <span className="launch-banner-icon">🏷️</span>
      <p>
        <strong>OFERTA DE LANÇAMENTO:</strong> Plano Starter por{' '}
        <strong>R$ 1.197</strong>{' '}
        <s style={{ opacity: 0.6, fontWeight: 400 }}>R$ 1.497</s> — somente 5 vagas. Válido até 31/07/2026.
      </p>
      <a
        href="/contato?utm_source=banner_lancamento"
        className="launch-banner-btn"
      >
        Aproveitar oferta
      </a>
    </div>
  )
}
