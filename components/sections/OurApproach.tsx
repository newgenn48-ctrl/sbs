'use client'

import { motion } from 'framer-motion'
import { MessageSquare, FileSearch, Rocket, HeartHandshake, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

const processSteps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Kennismaking',
    subtitle: 'Vrijblijvend gesprek',
    description: 'We starten met een persoonlijk gesprek om uw bedrijf, doelen en uitdagingen te begrijpen.',
    highlights: ['Gratis adviesgesprek', 'Analyse huidige situatie', 'Doelen in kaart'],
    color: 'quantum-blue',
  },
  {
    icon: FileSearch,
    step: '02',
    title: 'Strategie',
    subtitle: 'Plan op maat',
    description: 'Op basis van onze analyse ontwikkelen we een helder plan met concrete stappen.',
    highlights: ['Duidelijke offerte', 'Realistische planning', 'Geen verrassingen'],
    color: 'quantum-purple',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Implementatie',
    subtitle: 'Professionele uitvoering',
    description: 'We voeren het plan vakkundig uit met duidelijke communicatie en regelmatige updates.',
    highlights: ['Vaste contactpersoon', 'Wekelijkse updates', 'Agile werkwijze'],
    color: 'quantum-green',
  },
  {
    icon: HeartHandshake,
    step: '04',
    title: 'Partnerschap',
    subtitle: 'Blijvende ondersteuning',
    description: 'Na oplevering blijven we uw partner voor ondersteuning, optimalisatie en groei.',
    highlights: ['Continue support', 'Proactief beheer', 'Groei begeleiding'],
    color: 'quantum-orange',
  },
]

export default function OurApproach() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle color accent only */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-quantum-green/10 via-transparent to-transparent" />

      {/* Top decorative line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-quantum-green to-transparent rounded-full" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
            Onze Werkwijze
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Van Eerste Contact tot{' '}
            <span className="text-gradient">Langdurig Partnerschap</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Een transparant proces waarbij u altijd weet waar u aan toe bent. Geen verrassingen, wel resultaat.
          </p>
        </motion.header>

        {/* Process Steps Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative glass-effect p-6 sm:p-8 rounded-2xl border border-${step.color}/20 hover:border-${step.color}/40 transition-all group h-full overflow-hidden`}
              >
                {/* Step Number Background */}
                <div className="absolute -top-4 -right-4 text-8xl font-display font-bold text-white/[0.03] select-none pointer-events-none">
                  {step.step}
                </div>

                {/* Header */}
                <div className="flex items-start gap-4 mb-6 relative z-10">
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-2xl bg-${step.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <step.icon className={`w-8 h-8 text-${step.color}`} />
                    </div>
                    {/* Step badge */}
                    <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full bg-${step.color} text-white text-xs font-bold flex items-center justify-center`}>
                      {step.step}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-400">{step.subtitle}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed relative z-10">
                  {step.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {step.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className={`inline-flex items-center px-3 py-1.5 bg-${step.color}/10 text-${step.color} text-xs font-medium rounded-full`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-3xl mx-auto text-center glass-effect p-8 sm:p-12 rounded-3xl border border-quantum-blue/20">
            <Badge className="mb-4 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
              Gratis & Vrijblijvend
            </Badge>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Klaar om te starten?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Plan een vrijblijvend kennismakingsgesprek en ontdek hoe wij uw bedrijf kunnen helpen groeien.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-quantum-blue to-quantum-purple rounded-full text-white font-medium hover:shadow-lg hover:shadow-quantum-blue/25 transition-all duration-300 group"
            >
              <span>Plan Kennismaking</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
