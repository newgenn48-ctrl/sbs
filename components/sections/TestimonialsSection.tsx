'use client'

import { motion } from 'framer-motion'
import {
  UserCheck,
  Zap,
  Shield,
  Target,
  Clock,
  Lightbulb,
  HeartHandshake,
  TrendingUp
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

// CSS Network Animation - performant replacement for Three.js NetworkScene
function NetworkVisualization() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-purple/10 via-cyber-dark to-quantum-blue/10" />

      {/* Network nodes */}
      <div className="absolute top-[20%] left-[25%] w-4 h-4 bg-quantum-blue rounded-full animate-pulse shadow-lg shadow-quantum-blue/50" />
      <div className="absolute top-[35%] right-[30%] w-3 h-3 bg-quantum-purple rounded-full animate-pulse [animation-delay:0.5s] shadow-lg shadow-quantum-purple/50" />
      <div className="absolute bottom-[25%] left-[35%] w-5 h-5 bg-quantum-green rounded-full animate-pulse [animation-delay:1s] shadow-lg shadow-quantum-green/50" />
      <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-quantum-orange rounded-full animate-pulse [animation-delay:1.5s] shadow-lg shadow-quantum-orange/50" />
      <div className="absolute top-[45%] left-[15%] w-4 h-4 bg-quantum-blue/80 rounded-full animate-pulse [animation-delay:0.7s] shadow-lg shadow-quantum-blue/40" />
      <div className="absolute bottom-[40%] right-[15%] w-3 h-3 bg-quantum-purple/80 rounded-full animate-pulse [animation-delay:1.2s] shadow-lg shadow-quantum-purple/40" />

      {/* Connection lines */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
        <line x1="25%" y1="20%" x2="70%" y2="35%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse" />
        <line x1="70%" y1="35%" x2="35%" y2="75%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse [animation-delay:0.5s]" />
        <line x1="35%" y1="75%" x2="75%" y2="60%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse [animation-delay:1s]" />
        <line x1="15%" y1="45%" x2="25%" y2="20%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse [animation-delay:0.3s]" />
        <line x1="85%" y1="60%" x2="70%" y2="35%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse [animation-delay:0.8s]" />
        <defs>
          <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#a855f7" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating particles */}
      <div className="absolute top-[30%] left-[50%] w-1 h-1 bg-white/60 rounded-full animate-bounce [animation-duration:3s]" />
      <div className="absolute top-[55%] left-[40%] w-1 h-1 bg-white/40 rounded-full animate-bounce [animation-duration:4s] [animation-delay:1s]" />
      <div className="absolute top-[70%] right-[40%] w-1 h-1 bg-white/50 rounded-full animate-bounce [animation-duration:3.5s] [animation-delay:0.5s]" />
    </div>
  )
}

// Static color classes to ensure Tailwind purges correctly
const colorClasses = {
  'quantum-blue': {
    border: 'border-quantum-blue/20',
    borderHover: 'hover:border-quantum-blue/40',
    bg: 'bg-quantum-blue/10',
    text: 'text-quantum-blue',
  },
  'quantum-purple': {
    border: 'border-quantum-purple/20',
    borderHover: 'hover:border-quantum-purple/40',
    bg: 'bg-quantum-purple/10',
    text: 'text-quantum-purple',
  },
  'quantum-green': {
    border: 'border-quantum-green/20',
    borderHover: 'hover:border-quantum-green/40',
    bg: 'bg-quantum-green/10',
    text: 'text-quantum-green',
  },
  'quantum-orange': {
    border: 'border-quantum-orange/20',
    borderHover: 'hover:border-quantum-orange/40',
    bg: 'bg-quantum-orange/10',
    text: 'text-quantum-orange',
  },
} as const

type ColorKey = keyof typeof colorClasses

const reasons: Array<{
  icon: typeof UserCheck
  title: string
  description: string
  color: ColorKey
}> = [
  {
    icon: UserCheck,
    title: 'Eén Vast Aanspreekpunt',
    description: 'Geen doorverwijzingen of wachtmuziek. U spreekt altijd met dezelfde persoon die uw bedrijf kent.',
    color: 'quantum-blue',
  },
  {
    icon: Zap,
    title: 'Alles Onder Één Dak',
    description: 'IT-beheer, websites, AI en marketing - geen gedoe met meerdere leveranciers.',
    color: 'quantum-purple',
  },
  {
    icon: Target,
    title: 'Focus op ZZP & MKB',
    description: 'Wij begrijpen de uitdagingen van ondernemers. Praktische oplossingen, geen enterprise-complexiteit.',
    color: 'quantum-green',
  },
  {
    icon: Shield,
    title: 'Transparante Tarieven',
    description: 'Duidelijke prijzen vooraf. Geen verborgen kosten of verrassingen achteraf.',
    color: 'quantum-orange',
  },
]

const additionalBenefits: Array<{
  icon: typeof Clock
  text: string
  color: ColorKey
}> = [
  { icon: Clock, text: 'Snelle responstijd', color: 'quantum-blue' },
  { icon: Lightbulb, text: 'Proactief meedenken', color: 'quantum-purple' },
  { icon: HeartHandshake, text: 'Persoonlijke aanpak', color: 'quantum-green' },
  { icon: TrendingUp, text: 'Groei als doel', color: 'quantum-orange' },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle color accent only */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-quantum-purple/10 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8 lg:mb-12"
            >
              <Badge className="mb-4 px-4 py-2 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                Waarom Start Beheer
              </Badge>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                <span className="text-white">Uw IT Partner die </span>
                <span className="text-gradient">Écht Luistert</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                Geen grote organisatie waar u een nummer bent. Bij ons krijgt u persoonlijke aandacht en oplossingen die passen bij uw bedrijf.
              </p>
            </motion.div>

            {/* Mobile 3D - Compact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:hidden mb-8"
            >
              <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-cyber-dark/30 border border-quantum-purple/20">
                <NetworkVisualization />
              </div>
            </motion.div>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.article
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`glass-effect p-5 rounded-2xl border ${colorClasses[reason.color].border} ${colorClasses[reason.color].borderHover} transition-all group h-full`}
                >
                  <div className={`w-12 h-12 rounded-xl ${colorClasses[reason.color].bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <reason.icon className={`w-6 h-6 ${colorClasses[reason.color].text}`} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.article>
              ))}
            </div>
          </div>

          {/* Right - 3D Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden lg:block"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-quantum-purple/20 via-quantum-blue/10 to-transparent blur-3xl rounded-full" />

              {/* Network Visualization */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-cyber-dark/30 border border-quantum-purple/20">
                <NetworkVisualization />
              </div>

              {/* Floating benefits */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md">
                <div className="glass-effect p-4 rounded-2xl border border-white/10">
                  <div className="grid grid-cols-4 gap-3">
                    {additionalBenefits.map((benefit, index) => (
                      <motion.div
                        key={benefit.text}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center gap-2 text-center"
                      >
                        <div className={`w-10 h-10 rounded-xl ${colorClasses[benefit.color].bg} flex items-center justify-center`}>
                          <benefit.icon className={`w-5 h-5 ${colorClasses[benefit.color].text}`} />
                        </div>
                        <span className="text-xs text-gray-300">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile benefits bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:hidden mt-12"
        >
          <div className="glass-effect p-6 rounded-2xl border border-white/10">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {additionalBenefits.map((benefit, index) => (
                <motion.div
                  key={benefit.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <div className={`w-12 h-12 rounded-xl ${colorClasses[benefit.color].bg} flex items-center justify-center`}>
                    <benefit.icon className={`w-6 h-6 ${colorClasses[benefit.color].text}`} />
                  </div>
                  <span className="text-sm text-gray-300">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
