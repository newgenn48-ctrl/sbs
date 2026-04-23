'use client'

import { m } from 'framer-motion'
import HeroSection from '@/components/sections/landing/HeroSection'
import CategoryCardsSection from '@/components/sections/landing/CategoryCardsSection'
import FinalCTA from '@/components/sections/landing/FinalCTA'

import {
  Globe, ShoppingCart, LayoutDashboard, Workflow, Sparkles,
  Code2, Zap, Database, Cpu,
} from 'lucide-react'

const cards = [
  {
    icon: Globe,
    eyebrow: 'Zakelijke website',
    title: 'Website Laten Maken',
    description: 'Custom-coded, razendsnel en SEO-proof. Voor bedrijven die zich professioneel willen presenteren.',
    bullets: [
      'Laadtijd onder 2 seconden',
      'Uniek design, geen templates',
      '100% eigenaar van de code',
    ],
    price: '€785',
    href: '/website-laten-maken',
    gradient: 'from-primary-emerald to-primary-blue',
    accent: 'text-primary-emerald',
  },
  {
    icon: ShoppingCart,
    eyebrow: 'E-commerce',
    title: 'Webshop Laten Maken',
    description: 'Converterende webshops met snelle checkout en koppelingen met uw voorraad en boekhouding.',
    bullets: [
      'Shopify of volledig maatwerk',
      'iDEAL, creditcard, Klarna',
      'Gekoppeld aan CRM en boekhouding',
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
    description: 'Klantportals, dashboards en interne tools, op maat gebouwd rond uw proces en met API-koppelingen.',
    bullets: [
      'Login, rollen en rechten standaard',
      'API-integraties op maat',
      'Moderne, schaalbare stack',
    ],
    price: 'Op offerte',
    href: '/webapplicatie-laten-maken',
    gradient: 'from-primary-violet to-primary-blue',
    accent: 'text-primary-violet',
    badge: 'Maatwerk',
  },
  {
    icon: Workflow,
    eyebrow: 'Automatisering op maat',
    title: 'Proces Automatisering',
    description: 'Elk handmatig proces op maat geautomatiseerd — van simpele Zapier-flows tot complexe custom builds.',
    bullets: [
      'No-code waar kan, custom waar moet',
      'Koppelingen met elk systeem of tool',
      'Vooraf berekende ROI per flow',
    ],
    price: 'Op offerte',
    href: '/proces-automatisering',
    gradient: 'from-primary-warm to-primary-violet',
    accent: 'text-primary-warm',
  },
]

// ============================================================================
// HERO VISUAL — Code + architectuur layered mockup
// ============================================================================
function CodeStackMockup() {
  const codeLines = [
    { indent: 0, content: 'export async function handler(req, res) {', color: 'text-primary-violet' },
    { indent: 1, content: 'const data = await db.query(sql);', color: 'text-slate-300' },
    { indent: 1, content: 'const result = transform(data);', color: 'text-slate-300' },
    { indent: 1, content: 'return res.json({', color: 'text-primary-blue' },
    { indent: 2, content: 'ok: true, data: result', color: 'text-primary-emerald' },
    { indent: 1, content: '});', color: 'text-primary-blue' },
    { indent: 0, content: '}', color: 'text-primary-violet' },
  ]

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-blue/20 via-primary-violet/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/15">
        {/* Header — code editor chrome */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 flex items-center gap-2">
            <Code2 className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-[11px] text-slate-500 font-mono">api/handler.ts</span>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            <Zap className="w-3 h-3" />
            &lt; 50ms
          </div>
        </div>

        {/* Code */}
        <div className="p-4 font-mono text-xs space-y-1">
          {codeLines.map((line, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-3"
            >
              <span className="text-slate-700 text-[10px] w-4 text-right">{i + 1}</span>
              <div style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                <span className={line.color}>{line.content}</span>
              </div>
            </m.div>
          ))}
        </div>

        {/* Stack indicators */}
        <div className="border-t border-white/[0.06] px-4 py-3 bg-white/[0.02]">
          <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2 font-semibold">Stack</div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: Code2, label: 'Next.js + TS', color: 'text-primary-blue' },
              { icon: Database, label: 'Postgres', color: 'text-primary-emerald' },
              { icon: Cpu, label: 'Edge-ready', color: 'text-primary-violet' },
            ].map((s, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded bg-white/[0.03] border border-white/[0.05]"
              >
                <s.icon className={`w-3 h-3 ${s.color}`} />
                <span className="text-[10px] text-slate-300 font-medium">{s.label}</span>
              </m.div>
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
export default function DevelopmentPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Development"
        title={<>Software Op Maat.{' '}<span className="text-gradient">Gebouwd Om Te Werken.</span></>}
        subtitle="Websites, webshops, applicaties en automatiseringen — custom-coded, met moderne stack en zonder template-ballast. U bent eigenaar van elk stukje code."
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo"
        tags={['100% custom code', 'Moderne stack', 'Eigenaar van uw code']}
        visual={<CodeStackMockup />}
      />

      <CategoryCardsSection
        sectionNumber="/ 01"
        eyebrow="Vier soorten development"
        title={<>Van simpele site tot <span className="text-gradient">complexe automatisering.</span></>}
        description="Elk project is anders. Wij bouwen wat u nodig heeft — geen over-engineering, geen template-trucs. Gewoon solide software die haar werk doet."
        cards={cards}
        footer={
          <p className="text-sm text-slate-500">
            Niet zeker wat uw project is? <span className="text-slate-700 font-semibold">Beschrijf het</span> — wij adviseren vrijblijvend welke aanpak past.
          </p>
        }
      />

      <section className="relative py-20 sm:py-28 bg-[#0B1121] overflow-hidden">
        <div className="divider-hairline-dark absolute top-0 left-0 right-0" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue mb-4">/ 02 · Onze engineering-principes</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-[1.1]">
            Geen spaghetti-code.<br />
            <span className="text-gradient">Geen vendor lock-in.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            Wij schrijven code zoals een goede timmerman bouwt: netjes, onderhoudbaar, en bedoeld om lang mee te gaan. Ook als wij er ooit niet meer zijn, kan iedere andere ontwikkelaar er verder mee.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Code2, label: 'Moderne stack', detail: 'Next.js, TypeScript, Postgres' },
              { icon: Zap, label: 'Extreme snelheid', detail: 'Edge-ready, < 100ms response' },
              { icon: Database, label: 'Uw eigen infra', detail: 'Hosting op uw naam' },
              { icon: Sparkles, label: 'Uitbreidbaar', detail: 'Groei zonder herbouw' },
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
        title={<>Idee voor een project?<br /><span className="text-gradient">Wij bouwen het voor u.</span></>}
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo"
      />
    </div>
  )
}
