import { Metadata } from 'next'
import FAQList from '@/components/FAQList'

export const metadata: Metadata = {
  title: 'Întrebări frecvente',
  description: 'Răspunsuri la întrebările frecvente despre serviciile de detailing auto oferite de 747 Detailing Club în București.',
  openGraph: {
    title: 'FAQ | 747 Detailing Club',
    description: 'Răspunsuri la întrebările frecvente despre serviciile noastre de detailing auto.',
    url: 'https://747detailingclub.ro/faq',
  },
}

export default function FAQPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-metallic/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-warm-white mb-6">
              Întrebări frecvente
            </h1>
            <p className="text-lg text-warm-white/80 leading-relaxed">
              Găsește răspunsuri la cele mai comune întrebări despre serviciile noastre.
            </p>
          </div>
        </div>
      </section>

      <FAQList />
    </div>
  )
}

