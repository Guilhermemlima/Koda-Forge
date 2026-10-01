'use client'

import { LIST_PRICE, promo, promoRunning } from '@/lib/promo'

/* Valores e data vêm de @/lib/promo, os mesmos que os cards de preço usam.
   Antes este arquivo tinha a própria data e o próprio valor, e ficou
   anunciando uma oferta de junho sem ninguém notar. */
export default function LaunchBanner() {
  if (!promoRunning()) return null

  return (
    <div className="launch-banner">
      <span className="launch-banner-icon">🏷️</span>
      <p>
        <strong>{promo.headline}:</strong> Plano Starter por{' '}
        <strong>R$ {promo.pix.Starter}</strong>{' '}
        <s style={{ opacity: 0.6, fontWeight: 400 }}>R$ {LIST_PRICE.Starter}</s>{' '}
        — {promo.offFull} em todos os planos. Válido até {promo.endLabel}.
      </p>
      <a
        href="/contato?utm_source=banner_promo"
        className="launch-banner-btn"
      >
        Aproveitar oferta
      </a>
    </div>
  )
}
