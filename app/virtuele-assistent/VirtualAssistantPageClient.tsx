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
  SiOpenai, SiElevenlabs, SiTwilio, SiGooglecalendar,
  SiWhatsapp, SiCalendly, SiHubspot, SiSlack,
} from 'react-icons/si'
import {
  PhoneCall, Mic, Calendar, MessageSquare, CheckCircle2,
  Building2, Briefcase, Globe, Bell, ShieldCheck,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/virtual-assistant'

const techStack = [
  { icon: SiOpenai, name: 'OpenAI Voice' },
  { icon: SiElevenlabs, name: 'ElevenLabs' },
  { icon: SiTwilio, name: 'Twilio' },
  { icon: SiGooglecalendar, name: 'Google Calendar' },
  { icon: SiCalendly, name: 'Calendly' },
  { icon: SiWhatsapp, name: 'WhatsApp' },
  { icon: SiHubspot, name: 'HubSpot' },
  { icon: SiSlack, name: 'Slack' },
]

// ============================================================================
// HERO VISUAL — Active call transcript / voice assistant in action
// ============================================================================
function VoiceCallMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-blue/20 via-primary-violet/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/15">
        {/* Header — active call */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-blue to-primary-violet flex items-center justify-center shadow-lg shadow-primary-blue/30">
              <PhoneCall className="w-4 h-4 text-white" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-primary-emerald border-2 border-[#0d1025]">
              <div className="absolute inset-0 rounded-full bg-primary-emerald animate-ping" />
            </div>
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Live gesprek</div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
              <span className="font-mono">+31 6 14 &bull;&bull;&bull; &bull;&bull;&bull;</span>
              <span>·</span>
              <span>01:24</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            {[...Array(4)].map((_, i) => (
              <m.div
                key={i}
                animate={{ scaleY: [0.3, 1, 0.5, 0.8, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                className="w-0.5 h-3 bg-primary-emerald rounded-full origin-center"
              />
            ))}
          </div>
        </div>

        {/* Transcript */}
        <div className="p-4 space-y-3 min-h-[280px]">
          {/* Caller */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex gap-2.5"
          >
            <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-slate-300">JB</span>
            </div>
            <div className="flex-1">
              <div className="text-[10px] text-slate-500 mb-1 font-mono">Beller · 00:08</div>
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <p className="text-xs text-slate-300 leading-relaxed">“Hoi, ik wil graag een afspraak maken voor volgende week.”</p>
              </div>
            </div>
          </m.div>

          {/* Assistant */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-2.5"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-blue to-primary-violet flex items-center justify-center flex-shrink-0 mt-0.5">
              <Mic className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] text-primary-blue font-mono font-semibold">Assistent · 00:11</span>
                <span className="text-[9px] text-slate-600 font-mono">NL</span>
              </div>
              <div className="p-2.5 rounded-lg bg-gradient-to-r from-primary-blue/10 to-primary-violet/5 border border-primary-blue/20">
                <p className="text-xs text-slate-200 leading-relaxed">“Natuurlijk, ik kijk even in de agenda. Heeft u een voorkeur voor ochtend of middag?”</p>
              </div>
            </div>
          </m.div>

          {/* Caller */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-2.5"
          >
            <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[10px] font-bold text-slate-300">JB</span>
            </div>
            <div className="flex-1">
              <div className="text-[10px] text-slate-500 mb-1 font-mono">Beller · 00:18</div>
              <div className="p-2.5 rounded-lg bg-white/[0.04] border border-white/[0.06]">
                <p className="text-xs text-slate-300 leading-relaxed">“Dinsdagochtend zou ideaal zijn.”</p>
              </div>
            </div>
          </m.div>

          {/* Action taken */}
          <m.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6 }}
            className="flex items-center justify-between gap-2 p-2.5 rounded-lg bg-primary-emerald/10 border border-primary-emerald/20"
          >
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-primary-emerald" />
              <span className="text-[11px] font-semibold text-white">Afspraak ingepland</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary-emerald" />
              <span className="text-[10px] text-primary-emerald font-mono">di 10:00</span>
            </div>
          </m.div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald animate-pulse" />
              <span className="text-xs text-slate-400">Nederlands</span>
            </div>
            <span className="text-slate-700">|</span>
            <span className="text-xs text-slate-500 font-mono">24/7 online</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="w-3 h-3 text-primary-blue" />
            <span className="text-[10px] text-slate-500 font-mono">Transcript opgeslagen</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function VirtualAssistantPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Virtuele Assistent"
        title={<>Een Assistent{' '}<span className="text-gradient">Die Nooit De Telefoon Mist.</span></>}
        subtitle="Een AI-stem die uw telefoon opneemt, afspraken inplant en leads kwalificeert — 24/7, in het Nederlands, zonder wachtrij."
        ctaLabel="Gratis Telefonie-Audit"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<VoiceCallMockup />}
      />

      <TechStackBar items={techStack} label="Wij bouwen in" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven waar elke gemiste oproep<br /><span className="text-gradient">een gemiste klant is.</span></>}
        description="Wij bouwen voice-assistenten voor iedereen die bellend contact belangrijk vindt maar niet altijd een mens beschikbaar heeft — in de zorg, advies, retail en daarbuiten."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Andere branche? Als bellers vaak dezelfde vragen stellen of afspraken willen maken, werkt een voice-assistent."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Complete voice-setup,<br /><span className="text-gradient">dag en nacht live.</span></>}
        description="Alle 30 punten hieronder zitten standaard in het maandabonnement. Stem, scripts, integraties en finetuning — alles inbegrepen."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Een goed eerste contact beslist vaak of iemand klant wordt. 24/7 beschikbaar zijn is geen luxe meer.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van audit naar <span className="text-gradient">altijd-bereikbaar.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise voice-AI,<br /><span className="text-gradient">zonder callcenter-prijs.</span></>}
        description={<>Grote organisaties zetten voice-AI in om duizenden oproepen per dag af te handelen met <strong className="text-slate-800">OpenAI, ElevenLabs en Twilio</strong>. Voor MKB leek dat onbereikbaar — wij leveren dezelfde stack als maandabonnement op maat.</>}
        flowDiagram={{
          sourceLabel: 'Deze technologie wordt gebruikt door:',
          sources: [
            { icon: Building2, label: 'Enterprise callcenters', color: 'text-primary-blue' },
            { icon: PhoneCall, label: 'Financiële instellingen', color: 'text-primary-emerald' },
            { icon: Calendar, label: 'Booking-platforms', color: 'text-primary-violet' },
            { icon: Globe, label: 'Internationale helpdesks', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde voice-stack',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: PhoneCall, text: 'Elke beller krijgt direct antwoord, 24/7' },
          { icon: Calendar, text: 'Afspraken ingepland terwijl u werkt' },
          { icon: ShieldCheck, text: 'AVG-proof, beller wordt geïnformeerd' },
          { icon: Bell, text: 'Escalatie naar mens wanneer nodig' },
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
        ctaSubtext="Gratis telefonie-audit inclusief live demo — geheel vrijblijvend."
        riskReversal={['Gratis telefonie-audit', 'Maandelijks opzegbaar']}
        scarcity="Beperkte capaciteit voor nieuwe voice-trajecten"
        confidenceTitle={<>Vaste maandprijs. <span className="text-slate-400 font-normal">Geen uurtje-factuurtje.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Uw nummer, uw scripts, uw data — altijd van u."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="blue" />

      <FinalCTA
        title={<>Elke gemiste oproep is een gemiste kans.<br /><span className="text-gradient">Dat stopt vandaag.</span></>}
        ctaLabel="Vraag Telefonie-Audit Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
