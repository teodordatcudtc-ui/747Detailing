'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type CarCategory = 'mici' | 'sedan' | 'suv'

interface ServicePrice {
  mici: number
  sedan: number
  suv: number
}

const services = [
  { id: 'ceramic', name: 'Ceramic Coating', duration: 2, prices: { mici: 1200, sedan: 1500, suv: 1800 } as ServicePrice },
  { id: 'polish', name: 'Polish Profesional', duration: 1, prices: { mici: 600, sedan: 800, suv: 1000 } as ServicePrice },
  { id: 'interior', name: 'Curățare Interior', duration: 0.5, prices: { mici: 300, sedan: 400, suv: 500 } as ServicePrice },
  { id: 'exterior', name: 'Curățare Exterior', duration: 0.5, prices: { mici: 250, sedan: 300, suv: 400 } as ServicePrice },
  { id: 'engine', name: 'Curățare Motor', duration: 1, prices: { mici: 200, sedan: 250, suv: 300 } as ServicePrice },
  { id: 'headlights', name: 'Restaurare Faruri', duration: 0.5, prices: { mici: 150, sedan: 200, suv: 250 } as ServicePrice },
]

export default function ServiceEstimator() {
  const [selectedCategory, setSelectedCategory] = useState<CarCategory>('sedan')
  const [selectedServices, setSelectedServices] = useState<string[]>([])

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const totalDuration = selectedServices.reduce((sum, id) => {
    const service = services.find((s) => s.id === id)
    return sum + (service?.duration || 0)
  }, 0)

  const totalPrice = selectedServices.reduce((sum, id) => {
    const service = services.find((s) => s.id === id)
    return sum + (service?.prices[selectedCategory] || 0)
  }, 0)

  // Discount pentru pachete
  const discount = selectedServices.length >= 3 ? 0.1 : 0
  const finalPrice = totalPrice * (1 - discount)

  const categoryLabel = selectedCategory === 'mici' ? 'Mașini Mici' : selectedCategory === 'sedan' ? 'Sedan' : 'SUV'

  return (
    <div className="bg-metallic rounded-2xl p-6 lg:p-8 border border-metallic-light">
      <div className="space-y-6">
        {/* Category Selector */}
        <div>
          <h3 className="text-xl font-display font-semibold text-warm-white mb-4">
            Selectează categoria mașinii
          </h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {(['mici', 'sedan', 'suv'] as CarCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-premium capitalize ${
                  selectedCategory === category
                    ? 'bg-gold text-carbon'
                    : 'bg-carbon border border-metallic-light text-warm-white hover:border-gold/30'
                }`}
              >
                {category === 'mici' ? 'Mașini Mici' : category === 'sedan' ? 'Sedan' : 'SUV'}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-display font-semibold text-warm-white mb-4">
            Selectează serviciile
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {services.map((service) => {
              const isSelected = selectedServices.includes(service.id)
              const currentPrice = service.prices[selectedCategory]
              return (
                <button
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-4 rounded-lg border-2 text-left transition-premium ${
                    isSelected
                      ? 'border-gold bg-gold/10'
                      : 'border-metallic-light bg-metallic hover:border-gold/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-warm-white mb-1">
                        {service.name}
                      </div>
                      <div className="text-sm text-warm-white/60">
                        {service.duration} {service.duration === 1 ? 'zi' : 'zile'} • {currentPrice} RON
                      </div>
                    </div>
                    <div
                      className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-premium ${
                        isSelected
                          ? 'border-gold bg-gold'
                          : 'border-warm-white/30'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-4 h-4 text-carbon" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <AnimatePresence>
          {selectedServices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="pt-6 border-t border-metallic-light"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-warm-white/80">Durata estimată:</span>
                  <span className="text-xl font-display font-bold text-gold">
                    {totalDuration} {totalDuration === 1 ? 'zi' : 'zile'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-warm-white/80">Cost estimat:</span>
                  <div className="text-right">
                    {discount > 0 && (
                      <div className="text-sm text-warm-white/60 line-through mb-1">
                        {totalPrice.toFixed(0)} RON
                      </div>
                    )}
                    <span className="text-2xl font-display font-bold text-gold">
                      {finalPrice.toFixed(0)} RON
                    </span>
                    {discount > 0 && (
                      <div className="text-sm text-neon-green mt-1">
                        -{discount * 100}% discount pachet
                      </div>
                    )}
                  </div>
                </div>
                <a
                  href="/booking"
                  className="block w-full mt-6 px-6 py-3 bg-gold text-carbon font-semibold text-center rounded-lg hover:bg-gold-light transition-premium ripple"
                >
                  Programează acum
                </a>
                <p className="text-xs text-center text-warm-white/50">
                  * Prețurile sunt orientative. Contactează-ne pentru o ofertă personalizată.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

