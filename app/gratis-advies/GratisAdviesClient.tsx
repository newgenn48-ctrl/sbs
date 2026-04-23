'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AlertCircle, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface FormErrors {
  name?: string
  email?: string
  message?: string
  general?: string
}

export default function GratisAdviesClient() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    website: '', // honeypot
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitting, setSubmitting] = useState(false)

  function validate(): boolean {
    const next: FormErrors = {}
    if (!form.name.trim() || form.name.trim().length < 2) next.name = 'Vul uw naam in'
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!form.email.trim()) next.email = 'Vul uw e-mailadres in'
    else if (!emailRe.test(form.email)) next.email = 'Ongeldig e-mailadres'
    if (form.message.trim().length < 10) next.message = 'Bericht is te kort (min. 10 tekens)'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrors({})
    if (!validate()) return
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          website: form.website,
          service: 'Gratis advies',
        }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setErrors({ general: data.error || 'Er is een fout opgetreden. Probeer het later opnieuw.' })
        setSubmitting(false)
        return
      }
      router.push('/bedankt')
    } catch {
      setErrors({ general: 'Er is een fout opgetreden. Probeer het later opnieuw.' })
      setSubmitting(false)
    }
  }

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }))
    if (errors[key as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAF5] flex items-center justify-center py-24 pt-32 px-5">
      <div className="w-full max-w-xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-3">
            Contact <span className="text-gradient">opnemen</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Vul het formulier in. Wij reageren binnen 24 uur met een concreet voorstel — vrijblijvend.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4"
        >
          {/* Honeypot */}
          <div
            aria-hidden="true"
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
          >
            <label htmlFor="advies-website">Website (niet invullen)</label>
            <input
              id="advies-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={form.website}
              onChange={(e) => update('website', e.target.value)}
            />
          </div>

          {errors.general && (
            <div role="alert" className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 text-sm text-red-700">
              <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>{errors.general}</span>
            </div>
          )}

          <div>
            <label htmlFor="advies-name" className="block text-sm font-medium text-slate-700 mb-1.5">
              Naam <span className="text-red-500">*</span>
            </label>
            <input
              id="advies-name"
              type="text"
              name="name"
              autoComplete="name"
              required
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? 'advies-name-error' : undefined}
              placeholder="Uw naam"
              className={`w-full px-4 py-3 rounded-lg border bg-[#FAFAF5] text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.name
                  ? 'border-red-300 focus:border-red-400 focus:ring-red-400/20'
                  : 'border-slate-200 focus:border-primary-blue focus:ring-primary-blue/20'
              }`}
            />
            {errors.name && (
              <p id="advies-name-error" className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="advies-email" className="block text-sm font-medium text-slate-700 mb-1.5">
              E-mail <span className="text-red-500">*</span>
            </label>
            <input
              id="advies-email"
              type="email"
              name="email"
              autoComplete="email"
              required
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? 'advies-email-error' : undefined}
              placeholder="uw@email.nl"
              className={`w-full px-4 py-3 rounded-lg border bg-[#FAFAF5] text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                errors.email
                  ? 'border-red-300 focus:border-red-400 focus:ring-red-400/20'
                  : 'border-slate-200 focus:border-primary-blue focus:ring-primary-blue/20'
              }`}
            />
            {errors.email && (
              <p id="advies-email-error" className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="advies-company" className="block text-sm font-medium text-slate-700 mb-1.5">
              Bedrijf
            </label>
            <input
              id="advies-company"
              type="text"
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={(e) => update('company', e.target.value)}
              placeholder="Bedrijfsnaam (optioneel)"
              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-[#FAFAF5] text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:border-primary-blue focus:ring-primary-blue/20 transition-all"
            />
          </div>

          <div>
            <label htmlFor="advies-message" className="block text-sm font-medium text-slate-700 mb-1.5">
              Waar wilt u advies over? <span className="text-red-500">*</span>
            </label>
            <textarea
              id="advies-message"
              name="message"
              required
              minLength={10}
              rows={5}
              value={form.message}
              onChange={(e) => update('message', e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? 'advies-message-error' : undefined}
              placeholder="Vertel kort waar u hulp bij wilt..."
              className={`w-full px-4 py-3 rounded-lg border bg-[#FAFAF5] text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all resize-none ${
                errors.message
                  ? 'border-red-300 focus:border-red-400 focus:ring-red-400/20'
                  : 'border-slate-200 focus:border-primary-blue focus:ring-primary-blue/20'
              }`}
            />
            {errors.message && (
              <p id="advies-message-error" className="mt-1 text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="w-full bg-gradient-to-r from-primary-blue to-primary-violet hover:brightness-110 text-white font-semibold shadow-lg shadow-primary-blue/20 disabled:opacity-60"
          >
            {submitting ? (
              <>
                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                Versturen...
              </>
            ) : (
              <>
                Advies aanvragen
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </div>
    </main>
  )
}
