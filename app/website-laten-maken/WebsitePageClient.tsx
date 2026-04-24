'use client'

import { m, animate, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useReducedAmbient } from '@/lib/useMobile'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import BeloftesStatsBar from '@/components/sections/landing/BeloftesStatsBar'
import ChecklistSection from '@/components/sections/landing/ChecklistSection'
import FAQSection from '@/components/sections/landing/FAQSection'
import FinalCTA from '@/components/sections/landing/FinalCTA'
import TechStackBar from '@/components/sections/landing/TechStackBar'
import {
  CheckCircle2, ArrowRight, Palette, Users,
  Building2, Briefcase, Store, Scale, Stethoscope, HardHat,
  Zap, Search, ShieldCheck, Rocket, Headphones, Code2,
  GraduationCap,
} from 'lucide-react'
import {
  SiNextdotjs, SiReact, SiTailwindcss, SiVercel, SiTypescript, SiNodedotjs,
} from 'react-icons/si'

const techStack = [
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiReact, name: 'React' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiVercel, name: 'Vercel' },
  { icon: SiNodedotjs, name: 'Node.js' },
]
import Link from 'next/link'
import { useRef } from 'react'
import { priceInfo, whyChooseUs, processSteps, faqs } from '@/lib/data/website'

const missionFeatures = [
  { icon: Building2, text: 'Zelfde basis-techniek als grote Nederlandse organisaties' },
  { icon: Zap, text: 'Snelheid die oude WordPress-sites niet halen' },
  { icon: ShieldCheck, text: 'Veilig zonder plugin-updates of risico’s' },
  { icon: Rocket, text: 'Toekomstbestendig voor de komende jaren' },
]
const heroTags = ['Gevonden worden in Google', 'Binnen 2 weken online', 'Eerste ontwerp gratis']


const targetAudience = [
  { icon: Building2, title: 'MKB', description: 'Groeibedrijven met 10-50 medewerkers die meer leads willen genereren.' },
  { icon: Briefcase, title: 'ZZP & Freelancer', description: 'Zelfstandigen die zakelijk en betrouwbaar willen overkomen.' },
  { icon: Store, title: 'Horeca & Retail', description: 'Winkels, restaurants en lokale bedrijven die gevonden willen worden.' },
  { icon: Scale, title: 'Advocatuur & Advies', description: 'Advocaten, consultants en zakelijke dienstverleners.' },
  { icon: Stethoscope, title: 'Zorg & Praktijk', description: 'Fysiotherapeuten, tandartsen, coaches en therapeuten.' },
  { icon: HardHat, title: 'Bouw & Installatie', description: 'Aannemers, installateurs, hoveniers en vakspecialisten.' },
]

const includedChecklist = [
  {
    icon: Palette,
    category: 'Design & gebruiksgemak',
    color: 'from-primary-blue/10 to-primary-blue/5',
    iconColor: 'text-primary-blue',
    items: [
      'Uniek ontwerp, geen kant-en-klaar sjabloon',
      'Werkt perfect op telefoon, tablet en computer',
      'Leesbaar voor iedereen (ook slechtzienden)',
      'Rustige, professionele letters',
      'Soepele animaties die premium aanvoelen',
    ],
  },
  {
    icon: Zap,
    category: 'Snelheid',
    color: 'from-primary-warm/10 to-primary-warm/5',
    iconColor: 'text-primary-warm',
    items: [
      'Gebouwd met de nieuwste techniek',
      'Topscore in Google’s snelheidstest',
      'Afbeeldingen laden razendsnel',
      'Laadt alleen wat u op dat moment ziet',
      'Volledig zichtbaar in minder dan 2 seconden',
    ],
  },
  {
    icon: Search,
    category: 'Vindbaar in Google',
    color: 'from-primary-emerald/10 to-primary-emerald/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Elke pagina wordt door Google opgepikt',
      'Uw bedrijf verschijnt netjes in zoekresultaten',
      'Mooie preview bij delen op Facebook of LinkedIn',
      'Bezoekersstatistieken om te zien wie er komt',
      'Koppeling met Google voor live inzichten',
    ],
  },
  {
    icon: ShieldCheck,
    category: 'Veiligheid & bescherming',
    color: 'from-primary-violet/10 to-primary-violet/5',
    iconColor: 'text-primary-violet',
    items: [
      'Beveiligde verbinding (het slotje in de browser)',
      'Extra bescherming tegen hackers',
      'Privacy-melding volgens de wet (AVG)',
      'Juridische pagina’s kant-en-klaar',
      'Elke dag automatisch een reservekopie',
    ],
  },
  {
    icon: Rocket,
    category: 'Online zetten',
    color: 'from-primary-blue/10 to-primary-violet/5',
    iconColor: 'text-primary-blue',
    items: [
      'Hosting op Nederlandse servers',
      'Grondig getest voor de lancering',
      'Launch-checklist samen doorgelopen',
      'U leert zelf teksten en foto’s aanpassen',
      'Uw bedrijf vindbaar op Google Maps',
    ],
  },
  {
    icon: Headphones,
    category: 'Eerste 2 maanden gratis',
    color: 'from-primary-emerald/10 to-primary-blue/5',
    iconColor: 'text-primary-emerald',
    items: [
      'Support via e-mail, telefoon of WhatsApp',
      'Antwoord binnen 24 uur op uw vraag',
      'Vaste contactpersoon, geen callcenter',
      'Updates en kleine aanpassingen inbegrepen',
      'Performance-controle halverwege de periode',
    ],
  },
]

/* ============================================
   3D Responsive Showcase — pure CSS, mouse parallax
   ============================================ */

function DesktopMockup() {
  return (
    <div className="w-[280px] sm:w-[340px] md:w-[400px] lg:w-[500px] rounded-xl bg-gradient-to-b from-slate-800 to-slate-900 p-1.5 sm:p-2 shadow-[0_40px_100px_-20px_rgba(15,23,42,0.4),0_20px_50px_-15px_rgba(37,99,235,0.25)]">
      <div className="bg-[#FAFAF5] rounded-md overflow-hidden">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-100 border-b border-slate-200/60">
          <div className="w-2 h-2 rounded-full bg-[#ff5f57]" />
          <div className="w-2 h-2 rounded-full bg-[#febc2e]" />
          <div className="w-2 h-2 rounded-full bg-[#28c840]" />
          <div className="flex-1 ml-3 h-4 rounded bg-white border border-slate-200/60 flex items-center px-2 gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
            <div className="h-1 w-20 rounded-full bg-slate-300" />
            <div className="ml-auto w-2 h-2 rounded-sm bg-slate-200" />
          </div>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded bg-slate-200" />
            <div className="w-3 h-3 rounded bg-slate-200" />
          </div>
        </div>

        {/* Content */}
        <div className="h-[230px] sm:h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
          {/* Top nav */}
          <div className="flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-slate-200/40">
            <div className="flex items-center gap-1.5">
              <div className="w-3.5 h-3.5 rounded-md bg-gradient-to-br from-primary-blue to-primary-violet" />
              <div className="h-2 w-14 rounded bg-slate-900" />
            </div>
            <div className="flex gap-2.5">
              {[0, 1, 2, 3].map(i => (
                <div key={i} className={`h-1.5 rounded ${i === 1 ? 'w-6 bg-primary-blue' : 'w-6 bg-slate-300'}`} />
              ))}
              <div className="ml-2 h-5 w-14 rounded-md bg-slate-900" />
            </div>
          </div>

          {/* Hero */}
          <div className="px-3 sm:px-4 pt-3 pb-2.5">
            <div className="relative rounded-lg bg-gradient-to-br from-primary-blue/10 via-primary-violet/8 to-primary-emerald/6 p-3 sm:p-4 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-2xl bg-primary-violet/25" />
              <div className="absolute bottom-0 left-0 w-16 h-16 rounded-full blur-xl bg-primary-blue/20" />
              <div className="relative">
                <div className="inline-flex items-center gap-1 mb-2 px-2 py-0.5 rounded-full bg-white/80 border border-slate-200/60">
                  <div className="w-1 h-1 rounded-full bg-primary-emerald" />
                  <div className="h-1 w-10 rounded bg-slate-600" />
                </div>
                <div className="h-2.5 w-full rounded-full bg-slate-900 mb-1.5" />
                <div className="h-2.5 w-2/3 rounded-full bg-gradient-to-r from-primary-blue to-primary-violet mb-3" />
                <div className="h-1.5 w-full rounded-full bg-slate-400/60 mb-1" />
                <div className="h-1.5 w-5/6 rounded-full bg-slate-400/60 mb-3" />
                <div className="flex gap-2">
                  <div className="h-6 w-24 rounded-md bg-slate-900 shadow-sm" />
                  <div className="h-6 w-20 rounded-md border border-slate-300 bg-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder bars — visual rhythm only, no fake metrics */}
          <div className="px-3 sm:px-4 py-2 grid grid-cols-3 gap-2 border-b border-slate-200/40">
            {[0, 1, 2].map((i) => (
              <div key={i} className="text-center">
                <div className="h-2 w-8 mx-auto rounded bg-gradient-to-r from-primary-blue to-primary-violet mb-0.5" />
                <div className="h-1 w-10 mx-auto rounded bg-slate-300" />
              </div>
            ))}
          </div>

          {/* Feature cards */}
          <div className="px-3 sm:px-4 py-2.5 grid grid-cols-3 gap-1.5 sm:gap-2">
            {[0, 1, 2].map(i => (
              <div key={i} className="p-2 rounded-md border border-slate-200/60 bg-white">
                <div className={`w-4 h-4 rounded mb-1.5 ${i === 0 ? 'bg-primary-blue/25' : i === 1 ? 'bg-primary-violet/25' : 'bg-primary-emerald/25'}`} />
                <div className="h-1 w-full rounded bg-slate-400 mb-1" />
                <div className="h-0.5 w-full rounded bg-slate-200 mb-0.5" />
                <div className="h-0.5 w-2/3 rounded bg-slate-200" />
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="mx-3 sm:mx-4 mb-3 p-2.5 rounded-md border border-slate-200/60 bg-white flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-blue/30 to-primary-violet/30 flex-shrink-0" />
            <div className="flex-1 space-y-1">
              <div className="h-1 w-full rounded bg-slate-400/60" />
              <div className="h-1 w-3/4 rounded bg-slate-300" />
            </div>
            <div className="flex gap-0.5">
              {[0,1,2,3,4].map(i => (
                <div key={i} className="w-1.5 h-1.5 rounded-sm bg-primary-warm" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function TabletMockup() {
  return (
    <div className="w-[200px] md:w-[250px] lg:w-[290px] rounded-[1.75rem] bg-gradient-to-b from-slate-800 to-slate-900 p-1.5 lg:p-2 shadow-[0_35px_80px_-20px_rgba(15,23,42,0.4),0_15px_40px_-15px_rgba(124,58,237,0.2)]">
      <div className="bg-[#FAFAF5] rounded-[1.25rem] overflow-hidden relative">
        {/* Tablet camera */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-slate-700 z-10" />

        <div className="h-[280px] md:h-[340px] lg:h-[390px] pt-5 overflow-hidden">
          {/* Nav */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200/40">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded bg-gradient-to-br from-primary-blue to-primary-violet" />
              <div className="h-1.5 w-10 rounded bg-slate-900" />
            </div>
            <div className="flex gap-1.5">
              <div className="h-1 w-3 rounded bg-slate-400" />
              <div className="h-1 w-3 rounded bg-slate-400" />
              <div className="h-1 w-3 rounded bg-slate-400" />
            </div>
          </div>

          {/* Hero */}
          <div className="px-3 pt-3 pb-2">
            <div className="relative rounded-lg bg-gradient-to-br from-primary-violet/10 via-primary-blue/8 to-primary-emerald/6 p-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-16 h-16 rounded-full blur-xl bg-primary-violet/25" />
              <div className="relative">
                <div className="h-2 w-full rounded-full bg-slate-900 mb-1" />
                <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-primary-blue to-primary-violet mb-2" />
                <div className="h-1 w-full rounded-full bg-slate-400/60 mb-0.5" />
                <div className="h-1 w-5/6 rounded-full bg-slate-400/60 mb-2.5" />
                <div className="h-5 w-20 rounded bg-slate-900" />
              </div>
            </div>
          </div>

          {/* 2-column grid */}
          <div className="px-3 pb-2 grid grid-cols-2 gap-1.5">
            {[0, 1].map(i => (
              <div key={i} className="p-2 rounded-md border border-slate-200/60 bg-white">
                <div className={`w-3.5 h-3.5 rounded mb-1 ${i === 0 ? 'bg-primary-blue/25' : 'bg-primary-violet/25'}`} />
                <div className="h-1 w-full rounded bg-slate-400 mb-0.5" />
                <div className="h-0.5 w-3/4 rounded bg-slate-200" />
                <div className="h-0.5 w-1/2 rounded bg-slate-200 mt-0.5" />
              </div>
            ))}
          </div>

          {/* List rows */}
          <div className="px-3 pb-3 space-y-1">
            {[0, 1, 2].map(i => (
              <div key={i} className="flex items-center gap-2 p-1.5 rounded border border-slate-200/60 bg-white">
                <div className={`w-3 h-3 rounded flex-shrink-0 ${i === 0 ? 'bg-primary-emerald/30' : i === 1 ? 'bg-primary-blue/30' : 'bg-primary-violet/30'}`} />
                <div className="flex-1">
                  <div className="h-1 w-3/4 rounded bg-slate-400 mb-0.5" />
                  <div className="h-0.5 w-1/2 rounded bg-slate-200" />
                </div>
                <div className="w-2 h-2 rounded bg-slate-200" />
              </div>
            ))}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  )
}

function PhoneMockup() {
  return (
    <div className="w-[160px] sm:w-[160px] md:w-[175px] lg:w-[200px] rounded-[2.5rem] sm:rounded-[2.75rem] bg-gradient-to-b from-slate-800 to-slate-900 p-1.5 shadow-[0_35px_70px_-20px_rgba(15,23,42,0.5),0_15px_35px_-10px_rgba(124,58,237,0.3)]">
      <div className="bg-[#FAFAF5] rounded-[2.25rem] overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-slate-900 rounded-b-xl z-10" />

        <div className="h-[320px] sm:h-[320px] md:h-[360px] lg:h-[400px] p-3 pt-6 space-y-2 overflow-hidden">
          {/* Top status + header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded bg-gradient-to-br from-primary-blue to-primary-violet" />
              <div className="h-1.5 w-6 rounded bg-slate-900" />
            </div>
            <div className="flex gap-0.5">
              <div className="w-1 h-2.5 rounded bg-slate-300" />
              <div className="w-1 h-2.5 rounded bg-slate-300" />
              <div className="w-1 h-2.5 rounded bg-slate-300" />
            </div>
          </div>

          {/* Hero */}
          <div className="relative rounded-lg bg-gradient-to-br from-primary-blue/10 via-primary-violet/8 to-primary-emerald/6 p-2.5 overflow-hidden">
            <div className="absolute top-0 right-0 w-10 h-10 rounded-full blur-lg bg-primary-violet/25" />
            <div className="relative">
              <div className="h-1.5 w-full rounded-full bg-slate-900 mb-1" />
              <div className="h-1.5 w-3/4 rounded-full bg-gradient-to-r from-primary-blue to-primary-violet mb-1.5" />
              <div className="h-0.5 w-full rounded-full bg-slate-400/60 mb-0.5" />
              <div className="h-0.5 w-5/6 rounded-full bg-slate-400/60 mb-2" />
              <div className="h-4 w-16 rounded bg-slate-900" />
            </div>
          </div>

          {/* Stats pills */}
          <div className="grid grid-cols-3 gap-1">
            {[0, 1, 2].map(i => (
              <div key={i} className="p-1.5 rounded-md border border-slate-200/60 bg-white text-center">
                <div className={`h-1 w-6 mx-auto rounded mb-0.5 ${i === 0 ? 'bg-primary-blue' : i === 1 ? 'bg-primary-violet' : 'bg-primary-emerald'}`} />
                <div className="h-0.5 w-full rounded bg-slate-200" />
              </div>
            ))}
          </div>

          {/* Feature rows */}
          <div className="space-y-1">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className="flex items-center gap-1.5 p-1.5 rounded-md border border-slate-200/60 bg-white">
                <div className={`w-3 h-3 rounded flex-shrink-0 ${i === 0 ? 'bg-primary-blue/25' : i === 1 ? 'bg-primary-violet/25' : i === 2 ? 'bg-primary-emerald/25' : 'bg-primary-warm/25'}`} />
                <div className="flex-1 space-y-0.5">
                  <div className="h-0.5 w-full rounded bg-slate-400" />
                  <div className="h-0.5 w-2/3 rounded bg-slate-200" />
                </div>
                <div className="w-0.5 h-2 rounded-full bg-slate-200" />
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-between pt-1 border-t border-slate-200/40">
            {[0, 1, 2, 3].map(i => (
              <div key={i} className={`w-4 h-4 rounded ${i === 0 ? 'bg-primary-blue' : 'bg-slate-300'}`} />
            ))}
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full bg-slate-300" />
        </div>
      </div>
    </div>
  )
}

function ResponsiveShowcase() {
  const reducedAmbient = useReducedAmbient()
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
      className="relative min-h-[640px] sm:min-h-[460px] md:min-h-[560px] lg:min-h-[680px] sm:h-[460px] md:h-[560px] lg:h-[680px] w-full flex items-center justify-center py-8 sm:py-0"
      style={{ perspective: '2400px' }}
    >
      {/* Ambient gradient glow achter devices */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[70%] h-[65%] rounded-full blur-[120px] bg-gradient-to-br from-primary-blue/15 via-primary-violet/10 to-primary-emerald/8" />
      </div>

      {/* Subtiele grid-pattern vloer — alleen op sm+ waar 3D perspectief logisch is */}
      <div
        className="hidden sm:block absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(37,99,235,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'linear-gradient(to top, black 0%, transparent 70%)',
          WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 70%)',
          transform: 'perspective(800px) rotateX(60deg)',
          transformOrigin: 'bottom',
        }}
      />

      {/* 3D-scène — flex-col op mobile (gestapeld), flex-row op sm+ (3D perspectief) */}
      <m.div
        className="relative flex flex-col sm:flex-row items-center justify-center gap-10 sm:gap-4 lg:gap-6 mobile-flat-3d"
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      >
        {/* Desktop — boven op mobile, links op desktop */}
        <m.div
          animate={reducedAmbient ? undefined : { y: [0, -10, 0] }}
          transition={reducedAmbient ? undefined : { duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            transform: 'rotateY(14deg) rotateX(-3deg) translateZ(-60px)',
            transformStyle: 'preserve-3d',
          }}
          className="mobile-flat-3d"
        >
          <DesktopMockup />
        </m.div>

        {/* Tablet — alleen vanaf lg zichtbaar */}
        <m.div
          animate={reducedAmbient ? undefined : { y: [0, 8, 0] }}
          transition={reducedAmbient ? undefined : { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          style={{
            transform: 'rotateY(-3deg) rotateX(1deg) translateZ(20px)',
            transformStyle: 'preserve-3d',
          }}
          className="hidden lg:block relative z-10 lg:-ml-16 lg:-mr-10"
        >
          <TabletMockup />
        </m.div>

        {/* Phone — onder op mobile, rechts op desktop */}
        <m.div
          animate={reducedAmbient ? undefined : { y: [0, -6, 0] }}
          transition={reducedAmbient ? undefined : { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.9 }}
          style={{
            transform: 'rotateY(-22deg) rotateX(2deg) translateZ(80px)',
            transformStyle: 'preserve-3d',
          }}
          className="relative z-20 mobile-flat-3d"
        >
          <PhoneMockup />
        </m.div>
      </m.div>

      {/* ============ FLOATING BADGES — 6 stuks rondom op desktop, 1 op mobile ============ */}

      {/* Mobile-only: compacte pagespeed badge onderaan */}
      <m.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex sm:hidden absolute bottom-2 left-1/2 -translate-x-1/2 items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1121] text-white shadow-[0_8px_20px_-8px_rgba(15,23,42,0.3)]"
      >
        <div className="relative">
          <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
          <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
        </div>
        <span className="text-xs font-mono">Pagespeed 100/100</span>
      </m.div>

      {/* Top-left: Pagespeed */}
      <m.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="hidden sm:flex absolute top-[10%] left-[3%] lg:left-[6%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <div className="relative">
          <div className="w-2 h-2 rounded-full bg-primary-emerald" />
          <div className="absolute inset-0 w-2 h-2 rounded-full bg-primary-emerald animate-ping" />
        </div>
        <span className="text-xs font-mono text-slate-700">Pagespeed</span>
        <span className="text-xs font-mono font-bold text-primary-emerald">100/100</span>
      </m.div>

      {/* Top-right: Maatwerk */}
      <m.div
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="hidden sm:flex absolute top-[15%] right-[3%] lg:right-[6%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <Palette className="w-3.5 h-3.5 text-primary-violet" />
        <span className="text-xs font-mono text-slate-700">100% op maat</span>
      </m.div>

      {/* Middle-left: SEO geoptimaliseerd */}
      <m.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="hidden lg:flex absolute top-[45%] left-[2%] items-center gap-2 px-3 py-2 rounded-xl bg-[#0B1121] text-white shadow-[0_10px_30px_-10px_rgba(15,23,42,0.3)]"
      >
        <Search className="w-3.5 h-3.5 text-primary-emerald" />
        <span className="text-xs font-mono">SEO geoptimaliseerd</span>
      </m.div>

      {/* Middle-right: Code snippet */}
      <m.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="hidden lg:block absolute top-[40%] right-[1%] px-3 py-2.5 rounded-xl bg-[#0d1025] border border-white/[0.08] shadow-[0_15px_40px_-15px_rgba(37,99,235,0.3)]"
      >
        <div className="flex items-center gap-1.5 mb-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff5f57]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#febc2e]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#28c840]" />
          <span className="ml-1 text-[10px] font-mono text-slate-500">breakpoints.css</span>
        </div>
        <div className="font-mono text-[10px] leading-tight space-y-0.5">
          <div><span className="text-violet-400">@media</span> <span className="text-amber-300">(min-width: 768px)</span> <span className="text-slate-500">{'{'}</span></div>
          <div className="pl-3"><span className="text-blue-400">.grid</span> <span className="text-slate-500">{'{'}</span> <span className="text-slate-300">columns:</span> <span className="text-emerald-400">3</span> <span className="text-slate-500">{'}'}</span></div>
          <div><span className="text-slate-500">{'}'}</span></div>
        </div>
      </m.div>

      {/* Bottom-left: Laadtijd */}
      <m.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-[15%] left-[4%] lg:left-[8%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <Zap className="w-3.5 h-3.5 text-primary-warm" />
        <span className="text-xs font-mono text-slate-500">Laadtijd</span>
        <span className="text-xs font-mono font-bold text-primary-blue">&lt; 2s</span>
      </m.div>

      {/* Bottom-right: Veilig (SSL) */}
      <m.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0, duration: 0.6 }}
        className="hidden sm:flex absolute bottom-[20%] right-[4%] lg:right-[8%] items-center gap-2 px-3 py-2 rounded-xl bg-[#FFFDF8]/95 backdrop-blur-sm border border-slate-200/60 shadow-[0_10px_30px_-10px_rgba(15,23,42,0.15)]"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-primary-emerald" />
        <span className="text-xs font-mono text-slate-700">Veilige verbinding</span>
      </m.div>

      {/* Bottom-center: Live rendering tag */}
      <m.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="hidden md:flex absolute bottom-[4%] left-1/2 -translate-x-1/2 items-center gap-2 px-4 py-2 rounded-full bg-[#0B1121] text-white shadow-[0_15px_40px_-15px_rgba(15,23,42,0.4)]"
      >
        <div className="flex items-center gap-1.5">
          <div className="relative">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-emerald" />
            <div className="absolute inset-0 w-1.5 h-1.5 rounded-full bg-primary-emerald animate-ping" />
          </div>
          <span className="text-xs font-mono text-slate-300">live rendering</span>
        </div>
        <span className="w-px h-3 bg-white/20" />
        <Code2 className="w-3 h-3 text-primary-blue" />
        <span className="text-xs font-mono text-slate-300">Next.js 15</span>
      </m.div>
    </div>
  )
}

export default function WebsitePageClient() {
  const reducedAmbient = useReducedAmbient()
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      {/* ================================================================
          01 · HERO
          ================================================================ */}
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center text-white noise-overlay" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-[#0B1121]" />
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 85% 0%, rgba(37, 99, 235, 0.15), transparent 60%), radial-gradient(ellipse 60% 40% at 15% 100%, rgba(124, 58, 237, 0.1), transparent 60%)',
          }}
        />
        <div className="absolute inset-0 bg-dot-pattern opacity-60" />

        <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-20 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-36">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

            <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3 font-medium">Webdesign & Development</p>

              <h1 id="hero-title" className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-display font-bold mb-5 leading-[1.1]">
                Website Laten Maken{' '}
                <m.span
                  className="block 2xl:inline text-gradient"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Die Klanten Oplevert.
                </m.span>
              </h1>

              <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-md">
                Op maat gebouwd, razend snel, vindbaar in Google. Geen templates — alleen resultaat.
              </p>

              <Button size="lg" className="bg-[#FFFDF8] text-[#0B1121] hover:bg-[#FFFCF2] font-semibold px-8 shadow-sm w-full sm:w-auto" asChild>
                <Link href="/demo?type=website">Gratis Demo Aanvragen<ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-sm">
                {heroTags.map((t) => (
                  <span key={t} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="text-slate-300 whitespace-nowrap">{t}</span>
                  </span>
                ))}
              </div>
            </m.div>

            {/* Code editor + website preview — toont dat wij échte code schrijven */}
            <m.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }} className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-primary-blue/20 via-primary-violet/20 to-primary-emerald/10 rounded-3xl blur-3xl opacity-40" />

              {/* Code editor */}
              <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/10">
                <div className="flex items-center gap-2 px-5 py-3 border-b border-white/[0.06]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  </div>
                  <div className="flex gap-1 ml-4">
                    <div className="px-3 py-1 rounded-t-md bg-white/[0.06] text-xs text-slate-400 font-mono">page.tsx</div>
                    <div className="px-3 py-1 rounded-t-md text-xs text-slate-600 font-mono">styles.css</div>
                  </div>
                </div>

                <div className="p-5 font-mono text-xs leading-[1.8] space-y-0.5">
                  {[
                    { delay: 0.8, indent: 0, content: <><span className="text-violet-400">export default</span> <span className="text-blue-400">function</span> <span className="text-emerald-400">HomePage</span><span className="text-slate-500">() {'{'}</span></> },
                    { delay: 1.2, indent: 4, content: <><span className="text-violet-400">return</span> <span className="text-slate-500">(</span></> },
                    { delay: 1.6, indent: 8, content: <><span className="text-blue-400">{'<'}</span><span className="text-emerald-400">Hero</span></> },
                    { delay: 2.0, indent: 12, content: <><span className="text-slate-500">title=</span><span className="text-amber-300">&quot;Uw Website&quot;</span></> },
                    { delay: 2.4, indent: 12, content: <><span className="text-slate-500">speed=</span><span className="text-amber-300">&quot;&lt;2s&quot;</span></> },
                    { delay: 2.8, indent: 12, content: <><span className="text-slate-500">seo=</span><span className="text-emerald-400">{'{'}</span><span className="text-violet-400">true</span><span className="text-emerald-400">{'}'}</span></> },
                    { delay: 3.2, indent: 8, content: <><span className="text-blue-400">/{'>'}</span></> },
                    { delay: 3.6, indent: 8, content: <><span className="text-blue-400">{'<'}</span><span className="text-emerald-400">Services</span> <span className="text-slate-500">/{'>'}</span></> },
                    { delay: 4.0, indent: 4, content: <><span className="text-slate-500">)</span></> },
                    { delay: 4.4, indent: 0, content: <><span className="text-slate-500">{'}'}</span></> },
                  ].map((line, i) => (
                    <m.p
                      key={i}
                      style={{ paddingLeft: `${line.indent * 4}px` }}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: line.delay }}
                      className={i === 7 ? 'typing-cursor' : ''}
                    >
                      {line.content}
                    </m.p>
                  ))}
                </div>

                {/* Mini preview balk */}
                <div className="border-t border-white/[0.06] px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs text-slate-500">Pagespeed: 100/100</span>
                  </div>
                  <span className="text-xs text-slate-600">Next.js · React · Tailwind</span>
                </div>
              </div>

            </m.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          02 · TECH LOGO BAR — Geëxtracteerde component
          ================================================================ */}
      <TechStackBar items={techStack} />

      {/* ================================================================
          03 · BELOFTES — Geëxtracteerde component
          ================================================================ */}
      <BeloftesStatsBar stats={whyChooseUs} />

      {/* ================================================================
          04 · VOOR WIE — Editorial split (tekst links, lijst met dividers rechts)
          ================================================================ */}
      <section className="pt-20 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-start">

            {/* Links: statement column */}
            <ScrollTrigger className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-5">
                <span className="font-mono text-xs font-medium text-primary-violet/70 tracking-wider">/ 01</span>
                <span className="h-px w-8 bg-primary-violet/30" />
                <p className="text-xs uppercase tracking-[0.2em] text-primary-violet font-medium">Voor Wie</p>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-[1.15] tracking-tight">
                Van ZZP&apos;er tot MKB —<br />
                <span className="text-gradient">ondernemers die groei serieus nemen.</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mb-6">
                Wij bouwen websites voor iedereen die meer wil dan een online visitekaartje. Van eenmanszaak tot groeiend bedrijf.
              </p>

              {/* Mini-stat onder het statement */}
              <div className="inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-gradient-to-br from-primary-violet/5 to-primary-blue/5 border border-primary-violet/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-violet to-primary-blue flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Gewerkt voor</p>
                  <p className="text-sm font-bold text-slate-900 tracking-tight">6+ branches</p>
                </div>
              </div>
            </ScrollTrigger>

            {/* Rechts: lijst met dividers, geen kaarten */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Subtiele accent-lijn aan linkerkant van de lijst */}
                <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary-violet/20 to-transparent hidden sm:block" />

                {targetAudience.map((item, i) => (
                  <m.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    className="group relative flex items-start gap-5 py-5 sm:py-6 border-b border-slate-200/60 last:border-b-0 sm:pl-8 cursor-default"
                  >
                    {/* Hover accent bar aan links */}
                    <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-gradient-to-b from-primary-violet to-primary-blue group-hover:h-[70%] transition-all duration-500 ease-out rounded-full" />

                    {/* Nummer + icon inline */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="font-mono text-xs text-slate-400 w-5 font-medium">0{i + 1}</span>
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary-violet/10 to-primary-blue/5 flex items-center justify-center group-hover:from-primary-violet/20 group-hover:to-primary-blue/10 group-hover:scale-[1.08] group-hover:rotate-[-3deg] transition-all duration-500 ease-out">
                        <item.icon className="w-5 h-5 text-primary-violet" />
                      </div>
                    </div>

                    {/* Titel + beschrijving */}
                    <div className="flex-1 min-w-0 pt-1">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 tracking-tight group-hover:text-primary-violet transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>

                    {/* Pijl rechts verschijnt op hover */}
                    <ArrowRight className="hidden sm:block w-4 h-4 text-slate-300 group-hover:text-primary-violet group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-3" />
                  </m.div>
                ))}
              </div>

              <p className="text-sm text-slate-500 mt-8 italic pl-0 sm:pl-8">
                Staat uw branche er niet tussen? Geen probleem — wij bouwen voor élke ondernemer, van ZZP tot MKB.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          02 · INCLUSIEF CHECKLIST — Geëxtracteerde component
          ================================================================ */}
      <ChecklistSection
        sectionNumber="/ 02"
        eyebrow="Wat U Krijgt"
        title={<>Alles wat u krijgt.<br /><span className="text-gradient">Geen kleine lettertjes.</span></>}
        description={'Alle 30+ punten hieronder zitten standaard in de prijs. Geen verborgen kosten, geen "oh dat is een extra pakket". Wat u ziet, krijgt u.'}
        categories={includedChecklist}
        footer={{
          strong: '30 punten.',
          text: 'Allemaal standaard. Allemaal inbegrepen.',
          italic: 'Wij geloven dat een professionele website niet afhankelijk moet zijn van "extra" pakketten. Wat u écht nodig heeft, krijgt u gewoon.',
        }}
      />

      {/* ================================================================
          02b · RESPONSIVE SHOWCASE — 3D devices met mouse-parallax
          ================================================================ */}
      <section className="pt-8 sm:pt-12 pb-20 sm:pb-28 lg:pb-36 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
          <ScrollTrigger>
            <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="h-px w-8 bg-primary-emerald/30" />
                <span className="font-mono text-xs font-medium text-primary-emerald/70 tracking-wider">/ 03 — Werkt op elk apparaat</span>
                <span className="h-px w-8 bg-primary-emerald/30" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-[1.15] tracking-tight">
                Uw website. <span className="text-gradient">Overal perfect.</span>
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
                Of uw klant op een grote monitor zit, een tablet vasthoudt of snel op de telefoon iets opzoekt —
                uw website ziet er altijd goed uit en werkt altijd soepel.
              </p>
            </div>
          </ScrollTrigger>

          <ResponsiveShowcase />
        </div>
      </section>

      {/* ================================================================
          03 · PROCES — Met verbindende timeline-lijn
          ================================================================ */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#FFFDF8] relative">
        <div className="divider-hairline absolute top-0 left-0 right-0" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
          <ScrollTrigger>
            <div className="max-w-2xl mb-14 sm:mb-16">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-medium text-primary-blue/70 tracking-wider">/ 04</span>
                <span className="h-px w-8 bg-primary-blue/30" />
                <p className="text-xs uppercase tracking-[0.2em] text-primary-blue font-medium">Ons Proces</p>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-[1.15] tracking-tight">
                Binnen 1-3 weken <span className="text-gradient">live.</span>
              </h2>
            </div>
          </ScrollTrigger>

          <div className="relative">
            {/* Verbindende timeline-lijn — alleen desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary-blue/20 to-transparent" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
              {processSteps.map((step, index) => (
                <m.div key={step.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                  className="relative group">
                  {/* Stap nummer groot */}
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-5xl sm:text-6xl font-display font-bold leading-none tracking-tighter bg-gradient-to-br from-primary-blue/20 to-primary-violet/10 bg-clip-text text-transparent">{step.step}</span>
                    <div className="w-9 h-9 rounded-lg bg-[#FAFAF5] border border-primary-blue/15 flex items-center justify-center flex-shrink-0 group-hover:border-primary-blue/40 group-hover:bg-primary-blue/5 transition-all duration-500 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                      <step.icon className="w-4 h-4 text-primary-blue" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight">{step.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
                </m.div>
              ))}
            </div>
          </div>

          {/* Video geïntegreerd onderaan de Proces-sectie — compact, gecentreerd, met subtiel label */}
          <div className="mt-14 sm:mt-18 lg:mt-20 max-w-2xl lg:max-w-3xl mx-auto">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-4">
              Inkijkje in het werk
            </p>
            <m.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-[#0B1121] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.2)] border border-slate-200/60"
            >
              <video autoPlay muted loop playsInline preload="none" className="absolute inset-0 w-full h-full object-contain" aria-label="Video demonstratie van moderne website ontwikkeling">
                <source src="/website-laten-maken.mp4" type="video/mp4" />
              </video>
            </m.div>
          </div>
        </div>
      </section>

      {/* ================================================================
          05 · MISSIE — Gecentreerde statement, geen video
          ================================================================ */}
      <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
        {/* Ambient glow achter de content */}
        <m.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[700px] h-[60vw] max-h-[500px] rounded-full blur-[80px] md:blur-[140px] opacity-40 pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)' }}
          animate={reducedAmbient ? undefined : { scale: [1, 1.05, 1] }}
          transition={reducedAmbient ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative">
          <ScrollTrigger>
            {/* Eyebrow */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-primary-violet/30" />
              <span className="font-mono text-xs font-medium text-primary-violet/70 tracking-wider">/ 05 — Onze missie</span>
              <span className="h-px w-8 bg-primary-violet/30" />
            </div>

            {/* Titel */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5 leading-[1.1] tracking-tight">
              Enterprise-techniek,<br />
              <span className="text-gradient">voor elke ondernemer.</span>
            </h2>

            {/* Korte intro */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
              Grote organisaties gebruiken moderne tools als <strong className="text-slate-800">Next.js, React en Tailwind</strong> —
              snel, veilig, toekomstbestendig. Een ZZP&apos;er of MKB&apos;er verdient exact dezelfde kwaliteit, zonder de enterprise-prijs.
            </p>
          </ScrollTrigger>

          {/* Visuele flow: grote organisaties → dezelfde tech → uw bedrijf */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 sm:mb-14"
          >
            {/* Label boven — voorkomt dat mensen denken dat dit klanten zijn */}
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-4">
              Deze techniek wordt bijvoorbeeld gebruikt door:
            </p>

            {/* 4 grote organisatie-pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
              {[
                { icon: Building2, label: 'Gemeenten', color: 'text-primary-blue' },
                { icon: Stethoscope, label: 'Ziekenhuizen', color: 'text-primary-emerald' },
                { icon: GraduationCap, label: 'Scholen', color: 'text-primary-violet' },
                { icon: Store, label: 'Grote retail', color: 'text-primary-warm' },
              ].map((item) => (
                <div key={item.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF8] border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                  <item.icon className={`w-4 h-4 ${item.color}`} />
                  <span className="text-sm font-semibold text-slate-700">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Connector: down arrow + text */}
            <div className="flex flex-col items-center py-3">
              <div className="h-6 w-px bg-gradient-to-b from-slate-300 to-primary-violet/40" />
              <div className="my-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-violet/10 to-primary-blue/10 border border-primary-violet/20">
                <span className="text-xs uppercase tracking-[0.2em] text-primary-violet font-bold">Dezelfde basis-techniek</span>
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-primary-violet/40 to-slate-300" />
            </div>

            {/* Label boven de doelgroep */}
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mt-3 mb-4">
              Wij maken hem beschikbaar voor:
            </p>

            {/* Eindbestemming: ZZP & MKB */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-violet to-primary-blue text-white font-semibold text-sm shadow-lg shadow-primary-violet/20">
                <Briefcase className="w-4 h-4" />
                ZZP&apos;er
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary-blue to-primary-emerald text-white font-semibold text-sm shadow-lg shadow-primary-blue/20">
                <Building2 className="w-4 h-4" />
                MKB
              </div>
            </div>
          </m.div>

          {/* Kernpunten — compacte horizontale grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
            {missionFeatures.map((item, i) => (
              <m.div
                key={item.text}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-violet/10 to-primary-blue/5 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary-violet" />
                </div>
                <span className="text-sm text-slate-600 leading-relaxed pt-1.5">{item.text}</span>
              </m.div>
            ))}
          </div>

          {/* CTA */}
          <Button size="lg" className="bg-gradient-to-r from-primary-violet to-primary-blue hover:brightness-110 shadow-lg shadow-primary-violet/20 text-white font-semibold px-8" asChild>
            <Link href="/demo?type=website">Gratis Demo Aanvragen<ArrowRight className="ml-2 w-4 h-4" /></Link>
          </Button>
        </div>
      </section>

      {/* ================================================================
          05 · PRIJS — Donker accent met risk-reversal badge, verplaatst na Missie
          ================================================================ */}
      <section className="relative">
        <div className="bg-[#0B1121] text-white pt-24 sm:pt-32 pb-24 sm:pb-32 relative overflow-hidden noise-overlay dark-edge-both">
          <div className="absolute inset-0 bg-dot-pattern opacity-40" />
          <m.div className="absolute top-0 right-0 w-[50vw] max-w-[400px] h-[50vw] max-h-[400px] rounded-full blur-[70px] md:blur-[120px] opacity-25"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)' }}
            animate={reducedAmbient ? undefined : { x: [0, 20, 0] }} transition={reducedAmbient ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }} />
          <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
            {/* Risk-reversal badge bovenaan, centraal */}
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10 sm:mb-14 px-4 py-2.5 mx-auto w-fit rounded-full bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-sm"
            >
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-300 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                Eerste ontwerp gratis
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-emerald-500/40" />
              <span className="flex items-center gap-1.5 text-xs sm:text-sm text-emerald-300 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                Niet tevreden = geen kosten
              </span>
            </m.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mono text-xs font-medium text-slate-500 tracking-wider">/ 06</span>
                  <span className="h-px w-8 bg-slate-600" />
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">Investering</p>
                </div>
                <p className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-gradient mb-3 tracking-tight">{priceInfo.price}</p>
                <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{priceInfo.description}</p>

                {/* Scarcity — authentiek, vermeldt capaciteitsbeperking */}
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                  <span className="text-xs font-semibold text-amber-300">Beperkt aantal projecten per maand</span>
                </div>

                <Button size="lg" className="bg-[#FFFDF8] text-[#0B1121] hover:bg-[#FFFCF2] font-semibold px-8 shadow-sm w-full sm:w-auto flex" asChild>
                  <Link href="/demo?type=website">Gratis Demo Aanvragen<ArrowRight className="ml-2 w-5 h-5" /></Link>
                </Button>
                <p className="text-sm text-slate-400 mt-4">Eerste ontwerp binnen 24 uur — geheel vrijblijvend.</p>
              </m.div>

              <m.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                <div className="relative rounded-2xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                  <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  <p className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-semibold mb-5">Heldere afspraak</p>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-[1.2] mb-6">
                    Wat u betaalt, krijgt u. <span className="text-slate-400 font-normal">Geen meer, geen minder.</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white mb-1">Eenmalige kosten</p>
                        <p className="text-sm text-slate-300 leading-relaxed">Geen maandelijks abonnement, geen licenties voor altijd</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white mb-1">100% uw eigendom</p>
                        <p className="text-sm text-slate-300 leading-relaxed">U bent eigenaar van de website en de code</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white mb-1">Alles inbegrepen</p>
                        <p className="text-sm text-slate-300 leading-relaxed">Hosting, training en 2 maanden support zonder extra kosten</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-white/[0.06]">
                    <p className="text-sm text-slate-300 leading-relaxed italic text-center">
                      “Wat we afspreken, betaalt u. Niks meer.”
                    </p>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================
          06 · FAQ — Geëxtracteerde component
          ================================================================ */}
      <FAQSection sectionNumber="/ 07" faqs={faqs} color="violet" />

      {/* ================================================================
          CTA — Geëxtracteerde component
          ================================================================ */}
      <FinalCTA
        title={<>Uw concurrenten hebben al een website.<br /><span className="text-gradient">Wat heeft u?</span></>}
        ctaLabel="Gratis Demo Aanvragen"
        ctaHref="/demo?type=website"
      />
    </div>
  )
}
