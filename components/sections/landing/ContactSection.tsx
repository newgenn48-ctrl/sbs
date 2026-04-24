'use client'

import { m } from 'framer-motion'
import { useId, useState } from 'react'
import { useRouter } from 'next/navigation'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { AlertCircle, CheckCircle2, Loader2, Mail, Send, Phone } from 'lucide-react'
import { useReducedAmbient } from '@/lib/useMobile'

function handleCardMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

interface TimelineStep {
  time: string
  label: string
}

interface Props {
  sectionNumber: string // "/ 07"
  title: React.ReactNode // "Klaar om te starten?"
  subtitle: string
  timeline?: TimelineStep[] // 4 steps
  serviceTag?: string // e.g. "Website", "IT-support" — tagged in email subject
  phoneNumber?: string // "06 87 87 40 01"
  phoneDisplay?: string // default same as phoneNumber
  formTitle?: string // "Stuur uw vraag"
  formEyebrow?: string // "Neem contact op"
  formIntro?: string
  textareaPlaceholder?: string
  submitLabel?: string
  guaranteeText?: string // "Reactie binnen 24 uur, gegarandeerd"
}

/**
 * Contact sectie met post-submission timeline + gecentreerd formulier + bellen-alternatief.
 */
export default function ContactSection({
  sectionNumber,
  title,
  subtitle,
  timeline = [
    { time: '0 min', label: 'Bevestiging in uw mailbox' },
    { time: '4 uur', label: 'Wij bellen of mailen u terug' },
    { time: '24 uur', label: 'Eerste ontwerp klaar' },
    { time: '1 week', label: 'Start van het project' },
  ],
  serviceTag,
  phoneNumber = '+31687874001',
  phoneDisplay = '06 87 87 40 01',
  formTitle = 'Stuur uw vraag',
  formEyebrow = 'Neem contact op',
  formIntro = 'Schrijf in een paar zinnen wat u zoekt. Wij reageren binnen 24 uur met een concreet voorstel.',
  textareaPlaceholder = 'Vertel kort wat u zoekt...',
  submitLabel = 'Verstuur vraag',
  guaranteeText = 'Reactie binnen 24 uur, gegarandeerd',
}: Props) {
  const router = useRouter()
  const uid = useId()
  const nameId = `${uid}-name`
  const emailId = `${uid}-email`
  const messageId = `${uid}-message`
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [website, setWebsite] = useState('') // honeypot
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const reduced = useReducedAmbient()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)
    if (!name.trim() || !email.trim() || message.trim().length < 10) {
      setError('Vul naam, e-mail en een bericht van minimaal 10 tekens in.')
      return
    }
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, service: serviceTag, website }),
      })
      const data = await res.json().catch(() => ({}))
      if (!res.ok) {
        setError(data.error || 'Er is een fout opgetreden. Probeer het later opnieuw.')
        setSubmitting(false)
        return
      }
      router.push('/bedankt')
    } catch {
      setError('Er is een fout opgetreden. Probeer het later opnieuw.')
      setSubmitting(false)
    }
  }

  return (
    <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <div className="divider-hairline absolute top-0 left-0 right-0" />

      <m.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[600px] h-[60vw] max-h-[500px] rounded-full blur-[80px] md:blur-[140px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.08) 0%, rgba(124,58,237,0.05) 40%, transparent 70%)' }}
        animate={reduced ? undefined : { scale: [1, 1.05, 1] }}
        transition={reduced ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20 relative">
        <ScrollTrigger>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-primary-blue/30" />
              <span className="font-mono text-xs font-medium text-primary-blue/70 tracking-wider">{sectionNumber} — Direct contact</span>
              <span className="h-px w-8 bg-primary-blue/30" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-[1.15] tracking-tight">
              {title}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">{subtitle}</p>
          </div>
        </ScrollTrigger>

        {/* Post-submission timeline */}
        {timeline && timeline.length > 0 && (
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-10 sm:mb-14"
          >
            <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-6">
              Wat gebeurt er na uw aanvraag?
            </p>
            <div className="relative">
              <div className="hidden sm:block absolute top-[22px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-primary-blue/25 to-transparent" />

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-3 relative">
                {timeline.map((step, i) => (
                  <m.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-center relative"
                  >
                    <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-[#FFFDF8] border-2 border-primary-blue/20 mb-3 relative z-10 shadow-[0_2px_8px_rgba(37,99,235,0.08)]">
                      <span className="text-xs font-bold text-primary-blue tracking-tight">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-primary-blue font-semibold mb-1">
                      {step.time}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-snug max-w-[140px] mx-auto">
                      {step.label}
                    </p>
                  </m.div>
                ))}
              </div>
            </div>
          </m.div>
        )}

        {/* Gecentreerd formulier */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onMouseMove={handleCardMouseMove}
          className="card-modern p-6 sm:p-8 lg:p-10 group max-w-2xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue/15 to-primary-violet/10 flex items-center justify-center flex-shrink-0 group-hover:scale-[1.08] transition-transform duration-500">
              <Mail className="w-5 h-5 text-primary-blue" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-blue/70 font-medium mb-1">{formEyebrow}</p>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 tracking-tight">{formTitle}</h3>
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6">{formIntro}</p>

          <form onSubmit={handleSubmit} className="space-y-3 mb-5" noValidate>
            {/* Honeypot — hidden from users, visible to bots */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
              <label htmlFor={`${uid}-website`}>Website (niet invullen)</label>
              <input
                id={`${uid}-website`}
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            {error && (
              <div role="alert" className="p-3 rounded-lg bg-red-50 border border-red-200 flex items-start gap-2 text-sm text-red-700">
                <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
            <div>
              <label htmlFor={nameId} className="sr-only">Uw naam</label>
              <input
                id={nameId}
                type="text"
                name="name"
                autoComplete="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Uw naam"
                className="w-full px-4 py-3 rounded-lg border border-slate-200/70 bg-[#FAFAF5] text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-blue/40 focus:outline-none focus:ring-2 focus:ring-primary-blue/10 transition-all"
              />
            </div>
            <div>
              <label htmlFor={emailId} className="sr-only">E-mailadres</label>
              <input
                id={emailId}
                type="email"
                name="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-mailadres"
                className="w-full px-4 py-3 rounded-lg border border-slate-200/70 bg-[#FAFAF5] text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-blue/40 focus:outline-none focus:ring-2 focus:ring-primary-blue/10 transition-all"
              />
            </div>
            <div>
              <label htmlFor={messageId} className="sr-only">Uw bericht</label>
              <textarea
                id={messageId}
                name="message"
                required
                minLength={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={textareaPlaceholder}
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-200/70 bg-[#FAFAF5] text-sm text-slate-700 placeholder:text-slate-400 focus:border-primary-blue/40 focus:outline-none focus:ring-2 focus:ring-primary-blue/10 transition-all resize-none"
              />
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
                  {submitLabel}
                  <Send className="ml-2 w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          <div className="flex items-center gap-2 text-sm text-slate-500 pt-4 border-t border-slate-100">
            <CheckCircle2 className="w-3.5 h-3.5 text-primary-emerald" />
            <span>{guaranteeText}</span>
          </div>
        </m.div>

        {/* Alternatief: bellen */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm">
          <span className="text-slate-400">Liever direct bellen?</span>
          <a
            href={`tel:${phoneNumber}`}
            className="inline-flex items-center gap-2 font-semibold text-slate-700 hover:text-primary-blue transition-colors"
          >
            <Phone className="w-4 h-4 text-primary-blue" />
            {phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  )
}
