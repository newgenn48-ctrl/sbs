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
  SiInstagram, SiFacebook, SiTiktok,
  SiYoutube, SiPinterest, SiCanva, SiMeta,
} from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import {
  Heart, MessageCircle, TrendingUp, BarChart3, Building2, Briefcase,
  Camera, Video, ArrowUp, Bookmark,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/social-media'

const techStack = [
  { icon: SiInstagram, name: 'Instagram' },
  { icon: SiFacebook, name: 'Facebook' },
  { icon: FaLinkedin, name: 'LinkedIn' },
  { icon: SiTiktok, name: 'TikTok' },
  { icon: SiYoutube, name: 'YouTube' },
  { icon: SiPinterest, name: 'Pinterest' },
  { icon: SiMeta, name: 'Meta Business' },
  { icon: SiCanva, name: 'Canva' },
]

// ============================================================================
// HERO VISUAL — Social feed mockup
// ============================================================================
function SocialMockup() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-violet/20 via-primary-warm/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-violet/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-violet to-primary-warm flex items-center justify-center shadow-lg shadow-primary-violet/30">
            <Camera className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Social Dashboard</div>
            <div className="flex items-center gap-1.5">
              <div className="relative">
                <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
                <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
              </div>
              <span className="text-[11px] text-slate-500">4 platforms actief</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-[10px] font-mono text-primary-emerald bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
            <ArrowUp className="w-3 h-3" />
            +12%
          </div>
        </div>

        <div className="p-4 space-y-3">
          {/* Post preview */}
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="rounded-xl bg-gradient-to-br from-primary-violet/15 to-primary-warm/10 border border-primary-violet/20 overflow-hidden"
          >
            {/* Post image area */}
            <div className="aspect-[16/9] bg-gradient-to-br from-primary-violet/50 via-primary-warm/40 to-primary-emerald/30 relative">
              <div className="absolute inset-0 bg-dot-pattern opacity-20" />
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm border border-white/20" />
                <div className="space-y-0.5">
                  <div className="h-1.5 w-16 rounded-full bg-white/40" />
                  <div className="h-1 w-10 rounded-full bg-white/25" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-full bg-white/15 backdrop-blur-sm text-[9px] font-bold text-white tracking-wider">
                REEL
              </div>
            </div>
            {/* Post metadata */}
            <div className="p-3 space-y-2">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-primary-warm" />
                  <span className="text-xs text-white font-semibold">1.2K</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MessageCircle className="w-3.5 h-3.5 text-primary-blue" />
                  <span className="text-xs text-white font-semibold">84</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Bookmark className="w-3.5 h-3.5 text-primary-emerald" />
                  <span className="text-xs text-white font-semibold">47</span>
                </div>
              </div>
              <div className="space-y-1">
                <div className="h-1.5 w-full rounded-full bg-white/20" />
                <div className="h-1.5 w-3/4 rounded-full bg-white/15" />
              </div>
            </div>
          </m.div>

          {/* Platforms grid */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { icon: SiInstagram, color: 'text-pink-400', count: '8.2K' },
              { icon: SiFacebook, color: 'text-blue-400', count: '3.1K' },
              { icon: FaLinkedin, color: 'text-cyan-400', count: '2.4K' },
              { icon: SiTiktok, color: 'text-white', count: '15K' },
            ].map((platform, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="p-2.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center"
              >
                <platform.icon className={`w-4 h-4 ${platform.color} mx-auto mb-1`} />
                <div className="text-[10px] font-bold text-white">{platform.count}</div>
              </m.div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5 text-primary-emerald" />
            <span className="text-xs text-slate-400">Engagement</span>
            <span className="text-xs font-bold text-primary-emerald">+38%</span>
          </div>
          <span className="text-xs text-slate-600 font-mono">3 posts deze week</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function SocialMediaClientPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Social Media Marketing"
        title={<>Social Media{' '}<span className="text-gradient">Die Volgers Tot Klanten Maakt.</span></>}
        subtitle="Consistent posten, echte engagement, groeiende community. Wij doen het werk, u focust op uw bedrijf."
        ctaLabel="Plan Gratis Kennismaking"
        ctaHref="/gratis-advies"
        tags={heroTags}
        visual={<SocialMockup />}
      />

      <TechStackBar items={techStack} label="Wij werken op" />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven die<br />zichtbaar willen blijven,<br /><span className="text-gradient">zonder zelf te posten.</span></>}
        description="Wij beheren social voor ondernemers die weten dat het belangrijk is, maar geen tijd (of geen zin) hebben om elke week content te maken."
        stickyStat={{ label: 'Platforms', value: 'Insta · FB · LinkedIn · TikTok' }}
        audiences={targetAudience}
        disclaimer="Andere branche? Elke merk heeft een verhaal dat het vertellen waard is."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Volledige content-machine,<br /><span className="text-gradient">zonder uw tijd te kosten.</span></>}
        description="Alle 30+ punten hieronder zitten standaard in het maandabonnement. Strategie, creatie, publicatie, community — alles inbegrepen."
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Social media zonder plan is uren verspillen. Met plan en consistentie wordt het uw belangrijkste marketing-kanaal.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van eerste gesprek naar <span className="text-gradient">groeiende community.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise-content,<br /><span className="text-gradient">voor elke ondernemer.</span></>}
        description={<>Grote merken hebben hele teams voor <strong className="text-slate-800">content-strategie, productie en community-management</strong>. Voor MKB is dat onbereikbaar — wij brengen dezelfde kwaliteit en consistentie als een toegankelijk maandabonnement.</>}
        flowDiagram={{
          sourceLabel: 'Deze aanpak wordt bijvoorbeeld gebruikt door:',
          sources: [
            { icon: Building2, label: 'Grote merken', color: 'text-primary-blue' },
            { icon: Camera, label: 'Influencer-bureaus', color: 'text-primary-emerald' },
            { icon: Video, label: 'Media-kanalen', color: 'text-primary-violet' },
            { icon: BarChart3, label: 'E-commerce giganten', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde contentstrategie',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Camera, text: 'Professionele content die bij uw merk past' },
          { icon: MessageCircle, text: 'Community-management — u mist geen DM' },
          { icon: TrendingUp, text: 'Maandelijks rapport met duidelijke KPI’s' },
          { icon: Heart, text: 'Echte engagement, geen fake-volgers' },
        ]}
        ctaLabel="Start Uw Social"
        ctaHref="/gratis-advies"
      />

      <PrijsSection
        sectionNumber="/ 05"
        eyebrow="Investering"
        price={priceInfo.price}
        priceDescription={priceInfo.description}
        ctaLabel="Gratis Kennismaking"
        ctaHref="/gratis-advies"
        ctaSubtext="Content-strategie binnen 1 week — geheel vrijblijvend."
        riskReversal={['Gratis intakegesprek', 'Maandelijks opzegbaar']}
        scarcity="Beperkte capaciteit voor nieuwe klanten per maand"
        confidenceTitle={<>Vanaf €495 per maand. <span className="text-slate-400 font-normal">Alles inbegrepen.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="U blijft eigenaar van uw accounts, content en volgers. Altijd."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="violet" />

      <FinalCTA
        title={<>Uw concurrenten posten elke week.<br /><span className="text-gradient">Wordt u nog gezien?</span></>}
        ctaLabel="Plan Gratis Kennismaking"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
