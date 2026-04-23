'use client'

import { m } from 'framer-motion'
import HeroSection from '@/components/sections/landing/HeroSection'
import CategoryCardsSection from '@/components/sections/landing/CategoryCardsSection'
import FinalCTA from '@/components/sections/landing/FinalCTA'

import {
  Globe, ShoppingCart, LayoutDashboard, Code2,
  Gauge, ShieldCheck, Palette,
} from 'lucide-react'

const cards = [
  {
    icon: Globe,
    eyebrow: 'Zakelijke website',
    title: 'Website Laten Maken',
    description: 'Custom-coded, razendsnel en SEO-proof. De perfecte online basis voor MKB en ZZP die zich professioneel willen presenteren.',
    bullets: [
      'Laadtijd onder 2 seconden gegarandeerd',
      'Uniek design — geen templates',
      '100% eigenaar van code en content',
    ],
    price: '€785',
    href: '/website-laten-maken',
    gradient: 'from-primary-emerald to-primary-blue',
    accent: 'text-primary-emerald',
    badge: 'Meest gekozen',
  },
  {
    icon: ShoppingCart,
    eyebrow: 'E-commerce',
    title: 'Webshop Laten Maken',
    description: 'Converterende webshops met een snelle checkout, slimme productpagina’s en koppelingen met uw voorraad en boekhouding.',
    bullets: [
      'Shopify of maatwerk — wij adviseren',
      'iDEAL, creditcard, Klarna out-of-the-box',
      'Gekoppeld aan uw CRM en boekhouding',
    ],
    price: '€785',
    href: '/webshop-laten-maken',
    gradient: 'from-primary-blue to-primary-violet',
    accent: 'text-primary-blue',
  },
  {
    icon: LayoutDashboard,
    eyebrow: 'Maatwerk software',
    title: 'Webapplicatie Laten Maken',
    description: 'Klantportals, dashboards en interne tools — op maat gebouwd rond uw proces, met API-koppelingen en custom logica.',
    bullets: [
      'Login, rollen en rechten standaard',
      'API-integraties met uw bestaande tools',
      'Gebouwd op moderne, schaalbare stack',
    ],
    price: 'Op offerte',
    href: '/webapplicatie-laten-maken',
    gradient: 'from-primary-violet to-primary-blue',
    accent: 'text-primary-violet',
  },
]

// ============================================================================
// HERO VISUAL — Trio-mockup van website / shop / app
// ============================================================================
function WebTrioMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-emerald/20 via-primary-blue/15 to-primary-violet/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative grid grid-cols-3 gap-3">
        {[
          { icon: Globe, color: 'from-primary-emerald to-primary-blue', label: 'Website', delay: 0.3 },
          { icon: ShoppingCart, color: 'from-primary-blue to-primary-violet', label: 'Webshop', delay: 0.5 },
          { icon: LayoutDashboard, color: 'from-primary-violet to-primary-blue', label: 'Webapp', delay: 0.7 },
        ].map((item, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, y: 20, rotate: i === 1 ? 0 : (i === 0 ? -4 : 4) }}
            animate={{ opacity: 1, y: 0, rotate: i === 1 ? 0 : (i === 0 ? -4 : 4) }}
            transition={{ delay: item.delay, duration: 0.7 }}
            className={`aspect-[3/4] rounded-2xl bg-[#0d1025] border border-white/10 shadow-2xl p-4 flex flex-col ${i === 1 ? 'scale-110 z-10' : ''}`}
          >
            {/* Window dots */}
            <div className="flex gap-1 mb-3">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
            </div>

            {/* Icon */}
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg mb-3`}>
              <item.icon className="w-5 h-5 text-white" />
            </div>

            {/* Fake content bars */}
            <div className="space-y-1.5 flex-1">
              <div className="h-1.5 w-full rounded-full bg-white/15" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
              <div className="h-1.5 w-1/2 rounded-full bg-white/10" />
            </div>

            {/* Label */}
            <div className="mt-3 pt-2 border-t border-white/5">
              <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{item.label}</div>
            </div>
          </m.div>
        ))}
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function WebsitesPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Websites, Webshops & Webapps"
        title={<>Online{' '}<span className="text-gradient">Die Écht Iets Oplevert.</span></>}
        subtitle="Drie soorten web-projecten onder één dak. Van professionele site tot converterende webshop tot maatwerk applicatie — custom-coded, razendsnel, en volledig uw eigendom."
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=website"
        tags={['Custom code, geen templates', '<2s laadtijd', '100% eigenaar van uw code']}
        visual={<WebTrioMockup />}
      />

      <CategoryCardsSection
        sectionNumber="/ 01"
        eyebrow="Drie soorten projecten"
        title={<>Kies wat past bij <span className="text-gradient">uw ambitie.</span></>}
        description="Of u nu een zakelijke site, webshop of maatwerk applicatie wilt — wij bouwen het op moderne stack met focus op snelheid, conversie en eigenaarschap."
        cards={cards}
        footer={
          <p className="text-sm text-slate-500">
            Twijfelt u welke past? <span className="text-slate-700 font-semibold">Bel ons</span> — we adviseren altijd de simpelste oplossing die uw doel haalt.
          </p>
        }
      />

      <section className="relative py-20 sm:py-28 bg-[#0B1121] overflow-hidden">
        <div className="divider-hairline-dark absolute top-0 left-0 right-0" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-emerald mb-4">/ 02 · Waarom wij</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Geen WordPress-nachtmerries.<br />
            <span className="text-gradient">Geen templates. Geen lock-in.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            Wij bouwen web-projecten zoals grote tech-bedrijven dat doen: custom code op een moderne stack, zonder trage plugins, zonder licentie-gijzeling, en altijd met u als eigenaar van de code.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Gauge, label: 'Extreme performance', detail: '<2s laadtijd, wereldwijd' },
              { icon: ShieldCheck, label: 'Proactieve security', detail: 'Geen plugin-kwetsbaarheden' },
              { icon: Palette, label: 'Uniek design', detail: 'Nooit een template' },
              { icon: Code2, label: '100% eigenaar', detail: 'Uw code, uw repo' },
            ].map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <item.icon className="w-6 h-6 text-primary-emerald mb-3 mx-auto" />
                <div className="text-sm font-bold text-white mb-1">{item.label}</div>
                <div className="text-xs text-slate-500">{item.detail}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={<>Klaar voor een online aanwezigheid <span className="text-gradient">die niet afstraalt?</span></>}
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=website"
      />
    </div>
  )
}
