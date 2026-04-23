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
  SiZapier, SiMake, SiAirtable, SiSlack, SiNotion,
  SiGooglesheets, SiPython, SiOpenai, SiHubspot,
  SiSalesforce, SiStripe, SiShopify, SiGmail,
  SiNodedotjs, SiPostgresql, SiGithub,
} from 'react-icons/si'
import { HiPlus } from 'react-icons/hi'
import {
  Workflow, Database, FileText, CheckCircle2, ArrowDown,
  Settings, Zap, TrendingUp, Building2, Briefcase, Sparkles, Target,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/process-automation'

const techStack = [
  { icon: SiZapier, name: 'Zapier' },
  { icon: SiMake, name: 'Make' },
  { icon: SiPython, name: 'Python' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiOpenai, name: 'OpenAI' },
  { icon: SiGithub, name: 'GitHub' },
  { icon: SiAirtable, name: 'Airtable' },
  { icon: SiGooglesheets, name: 'Sheets' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiHubspot, name: 'HubSpot' },
  { icon: SiSalesforce, name: 'Salesforce' },
  { icon: SiStripe, name: 'Stripe' },
  { icon: SiShopify, name: 'Shopify' },
  { icon: SiGmail, name: 'Gmail' },
  { icon: SiSlack, name: 'Slack' },
  { icon: SiNotion, name: 'Notion' },
  { icon: HiPlus, name: 'En nog veel meer' },
]

// ============================================================================
// HERO VISUAL — Workflow automation diagram
// ============================================================================
function WorkflowMockup() {
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
            <div className="text-sm font-bold text-white tracking-tight">Voorbeeld: maatwerk-flow</div>
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
              </div>
              <span className="text-[11px] text-slate-500">Uw proces · uw regels</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            <TrendingUp className="w-3 h-3" />
            100%
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
                <Zap className="w-4 h-4 text-primary-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider mb-0.5">Trigger</div>
                <div className="text-xs font-semibold text-white">Nieuwe order in webshop</div>
              </div>
              <span className="text-[10px] text-primary-emerald font-mono font-bold">START</span>
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="flex justify-center"
          >
            <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
          </m.div>

          {/* Action 1 — CRM */}
          <m.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-violet/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-4 h-4 text-primary-violet" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="text-xs font-semibold text-white">Klant opslaan in CRM</div>
                </div>
                <div className="h-1 w-32 rounded-full bg-white/15 mt-1" />
              </div>
              <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.85 }}
            className="flex justify-center"
          >
            <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
          </m.div>

          {/* Action 2 — Invoice */}
          <m.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.0 }}
            className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-emerald/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-primary-emerald" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="text-xs font-semibold text-white">Factuur genereren &amp; versturen</div>
                </div>
                <div className="h-1 w-28 rounded-full bg-white/15 mt-1" />
              </div>
              <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15 }}
            className="flex justify-center"
          >
            <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
          </m.div>

          {/* Action 3 — Notify team */}
          <m.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 }}
            className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-warm/20 flex items-center justify-center flex-shrink-0">
                <Settings className="w-4 h-4 text-primary-warm" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <div className="text-xs font-semibold text-white">Team-notificatie &amp; log</div>
                </div>
                <div className="h-1 w-24 rounded-full bg-white/15 mt-1" />
              </div>
              <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
            </div>
          </m.div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-primary-warm" />
            <span className="text-xs text-slate-400">Tijdwinst</span>
            <span className="text-xs font-bold text-primary-emerald">12u/wk</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">0 fouten · 24/7 actief</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function ProcessAutomationPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Proces Automatisering"
        title={<>Automatiseren{' '}<span className="text-gradient">Volledig Op Maat.</span></>}
        subtitle="Elk bedrijf werkt anders. Wij bouwen automatiseringen op maat — van simpele flow tot complexe integratie — altijd rond úw proces, nooit uit een template."
        ctaLabel="Gratis Proces-Audit"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<WorkflowMockup />}
      />

      <TechStackBar items={techStack} label="Wij bouwen in" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Voor iedereen met een proces<br /><span className="text-gradient">dat beter kan.</span></>}
        description="Wij bouwen op maat, dus branche of tool-stack maakt ons niet uit. Heeft u iets dat elke week handmatig gebeurt en regels volgt? Dan kunnen we het automatiseren."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Andere branche of uniek proces? Juist daarvoor is maatwerk. Bel of mail uw situatie — wij beoordelen vrijblijvend."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Maatwerk-automatisering,<br /><span className="text-gradient">volledig begeleid.</span></>}
        description="Alle 30 punten hieronder zitten standaard in elk traject. Audit, maatwerk-bouw, documentatie en doorontwikkeling — alles inbegrepen."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Automatisering is geen doel. Tijd terug voor het echte werk is het doel.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van audit naar <span className="text-gradient">automatische workflow.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Maatwerk-automation,<br /><span className="text-gradient">zonder enterprise-prijs.</span></>}
        description={<>Grote bedrijven laten hun processen op maat automatiseren met <strong className="text-slate-800">no-code én custom code</strong>. Voor MKB en ZZP leek dat onbereikbaar — wij brengen dezelfde maatwerk-aanpak als betaalbaar, begeleid traject.</>}
        flowDiagram={{
          sourceLabel: 'Deze aanpak wordt bijvoorbeeld gebruikt door:',
          sources: [
            { icon: Building2, label: 'Enterprise IT', color: 'text-primary-blue' },
            { icon: Database, label: 'Finance-afdelingen', color: 'text-primary-emerald' },
            { icon: Sparkles, label: 'Operations-teams', color: 'text-primary-violet' },
            { icon: Target, label: 'Shared Services', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde maatwerk-aanpak',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Sparkles, text: 'Gebouwd rond úw proces — geen template' },
          { icon: Database, text: 'Custom koppelingen met elk systeem of tool' },
          { icon: FileText, text: 'Documentatie zodat u zelf verder kunt' },
          { icon: TrendingUp, text: 'Vooraf berekende ROI per automatisering' },
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
        ctaSubtext="Gratis proces-audit binnen 1 week — geheel vrijblijvend."
        riskReversal={['Gratis proces-audit', 'ROI vooraf berekend']}
        scarcity="Beperkte capaciteit voor nieuwe automatiseringstrajecten"
        confidenceTitle={<>Vaste projectprijs. <span className="text-slate-400 font-normal">Geen uurtje-factuurtje.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Gebouwd in uw eigen tools. U bent nooit gegijzeld."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="violet" />

      <FinalCTA
        title={<>Elke week dezelfde taak handmatig doen?<br /><span className="text-gradient">Dat kan beter.</span></>}
        ctaLabel="Vraag Proces-Audit Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
