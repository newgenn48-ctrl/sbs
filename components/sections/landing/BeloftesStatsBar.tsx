'use client'

import { m, animate } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import type { LucideIcon } from 'lucide-react'
import { useReducedAmbient } from '@/lib/useMobile'

export interface StatItem {
  icon: LucideIcon
  stat: string
  statLabel: string
  title: string
  description: string
}

function AnimatedNumber({ value, suffix = '' }: { value: string | number; suffix?: string }) {
  const num = typeof value === 'number' ? value : parseInt(value as string)
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isNaN(num)) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        animate(0, num, { duration: 1.5, ease: 'easeOut', onUpdate: (v) => setCount(Math.round(v)) })
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [num])

  if (isNaN(num)) return <span>{value}</span>
  return <span ref={ref}>{count}{suffix}</span>
}

interface Props {
  stats: StatItem[]
}

/**
 * Horizontal stats-bar op dark achtergrond.
 * 4 items met icoon, grote gradient stat, uppercase label, korte beschrijving.
 * Gescheiden door gradient hairlines. Hoekige bottom-edge via dark-edge-bottom.
 */
export default function BeloftesStatsBar({ stats }: Props) {
  const reduced = useReducedAmbient()
  return (
    <section className="bg-[#0B1121] pt-10 sm:pt-12 pb-14 sm:pb-20 relative overflow-hidden noise-overlay dark-edge-bottom">
      <div className="absolute inset-0 bg-dot-pattern opacity-40" />
      <m.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-[500px] h-[60vw] max-h-[500px] rounded-full blur-[70px] md:blur-[120px] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.3) 0%, rgba(124,58,237,0.15) 50%, transparent 70%)' }}
        animate={reduced ? undefined : { scale: [1, 1.05, 1] }}
        transition={reduced ? undefined : { duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 relative">
          {stats.map((item, index) => (
            <m.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="relative px-3 sm:px-5 py-5 sm:py-6 text-center group"
            >
              {(index === 0 || index === 2) && (
                <div className="absolute top-5 bottom-5 right-0 w-px bg-gradient-to-b from-transparent via-white/[0.1] to-transparent" />
              )}
              {index === 1 && (
                <div className="hidden lg:block absolute top-5 bottom-5 right-0 w-px bg-gradient-to-b from-transparent via-white/[0.1] to-transparent" />
              )}
              {index < 2 && (
                <div className="lg:hidden absolute left-4 right-4 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent" />
              )}

              <div className="inline-flex w-8 h-8 sm:w-9 sm:h-9 mb-2.5 rounded-lg bg-gradient-to-br from-primary-blue/20 to-primary-violet/15 items-center justify-center group-hover:scale-110 group-hover:from-primary-blue/35 group-hover:to-primary-violet/25 transition-all duration-500 ease-out">
                <item.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-primary-violet transition-transform duration-500 group-hover:rotate-[-4deg]" />
              </div>

              <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gradient tracking-tighter mb-1 leading-none">
                <AnimatedNumber value={item.stat} />
              </p>

              <p className="text-xs uppercase tracking-[0.2em] text-violet-300 font-semibold mb-2">
                {item.statLabel}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-snug max-w-[200px] mx-auto">
                {item.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
