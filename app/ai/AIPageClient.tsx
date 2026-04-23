'use client'

import { m } from 'framer-motion'
import HeroSection from '@/components/sections/landing/HeroSection'
import CategoryCardsSection from '@/components/sections/landing/CategoryCardsSection'
import FinalCTA from '@/components/sections/landing/FinalCTA'

import {
  Bot, PhoneCall, BarChart3, Sparkles, ShieldCheck,
  Eye, Lock, Brain,
} from 'lucide-react'

const cards = [
  {
    icon: Bot,
    eyebrow: 'AI Klantenservice',
    title: 'AI Chatbots',
    description: 'Chatbots die uw site-bezoekers 24/7 te woord staan, vragen beantwoorden en leads kwalificeren — getraind op uw eigen content.',
    bullets: [
      'Getraind op uw site, FAQ en documenten',
      'Escalatie naar mens bij complexe vragen',
      'WhatsApp, Teams of op uw website',
    ],
    price: 'Op offerte',
    href: '/ai-chatbots',
    gradient: 'from-primary-violet to-primary-blue',
    accent: 'text-primary-violet',
    badge: 'Meest gekozen',
  },
  {
    icon: PhoneCall,
    eyebrow: 'Voice AI',
    title: 'Virtuele Assistent',
    description: 'Een AI-stem die uw telefoon opneemt, afspraken inplant en leads kwalificeert — 24/7 in het Nederlands, zonder wachtrij.',
    bullets: [
      'Natuurlijke stem — beller merkt nauwelijks verschil',
      'Agenda-integratie voor directe planning',
      'Transcriptie van elk gesprek',
    ],
    price: 'Op offerte',
    href: '/virtuele-assistent',
    gradient: 'from-primary-blue to-primary-emerald',
    accent: 'text-primary-blue',
  },
  {
    icon: BarChart3,
    eyebrow: 'Data & inzichten',
    title: 'AI Analytics',
    description: 'Dashboards die uw belangrijkste cijfers live tonen en AI-modellen die voorspellen wat er gaat komen — op uw eigen data.',
    bullets: [
      'Eén dashboard voor alle databronnen',
      'Voorspellingen en anomalie-detectie',
      'Concrete aanbevelingen in normale taal',
    ],
    price: 'Op offerte',
    href: '/ai-analytics',
    gradient: 'from-primary-emerald to-primary-blue',
    accent: 'text-primary-emerald',
  },
]

// ============================================================================
// HERO VISUAL — AI node / neural orb
// ============================================================================
function AINodeMockup() {
  const nodes = [
    { icon: Bot, label: 'Chat', angle: 0, color: 'text-primary-violet', bg: 'bg-primary-violet/20', border: 'border-primary-violet/40' },
    { icon: PhoneCall, label: 'Voice', angle: 120, color: 'text-primary-blue', bg: 'bg-primary-blue/20', border: 'border-primary-blue/40' },
    { icon: BarChart3, label: 'Analytics', angle: 240, color: 'text-primary-emerald', bg: 'bg-primary-emerald/20', border: 'border-primary-emerald/40' },
  ]

  return (
    <div className="relative aspect-square max-w-md mx-auto">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-violet/20 via-primary-blue/15 to-primary-emerald/10 rounded-full blur-3xl opacity-50" />

      {/* Center core */}
      <m.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-32 h-32 rounded-full bg-[#0d1025] border border-white/10 shadow-2xl flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-violet/30 via-primary-blue/20 to-primary-emerald/30 blur-xl" />
          <Brain className="relative w-14 h-14 text-white" />
          <m.div
            animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2 border-primary-violet/40"
          />
        </div>
      </m.div>

      {/* Orbiting nodes */}
      {nodes.map((node, i) => {
        const rad = (node.angle * Math.PI) / 180
        const radius = 42
        const x = 50 + radius * Math.cos(rad)
        const y = 50 + radius * Math.sin(rad)
        return (
          <m.div
            key={i}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.6 }}
            className="absolute"
            style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
          >
            <div className={`flex flex-col items-center gap-2 p-3 rounded-2xl bg-[#0d1025] border ${node.border} shadow-xl`}>
              <div className={`w-10 h-10 rounded-xl ${node.bg} flex items-center justify-center`}>
                <node.icon className={`w-5 h-5 ${node.color}`} />
              </div>
              <span className="text-[10px] font-mono text-slate-400">{node.label}</span>
            </div>
          </m.div>
        )
      })}

      {/* Connecting lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
        {nodes.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180
          const x = 50 + 42 * Math.cos(rad)
          const y = 50 + 42 * Math.sin(rad)
          return (
            <m.line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="url(#ai-gradient)"
              strokeWidth="0.3"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{ delay: 0.8 + i * 0.15, duration: 0.8 }}
            />
          )
        })}
        <defs>
          <linearGradient id="ai-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

// ============================================================================
// MAIN PAGE
// ============================================================================
export default function AIPageClient() {
  return (
    <div className="min-h-screen bg-[#FAFAF5] text-slate-900 overflow-x-hidden">

      <HeroSection
        eyebrow="AI Oplossingen"
        title={<>AI{' '}<span className="text-gradient">Die Voor U Werkt.</span></>}
        subtitle="Van klantenservice-chatbots tot voice-agenten en data-analyse: wij bouwen praktische AI-oplossingen die écht iets opleveren — getraind op úw bedrijf."
        ctaLabel="Plan Een Vrijblijvende Demo"
        ctaHref="/gratis-advies"
        tags={['Getraind op uw content', 'AVG-proof, EU-hosting', 'Geen black-box — transparant']}
        visual={<AINodeMockup />}
      />

      <CategoryCardsSection
        sectionNumber="/ 01"
        eyebrow="Drie AI-toepassingen"
        title={<>AI voor <span className="text-gradient">concrete resultaten.</span></>}
        description="Geen AI-om-de-AI. Wij bouwen wat u nodig heeft: een chatbot die uw bezoekers helpt, een voice-agent die uw telefoon opneemt, of dashboards die uw data laten spreken."
        cards={cards}
        footer={
          <p className="text-sm text-slate-500">
            Ander AI-idee? <span className="text-slate-700 font-semibold">Bel ons</span> — wij beoordelen vrijblijvend of het zinvol en haalbaar is.
          </p>
        }
      />

      <section className="relative py-20 sm:py-28 bg-[#0B1121] overflow-hidden">
        <div className="divider-hairline-dark absolute top-0 left-0 right-0" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-violet mb-4">/ 02 · Onze filosofie</div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 leading-[1.1]">
            AI zonder hype.<br />
            <span className="text-gradient">Gewoon dat het werkt.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto mb-10">
            Wij kiezen tools die echt waarde leveren: OpenAI, Anthropic, ElevenLabs, Twilio — maar alleen als ze uw probleem oplossen. Geen vendor lock-in, geen nep-menselijke trucs, transparant over wat AI wél en niet kan.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {[
              { icon: Sparkles, label: 'Praktische AI', detail: 'Opgelost probleem, geen demo' },
              { icon: ShieldCheck, label: 'AVG-proof', detail: 'EU-hosting, auditable' },
              { icon: Eye, label: 'Transparant', detail: 'Geen black-box modellen' },
              { icon: Lock, label: 'Uw data blijft van u', detail: 'Nooit voor AI-training' },
            ].map((item, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-5 rounded-xl bg-white/[0.03] border border-white/[0.06]"
              >
                <item.icon className="w-6 h-6 text-primary-violet mb-3 mx-auto" />
                <div className="text-sm font-bold text-white mb-1">{item.label}</div>
                <div className="text-xs text-slate-500">{item.detail}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        title={<>Klaar om AI voor u te laten werken,<br /><span className="text-gradient">zonder gedoe?</span></>}
        ctaLabel="Plan Een Vrijblijvende Demo"
        ctaHref="/gratis-advies"
      />
    </div>
  )
}
