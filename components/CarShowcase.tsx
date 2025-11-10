'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

export default function CarShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-carbon relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 carbon-pattern opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-premium"
          >
            <div className="absolute inset-0 bg-metallic">
              <Image
                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&h=800&fit=crop&q=80"
                alt="Mașină premium transformată de 747 Detailing Club"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-warm-white mb-4">
                Transformarea ta începe aici
              </h2>
              <p className="text-lg text-warm-white/80 leading-relaxed mb-6">
                Fiecare mașină care intră în garajul nostru primește tratament premium. Folosim doar produse de cea mai înaltă calitate și tehnici profesionale pentru a obține rezultate spectaculoase.
              </p>
              <p className="text-base text-warm-white/70 leading-relaxed">
                De la curățare profundă până la protecție ceramică, transformăm mașinile tale într-o operă de artă. Experiența noastră de peste 10 ani și pasiunea pentru perfecțiune se văd în fiecare detaliu.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-metallic">
              <div>
                <div className="text-3xl font-display font-bold text-gold mb-2">500+</div>
                <div className="text-sm text-warm-white/70">Mașini transformate</div>
              </div>
              <div>
                <div className="text-3xl font-display font-bold text-gold mb-2">100%</div>
                <div className="text-sm text-warm-white/70">Satisfacție garantată</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

