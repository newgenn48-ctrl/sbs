'use client'

import { m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, Shield, Code, BrainCircuit, Megaphone,
  Sparkles, Users,
} from 'lucide-react'
import { useReducedAmbient } from '@/lib/useMobile'

const usps = [
  'Eén vast aanspreekpunt',
  'Transparante tarieven',
  'Reactie binnen 24 uur',
]

// ============================================================================
// HERO VISUAL — Command center / orchestration mockup
// ============================================================================
function OrchestrationMockup() {
  const pillars = [
    { icon: Shield, label: 'IT-beheer', value: 'Werkplekken & servers', color: 'blue', delay: 0.3 },
    { icon: Code, label: 'Development', value: 'Websites & webshops', color: 'emerald', delay: 0.5 },
    { icon: BrainCircuit, label: 'AI & Automation', value: 'Chatbots & workflows', color: 'violet', delay: 0.7 },
    { icon: Megaphone, label: 'Marketing', value: 'SEO, Ads & Social', color: 'warm', delay: 0.9 },
  ]

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-primary-blue/15', text: 'text-primary-blue', border: 'border-primary-blue/25' },
    emerald: { bg: 'bg-primary-emerald/15', text: 'text-primary-emerald', border: 'border-primary-emerald/25' },
    violet: { bg: 'bg-primary-violet/15', text: 'text-primary-violet', border: 'border-primary-violet/25' },
    warm: { bg: 'bg-primary-warm/15', text: 'text-primary-warm', border: 'border-primary-warm/25' },
  }

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-r from-primary-blue/20 via-primary-violet/15 to-primary-emerald/10 rounded-3xl blur-3xl opacity-50" />

      <div className="relative bg-[#0d1025] rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl shadow-primary-blue/15">
        {/* Header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-blue via-primary-violet to-primary-emerald flex items-center justify-center shadow-lg">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white tracking-tight">Uw digitale stack</div>
            <div className="text-[11px] text-slate-500">Vier disciplines, één partner</div>
          </div>
        </div>

        {/* 4 pillars grid */}
        <div className="p-4 grid grid-cols-2 gap-2.5">
          {pillars.map((pillar, i) => {
            const c = colorMap[pillar.color]
            return (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: pillar.delay }}
                className={`p-3 rounded-lg bg-white/[0.03] border ${c.border} hover:bg-white/[0.05] transition-colors`}
              >
                <div className={`w-8 h-8 rounded-lg ${c.bg} flex items-center justify-center mb-2`}>
                  <pillar.icon className={`w-4 h-4 ${c.text}`} />
                </div>
                <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-0.5">{pillar.label}</div>
                <div className={`text-[11px] ${c.text} font-medium leading-snug`}>{pillar.value}</div>
              </m.div>
            )
          })}
        </div>

        {/* Central hub — "one partner" */}
        <div className="px-4 pb-3">
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 }}
            className="p-3 rounded-lg bg-gradient-to-r from-primary-blue/10 via-primary-violet/10 to-primary-emerald/10 border border-white/[0.08]"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                <Users className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1">
                <div className="text-xs font-semibold text-white">Uw vaste aanspreekpunt</div>
                <div className="text-[10px] text-slate-400">Kent uw bedrijf. Regelt alles.</div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Footer */}
        <div className="border-t border-white/[0.06] px-4 py-3 flex items-center justify-between bg-white/[0.02]">
          <span className="text-xs text-slate-400">Reactie</span>
          <span className="text-xs font-bold text-white font-mono">&lt; 24 uur</span>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN HERO
// ============================================================================
export default function HeroSection() {
  const reduced = useReducedAmbient()
  return (
    <section className="relative min-h-[92svh] flex items-center overflow-hidden bg-[#0B1121]">
      {/* Animated gradient mesh — static op mobile (blur+animate kost te veel paint) */}
      <div className="absolute inset-0 overflow-hidden">
        <m.div
          className="absolute top-1/4 left-1/4 w-[80vw] max-w-[600px] h-[80vw] max-h-[600px] rounded-full blur-[80px] md:blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }}
          animate={reduced ? undefined : { x: [0, 40, 0], y: [0, -25, 0] }}
          transition={reduced ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <m.div
          className="absolute bottom-1/4 right-1/4 w-[70vw] max-w-[500px] h-[70vw] max-h-[500px] rounded-full blur-[70px] md:blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
          animate={reduced ? undefined : { x: [0, -30, 0], y: [0, 25, 0] }}
          transition={reduced ? undefined : { duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="absolute inset-0 bg-dot-pattern" />

      <div className="container relative z-10 mx-auto px-5 sm:px-8 pt-32 pb-24 md:pt-28 lg:pt-36 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left — copy */}
          <div>
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-300 text-sm font-medium"
            >
              <Shield className="w-4 h-4 text-primary-blue" />
              IT, Development, AI &amp; Marketing — onder één dak
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-[1.05] text-white tracking-tight"
            >
              Uw Digitale Zaken.{' '}
              <span className="text-gradient">Eén Partner.</span>
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-xl"
            >
              Van <strong className="text-white">systeembeheer</strong> tot{' '}
              <strong className="text-white">websites</strong>, van{' '}
              <strong className="text-white">AI-automatisering</strong> tot{' '}
              <strong className="text-white">online marketing</strong>. Geen versnipperde leveranciers — wel enterprise-kwaliteit voor MKB en ZZP.
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              {usps.map((usp) => (
                <div
                  key={usp}
                  className="flex items-center gap-2 text-slate-300 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/[0.06] text-sm"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary-emerald flex-shrink-0" />
                  <span>{usp}</span>
                </div>
              ))}
            </m.div>

            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Button
                size="lg"
                className="bg-white text-[#0B1121] hover:bg-slate-100 font-semibold px-8 shadow-lg"
                asChild
              >
                <Link href="/gratis-advies">
                  Plan Gratis Adviesgesprek
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                className="border border-white/20 bg-transparent text-white hover:bg-white/10 hover:border-white/30 px-8"
                asChild
              >
                <Link href="#services">
                  Bekijk Onze Diensten
                </Link>
              </Button>
            </m.div>
          </div>

          {/* Right — visual */}
          <m.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <OrchestrationMockup />
          </m.div>
        </div>
      </div>

      {/* Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0B1121] to-transparent z-[2] pointer-events-none" />
    </section>
  )
}
