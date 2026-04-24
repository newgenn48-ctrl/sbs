'use client'

import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { LucideIcon } from 'lucide-react'
import { useReducedAmbient } from '@/lib/useMobile'

export interface FlowDiagramItem {
  icon: LucideIcon
  label: string
  color: string // Tailwind text color class like 'text-primary-blue'
}

export interface FlowDiagramTarget {
  icon: LucideIcon
  label: string
  gradient: string // Tailwind gradient classes like 'from-primary-violet to-primary-blue'
}

export interface MissionFeature {
  icon: LucideIcon
  text: string
}

interface Props {
  sectionNumber: string // "/ 05"
  eyebrow: string // "Onze missie"
  title: React.ReactNode
  description: React.ReactNode // allows inline <strong> etc
  flowDiagram: {
    sourceLabel: string // "Deze techniek wordt bijvoorbeeld gebruikt door:"
    sources: FlowDiagramItem[]
    connectorLabel: string // "Dezelfde basis-techniek"
    targetLabel: string // "Wij maken hem beschikbaar voor:"
    targets: FlowDiagramTarget[]
  }
  features: MissionFeature[]
  ctaLabel: string
  ctaHref: string
}

/**
 * Missie-sectie — gecentreerd statement met visuele flow van grote orgs → doelgroep.
 * Violet-accent thema, verwijst naar "waarom" achter het bedrijf.
 */
export default function MissieSection({
  sectionNumber,
  eyebrow,
  title,
  description,
  flowDiagram,
  features,
  ctaLabel,
  ctaHref,
}: Props) {
  const reduced = useReducedAmbient()
  return (
    <section className="py-20 sm:py-28 lg:py-32 relative overflow-hidden">
      <m.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-[700px] h-[60vw] max-h-[500px] rounded-full blur-[80px] md:blur-[140px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.1) 0%, rgba(37,99,235,0.06) 40%, transparent 70%)' }}
        animate={reduced ? undefined : { scale: [1, 1.05, 1] }}
        transition={reduced ? undefined : { duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center relative">
        <ScrollTrigger>
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-primary-violet/30" />
            <span className="font-mono text-xs font-medium text-primary-violet/70 tracking-wider">{sectionNumber} — {eyebrow}</span>
            <span className="h-px w-8 bg-primary-violet/30" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-5 leading-[1.1] tracking-tight">
            {title}
          </h2>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            {description}
          </p>
        </ScrollTrigger>

        {/* Flow diagram: sources → connector → targets */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 sm:mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mb-4">
            {flowDiagram.sourceLabel}
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6">
            {flowDiagram.sources.map((item) => (
              <div key={item.label} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FFFDF8] border border-slate-200/70 shadow-[0_1px_2px_rgba(15,23,42,0.04)]">
                <item.icon className={`w-4 h-4 ${item.color}`} />
                <span className="text-sm font-semibold text-slate-700">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center py-3">
            <div className="h-6 w-px bg-gradient-to-b from-slate-300 to-primary-violet/40" />
            <div className="my-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary-violet/10 to-primary-blue/10 border border-primary-violet/20">
              <span className="text-xs uppercase tracking-[0.2em] text-primary-violet font-bold">{flowDiagram.connectorLabel}</span>
            </div>
            <div className="h-6 w-px bg-gradient-to-b from-primary-violet/40 to-slate-300" />
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium mt-3 mb-4">
            {flowDiagram.targetLabel}
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {flowDiagram.targets.map((target) => (
              <div
                key={target.label}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${target.gradient} text-white font-semibold text-sm shadow-lg shadow-primary-violet/20`}
              >
                <target.icon className="w-4 h-4" />
                {target.label}
              </div>
            ))}
          </div>
        </m.div>

        {/* Kernpunten */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto mb-10 text-left">
          {features.map((item, i) => (
            <m.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary-violet/10 to-primary-blue/5 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-4 h-4 text-primary-violet" />
              </div>
              <span className="text-sm text-slate-600 leading-relaxed pt-1.5">{item.text}</span>
            </m.div>
          ))}
        </div>

        <Button
          size="lg"
          className="bg-gradient-to-r from-primary-violet to-primary-blue hover:brightness-110 shadow-lg shadow-primary-violet/20 text-white font-semibold px-8"
          asChild
        >
          <Link href={ctaHref}>
            {ctaLabel}<ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
