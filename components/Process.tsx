'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const steps = [
  {
    number: '01',
    title: 'Consultare',
    description: 'Analizăm starea mașinii și discutăm obiectivele tale pentru a recomanda cel mai bun pachet de servicii.',
  },
  {
    number: '02',
    title: 'Pregătire',
    description: 'Curățare profundă și pregătirea suprafețelor pentru tratamentele premium.',
  },
  {
    number: '03',
    title: 'Aplicare',
    description: 'Aplicăm produse premium cu tehnici profesionale și atenție la fiecare detaliu.',
  },
  {
    number: '04',
    title: 'Finalizare',
    description: 'Control calitate și livrare a mașinii transformate, gata să strălucească.',
  },
]

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-carbon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-warm-white mb-4">
            Procesul nostru
          </h2>
          <p className="text-lg text-warm-white/80 max-w-2xl mx-auto">
            Patru pași simpli către rezultate premium
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative"
            >
              {/* Connector Line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-metallic z-0">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.6 }}
                    className="h-full bg-gold origin-left"
                  />
                </div>
              )}

              <div className="relative z-10">
                <div className="text-6xl font-display font-bold text-gold/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-display font-semibold text-warm-white mb-3">
                  {step.title}
                </h3>
                <p className="text-warm-white/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

