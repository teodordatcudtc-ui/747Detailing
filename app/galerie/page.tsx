import { Metadata } from 'next'
import GalleryGrid from '@/components/GalleryGrid'

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Galerie foto cu rezultatele lucrărilor noastre de detailing auto. Vezi transformările spectaculoase realizate la 747 Detailing Club București.',
  openGraph: {
    title: 'Galerie Detailing Auto | 747 Detailing Club',
    description: 'Galerie foto cu rezultatele lucrărilor noastre de detailing auto. Transformări spectaculoase în București.',
    url: 'https://747detailingclub.ro/galerie',
  },
}

export default function GaleriePage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-metallic/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-warm-white mb-6">
              Galeria noastră
            </h1>
            <p className="text-lg text-warm-white/80 leading-relaxed">
              Descoperă transformările spectaculoase realizate pentru clienții noștri. Fiecare mașină este o operă de artă.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <GalleryGrid />
    </div>
  )
}

