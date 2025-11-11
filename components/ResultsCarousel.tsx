'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const resultImages = [
  {
    src: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&q=80',
    alt: 'Rezultat detailing - mașină lucioasă',
  },
  {
    src: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80',
    alt: 'Rezultat detailing - proces de curățare',
  },
  {
    src: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop&q=80',
    alt: 'Rezultat detailing - rezultat final',
  },
  {
    src: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&h=600&fit=crop&q=80',
    alt: 'Rezultat detailing - ceramic coating',
  },
  {
    src: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=800&h=600&fit=crop&q=80',
    alt: 'Rezultat detailing - polish profesional',
  },
  {
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&q=80',
    alt: 'Rezultat detailing - transformare completă',
  },
  {
    src: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&h=600&fit=crop&q=80',
    alt: 'Rezultat detailing - strălucire premium',
  },
  {
    src: 'https://images.unsplash.com/photo-1549317661-bd32c8be0c2c?w=800&h=600&fit=crop&q=80',
    alt: 'Rezultat detailing - protecție ceramică',
  },
]

export default function ResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  // Calculate visible count based on screen size
  const [visibleCount, setVisibleCount] = useState(2)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Update visible count based on screen size
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3) // Desktop: 3 images
      } else {
        setVisibleCount(2) // Mobile/Tablet: 2 images
      }
    }

    updateVisibleCount()
    window.addEventListener('resize', updateVisibleCount)
    return () => window.removeEventListener('resize', updateVisibleCount)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, resultImages.length - visibleCount)
      return prev >= maxIndex ? 0 : prev + 1
    })
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, resultImages.length - visibleCount)
      return prev <= 0 ? maxIndex : prev - 1
    })
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, resultImages.length - visibleCount)
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [visibleCount])

  return (
    <section ref={ref} className="py-12 lg:py-20 bg-carbon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-warm-white mb-4">
            Rezultatele noastre
          </h2>
          <p className="text-lg text-warm-white/80 max-w-2xl mx-auto">
            Transformări spectaculoase cu atenție la fiecare detaliu
          </p>
        </motion.div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
              }}
            >
              {resultImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="relative h-[200px] sm:h-[250px] lg:h-[300px] rounded-xl overflow-hidden group cursor-pointer">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-carbon/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 lg:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-carbon/90 backdrop-blur-sm rounded-full flex items-center justify-center text-warm-white hover:bg-gold hover:text-carbon transition-premium shadow-lg"
            aria-label="Imaginea anterioară"
          >
            <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 lg:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 lg:w-12 lg:h-12 bg-carbon/90 backdrop-blur-sm rounded-full flex items-center justify-center text-warm-white hover:bg-gold hover:text-carbon transition-premium shadow-lg"
            aria-label="Imaginea următoare"
          >
            <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
          </button>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, resultImages.length - visibleCount + 1) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-premium ${
                  index === currentIndex
                    ? 'w-8 bg-gold'
                    : 'w-2 bg-warm-white/30 hover:bg-warm-white/50'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

