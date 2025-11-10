'use client'

import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle2, XCircle } from 'lucide-react'

const services = [
  'Ceramic Coating',
  'Polish Profesional',
  'Curățare Interior',
  'Curățare Exterior',
  'Detailing Complet',
  'Curățare Motor',
  'Restaurare Faruri',
  'Altele',
]

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '',
    notes: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Salvare locală (JSON)
      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
      bookings.push({
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
      })
      localStorage.setItem('bookings', JSON.stringify(bookings))

      // Simulare trimitere email (în producție, înlocuiește cu API call real)
      // await fetch('/api/booking', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // })

      setSubmitStatus('success')
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        time: '',
        notes: '',
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-carbon">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-metallic rounded-2xl p-6 lg:p-8 border border-metallic-light"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-warm-white font-medium mb-2">
                  Nume complet <span className="text-gold">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-carbon border border-metallic-light rounded-lg text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold transition-premium"
                  placeholder="Ion Popescu"
                  aria-required="true"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-warm-white font-medium mb-2">
                  Telefon <span className="text-gold">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-carbon border border-metallic-light rounded-lg text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold transition-premium"
                  placeholder="0745 313 747"
                  aria-required="true"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-warm-white font-medium mb-2">
                  Email <span className="text-gold">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-carbon border border-metallic-light rounded-lg text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold transition-premium"
                  placeholder="email@example.com"
                  aria-required="true"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-warm-white font-medium mb-2">
                  Serviciu dorit <span className="text-gold">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 bg-carbon border border-metallic-light rounded-lg text-warm-white focus:outline-none focus:border-gold transition-premium"
                  aria-required="true"
                >
                  <option value="">Selectează un serviciu</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-carbon">
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-warm-white font-medium mb-2">
                    Dată preferată
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 bg-carbon border border-metallic-light rounded-lg text-warm-white focus:outline-none focus:border-gold transition-premium"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-warm-white font-medium mb-2">
                    Interval orar preferat
                  </label>
                  <select
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-4 py-3 bg-carbon border border-metallic-light rounded-lg text-warm-white focus:outline-none focus:border-gold transition-premium"
                  >
                    <option value="">Selectează interval</option>
                    <option value="09:00-12:00" className="bg-carbon">09:00 - 12:00</option>
                    <option value="12:00-15:00" className="bg-carbon">12:00 - 15:00</option>
                    <option value="15:00-18:00" className="bg-carbon">15:00 - 18:00</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="notes" className="block text-warm-white font-medium mb-2">
                  Observații
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-carbon border border-metallic-light rounded-lg text-warm-white placeholder-warm-white/40 focus:outline-none focus:border-gold transition-premium resize-none"
                  placeholder="Adaugă detalii despre mașină sau cerințe speciale..."
                />
              </div>

              {/* Submit Status */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-neon-green/20 border border-neon-green rounded-lg text-neon-green flex items-start space-x-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Programarea a fost trimisă cu succes! Te vom contacta în cel mai scurt timp.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 flex items-start space-x-3">
                  <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>A apărut o eroare. Te rugăm să încerci din nou sau să ne suni direct.</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-gold text-carbon font-semibold rounded-lg hover:bg-gold-light transition-premium ripple disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Se trimite...' : 'Trimite programarea'}
              </button>

              <p className="text-sm text-warm-white/50 text-center">
                Prin trimiterea acestui formular, îți dai acordul pentru procesarea datelor tale personale conform{' '}
                <a href="/politica-confidentialitate" className="text-gold hover:underline">
                  politicii de confidențialitate
                </a>
                .
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

