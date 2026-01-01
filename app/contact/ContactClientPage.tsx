'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Loader2
} from 'lucide-react'
import { services } from '@/lib/navigation'

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefoon',
    value: '085 080 5905',
    href: 'tel:+31850805905',
    description: 'Ma-Vr 09:00 - 17:00',
    color: 'quantum-blue'
  },
  {
    icon: Mail,
    title: 'E-mail',
    value: 'info@startbeheer.nl',
    href: 'mailto:info@startbeheer.nl',
    description: 'Reactie binnen 24 uur',
    color: 'quantum-green'
  },
  {
    icon: MapPin,
    title: 'Locatie',
    value: 'Utrecht, Nederland',
    href: null,
    description: 'Remote-first bedrijf',
    color: 'quantum-purple'
  },
  {
    icon: Clock,
    title: 'Openingstijden',
    value: 'Ma-Vr 09:00-17:00',
    href: null,
    description: 'Support ook buiten kantooruren',
    color: 'quantum-orange'
  },
]

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  message?: string
  general?: string
}

export default function ContactClientPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
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

      setIsSubmitted(true)
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
    <main className="min-h-screen bg-cyber-darker">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-quantum-blue/20 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-blue/20 text-quantum-blue border-quantum-blue/30">
                <MessageSquare className="w-4 h-4 mr-2 inline" />
                Contact
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                <span className="text-white">Laten We </span>
                <span className="text-gradient">Kennismaken</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Heeft u een vraag of wilt u weten wat wij voor uw bedrijf kunnen betekenen?
                Neem contact op en wij reageren binnen 24 uur.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-8 relative">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className={`glass-effect p-6 rounded-2xl border border-${info.color}/20 hover:border-${info.color}/40 transition-all block h-full group`}
                  >
                    <div className={`w-12 h-12 rounded-xl bg-${info.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <info.icon className={`w-6 h-6 text-${info.color}`} />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className={`text-${info.color} font-medium mb-1`}>
                      {info.value}
                    </p>
                    <p className="text-sm text-gray-500">
                      {info.description}
                    </p>
                  </a>
                ) : (
                  <div className={`glass-effect p-6 rounded-2xl border border-${info.color}/20 h-full`}>
                    <div className={`w-12 h-12 rounded-xl bg-${info.color}/10 flex items-center justify-center mb-4`}>
                      <info.icon className={`w-6 h-6 text-${info.color}`} />
                    </div>
                    <h3 className="text-lg font-display font-bold text-white mb-1">
                      {info.title}
                    </h3>
                    <p className="text-gray-300 font-medium mb-1">
                      {info.value}
                    </p>
                    <p className="text-sm text-gray-500">
                      {info.description}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-quantum-purple/10 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-effect rounded-3xl overflow-hidden border border-quantum-purple/20"
            >
              <div className="h-1 bg-gradient-to-r from-quantum-blue via-quantum-purple to-quantum-green" />

              <div className="p-8 sm:p-12">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 rounded-full bg-quantum-green/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-quantum-green" />
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white mb-4">
                      Bericht Verzonden!
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-md mx-auto">
                      Bedankt voor uw bericht. Wij nemen binnen 24 uur contact met u op.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false)
                        setErrors({})
                        setFormState({
                          name: '',
                          email: '',
                          phone: '',
                          company: '',
                          service: '',
                          message: '',
                        })
                      }}
                      variant="outline"
                      className="border-white/20 hover:bg-white/5"
                    >
                      Nog een bericht versturen
                    </Button>
                  </motion.div>
                ) : (
                  <>
                    <div className="text-center mb-10">
                      <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
                        Stuur Ons een Bericht
                      </h2>
                      <p className="text-gray-400">
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
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Naam *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            aria-invalid={!!errors.name}
                            aria-describedby={errors.name ? 'name-error' : undefined}
                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
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
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            E-mail *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formState.email}
                            onChange={handleChange}
                            aria-invalid={!!errors.email}
                            aria-describedby={errors.email ? 'email-error' : undefined}
                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
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
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                            Telefoon
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            aria-invalid={!!errors.phone}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
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
                          <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                            Bedrijfsnaam
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-quantum-blue/50 focus:ring-1 focus:ring-quantum-blue/50 transition-all"
                            placeholder="Uw bedrijf"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                          Waar kunnen we u mee helpen?
                        </label>
                        <select
                          id="service"
                          name="service"
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
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Uw Bericht *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          aria-invalid={!!errors.message}
                          aria-describedby={errors.message ? 'message-error' : undefined}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all resize-none ${
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
                        <p className="text-sm text-gray-500">
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
                  </>
                )}
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-center"
            >
              <p className="text-gray-400 mb-4">
                Liever direct contact?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  variant="outline"
                  className="border-white/20 hover:bg-white/5"
                  asChild
                >
                  <a href="tel:+31850805905">
                    <Phone className="mr-2 w-4 h-4" />
                    085 080 5905
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 hover:bg-white/5"
                  asChild
                >
                  <a href="mailto:info@startbeheer.nl">
                    <Mail className="mr-2 w-4 h-4" />
                    info@startbeheer.nl
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
