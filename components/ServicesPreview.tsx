'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Shield, Wrench, Sparkles, Car } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: 'Ceramic Coating',
    description: 'Protecție durabilă pentru vopsea cu tehnologie ceramică avansată.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop&q=80',
    href: '/servicii#ceramic-coating',
    price: 1500,
    category: 'Sedan',
    duration: '2-3 zile',
  },
  {
    title: 'Polish Profesional',
    description: 'Eliminare zgârieturi și restaurare strălucire originală.',
    icon: Wrench,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=600&fit=crop&q=80',
    href: '/servicii#polish',
    price: 800,
    category: 'Sedan',
    duration: '1-2 zile',
  },
  {
    title: 'Curățare Interior',
    description: 'Detailing complet interior cu produse premium.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=600&fit=crop&q=80',
    href: '/servicii#interior',
    price: 600,
    category: 'Sedan',
    duration: '1 zi',
  },
  {
    title: 'Detailing Complet',
    description: 'Pachet premium pentru transformare completă.',
    icon: Car,
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800&h=600&fit=crop&q=80',
    href: '/servicii#complet',
    price: 2500,
    category: 'Sedan',
    duration: '3-4 zile',
  },
]

export default function ServicesPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            Serviciile noastre
          </h2>
          <p className="text-lg text-warm-white/80 max-w-2xl mx-auto">
            Oferim soluții complete de detailing pentru fiecare nevoie
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/servicii"
            className="inline-block px-8 py-4 border-2 border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-carbon transition-premium"
          >
            Vezi toate serviciile
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  const IconComponent = service.icon
  return (
    <Link
      href={service.href}
      className="block relative w-full h-[350px] lg:h-[400px] bg-metallic rounded-2xl overflow-hidden group cursor-pointer border border-metallic-light hover:border-gold/30 transition-premium"
    >
      {/* Content */}
      <div className="relative h-full flex flex-col justify-between p-6 lg:p-8 text-warm-white">
        {/* Top Section - Icon and Title */}
        <div>
          <div className="mb-4">
            <IconComponent className="w-16 h-16 text-gold" strokeWidth={1.5} />
          </div>
          <h3 className="text-2xl lg:text-3xl font-display font-bold mb-2 group-hover:text-gold transition-colors duration-300">
            {service.title}
          </h3>
        </div>
        
        {/* Bottom Section - Description, Price, Details */}
        <div className="space-y-3">
          <p className="text-base lg:text-lg text-warm-white/90 leading-relaxed">
            {service.description}
          </p>
          
          <div className="pt-3 border-t border-metallic-light">
            <div className="text-xl font-bold text-gold mb-1">
              de la {service.price} RON
            </div>
            <div className="flex items-center gap-4 text-sm text-warm-white/70">
              <span>{service.category}</span>
              <span>•</span>
              <span>{service.duration}</span>
            </div>
            <div className="mt-2 text-sm text-warm-white/60">
              Tap sau hover pentru detalii →
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

