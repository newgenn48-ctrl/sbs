'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { 
  Sparkles,
  CheckCircle2,
  Layers,
  BrainCircuit,
  TrendingUp,
  ShieldCheck
} from 'lucide-react'

const principles = [
  {
    icon: BrainCircuit,
    title: "AI-Native",
    description: "Onze systemen zijn vanaf de kern ontworpen met AI, voor ongekende efficiëntie."
  },
  {
    icon: Layers,
    title: "Modulaire Architectuur",
    description: "Flexibele, schaalbare oplossingen die meegroeien met uw ambities."
  },
  {
    icon: TrendingUp,
    title: "Data-Gedreven Groei",
    description: "Elke beslissing wordt ondersteund door data voor maximaal rendement."
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security",
    description: "Een proactieve, geïntegreerde beveiligingslaag in alles wat we bouwen."
  }
]

const commitments = [
  "Radicale transparantie in processen en prijzen",
  "Geen bureaucratische rompslomp, directe toegang tot experts",
  "Flexibele contracten die passen bij een startup-mentaliteit",
  "Een partnerschap gericht op gezamenlijke innovatie",
  " obsessieve focus op meetbare resultaten",
  "Continue optimalisatie als standaard"
]

export default function StartupProof() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        
        {/* Core Principles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-quantum-green/20 text-quantum-green border-quantum-green">
              <Sparkles className="w-4 h-4 mr-2" />
              Het Nieuwe Fundament
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Gebouwd voor de <span className="text-gradient">Volgende Generatie</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Wij bouwen niet voor vandaag, maar voor de technologische realiteit van morgen. 
              Dit zijn de vier pijlers waarop uw toekomstige succes rust.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="glass-effect p-8 rounded-2xl text-center border border-quantum-blue/10"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-quantum-blue/10 to-quantum-green/10 mb-5">
                  <principle.icon className="h-8 w-8 text-quantum-blue" />
                </div>
                <h3 className="text-xl font-display font-bold mb-2">{principle.title}</h3>
                <p className="text-sm text-gray-400">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitments & Risk Reversal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="glass-effect p-12 rounded-3xl border border-quantum-green/20 max-w-5xl mx-auto">
            <h3 className="text-3xl font-display font-bold mb-4 text-quantum-green">
              Onze Belofte aan Innovators
            </h3>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              Wij geloven in een nieuw soort partnerschap. Geen starre contracten, maar een flexibele, 
              transparante samenwerking die is ontworpen om u een oneerlijk voordeel te geven.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4 text-left">
              {commitments.map((commitment, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-quantum-green flex-shrink-0" />
                  <span className="text-gray-300">{commitment}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
