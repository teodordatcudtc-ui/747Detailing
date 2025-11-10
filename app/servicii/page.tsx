import { Metadata } from 'next'
import ServiceCards from '@/components/ServiceCards'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ServiceEstimator from '@/components/ServiceEstimator'

export const metadata: Metadata = {
  title: 'Servicii',
  description: 'Servicii premium de detailing auto: ceramic coating, polish profesional, curățare interior și exterior, detailing complet. Prețuri competitive în București.',
  openGraph: {
    title: 'Servicii Detailing Auto Premium | 747 Detailing Club',
    description: 'Oferim servicii complete de detailing auto: ceramic coating, polish, curățare interior și exterior. Transformă-ți mașina cu profesioniști.',
    url: 'https://747detailingclub.ro/servicii',
  },
}

export default function ServiciiPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-metallic/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-warm-white mb-6">
              Serviciile noastre
            </h1>
            <p className="text-lg text-warm-white/80 leading-relaxed">
              Oferim soluții complete de detailing pentru fiecare nevoie, folosind produse premium și tehnici profesionale.
            </p>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <ServiceCards />

      {/* Before/After Slider */}
      <section className="py-16 lg:py-24 bg-carbon">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-warm-white mb-8 text-center">
              Rezultate înainte și după
            </h2>
            <BeforeAfterSlider />
          </div>
        </div>
      </section>

      {/* Service Estimator */}
      <section className="py-16 lg:py-24 bg-metallic/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-warm-white mb-8 text-center">
              Estimează durata și costul
            </h2>
            <ServiceEstimator />
          </div>
        </div>
      </section>
    </div>
  )
}

