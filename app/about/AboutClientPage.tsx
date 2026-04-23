'use client'

import { m } from 'framer-motion'
import HeroSection from '@/components/sections/landing/HeroSection'
import FinalCTA from '@/components/sections/landing/FinalCTA'

import {
  Target, Users, Heart, ShieldCheck, Sparkles,
  CheckCircle2, Handshake, Code2, TrendingUp, Lightbulb,
} from 'lucide-react'

const values = [
  {
    icon: Handshake,
    title: 'Transparant',
    description: 'Vaste prijzen, heldere offertes, geen kleine lettertjes. U weet vooraf wat u krijgt en wat het kost.',
  },
  {
    icon: Target,
    title: 'Resultaatgericht',
    description: 'Wij leveren oplossingen die écht iets opleveren — geen techniek om de techniek.',
  },
  {
    icon: Users,
    title: 'Persoonlijk',
    description: 'Geen callcenter, wel een vast aanspreekpunt die uw bedrijf bij naam kent.',
  },
  {
    icon: Heart,
    title: 'Betrokken',
    description: 'Uw succes is ons succes. Wij investeren in langdurige relaties, niet in korte-termijn-deals.',
  },
  {
    icon: ShieldCheck,
    title: 'Betrouwbaar',
    description: 'Afspraak is afspraak. Wij leveren wat we beloven, op tijd en zonder verrassingen.',
  },
  {
    icon: Sparkles,
    title: 'Innovatief',
    description: 'Wij blijven leren en toepassen wat nieuw is — AI, automation en nieuwe tools — zolang het u voordeel brengt.',
  },
]

// ============================================================================
// HERO VISUAL — Team/philosophy mockup
// ============================================================================
function AboutMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-emerald/20 via-primary-blue/15 to-primary-violet/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/15 p-6">
        <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider mb-4">Onze missie</div>
        <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-6">
          Enterprise-kwaliteit IT, marketing en AI — <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-emerald via-primary-blue to-primary-violet">toegankelijk voor MKB en ZZP.</span>
        </h3>

        <div className="space-y-3">
          {[
            { icon: Code2, label: 'Custom, nooit template', color: 'text-primary-blue' },
            { icon: Users, label: 'Eén aanspreekpunt, geen helpdesk', color: 'text-primary-emerald' },
            { icon: TrendingUp, label: 'Groeien met u mee', color: 'text-primary-violet' },
            { icon: Lightbulb, label: 'Altijd uitleg, nooit jargon', color: 'text-primary-warm' },
          ].map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <item.icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
              <span className="text-sm text-slate-200">{item.label}</span>
              <CheckCircle2 className="w-4 h-4 text-primary-emerald ml-auto" />
            </m.div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function AboutClientPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Over Start Beheer Solutions"
        title={<>Eén Partner{' '}<span className="text-gradient">Voor Al Uw Digitale Werk.</span></>}
        subtitle="Wij geloven dat MKB en ZZP dezelfde enterprise-kwaliteit verdienen als grote bedrijven — zonder enterprise-prijs, zonder enterprise-ondoorzichtigheid."
        ctaLabel="Leer Ons Kennen"
        ctaHref="/gratis-advies"
        tags={['Nederlandse specialisten', 'Transparant en persoonlijk', 'Eén contract voor alles']}
        visual={<AboutMockup />}
      />

      {/* VALUES */}
      <section className="relative py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-12 sm:mb-16 max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-mono text-slate-400 tracking-wider">/ 01</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">Onze waarden</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4 leading-[1.1]">
              Waarin wij <span className="text-gradient">geloven.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Zes principes die bepalen hoe wij werken — van eerste kennismaking tot jarenlange samenwerking.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {values.map((v, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.08 }}
                className="p-6 sm:p-7 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition-all hover:shadow-lg hover:shadow-slate-900/5"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-blue/10 to-primary-violet/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-primary-blue" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY — dark */}
      <section className="relative py-20 sm:py-28 bg-[#0B1121] overflow-hidden">
        <div className="divider-hairline-dark absolute top-0 left-0 right-0" />
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-violet mb-4">/ 02 · Wat ons drijft</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Grote tech is vaak<br /><span className="text-gradient">alleen voor grote bedrijven.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-6">
            Wij vinden dat oneerlijk. Een kleine praktijk, een ZZP’er of een groeiend MKB-bedrijf verdient dezelfde kwaliteit: custom software, slimme AI, proactief IT-beheer en meetbare marketing.
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed italic">
            “Wij brengen enterprise-kwaliteit binnen handbereik — transparant, persoonlijk en voor een eerlijke prijs.”
          </p>
        </div>
      </section>

      <FinalCTA
        title={<>Klaar om samen te werken<br /><span className="text-gradient">aan uw digitale toekomst?</span></>}
        ctaLabel="Plan Een Vrijblijvend Gesprek"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
