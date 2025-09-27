'use client'

import { motion } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Rocket,
  Users,
  Award,
  Globe,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

const values = [
  {
    icon: Rocket,
    title: 'Innovation First',
    description: 'We push boundaries en implementeren cutting-edge technologie voordat het mainstream wordt.'
  },
  {
    icon: Users,
    title: 'Client Partnership',
    description: 'Niet alleen een leverancier, maar een strategische partner in uw digitale transformatie.'
  },
  {
    icon: Award,
    title: 'Excellence Standard',
    description: 'We leveren niet gewoon, we overtreffen verwachtingen met elke deliverable.'
  },
  {
    icon: Globe,
    title: 'Local Expertise',
    description: 'Nederlandse roots, globale standaarden. We begrijpen de lokale markt perfect.'
  }
]

const milestones = [
  { year: '2020', event: 'Start Beheer opgericht in Utrecht' },
  { year: '2021', event: 'Microsoft Gold Partner status' },
  { year: '2022', event: 'AI & Automation division gelanceerd' },
  { year: '2023', event: '150+ MKB klanten milestone' },
  { year: '2024', event: 'Quantum Design System geïntroduceerd' }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cyber-darker">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-quantum-orange/10 via-transparent to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 bg-quantum-orange/20 text-quantum-orange border-quantum-orange">
              Since 2020
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">Over Start</span>
              <br />
              <span className="text-white">Beheer Solutions</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Wij zijn de architecten van de digitale toekomst. Een team van 
              innovators, engineers en strategen die Nederlandse bedrijven 
              transformeren met next-gen technologie.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-5xl mx-auto glass-effect p-12 rounded-3xl border border-quantum-orange/20">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
                <span className="text-gradient">Onze Missie</span>
              </h2>
              <p className="text-xl text-gray-300 text-center leading-relaxed">
                "Het democratiseren van enterprise-level technologie voor het Nederlandse MKB. 
                We maken quantum computing, AI automation en hyperdrive infrastructure 
                toegankelijk voor elke ambitieuze ondernemer."
              </p>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-gradient">Core Values</span>
              </h2>
              <p className="text-xl text-gray-400">
                De principes die ons drijven
              </p>
            </div>
          </ScrollTrigger>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <ScrollTrigger key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass-effect p-6 rounded-xl border border-quantum-orange/20 hover:border-quantum-orange/50 transition-all text-center"
                >
                  <value.icon className="h-12 w-12 text-quantum-orange mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </motion.div>
              </ScrollTrigger>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                <span className="text-gradient">Our Journey</span>
              </h2>
              <p className="text-xl text-gray-400">
                Van startup naar industry leader
              </p>
            </div>
          </ScrollTrigger>
          
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <ScrollTrigger key={index} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-8 mb-8"
                >
                  <div className="text-3xl font-display font-bold text-quantum-orange w-24 text-right">
                    {milestone.year}
                  </div>
                  <div className="w-4 h-4 bg-quantum-orange rounded-full relative">
                    <div className="absolute inset-0 bg-quantum-orange rounded-full animate-ping" />
                  </div>
                  <div className="flex-1 glass-effect p-4 rounded-xl">
                    <p className="text-gray-300">{milestone.event}</p>
                  </div>
                </motion.div>
              </ScrollTrigger>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-3xl border border-quantum-orange/20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="text-gradient">Join Our Mission</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Word onderdeel van de digitale revolutie. Laten we samen 
                de toekomst van business technology vormgeven.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-quantum-orange to-quantum-pink hover:scale-105 transition-transform"
                >
                  Start Partnership
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-quantum-orange/50 hover:bg-quantum-orange/10"
                >
                  Bekijk Vacatures
                </Button>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}