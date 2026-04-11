'use client'

import { m } from 'framer-motion'
import {
  Shield, Code, BrainCircuit, Megaphone, Server, Globe, Lock,
  BarChart3, MessageSquare, Search, ShoppingCart, Smartphone,
  Cloud, Mail, Workflow, Bot, LineChart, Share2, Monitor, Cpu,
  type LucideIcon,
} from 'lucide-react'

type HeroVariant =
  | 'it-support' | 'cybersecurity' | 'systeembeheer' | 'werkplekbeheer' | 'microsoft365'
  | 'website' | 'webapplicatie' | 'webshop' | 'development'
  | 'ai' | 'chatbots' | 'analytics' | 'automation' | 'virtual-assistant'
  | 'marketing' | 'google-ads' | 'seo' | 'social-media' | 'marketing-automation'
  | 'oplossingen' | 'zzp' | 'about' | 'websites'

interface HeroVisualProps {
  variant: HeroVariant
  className?: string
}

interface VisualConfig {
  icon: LucideIcon
  accentColor: string
  accentGlow: string
  secondaryColor: string
  floatingIcons: LucideIcon[]
  label: string
}

const configs: Record<HeroVariant, VisualConfig> = {
  'it-support':       { icon: Server,        accentColor: 'text-blue-400',    accentGlow: 'shadow-blue-500/30',    secondaryColor: 'text-emerald-400', floatingIcons: [Shield, Monitor, Cloud, Lock],    label: 'IT Support' },
  'cybersecurity':    { icon: Shield,        accentColor: 'text-blue-400',    accentGlow: 'shadow-blue-500/30',    secondaryColor: 'text-emerald-400', floatingIcons: [Lock, Globe, Server, Cpu],        label: 'Security' },
  'systeembeheer':    { icon: Server,        accentColor: 'text-blue-400',    accentGlow: 'shadow-blue-500/30',    secondaryColor: 'text-violet-400',  floatingIcons: [Monitor, Cloud, Shield, Cpu],    label: 'Systemen' },
  'werkplekbeheer':   { icon: Monitor,       accentColor: 'text-blue-400',    accentGlow: 'shadow-blue-500/30',    secondaryColor: 'text-amber-400',   floatingIcons: [Smartphone, Cloud, Lock, Cpu],   label: 'Werkplekken' },
  'microsoft365':     { icon: Cloud,         accentColor: 'text-blue-400',    accentGlow: 'shadow-blue-500/30',    secondaryColor: 'text-violet-400',  floatingIcons: [Mail, Shield, Monitor, Globe],   label: 'Microsoft 365' },
  'website':          { icon: Globe,         accentColor: 'text-violet-400',  accentGlow: 'shadow-violet-500/30',  secondaryColor: 'text-blue-400',    floatingIcons: [Code, Search, Smartphone, BarChart3], label: 'Websites' },
  'webapplicatie':    { icon: Code,          accentColor: 'text-violet-400',  accentGlow: 'shadow-violet-500/30',  secondaryColor: 'text-emerald-400', floatingIcons: [Cpu, Globe, Server, Lock],        label: 'Web Apps' },
  'webshop':          { icon: ShoppingCart,  accentColor: 'text-violet-400',  accentGlow: 'shadow-violet-500/30',  secondaryColor: 'text-amber-400',   floatingIcons: [BarChart3, Globe, Lock, Mail],   label: 'E-commerce' },
  'development':      { icon: Code,          accentColor: 'text-violet-400',  accentGlow: 'shadow-violet-500/30',  secondaryColor: 'text-blue-400',    floatingIcons: [Globe, Cpu, Server, Smartphone], label: 'Development' },
  'ai':               { icon: BrainCircuit,  accentColor: 'text-emerald-400', accentGlow: 'shadow-emerald-500/30', secondaryColor: 'text-violet-400',  floatingIcons: [Cpu, Bot, LineChart, Workflow],   label: 'AI' },
  'chatbots':         { icon: MessageSquare, accentColor: 'text-emerald-400', accentGlow: 'shadow-emerald-500/30', secondaryColor: 'text-blue-400',    floatingIcons: [Bot, BrainCircuit, Globe, Mail], label: 'Chatbots' },
  'analytics':        { icon: LineChart,     accentColor: 'text-emerald-400', accentGlow: 'shadow-emerald-500/30', secondaryColor: 'text-violet-400',  floatingIcons: [BarChart3, BrainCircuit, Search, Cpu], label: 'Analytics' },
  'automation':       { icon: Workflow,      accentColor: 'text-emerald-400', accentGlow: 'shadow-emerald-500/30', secondaryColor: 'text-blue-400',    floatingIcons: [Cpu, Mail, Bot, Server],         label: 'Automation' },
  'virtual-assistant':{ icon: Bot,           accentColor: 'text-emerald-400', accentGlow: 'shadow-emerald-500/30', secondaryColor: 'text-violet-400',  floatingIcons: [MessageSquare, BrainCircuit, Globe, Mail], label: 'Assistent' },
  'marketing':        { icon: Megaphone,     accentColor: 'text-amber-400',   accentGlow: 'shadow-amber-500/30',   secondaryColor: 'text-blue-400',    floatingIcons: [BarChart3, Search, Share2, Mail], label: 'Marketing' },
  'google-ads':       { icon: BarChart3,     accentColor: 'text-amber-400',   accentGlow: 'shadow-amber-500/30',   secondaryColor: 'text-emerald-400', floatingIcons: [Search, LineChart, Globe, Megaphone], label: 'Google Ads' },
  'seo':              { icon: Search,        accentColor: 'text-amber-400',   accentGlow: 'shadow-amber-500/30',   secondaryColor: 'text-blue-400',    floatingIcons: [Globe, BarChart3, Code, LineChart], label: 'SEO' },
  'social-media':     { icon: Share2,        accentColor: 'text-amber-400',   accentGlow: 'shadow-amber-500/30',   secondaryColor: 'text-violet-400',  floatingIcons: [Megaphone, BarChart3, Globe, Mail], label: 'Social Media' },
  'marketing-automation': { icon: Mail,      accentColor: 'text-amber-400',   accentGlow: 'shadow-amber-500/30',   secondaryColor: 'text-emerald-400', floatingIcons: [Workflow, BarChart3, Bot, Megaphone], label: 'Automation' },
  'oplossingen':      { icon: Cpu,           accentColor: 'text-blue-400',    accentGlow: 'shadow-blue-500/30',    secondaryColor: 'text-violet-400',  floatingIcons: [Server, Code, BrainCircuit, Megaphone], label: 'Oplossingen' },
  'zzp':              { icon: Globe,         accentColor: 'text-violet-400',  accentGlow: 'shadow-violet-500/30',  secondaryColor: 'text-emerald-400', floatingIcons: [Code, Search, Shield, BarChart3], label: 'ZZP' },
  'about':            { icon: Shield,        accentColor: 'text-blue-400',    accentGlow: 'shadow-blue-500/30',    secondaryColor: 'text-violet-400',  floatingIcons: [Server, Code, BrainCircuit, Megaphone], label: 'Over Ons' },
  'websites':         { icon: Globe,         accentColor: 'text-violet-400',  accentGlow: 'shadow-violet-500/30',  secondaryColor: 'text-blue-400',    floatingIcons: [Code, Search, Smartphone, BarChart3], label: 'Websites' },
}

const positions = [
  { x: '8%', y: '12%', size: 'w-11 h-11', delay: 0, dur: 6 },
  { x: '78%', y: '8%', size: 'w-10 h-10', delay: 1.2, dur: 7 },
  { x: '3%', y: '72%', size: 'w-10 h-10', delay: 0.6, dur: 5.5 },
  { x: '82%', y: '68%', size: 'w-11 h-11', delay: 2, dur: 6.5 },
]

export default function HeroVisual({ variant, className = '' }: HeroVisualProps) {
  const config = configs[variant]
  const Icon = config.icon

  return (
    <div className={`relative w-full h-full rounded-2xl overflow-hidden bg-[#0B1121] ${className}`}>
      {/* Animated gradient blobs */}
      <m.div
        className="absolute top-1/4 left-1/4 w-3/4 h-3/4 rounded-full blur-[80px] opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)' }}
        animate={{ x: [0, 15, 0], y: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <m.div
        className="absolute bottom-1/4 right-1/4 w-1/2 h-1/2 rounded-full blur-[60px] opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
        animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 bg-dot-pattern" />

      {/* Floating icons with glass containers */}
      {config.floatingIcons.map((FloatingIcon, i) => {
        const pos = positions[i]
        return (
          <m.div
            key={i}
            className="absolute"
            style={{ left: pos.x, top: pos.y }}
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: pos.dur, repeat: Infinity, delay: pos.delay, ease: 'easeInOut' }}
          >
            <div className={`${pos.size} rounded-xl bg-white/[0.04] border border-white/[0.06] backdrop-blur-sm flex items-center justify-center`}>
              <FloatingIcon className={`w-5 h-5 ${i % 2 === 0 ? config.accentColor : config.secondaryColor}`} />
            </div>
          </m.div>
        )
      })}

      {/* Center visual — icon with glow rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Outer pulse ring */}
        <m.div
          className="absolute w-52 h-52 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full border border-white/[0.03]"
          animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Dashed orbit */}
        <m.div
          className="absolute w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60 rounded-full border border-dashed border-white/[0.06]"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />

        {/* Inner glow ring */}
        <div className="absolute w-36 h-36 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full border border-white/[0.05]" />

        {/* Center icon with glow */}
        <m.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
          className={`relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white/[0.06] border border-white/[0.1] flex items-center justify-center shadow-2xl ${config.accentGlow}`}
        >
          <Icon className={`w-10 h-10 sm:w-12 sm:h-12 ${config.accentColor}`} />

          {/* Glow behind icon */}
          <div className={`absolute inset-0 rounded-2xl blur-xl opacity-20 ${config.accentGlow.replace('shadow-', 'bg-').replace('/30', '/40')}`} />
        </m.div>

        {/* Orbital dots */}
        {[0, 120, 240].map((angle) => (
          <m.div
            key={angle}
            className="absolute w-44 h-44 sm:w-52 sm:h-52 lg:w-60 lg:h-60"
            animate={{ rotate: 360 }}
            transition={{ duration: 20 + angle / 30, repeat: Infinity, ease: 'linear' }}
            style={{ transform: `rotate(${angle}deg)` }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/30" />
          </m.div>
        ))}
      </div>

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.06 }}>
        <line x1="15%" y1="18%" x2="50%" y2="50%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="82%" y1="12%" x2="50%" y2="50%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="8%" y1="76%" x2="50%" y2="50%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
        <line x1="86%" y1="72%" x2="50%" y2="50%" stroke="white" strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>

      {/* Bottom label */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <div className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.06] text-xs text-slate-500 backdrop-blur-sm">
          {config.label}
        </div>
      </div>
    </div>
  )
}
