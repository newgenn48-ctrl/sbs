'use client'

import { m } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  Play,
  AlertCircle,
  Loader2,
  CheckCircle2,
  Clock,
  Globe,
  ShoppingCart,
  Code,
  Sparkles,
} from 'lucide-react'

const demoTypes = [
  { value: 'website', label: 'Website', icon: Globe },
  { value: 'webshop', label: 'Webshop', icon: ShoppingCart },
  { value: 'webapplicatie', label: 'Webapplicatie', icon: Code },
]

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  type?: string
  general?: string
}

export default function DemoClientPage() {
  const router = useRouter()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    type: '',
    details: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formState.name.trim() || formState.name.trim().length < 2) {
      newErrors.name = 'Vul uw naam in'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formState.email.trim()) {
      newErrors.email = 'Vul uw e-mailadres in'
    } else if (!emailRegex.test(formState.email)) {
      newErrors.email = 'Ongeldig e-mailadres'
    }

    if (!formState.type) {
      newErrors.type = 'Kies een type demo'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          service: `Demo aanvraag: ${formState.type}`,
          message: `Demo aanvraag voor: ${formState.type}\n\nExtra details: ${formState.details || 'Geen extra details opgegeven.'}`,
        }),
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <main className="min-h-screen bg-white py-20 pt-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Left — Info */}
            <m.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <Badge className="mb-4 px-4 py-2 bg-primary-violet/10 text-primary-violet border-primary-violet/30">
                <Play className="w-4 h-4 mr-2 inline" />
                Gratis Demo
              </Badge>

              <h1 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                Gratis Demo{' '}
                <span className="text-gradient">Aanvragen</span>
              </h1>

              <p className="text-slate-600 mb-8 leading-relaxed">
                Benieuwd hoe uw website, webshop of applicatie eruit gaat zien?
                Wij maken een persoonlijke demo speciaal voor uw situatie.
              </p>

              {/* Benefits */}
              <div className="space-y-4">
                {[
                  { icon: Clock, text: 'Demo binnen 24 uur' },
                  { icon: Sparkles, text: 'Persoonlijk voor uw bedrijf' },
                  { icon: CheckCircle2, text: '100% gratis en vrijblijvend' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary-emerald/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary-emerald" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </m.div>

            {/* Right — Form */}
            <m.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errors.general && (
                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <p className="text-red-600 text-sm">{errors.general}</p>
                    </div>
                  )}

                  {/* Demo type selection */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Waarvoor wilt u een demo? *
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      {demoTypes.map((type) => (
                        <button
                          key={type.value}
                          type="button"
                          onClick={() => {
                            setFormState(prev => ({ ...prev, type: type.value }))
                            if (errors.type) setErrors(prev => ({ ...prev, type: undefined }))
                          }}
                          className={`flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all text-center min-h-[44px] ${
                            formState.type === type.value
                              ? 'border-primary-violet bg-primary-violet/5 text-primary-violet'
                              : 'border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <type.icon className="w-5 h-5" />
                          <span className="text-sm font-medium">{type.label}</span>
                        </button>
                      ))}
                    </div>
                    {errors.type && <p className="mt-1 text-sm text-red-500">{errors.type}</p>}
                  </div>

                  {/* Name + Email */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="demo-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="demo-name"
                        name="name"
                        autoComplete="name"
                        value={formState.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                          errors.name ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-primary-blue focus:ring-primary-blue'
                        }`}
                        placeholder="Uw naam"
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="demo-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        id="demo-email"
                        name="email"
                        autoComplete="email"
                        value={formState.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 transition-all ${
                          errors.email ? 'border-red-300 focus:border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-primary-blue focus:ring-primary-blue'
                        }`}
                        placeholder="uw@email.nl"
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone + Company */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="demo-phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Telefoon
                      </label>
                      <input
                        type="tel"
                        id="demo-phone"
                        name="phone"
                        autoComplete="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:border-primary-blue focus:ring-primary-blue transition-all"
                        placeholder="06-12345678"
                      />
                    </div>
                    <div>
                      <label htmlFor="demo-company" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Bedrijfsnaam
                      </label>
                      <input
                        type="text"
                        id="demo-company"
                        name="company"
                        autoComplete="organization"
                        value={formState.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:border-primary-blue focus:ring-primary-blue transition-all"
                        placeholder="Uw bedrijf"
                      />
                    </div>
                  </div>

                  {/* Details */}
                  <div>
                    <label htmlFor="demo-details" className="block text-sm font-medium text-slate-700 mb-1.5">
                      Vertel kort over uw project
                    </label>
                    <textarea
                      id="demo-details"
                      name="details"
                      value={formState.details}
                      onChange={handleChange}
                      rows={3}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:border-primary-blue focus:ring-primary-blue transition-all resize-none"
                      placeholder="Bijv. een webshop voor kleding, een portfolio website..."
                    />
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary-violet to-primary-blue hover:brightness-110 shadow-lg shadow-primary-violet/20 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Verzenden...
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-5 w-5" />
                        Gratis Demo Aanvragen
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-slate-400 text-center">
                    Wij nemen binnen 24 uur contact met u op voor uw persoonlijke demo.
                  </p>
                </form>
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </main>
  )
}
