'use client'

import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { ArrowRight, Users } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface AudienceItem {
  icon: LucideIcon
  title: string
  description: string
}

interface Props {
  sectionNumber: string // "/ 01"
  eyebrow: string // "Voor Wie"
  title: React.ReactNode
  description: string
  stickyStat?: {
    label: string // "Focus"
    value: string // "MKB & ZZP"
  }
  audiences: AudienceItem[]
  disclaimer?: string
}

/**
 * Editorial split layout — statement column (left, sticky) + numbered list met dividers (right).
 * Hover: accent-bar slide-in, titel kleurt violet, pijl schuift rechts.
 */
export default function VoorWieSection({
  sectionNumber,
  eyebrow,
  title,
  description,
  stickyStat,
  audiences,
  disclaimer,
}: Props) {
  return (
    <section className="pt-20 sm:pt-28 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24 items-start">

          {/* Links: statement column */}
          <ScrollTrigger className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-xs font-medium text-primary-violet/70 tracking-wider">{sectionNumber}</span>
              <span className="h-px w-8 bg-primary-violet/30" />
              <p className="text-xs uppercase tracking-[0.2em] text-primary-violet font-medium">{eyebrow}</p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-[1.15] tracking-tight">
              {title}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-md mb-6">
              {description}
            </p>

            {stickyStat && (
              <div className="inline-flex items-center gap-4 px-5 py-3 rounded-2xl bg-gradient-to-br from-primary-violet/5 to-primary-blue/5 border border-primary-violet/10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-violet to-primary-blue flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">{stickyStat.label}</p>
                  <p className="text-sm font-bold text-slate-900 tracking-tight">{stickyStat.value}</p>
                </div>
              </div>
            )}
          </ScrollTrigger>

          {/* Rechts: lijst met dividers */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-primary-violet/20 to-transparent hidden sm:block" />

              {audiences.map((item, i) => (
                <m.div
                  key={item.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  className="group relative flex items-start gap-5 py-5 sm:py-6 border-b border-slate-200/60 last:border-b-0 sm:pl-8 cursor-default"
                >
                  <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-0 bg-gradient-to-b from-primary-violet to-primary-blue group-hover:h-[70%] transition-all duration-500 ease-out rounded-full" />

                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="font-mono text-xs text-slate-400 w-5 font-medium">0{i + 1}</span>
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-primary-violet/10 to-primary-blue/5 flex items-center justify-center group-hover:from-primary-violet/20 group-hover:to-primary-blue/10 group-hover:scale-[1.08] group-hover:rotate-[-3deg] transition-all duration-500 ease-out">
                      <item.icon className="w-5 h-5 text-primary-violet" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0 pt-1">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1 tracking-tight group-hover:text-primary-violet transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                  </div>

                  <ArrowRight className="hidden sm:block w-4 h-4 text-slate-300 group-hover:text-primary-violet group-hover:translate-x-1 transition-all duration-300 flex-shrink-0 mt-3" />
                </m.div>
              ))}
            </div>

            {disclaimer && (
              <p className="text-sm text-slate-500 mt-8 italic pl-0 sm:pl-8">
                {disclaimer}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
