'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle2, XCircle, Zap, Scaling, BrainCircuit, ShieldCheck } from 'lucide-react'
import { useRef } from 'react'

// Dynamically import heavy 3D components to optimize initial load
const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), { ssr: false })

const painPoints = [
  {
    title: "Trage Laadtijd",
    description: "Elke seconde vertraging kost u 7% conversie. Standaard websites zijn vaak traag en inefficiënt.",
    icon: XCircle
  },
  {
    title: "Niet Schaalbaar",
    description: "Uw bedrijf groeit, maar uw WordPress-site kan het niet bijbenen. U zit vast in een technologisch plafond.",
    icon: XCircle
  },
  {
    title: "Slechte SEO Basis",
    description: "Een mooie website die niemand kan vinden is waardeloos. Veel designs negeren de technische SEO-eisen.",
    icon: XCircle
  },
  {
    title: "Onveilige Architectuur",
    description: "Verouderde plugins en systemen zijn een open deur voor hackers. Een datalek kan uw reputatie vernietigen.",
    icon: XCircle
  }
];

const corePrinciples = [
    {
        icon: BrainCircuit,
        title: "Strategisch UI/UX Design",
        description: "Een data-gedreven gebruikerservaring, geoptimaliseerd voor maximale conversie."
    },
    {
        icon: Zap,
        title: "Next.js & React Architectuur",
        description: "Ongeëvenaarde snelheid, veiligheid en schaalbaarheid met de meest geavanceerde webtechnologie."
    },
    {
        icon: Scaling,
        title: "Interactieve 3D Elementen",
        description: "Een onvergetelijke ervaring die u onderscheidt van elke concurrent in uw markt."
    },
    {
        icon: BrainCircuit,
        title: "AI-Ready Fundament",
        description: "Klaar voor de toekomst, voor naadloze integratie met AI-assistenten en personalisatie-engines."
    },
    {
        icon: ShieldCheck,
        title: "Geavanceerde SEO & Analytics",
        description: "Vanaf de eerste regel code bouwen we aan uw online vindbaarheid voor meetbare resultaten."
    },
    {
        icon: ShieldCheck,
        title: "Zero-Trust Security Protocol",
        description: "Beveiliging als kern van het platform, niet als een bijzaak."
    }
];

export default function WebsiteLatenMakenClient() {
  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">
      {/* Hero Section: The Living Synapse */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ParticleField />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-4 bg-quantum-blue/20 text-quantum-blue border-quantum-blue">
              Meer dan een Website, een Groeimachine
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">Laat een Website Maken</span>
              <br />
              <span className="text-white">Die de Standaard Zet</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Stop met digitale folders. Wij bouwen data-gedreven, AI-ready platformen die klanten aantrekken, converteren en uw bedrijf laten domineren.
            </p>
            <Button 
              size="xl" 
              variant="primary"
              className="hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,217,255,0.4)]"
            >
              Plan Gratis Strategie-Sessie
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">De Fouten die <span className="text-red-500">9/10 Bedrijven</span> Maken</h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Een standaard website is een rem op uw ambitie. Herkent u dit?</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl overflow-hidden border border-red-500/20 bg-cyber-dark group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <point.icon className="h-10 w-10 text-red-500 mb-4" />
                  <h3 className="text-2xl font-display font-bold mb-3">{point.title}</h3>
                  <p className="text-gray-400">{point.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Anatomy Section */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold">De Anatomie van een <span className="text-gradient">Groeimachine</span></h2>
            <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">Een website van ons is geen product, het is een geïntegreerd ecosysteem. Dit is de blauwdruk van wat wij standaard leveren.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {corePrinciples.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl border border-quantum-blue/10"
              >
                <item.icon className="h-8 w-8 text-quantum-blue mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Een dergelijk geïntegreerd platform is een investering in uw toekomst. Onze partnerschappen beginnen bij <span className="font-bold text-quantum-green">€1.199</span>, schaalbaar met de complexiteit en ambitie van uw visie.
            </p>
          </div>
        </div>
      </section>
      
      {/* Final CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-3xl border border-quantum-blue/20 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Klaar voor een Website die de <span className="text-gradient">Standaard Zet?</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Een investering in uw digitale fundament is de slimste zet die u vandaag kunt doen. Laten we samen bouwen aan uw toekomstige succes.
              </p>
              <Button 
                size="xl"
                variant="primary"
                className="hover:scale-105 transition-transform shadow-[0_0_40px_rgba(0,217,255,0.5)]"
              >
                Plan Uw Gratis Strategie-Sessie
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}