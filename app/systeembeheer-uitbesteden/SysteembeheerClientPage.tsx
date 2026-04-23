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
  SiCisco, SiFortinet, SiUbiquiti, SiSynology, SiVeeam,
  SiVmware, SiProxmox, SiLinux,
} from 'react-icons/si'
import { FaMicrosoft, FaWindows, FaAws } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import {
  Server, Network, Wifi, Database, ShieldCheck, Activity,
  Building2, Briefcase, Cloud, CheckCircle2, Bell, HardDrive,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/systeembeheer'

const techStack = [
  { icon: FaMicrosoft, name: 'Microsoft 365' },
  { icon: FaWindows, name: 'Windows Server' },
  { icon: SiLinux, name: 'Linux' },
  { icon: FaAws, name: 'AWS' },
  { icon: SiVmware, name: 'VMware' },
  { icon: SiProxmox, name: 'Proxmox' },
  { icon: SiCisco, name: 'Cisco' },
  { icon: SiFortinet, name: 'Fortinet' },
  { icon: SiUbiquiti, name: 'Ubiquiti' },
  { icon: SiSynology, name: 'Synology' },
  { icon: SiVeeam, name: 'Veeam' },
  { icon: HiPlus, name: 'En nog veel meer' },
]

// ============================================================================
// HERO VISUAL — IT infra monitoring dashboard
// ============================================================================
function InfraMonitorMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-blue/20 via-primary-emerald/15 to-primary-violet/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-blue to-primary-emerald flex items-center justify-center shadow-lg shadow-primary-blue/30">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Infra status</div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
              </div>
              <span>Monitoring-dashboard</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-slate-400 bg-white/[0.03] border border-white/[0.06] px-2 py-1 rounded">
            Voorbeeld
          </div>
        </div>

        <div className="p-4 space-y-2">
          {/* Server */}
          <m.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-blue/20 flex items-center justify-center flex-shrink-0">
                <Server className="w-4 h-4 text-primary-blue" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-white">PRD-SRV-01</span>
                  <span className="text-[9px] text-slate-600 font-mono">Windows Server 2022</span>
                </div>
                <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
                  <m.div
                    initial={{ width: 0 }}
                    animate={{ width: '34%' }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="h-full bg-gradient-to-r from-primary-emerald to-primary-blue"
                  />
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[10px] text-primary-emerald font-mono font-bold">34% CPU</div>
                <div className="text-[9px] text-slate-600 font-mono">142d uptime</div>
              </div>
            </div>
          </m.div>

          {/* Network */}
          <m.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-violet/20 flex items-center justify-center flex-shrink-0">
                <Network className="w-4 h-4 text-primary-violet" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-white">Firewall &amp; LAN</span>
                  <span className="text-[9px] text-slate-600 font-mono">4 VLANs · 3 AP</span>
                </div>
                <div className="flex items-center gap-1">
                  {[...Array(12)].map((_, i) => (
                    <m.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: [0.3, 1, 0.5, 0.8, 0.4][i % 5] }}
                      transition={{ delay: 0.6 + i * 0.04, duration: 0.3 }}
                      className="w-1 h-2 bg-primary-violet/60 rounded-sm origin-bottom"
                    />
                  ))}
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-[10px] text-primary-emerald font-mono font-bold">124 Mbps</div>
                <div className="text-[9px] text-slate-600 font-mono">0 alerts</div>
              </div>
            </div>
          </m.div>

          {/* Backup */}
          <m.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="p-3 rounded-lg bg-gradient-to-r from-primary-emerald/10 to-primary-blue/5 border border-primary-emerald/20"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary-emerald/20 flex items-center justify-center flex-shrink-0">
                <HardDrive className="w-4 h-4 text-primary-emerald" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-white">Backup</span>
                  <span className="text-[9px] text-slate-600 font-mono">Veeam · off-site</span>
                </div>
                <div className="text-[10px] text-slate-400">Laatste: 02:14 · verified ✓</div>
              </div>
              <CheckCircle2 className="w-4 h-4 text-primary-emerald flex-shrink-0" />
            </div>
          </m.div>

          {/* WiFi + Security bar */}
          <div className="grid grid-cols-2 gap-2">
            <m.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <Wifi className="w-3 h-3 text-primary-blue" />
                <span className="text-[9px] text-slate-500 uppercase tracking-wider">WiFi</span>
              </div>
              <div className="text-xs font-bold text-white font-mono">42 clients</div>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="flex items-center gap-1.5 mb-0.5">
                <ShieldCheck className="w-3 h-3 text-primary-emerald" />
                <span className="text-[9px] text-slate-500 uppercase tracking-wider">Security</span>
              </div>
              <div className="text-xs font-bold text-white font-mono">Hardened</div>
            </m.div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Bell className="w-3.5 h-3.5 text-primary-warm" />
            <span className="text-xs text-slate-400">Alerts</span>
            <span className="text-xs font-bold text-primary-emerald">0 open</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">SLA 1u respons</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function SysteembeheerClientPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Systeembeheer"
        title={<>IT-Infrastructuur{' '}<span className="text-gradient">Die Gewoon Werkt.</span></>}
        subtitle="Servers, netwerk, backup en WiFi — proactief beheerd door uw vaste systeembeheerder. Geen callcenter, wel antwoord."
        ctaLabel="Gratis Infrastructuur-Audit"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<InfraMonitorMockup />}
      />

      <TechStackBar items={techStack} label="Wij werken met" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven waar IT gewoon<br /><span className="text-gradient">moet werken.</span></>}
        description="Van professionele dienstverlener tot productie — wij beheren de infrastructuur van bedrijven die het zich niet kunnen veroorloven om uren plat te liggen."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Andere branche of unieke setup? Juist dan is maatwerk nodig. Bel of mail uw situatie — wij beoordelen vrijblijvend."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Complete infrastructuur-zorg,<br /><span className="text-gradient">vast maandbedrag.</span></>}
        description="Alle 30 punten hieronder zitten standaard in het maandabonnement. Servers, netwerk, backup, security en telefonie — alles inbegrepen."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'IT die werkt, valt niet op. Dat is precies het punt.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van audit naar <span className="text-gradient">infrastructuur op orde.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise IT-beheer,<br /><span className="text-gradient">voor MKB-formaat.</span></>}
        description={<>Grote organisaties hebben IT-teams die 24/7 <strong className="text-slate-800">servers, netwerk en backup</strong> bewaken. Voor MKB is dat vaak onbetaalbaar — wij leveren dezelfde zorgvuldigheid als vaste maandprijs.</>}
        flowDiagram={{
          sourceLabel: 'Deze aanpak wordt gebruikt door:',
          sources: [
            { icon: Building2, label: 'Enterprise IT', color: 'text-primary-blue' },
            { icon: Cloud, label: 'Cloud-providers', color: 'text-primary-emerald' },
            { icon: ShieldCheck, label: 'Security-teams', color: 'text-primary-violet' },
            { icon: Network, label: 'MSPs internationaal', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde beheer-aanpak',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Server, text: 'Proactief beheer, niet brandblussen' },
          { icon: Database, text: 'Backups die écht werken als het nodig is' },
          { icon: ShieldCheck, text: 'Security zonder lock-in of lock-down' },
          { icon: Activity, text: '24/7 monitoring — u slaapt door' },
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
        ctaSubtext="Gratis infrastructuur-audit binnen 1 week — geheel vrijblijvend."
        riskReversal={['Gratis audit', 'Maandelijks opzegbaar']}
        scarcity="Beperkte capaciteit voor nieuwe beheer-trajecten"
        confidenceTitle={<>Vaste maandprijs. <span className="text-slate-400 font-normal">Geen uurtje-factuurtje.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Uw licenties, uw data, uw wachtwoorden — altijd van u."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="blue" />

      <FinalCTA
        title={<>IT valt pas op als het uitvalt.<br /><span className="text-gradient">Wij zorgen dat dat niet gebeurt.</span></>}
        ctaLabel="Vraag Infrastructuur-Audit Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
