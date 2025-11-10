'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, X } from 'lucide-react'

export default function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false)

  const phoneNumber = '0745313747'
  const whatsappNumber = '40745313747' // Format internațional fără +
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-4 space-y-3"
          >
            {/* WhatsApp Button */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-5 py-3 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold whitespace-nowrap">WhatsApp</span>
            </a>

            {/* Phone Button */}
            <a
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-3 bg-gold text-carbon px-5 py-3 rounded-full shadow-lg hover:bg-gold-light transition-all duration-300 group"
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold whitespace-nowrap">Apel rapid</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button - fixed position */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300 ${
          isOpen
            ? 'bg-carbon text-warm-white hover:bg-carbon/90'
            : 'bg-gold text-carbon hover:bg-gold-light'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact rapid"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}

