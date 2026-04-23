'use client'

import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import type { LucideIcon } from 'lucide-react'

export interface ProcessStep {
  step: string // "01"
  title: string
  description: string
  icon: LucideIcon
}

interface Props {
  sectionNumber: string // "/ 04"
  eyebrow: string // "Ons Proces"
  title: React.ReactNode
  steps: ProcessStep[]
  videoSrc?: string // Optional video at bottom
  videoAriaLabel?: string
}

/**
 * Timeline-sectie met 4 genummerde stappen en verbindende lijn op desktop.
 * Optioneel: compacte video onderaan als "inkijkje in het werk".
 */
export default function ProcesSection({
  sectionNumber,
  eyebrow,
  title,
  steps,
  videoSrc,
  videoAriaLabel = 'Video demonstratie',
}: Props) {
  return (
    <section className="py-20 sm:py-28 lg:py-36 bg-[#FFFDF8] relative">
      <div className="divider-hairline absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
        <ScrollTrigger>
          <div className="max-w-2xl mb-14 sm:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-medium text-primary-blue/70 tracking-wider">{sectionNumber}</span>
              <span className="h-px w-8 bg-primary-blue/30" />
              <p className="text-xs uppercase tracking-[0.2em] text-primary-blue font-medium">{eyebrow}</p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-[1.15] tracking-tight">
              {title}
            </h2>
          </div>
        </ScrollTrigger>

        <div className="relative">
          <div className="hidden lg:block absolute top-[44px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-primary-blue/20 to-transparent" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 relative">
            {steps.map((step, index) => (
              <m.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-5xl sm:text-6xl font-display font-bold leading-none tracking-tighter bg-gradient-to-br from-primary-blue/20 to-primary-violet/10 bg-clip-text text-transparent">{step.step}</span>
                  <div className="w-9 h-9 rounded-lg bg-[#FAFAF5] border border-primary-blue/15 flex items-center justify-center flex-shrink-0 group-hover:border-primary-blue/40 group-hover:bg-primary-blue/5 transition-all duration-500 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                    <step.icon className="w-4 h-4 text-primary-blue" />
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight">{step.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
              </m.div>
            ))}
          </div>
        </div>

        {videoSrc && (
          <div className="mt-14 sm:mt-18 lg:mt-20 max-w-2xl lg:max-w-3xl mx-auto">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-4">
              Inkijkje in het werk
            </p>
            <m.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-video rounded-2xl overflow-hidden bg-[#0B1121] shadow-[0_20px_50px_-15px_rgba(15,23,42,0.2)] border border-slate-200/60"
            >
              <video
                autoPlay muted loop playsInline preload="none"
                className="absolute inset-0 w-full h-full object-contain"
                aria-label={videoAriaLabel}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            </m.div>
          </div>
        )}
      </div>
    </section>
  )
}
