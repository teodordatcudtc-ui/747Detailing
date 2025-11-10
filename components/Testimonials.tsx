'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const testimonials = [
  {
    name: 'Alexandru Popescu',
    car: 'BMW M3',
    text: 'Serviciu excepțional! Mașina arată ca nouă după ceramic coating. Echipa este foarte profesională și atentă la detalii. Recomand cu încredere!',
    rating: 5,
  },
  {
    name: 'Maria Ionescu',
    car: 'Mercedes-Benz C-Class',
    text: 'Am fost impresionată de rezultatele polish-ului profesional. Zgârieturile au dispărut complet și vopseaua strălucește ca în prima zi. Mulțumim!',
    rating: 5,
  },
  {
    name: 'Andrei Georgescu',
    car: 'Audi A4',
    text: 'Detailing complet interior și exterior - rezultatul depășește așteptările. Curățarea este impecabilă și produsele folosite sunt de calitate premium.',
    rating: 5,
  },
  {
    name: 'Elena Radu',
    car: 'Porsche 911',
    text: 'Pentru mașina mea de colecție am ales 747 Detailing Club și nu am fost dezamăgită. Atenție la detalii la nivel profesional, rezultate spectaculoase.',
    rating: 5,
  },
  {
    name: 'Cristian Moldovan',
    car: 'Tesla Model 3',
    text: 'Serviciu rapid, eficient și de calitate. Mașina arată perfect și protecția ceramică este vizibilă. Voi reveni sigur pentru întreținere periodică.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-metallic/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-warm-white mb-4">
            Ce spun clienții
          </h2>
          <p className="text-lg text-warm-white/80 max-w-2xl mx-auto">
            Peste 500 de mașini transformate cu satisfacție maximă
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-metallic rounded-2xl p-8 lg:p-12 border border-metallic-light"
            >
              <div className="flex items-center space-x-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-gold">★</span>
                ))}
              </div>
              <p className="text-lg text-warm-white/90 leading-relaxed mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <div className="font-semibold text-warm-white">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-warm-white/60">
                  {testimonials[currentIndex].car}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-metallic rounded-lg hover:bg-metallic-light transition-premium text-warm-white"
              aria-label="Testimonial anterior"
            >
              ←
            </button>
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-premium ${
                    index === currentIndex
                      ? 'w-8 bg-gold'
                      : 'w-2 bg-warm-white/30 hover:bg-warm-white/50'
                  }`}
                  aria-label={`Testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="p-3 bg-metallic rounded-lg hover:bg-metallic-light transition-premium text-warm-white"
              aria-label="Testimonial următor"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

