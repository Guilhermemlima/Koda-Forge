import type { Metadata } from 'next'
import Link from 'next/link'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import Footer       from '@/components/Footer'
import { EMAIL, PHONE_DISPLAY, PHONE_HREF, CITY, STATE } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/politica-de-privacidade' },
  title: 'Política de Privacidade — KodaForge',
  description:
    'Como a KodaForge coleta, usa e protege os dados pessoais de quem navega no site ou solicita um orçamento. Seus direitos sob a LGPD.',
}

/* Data da última revisão. Atualize ao mudar o conteúdo desta página. */
const ATUALIZADO_EM = '6 de outubro de 2026'

export default function PoliticaDePrivacidadePage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="Privacidade"
        title="Política de<br/>Privacidade"
        subtitle={`Como tratamos os dados de quem visita o site ou pede um orçamento. Atualizada em ${ATUALIZADO_EM}.`}
      />

      <section className="blog-post-page">
        <div className="container">
          <div className="blog-post-content">
            <h2>1. Quem somos</h2>
            <p>
              A KodaForge é uma agência de criação de sites sediada em {CITY}, {STATE}, e
              atende clientes em todo o Brasil. Para qualquer assunto relacionado a dados
              pessoais, fale com a gente pelo e-mail{' '}
              <a href={`mailto:${EMAIL}`} className="c-link">{EMAIL}</a> ou pelo telefone{' '}
              <a href={PHONE_HREF} className="c-link">{PHONE_DISPLAY}</a>.
            </p>

            <h2>2. Quais dados coletamos</h2>
            <p>Coletamos apenas o necessário, e sempre a partir de uma ação sua:</p>
            <ul>
              <li>
                <strong>Dados que você digita no formulário de contato:</strong> nome,
                e-mail, telefone, o endereço do seu site atual (quando você informa) e a
                mensagem que escrever.
              </li>
              <li>
                <strong>Dados de navegação:</strong> páginas visitadas, tempo de visita,
                tipo de dispositivo e navegador, e a origem do acesso. São dados
                estatísticos, usados de forma agregada.
              </li>
            </ul>
            <p>
              Não coletamos dados sensíveis, não pedimos documentos e não solicitamos
              dados de pagamento pelo site.
            </p>

            <h2>3. Para que usamos</h2>
            <ul>
              <li>Responder ao seu contato e preparar o orçamento que você pediu.</li>
              <li>Executar e dar suporte ao projeto, caso você se torne cliente.</li>
              <li>Entender como as pessoas usam o site e melhorá-lo.</li>
              <li>Medir o resultado dos nossos anúncios.</li>
            </ul>
            <p>
              A base legal é o seu consentimento ao enviar o formulário, a execução de
              contrato quando há projeto em andamento, e o legítimo interesse para as
              estatísticas de navegação — tudo conforme o artigo 7º da LGPD
              (Lei nº 13.709/2018).
            </p>

            <h2>4. Cookies e tecnologias de medição</h2>
            <p>
              Este site usa o <strong>Pixel da Meta</strong> (Facebook e Instagram), que
              registra as páginas visitadas e grava cookies no seu navegador. Ele permite
              medir o desempenho dos nossos anúncios e exibir publicidade da KodaForge
              para quem já visitou o site.
            </p>
            <p>
              Esses dados são tratados também pela Meta Platforms, conforme a política de
              privacidade dela. Você pode bloquear os cookies nas configurações do seu
              navegador, ou ajustar as preferências de anúncios diretamente na sua conta
              do Facebook ou Instagram. O site continua funcionando normalmente com os
              cookies bloqueados.
            </p>

            <h2>5. Com quem compartilhamos</h2>
            <p>
              Não vendemos e não cedemos seus dados. Eles são compartilhados apenas com os
              serviços que fazem o site funcionar:
            </p>
            <ul>
              <li><strong>Vercel</strong> — hospedagem do site.</li>
              <li><strong>Resend</strong> — envio dos e-mails do formulário de contato.</li>
              <li><strong>Meta Platforms</strong> — medição de anúncios, descrita acima.</li>
              <li><strong>Google</strong> — mapa incorporado na página de contato.</li>
            </ul>
            <p>
              Alguns desses serviços mantêm servidores fora do Brasil, o que caracteriza
              transferência internacional de dados, permitida pelo artigo 33 da LGPD.
            </p>

            <h2>6. Por quanto tempo guardamos</h2>
            <p>
              Mensagens de contato que não viram projeto são mantidas por até 12 meses.
              Dados de clientes são mantidos enquanto durar a relação contratual e pelo
              prazo legal seguinte. Dados de navegação são mantidos de forma agregada.
            </p>

            <h2>7. Seus direitos</h2>
            <p>A LGPD garante que você pode, a qualquer momento:</p>
            <ul>
              <li>Confirmar se tratamos dados seus e acessar esses dados.</li>
              <li>Corrigir dados incompletos ou desatualizados.</li>
              <li>Pedir a exclusão dos dados tratados com base no consentimento.</li>
              <li>Revogar o consentimento que você deu.</li>
              <li>Saber com quem compartilhamos seus dados.</li>
            </ul>
            <p>
              Para exercer qualquer um deles, escreva para{' '}
              <a href={`mailto:${EMAIL}`} className="c-link">{EMAIL}</a>. Respondemos em
              até 15 dias.
            </p>

            <h2>8. Segurança</h2>
            <p>
              O site trafega inteiramente sob HTTPS com certificado válido, e o acesso aos
              dados recebidos pelo formulário é restrito a quem precisa dele para
              atender você.
            </p>

            <h2>9. Mudanças nesta política</h2>
            <p>
              Se esta política mudar, a data de atualização no topo da página muda junto.
              Vale sempre a versão publicada aqui.
            </p>
          </div>

          <div className="blog-post-back">
            <Link href="/contato" className="btn-outline">
              Falar com a gente
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </ClientLayout>
  )
}
