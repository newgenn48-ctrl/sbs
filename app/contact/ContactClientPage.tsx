'use client'

import { m } from 'framer-motion'
import HeroSection from '@/components/sections/landing/HeroSection'
import ContactSection from '@/components/sections/landing/ContactSection'
import FinalCTA from '@/components/sections/landing/FinalCTA'

import {
  Mail, Phone, MapPin, Clock, MessageSquare, Send,
  Calendar, CheckCircle2,
} from 'lucide-react'

// ============================================================================
// HERO VISUAL — Contact card / response timeline
// ============================================================================
function ContactMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-blue/20 via-primary-violet/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-blue to-primary-violet flex items-center justify-center shadow-lg">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Na uw bericht</div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald animate-pulse" />
              <span>Responsgarantie binnen 24u</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="p-4 space-y-2">
          {[
            { time: '0m', label: 'Bericht ontvangen', detail: 'Automatische bevestiging in uw inbox', color: 'emerald', delay: 0.3 },
            { time: '< 24u', label: 'Persoonlijke reactie', detail: 'Van uw vaste aanspreekpunt', color: 'blue', delay: 0.5 },
            { time: '2-3d', label: 'Kennismakingsgesprek', detail: 'Telefonisch of op uw locatie', color: 'violet', delay: 0.7 },
            { time: '1 week', label: 'Voorstel of audit-rapport', detail: 'Concreet, vrijblijvend, heldere prijs', color: 'warm', delay: 0.9 },
          ].map((item, i) => {
            const colorMap: Record<string, { bg: string; text: string }> = {
              emerald: { bg: 'bg-primary-emerald/20', text: 'text-primary-emerald' },
              blue: { bg: 'bg-primary-blue/20', text: 'text-primary-blue' },
              violet: { bg: 'bg-primary-violet/20', text: 'text-primary-violet' },
              warm: { bg: 'bg-primary-warm/20', text: 'text-primary-warm' },
            }
            const c = colorMap[item.color]
            const icons = [Send, Mail, Phone, CheckCircle2]
            const Icon = icons[i]
            return (
              <m.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay }}
                className="flex items-center gap-2.5 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
              >
                <div className={`w-8 h-8 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-4 h-4 ${c.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-mono font-semibold ${c.text} uppercase tracking-wider`}>{item.time}</span>
                    <span className="text-xs font-semibold text-white">{item.label}</span>
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{item.detail}</div>
                </div>
              </m.div>
            )
          })}
        </div>

        {/* Footer — quick contact */}
        <div className="border-t border-white/[0.06] px-4 py-3 bg-white/[0.02]">
          <div className="grid grid-cols-3 gap-2 text-center">
            {[
              { icon: Mail, label: 'Mail' },
              { icon: Phone, label: 'Bellen' },
              { icon: Calendar, label: 'Plannen' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-1.5 py-1.5 rounded border border-white/[0.06]">
                <item.icon className="w-3 h-3 text-primary-emerald" />
                <span className="text-[10px] text-slate-300 font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function ContactClientPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Contact"
        title={<>Bel Ons.{' '}<span className="text-gradient">Of Mail. Of Plan Direct.</span></>}
        subtitle="Geen keuzemenu’s, geen callcenter. Stel uw vraag en u krijgt binnen 24 uur antwoord van een vast aanspreekpunt."
        ctaLabel="Plan Een Gratis Gesprek"
        ctaHref="#contact-form"
        tags={['Reactie binnen 24 uur', 'Nederlandse specialisten', 'Altijd vrijblijvend']}
        visual={<ContactMockup />}
      />

      {/* CONTACT DETAILS */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="mb-12 sm:mb-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-slate-400 tracking-wider">/ 01</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">Bereikbaarheid</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Direct contact. <span className="text-gradient">Geen ruis.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Kies wat bij u past. Elke route komt uit bij een echte specialist — geen helpdesk, geen bot.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[
              { icon: Phone, title: 'Bellen', value: '06 87 87 40 01', detail: 'Ma-vr 09:00 - 17:00', href: 'tel:+31687874001', color: 'from-primary-emerald to-primary-blue' },
              { icon: Mail, title: 'E-mail', value: 'info@startbeheer.nl', detail: 'Reactie binnen 24 uur', href: 'mailto:info@startbeheer.nl', color: 'from-primary-blue to-primary-violet' },
              { icon: Calendar, title: 'Plan online', value: 'Plan direct in', detail: 'Via onze demo-pagina', href: '/demo', color: 'from-primary-violet to-primary-blue' },
            ].map((item, i) => (
              <m.a
                key={i}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group block p-6 sm:p-7 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition-all hover:shadow-xl hover:shadow-slate-900/5"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-4 group-hover:scale-105 transition-transform`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">{item.title}</div>
                <div className="text-lg font-bold text-slate-900 mb-1">{item.value}</div>
                <div className="text-sm text-slate-500">{item.detail}</div>
              </m.a>
            ))}
          </div>

          {/* Address + Hours */}
          <div className="grid sm:grid-cols-2 gap-5 mt-8">
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary-emerald" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Adres</div>
                <div className="text-sm font-bold text-slate-900 mb-0.5">Start Beheer Solutions</div>
                <div className="text-sm text-slate-600">Utrecht, Nederland</div>
              </div>
            </div>
            <div className="p-6 bg-white border border-slate-200 rounded-2xl flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary-blue" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">Openingstijden</div>
                <div className="text-sm text-slate-600">Maandag - Vrijdag: 09:00 - 17:00</div>
                <div className="text-sm text-slate-600">Buiten kantoortijd: SLA-klanten 24/7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div id="contact-form" className="scroll-mt-24">
        <ContactSection
          sectionNumber="/ 02"
          title={<>Of stel uw vraag <span className="text-gradient">per formulier.</span></>}
          subtitle="Beschrijf kort waar u hulp bij wilt — we reageren binnen 24 uur met concrete vervolgstappen."
          textareaPlaceholder="Waar kunnen we u mee helpen? (IT, marketing, AI, website, ...)..."
        />
      </div>

      <FinalCTA
        title={<>Eerste gesprek is gratis.<br /><span className="text-gradient">Zet de eerste stap vandaag.</span></>}
        ctaLabel="Plan Een Vrijblijvend Gesprek"
        ctaHref="#contact-form"
      />
    </div>
  )
}
