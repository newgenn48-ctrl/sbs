'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface CategoryCard {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
  bullets: string[]
  price: string
  href: string
  gradient: string // e.g. "from-primary-blue to-primary-violet"
  accent: string // e.g. "text-primary-blue"
  badge?: string // optional corner badge like "Meest gekozen"
}

interface Props {
  sectionNumber?: string
  eyebrow: string
  title: React.ReactNode
  description?: React.ReactNode
  cards: CategoryCard[]
  footer?: React.ReactNode
}

/**
 * Grid of large clickable service-cards for category hub pages.
 * Each card links to a detail page and shows icon, title, 3-4 bullets, and price.
 */
export default function CategoryCardsSection({
  sectionNumber,
  eyebrow,
  title,
  description,
  cards,
  footer,
}: Props) {
  return (
    <section className="relative py-20 sm:py-28 bg-[#FAFAF5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="mb-12 sm:mb-16 max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            {sectionNumber && (
              <span className="text-xs font-mono text-slate-400 tracking-wider">{sectionNumber}</span>
            )}
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-blue">{eyebrow}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 tracking-tight mb-4 leading-[1.1]">
            {title}
          </h2>
          {description && (
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {cards.map((card, i) => (
            <m.div
              key={card.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <Link
                href={card.href}
                className="group relative block h-full p-6 sm:p-7 bg-white border border-slate-200 rounded-2xl hover:border-slate-300 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/5 overflow-hidden"
              >
                {card.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`inline-flex items-center text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${card.gradient} text-white shadow`}>
                      {card.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-105 transition-transform`}>
                  <card.icon className="w-7 h-7 text-white" />
                </div>

                {/* Eyebrow */}
                <div className={`text-[11px] font-semibold uppercase tracking-wider ${card.accent} mb-2`}>
                  {card.eyebrow}
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 leading-tight">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed mb-5">
                  {card.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-6">
                  {card.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className={`w-4 h-4 ${card.accent} flex-shrink-0 mt-0.5`} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Footer: price + arrow */}
                <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Vanaf</div>
                    <div className="text-base font-bold text-slate-900">{card.price}</div>
                  </div>
                  <div className={`flex items-center gap-1.5 text-sm font-semibold ${card.accent} group-hover:gap-2.5 transition-all`}>
                    <span>Bekijk</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            </m.div>
          ))}
        </div>

        {footer && (
          <div className="mt-12 sm:mt-16 text-center max-w-2xl mx-auto">
            {footer}
          </div>
        )}
      </div>
    </section>
  )
}
