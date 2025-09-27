'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import dynamic from 'next/dynamic'
import { ArrowRight, Sparkles } from 'lucide-react'


import ActivityIndicator from '@/components/ui/ActivityIndicator'

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center bg-cyber-darker"><ActivityIndicator /></div>
})

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <HeroScene />
      </div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-1" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.2 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-quantum-blue/20 text-quantum-blue border-quantum-blue">
              <Sparkles className="w-4 h-4 mr-2" />
              Groei en Efficiëntie voor het MKB
            </Badge>
          </motion.div>
          
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
          >
            <span>Uw Complete</span>
            <span className="block mt-2 text-gradient">
              Digitale Partner
            </span>
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.4 }}
            className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Meer klanten, minder IT-zorgen en een voorsprong op de concurrentie. Wij regelen uw volledige digitale aanwezigheid, zodat u kunt focussen op ondernemen.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <div className="flex flex-col items-center">
              <Button 
                variant="primary"
                size="xl"
              >
                Gratis Digital Scan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-xs text-gray-500 mt-2">Ontdek binnen 2 minuten uw onbenutte online potentieel.</p>
            </div>
            <Button 
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Hoe wij u helpen groeien
            </Button>
          </motion.div>
          
          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: shouldReduceMotion ? 0 : 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              ✓ Persoonlijke aanpak
            </span>
            <span className="flex items-center gap-2">
              ✓ Flexibele oplossingen
            </span>
            <span className="flex items-center gap-2">
              ✓ Focus op MKB
            </span>
            <span className="flex items-center gap-2">
              ✓ Eén vast aanspreekpunt
            </span>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-quantum-blue/50 rounded-full flex justify-center">
          <motion.div
            animate={shouldReduceMotion ? { y: 0 } : { y: [0, 15, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-quantum-blue rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  )
}
