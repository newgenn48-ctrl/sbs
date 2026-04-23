'use client'

import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { FAQItem } from '@/components/ui/FAQItem'

export interface FAQ {
  q: string
  a: string
}

interface Props {
  sectionNumber: string // "/ 06"
  title?: React.ReactNode // default: "Veelgestelde vragen."
  eyebrow?: string // default: "Vragen"
  subtitle?: string // default: "Staat uw vraag er niet bij? Neem gerust contact op."
  faqs: FAQ[]
  color?: 'violet' | 'blue' | 'emerald' | 'warm'
}

/**
 * FAQ-sectie met accordion. Staat standaard vóór Contact-sectie (objection-handling).
 */
export default function FAQSection({
  sectionNumber,
  title = (
    <>
      Veelgestelde <span className="text-gradient">vragen.</span>
    </>
  ),
  eyebrow = 'Vragen',
  subtitle = 'Staat uw vraag er niet bij? Neem gerust contact op.',
  faqs,
  color = 'violet',
}: Props) {
  const colorMap = {
    violet: { text: 'text-primary-violet', lineBg: 'bg-primary-violet/30', mono: 'text-primary-violet/70' },
    blue: { text: 'text-primary-blue', lineBg: 'bg-primary-blue/30', mono: 'text-primary-blue/70' },
    emerald: { text: 'text-primary-emerald', lineBg: 'bg-primary-emerald/30', mono: 'text-primary-emerald/70' },
    warm: { text: 'text-primary-warm', lineBg: 'bg-primary-warm/30', mono: 'text-primary-warm/70' },
  }
  const c = colorMap[color]

  return (
    <section className="py-20 sm:py-28 lg:py-36 relative">
      <div className="divider-hairline absolute top-0 left-0 right-0" />
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-20">
        <ScrollTrigger>
          <div className="text-center mb-12 sm:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className={`h-px w-8 ${c.lineBg}`} />
              <span className={`font-mono text-xs font-medium ${c.mono} tracking-wider`}>{sectionNumber}</span>
              <span className={`h-px w-8 ${c.lineBg}`} />
            </div>
            <p className={`text-xs uppercase tracking-[0.2em] ${c.text} mb-3 font-medium`}>{eyebrow}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold mb-4 leading-[1.15] tracking-tight">
              {title}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">{subtitle}</p>
          </div>
        </ScrollTrigger>

        <div className="section-card rounded-2xl sm:rounded-3xl bg-[#FFFDF8] p-5 sm:p-8 lg:p-10">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} color={color} />
          ))}
        </div>
      </div>
    </section>
  )
}
