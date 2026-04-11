'use client'

import { m } from 'framer-motion'
import { Building2, User, Briefcase, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const clientTypes = [
  {
    icon: User,
    title: "ZZP'ers",
    description: 'Zelfstandig professionals die willen focussen op hun expertise, niet op IT-problemen.',
    needs: ['Betrouwbare IT-ondersteuning', 'Professionele website', 'Meer zichtbaarheid online'],
    color: 'blue' as const,
  },
  {
    icon: Building2,
    title: 'MKB Bedrijven',
    description: 'Groeiende bedrijven (2-50 medewerkers) die hun IT willen professionaliseren.',
    needs: ['IT beheer uitbesteden', 'Microsoft 365 implementatie', 'Cybersecurity versterken'],
    color: 'violet' as const,
  },
  {
    icon: Briefcase,
    title: 'Startups',
    description: 'Jonge bedrijven die snel willen schalen met de juiste digitale infrastructuur.',
    needs: ['Schaalbare IT-oplossingen', 'Webapplicatie ontwikkeling', 'AI & automatisering'],
    color: 'emerald' as const,
  },
]

const colorMap = {
  blue: {
    border: 'border-primary-blue/20 hover:border-primary-blue/40',
    bg: 'bg-primary-blue/10',
    text: 'text-primary-blue',
  },
  violet: {
    border: 'border-primary-violet/20 hover:border-primary-violet/40',
    bg: 'bg-primary-violet/10',
    text: 'text-primary-violet',
  },
  emerald: {
    border: 'border-primary-emerald/20 hover:border-primary-emerald/40',
    bg: 'bg-primary-emerald/10',
    text: 'text-primary-emerald',
  },
}

const idealFit = [
  'U wilt één betrouwbare IT-partner in plaats van meerdere leveranciers',
  'U zoekt persoonlijk contact, geen grote helpdesk waar u een nummer bent',
  'U wilt duidelijke prijzen en geen verborgen kosten',
  'U heeft behoefte aan proactieve ondersteuning, niet alleen brandjes blussen',
]

export default function IdealClientProfile() {
  return (
    <section className="py-24 relative bg-slate-50">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <m.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-violet/10 border border-primary-violet/20 text-primary-violet text-sm font-medium">
            Voor Wie
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-slate-900">
            Wij helpen{' '}
            <span className="text-gradient">ondernemers zoals u</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Onze diensten zijn specifiek afgestemd op zelfstandigen en het midden- en kleinbedrijf.
          </p>
        </m.header>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-16">
          {clientTypes.map((client, index) => (
            <m.article
              key={client.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-white p-6 sm:p-8 rounded-2xl border ${colorMap[client.color].border} shadow-sm hover:shadow-md transition-all group h-full`}
            >
              <div className={`w-14 h-14 rounded-xl ${colorMap[client.color].bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <client.icon className={`w-7 h-7 ${colorMap[client.color].text}`} />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">{client.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">{client.description}</p>
              <div className="space-y-3">
                {client.needs.map((need) => (
                  <div key={need} className="flex items-center gap-2 text-sm text-slate-600">
                    <CheckCircle2 className={`w-4 h-4 ${colorMap[client.color].text} flex-shrink-0`} />
                    <span>{need}</span>
                  </div>
                ))}
              </div>
            </m.article>
          ))}
        </div>

        <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="max-w-4xl mx-auto relative p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary-emerald/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary-emerald" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
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
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-primary-emerald/30 transition-all"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </m.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-violet rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary-blue/25 transition-all duration-300 group"
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
