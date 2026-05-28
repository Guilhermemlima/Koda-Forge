import type { Metadata } from 'next'
import ClientLayout from '@/components/ClientLayout'
import Navbar       from '@/components/Navbar'
import PageHero     from '@/components/PageHero'
import Comparison   from '@/components/Comparison'
import Footer       from '@/components/Footer'

export const metadata: Metadata = {
  title: 'KodaForge vs Agência vs Freelancer — Comparativo',
  description:
    'Compare a KodaForge com agências tradicionais e freelancers baratos: preço, prazo, qualidade, SEO e suporte. Veja por que somos a melhor escolha para o seu site.',
}

export default function ComparativoPage() {
  return (
    <ClientLayout>
      <Navbar />
      <PageHero
        tag="KodaForge vs Concorrentes"
        title="A escolha mais inteligente<br/>para o seu negócio"
        subtitle="Compare preço, prazo, qualidade e suporte — e entenda por que centenas de empresas escolhem a KodaForge."
      />
      <Comparison />
      <Footer />
    </ClientLayout>
  )
}
