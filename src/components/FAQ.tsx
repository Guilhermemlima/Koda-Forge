'use client'

import { useState } from 'react'

const FAQS = [
  {
    q: 'Quanto tempo leva para meu site ficar pronto?',
    a: 'Em média, sites institucionais ficam prontos em 10 a 15 dias úteis após aprovação do design. Projetos maiores (e-commerce, portais) levam de 20 a 40 dias. Trabalhamos com cronograma transparente e você acompanha cada etapa.',
  },
  {
    q: 'Consigo atualizar o site sozinho depois?',
    a: 'Sim! Entregamos todos os projetos com um painel de administração intuitivo (geralmente WordPress ou uma solução customizada). Além disso, fazemos um treinamento para você ou sua equipe aprender a usar com facilidade.',
  },
  {
    q: 'Preciso ter domínio e hospedagem?',
    a: 'Não obrigatoriamente. Podemos orientar e ajudar na contratação de domínio e hospedagem adequados ao seu projeto. Nos planos de manutenção mensal, cuidamos disso por você.',
  },
  {
    q: 'Posso cancelar o plano mensal a qualquer momento?',
    a: 'Sim, sem multa e sem burocracia. O cancelamento é comunicado com 30 dias de antecedência. Você fica com todo o conteúdo e pode continuar com o site normalmente, apenas sem o suporte incluído.',
  },
  {
    q: 'O site será otimizado para aparecer no Google?',
    a: 'Absolutamente. Todo projeto inclui SEO técnico on-page: estrutura de URLs, metatags, sitemap, velocidade, schema markup e mais. Para SEO contínuo (criação de conteúdo e link building), temos pacotes adicionais.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Projetos avulsos: 50% no início e 50% na entrega. Aceitamos PIX, transferência e cartão de crédito em até 12x. Planos mensais são cobrados via cartão de crédito ou boleto bancário.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i))

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head reveal">
          <span className="tag">Perguntas frequentes</span>
          <h2 className="section-title" style={{ marginTop: '.8rem' }}>Tem alguma dúvida?</h2>
          <p className="section-sub">
            Respondemos as perguntas mais comuns. Se sua dúvida não estiver aqui, é só entrar em contato.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button className="faq-q" onClick={() => toggle(i)}>
                {faq.q}
                <span className="faq-chevron">▾</span>
              </button>
              <div className="faq-a">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
