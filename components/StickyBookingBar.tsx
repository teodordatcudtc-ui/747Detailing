'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Phone, Instagram } from 'lucide-react'

export default function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    // Nu afișa pe pagina de booking
    if (pathname === '/booking') {
      setIsVisible(false)
      return
    }

    const handleScroll = () => {
      // Apare după ce utilizatorul a scrollat 300px
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname])

  if (!isVisible) return null

  return (
    <div className="hidden fixed bottom-0 left-0 right-0 z-40 bg-carbon/95 backdrop-blur-md border-t border-metallic shadow-premium">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between space-x-3">
          <Link
            href="/booking"
            className="flex-1 px-4 py-3 bg-gold text-carbon font-semibold text-center rounded-lg hover:bg-gold-light transition-premium ripple"
          >
            Programează
          </Link>
          <a
            href="tel:+40745313747"
            className="px-4 py-3 bg-metallic text-warm-white rounded-lg hover:bg-metallic-light transition-premium flex items-center justify-center"
            aria-label="Sună acum"
          >
            <Phone className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/747detailingclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-3 bg-metallic text-warm-white rounded-lg hover:bg-metallic-light transition-premium flex items-center justify-center"
            aria-label="Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  )
}

