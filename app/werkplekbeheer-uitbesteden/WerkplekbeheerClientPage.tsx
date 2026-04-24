'use client'

import { m } from 'framer-motion'
import { useReducedAmbient } from '@/lib/useMobile'
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
  SiDell, SiHp, SiLenovo, SiApple, SiLogitech, SiOkta,
  SiSlack, SiNotion,
} from 'react-icons/si'
import { FaMicrosoft, FaWindows } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import {
  Laptop, Headphones, UserPlus, ShieldCheck, CheckCircle2,
  Building2, Briefcase, Smartphone, Clock, UserCheck, Monitor,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/werkplekbeheer'

const techStack = [
  { icon: FaMicrosoft, name: 'Microsoft 365' },
  { icon: FaWindows, name: 'Windows 11' },
  { icon: SiApple, name: 'macOS' },
  { icon: SiDell, name: 'Dell' },
  { icon: SiHp, name: 'HP' },
  { icon: SiLenovo, name: 'Lenovo' },
  { icon: SiLogitech, name: 'Logitech' },
  { icon: SiOkta, name: 'Okta / MFA' },
  { icon: SiSlack, name: 'Slack' },
  { icon: SiNotion, name: 'Notion' },
  { icon: HiPlus, name: 'En nog veel meer' },
]

// ============================================================================
// HERO VISUAL — Werkplek / onboarding ticket mockup
// ============================================================================
function WorkplaceMockup() {
  const reducedAmbient = useReducedAmbient()
  const tickets = [
    { user: 'Nieuwe collega', role: 'Onboarding', status: 'done', icon: UserPlus, color: 'emerald', time: 'dag 1', detail: 'Laptop + M365 geleverd' },
    { user: 'Medewerker', role: 'Support', status: 'progress', icon: Headphones, color: 'blue', time: 'bezig', detail: 'VPN-verbinding fixen' },
    { user: 'Medewerker', role: 'Upgrade', status: 'scheduled', icon: Laptop, color: 'violet', time: 'gepland', detail: 'Naar Windows 11' },
  ]

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-emerald/20 via-primary-blue/15 to-primary-violet/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-emerald/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-emerald to-primary-blue flex items-center justify-center shadow-lg shadow-primary-emerald/30">
            <Monitor className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Werkplek-dashboard</div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
              </div>
              <span>Werkplek-overzicht</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            <CheckCircle2 className="w-3 h-3" />
            SLA
          </div>
        </div>

        <div className="p-4 space-y-2">
          {tickets.map((t, i) => {
            const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
              emerald: { bg: 'bg-primary-emerald/20', text: 'text-primary-emerald', border: 'border-primary-emerald/20' },
              blue: { bg: 'bg-primary-blue/20', text: 'text-primary-blue', border: 'border-primary-blue/20' },
              violet: { bg: 'bg-primary-violet/20', text: 'text-primary-violet', border: 'border-primary-violet/20' },
            }
            const c = colorClasses[t.color]
            const Icon = t.icon
            return (
              <m.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className={`p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] ${t.status === 'progress' ? `bg-gradient-to-r from-primary-blue/10 to-primary-violet/5 ${c.border}` : ''}`}
              >
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-lg ${c.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-4 h-4 ${c.text}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs font-semibold text-white">{t.user}</span>
                      <span className={`text-[9px] font-mono ${c.text} uppercase tracking-wider`}>{t.role}</span>
                    </div>
                    <div className="text-[10px] text-slate-400">{t.detail}</div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    {t.status === 'done' && (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-primary-emerald ml-auto mb-0.5" />
                        <div className="text-[9px] text-slate-500 font-mono">{t.time}</div>
                      </>
                    )}
                    {t.status === 'progress' && (
                      <>
                        <m.div
                          animate={reducedAmbient ? undefined : { scale: [1, 1.2, 1] }}
                          transition={reducedAmbient ? undefined : { duration: 1.5, repeat: Infinity }}
                          className="w-2 h-2 rounded-full bg-primary-blue ml-auto mb-1"
                        />
                        <div className="text-[9px] text-primary-blue font-mono font-semibold">{t.time}</div>
                      </>
                    )}
                    {t.status === 'scheduled' && (
                      <>
                        <Clock className="w-4 h-4 text-primary-violet ml-auto mb-0.5" />
                        <div className="text-[9px] text-slate-500 font-mono">{t.time}</div>
                      </>
                    )}
                  </div>
                </div>
              </m.div>
            )
          })}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <m.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="flex items-center gap-1 mb-0.5">
                <Laptop className="w-3 h-3 text-primary-blue" />
                <span className="text-[9px] text-slate-500 uppercase tracking-wider">Devices</span>
              </div>
              <div className="text-xs font-bold text-white font-mono">—</div>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="flex items-center gap-1 mb-0.5">
                <Smartphone className="w-3 h-3 text-primary-violet" />
                <span className="text-[9px] text-slate-500 uppercase tracking-wider">Mobiel</span>
              </div>
              <div className="text-xs font-bold text-white font-mono">—</div>
            </m.div>
            <m.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06]"
            >
              <div className="flex items-center gap-1 mb-0.5">
                <ShieldCheck className="w-3 h-3 text-primary-emerald" />
                <span className="text-[9px] text-slate-500 uppercase tracking-wider">MFA</span>
              </div>
              <div className="text-xs font-bold text-white font-mono">100%</div>
            </m.div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <UserCheck className="w-3.5 h-3.5 text-primary-emerald" />
            <span className="text-xs text-slate-400">Vaste beheerder</span>
            <span className="text-xs font-bold text-white">Mark</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">SLA 15m respons</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function WerkplekbeheerClientPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Werkplekbeheer"
        title={<>Werkplekken Die{' '}<span className="text-gradient">Gewoon Aan Staan.</span></>}
        subtitle="Laptops, software, onboarding en support — één aanspreekpunt die uw medewerkers bij naam kent. Nieuwe collega op dag 1 productief."
        ctaLabel="Gratis Werkplek-Audit"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<WorkplaceMockup />}
      />

      <TechStackBar items={techStack} label="Wij werken met" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven waar medewerkers <br /><span className="text-gradient">niet met IT willen worstelen.</span></>}
        description="Wij nemen werkplekbeheer over voor bedrijven die willen groeien zonder IT-hoofdpijn — van 5 tot 150+ medewerkers, op kantoor, thuis of onderweg."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Andere branche of setup? Bel of mail — wij maken altijd een plan op maat van uw team."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Complete werkplek-zorg,<br /><span className="text-gradient">vast bedrag per werkplek.</span></>}
        description="Alle 30 punten hieronder zitten standaard in het maandabonnement. Hardware, software, support en security — alles inbegrepen."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Uw medewerkers moeten werken. Niet uren aan IT-support kwijt zijn.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van audit naar <span className="text-gradient">werkplek-ontzorging.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise werkplek-beheer,<br /><span className="text-gradient">op MKB-schaal.</span></>}
        description={<>Grote organisaties hebben IT-teams met MDM, Intune, strakke <strong className="text-slate-800">onboarding-processen en 15-minuten SLA</strong>. Voor MKB is dat vaak onbetaalbaar — wij leveren dezelfde ontzorging als vaste prijs per werkplek.</>}
        flowDiagram={{
          sourceLabel: 'Deze aanpak wordt gebruikt door:',
          sources: [
            { icon: Building2, label: 'Enterprise IT', color: 'text-primary-blue' },
            { icon: Laptop, label: 'Tech-bedrijven', color: 'text-primary-emerald' },
            { icon: Headphones, label: 'Managed Services', color: 'text-primary-violet' },
            { icon: ShieldCheck, label: 'Security-teams', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde werkplek-aanpak',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: UserPlus, text: 'Nieuwe collega op dag 1 productief' },
          { icon: Headphones, text: 'Support die uw mensen bij naam kent' },
          { icon: ShieldCheck, text: 'MFA, encryptie en MDM standaard' },
          { icon: Laptop, text: 'Hardware en licenties op úw naam' },
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
        ctaSubtext="Gratis werkplek-audit binnen 1 week — geheel vrijblijvend."
        riskReversal={['Vaste prijs per werkplek', 'Maandelijks opzegbaar']}
        scarcity="Beperkte capaciteit voor nieuwe beheer-trajecten"
        confidenceTitle={<>Per werkplek, per maand. <span className="text-slate-400 font-normal">Schaalt met u mee.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Licenties en hardware op uw naam. U zit nooit vast."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="emerald" />

      <FinalCTA
        title={<>Elk IT-probleem kost uur productiviteit.<br /><span className="text-gradient">Dat kan anders.</span></>}
        ctaLabel="Vraag Werkplek-Audit Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
