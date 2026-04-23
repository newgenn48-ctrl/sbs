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
  SiGoogleads, SiGoogleanalytics, SiGoogletagmanager, SiGoogle,
  SiYoutube, SiMeta, SiGoogledisplayandvideo360, SiGooglesheets,
} from 'react-icons/si'
import {
  Target, TrendingUp, BarChart3, MousePointerClick,
  Building2, Briefcase, DollarSign, ArrowUp, Eye,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/google-ads'

const techStack = [
  { icon: SiGoogleads, name: 'Google Ads' },
  { icon: SiGoogleanalytics, name: 'Analytics 4' },
  { icon: SiGoogletagmanager, name: 'Tag Manager' },
  { icon: SiGoogle, name: 'Business Profile' },
  { icon: SiYoutube, name: 'YouTube Ads' },
  { icon: SiMeta, name: 'Meta Ads' },
  { icon: SiGoogledisplayandvideo360, name: 'Display & Video' },
  { icon: SiGooglesheets, name: 'Data Studio' },
]

// ============================================================================
// HERO VISUAL — Live ad campaign dashboard
// ============================================================================
function AdsMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-warm/20 via-primary-blue/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-warm/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-warm to-primary-emerald flex items-center justify-center shadow-lg shadow-primary-warm/30">
            <Target className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Campagne Dashboard</div>
            <div className="flex items-center gap-1.5">
              <span className="text-[11px] text-slate-500">Voorbeeld · laatste 7 dagen</span>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* 3 KPI cards */}
          <div className="grid grid-cols-3 gap-2">
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-3 rounded-lg bg-gradient-to-br from-primary-blue/15 to-primary-blue/5 border border-primary-blue/20"
            >
              <MousePointerClick className="w-4 h-4 text-primary-blue mb-1.5" />
              <div className="text-[10px] text-slate-400 mb-0.5">Klikken</div>
              <div className="text-sm font-bold text-white">—</div>
              <div className="flex items-center gap-0.5 mt-1">
                <ArrowUp className="w-2.5 h-2.5 text-primary-emerald" />
                <span className="text-[9px] text-primary-emerald font-mono">trend ↑</span>
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="p-3 rounded-lg bg-gradient-to-br from-primary-emerald/15 to-primary-emerald/5 border border-primary-emerald/20"
            >
              <TrendingUp className="w-4 h-4 text-primary-emerald mb-1.5" />
              <div className="text-[10px] text-slate-400 mb-0.5">Leads</div>
              <div className="text-sm font-bold text-white">—</div>
              <div className="flex items-center gap-0.5 mt-1">
                <ArrowUp className="w-2.5 h-2.5 text-primary-emerald" />
                <span className="text-[9px] text-primary-emerald font-mono">trend ↑</span>
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="p-3 rounded-lg bg-gradient-to-br from-primary-warm/15 to-primary-warm/5 border border-primary-warm/20"
            >
              <DollarSign className="w-4 h-4 text-primary-warm mb-1.5" />
              <div className="text-[10px] text-slate-400 mb-0.5">CPA</div>
              <div className="text-sm font-bold text-white">€ —</div>
              <div className="flex items-center gap-0.5 mt-1">
                <svg className="w-2.5 h-2.5 text-primary-emerald rotate-180" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l8 8h-5v8h-6v-8H4z"/></svg>
                <span className="text-[9px] text-primary-emerald font-mono">trend ↓</span>
              </div>
            </m.div>
          </div>

          {/* Performance chart */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5 text-primary-warm" />
                <span className="text-xs font-semibold text-white">Conversie-trend</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">7 dagen</span>
            </div>
            {/* Line chart abstraction */}
            <div className="flex items-end gap-1 h-14">
              {[22, 28, 32, 30, 42, 52, 68].map((height, i) => (
                <m.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{ delay: 1.1 + i * 0.08, duration: 0.5 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary-warm/30 via-primary-warm/60 to-primary-emerald"
                />
              ))}
            </div>
          </m.div>

          {/* Active campaigns */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="flex items-center gap-2 p-2.5 rounded-lg bg-primary-emerald/10 border border-primary-emerald/20"
          >
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-white mb-0.5">Meerdere campagnes</div>
              <div className="h-1 w-32 rounded-full bg-white/15" />
            </div>
            <span className="text-[10px] text-primary-emerald font-mono font-bold">VOORBEELD</span>
          </m.div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Eye className="w-3.5 h-3.5 text-primary-blue" />
            <span className="text-xs text-slate-400">ROAS</span>
            <span className="text-xs font-bold text-primary-emerald">trend ↑</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">Budget-efficiënt</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function GoogleAdsClientPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Google Ads & Betaald Verkeer"
        title={<>Google Ads{' '}<span className="text-gradient">Die Leads Opleveren.</span></>}
        subtitle="Slimme campagnes voor MKB. Meer klikken, lagere kosten per lead — en een eerlijk maandabonnement zonder verborgen fees."
        ctaLabel="Gratis Campagne-Audit"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<AdsMockup />}
      />

      <TechStackBar items={techStack} label="Wij adverteren op" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>MKB dat <span className="text-gradient">nú klanten wil,</span><br />niet over 6 maanden.</>}
        description="Wij beheren Google Ads voor iedereen die snel zichtbaar wil zijn voor koopbereide zoekers — zonder budget te verbranden."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Andere branche? Als mensen op Google naar uw diensten zoeken, kunnen wij helpen."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Volledig beheer,<br /><span className="text-gradient">vanaf eerste klik tot laatste euro.</span></>}
        description="Alle 30+ punten hieronder zitten in het beheer-abonnement. Advertentie-budget betaalt u direct aan Google — geen opslag."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Slechte ads verspillen budget. Goede ads verdienen zichzelf terug. Wij bouwen het tweede.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van audit naar <span className="text-gradient">profitable campagnes.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise-ads,<br /><span className="text-gradient">voor elk MKB.</span></>}
        description={<>Grote adverteerders hebben hele teams voor <strong className="text-slate-800">Google Ads, Meta Ads en Display-campagnes</strong> met dagelijkse optimalisatie. Voor MKB is dat vaak onbereikbaar — wij brengen dezelfde aanpak, als toegankelijk maandabonnement.</>}
        flowDiagram={{
          sourceLabel: 'Deze aanpak wordt bijvoorbeeld gebruikt door:',
          sources: [
            { icon: Building2, label: 'Grote retailers', color: 'text-primary-blue' },
            { icon: Target, label: 'E-commerce giganten', color: 'text-primary-emerald' },
            { icon: DollarSign, label: 'Financiële merken', color: 'text-primary-violet' },
            { icon: BarChart3, label: 'Media-bedrijven', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde strategie',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Target, text: 'Slimme targeting op koop-intentie' },
          { icon: DollarSign, text: 'Lagere CPA door constante optimalisatie' },
          { icon: BarChart3, text: 'Live dashboard voor transparantie' },
          { icon: TrendingUp, text: 'Groeien waar het werkt, snoeien waar het niet werkt' },
        ]}
        ctaLabel="Start Met Een Audit"
        ctaHref="/gratis-advies"
      />

      <PrijsSection
        sectionNumber="/ 05"
        eyebrow="Investering"
        price={priceInfo.price}
        priceDescription={priceInfo.description}
        ctaLabel="Gratis Audit Aanvragen"
        ctaHref="/gratis-advies"
        ctaSubtext="Gratis campagne-audit binnen 1 week — geheel vrijblijvend."
        riskReversal={['Gratis campagne-audit', 'Maandelijks opzegbaar']}
        scarcity="Beperkte capaciteit voor nieuwe klanten per maand"
        confidenceTitle={<>Vanaf €345 per maand. <span className="text-slate-400 font-normal">Advertentie-budget apart.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="U betaalt Google voor klikken. Wij zorgen dat elke klik telt."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="warm" />

      <FinalCTA
        title={<>Uw concurrenten staan al bovenaan Google.<br /><span className="text-gradient">Waar bent u?</span></>}
        ctaLabel="Vraag Gratis Audit Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
