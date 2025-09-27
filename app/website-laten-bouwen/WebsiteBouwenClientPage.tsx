'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { ArrowRight, Code, Database, Layers, Shield } from 'lucide-react'
import React from 'react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import CTAPortal from '@/components/sections/CTAPortal'
import ActivityIndicator from '@/components/ui/ActivityIndicator'

const TechCoreScene = dynamic(() => import('@/components/3d/TechCoreScene'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 flex items-center justify-center bg-cyber-darker"><ActivityIndicator /></div>
})

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, children }) => (
  <div className="glass-effect p-6 rounded-lg border border-cyber-light hover:border-quantum-blue transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-quantum-blue/20 rounded-full mr-4">
        <Icon className="w-6 h-6 text-quantum-blue" />
      </div>
      <h3 className="text-xl font-bold font-display">{title}</h3>
    </div>
    <p className="text-gray-400">{children}</p>
  </div>
);

interface ProcessStepProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, children }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-xl border-2 border-quantum-blue/50">
      {number}
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-gray-400">{children}</p>
    </div>
  </div>
);

export default function WebsiteBouwenClientPage() {
  return (
    <div className="bg-cyber-darker text-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <TechCoreScene />
        </div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10 z-1" />
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-quantum-blue/20 text-quantum-blue border-quantum-blue">
              High-Performance Webapplicaties
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Bouw Voorbij de Limieten
              <span className="block mt-2 text-gradient">
                van een Standaard Website
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Voor complexe digitale uitdagingen bouwen wij maatwerk webapplicaties. Schaalbaar, veilig en met een feilloze user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Start uw Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Onze Tech Stack
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Problem & Solution Section */}
      <ScrollTrigger>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display">Loopt u tegen de Grenzen aan?</h2>
              <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Standaard templates en plugins volstaan niet voor ambitieuze, complexe projecten.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 text-gray-300">
                  <p>❌ Uw website is traag door een overdaad aan plugins.</p>
                  <p>❌ U mist specifieke functionaliteiten die essentieel zijn voor uw business.</p>
                  <p>❌ Zorgen over de schaalbaarheid en veiligheid van uw huidige platform.</p>
                  <p>❌ Moeilijke integraties met uw CRM, ERP of andere systemen.</p>
              </div>
              <div className="glass-effect p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-gradient">De Maatwerk Oplossing</h3>
                <p className="text-lg">Wij bouwen uw webapplicatie <span className="text-quantum-green font-semibold">vanaf de grond op</span> met een moderne tech stack (zoals Next.js/React). Dit geeft ons volledige controle over performance, veiligheid en functionaliteit, resulterend in een superieur digitaal product dat perfect is afgestemd op uw processen.</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollTrigger>

      {/* 3. Key Features Grid */}
      <ScrollTrigger>
        <section className="py-20 bg-cyber-dark">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display">Onze Technische Expertise</h2>
              <p className="text-lg text-gray-400 mt-4">De bouwstenen voor een robuuste webapplicatie.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard icon={Layers} title="Moderne Frontend">
                Razendsnelle en interactieve gebruikersinterfaces met React en Next.js voor een optimale user experience.
              </FeatureCard>
              <FeatureCard icon={Database} title="Robuuste Backend">
                Schaalbare server-side logica en database-architectuur die meegroeit met uw bedrijf.
              </FeatureCard>
              <FeatureCard icon={Code} title="API Integraties">
                Naadloze koppelingen met externe diensten, van betaalproviders tot CRM-systemen en andere bedrijfskritische software.
              </FeatureCard>
            </div>
          </div>
        </section>
      </ScrollTrigger>

      {/* 4. Our Process Visualization */}
      <ScrollTrigger>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold font-display">Een Agile & Transparant Proces</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-8">
              <ProcessStep number="1" title="Architectuur & Design">
                We vertalen uw eisen naar een technisch ontwerp, een databasemodel en een UX/UI design.
              </ProcessStep>
              <ProcessStep number="2" title="Agile Ontwikkeling">
                We bouwen de applicatie in sprints, met regelmatige demo's. Zo blijft u betrokken en kunnen we snel bijsturen.
              </ProcessStep>
              <ProcessStep number="3" title="Testen & Kwaliteitsborging">
                Gedurende het hele proces voeren we geautomatiseerde en handmatige tests uit om een foutloos product te garanderen.
              </ProcessStep>
              <ProcessStep number="4" title="Deployment & Onderhoud">
                We verzorgen de livegang op een schaalbare cloud-infrastructuur en bieden doorlopend onderhoud en support.
              </ProcessStep>
            </div>
          </div>
        </section>
      </ScrollTrigger>

      {/* 5. Centralized CTA */}
      <ScrollTrigger>
        <CTAPortal />
      </ScrollTrigger>
    </div>
  )
}
