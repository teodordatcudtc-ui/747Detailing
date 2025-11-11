'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const heroImages = [
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&h=800&fit=crop&q=80',
    alt: 'Detailing premium - mașină lucioasă',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=800&fit=crop&q=80',
    alt: 'Detailing premium - proces de curățare',
  },
  {
    src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=1200&h=800&fit=crop&q=80',
    alt: 'Detailing premium - rezultat final',
  },
]

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden pt-20 lg:pt-0">
      {/* Background Pattern */}
      <div className="absolute inset-0 carbon-pattern opacity-30" />
      
      {/* Background Image - Mobile Only */}
      <div className="absolute inset-0 lg:hidden">
        <div className="relative w-full h-full bg-metallic">
          <Image
            src={heroImages[0].src}
            alt={heroImages[0].alt}
            fill
            className="object-cover opacity-20"
            priority
            sizes="100vw"
            unoptimized
          />
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-warm-white leading-tight"
              >
                <span className="text-gold">747</span> Detailing Club
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg sm:text-xl lg:text-2xl text-warm-white/90 font-light leading-relaxed"
              >
                Transformăm mașinile cu atenție la detalii și pasiune pentru perfecțiune. Servicii premium de detailing auto în București.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/booking"
                className="px-8 py-4 bg-gold text-carbon font-semibold rounded-lg hover:bg-gold-light transition-premium ripple text-center"
              >
                Programează acum
              </Link>
              <Link
                href="/servicii"
                className="px-8 py-4 border-2 border-metallic text-warm-white font-semibold rounded-lg hover:border-gold hover:text-gold transition-premium text-center"
              >
                Vezi servicii
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-metallic"
            >
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-gold">500+</div>
                <div className="text-sm text-warm-white/70">Mașini transformate</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-gold">5★</div>
                <div className="text-sm text-warm-white/70">Rating mediu</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-display font-bold text-gold">2+</div>
                <div className="text-sm text-warm-white/70">Ani experiență</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="hidden lg:block relative h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-premium"
          >
            <AnimatePresence mode="wait">
              {heroImages.map((img, index) => {
                if (index !== currentImage) return null
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                  >
                    <div className="relative w-full h-full bg-metallic">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                        unoptimized
                      />
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-carbon/80 backdrop-blur-sm rounded-full flex items-center justify-center text-warm-white hover:bg-gold hover:text-carbon transition-premium"
              aria-label="Imaginea anterioară"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-carbon/80 backdrop-blur-sm rounded-full flex items-center justify-center text-warm-white hover:bg-gold hover:text-carbon transition-premium"
              aria-label="Imaginea următoare"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Carousel Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-2 rounded-full transition-premium ${
                    index === currentImage
                      ? 'w-8 bg-gold'
                      : 'w-2 bg-warm-white/30 hover:bg-warm-white/50'
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-warm-white/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-warm-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

