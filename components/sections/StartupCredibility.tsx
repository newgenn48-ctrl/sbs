'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Users, MapPin, Clock, CheckCircle } from 'lucide-react'

const credentials = [
  {
    icon: MapPin,
    title: "Heel Nederland",
    description: "Landelijke dienstverlening met Nederlandse markt kennis"
  },
  {
    icon: Shield,
    title: "Volledig Verzekerd",
    description: "Professionele aansprakelijkheidsverzekering"
  },
  {
    icon: Clock,
    title: "Snelle Response",
    description: "Binnen 1 uur persoonlijk contact"
  },
  {
    icon: CheckCircle,
    title: "30 Dagen Garantie",
    description: "Niet tevreden? Geld terug, geen vragen"
  }
]

const stats = [
  { number: "7+", label: "Jaar IT Ervaring" },
  { number: "€84", label: "Vanaf per maand" },
  { number: "24/7", label: "Monitoring" },
  { number: "100%", label: "Nederlandse servers" }
]

export default function StartupCredibility() {
  return (
    <section className="py-16 bg-cyber-dark/50">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-quantum-blue mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Credentials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((credential, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <credential.icon className="h-8 w-8 text-quantum-blue mx-auto mb-3" />
              <h4 className="font-semibold text-white mb-2">{credential.title}</h4>
              <p className="text-sm text-gray-400">{credential.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-300 mb-4">
            Klaar om je IT zorgeloos te maken?
          </p>
          <div className="inline-flex items-center space-x-2 text-quantum-green">
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-semibold">
              Gratis kennismakingsgesprek van 30 minuten
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}