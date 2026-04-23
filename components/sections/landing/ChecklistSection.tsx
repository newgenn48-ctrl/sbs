'use client'

import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

function handleCardMouseMove(e: React.MouseEvent<HTMLDivElement>) {
  const rect = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`)
  e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`)
}

export interface ChecklistCategory {
  icon: LucideIcon
  category: string
  color: string // Tailwind gradient classes like 'from-primary-blue/10 to-primary-blue/5'
  iconColor: string // Tailwind text color like 'text-primary-blue'
  items: string[]
}

interface Props {
  sectionNumber: string // "/ 02"
  eyebrow: string // "Wat U Krijgt"
  title: React.ReactNode // JSX for the title (supports gradient spans)
  description: string
  categories: ChecklistCategory[]
  footer?: {
    strong: string
    text: string
    italic: string
  }
}

/**
 * Checklist-sectie met 6 categorieën × 5 items in card-modern-cards.
 * Elke card heeft cursor-volgende spotlight + hover top-accent-lijn.
 */
export default function ChecklistSection({
  sectionNumber,
  eyebrow,
  title,
  description,
  categories,
  footer,
}: Props) {
  return (
    <section className="pt-4 sm:pt-8 pb-20 sm:pb-28 lg:pb-36">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
        <ScrollTrigger>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs font-medium text-primary-blue/70 tracking-wider">{sectionNumber}</span>
              <span className="h-px w-8 bg-primary-blue/30" />
              <p className="text-xs uppercase tracking-[0.2em] text-primary-blue font-medium">{eyebrow}</p>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-[1.15] tracking-tight">
              {title}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
        </ScrollTrigger>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {categories.map((cat, i) => (
            <m.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              onMouseMove={handleCardMouseMove}
              className="card-modern p-6 sm:p-7 group"
            >
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-slate-100 relative">
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center flex-shrink-0 group-hover:scale-[1.1] transition-all duration-500 ease-out group-hover:shadow-[0_4px_14px_-4px_rgba(37,99,235,0.3)]`}>
                  <cat.icon className={`w-5 h-5 ${cat.iconColor} transition-transform duration-500 group-hover:rotate-[-4deg]`} />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">{cat.category}</h3>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  <ArrowRight className={`w-4 h-4 ${cat.iconColor}`} />
                </div>
              </div>
              <ul className="space-y-2.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed transition-colors duration-300 group-hover:text-slate-700">
                    <CheckCircle2 className={`w-4 h-4 ${cat.iconColor} flex-shrink-0 mt-0.5`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </m.div>
          ))}
        </div>

        {footer && (
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 sm:mt-12 text-center"
          >
            <p className="text-sm text-slate-500 mb-4">
              <span className="text-slate-700 font-semibold">{footer.strong}</span> {footer.text}
            </p>
            <p className="text-sm text-slate-500 italic max-w-xl mx-auto">
              {footer.italic}
            </p>
          </m.div>
        )}
      </div>
    </section>
  )
}
