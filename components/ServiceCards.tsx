'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { Shield, Wrench, Sparkles, Car, Check } from 'lucide-react'
import Image from 'next/image'

type CarCategory = 'mici' | 'sedan' | 'suv'

interface ServicePrice {
  mici: number
  sedan: number
  suv: number
}

const services = [
  {
    id: 'ceramic-coating',
    title: 'Ceramic Coating',
    shortDesc: 'Protecție durabilă pentru vopsea',
    fullDesc: 'Aplicăm straturi de ceramică premium care protejează vopseaua timp de până la 5 ani. Rezistă la UV, ploaie acidă și contaminanți. Strălucire excepțională și ușurință în întreținere.',
    duration: '2-3 zile',
    prices: { mici: 1200, sedan: 1500, suv: 1800 } as ServicePrice,
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop&q=80',
    features: [
      'Protecție 5 ani',
      'Rezistență la zgârieturi',
      'Efect hidrofob',
      'Strălucire premium',
    ],
  },
  {
    id: 'polish',
    title: 'Polish Profesional',
    shortDesc: 'Eliminare zgârieturi și restaurare',
    fullDesc: 'Polish în mai multe etape pentru eliminarea zgârieturilor fine și restaurarea strălucirii originale. Folosim compuși premium și tehnici profesionale.',
    duration: '1-2 zile',
    prices: { mici: 600, sedan: 800, suv: 1000 } as ServicePrice,
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&h=400&fit=crop&q=80',
    features: [
      'Eliminare zgârieturi',
      'Restaurare strălucire',
      'Polish multi-etapă',
      'Finisare premium',
    ],
  },
  {
    id: 'interior',
    title: 'Curățare Interior',
    shortDesc: 'Detailing complet interior',
    fullDesc: 'Curățare profundă a tuturor suprafețelor interioare: scaune, covoare, console, geamuri. Folosim produse premium și aspiratoare profesionale.',
    duration: '4-6 ore',
    prices: { mici: 300, sedan: 400, suv: 500 } as ServicePrice,
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop&q=80',
    features: [
      'Curățare profundă',
      'Tratament scaune',
      'Aspirare profesională',
      'Perfumare premium',
    ],
  },
  {
    id: 'complet',
    title: 'Detailing Complet',
    shortDesc: 'Pachet premium complet',
    fullDesc: 'Pachet complet care include toate serviciile: curățare exterior și interior, polish, ceramic coating. Transformare completă a mașinii.',
    duration: '3-4 zile',
    prices: { mici: 2000, sedan: 2500, suv: 3000 } as ServicePrice,
    icon: Car,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&h=400&fit=crop&q=80',
    features: [
      'Toate serviciile incluse',
      'Transformare completă',
      'Garanție calitate',
      'Rezultate spectaculoase',
    ],
  },
]

export default function ServiceCards() {
  const [selectedCategory, setSelectedCategory] = useState<CarCategory>('sedan')
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 lg:py-24 bg-carbon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Selector */}
        <div className="mb-12 text-center">
          <h3 className="text-xl font-display font-semibold text-warm-white mb-4">
            Selectează categoria mașinii
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {(['mici', 'sedan', 'suv'] as CarCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-premium capitalize ${
                  selectedCategory === category
                    ? 'bg-gold text-carbon'
                    : 'bg-metallic text-warm-white hover:bg-metallic-light'
                }`}
              >
                {category === 'mici' ? 'Mașini Mici' : category === 'sedan' ? 'Sedan' : 'SUV'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12" ref={ref}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col"
            >
              <ServiceCard3D service={service} category={selectedCategory} />
              <Link
                href="/booking"
                className="mt-4 px-6 py-3 bg-gold text-carbon font-semibold rounded-lg hover:bg-gold-light transition-premium text-center"
              >
                Programează {service.title}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard3D({ service, category }: { service: typeof services[0], category: CarCategory }) {
  const [isFlipped, setIsFlipped] = useState(false)
  const IconComponent = service.icon
  const currentPrice = service.prices[category]
  const categoryLabel = category === 'mici' ? 'Mașini Mici' : category === 'sedan' ? 'Sedan' : 'SUV'

  const handleCardClick = (e: React.MouseEvent) => {
    // Verifică dacă click-ul este pe un link sau buton - verificare strictă
    const target = e.target as HTMLElement
    
    // Verifică dacă elementul țintă sau părinții săi sunt link sau buton
    if (target.tagName === 'A' || target.tagName === 'BUTTON') {
      return
    }
    
    const clickedButton = target.closest('button')
    const clickedLink = target.closest('a')
    
    // Dacă click-ul este pe un buton sau link, nu face flip
    if (clickedButton || clickedLink) {
      return
    }
    
    // Toggle flip doar dacă nu e pe un element interactiv
    setIsFlipped(!isFlipped)
  }

  return (
    <div
      className="relative h-[500px] min-h-[500px] rounded-xl overflow-hidden cursor-pointer"
      style={{ perspective: '1000px' }}
      onClick={handleCardClick}
    >
      <motion.div
        className="absolute inset-0"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Front - with background image */}
        <div 
          className="absolute inset-0 rounded-xl overflow-hidden flex flex-col"
          style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
        >
          {/* Background Image - covers entire card */}
          <div className="absolute inset-0">
            <Image
              src={service.image}
              alt={`${service.title} - exemplu`}
              fill
              className="object-cover transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>
          
          {/* Darkness Overlay - gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-carbon/40 via-carbon/70 to-carbon/90" />
          
          {/* Content on top */}
          <div className="relative z-10 p-8 h-full flex flex-col justify-between text-warm-white">
            {/* Top Section */}
            <div>
              <div className="mb-4">
                <IconComponent className="w-16 h-16 text-gold" />
              </div>
              <h3 className="text-2xl font-display font-bold mb-3">
                {service.title}
              </h3>
              <p className="text-warm-white/90 mb-6">{service.shortDesc}</p>
            </div>
            
            {/* Bottom Section */}
            <div className="pt-4 border-t border-warm-white/20">
              <div className="text-gold font-semibold text-lg mb-1">de la {currentPrice} RON</div>
              <div className="text-xs text-warm-white/70 mb-1">{categoryLabel}</div>
              <div className="text-sm text-warm-white/80 mb-3">{service.duration}</div>
              <div className="text-sm text-warm-white/60">
                Tap sau hover pentru detalii →
              </div>
            </div>
          </div>
        </div>

        {/* Back - with grey background (no image) */}
        <div
          className="absolute inset-0 bg-metallic-light rounded-xl overflow-hidden flex flex-col"
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {/* Content */}
          <div className="relative z-10 p-6 lg:p-8 h-full flex flex-col text-warm-white">
            <h3 className="text-xl lg:text-2xl font-display font-bold text-gold mb-3">
              {service.title}
            </h3>
            <p className="text-sm lg:text-base text-warm-white/90 mb-4 leading-relaxed flex-shrink-0">
              {service.fullDesc}
            </p>
            <ul className="space-y-1.5 mb-4 flex-shrink-0">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start text-xs lg:text-sm text-warm-white/80">
                  <Check className="w-3.5 h-3.5 lg:w-4 lg:h-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-4 border-t border-warm-white/20">
              <div className="mb-2">
                <div className="text-xs text-warm-white/70 mb-1.5">Prețuri pentru {categoryLabel}:</div>
                <div className="space-y-0.5 text-xs lg:text-sm">
                  <div className="flex justify-between">
                    <span className="text-warm-white/80">Mașini Mici:</span>
                    <span className="text-warm-white">{service.prices.mici} RON</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-white/80">Sedan:</span>
                    <span className="text-warm-white">{service.prices.sedan} RON</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-warm-white/80">SUV:</span>
                    <span className="text-warm-white">{service.prices.suv} RON</span>
                  </div>
                </div>
              </div>
              <div className="pt-2 border-t border-warm-white/20">
                <div className="text-gold font-semibold text-sm lg:text-base mb-1">de la {currentPrice} RON</div>
                <div className="text-xs lg:text-sm text-warm-white/70">{service.duration}</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

