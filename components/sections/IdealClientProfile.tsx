'use client'

import { motion } from 'framer-motion'
import { Building2, User, Briefcase, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import SectionContainer, { SectionHeader, PremiumCard } from '@/components/ui/SectionContainer'
import IconBox from '@/components/ui/IconBox'

const clientTypes = [
  {
    icon: User,
    title: 'ZZP\'ers',
    description: 'Zelfstandig professionals die willen focussen op hun expertise, niet op IT-problemen.',
    needs: [
      'Betrouwbare IT-ondersteuning',
      'Professionele website',
      'Meer zichtbaarheid online',
    ],
    color: 'blue' as const,
  },
  {
    icon: Building2,
    title: 'MKB Bedrijven',
    description: 'Groeiende bedrijven (2-50 medewerkers) die hun IT willen professionaliseren.',
    needs: [
      'IT beheer uitbesteden',
      'Microsoft 365 implementatie',
      'Cybersecurity versterken',
    ],
    color: 'purple' as const,
  },
  {
    icon: Briefcase,
    title: 'Startups',
    description: 'Jonge bedrijven die snel willen schalen met de juiste digitale infrastructuur.',
    needs: [
      'Schaalbare IT-oplossingen',
      'Webapplicatie ontwikkeling',
      'AI & automatisering',
    ],
    color: 'green' as const,
  },
]

const idealFit = [
  'U wilt één betrouwbare IT-partner in plaats van meerdere leveranciers',
  'U zoekt persoonlijk contact, geen grote helpdesk waar u een nummer bent',
  'U wilt duidelijke prijzen en geen verborgen kosten',
  'U heeft behoefte aan proactieve ondersteuning, niet alleen brandjes blussen',
]

export default function IdealClientProfile() {
  return (
    <SectionContainer variant="dark" withGlow glowColor="purple">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Voor Wie"
          badgeColor="purple"
          title="Wij Helpen"
          titleHighlight="Ondernemers Zoals U"
          description="Onze diensten zijn specifiek afgestemd op zelfstandigen en het midden- en kleinbedrijf."
        />

        {/* Client Types Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PremiumCard className="p-6 sm:p-8 h-full">
                <IconBox
                  icon={client.icon}
                  color={client.color}
                  size="lg"
                  variant="solid"
                  className="mb-6"
                />

                <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                  {client.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {client.description}
                </p>

                <div className="space-y-3">
                  {client.needs.map((need) => (
                    <div key={need} className="flex items-center gap-2 text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-quantum-green flex-shrink-0" />
                      <span>{need}</span>
                    </div>
                  ))}
                </div>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* Ideal Fit Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <PremiumCard hoverable={false} className="p-8 sm:p-10 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <IconBox
                icon={TrendingUp}
                color="green"
                size="md"
                variant="solid"
              />
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                U bent bij ons aan het juiste adres als:
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {idealFit.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-quantum-blue to-quantum-purple rounded-full text-white font-medium hover:shadow-lg hover:shadow-quantum-blue/25 transition-all duration-300 group"
              >
                <span>Ontdek wat wij voor u kunnen betekenen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </PremiumCard>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
