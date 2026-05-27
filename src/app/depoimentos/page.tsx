import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import Testimonials from '@/components/Testimonials'
import CTA          from '@/components/CTA'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Depoimentos — KodaForge',
  description:
    'Veja o que mais de 120 clientes dizem sobre a KodaForge. Resultados reais, histórias reais.',
}

export default function DepoimentosPage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="Depoimentos"
        title="O que nossos clientes<br/>dizem sobre nós"
        subtitle="Mais de 120 negócios transformados. Veja histórias reais de quem confiou na KodaForge."
      />
      <Testimonials />
      <CTA />
      <Footer />
    </ClientLayout>
  )
}
