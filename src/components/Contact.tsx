'use client'

import { useState } from 'react'

const DETAILS = [
  { icon: '📧', label: 'E-mail',                 value: 'kodaforge2026@gmail.com', href: 'mailto:kodaforge2026@gmail.com' },
  { icon: '💬', label: 'WhatsApp',               value: '(42) 99125-0274',         href: 'https://wa.me/5542991250274' },
  { icon: '🕐', label: 'Horário de atendimento', value: 'Seg–Sex, 9h às 18h',      href: null },
  { icon: '⚡', label: 'Resposta em',            value: 'Até 24 horas úteis',      href: null },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [status,  setStatus]  = useState<Status>('idle')
  const [hasSite, setHasSite] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = {
      name:      (form.elements.namedItem('name')      as HTMLInputElement).value,
      company:   (form.elements.namedItem('company')   as HTMLInputElement).value,
      email:     (form.elements.namedItem('email')     as HTMLInputElement).value,
      phone:     (form.elements.namedItem('phone')     as HTMLInputElement).value,
      segment:   (form.elements.namedItem('segment')   as HTMLSelectElement).value,
      hassite:   hasSite ? 'Sim' : 'Não',
      siteurl:   hasSite ? (form.elements.namedItem('siteurl') as HTMLInputElement)?.value ?? '' : '',
      plan:      (form.elements.namedItem('plan')      as HTMLSelectElement).value,
      service:   (form.elements.namedItem('service')   as HTMLSelectElement).value,
      budget:    (form.elements.namedItem('budget')    as HTMLSelectElement).value,
      message:   (form.elements.namedItem('message')  as HTMLTextAreaElement).value,
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (res.ok) {
        setStatus('success')
        form.reset()
        setTimeout(() => setStatus('idle'), 5000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  const btnStyle: React.CSSProperties =
    status === 'success'
      ? { background: 'linear-gradient(135deg,#059669,#10b981)' }
      : status === 'error'
      ? { background: 'linear-gradient(135deg,#dc2626,#ef4444)' }
      : {}

  const btnLabel =
    status === 'loading' ? 'Enviando…'      :
    status === 'success' ? '✓ Mensagem enviada! Retornaremos em breve.' :
    status === 'error'   ? '✗ Erro ao enviar. Tente novamente.' :
    'Enviar mensagem →'

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-grid">

          {/* Info */}
          <div className="contact-info reveal">
            <span className="tag">Contato</span>
            <h2 style={{ marginTop: '.8rem' }}>
              Vamos conversar<br />sobre seu projeto
            </h2>
            <p>
              Preencha o formulário ou use um dos canais abaixo.
              Respondemos em até 24 horas em dias úteis.
            </p>
            <div className="contact-details">
              {DETAILS.map((d) => (
                <div key={d.label} className="contact-detail">
                  <div className="c-icon">{d.icon}</div>
                  <div className="c-text">
                    <strong>{d.label}</strong>
                    {d.href
                      ? <a href={d.href} target={d.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="c-link">{d.value}</a>
                      : <span>{d.value}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="contact-form reveal">
            <form onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nome completo *</label>
                  <input name="name" type="text" id="name" placeholder="Seu nome" required />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Nome da empresa</label>
                  <input name="company" type="text" id="company" placeholder="Sua empresa (opcional)" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">E-mail *</label>
                  <input name="email" type="email" id="email" placeholder="seu@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">WhatsApp</label>
                  <input name="phone" type="tel" id="phone" placeholder="(42) 99125-0274" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="segment">Segmento do negócio</label>
                  <select name="segment" id="segment">
                    <option value="">Selecione...</option>
                    <option>Clínica / Saúde</option>
                    <option>Comércio</option>
                    <option>Serviços</option>
                    <option>Educação</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="plan">Plano de interesse</label>
                  <select name="plan" id="plan">
                    <option value="">Selecione...</option>
                    <option>Starter</option>
                    <option>Profissional</option>
                    <option>Enterprise</option>
                    <option>Não sei ainda</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-checkbox-label">
                  <input
                    type="checkbox"
                    name="hassite"
                    checked={hasSite}
                    onChange={e => setHasSite(e.target.checked)}
                    className="form-checkbox"
                  />
                  <span className="form-checkbox-text">Já tenho um site</span>
                </label>

                {hasSite && (
                  <div className="form-site-url reveal-field">
                    <label htmlFor="siteurl">URL do seu site atual</label>
                    <input
                      name="siteurl"
                      type="url"
                      id="siteurl"
                      placeholder="https://www.seusite.com.br"
                    />
                  </div>
                )}
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="service">Serviço de interesse</label>
                  <select name="service" id="service">
                    <option value="">Selecione...</option>
                    <option>Criação de site</option>
                    <option>Redesign de site</option>
                    <option>E-commerce</option>
                    <option>Manutenção mensal</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="budget">Orçamento aproximado</label>
                  <select name="budget" id="budget">
                    <option value="">Selecione...</option>
                    <option>Até R$ 1.500</option>
                    <option>R$ 1.500 – R$ 3.000</option>
                    <option>R$ 3.000 – R$ 6.000</option>
                    <option>Acima de R$ 6.000</option>
                    <option>Plano mensal</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Conte sobre seu projeto *</label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Descreva brevemente o que você precisa, seu negócio e objetivos..."
                  required
                />
              </div>

              <button
                type="submit"
                className="form-submit"
                disabled={status === 'loading'}
                style={btnStyle}
              >
                {btnLabel}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
