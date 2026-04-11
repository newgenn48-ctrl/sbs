'use client'

import { m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Clock,
  HeadphonesIcon,
} from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#0B1121]">
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 overflow-hidden">
        <m.div
          className="absolute top-1/4 left-1/3 w-[80vw] max-w-[500px] h-[80vw] max-h-[500px] rounded-full blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)' }}
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <m.div
          className="absolute bottom-1/4 right-1/4 w-[70vw] max-w-[400px] h-[70vw] max-h-[400px] rounded-full blur-[100px]"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }}
          animate={{ x: [0, -25, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Subtle dot grid */}
      <div className="absolute inset-0 bg-dot-pattern" />

      <div className="container relative z-10 mx-auto px-4 pt-32 pb-24 md:pt-28 lg:pt-36 lg:pb-32">
        <div className="max-w-3xl mx-auto text-center">

          {/* Trust indicator */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-blue-300 text-sm font-medium">
              <Shield className="w-4 h-4" />
              Vertrouwd door bedrijven in heel Nederland
            </div>
          </m.div>

          {/* H1 */}
          <m.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 leading-[1.1] text-white"
          >
            Uw IT Uitbesteden?{' '}
            <span className="text-gradient">Wij Regelen Alles.</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed max-w-2xl mx-auto"
          >
            Van <strong className="text-white">systeembeheer</strong> en{' '}
            <strong className="text-white">websites</strong> tot{' '}
            <strong className="text-white">AI-automatisering</strong> en{' '}
            <strong className="text-white">online marketing</strong>.
            Eén partner, alles geregeld.
          </m.p>

          {/* USPs */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {[
              { icon: HeadphonesIcon, text: 'Eén vast aanspreekpunt' },
              { icon: CheckCircle2, text: 'Transparante tarieven' },
              { icon: Clock, text: 'Reactie binnen 24 uur' },
            ].map((usp) => (
              <div
                key={usp.text}
                className="flex items-center gap-2 text-slate-300 bg-white/[0.04] px-4 py-2 rounded-full border border-white/[0.06]"
              >
                <usp.icon className="w-4 h-4 text-emerald-400" />
                <span className="text-sm">{usp.text}</span>
              </div>
            ))}
          </m.div>

          {/* CTA Buttons */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-[#0B1121] hover:bg-slate-100 font-semibold px-8 shadow-none"
              asChild
            >
              <Link href="/contact">
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
      </div>

      {/* Smooth transition to white */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-[2]" />
    </section>
  )
}
