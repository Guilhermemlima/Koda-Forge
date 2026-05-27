import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import FAQ          from '@/components/FAQ'
import CTA          from '@/components/CTA'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Perguntas Frequentes — KodaForge',
  description:
    'Tire suas dúvidas sobre criação de sites, prazos, pagamentos e suporte da KodaForge.',
}

export default function FAQPage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="FAQ"
        title="Dúvidas frequentes"
        subtitle="Encontre respostas rápidas sobre nossos serviços, prazos e formas de pagamento."
      />
      <FAQ />
      <CTA />
      <Footer />
    </ClientLayout>
  )
}
