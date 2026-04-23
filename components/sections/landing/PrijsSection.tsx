'use client'

import { m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

export interface ConfidencePoint {
  title: string
  description: string
}

interface Props {
  sectionNumber: string // "/ 06"
  eyebrow?: string // default: "Investering"
  price: string // "Vanaf €585"
  priceDescription: string // "Professionele website volledig op maat (excl. BTW)"
  ctaLabel: string
  ctaHref: string
  ctaSubtext?: string // "Eerste ontwerp binnen 24 uur — geheel vrijblijvend."
  riskReversal: string[] // e.g. ["Eerste ontwerp gratis", "Niet tevreden = geen kosten"]
  scarcity?: string // "Beperkt aantal projecten per maand"
  confidenceTitle: React.ReactNode // "Wat u betaalt, krijgt u. Geen meer, geen minder."
  confidenceEyebrow?: string // "HELDERE AFSPRAAK"
  confidencePoints: ConfidencePoint[]
  confidenceQuote?: string // "Wat we afspreken, betaalt u. Niks meer."
}

/**
 * Prijs-sectie — dark met hoekige edges, risk-reversal badge, scarcity pill,
 * groot prijsbedrag en Heldere afspraak confidence-card rechts.
 */
export default function PrijsSection({
  sectionNumber,
  eyebrow = 'Investering',
  price,
  priceDescription,
  ctaLabel,
  ctaHref,
  ctaSubtext,
  riskReversal,
  scarcity,
  confidenceTitle,
  confidenceEyebrow = 'Heldere afspraak',
  confidencePoints,
  confidenceQuote,
}: Props) {
  return (
    <section className="relative">
      <div className="bg-[#0B1121] text-white pt-24 sm:pt-32 pb-24 sm:pb-32 relative overflow-hidden noise-overlay dark-edge-both">
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <m.div
          className="absolute top-0 right-0 w-[50vw] max-w-[400px] h-[50vw] max-h-[400px] rounded-full blur-[120px] opacity-25"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%)' }}
          animate={{ x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
          {/* Risk-reversal badge */}
          {riskReversal.length > 0 && (
            <m.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-10 sm:mb-14 px-4 py-2.5 mx-auto w-fit rounded-full bg-emerald-500/10 border border-emerald-500/25 backdrop-blur-sm"
            >
              {riskReversal.map((item, i) => (
                <span key={item} className="flex items-center gap-x-5 text-xs sm:text-sm text-emerald-300 font-semibold">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    {item}
                  </span>
                  {i < riskReversal.length - 1 && <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-emerald-500/40" />}
                </span>
              ))}
            </m.div>
          )}

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <m.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs font-medium text-slate-500 tracking-wider">{sectionNumber}</span>
                <span className="h-px w-8 bg-slate-600" />
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">{eyebrow}</p>
              </div>
              <p className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-gradient mb-3 tracking-tight">{price}</p>
              <p className="text-slate-400 text-sm sm:text-base mb-6 leading-relaxed">{priceDescription}</p>

              {scarcity && (
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400" />
                  </span>
                  <span className="text-xs font-semibold text-amber-300">{scarcity}</span>
                </div>
              )}

              <Button
                size="lg"
                className="bg-[#FFFDF8] text-[#0B1121] hover:bg-[#FFFCF2] font-semibold px-8 shadow-sm w-full sm:w-auto flex"
                asChild
              >
                <Link href={ctaHref}>{ctaLabel}<ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
              {ctaSubtext && <p className="text-sm text-slate-400 mt-4">{ctaSubtext}</p>}
            </m.div>

            <m.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div className="relative rounded-2xl p-6 sm:p-8 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm">
                <div className="absolute -top-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <p className="text-xs uppercase tracking-[0.2em] text-emerald-300 font-semibold mb-5">{confidenceEyebrow}</p>

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight leading-[1.2] mb-6">
                  {confidenceTitle}
                </h3>

                <div className="space-y-4">
                  {confidencePoints.map((pt) => (
                    <div key={pt.title} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-base font-semibold text-white mb-1">{pt.title}</p>
                        <p className="text-sm text-slate-300 leading-relaxed">{pt.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {confidenceQuote && (
                  <div className="mt-6 pt-5 border-t border-white/[0.06]">
                    <p className="text-sm text-slate-300 leading-relaxed italic text-center">
                      “{confidenceQuote}”
                    </p>
                  </div>
                )}
              </div>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}
