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
  SiCloudflare, SiLetsencrypt, SiWireguard, SiLinux,
  SiDocker, SiNextdotjs, SiTypescript, SiGithub,
} from 'react-icons/si'
import {
  Shield, ShieldCheck, Fingerprint, AlertTriangle,
  Building2, Briefcase, Network, Database,
  ClipboardCheck, BookOpen, Search, CheckCircle2, FileText,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/cybersecurity'

const techStack = [
  { icon: SiCloudflare, name: 'Cloudflare' },
  { icon: SiLetsencrypt, name: "Let's Encrypt" },
  { icon: SiWireguard, name: 'WireGuard VPN' },
  { icon: SiLinux, name: 'Linux' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiGithub, name: 'GitHub Security' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiTypescript, name: 'TypeScript' },
]

// ============================================================================
// HERO VISUAL — Audit rapport mockup
// ============================================================================
function AuditReportMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-blue/20 via-primary-violet/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/15">
        {/* Report header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-blue to-primary-violet flex items-center justify-center shadow-lg shadow-primary-blue/30">
            <ClipboardCheck className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Security Audit Rapport</div>
            <div className="text-[11px] text-slate-500">Nulmeting · 2-dagen assessment</div>
          </div>
          <div className="text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            GEREED
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Security score */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="p-4 rounded-xl bg-gradient-to-br from-primary-blue/15 to-primary-violet/10 border border-primary-blue/20"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Security Score</span>
              <Shield className="w-4 h-4 text-primary-blue" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-3xl font-display font-bold text-white tracking-tight">72</span>
              <span className="text-sm text-slate-400">/100</span>
              <span className="ml-auto text-[10px] text-primary-warm font-mono font-bold uppercase">Actie vereist</span>
            </div>
            <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
              <m.div
                initial={{ width: 0 }}
                animate={{ width: '72%' }}
                transition={{ delay: 0.8, duration: 1.2, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-primary-warm via-primary-blue to-primary-emerald rounded-full"
              />
            </div>
          </m.div>

          {/* Findings list */}
          <div className="space-y-2">
            {[
              { status: 'ok', label: 'Firewall configuratie', icon: CheckCircle2, color: 'text-primary-emerald', bg: 'bg-emerald-500/10 border-emerald-500/20' },
              { status: 'warning', label: 'MFA niet overal actief', icon: AlertTriangle, color: 'text-primary-warm', bg: 'bg-amber-500/10 border-amber-500/20' },
              { status: 'ok', label: 'Back-up setup getest', icon: CheckCircle2, color: 'text-primary-emerald', bg: 'bg-emerald-500/10 border-emerald-500/20' },
              { status: 'warning', label: 'Awareness training nodig', icon: BookOpen, color: 'text-primary-blue', bg: 'bg-blue-500/10 border-blue-500/20' },
            ].map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.12 }}
                className={`flex items-center gap-2.5 p-2.5 rounded-lg border ${item.bg}`}
              >
                <item.icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                <span className="text-xs text-white flex-1">{item.label}</span>
                <div className="h-1 w-12 rounded-full bg-white/15" />
              </m.div>
            ))}
          </div>

          {/* Action plan */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="flex items-center gap-2 p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <Search className="w-3.5 h-3.5 text-primary-violet flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-white mb-0.5">Actieplan opgesteld</div>
              <div className="text-[10px] text-slate-500">8 prioriteiten, vaste prijzen per onderdeel</div>
            </div>
            <span className="text-[10px] text-primary-emerald font-mono font-bold">NEXT</span>
          </m.div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <FileText className="w-3.5 h-3.5 text-primary-blue" />
            <span className="text-xs text-slate-400">Rapport klaar in</span>
            <span className="text-xs font-bold text-primary-blue">48u</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">Inclusief plan van aanpak</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function CybersecurityPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Audits & Awareness-training"
        title={<>Security{' '}<span className="text-gradient">Die Begint Bij Weten.</span></>}
        subtitle="Grondige security-audits en praktische awareness-trainingen voor MKB. Eerst uw risico's in kaart, dan pas actie."
        ctaLabel="Vraag Nulmeting Aan"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<AuditReportMockup />}
      />

      <TechStackBar items={techStack} label="Wij beveiligen met" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven die<br />hun data <span className="text-gradient">niet willen verliezen.</span></>}
        description="Wij beveiligen MKB-bedrijven waar data gevoelig is, compliance telt, of waar één incident een bedrijfsramp kan zijn."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Andere branche? Elk bedrijf heeft data die het waard is om te beschermen."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Audits, training<br /><span className="text-gradient">en concrete actieplannen.</span></>}
        description="Alle 30+ punten hieronder horen bij onze audit + training-aanpak. Geen losse tools, geen jargon — u krijgt inzicht en handvatten."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Echte cybersecurity voor MKB begint niet bij nieuwe tools. Het begint bij weten waar u staat en uw team op niveau brengen.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van nulmeting naar <span className="text-gradient">getraind team.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise-kennis,<br /><span className="text-gradient">voor elke ondernemer.</span></>}
        description={<>Grote organisaties besteden tonnen aan <strong className="text-slate-800">security-audits en team-trainingen</strong> van big-four consultants. Voor MKB is dat vaak onbereikbaar — maar de dreigingen zijn hetzelfde. Wij brengen dezelfde grondigheid, toegankelijk en betaalbaar.</>}
        flowDiagram={{
          sourceLabel: 'Deze grondigheid wordt bijvoorbeeld gebruikt door:',
          sources: [
            { icon: Building2, label: 'Banken', color: 'text-primary-blue' },
            { icon: Shield, label: 'Overheid', color: 'text-primary-emerald' },
            { icon: Database, label: 'Zorginstellingen', color: 'text-primary-violet' },
            { icon: Network, label: 'Multinationals', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde audit-diepgang',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: ClipboardCheck, text: 'Grondige nulmeting met concreet actieplan' },
          { icon: BookOpen, text: 'Praktische awareness-training voor uw team' },
          { icon: ShieldCheck, text: 'AVG en NEN 7510 compliance-check' },
          { icon: Fingerprint, text: 'Ondersteuning bij MFA en toegang-beheer' },
        ]}
        ctaLabel="Start Met Een Nulmeting"
        ctaHref="/gratis-advies"
      />

      <PrijsSection
        sectionNumber="/ 05"
        eyebrow="Investering op maat"
        price={priceInfo.price}
        priceDescription={priceInfo.description}
        ctaLabel="Vraag Offerte Aan"
        ctaHref="/gratis-advies"
        ctaSubtext="Gratis intakegesprek — dan pas een offerte."
        riskReversal={['Gratis intakegesprek', 'Vaste prijzen per onderdeel']}
        scarcity="Beperkte capaciteit per maand voor nieuwe klanten"
        confidenceTitle={<>Vaste prijs per audit of training. <span className="text-slate-400 font-normal">Geen uurtje-factuurtje.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Eerst weten wat u nodig heeft. Dan pas een offerte."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="blue" />

      <FinalCTA
        title={<>43% van cyberaanvallen treft kleine bedrijven.<br /><span className="text-gradient">Weet u waar u staat?</span></>}
        ctaLabel="Vraag Nulmeting Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
