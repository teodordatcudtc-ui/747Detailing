'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

// Placeholder images - înlocuiește cu imagini reale
const galleryImages = [
  { id: 1, src: '/gallery-1.jpg', alt: 'Detailing ceramic coating', category: 'Ceramic Coating' },
  { id: 2, src: '/gallery-2.jpg', alt: 'Polish profesional', category: 'Polish' },
  { id: 3, src: '/gallery-3.jpg', alt: 'Curățare interior', category: 'Interior' },
  { id: 4, src: '/gallery-4.jpg', alt: 'Detailing complet', category: 'Complet' },
  { id: 5, src: '/gallery-5.jpg', alt: 'Restaurare faruri', category: 'Restaurare' },
  { id: 6, src: '/gallery-6.jpg', alt: 'Ceramic coating rezultat', category: 'Ceramic Coating' },
  { id: 7, src: '/gallery-7.jpg', alt: 'Polish detalii', category: 'Polish' },
  { id: 8, src: '/gallery-8.jpg', alt: 'Curățare motor', category: 'Motor' },
  { id: 9, src: '/gallery-9.jpg', alt: 'Detailing premium', category: 'Complet' },
]

const categories = ['Toate', 'Ceramic Coating', 'Polish', 'Interior', 'Complet', 'Restaurare', 'Motor']

export default function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState('Toate')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === 'Toate'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-16 lg:py-24 bg-carbon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-premium ${
                selectedCategory === category
                  ? 'bg-gold text-carbon'
                  : 'bg-metallic text-warm-white hover:bg-metallic-light'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.id)}
              >
                <div className="relative w-full h-full bg-metallic">
                  <div className="absolute inset-0 flex items-center justify-center text-warm-white/30 text-sm">
                    {image.alt}
                  </div>
                  {/* Când ai imagini reale, de-comentează:
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-premium"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  */}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-carbon/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-premium">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-sm font-semibold text-warm-white">{image.category}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <LightboxModal
            image={galleryImages.find((img) => img.id === selectedImage)!}
            onClose={() => setSelectedImage(null)}
            onNext={() => {
              const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
              const nextIndex = (currentIndex + 1) % filteredImages.length
              setSelectedImage(filteredImages[nextIndex].id)
            }}
            onPrev={() => {
              const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
              const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length
              setSelectedImage(filteredImages[prevIndex].id)
            }}
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function LightboxModal({
  image,
  onClose,
  onNext,
  onPrev,
}: {
  image: typeof galleryImages[0]
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}) {
  const [scale, setScale] = useState(1)

  const handleWheel = (e: React.WheelEvent) => {
    if (e.deltaY < 0) {
      setScale((prev) => Math.min(prev + 0.1, 3))
    } else {
      setScale((prev) => Math.max(prev - 0.1, 0.5))
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-carbon/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        className="relative max-w-7xl max-h-[90vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-carbon/80 rounded-full flex items-center justify-center text-warm-white hover:bg-gold hover:text-carbon transition-premium"
          aria-label="Închide"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Navigation Buttons */}
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-carbon/80 rounded-full flex items-center justify-center text-warm-white hover:bg-gold hover:text-carbon transition-premium"
          aria-label="Imaginea anterioară"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-carbon/80 rounded-full flex items-center justify-center text-warm-white hover:bg-gold hover:text-carbon transition-premium"
          aria-label="Imaginea următoare"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Image */}
        <div
          className="relative w-full h-[80vh] bg-metallic rounded-xl overflow-hidden"
          onWheel={handleWheel}
        >
          <div className="absolute inset-0 flex items-center justify-center text-warm-white/50">
            {image.alt}
          </div>
          {/* Când ai imagini reale, de-comentează:
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-contain"
            style={{ transform: `scale(${scale})` }}
            sizes="90vw"
          />
          */}
        </div>

        {/* Image Info */}
        <div className="absolute bottom-4 left-4 right-4 bg-carbon/80 rounded-lg p-4">
          <div className="text-warm-white font-semibold">{image.category}</div>
          <div className="text-warm-white/70 text-sm">{image.alt}</div>
        </div>

        {/* Zoom Controls */}
        <div className="absolute top-4 left-4 flex items-center space-x-2 bg-carbon/80 rounded-lg p-2">
          <button
            onClick={() => setScale((prev) => Math.max(prev - 0.1, 0.5))}
            className="w-8 h-8 flex items-center justify-center text-warm-white hover:text-gold transition-premium"
            aria-label="Mărește"
          >
            −
          </button>
          <span className="text-warm-white text-sm w-12 text-center">
            {Math.round(scale * 100)}%
          </span>
          <button
            onClick={() => setScale((prev) => Math.min(prev + 0.1, 3))}
            className="w-8 h-8 flex items-center justify-center text-warm-white hover:text-gold transition-premium"
            aria-label="Micșorează"
          >
            +
          </button>
          <button
            onClick={() => setScale(1)}
            className="w-8 h-8 flex items-center justify-center text-warm-white hover:text-gold transition-premium text-xs"
            aria-label="Reset zoom"
          >
            ↻
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}

