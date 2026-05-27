import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import Services     from '@/components/Services'
import Process      from '@/components/Process'
import WhyUs        from '@/components/WhyUs'
import CTA          from '@/components/CTA'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Serviços — KodaForge',
  description:
    'Criação de sites, redesign completo e manutenção mensal. Soluções digitais sob medida para o seu negócio.',
}

export default function ServicosPage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="Nossos Serviços"
        title="Tudo que seu negócio<br/>precisa no digital"
        subtitle="Criação, redesign ou manutenção — entregamos com qualidade, no prazo e com suporte dedicado."
      />
      <Services />
      <Process />
      <WhyUs />
      <CTA />
      <Footer />
    </ClientLayout>
  )
}
