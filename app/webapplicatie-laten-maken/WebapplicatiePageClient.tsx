'use client'

import { m, animate, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
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
  SiNextdotjs, SiReact, SiTailwindcss, SiPostgresql, SiTypescript, SiVercel,
} from 'react-icons/si'
import {
  LayoutDashboard, Database, Cpu, Building2, Briefcase,
  Zap, ShieldCheck, Rocket, BarChart3, Link2,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/webapp'

// ============================================================================
// TECH STACK — modern web-app stack
// ============================================================================
const techStack = [
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiVercel, name: 'Vercel' },
]

// ============================================================================
// HERO VISUAL — 3D abstract dashboard-panels met mouse-parallax
// ============================================================================
function AbstractPanel({
  gradient,
  icon: Icon,
  size = 'md',
}: {
  gradient: string
  icon: typeof LayoutDashboard
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeMap = {
    sm: 'w-[150px] h-[110px] sm:w-[170px] sm:h-[125px]',
    md: 'w-[200px] h-[150px] sm:w-[240px] sm:h-[180px] lg:w-[280px] lg:h-[210px]',
    lg: 'w-[220px] h-[165px] sm:w-[260px] sm:h-[195px] lg:w-[300px] lg:h-[225px]',
  }
  const iconSizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12 sm:w-14 sm:h-14',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  }

  return (
    <div className={`${sizeMap[size]} rounded-2xl bg-gradient-to-br ${gradient} relative overflow-hidden shadow-[0_30px_70px_-20px_rgba(15,23,42,0.4),0_15px_40px_-15px_rgba(37,99,235,0.25)] border border-white/10`}>
      <div className="absolute inset-0 bg-dot-pattern opacity-25" />
      <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-full blur-2xl bg-white/15" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full blur-xl bg-black/10" />

      {/* Abstracte dashboard-lijnen bovenin */}
      <div className="absolute top-3 left-3 right-3 flex items-center gap-1.5">
        <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/30" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="ml-auto h-1 w-8 rounded-full bg-white/20" />
      </div>

      {/* Centraal icoon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className={`${iconSizeMap[size]} text-white/85`} strokeWidth={1.5} />
      </div>

      {/* Abstracte "data-rijen" onderin */}
      <div className="absolute bottom-3 left-3 right-3 space-y-1">
        <div className="h-1 w-full rounded-full bg-white/15" />
        <div className="h-1 w-3/4 rounded-full bg-white/12" />
      </div>
    </div>
  )
}

function WebappShowcase3D() {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })
  const rotateY = useTransform(springX, [-400, 400], [-10, 10])
  const rotateX = useTransform(springY, [-300, 300], [5, -5])

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        if (!ref.current) return
        const r = ref.current.getBoundingClientRect()
        mouseX.set(e.clientX - r.left - r.width / 2)
        mouseY.set(e.clientY - r.top - r.height / 2)
      }}
      onMouseLeave={() => {
        animate(mouseX, 0, { duration: 1.2 })
        animate(mouseY, 0, { duration: 1.2 })
      }}
      className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] flex items-center justify-center"
      style={{ perspective: '2000px' }}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] h-[60%] rounded-full blur-[100px] bg-gradient-to-br from-primary-blue/20 via-primary-violet/15 to-primary-emerald/10" />
      </div>

      <m.div
        className="relative mobile-flat-3d"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        {/* Panel 1 — links-achter, Database */}
        <m.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: 'rotateY(20deg) rotateX(-6deg) translateZ(-70px) translateX(-150px) translateY(-20px)',
            transformStyle: 'preserve-3d',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mobile-flat-3d hidden sm:block"
        >
          <AbstractPanel
            gradient="from-primary-violet/60 to-primary-blue/55"
            icon={Database}
            size="sm"
          />
        </m.div>

        {/* Panel 2 — midden, LayoutDashboard (grootste) */}
        <m.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          style={{
            transform: 'rotateY(-4deg) rotateX(2deg) translateZ(40px)',
            transformStyle: 'preserve-3d',
          }}
          className="relative z-10 mobile-flat-3d"
        >
          <AbstractPanel
            gradient="from-primary-blue/60 to-primary-violet/55"
            icon={LayoutDashboard}
            size="lg"
          />
        </m.div>

        {/* Panel 3 — rechts-voor, Cpu */}
        <m.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          style={{
            transform: 'rotateY(-22deg) rotateX(4deg) translateZ(90px) translateX(160px) translateY(40px)',
            transformStyle: 'preserve-3d',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mobile-flat-3d hidden sm:block"
        >
          <AbstractPanel
            gradient="from-primary-emerald/60 to-primary-blue/50"
            icon={Cpu}
            size="sm"
          />
        </m.div>
      </m.div>

      {/* Floating badges — desktop */}
      <m.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden sm:flex absolute top-[10%] left-[3%] lg:left-[5%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-primary-blue" />
        <span className="text-xs font-mono text-slate-700">AVG-proof</span>
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="hidden sm:flex absolute top-[15%] right-[3%] lg:right-[5%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <div className="relative">
          <div className="w-2 h-2 rounded-full bg-primary-emerald" />
          <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary-emerald animate-ping" />
        </div>
        <span className="text-xs font-mono text-slate-700">Hoge beschikbaarheid</span>
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-[18%] left-[4%] lg:left-[8%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <Link2 className="w-3.5 h-3.5 text-primary-violet" />
        <span className="text-xs font-mono text-slate-700">API-koppelingen</span>
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-[22%] right-[4%] lg:right-[8%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <BarChart3 className="w-3.5 h-3.5 text-primary-warm" />
        <span className="text-xs font-mono text-slate-700">Uren bespaard</span>
        <span className="text-xs font-mono font-bold text-primary-emerald">10u/wk</span>
      </m.div>

      {/* Mobile-only */}
      <m.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex sm:hidden absolute bottom-4 left-1/2 -translate-x-1/2 items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1121] text-white shadow-[0_8px_20px_-8px_rgba(15,23,42,0.3)]"
      >
        <div className="relative">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
          <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
        </div>
        <span className="text-[11px] font-mono">AVG-proof · Hoge beschikbaarheid</span>
      </m.div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function WebapplicatiePageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="Webapplicaties & Platforms"
        title={<>Webapplicatie Laten Maken{' '}<span className="text-gradient">Die Werk Uit Handen Neemt.</span></>}
        subtitle="Maatwerk-applicaties die uw processen automatiseren. Van CRM tot klantportaal, van dashboard tot planningstool."
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=webapplicatie"
        tags={heroTags}
        visual={<WebappShowcase3D />}
      />

      <TechStackBar items={techStack} />

      <BeloftesStatsBar stats={whyChooseUs} />

      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Bedrijven die<br />hun proces willen<br /><span className="text-gradient">automatiseren.</span></>}
        description="Wij bouwen webapplicaties voor iedereen die met Excel, mail en papier werkt en het slimmer wil aanpakken."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Ander type bedrijf? Geen probleem — elk proces kan geautomatiseerd worden."
      />

      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Alles wat uw applicatie<br /><span className="text-gradient">serieus werkbaar maakt.</span></>}
        description={'Alle 30+ punten hieronder zitten standaard in de prijs. Geen verborgen kosten, geen losse pakketten. Wat u ziet, krijgt u.'}
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Wij bouwen applicaties die werken voor mensen, niet tegen hen. Alles wat uw team echt nodig heeft, zit erin.',
        }}
      />

      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Van idee naar werkende applicatie <span className="text-gradient">in sprints.</span></>}
        steps={processSteps}
      />

      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise-applicaties,<br /><span className="text-gradient">voor elke ondernemer.</span></>}
        description={<>Grote organisaties gebruiken moderne tech als <strong className="text-slate-800">Next.js, React en PostgreSQL</strong> voor hun interne systemen — snel, veilig, schaalbaar. Een MKB'er verdient exact dezelfde kwaliteit, zonder enterprise-prijs.</>}
        flowDiagram={{
          sourceLabel: 'Deze techniek wordt bijvoorbeeld gebruikt door:',
          sources: [
            { icon: Building2, label: 'Gemeenten', color: 'text-primary-blue' },
            { icon: Database, label: 'Banken', color: 'text-primary-emerald' },
            { icon: BarChart3, label: 'Zorginstellingen', color: 'text-primary-violet' },
            { icon: Cpu, label: 'Tech-scaleups', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde basis-techniek',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Zap, text: 'Razendsnelle interface, uren besparen per week' },
          { icon: ShieldCheck, text: 'AVG-compliant met verwerkersovereenkomst' },
          { icon: Link2, text: 'Koppelingen met uw bestaande software' },
          { icon: Rocket, text: 'Klaar voor groei — 10 of 10.000 gebruikers' },
        ]}
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=webapplicatie"
      />

      <PrijsSection
        sectionNumber="/ 05"
        eyebrow="Investering op maat"
        price={priceInfo.price}
        priceDescription={priceInfo.description}
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=webapplicatie"
        ctaSubtext="Gratis intakegesprek + eerste ontwerp binnen 24 uur — geheel vrijblijvend."
        riskReversal={['Gratis intake & ontwerp', 'Niet tevreden = geen kosten']}
        scarcity="Beperkt aantal projecten per maand"
        confidenceTitle={<>Eén vaste offerte. <span className="text-slate-400 font-normal">Geen uurtje-factuurtje.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Wat we afspreken, betaalt u. Niks meer."
      />

      <FAQSection sectionNumber="/ 06" faqs={faqs} color="violet" />

      <FinalCTA
        title={<>Uw concurrenten hebben hun proces al geautomatiseerd.<br /><span className="text-gradient">U ook?</span></>}
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=webapplicatie"
      />
    </div>
  )
}
