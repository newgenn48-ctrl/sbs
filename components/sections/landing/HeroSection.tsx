'use client'

import { m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

interface Props {
  eyebrow: string // "Webdesign & Development"
  title: React.ReactNode // JSX with gradient spans
  subtitle: React.ReactNode
  ctaLabel: string
  ctaHref: string
  tags: string[] // checkmark tags under the button
  visual: React.ReactNode // right-column visual (code editor, mockup, illustration...)
  titleId?: string // for aria-labelledby
}

/**
 * Hero-sectie — dark bg met aurora + dot-pattern. 2-kolom op lg+:
 * links tekst + CTA + tags, rechts slot voor custom visual per pagina.
 */
export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  tags,
  visual,
  titleId = 'hero-title',
}: Props) {
  return (
    <section className="relative min-h-[85vh] lg:min-h-screen flex items-center text-white noise-overlay" aria-labelledby={titleId}>
      <div className="absolute inset-0 bg-[#0B1121]" />
      <div
        className="absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 85% 0%, rgba(37, 99, 235, 0.15), transparent 60%), radial-gradient(ellipse 60% 40% at 15% 100%, rgba(124, 58, 237, 0.1), transparent 60%)',
        }}
      />
      <div className="absolute inset-0 bg-dot-pattern opacity-60" />

      <div className="relative z-10 w-full px-5 sm:px-8 lg:px-12 xl:px-20 pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-36">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">

          {/* Links: tekst + CTA + tags */}
          <m.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 mb-3 font-medium">{eyebrow}</p>

            <h1 id={titleId} className="text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.75rem] font-display font-bold mb-5 leading-[1.1]">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-slate-400 mb-8 leading-relaxed max-w-md">
              {subtitle}
            </p>

            <Button size="lg" className="bg-[#FFFDF8] text-[#0B1121] hover:bg-[#FFFCF2] font-semibold px-8 shadow-sm w-full sm:w-auto" asChild>
              <Link href={ctaHref}>{ctaLabel}<ArrowRight className="ml-2 w-5 h-5" /></Link>
            </Button>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-sm">
              {tags.map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="text-slate-300 whitespace-nowrap">{t}</span>
                </span>
              ))}
            </div>
          </m.div>

          {/* Rechts: custom visual slot */}
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            {visual}
          </m.div>
        </div>
      </div>
    </section>
  )
}
