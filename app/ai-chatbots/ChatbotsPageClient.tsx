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
  SiNextdotjs, SiReact, SiOpenai, SiTypescript, SiVercel,
  SiSupabase, SiWhatsapp, SiHubspot,
} from 'react-icons/si'
import {
  MessageCircle, Bot, Building2, Briefcase,
  Brain, Clock, ShieldCheck, Link2, Send,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/ai-chatbots'

const techStack = [
  { icon: SiOpenai, name: 'OpenAI GPT' },
  { icon: SiSupabase, name: 'Supabase' },
  { icon: SiWhatsapp, name: 'WhatsApp Business' },
  { icon: SiHubspot, name: 'HubSpot CRM' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiVercel, name: 'Vercel' },
]

// ============================================================================
// HERO VISUAL — Schone chat-mockup, geen 3D
// ============================================================================
function ChatbotMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-violet/20 via-primary-blue/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-violet/15">
        {/* Chat header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-violet to-primary-blue flex items-center justify-center shadow-lg shadow-primary-violet/30">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">AI Assistent</div>
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
              </div>
              <span className="text-[11px] text-slate-500">Online · 24/7</span>
            </div>
          </div>
        </div>

        {/* Messages area */}
        <div className="p-4 space-y-3 min-h-[280px] sm:min-h-[320px]">
          {/* Bot welcome */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="flex items-start gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-primary-violet/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Bot className="w-3.5 h-3.5 text-primary-violet" />
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.04] px-3 py-2 max-w-[75%] space-y-1">
              <div className="h-2 w-24 rounded-full bg-white/25" />
              <div className="h-2 w-20 rounded-full bg-white/15" />
            </div>
          </m.div>

          {/* User message */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.4 }}
            className="flex justify-end"
          >
            <div className="rounded-2xl rounded-tr-sm bg-gradient-to-r from-primary-blue to-primary-violet px-3 py-2 max-w-[65%] shadow-lg shadow-primary-blue/20">
              <div className="h-2 w-16 rounded-full bg-white/70" />
            </div>
          </m.div>

          {/* Bot response */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.4 }}
            className="flex items-start gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-primary-violet/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Bot className="w-3.5 h-3.5 text-primary-violet" />
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.04] px-3 py-2 max-w-[80%] space-y-1">
              <div className="h-2 w-32 rounded-full bg-white/25" />
              <div className="h-2 w-28 rounded-full bg-white/20" />
              <div className="h-2 w-20 rounded-full bg-white/15" />
            </div>
          </m.div>

          {/* Typing indicator */}
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.3 }}
            className="flex items-start gap-2"
          >
            <div className="w-6 h-6 rounded-full bg-primary-violet/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Bot className="w-3.5 h-3.5 text-primary-violet" />
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/[0.04] px-3 py-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 rounded-full bg-white/40 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </m.div>
        </div>

        {/* Chat input */}
        <div className="border-t border-white/[0.06] p-3 bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <div className="flex-1 h-9 rounded-full bg-white/[0.04] border border-white/[0.06] flex items-center px-4">
              <span className="text-xs text-slate-500">Stel uw vraag...</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-violet to-primary-blue flex items-center justify-center shadow-lg shadow-primary-violet/30">
              <Send className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function ChatbotsPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="AI & Chatbots"
        title={<>Klantenservice{' '}<span className="text-gradient">Die Nooit Slaapt.</span></>}
        subtitle="Intelligente AI-chatbot die 24/7 uw klanten helpt, leads kwalificeert en afspraken inplant. Getraind op uw bedrijf."
        ctaLabel="Plan Gratis Demo"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<ChatbotMockup />}
      />

      <TechStackBar items={techStack} />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven die<br />hun klantenservice willen<br /><span className="text-gradient">slimmer laten werken.</span></>}
        description="Wij bouwen chatbots voor iedereen met terugkerende klantvragen, leads die verloren gaan, of service-uren die beperkt zijn."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Andere branche? Elke vraag die u vaker beantwoordt, kan door een chatbot worden opgelost."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Meer dan een bot.<br /><span className="text-gradient">Een digitale collega.</span></>}
        description={'Alle 30+ punten hieronder zitten standaard in de bouw-prijs. Geen verborgen kosten, geen losse modules. Wat u ziet, krijgt u.'}
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Een goede chatbot voelt als een extra medewerker — niet als een obstakel. Alles wat uw klanten echt nodig hebben, zit erin.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van idee naar getrainde chatbot <span className="text-gradient">in 2-3 weken.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise-AI,<br /><span className="text-gradient">voor elke ondernemer.</span></>}
        description={<>Grote bedrijven gebruiken AI-chatbots om miljoenen klantvragen te automatiseren. Voor een kleine ondernemer lijkt dat onbereikbaar — maar met de juiste tools als <strong className="text-slate-800">OpenAI GPT, Next.js en moderne AI</strong> bouwen wij hetzelfde, betaalbaar.</>}
        flowDiagram={{
          sourceLabel: 'Deze AI-techniek wordt bijvoorbeeld gebruikt door:',
          sources: [
            { icon: Building2, label: 'Banken', color: 'text-primary-blue' },
            { icon: MessageCircle, label: 'Telecom', color: 'text-primary-emerald' },
            { icon: Brain, label: 'Zorgverzekeraars', color: 'text-primary-violet' },
            { icon: Bot, label: 'Grote retailers', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde basis-AI',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Clock, text: '24/7 bereikbaar, ook ’s nachts en in het weekend' },
          { icon: ShieldCheck, text: 'AVG-proof met data in Europa' },
          { icon: Link2, text: 'Koppelt met uw bestaande systemen' },
          { icon: Brain, text: 'Getraind op uw bedrijf, spreekt uw taal' },
        ]}
        ctaLabel="Start Uw Chatbot"
        ctaHref="/gratis-advies"
      />

      <PrijsSection
        sectionNumber="/ 05"
        eyebrow="Investering op maat"
        price={priceInfo.price}
        priceDescription={priceInfo.description}
        ctaLabel="Vraag Offerte Aan"
        ctaHref="/gratis-advies"
        ctaSubtext="Gratis demo-versie binnen 24 uur — geheel vrijblijvend."
        riskReversal={['Gratis demo-versie', 'Niet tevreden = geen kosten']}
        scarcity="Beperkt aantal projecten per maand"
        confidenceTitle={<>Eén vaste offerte. <span className="text-slate-400 font-normal">AI-credits pay-as-you-go.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Geen vaste licentie. U betaalt voor wat uw bot gebruikt."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="violet" />

      <FinalCTA
        title={<>Uw klanten vragen 24/7. <br /><span className="text-gradient">Bent u ook beschikbaar?</span></>}
        ctaLabel="Vraag Gratis Demo Aan"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
