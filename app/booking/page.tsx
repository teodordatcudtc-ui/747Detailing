import { Metadata } from 'next'
import BookingForm from '@/components/BookingForm'

export const metadata: Metadata = {
  title: 'Programare',
  description: 'Programează o consultare gratuită la 747 Detailing Club. Completează formularul și te vom contacta în cel mai scurt timp.',
  openGraph: {
    title: 'Programare Detailing | 747 Detailing Club',
    description: 'Programează serviciile tale de detailing. Completează formularul și te vom contacta rapid.',
    url: 'https://747detailingclub.ro/booking',
  },
}

export default function BookingPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-metallic/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-warm-white mb-6">
              Programează acum
            </h1>
            <p className="text-lg text-warm-white/80 leading-relaxed">
              Completează formularul de mai jos și te vom contacta în cel mai scurt timp pentru a confirma programarea.
            </p>
          </div>
        </div>
      </section>

      <BookingForm />
    </div>
  )
}

