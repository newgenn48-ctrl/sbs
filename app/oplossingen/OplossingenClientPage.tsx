'use client'

import { m } from 'framer-motion'
import HeroSection from '@/components/sections/landing/HeroSection'
import CategoryCardsSection from '@/components/sections/landing/CategoryCardsSection'
import FinalCTA from '@/components/sections/landing/FinalCTA'

import {
  Briefcase, Building2, Building, Store, Stethoscope, Scale,
  Target, CheckCircle2, Users, Sparkles,
} from 'lucide-react'

const cards = [
  {
    icon: Briefcase,
    eyebrow: "Voor ZZP'ers",
    title: "ZZP & Zelfstandigen",
    description: 'Professionele online aanwezigheid zonder vaste IT-kosten. Website, automatisering en eventueel een chatbot — alleen wat u nodig heeft.',
    bullets: [
      'Website die u als professional neerzet',
      'IT-strippenkaart, geen vast contract',
      'AI-tools die tijd vrijspelen',
    ],
    price: 'Vanaf €785',
    href: '/zzp-oplossingen',
    gradient: 'from-primary-violet to-primary-blue',
    accent: 'text-primary-violet',
  },
  {
    icon: Building,
    eyebrow: 'Voor kleine MKB',
    title: 'Kleine MKB (5-25 werknemers)',
    description: 'Groeiend bedrijf, beperkte IT-kennis intern. Wij verzorgen website, IT-support, M365 en groei-marketing in één behapbaar pakket.',
    bullets: [
      'Alles-in-1: website + IT + marketing',
      'Vaste contactpersoon die uw bedrijf kent',
      'Schaalt mee als u groeit',
    ],
    price: 'Op offerte',
    href: '/gratis-advies',
    gradient: 'from-primary-blue to-primary-emerald',
    accent: 'text-primary-blue',
    badge: 'Meest gekozen',
  },
  {
    icon: Building2,
    eyebrow: 'Voor groter MKB',
    title: 'MKB (25-150 werknemers)',
    description: 'Serieuze infrastructuur, meerdere vestigingen, complexere processen. Wij leveren enterprise-niveau ontzorging op MKB-budget.',
    bullets: [
      'Systeem- en werkplekbeheer met SLA',
      'Automatisering van complexe workflows',
      'AI voor klantenservice en data-inzichten',
    ],
    price: 'Op offerte',
    href: '/gratis-advies',
    gradient: 'from-primary-emerald to-primary-blue',
    accent: 'text-primary-emerald',
  },
  {
    icon: Store,
    eyebrow: 'Retail & Horeca',
    title: 'Retail & Horeca',
    description: 'Kassa, WiFi, voorraad, reserveringen, social — wij zorgen dat uw lokale bedrijf digitaal net zo sterk staat als de keten om de hoek.',
    bullets: [
      'Snelle WiFi en stabiele kassa-systemen',
      'Social media om lokaal zichtbaar te blijven',
      'Webshop om ook online te verkopen',
    ],
    price: 'Op offerte',
    href: '/gratis-advies',
    gradient: 'from-primary-warm to-primary-violet',
    accent: 'text-primary-warm',
  },
  {
    icon: Stethoscope,
    eyebrow: 'Zorg & Praktijk',
    title: 'Zorg & Praktijk',
    description: 'AVG-proof IT, afspraak-automatisering, patiëntcommunicatie en secure werkplekken — met kennis van praktijksoftware en compliance.',
    bullets: [
      'AVG-compliant werkplekken en backup',
      'Voice-assistent voor afspraak-beheer',
      'Integratie met EPD en praktijksoftware',
    ],
    price: 'Op offerte',
    href: '/gratis-advies',
    gradient: 'from-primary-blue to-primary-violet',
    accent: 'text-primary-blue',
  },
  {
    icon: Scale,
    eyebrow: 'Juridisch & Advies',
    title: 'Juridisch & Advies',
    description: 'Discrete IT, veilige documentstromen, cliënt-portals en compliance-proof M365 — voor kantoren waar vertrouwen alles is.',
    bullets: [
      'Encrypted werkplekken en dossieropslag',
      'Client-portals met veilige uploads',
      'M365 met DLP en eDiscovery',
    ],
    price: 'Op offerte',
    href: '/gratis-advies',
    gradient: 'from-primary-violet to-primary-emerald',
    accent: 'text-primary-violet',
  },
]

// ============================================================================
// HERO VISUAL — Org-silhouettes grid
// ============================================================================
function OrgGridMockup() {
  const orgs = [
    { icon: Briefcase, label: 'ZZP', color: 'from-primary-violet to-primary-blue' },
    { icon: Building, label: 'MKB klein', color: 'from-primary-blue to-primary-emerald' },
    { icon: Building2, label: 'MKB groot', color: 'from-primary-emerald to-primary-blue' },
    { icon: Store, label: 'Retail', color: 'from-primary-warm to-primary-violet' },
    { icon: Stethoscope, label: 'Zorg', color: 'from-primary-blue to-primary-violet' },
    { icon: Scale, label: 'Juridisch', color: 'from-primary-violet to-primary-emerald' },
  ]

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-violet/20 via-primary-blue/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative grid grid-cols-3 gap-3">
        {orgs.map((org, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.1 }}
            className="aspect-square bg-[#0d1025] rounded-2xl border border-white/10 shadow-xl p-4 flex flex-col items-center justify-center gap-3"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${org.color} flex items-center justify-center shadow-lg`}>
              <org.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-[11px] font-mono text-slate-400">{org.label}</div>
          </m.div>
        ))}
      </div>

      {/* Connecting badge */}
      <m.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.0 }}
        className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full shadow-lg">
          <Users className="w-4 h-4 text-primary-violet" />
          <span className="text-xs font-semibold text-slate-700">Eén partner voor iedereen</span>
        </div>
      </m.div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function OplossingenClientPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Oplossingen Per Branche"
        title={<>Eén Partner,{' '}<span className="text-gradient">Voor Elk Soort Bedrijf.</span></>}
        subtitle="ZZP'er, MKB, retail, zorg of juridisch — wij combineren IT, marketing en AI passend bij úw branche, grootte en budget."
        ctaLabel="Vind Uw Oplossing"
        ctaHref="/gratis-advies"
        tags={['Schaalt van 1 tot 150+ medewerkers', 'Branche-specifieke kennis', 'Eén aanspreekpunt voor alles']}
        visual={<OrgGridMockup />}
      />

      <CategoryCardsSection
        sectionNumber="/ 01"
        eyebrow="Voor wie wij werken"
        title={<>Kies wat <span className="text-gradient">bij u past.</span></>}
        description="Elk type bedrijf heeft eigen uitdagingen. Wij bundelen onze diensten — IT, marketing, AI — in pakketten die bij úw schaal en branche horen."
        cards={cards}
        footer={
          <p className="text-sm text-slate-500">
            Staat uw situatie er niet bij? <span className="text-slate-700 font-semibold">Bel ons</span> — wij adviseren altijd op maat.
          </p>
        }
      />

      <section className="relative py-20 sm:py-28 bg-[#0B1121] overflow-hidden">
        <div className="divider-hairline-dark absolute top-0 left-0 right-0" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-violet mb-4">/ 02 · Waarom één partner</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Van versnipperd<br />
            <span className="text-gradient">naar één aanspreekpunt.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            De meeste MKB-bedrijven hebben vier leveranciers: een hoster, een IT-er, een marketing-bureau en een freelancer voor automatiseringen. Wij doen alles onder één dak — zodat u één contract, één factuur en één telefoontje heeft.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Users, label: 'Eén team', detail: 'Kent uw bedrijf door en door' },
              { icon: Target, label: 'Alles op elkaar afgestemd', detail: 'IT, marketing en AI werken samen' },
              { icon: Sparkles, label: 'Groei mee', detail: 'Schaalt van 1 naar 150+' },
              { icon: CheckCircle2, label: 'Transparant', detail: 'Eén factuur, geen verrassingen' },
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
        title={<>Eén partner die uw hele digitale kant doet.<br /><span className="text-gradient">Tijd voor rust.</span></>}
        ctaLabel="Plan Een Kennismaking"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
