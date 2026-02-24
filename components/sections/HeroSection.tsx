'use client'

import { m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated CSS Background - performant alternative to Three.js */}
      <div className="absolute inset-0 z-0">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-quantum-blue/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quantum-purple/20 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-quantum-green/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-cyber-darker/70 via-transparent to-cyber-darker/80" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-cyber-darker/60 via-transparent to-cyber-darker/60" />

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
        <div className="max-w-4xl mx-auto text-center">

          <m.div
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
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <CheckCircle2 className="w-5 h-5 text-quantum-green" />
                <span>Eén vast aanspreekpunt</span>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <CheckCircle2 className="w-5 h-5 text-quantum-green" />
                <span>Transparante tarieven</span>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-gray-300 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full"
              >
                <CheckCircle2 className="w-5 h-5 text-quantum-green" />
                <span>24 uur responstijd</span>
              </m.div>
            </div>

            <m.div
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
              
            </m.div>
          </m.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent z-[2]" />

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
      >
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2 backdrop-blur-sm"
        >
          <div className="w-1 h-2 bg-quantum-blue rounded-full" />
        </m.div>
      </m.div>
    </section>
  )
}
