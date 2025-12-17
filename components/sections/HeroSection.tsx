'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import {
  ArrowRight,
  Shield,
  Code,
  BrainCircuit,
  Megaphone,
  CheckCircle2,
  Building2,
  Users,
  Headphones,
  TrendingUp
} from 'lucide-react'

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
})

// Loading skeleton voor 3D
const Scene3DLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className="w-32 h-32 rounded-full bg-quantum-blue/20 animate-pulse" />
      <div className="absolute inset-0 w-32 h-32 rounded-full border border-quantum-blue/20 animate-ping" style={{ animationDuration: '3s' }} />
    </div>
  </div>
)

// Service pillars data
const servicePillars = [
  {
    icon: Shield,
    title: 'IT Beheer',
    description: 'Systeembeheer & Support',
    color: 'quantum-blue'
  },
  {
    icon: Code,
    title: 'Development',
    description: 'Websites & Applicaties',
    color: 'quantum-purple'
  },
  {
    icon: BrainCircuit,
    title: 'AI & Automatisering',
    description: 'Chatbots & Processen',
    color: 'quantum-green'
  },
  {
    icon: Megaphone,
    title: 'Marketing',
    description: 'SEO & Google Ads',
    color: 'quantum-orange'
  },
]

// Value propositions
const valueProps = [
  { icon: Users, value: '1', label: 'Vast aanspreekpunt', color: 'quantum-blue' },
  { icon: Headphones, value: '24/7', label: 'Bereikbaar', color: 'quantum-green' },
  { icon: TrendingUp, value: '100%', label: 'Transparant', color: 'quantum-purple' },
  { icon: Building2, value: 'ZZP & MKB', label: 'Specialist', color: 'quantum-orange' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<Scene3DLoader />}>
          <HeroScene />
        </Suspense>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/80 via-transparent to-cyber-darker z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-darker/60 via-transparent to-cyber-darker/60 z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col justify-center pt-24 pb-12 lg:pt-28 lg:pb-20">

          {/* Hero Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Column - Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-quantum-blue/10 border border-quantum-blue/20 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-quantum-green animate-pulse" />
                <span className="text-sm font-medium text-quantum-blue">
                  IT Partner voor ZZP & MKB
                </span>
              </motion.div>

              {/* Main Heading - SEO optimized */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight mb-6"
              >
                <span className="text-white">Complete </span>
                <span className="text-gradient">IT-Oplossingen</span>
                <span className="block text-white mt-2">voor uw Bedrijf</span>
              </motion.h1>

              {/* Subtitle - SEO keywords */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                Van <strong className="text-white">systeembeheer uitbesteden</strong> en{' '}
                <strong className="text-white">website laten maken</strong> tot{' '}
                <strong className="text-white">AI chatbots</strong> en{' '}
                <strong className="text-white">Google Ads beheer</strong>.
                Alles onder één dak met persoonlijke aandacht.
              </motion.p>

              {/* USP List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-6 mb-8 justify-center lg:justify-start"
              >
                {[
                  'Eén vast aanspreekpunt',
                  'Schaalbare oplossingen',
                  'Transparante tarieven'
                ].map((usp) => (
                  <span key={usp} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                    <span className="text-sm sm:text-base">{usp}</span>
                  </span>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:shadow-lg hover:shadow-quantum-blue/25 transition-all duration-300 px-8 py-6 text-base sm:text-lg group"
                  asChild
                >
                  <Link href="/contact">
                    Gratis Adviesgesprek
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-8 py-6 text-base sm:text-lg transition-all duration-300"
                  asChild
                >
                  <Link href="/oplossingen">
                    Bekijk Diensten
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Service Cards Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="grid grid-cols-2 gap-4">
                {servicePillars.map((service, index) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -4 }}
                    className="group"
                  >
                    <div className={`relative glass-effect border border-${service.color}/20 hover:border-${service.color}/40 rounded-2xl p-6 transition-all duration-300 overflow-hidden`}>
                      {/* Icon */}
                      <div className={`w-12 h-12 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <service.icon className={`w-6 h-6 text-${service.color}`} />
                      </div>

                      {/* Content */}
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Stats Bar - Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 lg:mt-20"
          >
            <div className="glass-effect border border-white/10 rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                {valueProps.map((prop, index) => (
                  <motion.div
                    key={prop.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <div className={`w-10 h-10 rounded-lg bg-${prop.color}/10 flex items-center justify-center`}>
                        <prop.icon className={`w-5 h-5 text-${prop.color}`} />
                      </div>
                      <span className="text-2xl sm:text-3xl font-bold text-white">
                        {prop.value}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400">{prop.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-quantum-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
