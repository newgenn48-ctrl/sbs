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
  SiNextdotjs, SiReact, SiTailwindcss, SiStripe, SiTypescript, SiVercel,
  SiShopify, SiWoocommerce,
} from 'react-icons/si'
import { HiPlus } from 'react-icons/hi'
import {
  ShoppingCart, CreditCard, Building2, Store, Briefcase,
  TrendingUp, Zap, ShieldCheck, Rocket,
} from 'lucide-react'

import {
  heroTags, whyChooseUs, targetAudience, includedChecklist,
  processSteps, priceInfo, confidencePoints, faqs,
} from '@/lib/data/webshop'

// ============================================================================
// TECH STACK (headless commerce)
// ============================================================================
const techStack = [
  { icon: SiShopify, name: 'Shopify' },
  { icon: SiWoocommerce, name: 'WooCommerce' },
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiReact, name: 'React' },
  { icon: SiStripe, name: 'Stripe' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiVercel, name: 'Vercel' },
  { icon: HiPlus, name: 'En nog veel meer' },
]

// ============================================================================
// HERO VISUAL — 3D abstracte gradient-cards met iconen (geen producten/prijzen)
// ============================================================================
function AbstractCard({
  gradient,
  icon: Icon,
  size = 'md',
}: {
  gradient: string
  icon: typeof ShoppingCart
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizeMap = {
    sm: 'w-[140px] h-[140px] sm:w-[160px] sm:h-[160px]',
    md: 'w-[180px] h-[180px] sm:w-[210px] sm:h-[210px] lg:w-[230px] lg:h-[230px]',
    lg: 'w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[260px] lg:h-[260px]',
  }
  const iconSizeMap = {
    sm: 'w-10 h-10',
    md: 'w-14 h-14 sm:w-16 sm:h-16',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
  }

  return (
    <div className={`${sizeMap[size]} rounded-3xl bg-gradient-to-br ${gradient} relative overflow-hidden shadow-[0_30px_70px_-20px_rgba(15,23,42,0.35),0_15px_40px_-15px_rgba(16,185,129,0.25)] border border-white/10`}>
      <div className="absolute inset-0 bg-dot-pattern opacity-25" />
      <div className="absolute top-0 right-0 w-2/3 h-2/3 rounded-full blur-2xl bg-white/15" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 rounded-full blur-xl bg-black/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <Icon className={`${iconSizeMap[size]} text-white/85`} strokeWidth={1.5} />
      </div>
    </div>
  )
}

function ProductShowcase3D() {
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
      {/* Ambient glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] h-[60%] rounded-full blur-[100px] bg-gradient-to-br from-primary-emerald/20 via-primary-blue/15 to-primary-violet/10" />
      </div>

      {/* 3D stage — 3 abstract gradient-cards */}
      <m.div
        className="relative mobile-flat-3d"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        {/* Card 1 — links-achter, ShoppingCart */}
        <m.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: 'rotateY(18deg) rotateX(-6deg) translateZ(-60px) translateX(-140px) translateY(-30px)',
            transformStyle: 'preserve-3d',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mobile-flat-3d hidden sm:block"
        >
          <AbstractCard
            gradient="from-primary-blue/60 to-primary-violet/50"
            icon={ShoppingCart}
            size="sm"
          />
        </m.div>

        {/* Card 2 — midden, CreditCard (groter, focus) */}
        <m.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          style={{
            transform: 'rotateY(-4deg) rotateX(2deg) translateZ(40px)',
            transformStyle: 'preserve-3d',
          }}
          className="relative z-10 mobile-flat-3d"
        >
          <AbstractCard
            gradient="from-primary-emerald/60 to-primary-blue/55"
            icon={CreditCard}
            size="lg"
          />
        </m.div>

        {/* Card 3 — rechts-voor, TrendingUp */}
        <m.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
          style={{
            transform: 'rotateY(-22deg) rotateX(4deg) translateZ(90px) translateX(150px) translateY(40px)',
            transformStyle: 'preserve-3d',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mobile-flat-3d hidden sm:block"
        >
          <AbstractCard
            gradient="from-primary-violet/60 to-primary-warm/50"
            icon={TrendingUp}
            size="sm"
          />
        </m.div>
      </m.div>

      {/* Floating badges rondom */}
      <m.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden sm:flex absolute top-[10%] left-[3%] lg:left-[5%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <div className="relative">
          <div className="w-2 h-2 rounded-full bg-primary-emerald" />
          <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary-emerald animate-ping" />
        </div>
        <span className="text-xs font-mono text-slate-700">Afrekenen</span>
        <span className="text-xs font-mono font-bold text-primary-emerald">0.8s</span>
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="hidden sm:flex absolute top-[15%] right-[3%] lg:right-[5%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-primary-blue" />
        <span className="text-xs font-mono text-slate-700">PCI-veilig</span>
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-[18%] left-[4%] lg:left-[8%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <CreditCard className="w-3.5 h-3.5 text-primary-violet" />
        <span className="text-xs font-mono text-slate-700">iDEAL · PayPal</span>
      </m.div>

      <m.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-[22%] right-[4%] lg:right-[8%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <TrendingUp className="w-3.5 h-3.5 text-primary-warm" />
        <span className="text-xs font-mono text-slate-700">Conversie</span>
        <span className="text-xs font-mono font-bold text-primary-emerald">+38%</span>
      </m.div>

      {/* Mobile-only: compact badge onderaan */}
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
        <span className="text-[11px] font-mono">Laadtijd 0.8s</span>
      </m.div>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function EcommercePageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      {/* HERO */}
      <HeroSection
        eyebrow="E-commerce & Online Verkopen"
        title={<>Webshop Laten Maken{' '}<span className="text-gradient">Die Verkoopt.</span></>}
        subtitle="Razendsnelle webshops met moderne techniek. Uw producten online, perfect vindbaar, simpel te beheren."
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=webshop"
        tags={heroTags}
        visual={<ProductShowcase3D />}
      />

      {/* TECH STACK */}
      <TechStackBar items={techStack} />

      {/* BELOFTES */}
      <BeloftesStatsBar stats={whyChooseUs} />

      {/* 01 · VOOR WIE */}
      <VoorWieSection
        sectionNumber="/ 01"
        eyebrow="Voor Wie"
        title={<>Van kleine maker<br />tot grote retailer —<br /><span className="text-gradient">winkels die serieus online willen.</span></>}
        description="Wij bouwen webshops voor iedereen die meer wil dan een basic catalogus. Van eerste product tot duizenden artikelen."
        stickyStat={{ label: 'Focus', value: 'MKB & ZZP' }}
        audiences={targetAudience}
        disclaimer="Verkoopt u iets anders? Geen probleem — wij bouwen voor élke online verkoper."
      />

      {/* 02 · CHECKLIST */}
      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Alles wat u nodig heeft<br /><span className="text-gradient">om te verkopen.</span></>}
        description={'Alle 30+ punten hieronder zitten standaard in de prijs. Geen verborgen kosten, geen "oh dat is een extra pakket". Wat u ziet, krijgt u.'}
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Wij geloven dat een webshop niet afhankelijk moet zijn van dure plug-ins. Wat u écht nodig heeft, krijgt u gewoon.',
        }}
      />

      {/* 03 · PROCES */}
      <ProcesSection
        sectionNumber="/ 03"
        eyebrow="Ons Proces"
        title={<>Binnen 2-4 weken <span className="text-gradient">online.</span></>}
        steps={processSteps}
      />

      {/* 04 · MISSIE */}
      <MissieSection
        sectionNumber="/ 04"
        eyebrow="Onze missie"
        title={<>Enterprise-webshops,<br /><span className="text-gradient">voor elke ondernemer.</span></>}
        description={<>Grote online retailers gebruiken moderne headless-tech als <strong className="text-slate-800">Next.js, React en Stripe</strong> — snel, veilig, schaalbaar. Een kleine ondernemer verdient exact dezelfde kwaliteit, zonder enterprise-prijs.</>}
        flowDiagram={{
          sourceLabel: 'Deze techniek wordt bijvoorbeeld gebruikt door:',
          sources: [
            { icon: Store, label: 'Grote retailers', color: 'text-primary-blue' },
            { icon: ShoppingCart, label: 'Online merken', color: 'text-primary-emerald' },
            { icon: TrendingUp, label: 'Schaalbare shops', color: 'text-primary-violet' },
            { icon: Briefcase, label: 'B2B platforms', color: 'text-primary-warm' },
          ],
          connectorLabel: 'Dezelfde basis-techniek',
          targetLabel: 'Wij maken hem beschikbaar voor:',
          targets: [
            { icon: Briefcase, label: "ZZP'er", gradient: 'from-primary-violet to-primary-blue' },
            { icon: Building2, label: 'MKB', gradient: 'from-primary-blue to-primary-emerald' },
          ],
        }}
        features={[
          { icon: Zap, text: 'Razendsnelle afrekenflow, meer verkopen per bezoeker' },
          { icon: ShieldCheck, text: 'Veilig betalen volgens PCI-standaarden' },
          { icon: Rocket, text: 'Klaar voor groei — van 10 tot 10.000 producten' },
          { icon: CreditCard, text: 'Alle gangbare betaalmethoden en koppelingen' },
        ]}
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=webshop"
      />

      {/* 05 · PRIJS */}
      <PrijsSection
        sectionNumber="/ 05"
        price={priceInfo.price}
        priceDescription={priceInfo.description}
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=webshop"
        ctaSubtext="Eerste ontwerp binnen 24 uur — geheel vrijblijvend."
        riskReversal={['Eerste ontwerp gratis', 'Niet tevreden = geen kosten']}
        scarcity="Beperkt aantal projecten per maand"
        confidenceTitle={<>Wat u betaalt, krijgt u. <span className="text-slate-400 font-normal">Geen meer, geen minder.</span></>}
        confidencePoints={confidencePoints}
        confidenceQuote="Wat we afspreken, betaalt u. Niks meer."
      />

      {/* 06 · FAQ */}
      <FAQSection sectionNumber="/ 06" faqs={faqs} color="violet" />

      {/* 07 · CONTACT */}

      {/* FINAL CTA */}

      <FinalCTA
        title={<>Uw concurrenten verkopen al online.<br /><span className="text-gradient">Waar bent u?</span></>}
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=webshop"
      />
    </div>
  )
}
