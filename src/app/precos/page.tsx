import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import Pricing      from '@/components/Pricing'
import FAQ          from '@/components/FAQ'
import CTA          from '@/components/CTA'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Preços e Planos — KodaForge',
  description:
    'Planos transparentes para criação de sites, redesign e manutenção mensal. Sem taxas ocultas, sem surpresas.',
}

export default function PrecosPage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="Planos e Preços"
        title="Investimento transparente,<br/>resultados claros"
        subtitle="Escolha o plano ideal para o momento do seu negócio. Sem taxas ocultas, sem surpresas."
      />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </ClientLayout>
  )
}
