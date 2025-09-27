'use client'

import { motion } from 'framer-motion'
import { User, Check } from 'lucide-react'

export default function FounderSection() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="glass-effect p-12 rounded-3xl border border-quantum-blue/10">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 items-center">
            {/* Placeholder for a professional photo */}
            <motion.div 
              className="md:col-span-1 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative w-64 h-64 rounded-full flex items-center justify-center overflow-hidden holographic-logo-bg">
                <span className="font-display text-8xl font-bold text-gradient tracking-wider relative z-10">
                  SBS
                </span>
                <div className="scanline" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="text-gradient">Gebouwd voor de Toekomst</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Wij zijn een nieuw collectief van digitale architecten, ongebonden door verouderde systemen. Onze missie is om de technologische ruggengraat te bouwen voor de marktleiders van morgen. We verwerpen de status quo en kiezen voor een radicale, resultaatgerichte aanpak die is ontworpen voor het digitale tijdperk.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-400">
                  <Check className="w-5 h-5 text-quantum-green" />
                  <span>Gedreven door innovatie, niet door conventie</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Check className="w-5 h-5 text-quantum-green" />
                  <span>Strategieën die zijn ontworpen voor exponentiële groei</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Check className="w-5 h-5 text-quantum-green" />
                  <span>Een partnerschap gebaseerd op een gedeelde visie</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
