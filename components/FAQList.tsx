'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Cât durează un serviciu de detailing complet?',
    answer: 'Durata variază în funcție de serviciile alese. Un detailing complet poate dura între 3-4 zile, în timp ce un polish profesional durează 1-2 zile. Ceramic coating-ul necesită 2-3 zile pentru aplicare și uscare completă.',
  },
  {
    question: 'Ce include un serviciu de ceramic coating?',
    answer: 'Ceramic coating-ul include pregătirea completă a suprafeței (curățare, decontaminare, polish), aplicarea stratului ceramic și uscarea completă. Oferim protecție de până la 5 ani și rezistență la zgârieturi, UV și contaminanți.',
  },
  {
    question: 'Cum pot programa o programare?',
    answer: 'Poți programa o programare completând formularul de pe pagina "Programare", sunându-ne direct la 0745 313 747 sau contactându-ne pe Instagram. Vom confirma programarea în cel mai scurt timp.',
  },
  {
    question: 'Oferiți garanție pentru serviciile efectuate?',
    answer: 'Da, oferim garanție pentru toate serviciile efectuate. Pentru ceramic coating oferim garanție de până la 5 ani, iar pentru polish și alte servicii oferim garanție conform standardelor industriei.',
  },
  {
    question: 'Ce metode de plată acceptați?',
    answer: 'Acceptăm plata în numerar, card bancar și transfer bancar. Pentru servicii mai mari, oferim posibilitatea de plată în rate prin partenerii noștri.',
  },
  {
    question: 'Este necesar să las mașina la voi?',
    answer: 'Da, pentru serviciile de detailing complet, ceramic coating și polish profesional este necesar să lași mașina la noi pentru perioada de lucru. Pentru servicii mai simple, poți aștepta sau reveni mai târziu.',
  },
]

export default function FAQList() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-carbon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-metallic rounded-xl border border-metallic-light overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-metallic-light transition-premium"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-warm-white pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gold" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-4 text-warm-white/80 leading-relaxed border-t border-metallic-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-3xl mx-auto mt-12 text-center"
        >
          <p className="text-warm-white/80 mb-6">
            Nu ai găsit răspunsul căutat? Contactează-ne direct!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-6 py-3 bg-gold text-carbon font-semibold rounded-lg hover:bg-gold-light transition-premium ripple"
            >
              Contactează-ne
            </a>
            <a
              href="tel:+40745313747"
              className="px-6 py-3 border-2 border-metallic text-warm-white font-semibold rounded-lg hover:border-gold hover:text-gold transition-premium"
            >
              Sună acum
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

