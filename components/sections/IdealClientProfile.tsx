'use client'

import { m } from 'framer-motion'
import { Building2, User, Briefcase, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

// Static color classes to ensure Tailwind purges correctly
const colorClasses = {
  'quantum-blue': {
    border: 'border-quantum-blue/20',
    borderHover: 'hover:border-quantum-blue/40',
    bg: 'bg-quantum-blue/10',
    text: 'text-quantum-blue',
  },
  'quantum-purple': {
    border: 'border-quantum-purple/20',
    borderHover: 'hover:border-quantum-purple/40',
    bg: 'bg-quantum-purple/10',
    text: 'text-quantum-purple',
  },
  'quantum-green': {
    border: 'border-quantum-green/20',
    borderHover: 'hover:border-quantum-green/40',
    bg: 'bg-quantum-green/10',
    text: 'text-quantum-green',
  },
} as const

type ColorKey = keyof typeof colorClasses

const clientTypes: Array<{
  icon: typeof User
  title: string
  description: string
  needs: string[]
  color: ColorKey
}> = [
  {
    icon: User,
    title: 'ZZP\'ers',
    description: 'Zelfstandig professionals die willen focussen op hun expertise, niet op IT-problemen.',
    needs: [
      'Betrouwbare IT-ondersteuning',
      'Professionele website',
      'Meer zichtbaarheid online',
    ],
    color: 'quantum-blue',
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
    color: 'quantum-purple',
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
    color: 'quantum-green',
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
    <section className="py-24 relative overflow-hidden">
      {/* Subtle color accent only */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-quantum-purple/10 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <m.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
            Voor Wie
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Wij Helpen{' '}
            <span className="text-gradient">Ondernemers Zoals U</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Onze diensten zijn specifiek afgestemd op zelfstandigen en het midden- en kleinbedrijf.
          </p>
        </m.header>

        {/* Client Types Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {clientTypes.map((client, index) => (
            <m.article
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-effect p-6 sm:p-8 rounded-2xl border ${colorClasses[client.color].border} ${colorClasses[client.color].borderHover} transition-all group h-full`}
            >
              <div className={`w-14 h-14 rounded-xl ${colorClasses[client.color].bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <client.icon className={`w-7 h-7 ${colorClasses[client.color].text}`} />
              </div>

              <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-3">
                {client.title}
              </h3>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {client.description}
              </p>

              <div className="space-y-3">
                {client.needs.map((need) => (
                  <div key={need} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 className={`w-4 h-4 ${colorClasses[client.color].text} flex-shrink-0`} />
                    <span>{need}</span>
                  </div>
                ))}
              </div>
            </m.article>
          ))}
        </div>

        {/* Ideal Fit Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-quantum-green/5 via-transparent to-quantum-blue/5 border border-white/10">
            {/* Decorative corners */}
            <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-quantum-green/30 rounded-tl-3xl" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-quantum-blue/30 rounded-br-3xl" />

            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-quantum-green/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-quantum-green" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-white">
                U bent bij ons aan het juiste adres als:
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {idealFit.map((item, index) => (
                <m.div
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-quantum-green/20 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{item}</span>
                </m.div>
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
          </div>
        </m.div>
      </div>
    </section>
  )
}
