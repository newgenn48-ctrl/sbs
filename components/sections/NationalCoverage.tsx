'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Headphones, Shield, Truck, Wifi } from 'lucide-react'

const coverageFeatures = [
  {
    icon: MapPin,
    title: "Heel Nederland",
    description: "Van Groningen tot Maastricht, wij bedienen het hele land",
    stats: "20 provincies, 300+ gemeenten"
  },
  {
    icon: Clock,
    title: "24/7 Remote Support",
    description: "Problemen lossen we vaak op voordat je het doorhebt",
    stats: "Gemiddeld binnen 15 minuten"
  },
  {
    icon: Truck,
    title: "On-site Bezoeken",
    description: "Voor complexe problemen komen we naar jullie toe",
    stats: "Binnen 48 uur ter plaatse"
  },
  {
    icon: Headphones,
    title: "Nederlandse Helpdesk",
    description: "Geen callcenters in het buitenland, altijd Nederlandse support",
    stats: "Direct doorgeschakeld"
  },
  {
    icon: Wifi,
    title: "Moderne Technologie",
    description: "Remote access, cloud monitoring, proactief onderhoud",
    stats: "99.9% uptime garantie"
  },
  {
    icon: Shield,
    title: "Lokale Compliance",
    description: "AVG/GDPR conform, Nederlandse server locaties",
    stats: "100% Nederlands datacentrum"
  }
]

const majorCities = [
  "Amsterdam", "Rotterdam", "Den Haag", "Utrecht", "Eindhoven",
  "Tilburg", "Groningen", "Almere", "Breda", "Nijmegen",
  "Enschede", "Haarlem", "Arnhem", "Amersfoort", "Maastricht",
  "Leiden", "Dordrecht", "Zoetermeer", "Zwolle", "Deventer"
]

export default function NationalCoverage() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            <span className="text-gradient">Landelijke Dekking</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Waar je ook bent in Nederland, onze IT-expertise is binnen handbereik.
            Remote support, on-site bezoeken en persoonlijke service door het hele land.
          </p>
        </motion.div>

        {/* Coverage Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coverageFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect p-6 rounded-xl text-center border-l-4 border-quantum-blue"
            >
              <feature.icon className="h-12 w-12 text-quantum-blue mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-quantum-green/20 text-quantum-green text-sm font-semibold">
                {feature.stats}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cities Coverage */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-effect p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            Actief in alle <span className="text-quantum-blue">grote steden</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center">
            {majorCities.map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="py-2 px-3 bg-white/5 rounded-lg text-gray-300 hover:bg-quantum-blue/20 hover:text-quantum-blue transition-colors"
              >
                {city}
              </motion.div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-400 mt-6">
            En meer dan 300 andere gemeenten door heel Nederland
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-4 bg-cyber-dark/50 rounded-full px-6 py-3">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-quantum-green rounded-full animate-pulse"></div>
              <span className="text-quantum-green font-semibold">Online Nu</span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-white">Vraag direct een offerte aan</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}