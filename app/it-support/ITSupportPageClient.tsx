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
  SiCisco, SiFortinet, SiUbiquiti, SiLinux, SiLogitech,
  SiSynology, SiVmware,
} from 'react-icons/si'
import { FaMicrosoft, FaWindows, FaApple } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import {
  Headphones, MapPin, CalendarCheck, PhoneCall, MessageSquare,
  Building2, Briefcase, CheckCircle2, Clock, UserCheck, Wrench, Activity,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/it-support'

const techStack = [
  { icon: FaMicrosoft, name: 'Microsoft 365' },
  { icon: FaWindows, name: 'Windows' },
  { icon: FaApple, name: 'macOS' },
  { icon: SiLinux, name: 'Linux' },
  { icon: SiCisco, name: 'Cisco' },
  { icon: SiFortinet, name: 'Fortinet' },
  { icon: SiUbiquiti, name: 'Ubiquiti' },
  { icon: SiSynology, name: 'Synology' },
  { icon: SiVmware, name: 'VMware' },
  { icon: SiLogitech, name: 'Logitech' },
  { icon: HiPlus, name: 'En nog veel meer' },
]

// ============================================================================
// HERO VISUAL — Live IT-support ticket with real responder
// ============================================================================
function SupportTicketMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-blue/20 via-primary-emerald/15 to-primary-violet/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-blue to-primary-emerald flex items-center justify-center shadow-lg shadow-primary-blue/30">
              <Headphones className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary-emerald border-2 border-[#0d1025]">
              <div className="absolute inset-0 rounded-full bg-primary-emerald animate-ping" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Support-voorbeeld</div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <span className="font-mono">Ticket · voorbeeld</span>
              <span>·</span>
              <span>priority normal</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            <Clock className="w-3 h-3" />
            snel opgelost
          </div>
        </div>

        {/* Conversation */}
        <div className="p-4 space-y-3 min-h-[280px]">
          {/* Customer */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex gap-2.5"
          >
            <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-slate-300">KL</span>
            </div>
            <div className="flex-1">
              <div className="text-[10px] text-slate-500 mb-1 font-mono">Klant</div>
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <p className="text-xs text-slate-300 leading-relaxed">“De printer doet het niet meer — hele ochtend al.”</p>
              </div>
            </div>
          </m.div>

          {/* Engineer */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-2.5"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-blue to-primary-emerald flex items-center justify-center flex-shrink-0 mt-0.5">
              <UserCheck className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-primary-blue font-mono font-semibold">Uw IT-specialist</span>
              </div>
              <div className="p-2.5 rounded-lg bg-gradient-to-r from-primary-blue/10 to-primary-emerald/5 border border-primary-blue/20">
                <p className="text-xs text-slate-200 leading-relaxed">“Ik zie het ticket — ik log even mee om te kijken.”</p>
              </div>
            </div>
          </m.div>

          {/* Action */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]"
          >
            <div className="flex items-center gap-2">
              <Wrench className="w-3.5 h-3.5 text-primary-violet" />
              <span className="text-[11px] font-semibold text-white">Remote sessie gestart</span>
            </div>
            <Activity className="w-3.5 h-3.5 text-primary-violet animate-pulse" />
          </m.div>

          {/* Resolved */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-primary-emerald/10 border border-primary-emerald/20"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
              <div>
                <div className="text-[11px] font-semibold text-white">Opgelost</div>
                <div className="text-[9px] text-slate-500 font-mono">Print-spooler herstart, driver update</div>
              </div>
            </div>
            <span className="text-[10px] text-primary-emerald font-mono font-bold">snel opgelost</span>
          </m.div>
        </div>

        {/* Footer — three support models */}
        <div className="border-t border-white/[0.06] px-4 py-3 bg-white/[0.02]">
          <div className="grid grid-cols-3 gap-2">
            {[
              { icon: Headphones, label: 'Remote', color: 'text-primary-blue' },
              { icon: MapPin, label: 'On-site', color: 'text-primary-violet' },
              { icon: CalendarCheck, label: 'Vaste dag', color: 'text-primary-emerald' },
            ].map((m, i) => {
              const Icon = m.icon
              return (
                <div key={i} className="flex items-center justify-center gap-1.5 py-1 rounded border border-white/[0.06]">
                  <Icon className={`w-3 h-3 ${m.color}`} />
                  <span className="text-[10px] text-slate-400 font-medium">{m.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function ITSupportPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="IT-Support"
        title={<>IT-Support{' '}<span className="text-gradient">Die Direct Antwoord Geeft.</span></>}
        subtitle="Remote, op locatie of een vaste IT-dag per week. Nederlandse specialisten, geen callcenter — gewoon iemand die uw bedrijf kent en snapt."
        ctaLabel="Vrijblijvend Overleg"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<SupportTicketMockup />}
      />

      <TechStackBar items={techStack} label="Wij werken met" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Iedereen die IT wil oplossen,<br /><span className="text-gradient">zonder gedoe.</span></>}
        description="Van ZZP’er met één laptop tot MKB met 150+ medewerkers — wij leveren de ondersteuning die bij úw schaal past."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Ook voor andere situaties: u belt, wij beoordelen vrijblijvend welk model bij u past."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Complete IT-ondersteuning,<br /><span className="text-gradient">in drie flexibele modellen.</span></>}
        description="Alle 30 punten hieronder zitten in onze service. Remote, on-site, vaste IT-dag — ook hybride modellen zijn mogelijk."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Goede IT-support voelt als een collega. Niet als een ticket-systeem.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van telefoontje naar <span className="text-gradient">opgelost probleem.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise IT-support,<br /><span className="text-gradient">zonder enterprise-contract.</span></>}
        description={<>Grote organisaties hebben <strong className="text-slate-800">service desks met vaste IT-ers en strakke SLA’s</strong>. Voor MKB en ZZP is dat vaak onbereikbaar — wij leveren dezelfde zorg als strippenkaart of maand-abonnement.</>}
        flowDiagram={{
          sourceLabel: 'Deze aanpak wordt gebruikt door:',
          sources: [
            { icon: Building2, label: 'Corporate service desks', color: 'text-primary-blue' },
            { icon: Headphones, label: 'Managed Service Providers', color: 'text-primary-emerald' },
            { icon: CalendarCheck, label: 'Interne IT-teams', color: 'text-primary-violet' },
            { icon: MapPin, label: 'Field-support teams', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde support-aanpak',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: PhoneCall, text: 'Direct iemand aan de lijn — geen keuzemenu' },
          { icon: UserCheck, text: 'Vaste IT-er die uw mensen bij naam kent' },
          { icon: MessageSquare, text: 'Uitleg in gewone taal, niet in jargon' },
          { icon: Wrench, text: 'Écht opgelost, niet tijdelijk geplakt' },
        ]}
        ctaLabel="Plan Een Kennismaking"
        ctaHref="/gratis-advies"
      />

      <PrijsSection
        sectionNumber="/ 05"
        eyebrow="Drie flexibele modellen"
        price={priceInfo.price}
        priceDescription={priceInfo.description}
        ctaLabel="Vraag Offerte Aan"
        ctaHref="/gratis-advies"
        ctaSubtext="Gratis intake binnen 1 week — geheel vrijblijvend."
        riskReversal={['Strippenkaart beschikbaar', 'Maandelijks opzegbaar']}
        scarcity="Beperkte capaciteit voor nieuwe support-klanten"
        confidenceTitle={<>Betaal alleen wat u gebruikt. <span className="text-slate-400 font-normal">Of kies voor vast maandbedrag.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Wij leven van tevreden klanten, niet van lang-lopende contracten."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="violet" />

      <FinalCTA
        title={<>De beste IT-support is als een goede collega.<br /><span className="text-gradient">Bereikbaar en oplossingsgericht.</span></>}
        ctaLabel="Vraag Intake Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
