'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
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

const NetworkScene = dynamic(() => import('@/components/3d/NetworkScene'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-quantum-blue/20 border-t-quantum-blue/60 rounded-full animate-spin" />
    </div>
  ),
})

const reasons = [
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

const additionalBenefits = [
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

              <p className="text-lg text-gray-400 leading-relaxed">
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
                <NetworkScene />
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
                  className={`glass-effect p-5 rounded-2xl border border-${reason.color}/20 hover:border-${reason.color}/40 transition-all group h-full`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-${reason.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <reason.icon className={`w-6 h-6 text-${reason.color}`} />
                  </div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
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

              {/* 3D Network Visualization */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-cyber-dark/30 border border-quantum-purple/20">
                <NetworkScene />
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
                        <div className={`w-10 h-10 rounded-xl bg-${benefit.color}/10 flex items-center justify-center`}>
                          <benefit.icon className={`w-5 h-5 text-${benefit.color}`} />
                        </div>
                        <span className="text-xs text-gray-400">{benefit.text}</span>
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
                  <div className={`w-12 h-12 rounded-xl bg-${benefit.color}/10 flex items-center justify-center`}>
                    <benefit.icon className={`w-6 h-6 text-${benefit.color}`} />
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
