'use client'

import { m } from 'framer-motion'
import HeroSection from '@/components/sections/landing/HeroSection'
import CategoryCardsSection from '@/components/sections/landing/CategoryCardsSection'
import FinalCTA from '@/components/sections/landing/FinalCTA'

import {
  Search, Target, Instagram, Mail, TrendingUp,
  LineChart, Megaphone, Users,
} from 'lucide-react'

const cards = [
  {
    icon: Search,
    eyebrow: 'Organisch vindbaar',
    title: 'SEO Specialist',
    description: 'Duurzame vindbaarheid in Google. Content, techniek en autoriteit — zodat u vanzelf gevonden wordt door wie u zoekt.',
    bullets: [
      'Technische SEO-audit als basis',
      'Content die rankt én converteert',
      'Maandelijks rapport met concrete wins',
    ],
    price: 'Op offerte',
    href: '/seo-specialist',
    gradient: 'from-primary-emerald to-primary-blue',
    accent: 'text-primary-emerald',
  },
  {
    icon: Target,
    eyebrow: 'Direct resultaat',
    title: 'Google Ads Beheer',
    description: 'Leads binnen dagen, niet maanden. Search- en Performance Max-campagnes die u écht klanten opleveren.',
    bullets: [
      'Campagnes gericht op ROI, niet vertoningen',
      'Wekelijkse optimalisatie en bidstrategie',
      'Transparant dashboard — u ziet alles',
    ],
    price: 'Vanaf €345',
    href: '/google-ads-beheer',
    gradient: 'from-primary-blue to-primary-violet',
    accent: 'text-primary-blue',
    badge: 'Snelste ROI',
  },
  {
    icon: Instagram,
    eyebrow: 'Zichtbaar blijven',
    title: 'Social Media Marketing',
    description: 'Consistent aanwezig op Instagram, LinkedIn en meer. Content, publicatie en community-management — u hoeft niet om te kijken.',
    bullets: [
      '3x per week professionele content',
      'Community-management inbegrepen',
      'Maandrapport met groei en engagement',
    ],
    price: 'Vanaf €495',
    href: '/social-media-marketing',
    gradient: 'from-primary-violet to-primary-blue',
    accent: 'text-primary-violet',
  },
  {
    icon: Mail,
    eyebrow: 'E-mail op autopilot',
    title: 'Marketing Automation',
    description: 'Slimme e-mailflows die leads opwarmen, klanten terughalen en omzet automatiseren — 24/7, zonder handwerk.',
    bullets: [
      'Welkomst-, cart- en nurture-flows',
      'Segmentatie op gedrag en interesse',
      'HubSpot, Klaviyo of ActiveCampaign',
    ],
    price: 'Op offerte',
    href: '/marketing-automatisering',
    gradient: 'from-primary-warm to-primary-violet',
    accent: 'text-primary-warm',
  },
]

// ============================================================================
// HERO VISUAL — Marketing channels converging to conversion
// ============================================================================
function MarketingFunnelMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-blue/20 via-primary-violet/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-blue to-primary-violet flex items-center justify-center shadow-lg">
            <Megaphone className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Marketing mix</div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <span>Voorbeeld dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            <TrendingUp className="w-3 h-3" />
            trend
          </div>
        </div>

        {/* Channels */}
        <div className="p-4 space-y-2">
          {[
            { icon: Search, label: 'SEO', detail: 'Organisch zichtbaar worden', stat: 'trend ↑', color: 'emerald', delay: 0.3 },
            { icon: Target, label: 'Google Ads', detail: 'Direct bovenaan in Google', stat: 'CPA ↓', color: 'blue', delay: 0.5 },
            { icon: Instagram, label: 'Social', detail: 'Merkvoorkeur opbouwen', stat: 'bereik ↑', color: 'violet', delay: 0.7 },
            { icon: Mail, label: 'E-mail', detail: 'Geautomatiseerde flows', stat: 'open ↑', color: 'warm', delay: 0.9 },
          ].map((c, i) => {
            const colorMap: Record<string, { bg: string; text: string }> = {
              emerald: { bg: 'bg-primary-emerald/20', text: 'text-primary-emerald' },
              blue: { bg: 'bg-primary-blue/20', text: 'text-primary-blue' },
              violet: { bg: 'bg-primary-violet/20', text: 'text-primary-violet' },
              warm: { bg: 'bg-primary-warm/20', text: 'text-primary-warm' },
            }
            const cl = colorMap[c.color]
            return (
              <m.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: c.delay }}
                className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg ${cl.bg} flex items-center justify-center flex-shrink-0`}>
                    <c.icon className={`w-4 h-4 ${cl.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-semibold text-white">{c.label}</div>
                    <div className="text-[10px] text-slate-500">{c.detail}</div>
                  </div>
                  <span className={`text-[10px] font-mono ${cl.text} font-bold`}>{c.stat}</span>
                </div>
              </m.div>
            )
          })}
        </div>

        {/* Footer — conversion */}
        <div className="border-t border-white/[0.06] px-4 py-3 bg-gradient-to-r from-primary-emerald/10 to-primary-blue/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-primary-emerald" />
              <span className="text-xs text-slate-300 font-semibold">Nieuwe klanten</span>
            </div>
            <span className="text-sm font-bold text-white font-mono">trend ↑</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function MarketingPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Online Marketing"
        title={<>Marketing{' '}<span className="text-gradient">Die Klanten Oplevert.</span></>}
        subtitle="SEO, Google Ads, social en e-mail — wij combineren wat past bij uw bedrijf en budget. Geen campagne-circus, wel meetbare groei."
        ctaLabel="Plan Een Gratis Marketing-Audit"
        ctaHref="/gratis-advies"
        tags={['Transparante rapportage', 'ROI-gedreven', 'Geen jaarcontracten']}
        visual={<MarketingFunnelMockup />}
      />

      <CategoryCardsSection
        sectionNumber="/ 01"
        eyebrow="Vier marketing-kanalen"
        title={<>De juiste mix voor <span className="text-gradient">uw doelen.</span></>}
        description="SEO voor de lange termijn, Ads voor direct resultaat, social voor merkvoorkeur, e-mail voor conversie. Vaak werken ze samen — wij adviseren welke combinatie bij u past."
        cards={cards}
        footer={
          <p className="text-sm text-slate-500">
            Weet u niet welke mix past? <span className="text-slate-700 font-semibold">Vraag een gratis marketing-audit</span> — wij brengen uw situatie in kaart.
          </p>
        }
      />

      <section className="relative py-20 sm:py-28 bg-[#0B1121] overflow-hidden">
        <div className="divider-hairline-dark absolute top-0 left-0 right-0" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue mb-4">/ 02 · Onze aanpak</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Marketing zonder jargon.<br />
            <span className="text-gradient">Meetbaar resultaat.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            Wij geloven in transparantie, niet in mystiek. U krijgt elke maand een helder rapport: wat werkte, wat niet, en wat we komende maand gaan testen. Geen vanity-metrics, wel echte cijfers.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: LineChart, label: 'Meetbaar', detail: 'Elke euro traceerbaar' },
              { icon: TrendingUp, label: 'Groeigericht', detail: 'Lange termijn, niet quick-win' },
              { icon: Target, label: 'Geen ruis', detail: 'Focus op ROI-kanalen' },
              { icon: Users, label: 'Uw eigendom', detail: 'Accounts, data en content van u' },
            ].map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <item.icon className="w-6 h-6 text-primary-blue mb-3 mx-auto" />
                <div className="text-sm font-bold text-white mb-1">{item.label}</div>
                <div className="text-xs text-slate-500">{item.detail}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={<>Meer klanten, minder marketing-ruis.<br /><span className="text-gradient">Klaar om te groeien?</span></>}
        ctaLabel="Plan Gratis Marketing-Audit"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
