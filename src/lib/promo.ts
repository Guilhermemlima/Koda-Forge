/* ─────────────────────────────────────────────────────────────
   Promoções dos planos de site (valor único)

   Fonte única da verdade: o banner da home e os cards de preço leem
   daqui. Antes o banner tinha a própria data e o próprio valor, e ficou
   desatualizado sem ninguém notar.

   PARA TROCAR DE CAMPANHA: mude só a constante ACTIVE_PROMO no fim.
   ───────────────────────────────────────────────────────────── */

export type PlanName = 'Starter' | 'Profissional' | 'Enterprise'

/** Preço de tabela. O desconto de cada campanha incide sobre estes valores. */
export const LIST_PRICE: Record<PlanName, string> = {
  Starter: '1.247',
  Profissional: '2.497',
  Enterprise: '4.997',
}

/** 12x no cartão, sobre o preço de tabela (o cartão não tem desconto). */
export const INSTALLMENT: Record<PlanName, string> = {
  Starter: '103,92',
  Profissional: '208,08',
  Enterprise: '416,42',
}

export type Promo = {
  /** Nome que aparece no selo do card */
  label: string
  /** Chamada curta do banner */
  headline: string
  /** Desconto, curto: o contexto ao redor já diz que é no Pix */
  off: string
  /** Desconto por extenso, para onde não há contexto */
  offFull: string
  /** Último dia válido, em ISO */
  endsAt: string
  /** A mesma data, como o visitante lê */
  endLabel: string
  /** Preço promocional no Pix, por plano */
  pix: Record<PlanName, string>
}

export const PROMOS: Record<string, Promo> = {
  /* 20% sobre a tabela — cai em números redondos de propósito */
  outubro: {
    label: 'Promoção de outubro',
    headline: 'OUTUBRO',
    off: '20% OFF',
    offFull: '20% OFF no Pix',
    endsAt: '2026-10-31T23:59:59',
    endLabel: '31/10/2026',
    pix: { Starter: '997', Profissional: '1.997', Enterprise: '3.997' },
  },

  /* ~26% sobre a tabela */
  black: {
    label: 'Black Friday',
    headline: 'BLACK FRIDAY',
    off: 'até 26% OFF',
    offFull: 'até 26% OFF no Pix',
    endsAt: '2026-11-30T23:59:59',
    endLabel: '30/11/2026',
    pix: { Starter: '927', Profissional: '1.847', Enterprise: '3.697' },
  },

  /* 30% sobre a tabela, para os 3 primeiros clientes */
  fundador: {
    label: 'Cliente Fundador',
    headline: 'CLIENTE FUNDADOR',
    off: '30% OFF',
    offFull: '30% OFF no Pix',
    endsAt: '2026-12-31T23:59:59',
    endLabel: 'enquanto houver vaga',
    pix: { Starter: '877', Profissional: '1.747', Enterprise: '3.497' },
  },
}

/** Campanha no ar. Troque esta linha para virar a promoção. */
export const ACTIVE_PROMO = 'outubro'

export const promo = PROMOS[ACTIVE_PROMO]

/**
 * O banner usa isto para sumir sozinho quando a data passa.
 *
 * Os preços dos cards NÃO dependem desta função, de propósito: as páginas
 * são estáticas, então uma checagem de data feita no servidor e reavaliada
 * no navegador daria divergência de hidratação. Virar a campanha continua
 * sendo trocar ACTIVE_PROMO e publicar.
 */
export function promoRunning(now: Date = new Date()): boolean {
  return now <= new Date(promo.endsAt)
}
