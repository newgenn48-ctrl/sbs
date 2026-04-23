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
  SiLooker, SiMetabase, SiSnowflake, SiPosthog,
  SiGoogleanalytics, SiGooglesheets, SiPython, SiOpenai,
} from 'react-icons/si'
import {
  BarChart3, TrendingUp, Database, Eye, Target,
  Building2, Briefcase, Lightbulb, AlertCircle,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/analytics'

const techStack = [
  { icon: SiLooker, name: 'Looker' },
  { icon: SiMetabase, name: 'Metabase' },
  { icon: SiSnowflake, name: 'Snowflake' },
  { icon: SiPosthog, name: 'PostHog' },
  { icon: SiGoogleanalytics, name: 'Analytics 4' },
  { icon: SiGooglesheets, name: 'Google Sheets' },
  { icon: SiPython, name: 'Python' },
  { icon: SiOpenai, name: 'OpenAI' },
]

// ============================================================================
// HERO VISUAL — Analytics dashboard mockup
// ============================================================================
function AnalyticsDashboardMockup() {
  const chartBars = [0.32, 0.45, 0.38, 0.58, 0.52, 0.68, 0.62, 0.78, 0.74, 0.85, 0.82, 0.92]
  const forecastBars = [0.95, 0.98]

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-emerald/20 via-primary-blue/15 to-primary-violet/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-emerald/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-emerald to-primary-blue flex items-center justify-center shadow-lg shadow-primary-emerald/30">
            <BarChart3 className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Omzet-voorspelling</div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
              </div>
              <span>Voorbeeld dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            <TrendingUp className="w-3 h-3" />
            trend
          </div>
        </div>

        <div className="p-4 space-y-4">
          {/* KPI row */}
          <div className="grid grid-cols-3 gap-2">
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">Omzet</div>
              <div className="text-sm font-bold text-white font-mono">€ —</div>
              <div className="text-[9px] text-primary-emerald font-mono mt-0.5">trend ↑</div>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">LTV</div>
              <div className="text-sm font-bold text-white font-mono">€ —</div>
              <div className="text-[9px] text-primary-emerald font-mono mt-0.5">trend ↑</div>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="text-[9px] text-slate-500 uppercase tracking-wider mb-1">Churn</div>
              <div className="text-sm font-bold text-white font-mono">—</div>
              <div className="text-[9px] text-primary-emerald font-mono mt-0.5">trend ↓</div>
            </m.div>
          </div>

          {/* Chart */}
          <div className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06]">
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">Omzet · 14 maanden</span>
              <div className="flex items-center gap-3 text-[9px]">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-sm bg-primary-blue" />
                  <span className="text-slate-500">Actual</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-sm bg-primary-violet/60 border border-primary-violet/40" />
                  <span className="text-slate-500">Forecast</span>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between gap-1 h-24">
              {chartBars.map((h, i) => (
                <m.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h * 100}%` }}
                  transition={{ delay: 0.6 + i * 0.05, duration: 0.4 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary-blue/80 to-primary-blue/40"
                />
              ))}
              {forecastBars.map((h, i) => (
                <m.div
                  key={`f-${i}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: `${h * 100}%`, opacity: 1 }}
                  transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                  className="flex-1 rounded-t bg-gradient-to-t from-primary-violet/60 to-primary-violet/20 border-t-2 border-dashed border-primary-violet/60"
                />
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              <span className="text-[9px] text-slate-600 font-mono">jan</span>
              <span className="text-[9px] text-slate-600 font-mono">apr</span>
              <span className="text-[9px] text-slate-600 font-mono">jul</span>
              <span className="text-[9px] text-slate-600 font-mono">okt</span>
              <span className="text-[9px] text-primary-violet font-mono font-semibold">fcst</span>
            </div>
          </div>

          {/* Insight row */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex items-center gap-2.5 p-2.5 rounded-lg bg-gradient-to-r from-primary-emerald/10 to-primary-blue/5 border border-primary-emerald/20"
          >
            <div className="w-7 h-7 rounded-lg bg-primary-emerald/20 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-3.5 h-3.5 text-primary-emerald" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] text-primary-emerald font-semibold uppercase tracking-wider mb-0.5">AI Inzicht</div>
              <p className="text-[11px] text-slate-200 leading-snug">Productcategorie <span className="font-semibold">A</span> groeit 2,3x sneller dan categorie B — overweeg voorraad-uitbreiding.</p>
            </div>
          </m.div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Database className="w-3.5 h-3.5 text-primary-blue" />
            <span className="text-xs text-slate-400">5 bronnen gekoppeld</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">Bijgewerkt · 2 min geleden</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function AnalyticsPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="AI Analytics"
        title={<>Beslissingen{' '}<span className="text-gradient">Op Data, Niet Onderbuik.</span></>}
        subtitle="Dashboards die uw belangrijkste cijfers live tonen en AI-modellen die voorspellen wat er gaat komen — helder, in normale taal, en op uw data."
        ctaLabel="Gratis Data-Audit"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<AnalyticsDashboardMockup />}
      />

      <TechStackBar items={techStack} label="Wij bouwen in" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven met data,<br /><span className="text-gradient">maar zonder overzicht.</span></>}
        description="Wij bouwen analytics voor iedereen die beslissingen baseert op Excel-export en onderbuik — en dat niet meer wil."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Andere branche? Heeft u cijfers in meerdere systemen die nooit samenkomen? Dan werkt dit voor u."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Data, dashboards en voorspellingen —<br /><span className="text-gradient">alles op één plek.</span></>}
        description="Alle 30 punten hieronder zitten standaard in elk analytics-traject. Integratie, dashboards, modellen en support — alles inbegrepen."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Data is goud. Maar alleen als u weet wat er in zit.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van data-audit naar <span className="text-gradient">beslissingen met bewijs.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise-analytics,<br /><span className="text-gradient">zonder enterprise-prijs.</span></>}
        description={<>Grote bedrijven hebben dashboards die miljoenen datapunten analyseren met <strong className="text-slate-800">Looker, Snowflake en AI-modellen</strong>. Voor MKB leek dat onbereikbaar — wij brengen dezelfde inzichten als betaalbaar project of maandabonnement.</>}
        flowDiagram={{
          sourceLabel: 'Deze technologie wordt gebruikt door:',
          sources: [
            { icon: Building2, label: 'Enterprise BI-teams', color: 'text-primary-blue' },
            { icon: BarChart3, label: 'Retailers & e-comm', color: 'text-primary-emerald' },
            { icon: Database, label: 'Data-platforms', color: 'text-primary-violet' },
            { icon: Target, label: 'SaaS-bedrijven', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde analytics-stack',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Eye, text: 'Eén dashboard voor alle belangrijke cijfers' },
          { icon: TrendingUp, text: 'Voorspellingen op basis van uw historie' },
          { icon: AlertCircle, text: 'Alerts bij afwijkingen — voordat ze pijn doen' },
          { icon: Lightbulb, text: 'Concrete aanbevelingen, geen data-berg' },
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
        ctaSubtext="Gratis data-audit binnen 1 week — geheel vrijblijvend."
        riskReversal={['Gratis data-audit', 'Transparante modellen']}
        scarcity="Beperkte capaciteit voor nieuwe analytics-trajecten"
        confidenceTitle={<>Vaste projectprijs. <span className="text-slate-400 font-normal">Geen uurtje-factuurtje.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Uw data blijft van u. Altijd exporteerbaar, altijd transparant."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="emerald" />

      <FinalCTA
        title={<>Uw data weet meer dan u denkt.<br /><span className="text-gradient">Tijd om te luisteren.</span></>}
        ctaLabel="Vraag Data-Audit Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
