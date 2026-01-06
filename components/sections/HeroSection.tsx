'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react'

// Lazy load 3D after LCP for better Core Web Vitals
const HeroBackground = dynamic(() => import('@/components/3d/HeroBackground'), {
  ssr: false,
  loading: () => null,
})

export default function HeroSection() {
  const [show3D, setShow3D] = useState(false)

  // Delay 3D loading until after initial paint
  useEffect(() => {
    const timer = requestIdleCallback(() => setShow3D(true), { timeout: 1500 })
    return () => cancelIdleCallback(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Background - loaded after initial render */}
      <div className="absolute inset-0 z-0">
        {show3D && <HeroBackground />}
      </div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-cyber-darker/70 via-transparent to-cyber-darker/80" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-cyber-darker/60 via-transparent to-cyber-darker/60" />

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 bg-quantum-blue/20 text-quantum-blue border-quantum-blue/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 mr-2 inline" />
              IT Partner voor ZZP & MKB
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-[1.1]">
              Complete{' '}
              <span className="text-gradient">IT-Oplossingen</span>
              <span className="block mt-2">voor uw Bedrijf</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Van <strong className="text-white">systeembeheer uitbesteden</strong> en{' '}
              <strong className="text-white">website laten maken</strong> tot{' '}
              <strong className="text-white">AI chatbots</strong> en{' '}
              <strong className="text-white">Google Ads beheer</strong>.
              Alles onder één dak met persoonlijke aandacht.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <CheckCircle2 className="w-5 h-5 text-quantum-green" />
                <span>Eén vast aanspreekpunt</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <CheckCircle2 className="w-5 h-5 text-quantum-green" />
                <span>Transparante tarieven</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <CheckCircle2 className="w-5 h-5 text-quantum-green" />
                <span>24 uur responstijd</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 px-8"
                asChild
              >
                <Link href="/contact">
                  Gratis Adviesgesprek
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent z-[2]" />

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
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm"
        >
          <div className="w-1 h-2 bg-quantum-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
