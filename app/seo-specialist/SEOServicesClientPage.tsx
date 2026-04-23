'use client'

import { m } from 'framer-motion'
import HeroSection from '@/components/sections/landing/HeroSection'
import TechStackBar from '@/components/sections/landing/TechStackBar'
import BeloftesStatsBar from '@/components/sections/landing/BeloftesStatsBar'
import VoorWieSection from '@/components/sections/landing/VoorWieSection'
import ChecklistSection from '@/components/sections/landing/ChecklistSection'
import ProcesSection from '@/components/sections/landing/ProcesSection'
import MissieSection from '@/components/sections/landing/MissieSection'
import PrijsSection from '@/components/sections/landing/PrijsSection'
import FAQSection from '@/components/sections/landing/FAQSection'
import FinalCTA from '@/components/sections/landing/FinalCTA'

import {
  SiGoogleanalytics, SiGooglesearchconsole, SiGoogleads, SiGoogletagmanager,
  SiWordpress, SiShopify, SiGooglechrome, SiGoogle,
} from 'react-icons/si'
import {
  Search, TrendingUp, BarChart3, ArrowUp,
  Building2, Briefcase, MapPin, Link2, Globe,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/seo'

const techStack = [
  { icon: SiGooglesearchconsole, name: 'Search Console' },
  { icon: SiGoogleanalytics, name: 'Analytics 4' },
  { icon: SiGoogletagmanager, name: 'Tag Manager' },
  { icon: SiGoogleads, name: 'Google Ads' },
  { icon: SiGoogle, name: 'Business Profile' },
  { icon: SiGooglechrome, name: 'Chrome DevTools' },
  { icon: SiWordpress, name: 'WordPress' },
  { icon: SiShopify, name: 'Shopify' },
]

// ============================================================================
// HERO VISUAL — Keyword rankings dashboard mockup
// ============================================================================
function SEOMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-emerald/20 via-primary-blue/15 to-primary-violet/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-emerald/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-emerald to-primary-blue flex items-center justify-center shadow-lg shadow-primary-emerald/30">
            <Search className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Keyword Rankings</div>
            <div className="text-[11px] text-slate-500">Laatste 30 dagen · Live tracking</div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            <ArrowUp className="w-3 h-3" />
            +38%
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Traffic growth chart */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 rounded-xl bg-gradient-to-br from-primary-emerald/10 to-primary-blue/5 border border-primary-emerald/15"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Organisch verkeer</span>
              <TrendingUp className="w-4 h-4 text-primary-emerald" />
            </div>
            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-3xl font-display font-bold text-white tracking-tight">12.8k</span>
              <span className="text-sm text-slate-400">bezoekers/mnd</span>
            </div>

            {/* Mini chart bars */}
            <div className="flex items-end gap-1 h-12">
              {[32, 38, 35, 48, 52, 58, 65, 72, 78, 82, 88, 95].map((height, i) => (
                <m.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 0.7 + i * 0.04, duration: 0.6 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary-emerald/40 to-primary-emerald/80"
                />
              ))}
            </div>
          </m.div>

          {/* Keyword rankings list */}
          <div className="space-y-2">
            {[
              { keyword: 'hoofdzoekwoord', before: 24, now: 3, change: '+21' },
              { keyword: 'secundair keyword', before: 15, now: 5, change: '+10' },
              { keyword: 'long-tail optie', before: 42, now: 8, change: '+34' },
            ].map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.12 }}
                className="flex items-center gap-3 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
              >
                <div className="w-7 h-7 rounded-lg bg-primary-emerald/10 border border-primary-emerald/20 flex items-center justify-center flex-shrink-0">
                  <ArrowUp className="w-3.5 h-3.5 text-primary-emerald" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="h-1.5 w-24 rounded-full bg-white/25 mb-1" />
                  <div className="flex items-center gap-2 text-[10px] font-mono">
                    <span className="text-slate-500 line-through">#{item.before}</span>
                    <span className="text-slate-600">→</span>
                    <span className="text-primary-emerald font-bold">#{item.now}</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-primary-emerald">{item.change}</span>
              </m.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-3.5 h-3.5 text-primary-blue" />
            <span className="text-xs text-slate-400">50+ keywords</span>
            <span className="text-xs font-bold text-primary-blue">live getrackt</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">Maandelijks rapport</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function SEOServicesClientPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="SEO & Vindbaarheid"
        title={<>SEO{' '}<span className="text-gradient">Die Écht Verkeer Oplevert.</span></>}
        subtitle="Grondige SEO-strategie voor MKB. Technische optimalisatie, content en lokale vindbaarheid — elke maand groei in posities én verkeer."
        ctaLabel="Vraag Gratis SEO-Audit"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<SEOMockup />}
      />

      <TechStackBar items={techStack} label="Wij gebruiken" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven die<br />gevonden willen worden,<br /><span className="text-gradient">niet betaalde klikken willen.</span></>}
        description="Wij doen SEO voor iedereen die op lange termijn organisch verkeer wil opbouwen — geen kortdurende trucs, wel duurzame groei."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Andere branche? Elke markt heeft zoekopdrachten die de moeite waard zijn."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Volledige SEO-strategie,<br /><span className="text-gradient">geen losse trucjes.</span></>}
        description="Alle 30+ punten hieronder horen bij onze SEO-aanpak. Geen losse modules, geen verborgen kosten — u krijgt een complete strategie."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Echte SEO is geen kwestie van één truc. Het is een volledige aanpak van techniek, content én autoriteit — samen.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van audit naar <span className="text-gradient">meetbare groei.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise-SEO,<br /><span className="text-gradient">voor elke ondernemer.</span></>}
        description={<>Grote merken hebben hele SEO-teams met dure tools als <strong className="text-slate-800">Ahrefs, Semrush en specialistische audit-suites</strong>. Voor MKB lijkt dat onbereikbaar — maar wij brengen dezelfde diepgang, betaalbaar als maandabonnement.</>}
        flowDiagram={{
          sourceLabel: 'Deze tools worden bijvoorbeeld gebruikt door:',
          sources: [
            { icon: Globe, label: 'Grote retailers', color: 'text-primary-blue' },
            { icon: Building2, label: 'Media-platforms', color: 'text-primary-emerald' },
            { icon: Search, label: 'SEO-agencies', color: 'text-primary-violet' },
            { icon: BarChart3, label: 'E-commerce giganten', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde tools & aanpak',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Search, text: 'Grondige audit met concrete prioriteiten' },
          { icon: TrendingUp, text: 'Duurzame groei, geen kortdurende trucs' },
          { icon: MapPin, text: 'Lokale SEO voor "near me" zoekopdrachten' },
          { icon: Link2, text: 'Kwalitatieve link-building en autoriteit-bouw' },
        ]}
        ctaLabel="Start Met Een Audit"
        ctaHref="/gratis-advies"
      />

      <PrijsSection
        sectionNumber="/ 05"
        eyebrow="Investering op maat"
        price={priceInfo.price}
        priceDescription={priceInfo.description}
        ctaLabel="Vraag Offerte Aan"
        ctaHref="/gratis-advies"
        ctaSubtext="Gratis SEO-audit binnen 1 week — geheel vrijblijvend."
        riskReversal={['Gratis SEO-audit', 'Maandelijks opzegbaar']}
        scarcity="Beperkte capaciteit voor nieuwe klanten per maand"
        confidenceTitle={<>Vaste maandprijs. <span className="text-slate-400 font-normal">Geen uurtje-factuurtje.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="U bent eigenaar van het werk, niet gijzelaar van een agency."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="emerald" />

      <FinalCTA
        title={<>Uw klanten zoeken op Google.<br /><span className="text-gradient">Vinden ze u, of uw concurrent?</span></>}
        ctaLabel="Vraag Gratis SEO-Audit"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
