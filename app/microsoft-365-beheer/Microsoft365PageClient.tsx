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

import { FaMicrosoft, FaEnvelope, FaLock, FaCloud, FaShieldAlt } from 'react-icons/fa'
import { SiOkta } from 'react-icons/si'
import { HiPlus } from 'react-icons/hi'
import {
  Mail, Video, HardDrive, FileText, Shield,
  Building2, Briefcase, Users, CheckCircle2, Lock, Cloud as CloudIcon,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/microsoft-365'

const techStack = [
  { icon: FaMicrosoft, name: 'Microsoft 365' },
  { icon: FaEnvelope, name: 'Exchange Online' },
  { icon: FaCloud, name: 'SharePoint' },
  { icon: FaLock, name: 'Entra ID' },
  { icon: FaShieldAlt, name: 'Defender' },
  { icon: SiOkta, name: 'MFA' },
  { icon: HiPlus, name: 'En nog veel meer' },
]

// ============================================================================
// HERO VISUAL — M365 tenant security & migration dashboard
// ============================================================================
function M365TenantMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-blue/20 via-primary-violet/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-blue to-primary-violet flex items-center justify-center shadow-lg shadow-primary-blue/30">
            <FaMicrosoft className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">M365 Tenant</div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <span>Voorbeeld · beheerde M365-tenant</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            <CheckCircle2 className="w-3 h-3" />
            Hardened
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Apps row */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: Mail, label: 'Exchange', color: 'text-primary-blue', bg: 'bg-primary-blue/15' },
              { icon: Video, label: 'Teams', color: 'text-primary-violet', bg: 'bg-primary-violet/15' },
              { icon: HardDrive, label: 'OneDrive', color: 'text-primary-blue', bg: 'bg-primary-blue/15' },
              { icon: FileText, label: 'SharePoint', color: 'text-primary-emerald', bg: 'bg-primary-emerald/15' },
            ].map((app, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08 }}
                className={`aspect-square rounded-lg ${app.bg} border border-white/[0.06] flex flex-col items-center justify-center gap-1.5`}
              >
                <app.icon className={`w-5 h-5 ${app.color}`} />
                <span className="text-[9px] text-slate-300 font-medium">{app.label}</span>
              </m.div>
            ))}
          </div>

          {/* Security row */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="p-3 rounded-lg bg-gradient-to-r from-primary-blue/10 to-primary-violet/5 border border-primary-blue/20"
          >
            <div className="flex items-center gap-2 mb-2.5">
              <div className="w-7 h-7 rounded-lg bg-primary-blue/20 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-blue" />
              </div>
              <span className="text-xs font-semibold text-white">Security baseline</span>
              <span className="ml-auto text-[10px] text-primary-emerald font-mono">Active</span>
            </div>
            <div className="space-y-1.5">
              {[
                { label: 'Multi-factor auth', status: '100%' },
                { label: 'Conditional Access', status: '12 rules' },
                { label: 'DLP & Safe Links', status: 'on' },
              ].map((s, i) => (
                <div key={i} className="flex items-center justify-between text-[10px]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-primary-emerald" />
                    <span className="text-slate-300">{s.label}</span>
                  </div>
                  <span className="text-primary-emerald font-mono">{s.status}</span>
                </div>
              ))}
            </div>
          </m.div>

          {/* Migration progress */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <CloudIcon className="w-3.5 h-3.5 text-primary-emerald" />
                <span className="text-xs font-semibold text-white">Migratie</span>
                <span className="text-[9px] text-slate-500 font-mono">Gmail → M365</span>
              </div>
              <span className="text-[10px] text-primary-emerald font-mono font-bold">Klaar</span>
            </div>
            <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
              <m.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 1.2, duration: 1.2 }}
                className="h-full bg-gradient-to-r from-primary-emerald to-primary-blue"
              />
            </div>
            <div className="flex justify-between mt-1.5 text-[9px] text-slate-500 font-mono">
              <span>Mailboxen</span>
              <span>Data</span>
              <span>Foutvrij</span>
            </div>
          </m.div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-primary-emerald" />
            <span className="text-xs text-slate-400">Data-locatie</span>
            <span className="text-xs font-bold text-white">EU</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">AVG-proof · EU tenant</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function Microsoft365PageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Microsoft 365"
        title={<>Microsoft 365{' '}<span className="text-gradient">Ingericht, Veilig, Beheerd.</span></>}
        subtitle="Migratie, configuratie en doorlopend beheer van uw M365-omgeving — door Nederlandse specialisten. Security standaard, AVG-proof en klaar voor groei."
        ctaLabel="Gratis M365-Audit"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<M365TenantMockup />}
      />

      <TechStackBar items={techStack} label="Wij werken met" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven die van M365<br /><span className="text-gradient">meer willen dan losse licenties.</span></>}
        description="Wij bedienen MKB en professionele dienstverleners die M365 willen migreren, strak willen inrichten of uit handen willen geven — altijd met security als fundament."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Ook werkzaam voor andere branches. Bel of mail uw situatie — wij beoordelen vrijblijvend."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Volledig M365-beheer,<br /><span className="text-gradient">security-first.</span></>}
        description="Alle 30 punten hieronder zitten standaard. Migratie, configuratie, security en support — alles inbegrepen bij het maandabonnement."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'M365 aankopen is makkelijk. Er écht mee werken vereist meer.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van audit naar <span className="text-gradient">M365-ontzorging.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise M365-beheer,<br /><span className="text-gradient">voor MKB-budget.</span></>}
        description={<>Grote organisaties hebben M365-specialisten die <strong className="text-slate-800">Conditional Access, DLP en Defender</strong> strak configureren. Voor MKB is dat zelden binnen handbereik — wij brengen dezelfde diepgang als vaste maandprijs.</>}
        flowDiagram={{
          sourceLabel: 'Deze aanpak wordt gebruikt door:',
          sources: [
            { icon: Building2, label: 'Enterprise IT', color: 'text-primary-blue' },
            { icon: Shield, label: 'Security-teams', color: 'text-primary-emerald' },
            { icon: Users, label: 'M365-consultants', color: 'text-primary-violet' },
            { icon: CloudIcon, label: 'Microsoft Partners', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde M365-aanpak',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Lock, text: 'MFA, Conditional Access en DLP standaard' },
          { icon: Mail, text: 'E-mail migratie zonder dataverlies' },
          { icon: Shield, text: 'AVG-proof configuratie, EU-opslag' },
          { icon: Users, text: 'Onboarding en offboarding AVG-compliant' },
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
        ctaSubtext="Gratis M365-audit binnen 1 week — geheel vrijblijvend."
        riskReversal={['Gratis M365-audit', 'Maandelijks opzegbaar']}
        scarcity="Beperkte capaciteit voor nieuwe migratie-trajecten"
        confidenceTitle={<>Per gebruiker, per maand. <span className="text-slate-400 font-normal">Schaalt met u mee.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Licenties op uw naam, tenant op uw naam — geen lock-in."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="blue" />

      <FinalCTA
        title={<>M365 goed ingericht bespaart tijd én risico.<br /><span className="text-gradient">Tijd om het op orde te krijgen.</span></>}
        ctaLabel="Vraag M365-Audit Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
