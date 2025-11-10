'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Phone, MapPin, Instagram, Clock } from 'lucide-react'

export default function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-carbon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-warm-white mb-6">
                Informații contact
              </h2>
            </div>

            <div className="space-y-6">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-warm-white mb-1">Telefon</h3>
                  <a
                    href="tel:+40745313747"
                    className="text-gold hover:text-gold-light text-lg transition-premium"
                  >
                    0745 313 747
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-warm-white mb-1">Adresă</h3>
                  <address className="text-warm-white/80 text-lg not-italic">
                    Strada Dornei 93<br />
                    București 012293
                  </address>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start space-x-4">
                <Instagram className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-warm-white mb-1">Instagram</h3>
                  <a
                    href="https://www.instagram.com/747detailingclub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light text-lg transition-premium"
                  >
                    @747detailingclub
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-warm-white mb-2">Program</h3>
                  <div className="space-y-1 text-warm-white/80">
                    <div className="flex justify-between">
                      <span>Luni - Vineri:</span>
                      <span className="ml-4">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sâmbătă:</span>
                      <span className="ml-4">10:00 - 16:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duminică:</span>
                      <span className="ml-4">Închis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="/booking"
                className="px-6 py-3 bg-gold text-carbon font-semibold rounded-lg hover:bg-gold-light transition-premium ripple text-center"
              >
                Programează acum
              </a>
              <a
                href="tel:+40745313747"
                className="px-6 py-3 border-2 border-metallic text-warm-white font-semibold rounded-lg hover:border-gold hover:text-gold transition-premium text-center"
              >
                Sună acum
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-warm-white mb-6">
                Locația noastră
              </h2>
            </div>
            <div className="relative w-full h-[500px] rounded-xl overflow-hidden shadow-premium">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.079731820868!2d26.0502498!3d44.4725384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b2037d928ee69b%3A0xa02e15428faa1f6e!2s747%20Detailing%20Club!5e0!3m2!1sen!2sro!4v1762810092702!5m2!1sen!2sro"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Locația 747 Detailing Club"
              />
            </div>
            <div className="bg-metallic rounded-xl p-6">
              <h3 className="text-lg font-semibold text-warm-white mb-3">Direcții</h3>
              <p className="text-warm-white/80 mb-4">
                Ne găsești pe Strada Dornei 93, București. Parcare disponibilă în apropiere.
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=44.4725384,26.0502498"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-gold text-carbon font-semibold rounded-lg hover:bg-gold-light transition-premium"
              >
                Deschide în Google Maps
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

