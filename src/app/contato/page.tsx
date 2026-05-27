import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import Contact      from '@/components/Contact'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contato — KodaForge',
  description:
    'Entre em contato e receba um orçamento gratuito em até 24 horas. Sem compromisso.',
}

export default function ContatoPage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="Orçamento Gratuito"
        title="Solicite seu orçamento<br/>sem compromisso"
        subtitle="Preencha o formulário ou nos chame no WhatsApp. Respondemos em até 24 h em dias úteis."
      />
      <Contact />
      <Footer />
    </ClientLayout>
  )
}
