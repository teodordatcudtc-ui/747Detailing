'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-carbon relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 carbon-pattern opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-warm-white mb-6">
            Gata să transformi mașina?
          </h2>
          <p className="text-lg text-warm-white/80 mb-8 max-w-2xl mx-auto">
            Programează o consultare gratuită și descoperă cum putem transforma mașina ta într-o operă de artă.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 bg-gold text-carbon font-semibold rounded-lg hover:bg-gold-light transition-premium ripple"
            >
              Programează acum
            </Link>
            <a
              href="tel:+40745313747"
              className="px-8 py-4 border-2 border-metallic text-warm-white font-semibold rounded-lg hover:border-gold hover:text-gold transition-premium"
            >
              Sună acum: 0745 313 747
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

