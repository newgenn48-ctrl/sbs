'use client'

import { m } from 'framer-motion'

const reasons = [
  { title: 'Eén Vast Aanspreekpunt', description: 'U spreekt altijd met dezelfde persoon die uw bedrijf kent.' },
  { title: 'Alles Onder Één Dak', description: 'IT, websites, AI en marketing. Geen meerdere leveranciers.' },
  { title: 'Focus op ZZP & MKB', description: 'Praktische oplossingen, geen enterprise-complexiteit.' },
  { title: 'Transparante Tarieven', description: 'Duidelijke prijzen vooraf. Geen verborgen kosten.' },
]

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative bg-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-violet/10 border border-primary-violet/20 text-primary-violet text-sm font-medium">
            Waarom Start Beheer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-slate-900">
            Waarvoor u bij ons{' '}
            <span className="text-gradient">terecht kunt.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vier principes die bepalen hoe wij met u werken.
          </p>
        </m.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <m.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-blue/20 hover:bg-white transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-primary-blue font-display font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 mb-1.5">{reason.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
