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
  SiHubspot, SiMailchimp, SiZapier, SiSalesforce,
  SiGoogleanalytics, SiGooglesheets, SiSlack, SiNotion,
} from 'react-icons/si'
import {
  Mail, Workflow, Target, Filter, TrendingUp, BarChart3,
  Building2, Briefcase, Zap, ArrowDown, Clock,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/marketing-automation'

const techStack = [
  { icon: SiHubspot, name: 'HubSpot' },
  { icon: SiMailchimp, name: 'Mailchimp' },
  { icon: SiSalesforce, name: 'Salesforce' },
  { icon: SiZapier, name: 'Zapier' },
  { icon: SiGoogleanalytics, name: 'Analytics 4' },
  { icon: SiGooglesheets, name: 'Google Sheets' },
  { icon: SiSlack, name: 'Slack' },
  { icon: SiNotion, name: 'Notion' },
]

// ============================================================================
// HERO VISUAL — Automation flow diagram
// ============================================================================
function AutomationMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-violet/20 via-primary-blue/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-violet/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-violet to-primary-blue flex items-center justify-center shadow-lg shadow-primary-violet/30">
            <Workflow className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Welkomst-flow</div>
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
              </div>
              <span className="text-[11px] text-slate-500">Actief · 7 stappen</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            <TrendingUp className="w-3 h-3" />
            68%
          </div>
        </div>

        <div className="p-4 space-y-2">
          {/* Trigger */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-3 rounded-lg bg-gradient-to-r from-primary-blue/15 to-primary-violet/10 border border-primary-blue/20"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-blue/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-4 h-4 text-primary-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Trigger</div>
                <div className="text-xs font-semibold text-white">Nieuwe inschrijving</div>
              </div>
              <span className="text-[10px] text-primary-emerald font-mono font-bold">START</span>
            </div>
          </m.div>

          {/* Arrow */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
          </m.div>

          {/* Email 1 */}
          <m.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-violet/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-primary-violet" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="text-xs font-semibold text-white">Welkomst-mail</div>
                  <span className="text-[9px] text-slate-500 font-mono">+0 min</span>
                </div>
                <div className="h-1 w-32 rounded-full bg-white/15 mt-1" />
              </div>
              <span className="text-[10px] text-primary-emerald font-mono">92%</span>
            </div>
          </m.div>

          {/* Wait + arrow */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex items-center justify-center gap-2 text-[10px] text-slate-500"
          >
            <Clock className="w-3 h-3" />
            <span className="font-mono">Wacht 2 dagen</span>
          </m.div>

          {/* Email 2 */}
          <m.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-emerald/20 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 text-primary-emerald" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="text-xs font-semibold text-white">Tips & inzichten</div>
                  <span className="text-[9px] text-slate-500 font-mono">+2 dg</span>
                </div>
                <div className="h-1 w-28 rounded-full bg-white/15 mt-1" />
              </div>
              <span className="text-[10px] text-primary-emerald font-mono">78%</span>
            </div>
          </m.div>

          {/* Branch indicator */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex items-center justify-center gap-2 text-[10px] text-slate-500"
          >
            <Filter className="w-3 h-3" />
            <span className="font-mono">IF geopend → aanbod / ELSE → herinnering</span>
          </m.div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-primary-warm" />
            <span className="text-xs text-slate-400">Conversie</span>
            <span className="text-xs font-bold text-primary-emerald">23%</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">24/7 op autopilot</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function MarketingAutomationClientPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Marketing Automation"
        title={<>E-mails{' '}<span className="text-gradient">Die Verkopen Terwijl U Slaapt.</span></>}
        subtitle="Slimme e-mailflows die leads opwarmen, klanten terughalen en omzet automatiseren — 24/7, zonder handwerk."
        ctaLabel="Gratis Journey-Audit"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<AutomationMockup />}
      />

      <TechStackBar items={techStack} label="Wij bouwen in" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven met contacten,<br /><span className="text-gradient">maar geen tijd om te mailen.</span></>}
        description="Wij automatiseren e-mailflows voor iedereen die meer omzet uit bestaande contacten wil halen — zonder elke week e-mails te schrijven."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Andere branche? Als u contacten heeft en verkoopt, kan automation voor u werken."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Complete automation-setup,<br /><span className="text-gradient">op autopilot.</span></>}
        description="Alle 30+ punten hieronder zitten in het maandabonnement. Strategie, bouw, copy en rapportage — alles inbegrepen."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'E-mail is nog steeds het meest winstgevende marketingkanaal. Maar alleen als u het goed doet.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van journey-audit naar <span className="text-gradient">winstgevende flows.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise-automation,<br /><span className="text-gradient">voor elke ondernemer.</span></>}
        description={<>Grote e-commerce bedrijven gebruiken <strong className="text-slate-800">Klaviyo, HubSpot en Salesforce</strong> voor geavanceerde flows die miljoenen euros automatiseren. Voor MKB is dat vaak onbereikbaar — wij brengen dezelfde setups als toegankelijk maandabonnement.</>}
        flowDiagram={{
          sourceLabel: 'Deze aanpak wordt bijvoorbeeld gebruikt door:',
          sources: [
            { icon: Building2, label: 'E-commerce giganten', color: 'text-primary-blue' },
            { icon: Mail, label: 'SaaS-bedrijven', color: 'text-primary-emerald' },
            { icon: Target, label: 'Media-platforms', color: 'text-primary-violet' },
            { icon: BarChart3, label: 'B2B merken', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde flow-strategie',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Workflow, text: 'Flows die 24/7 draaien, ook als u slaapt' },
          { icon: Filter, text: 'Segmentatie op echt gedrag, niet gokwerk' },
          { icon: Mail, text: 'E-mails die leest als een persoon, niet als marketing' },
          { icon: TrendingUp, text: 'Doorlopende A/B-testen en optimalisatie' },
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
        ctaSubtext="Gratis journey-audit binnen 1 week — geheel vrijblijvend."
        riskReversal={['Gratis journey-audit', 'Maandelijks opzegbaar']}
        scarcity="Beperkte capaciteit voor nieuwe klanten per maand"
        confidenceTitle={<>Vaste maandprijs. <span className="text-slate-400 font-normal">Geen uurtje-factuurtje.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Uw lijst, uw flows, uw data — altijd van u."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="violet" />

      <FinalCTA
        title={<>80% van uw omzet komt van bestaande contacten.<br /><span className="text-gradient">Benut u dat?</span></>}
        ctaLabel="Vraag Journey-Audit Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
