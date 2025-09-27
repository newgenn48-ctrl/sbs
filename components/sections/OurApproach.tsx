'use client'

import { motion } from 'framer-motion'
import { Scan, Pencil, Rocket, LifeBuoy } from 'lucide-react'

const steps = [
  {
    icon: Scan,
    label: 'Kennismaking & Analyse',
    description: 'We starten met een vrijblijvend gesprek om uw doelen en uitdagingen te begrijpen.'
  },
  {
    icon: Pencil,
    label: 'Strategie op Maat',
    description: 'We ontwikkelen een helder en concreet plan dat perfect aansluit op uw bedrijf.'
  },
  {
    icon: Rocket,
    label: 'Implementatie',
    description: 'We voeren het plan vakkundig uit, met duidelijke communicatie en deadlines.'
  },
  {
    icon: LifeBuoy,
    label: 'Support & Groei',
    description: 'We blijven uw partner voor ondersteuning, advies en toekomstige groei.'
  }
]

export default function OurApproach() {
  return (
    <section className="py-20 relative bg-cyber-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Onze Aanpak</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Een helder en transparant proces voor het beste resultaat.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-quantum-blue/20 to-quantum-purple/20 mb-4">
                <step.icon className="h-10 w-10 text-quantum-blue" />
              </div>
              <div className="text-lg font-semibold mb-2">
                {step.label}
              </div>
              <p className="text-gray-400 text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
