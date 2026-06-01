import type { Metadata } from 'next'
import Link from 'next/link'
import ClientLayout from '@/components/ClientLayout'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '5 sinais de que seu site está perdendo clientes para a concorrência — KodaForge',
  description: 'Lentidão, design desatualizado, falta de CTA e SEO mal configurado são os erros mais comuns. Veja como identificá-los e corrigi-los.',
}

export default function Post2() {
  return (
    <ClientLayout>
      <Navbar />

      <article className="blog-post-page">
        <div className="container">

          {/* Header */}
          <div className="blog-post-header">
            <div className="blog-post-meta">
              <span className="blog-category">Conversão</span>
              <span className="blog-read-time">4 min de leitura</span>
              <span className="blog-read-time">10 jun. 2026</span>
            </div>
            <h1>5 sinais de que seu site está perdendo clientes para a concorrência</h1>
            <p className="blog-post-lead">
              Lentidão, design desatualizado, falta de CTA e SEO mal configurado são os erros mais comuns.
              Veja como identificá-los e corrigi-los antes que custem mais vendas.
            </p>
            <div className="blog-post-author">
              <div className="author-avatar" style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)' }}>KF</div>
              <div>
                <strong style={{ color: 'var(--white)' }}>Equipe KodaForge</strong>
                <span style={{ display: 'block', fontSize: '.8rem', color: 'var(--muted)' }}>Guarapuava, PR</span>
              </div>
            </div>
          </div>

          {/* Cover */}
          <div className="blog-post-cover" style={{ background: 'linear-gradient(135deg,rgba(8,145,178,.2),rgba(6,182,212,.05))' }}>
            <div className="blog-post-cover-inner">
              <span>⚠️ Diagnóstico</span>
              <h3>Seu site está convertendo?</h3>
              <p>Conversão · Performance · UX</p>
            </div>
          </div>

          {/* Content */}
          <div className="blog-post-content">

            <p>
              Você tem um site. Ele está no ar, funciona, mas os clientes não aparecem. O telefone não toca. O formulário fica vazio. Parece familiar?
            </p>
            <p>
              O problema raramente é falta de visitas — é que o site não está convertendo quem chega. Confira os 5 sinais mais comuns de que seu site está afastando clientes sem que você perceba.
            </p>

            {/* Sinal 1 */}
            <div className="blog-signal-card">
              <div className="blog-signal-number" style={{ background: 'linear-gradient(135deg,#dc2626,#ef4444)' }}>1</div>
              <div>
                <h2>Seu site demora mais de 3 segundos para carregar</h2>
              </div>
            </div>
            <p>
              Segundo o Google, <strong>53% dos usuários abandonam um site que demora mais de 3 segundos</strong> para carregar no celular. Cada segundo a mais representa uma queda de 7% na conversão.
            </p>
            <p>
              Como testar: acesse <strong>pagespeed.web.dev</strong>, cole o endereço do seu site e veja a nota. Abaixo de 50 no mobile, você está perdendo visitas todos os dias.
            </p>
            <div className="blog-tip">
              💡 <strong>Como corrigir:</strong> Otimize imagens, remova scripts desnecessários e use uma hospedagem rápida. Sites feitos pela KodaForge saem da fábrica com nota acima de 90.
            </div>

            {/* Sinal 2 */}
            <div className="blog-signal-card">
              <div className="blog-signal-number" style={{ background: 'linear-gradient(135deg,#d97706,#f59e0b)' }}>2</div>
              <div>
                <h2>O design parece que foi feito em 2012</h2>
              </div>
            </div>
            <p>
              Usuários formam uma opinião sobre seu site em <strong>0,05 segundos</strong>. Um design desatualizado — fontes antigas, layout sem espaçamento, cores chocantes ou sem hierarquia visual — passa uma mensagem clara: essa empresa não se preocupa com os detalhes.
            </p>
            <p>
              Se você se envergonha de mostrar seu site para um cliente, é um sinal claro.
            </p>
            <div className="blog-tip">
              💡 <strong>Como corrigir:</strong> Um redesign completo costuma aumentar a taxa de conversão em 2x a 3x. Não é um custo — é um investimento com retorno mensurável.
            </div>

            {/* Sinal 3 */}
            <div className="blog-signal-card">
              <div className="blog-signal-number" style={{ background: 'linear-gradient(135deg,#7c3aed,#a855f7)' }}>3</div>
              <div>
                <h2>Não tem um botão claro de "próxima ação"</h2>
              </div>
            </div>
            <p>
              O visitante chegou no seu site. Leu o conteúdo. Mas… o que ele faz agora? Se não há um botão visível e atrativo dizendo <em>"Fale conosco"</em>, <em>"Solicitar orçamento"</em> ou <em>"Agendar consulta"</em>, ele simplesmente vai embora.
            </p>
            <p>
              Isso se chama <strong>falta de CTA (Call to Action)</strong> e é um dos erros mais caros que um site pode ter.
            </p>
            <div className="blog-tip">
              💡 <strong>Como corrigir:</strong> Cada página do seu site precisa de pelo menos um CTA visível, com cor contrastante, texto direto e posicionado sem precisar rolar a tela.
            </div>

            {/* Sinal 4 */}
            <div className="blog-signal-card">
              <div className="blog-signal-number" style={{ background: 'linear-gradient(135deg,#0891b2,#06b6d4)' }}>4</div>
              <div>
                <h2>O site não aparece no Google para buscas locais</h2>
              </div>
            </div>
            <p>
              Digite no Google: <strong>"[seu segmento] + [sua cidade]"</strong>. Seu site aparece na primeira página? Se não, você está invisível para clientes que estão ativamente procurando pelo que você oferece.
            </p>
            <p>
              SEO mal configurado — sem títulos certos, sem meta descriptions, sem menção à localização — é um dos problemas mais silenciosos e mais caros.
            </p>
            <div className="blog-tip">
              💡 <strong>Como corrigir:</strong> Configure o Google Meu Negócio, adicione sua cidade nas páginas principais e certifique-se de que cada página tem título e descrição únicos voltados para buscas locais.
            </div>

            {/* Sinal 5 */}
            <div className="blog-signal-card">
              <div className="blog-signal-number" style={{ background: 'linear-gradient(135deg,#059669,#10b981)' }}>5</div>
              <div>
                <h2>O site não funciona bem no celular</h2>
              </div>
            </div>
            <p>
              Mais de <strong>70% dos acessos à internet no Brasil são feitos pelo celular</strong>. Se seu site tem texto minúsculo, botões difíceis de clicar ou layout quebrado no smartphone, você está expulsando a maioria dos visitantes.
            </p>
            <p>
              Teste agora: abra seu site no celular e tente navegar normalmente. Se for difícil ou frustrante, seu cliente também vai desistir.
            </p>
            <div className="blog-tip">
              💡 <strong>Como corrigir:</strong> Um site responsivo não é luxo — é o básico. Todos os sites da KodaForge são otimizados para mobile desde a primeira linha de código.
            </div>

            <h2>Quantos sinais você identificou?</h2>
            <div className="blog-score-grid">
              <div className="blog-score-card">
                <strong>0–1 sinais</strong>
                <span>Seu site está em bom estado. Foque em otimizar conversão.</span>
              </div>
              <div className="blog-score-card" style={{ borderColor: 'rgba(245,158,11,.4)' }}>
                <strong>2–3 sinais</strong>
                <span>Atenção! Você está perdendo clientes. Um redesign pode ser necessário.</span>
              </div>
              <div className="blog-score-card" style={{ borderColor: 'rgba(220,38,38,.4)' }}>
                <strong>4–5 sinais</strong>
                <span>Urgente. Cada dia sem correção é dinheiro deixado na mesa.</span>
              </div>
            </div>

            <div className="blog-post-cta">
              <h3>Quer um diagnóstico gratuito do seu site?</h3>
              <p>A KodaForge analisa seu site atual e mostra exatamente o que está custando conversões — sem compromisso.</p>
              <Link href="/contato?utm_source=blog_post2" className="btn-primary">
                Quero meu diagnóstico gratuito →
              </Link>
            </div>

          </div>

          {/* Back */}
          <div className="blog-post-back">
            <Link href="/blog" className="btn-outline">← Voltar para o Blog</Link>
          </div>

        </div>
      </article>

      <Footer />
    </ClientLayout>
  )
}
