'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Send,
  MessageSquare,
  AlertCircle,
  Loader2
} from 'lucide-react'
import { services } from '@/lib/navigation'

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  general?: string
}

export default function ContactClientPage() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Validate name
    if (!formState.name.trim()) {
      newErrors.name = 'Naam is verplicht'
    } else if (formState.name.trim().length < 2) {
      newErrors.name = 'Naam moet minimaal 2 tekens bevatten'
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formState.email.trim()) {
      newErrors.email = 'E-mail is verplicht'
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Ongeldig e-mailadres'
    }

    // Validate phone (optional but must be valid if provided)
    if (formState.phone.trim()) {
      const phoneRegex = /^(\+31|0031|0)[1-9][0-9]{8}$/
      const cleanPhone = formState.phone.replace(/[\s\-]/g, '')
      if (!phoneRegex.test(cleanPhone)) {
        newErrors.phone = 'Ongeldig telefoonnummer (bijv. 06-12345678)'
      }
    }

    // Validate message
    if (!formState.message.trim()) {
      newErrors.message = 'Bericht is verplicht'
    } else if (formState.message.trim().length < 10) {
      newErrors.message = 'Bericht moet minimaal 10 tekens bevatten'
    } else if (formState.message.length > 5000) {
      newErrors.message = 'Bericht mag maximaal 5000 tekens bevatten'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (!response.ok) {
        setErrors({ general: data.error || 'Er is een fout opgetreden' })
        return
      }

      router.push('/bedankt')
    } catch {
      setErrors({ general: 'Er is een fout opgetreden. Probeer het later opnieuw.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <main className="min-h-screen bg-cyber-darker flex items-center justify-center py-20 pt-32">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-3xl overflow-hidden border border-quantum-purple/20"
        >
          <div className="h-1 bg-gradient-to-r from-quantum-blue via-quantum-purple to-quantum-green" />

          <div className="p-8 sm:p-12">
            <div className="text-center mb-10">
                  <Badge className="mb-4 px-4 py-2 bg-quantum-blue/20 text-quantum-blue border-quantum-blue/30">
                    <MessageSquare className="w-4 h-4 mr-2 inline" />
                    Contact
                  </Badge>
                  <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                    Neem Contact Op
                  </h1>
                  <p className="text-gray-300">
                    Vul het formulier in en wij nemen zo snel mogelijk contact met u op.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {errors.general && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <p className="text-red-400 text-sm">{errors.general}</p>
                    </div>
                  )}

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="name"
                        value={formState.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-all ${
                          errors.name
                            ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                            : 'border-white/10 focus:border-quantum-blue/50 focus:ring-quantum-blue/50'
                        }`}
                        placeholder="Uw naam"
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-1 text-sm text-red-400">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={formState.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                            : 'border-white/10 focus:border-quantum-blue/50 focus:ring-quantum-blue/50'
                        }`}
                        placeholder="uw@email.nl"
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-1 text-sm text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-all ${
                          errors.phone
                            ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                            : 'border-white/10 focus:border-quantum-blue/50 focus:ring-quantum-blue/50'
                        }`}
                        placeholder="06-12345678"
                      />
                      {errors.phone && (
                        <p id="phone-error" className="mt-1 text-sm text-red-400">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-200 mb-2">
                        Bedrijfsnaam
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        autoComplete="organization"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-quantum-blue/50 focus:ring-1 focus:ring-quantum-blue/50 transition-all"
                        placeholder="Uw bedrijf"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-200 mb-2">
                      Waar kunnen we u mee helpen?
                    </label>
                    <select
                      id="service"
                      name="service"
                      autoComplete="off"
                      value={formState.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-quantum-blue/50 focus:ring-1 focus:ring-quantum-blue/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-cyber-darker">Selecteer een dienst</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="bg-cyber-darker">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                      Uw Bericht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      autoComplete="off"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-1 transition-all resize-none ${
                        errors.message
                          ? 'border-red-500/50 focus:border-red-500/50 focus:ring-red-500/50'
                          : 'border-white/10 focus:border-quantum-blue/50 focus:ring-quantum-blue/50'
                      }`}
                      placeholder="Vertel ons over uw vraag of project..."
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-red-400">{errors.message}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-4">
                    <p className="text-sm text-gray-400">
                      * Verplichte velden
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 px-8 w-full sm:w-auto"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Verzenden...
                        </>
                      ) : (
                        <>
                          Verstuur Bericht
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
