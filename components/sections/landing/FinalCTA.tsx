'use client'

import { m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useReducedAmbient } from '@/lib/useMobile'

interface Props {
  title: React.ReactNode // JSX, supports gradient spans and <br/>
  ctaLabel: string
  ctaHref: string
}

/**
 * Emotionele finale — grote titel + één knop.
 * Dark bg met angled top-edge. Geen duplicatie met Contact-sectie.
 */
export default function FinalCTA({ title, ctaLabel, ctaHref }: Props) {
  const reduced = useReducedAmbient()
  return (
    <section className="bg-[#0B1121] text-white relative overflow-hidden noise-overlay dark-edge-top mt-16 sm:mt-20">
      <div className="absolute inset-0 bg-dot-pattern opacity-50" />
      <m.div
        className="absolute bottom-0 left-0 w-[50vw] max-w-[300px] h-[50vw] max-h-[300px] rounded-full blur-[50px] md:blur-[80px] opacity-25"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)' }}
        animate={reduced ? undefined : { x: [0, -10, 0] }}
        transition={reduced ? undefined : { duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <m.div
        className="absolute top-0 right-0 w-[40vw] max-w-[250px] h-[40vw] max-h-[250px] rounded-full blur-[60px] md:blur-[100px] opacity-20"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.2) 0%, transparent 70%)' }}
        animate={reduced ? undefined : { x: [0, 15, 0] }}
        transition={reduced ? undefined : { duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 py-16 sm:py-24 lg:py-28 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 leading-[1.1] tracking-tight">
          {title}
        </h2>
        <Button
          size="lg"
          className="bg-[#FFFDF8] text-[#0B1121] hover:bg-[#FFFCF2] font-semibold px-8 shadow-sm w-full sm:w-auto"
          asChild
        >
          <Link href={ctaHref}>
            {ctaLabel}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
