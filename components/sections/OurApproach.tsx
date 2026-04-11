'use client'

import { m } from 'framer-motion'
import { MessageSquare, FileSearch, Rocket, HeartHandshake, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const processSteps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Kennismaking',
    subtitle: 'Vrijblijvend gesprek',
    description: 'We starten met een persoonlijk gesprek om uw bedrijf, doelen en uitdagingen te begrijpen.',
    highlights: ['Gratis adviesgesprek', 'Analyse huidige situatie', 'Doelen in kaart'],
  },
  {
    icon: FileSearch,
    step: '02',
    title: 'Strategie',
    subtitle: 'Plan op maat',
    description: 'Op basis van onze analyse ontwikkelen we een helder plan met concrete stappen.',
    highlights: ['Duidelijke offerte', 'Realistische planning', 'Geen verrassingen'],
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Implementatie',
    subtitle: 'Professionele uitvoering',
    description: 'We voeren het plan vakkundig uit met duidelijke communicatie en regelmatige updates.',
    highlights: ['Vaste contactpersoon', 'Wekelijkse updates', 'Agile werkwijze'],
  },
  {
    icon: HeartHandshake,
    step: '04',
    title: 'Partnerschap',
    subtitle: 'Blijvende ondersteuning',
    description: 'Na oplevering blijven we uw partner voor ondersteuning, optimalisatie en groei.',
    highlights: ['Continue support', 'Proactief beheer', 'Groei begeleiding'],
  },
]

export default function OurApproach() {
  return (
    <section className="py-24 relative bg-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <m.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-emerald/10 border border-primary-emerald/20 text-primary-emerald text-sm font-medium">
            Onze Werkwijze
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-slate-900">
            Van eerste contact tot{' '}
            <span className="text-gradient">langdurig partnerschap</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Een transparant proces waarbij u altijd weet waar u aan toe bent. Geen verrassingen, wel resultaat.
          </p>
        </m.header>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-blue via-primary-violet to-primary-emerald hidden md:block" />

            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <m.article
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="relative flex gap-6 md:gap-8 group"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center group-hover:border-primary-blue/40 transition-colors shadow-sm">
                      <step.icon className="w-7 h-7 text-primary-blue" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-primary-blue to-primary-violet text-white text-xs font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  <div className="flex-1 bg-white p-6 rounded-2xl border border-slate-200 group-hover:border-primary-blue/20 hover:shadow-md transition-all shadow-sm">
                    <div className="mb-3">
                      <h3 className="text-xl font-display font-bold text-slate-900">{step.title}</h3>
                      <p className="text-sm text-slate-500">{step.subtitle}</p>
                    </div>
                    <p className="text-slate-600 mb-4 leading-relaxed">{step.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {step.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-flex items-center px-3 py-1.5 bg-primary-blue/8 text-primary-blue text-xs font-medium rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </m.article>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-12"
        >
          Stap 1 is altijd gratis en vrijblijvend — u zit nergens aan vast.
        </m.p>
      </div>
    </section>
  )
}
