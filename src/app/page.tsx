import ClientLayout  from '@/components/ClientLayout'
import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import LogosStrip    from '@/components/LogosStrip'
import Services      from '@/components/Services'
import Process       from '@/components/Process'
import WhyUs         from '@/components/WhyUs'
import Pricing       from '@/components/Pricing'
import Testimonials  from '@/components/Testimonials'
import FAQ           from '@/components/FAQ'
import CTA           from '@/components/CTA'
import Contact       from '@/components/Contact'
import Footer        from '@/components/Footer'

export default function Home() {
  return (
    <ClientLayout>
      <Navbar />
      <Hero />
      <LogosStrip />
      <Services />
      <Process />
      <WhyUs />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </ClientLayout>
  )
}
