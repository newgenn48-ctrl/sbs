'use client'

import { m } from 'framer-motion'
import HeroSection from '@/components/sections/landing/HeroSection'
import CategoryCardsSection from '@/components/sections/landing/CategoryCardsSection'
import FinalCTA from '@/components/sections/landing/FinalCTA'

import {
  Globe, Search, Mail, Bot, Workflow, Headphones,
  Briefcase, Sparkles, ShieldCheck, Clock, CheckCircle2,
} from 'lucide-react'

const cards = [
  {
    icon: Globe,
    eyebrow: 'Website',
    title: 'Professionele Website',
    description: 'Een site die u neerzet als specialist. Custom design, snel, SEO-proof — en 100% van u.',
    bullets: [
      'Binnen 3-4 weken live',
      'Vast bedrag, geen abonnement',
      'U bent eigenaar van de code',
    ],
    price: '€785',
    href: '/website-laten-maken',
    gradient: 'from-primary-emerald to-primary-blue',
    accent: 'text-primary-emerald',
    badge: 'Meest gekozen',
  },
  {
    icon: Search,
    eyebrow: 'Vindbaar worden',
    title: 'SEO voor ZZP',
    description: 'Lokaal of landelijk gevonden worden in Google. Content en techniek voor duurzame groei.',
    bullets: [
      'Lokale SEO voor uw regio',
      'Content die uw expertise toont',
      'Maandelijks rapport zonder jargon',
    ],
    price: 'Op offerte',
    href: '/seo-specialist',
    gradient: 'from-primary-blue to-primary-violet',
    accent: 'text-primary-blue',
  },
  {
    icon: Mail,
    eyebrow: 'E-mail marketing',
    title: 'Nieuwsbrief & Flows',
    description: 'Blijf top-of-mind bij klanten en prospects met e-mail die leest als uzelf — zonder elke week tijd kwijt te zijn.',
    bullets: [
      'Welkomst- en follow-up flows',
      'Maandelijkse nieuwsbrief op ghost-writing basis',
      'Segmentatie op interesse',
    ],
    price: 'Op offerte',
    href: '/marketing-automatisering',
    gradient: 'from-primary-warm to-primary-violet',
    accent: 'text-primary-warm',
  },
  {
    icon: Bot,
    eyebrow: 'AI assistent',
    title: 'AI Chatbot',
    description: 'Een chatbot die vragen beantwoordt, afspraken inplant en uw FAQ afhandelt — terwijl u werkt.',
    bullets: [
      'Getraind op uw eigen content',
      'WhatsApp of op uw website',
      'Pay-as-you-go, geen vaste kosten',
    ],
    price: 'Op offerte',
    href: '/ai-chatbots',
    gradient: 'from-primary-violet to-primary-blue',
    accent: 'text-primary-violet',
  },
  {
    icon: Workflow,
    eyebrow: 'Automatisering',
    title: 'Proces-Automatisering',
    description: 'Handmatig werk dat u elke week doet, automatisch laten lopen — facturen, offertes, leads, planning.',
    bullets: [
      'Zapier/Make of custom code',
      'Kleine quick-wins voor vaste prijs',
      'Koppelt met uw boekhouding en CRM',
    ],
    price: 'Op offerte',
    href: '/proces-automatisering',
    gradient: 'from-primary-emerald to-primary-blue',
    accent: 'text-primary-emerald',
  },
  {
    icon: Headphones,
    eyebrow: 'IT-support',
    title: 'IT-Strippenkaart',
    description: 'Geen vaste IT-er nodig? Koop een strippenkaart en bel ons als er iets stukgaat of u advies wilt.',
    bullets: [
      'Betaal alleen wat u gebruikt',
      'Nederlandse specialist, geen callcenter',
      'Voor Microsoft 365, laptop, security',
    ],
    price: 'Op offerte',
    href: '/it-support',
    gradient: 'from-primary-blue to-primary-emerald',
    accent: 'text-primary-blue',
  },
]

// ============================================================================
// HERO VISUAL — Focused desk mockup for solo professional
// ============================================================================
function ZZPMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-violet/20 via-primary-blue/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-violet/15">
        {/* Header — Maandag 09:00 */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-violet to-primary-blue flex items-center justify-center shadow-lg">
            <Briefcase className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Uw maandagochtend</div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <Clock className="w-3 h-3" />
              <span>09:00 · koffie in de hand</span>
            </div>
          </div>
        </div>

        {/* Three automation cards */}
        <div className="p-4 space-y-2.5">
          {[
            { icon: Mail, label: 'Nieuwsbrief verstuurd', detail: 'Naar uw hele contactenlijst — automatisch', color: 'emerald', delay: 0.3 },
            { icon: Bot, label: 'Chatbot beantwoordt vragen', detail: 'Nieuwe leads in uw inbox', color: 'violet', delay: 0.5 },
            { icon: Search, label: 'Nieuwe rankings op Google', detail: 'Lokale zoektermen omhoog in zoekresultaten', color: 'blue', delay: 0.7 },
            { icon: Workflow, label: 'Factuur automatisch verzonden', detail: 'Periodieke klanten — zonder handwerk', color: 'warm', delay: 0.9 },
          ].map((item, i) => {
            const colorMap: Record<string, { bg: string; text: string }> = {
              emerald: { bg: 'bg-primary-emerald/20', text: 'text-primary-emerald' },
              violet: { bg: 'bg-primary-violet/20', text: 'text-primary-violet' },
              blue: { bg: 'bg-primary-blue/20', text: 'text-primary-blue' },
              warm: { bg: 'bg-primary-warm/20', text: 'text-primary-warm' },
            }
            const c = colorMap[item.color]
            return (
              <m.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: item.delay }}
                className="flex items-center gap-2.5 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
              >
                <div className={`w-8 h-8 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className={`w-4 h-4 ${c.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-white">{item.label}</div>
                  <div className="text-[10px] text-slate-500">{item.detail}</div>
                </div>
                <CheckCircle2 className="w-4 h-4 text-primary-emerald flex-shrink-0" />
              </m.div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 bg-gradient-to-r from-primary-emerald/10 to-primary-blue/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-primary-emerald" />
              <span className="text-xs text-slate-300 font-semibold">Tijd voor écht werk</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">+4u bespaard</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function ZZPClientPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="ZZP & Zelfstandigen"
        title={<>Solo Werken,{' '}<span className="text-gradient">Professioneel Overkomen.</span></>}
        subtitle="Voor ZZP'ers en zelfstandigen die willen dat hun website, marketing en IT net zo professioneel voelt als hun werk — zonder vaste contracten."
        ctaLabel="Plan Kennismaking"
        ctaHref="/gratis-advies"
        tags={['Geen jaarcontracten', 'Vaste prijzen, geen uurtjes', 'Groeit mee als u groeit']}
        visual={<ZZPMockup />}
      />

      <CategoryCardsSection
        sectionNumber="/ 01"
        eyebrow="Zes ZZP-oplossingen"
        title={<>Kies wat u nu nodig heeft,<br /><span className="text-gradient">niet meer dan dat.</span></>}
        description="Als ZZP'er heeft u geen budget voor alles tegelijk. Wij stellen elk jaar samen met u prioriteiten: wat heeft nu de grootste impact?"
        cards={cards}
        footer={
          <p className="text-sm text-slate-500">
            Begint u net? <span className="text-slate-700 font-semibold">Start met een website</span> — de rest komt als uw bedrijf groeit.
          </p>
        }
      />

      <section className="relative py-20 sm:py-28 bg-[#0B1121] overflow-hidden">
        <div className="divider-hairline-dark absolute top-0 left-0 right-0" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-violet mb-4">/ 02 · Waarom wij ZZP begrijpen</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Geen enterprise-prijzen.<br />
            <span className="text-gradient">Wel enterprise-kwaliteit.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            Als ZZP'er moet elke euro zich dubbel terugverdienen. Daarom bieden we vaste prijzen, geen jaarcontracten en de vrijheid om zelf verder te kunnen als u het wilt overnemen. Groot genoeg om professioneel te leveren, klein genoeg om uw situatie te begrijpen.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Clock, label: 'Vaste prijs', detail: 'Geen uurtjes-factuurtje' },
              { icon: ShieldCheck, label: 'Maandelijks opzegbaar', detail: 'Geen jaarcontract' },
              { icon: CheckCircle2, label: 'U blijft eigenaar', detail: 'Code, site, data — allemaal van u' },
              { icon: Sparkles, label: 'Groei mee', detail: 'Schaalt als u schaalt' },
            ].map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <item.icon className="w-6 h-6 text-primary-violet mb-3 mx-auto" />
                <div className="text-sm font-bold text-white mb-1">{item.label}</div>
                <div className="text-xs text-slate-500">{item.detail}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={<>Als ZZP'er bent u uw eigen baas.<br /><span className="text-gradient">Wij maken het makkelijker.</span></>}
        ctaLabel="Plan Een Vrijblijvend Gesprek"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
