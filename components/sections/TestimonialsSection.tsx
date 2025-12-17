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
import SectionContainer, { PremiumCard } from '@/components/ui/SectionContainer'
import IconBox from '@/components/ui/IconBox'
import { FloatingIconBox } from '@/components/ui/IconBox'

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
    color: 'blue' as const,
  },
  {
    icon: Zap,
    title: 'Alles Onder Één Dak',
    description: 'IT-beheer, websites, AI en marketing - geen gedoe met meerdere leveranciers.',
    color: 'purple' as const,
  },
  {
    icon: Target,
    title: 'Focus op ZZP & MKB',
    description: 'Wij begrijpen de uitdagingen van ondernemers. Praktische oplossingen, geen enterprise-complexiteit.',
    color: 'green' as const,
  },
  {
    icon: Shield,
    title: 'Transparante Tarieven',
    description: 'Duidelijke prijzen vooraf. Geen verborgen kosten of verrassingen achteraf.',
    color: 'orange' as const,
  },
]

const additionalBenefits = [
  { icon: Clock, text: 'Snelle responstijd', color: 'blue' as const },
  { icon: Lightbulb, text: 'Proactief meedenken', color: 'purple' as const },
  { icon: HeartHandshake, text: 'Persoonlijke aanpak', color: 'green' as const },
  { icon: TrendingUp, text: 'Groei als doel', color: 'orange' as const },
]

export default function TestimonialsSection() {
  return (
    <SectionContainer variant="dark" withGlow glowColor="purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left - Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-2 bg-quantum-purple/10 border border-quantum-purple/20 text-quantum-purple text-sm font-medium rounded-full mb-6"
              >
                Waarom Start Beheer
              </motion.span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                <span className="text-white">Uw IT Partner die </span>
                <span className="text-gradient">Écht Luistert</span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed">
                Geen grote organisatie waar u een nummer bent. Bij ons krijgt u persoonlijke aandacht en oplossingen die passen bij uw bedrijf.
              </p>
            </motion.div>

            {/* Reasons Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <PremiumCard className="p-5 h-full">
                    <FloatingIconBox
                      icon={reason.icon}
                      color={reason.color}
                      size="md"
                      glowEffect={false}
                      className="mb-4"
                    />
                    <h3 className="text-lg font-display font-bold text-white mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </PremiumCard>
                </motion.div>
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
              {/* 3D Network Visualization */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden bg-cyber-dark/30 border border-quantum-purple/20">
                <NetworkScene />
              </div>

              {/* Floating benefits */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full max-w-md">
                <PremiumCard hoverable={false} className="p-4">
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
                        <IconBox
                          icon={benefit.icon}
                          color={benefit.color}
                          size="sm"
                          variant="default"
                        />
                        <span className="text-xs text-gray-400">{benefit.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </PremiumCard>
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
          <PremiumCard hoverable={false} className="p-6">
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
                  <IconBox
                    icon={benefit.icon}
                    color={benefit.color}
                    size="md"
                    variant="default"
                  />
                  <span className="text-sm text-gray-300">{benefit.text}</span>
                </motion.div>
              ))}
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
