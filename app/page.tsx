import Hero from '@/components/Hero'
import ResultsCarousel from '@/components/ResultsCarousel'
import ServicesPreview from '@/components/ServicesPreview'
import CarShowcase from '@/components/CarShowcase'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'

export const metadata = {
  title: 'Home',
  description: '747 Detailing Club - Servicii premium de detailing auto în București. Transformă-ți mașina cu atenție la detalii. Ceramic coating, polish profesional, curățare completă.',
  openGraph: {
    title: '747 Detailing Club - Detailing Auto Premium București',
    description: 'Servicii premium de detailing auto în București. Ceramic coating, polish profesional, curățare interior și exterior.',
    url: 'https://747detailingclub.ro',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ResultsCarousel />
      <ServicesPreview />
      <CarShowcase />
      <Process />
      <Testimonials />
      <CTA />
    </>
  )
}

