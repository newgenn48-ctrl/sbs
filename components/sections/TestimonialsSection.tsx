'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import Image from 'next/image'

const guarantees = [
  {
    icon: "🎯",
    title: "Persoonlijke Aanpak",
    description: "Direct contact met de eigenaar. Geen callcenters, geen wachtlijsten. Jij spreekt altijd met iemand die jouw zaak kent.",
    highlight: "Binnen 1 uur persoonlijk contact",
    color: "quantum-blue"
  },
  {
    icon: "💰",
    title: "Transparante Prijzen",
    description: "Geen verborgen kosten, geen lange contracten. Vanaf €84/maand weet je precies waar je aan toe bent.",
    highlight: "30 dagen geld-terug-garantie",
    color: "quantum-green"
  },
  {
    icon: "🚀",
    title: "Landelijke Dekking",
    description: "Actief door heel Nederland. Remote support en on-site bezoeken waar nodig. Nederlandse markt specialist.",
    highlight: "Gratis kennismakingsgesprek",
    color: "quantum-purple"
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Waarom Kiezen Voor <span className="text-gradient">Start Beheer?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Als startup begrijpen wij de uitdagingen van groeiende bedrijven. Daarom bieden wij meer dan alleen service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="glass-effect p-8 rounded-2xl flex flex-col border-l-4 border-quantum-blue"
            >
              <div className="text-4xl mb-4">{guarantee.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{guarantee.title}</h3>
              <p className="text-gray-300 mb-6 flex-grow">{guarantee.description}</p>
              <div className={`inline-flex items-center px-4 py-2 rounded-full bg-${guarantee.color}/20 text-${guarantee.color} text-sm font-semibold`}>
                ✓ {guarantee.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
