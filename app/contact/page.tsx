import { Metadata } from 'next'
import ContactInfo from '@/components/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contactează 747 Detailing Club în București. Strada Dornei 93, telefon 0745 313 747. Program: Luni-Vineri 09:00-18:00.',
  openGraph: {
    title: 'Contact 747 Detailing Club | București',
    description: 'Contactează-ne pentru programare sau întrebări. Strada Dornei 93, București. Telefon: 0745 313 747.',
    url: 'https://747detailingclub.ro/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-metallic/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-warm-white mb-6">
              Contact
            </h1>
            <p className="text-lg text-warm-white/80 leading-relaxed">
              Suntem aici să răspundem la întrebările tale și să te ajutăm să transformi mașina.
            </p>
          </div>
        </div>
      </section>

      <ContactInfo />
    </div>
  )
}

