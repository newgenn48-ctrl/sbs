'use client'

import { motion } from 'framer-motion'
import { MessageSquare, FileSearch, Rocket, HeartHandshake, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionContainer, { SectionHeader, PremiumCard } from '@/components/ui/SectionContainer'
import IconBox from '@/components/ui/IconBox'
import { NumberIconBox } from '@/components/ui/IconBox'

const processSteps = [
  {
    icon: MessageSquare,
    number: 1,
    title: 'Kennismaking',
    subtitle: 'Vrijblijvend gesprek',
    description: 'We starten met een persoonlijk gesprek om uw bedrijf, doelen en uitdagingen te begrijpen.',
    highlights: ['Gratis adviesgesprek', 'Analyse huidige situatie', 'Doelen in kaart'],
    color: 'blue' as const,
  },
  {
    icon: FileSearch,
    number: 2,
    title: 'Strategie',
    subtitle: 'Plan op maat',
    description: 'Op basis van onze analyse ontwikkelen we een helder plan met concrete stappen.',
    highlights: ['Duidelijke offerte', 'Realistische planning', 'Geen verrassingen'],
    color: 'purple' as const,
  },
  {
    icon: Rocket,
    number: 3,
    title: 'Implementatie',
    subtitle: 'Professionele uitvoering',
    description: 'We voeren het plan vakkundig uit met duidelijke communicatie en regelmatige updates.',
    highlights: ['Vaste contactpersoon', 'Wekelijkse updates', 'Agile werkwijze'],
    color: 'green' as const,
  },
  {
    icon: HeartHandshake,
    number: 4,
    title: 'Partnerschap',
    subtitle: 'Blijvende ondersteuning',
    description: 'Na oplevering blijven we uw partner voor ondersteuning, optimalisatie en groei.',
    highlights: ['Continue support', 'Proactief beheer', 'Groei begeleiding'],
    color: 'orange' as const,
  },
]

const tagColors = {
  blue: 'bg-quantum-blue/10 text-quantum-blue',
  purple: 'bg-quantum-purple/10 text-quantum-purple',
  green: 'bg-quantum-green/10 text-quantum-green',
  orange: 'bg-quantum-orange/10 text-quantum-orange',
}

export default function OurApproach() {
  return (
    <SectionContainer variant="default" withGlow glowColor="green">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Onze Werkwijze"
          badgeColor="green"
          title="Van Eerste Contact tot"
          titleHighlight="Langdurig Partnerschap"
          description="Een transparant proces waarbij u altijd weet waar u aan toe bent. Geen verrassingen, wel resultaat."
        />

        {/* Process Steps Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <PremiumCard className="p-6 sm:p-8 h-full">
                  {/* Step Number Background */}
                  <div className="absolute -top-4 -right-4 text-8xl font-display font-bold text-white/[0.03] select-none">
                    0{step.number}
                  </div>

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6 relative">
                    <div className="relative">
                      <IconBox
                        icon={step.icon}
                        color={step.color}
                        size="lg"
                        variant="solid"
                      />
                      {/* Number badge */}
                      <div className="absolute -top-2 -right-2">
                        <NumberIconBox number={step.number} color={step.color} size="sm" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm text-gray-400">{step.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed relative">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 relative">
                    {step.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className={`inline-flex items-center px-3 py-1 ${tagColors[step.color]} text-xs font-medium rounded-full`}
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </PremiumCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <PremiumCard hoverable={false} className="p-8 sm:p-10 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-4">
              Klaar om te starten?
            </h3>
            <p className="text-gray-400 mb-6">
              Plan een vrijblijvend kennismakingsgesprek en ontdek hoe wij uw bedrijf kunnen helpen groeien.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-quantum-blue to-quantum-purple rounded-full text-white font-medium hover:shadow-lg hover:shadow-quantum-blue/25 transition-all duration-300 group"
            >
              <span>Plan Kennismaking</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </PremiumCard>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
