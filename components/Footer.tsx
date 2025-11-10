import Link from 'next/link'
import { Phone, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-carbon border-t border-metallic">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-display font-bold text-gold mb-4">
              747 Detailing Club
            </h3>
            <p className="text-warm-white/80 text-sm leading-relaxed mb-4">
              Servicii premium de detailing auto în București. Transformăm mașinile cu atenție la detalii și pasiune pentru perfecțiune.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-display font-semibold text-warm-white mb-4">
              Link-uri rapide
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicii" className="text-warm-white/80 hover:text-gold text-sm transition-premium">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-warm-white/80 hover:text-gold text-sm transition-premium">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="text-warm-white/80 hover:text-gold text-sm transition-premium">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-warm-white/80 hover:text-gold text-sm transition-premium">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-warm-white/80 hover:text-gold text-sm transition-premium">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-warm-white/80 hover:text-gold text-sm transition-premium">
                  Programare
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-display font-semibold text-warm-white mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+40745313747"
                  className="text-warm-white/80 hover:text-gold transition-premium flex items-center space-x-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>0745 313 747</span>
                </a>
              </li>
              <li className="text-warm-white/80 flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="block">Strada Dornei 93</span>
                  <span className="block">București 012293</span>
                </div>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/747detailingclub/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-warm-white/80 hover:text-gold transition-premium flex items-center space-x-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-base font-display font-semibold text-warm-white mb-4">
              Program
            </h4>
            <ul className="space-y-2 text-sm text-warm-white/80">
              <li>
                <span className="font-medium">Luni - Vineri:</span>
                <span className="block">09:00 - 18:00</span>
              </li>
              <li>
                <span className="font-medium">Sâmbătă:</span>
                <span className="block">10:00 - 16:00</span>
              </li>
              <li>
                <span className="font-medium">Duminică:</span>
                <span className="block">Închis</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-metallic">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-warm-white/60 text-sm">
              © {new Date().getFullYear()} 747 Detailing Club. Toate drepturile rezervate.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-confidentialitate" className="text-warm-white/60 hover:text-gold transition-premium">
                Politica de confidențialitate
              </Link>
              <Link href="/termeni-conditii" className="text-warm-white/60 hover:text-gold transition-premium">
                Termeni și condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

