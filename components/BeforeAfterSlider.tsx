'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

// Placeholder images - înlocuiește cu imagini reale
const beforeAfterImages = [
  {
    before: '/before-after-1-before.jpg',
    after: '/before-after-1-after.jpg',
    title: 'Ceramic Coating - Transformare completă',
  },
  {
    before: '/before-after-2-before.jpg',
    after: '/before-after-2-after.jpg',
    title: 'Polish Profesional - Eliminare zgârieturi',
  },
  {
    before: '/before-after-3-before.jpg',
    after: '/before-after-3-after.jpg',
    title: 'Detailing Complet - Interior și Exterior',
  },
]

export default function BeforeAfterSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const [isAutoPlaying, setIsAutoPlaying] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const currentImage = beforeAfterImages[currentIndex]

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent | MouseEvent) => {
    if (!isDragging || !sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }
    }
  }, [isDragging])

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setSliderPosition((prev) => {
          if (prev >= 100) {
            return 0
          }
          return prev + 0.5
        })
      }, 30)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying])

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!sliderRef.current) return
    const rect = sliderRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  return (
    <div className="space-y-6">
      {/* Image Slider */}
      <div
        ref={sliderRef}
        className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-xl overflow-hidden cursor-col-resize select-none"
        onMouseDown={handleMouseDown}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After Image */}
        <div className="absolute inset-0">
          <div className="relative w-full h-full bg-metallic">
            <div className="absolute inset-0 flex items-center justify-center text-warm-white/50">
              {currentImage.after} (After)
            </div>
            {/* Când ai imagini reale, de-comentează:
            <Image
              src={currentImage.after}
              alt="După"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            */}
          </div>
        </div>

        {/* Before Image (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="relative w-full h-full bg-metallic">
            <div className="absolute inset-0 flex items-center justify-center text-warm-white/50">
              {currentImage.before} (Before)
            </div>
            {/* Când ai imagini reale, de-comentează:
            <Image
              src={currentImage.before}
              alt="Înainte"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
            */}
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold z-10 cursor-col-resize"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-gold rounded-full flex items-center justify-center shadow-premium">
            <div className="flex space-x-1">
              <div className="w-1 h-4 bg-carbon"></div>
              <div className="w-1 h-4 bg-carbon"></div>
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 bg-carbon/80 px-4 py-2 rounded-lg text-sm font-semibold text-warm-white">
          Înainte
        </div>
        <div className="absolute top-4 right-4 bg-carbon/80 px-4 py-2 rounded-lg text-sm font-semibold text-warm-white">
          După
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-2">
          {beforeAfterImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index)
                setSliderPosition(50)
              }}
              className={`h-2 rounded-full transition-premium ${
                index === currentIndex
                  ? 'w-8 bg-gold'
                  : 'w-2 bg-warm-white/30 hover:bg-warm-white/50'
              }`}
              aria-label={`Imagine ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              setIsAutoPlaying(!isAutoPlaying)
              if (!isAutoPlaying) {
                setSliderPosition(0)
              }
            }}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-premium ${
              isAutoPlaying
                ? 'bg-gold text-carbon'
                : 'bg-metallic text-warm-white hover:bg-metallic-light'
            }`}
          >
            {isAutoPlaying ? 'Oprește' : 'Compară automat'}
          </button>
        </div>
      </div>

      <p className="text-center text-warm-white/60 text-sm">
        {currentImage.title}
      </p>
    </div>
  )
}

