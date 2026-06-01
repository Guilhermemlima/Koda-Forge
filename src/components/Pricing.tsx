'use client'

import { useState } from 'react'

type Feature = { ok: boolean; text: string }
type Plan = {
  name: string
  monthly: string
  oneoff: string
  installment: string
  desc: string
  features: Feature[]
  popular: boolean
  cta: string
  fill: boolean
}

const PLANS: Plan[] = [
  {
    name: 'Starter',
    monthly: '997',
    oneoff: '1.497',
    installment: '124,75',
    desc: 'Ideal para profissionais autônomos e pequenos negócios que querem uma presença online profissional.',
    features: [
      { ok: true,  text: 'Site institucional até 5 páginas' },
      { ok: true,  text: 'Design responsivo (mobile)' },
      { ok: true,  text: 'Formulário de contato' },
      { ok: true,  text: 'SEO básico on-page' },
      { ok: true,  text: '30 dias de suporte pós-entrega' },
      { ok: false, text: 'E-commerce / loja virtual' },
      { ok: false, text: 'Integrações avançadas' },
    ],
    popular: false,
    cta: 'Solicitar orçamento',
    fill: false,
  },
  {
    name: 'Profissional',
    monthly: '1.997',
    oneoff: '2.997',
    installment: '249,75',
    desc: 'Para empresas que querem um site robusto, com mais páginas, funcionalidades e geração de leads.',
    features: [
      { ok: true,  text: 'Site até 10 páginas + blog' },
      { ok: true,  text: 'Design UI/UX personalizado' },
      { ok: true,  text: 'Integrações (WhatsApp, maps, etc.)' },
      { ok: true,  text: 'SEO avançado + Google Analytics' },
      { ok: true,  text: 'Velocidade acima de 90' },
      { ok: true,  text: '60 dias de suporte prioritário' },
      { ok: false, text: 'Loja virtual completa' },
    ],
    popular: true,
    cta: 'Quero esse plano',
    fill: true,
  },
  {
    name: 'Enterprise',
    monthly: '3.997',
    oneoff: '5.997',
    installment: '499,75',
    desc: 'Solução completa para e-commerce, portais ou projetos com necessidades avançadas e escalabilidade.',
    features: [
      { ok: true, text: 'Páginas ilimitadas' },
      { ok: true, text: 'Loja virtual / e-commerce completo' },
      { ok: true, text: 'Painel administrativo' },
      { ok: true, text: 'Integrações com ERPs e APIs' },
      { ok: true, text: 'SEO técnico avançado' },
      { ok: true, text: '90 dias de suporte VIP' },
      { ok: true, text: 'Treinamento da equipe incluso' },
    ],
    popular: false,
    cta: 'Solicitar orçamento',
    fill: false,
  },
]

const MAINTENANCE = [
  { icon: '🛡️', name: 'Básico',   price: '197', desc: 'Backup semanal, monitoramento de uptime, certificado SSL renovado automaticamente.',                                                                          featured: false },
  { icon: '⚙️', name: 'Completo', price: '397', desc: 'Tudo do Básico + atualizações de conteúdo ilimitadas, suporte WhatsApp em horário comercial e relatório mensal.',                                           featured: true  },
  { icon: '🚀', name: 'VIP',      price: '697', desc: 'Tudo do Completo + suporte 24/7, otimização contínua de SEO, melhorias mensais de performance e prioridade total.', featured: false },
]

export default function Pricing() {
  const [isMonthly, setIsMonthly] = useState(false)

  return (
    <section id="pricing">
      <div className="blob" />
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Planos e preços</span>
          <h2 className="section-title" style={{ marginTop: '.8rem' }}>
            Investimento transparente,<br />resultados claros
          </h2>
          <p className="section-sub">
            Escolha o plano ideal para o momento do seu negócio. Sem taxas ocultas, sem surpresas.
          </p>
        </div>

        {/* Toggle */}
        <div className="pricing-toggle reveal">
          <span className="toggle-label">Avulso</span>
          <div
            className={`toggle-switch${isMonthly ? ' active' : ''}`}
            onClick={() => setIsMonthly((p) => !p)}
            role="switch"
            aria-checked={isMonthly}
          />
          <span className="toggle-label">Mensal</span>
          <span className="save-badge">Economize 20%</span>
        </div>

        {/* Plans */}
        <div className="pricing-grid">
          {PLANS.map((plan) => (
            <div key={plan.name} className={`price-card${plan.popular ? ' popular' : ''} reveal`}>
              {plan.popular && <span className="popular-tag">MAIS POPULAR</span>}
              <h3>{plan.name}</h3>
              <div className="price-amount">
                <span className="price-currency">R$</span>
                <span className="price-value">{isMonthly ? plan.monthly : plan.oneoff}</span>
                <span className="price-period">&nbsp;{isMonthly ? '/mês' : 'único'}</span>
              </div>
              {!isMonthly && (
                <p className="price-installment">ou 12x de R$ {plan.installment} no cartão</p>
              )}
              <p className="price-desc">{plan.desc}</p>
              <ul className="price-features">
                {plan.features.map((f) => (
                  <li key={f.text}>
                    <span className={f.ok ? 'check-icon' : 'x-icon'}>{f.ok ? '✓' : '✗'}</span>
                    <span style={!f.ok ? { opacity: 0.4 } : {}}>{f.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`btn-plan ${plan.fill ? 'btn-plan-fill' : 'btn-plan-outline'}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Maintenance */}
        <div className="section-head reveal" style={{ marginTop: '5rem', marginBottom: '2rem' }}>
          <span className="tag">Manutenção mensal</span>
          <h2 className="section-title" style={{ marginTop: '.8rem', fontSize: '1.8rem' }}>
            Adicione suporte contínuo ao seu site
          </h2>
        </div>

        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
          {MAINTENANCE.map((m) => (
            <div
              key={m.name}
              className={`service-card${m.featured ? ' featured' : ''} reveal`}
              style={{ textAlign: 'center' }}
            >
              {m.featured && <span className="featured-badge">RECOMENDADO</span>}
              <div style={{ fontSize: '2rem', marginBottom: '.8rem' }}>{m.icon}</div>
              <h3>{m.name}</h3>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--white)', margin: '.5rem 0' }}>
                R$ {m.price}
                <span style={{ fontSize: '1rem', color: 'var(--muted)' }}>/mês</span>
              </div>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
