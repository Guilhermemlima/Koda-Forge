import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import Testimonials from '@/components/Testimonials'
import CTA          from '@/components/CTA'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  alternates: { canonical: '/depoimentos' },
  title: 'Depoimentos — KodaForge',
  description:
    'Veja o que os clientes da KodaForge dizem sobre os projetos entregues.',
}

export default function DepoimentosPage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="Depoimentos"
        title="O que nossos clientes<br/>dizem sobre nós"
        subtitle="Histórias de quem confiou na KodaForge para colocar o próprio site no ar."
      />
      <Testimonials />
      <CTA />
      <Footer />
    </ClientLayout>
  )
}
