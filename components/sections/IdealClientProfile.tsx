'use client'

import { motion } from 'framer-motion'
import { Briefcase, Rocket, Building } from 'lucide-react'

const profiles = [
  {
    icon: Briefcase,
    title: "De MKB'er & ZZP'er",
    description: 'U wilt zich focussen op uw kernactiviteiten, niet op IT-randzaken. U zoekt een betrouwbare partner die proactief meedenkt en uw volledige digitale infrastructuur beheert.'
  },
  {
    icon: Rocket,
    title: 'De Ambitieuze Starter',
    description: 'U heeft een vliegende start nodig met een professionele website, schaalbare IT en een marketingstrategie die direct leads genereert. Flexibiliteit en expertise zijn cruciaal.'
  },
  {
    icon: Building,
    title: 'Het Gevestigde Bedrijf',
    description: 'Uw huidige systemen zijn verouderd en uw marketing levert niet genoeg op. U zoekt een frisse, deskundige blik om te moderniseren, automatiseren en weer te groeien.'
  }
]

export default function IdealClientProfile() {
  return (
    <section className="py-20 relative bg-cyber-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Voor Wie Is Dit Ideaal?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Wij helpen ondernemers die technologie als een kans zien, niet als een kostenpost.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl border border-quantum-blue/10 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-quantum-blue/20 to-quantum-purple/20 mb-6">
                <profile.icon className="h-8 w-8 text-quantum-blue" />
              </div>
              <h3 className="text-xl font-display font-bold mb-3">
                {profile.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {profile.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
