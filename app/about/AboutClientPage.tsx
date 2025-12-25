'use client'

import { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Users,
  Target,
  Heart,
  Zap,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  Lightbulb,
  Handshake,
  Award,
  Rocket,
  Star,
  Globe,
  Code,
  Brain,
  Megaphone,
} from 'lucide-react'

// 3D Components
import CompanyDNA3D from '@/components/3d/CompanyDNA3D'
import FounderShowcase3D from '@/components/3d/FounderShowcase3D'
import ValuesCubes3D from '@/components/3d/ValuesCubes3D'

const values = [
  {
    icon: Heart,
    title: 'Persoonlijke Aanpak',
    description: 'Bij ons bent u geen nummer. U krijgt een vast aanspreekpunt die uw bedrijf door en door kent.',
    color: 'quantum-blue',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Betrouwbaarheid',
    description: 'Wij doen wat we beloven. Transparante communicatie en geen verrassingen achteraf.',
    color: 'quantum-green',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovatie',
    description: 'We blijven vooroplopen met de nieuwste technologieen om uw bedrijf te laten groeien.',
    color: 'quantum-purple',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: Handshake,
    title: 'Partnerschap',
    description: 'Wij zien onszelf als verlengstuk van uw team, niet als externe leverancier.',
    color: 'quantum-orange',
    gradient: 'from-orange-500 to-red-500',
  },
]



const services = [
  { name: 'IT Beheer', icon: Globe, color: '#00D9FF' },
  { name: 'Web Development', icon: Code, color: '#A855F7' },
  { name: 'AI & Automatisering', icon: Brain, color: '#00FF88' },
  { name: 'Online Marketing', icon: Megaphone, color: '#FF6B6B' },
]



export default function AboutClientPage() {
  return (
    <main className="min-h-screen bg-cyber-darker overflow-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
            <ambientLight intensity={0.3} />
            <Suspense fallback={null}>
              <CompanyDNA3D />
            </Suspense>
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableRotate={false}
            />
          </Canvas>
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-transparent to-cyber-darker z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-darker/80 via-transparent to-cyber-darker/80 z-[1]" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-blue/20 text-quantum-blue border-quantum-blue/30">
                <Rocket className="w-4 h-4 mr-2 inline" />
                Over Start Beheer
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                <span className="text-white">Uw IT Partner die </span>
                <br />
                <span className="text-gradient bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                  Echt Begrijpt
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                Wij maken professionele IT toegankelijk voor ZZP&apos;ers en het MKB.
                Geen complexe systemen, maar praktische oplossingen die werken.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/contact">
                    Neem Contact Op
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 hover:bg-white/5 px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/contact">
                    Contact
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* ========== SERVICES OVERVIEW ========== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-quantum-blue/5 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
              <Zap className="w-4 h-4 mr-2 inline" />
              Wat Wij Doen
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-white">Alles Onder </span>
              <span className="text-gradient">Een Dak</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Van IT-beheer tot marketing, wij bieden complete digitale oplossingen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-opacity-50 transition-all duration-500 h-full">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: service.color + '20' }}
                  >
                    <service.icon className="w-8 h-8" style={{ color: service.color }} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white group-hover:text-gradient transition-colors">
                    {service.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOUNDER SECTION ========== */}
      <section className="relative py-32 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
            <ambientLight intensity={0.3} />
            <Suspense fallback={null}>
              <FounderShowcase3D />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.2} />
          </Canvas>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-darker via-cyber-darker/90 to-cyber-darker z-[1]" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 px-4 py-2 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                  <Star className="w-4 h-4 mr-2 inline" />
                  De Oprichter
                </Badge>

                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  <span className="text-white">De Visie </span>
                  <span className="text-gradient">Achter Start Beheer</span>
                </h2>

                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Start Beheer is geboren uit de frustratie dat kleine bedrijven vaak
                  worden overgeslagen door grote IT-bedrijven. Wij geloven dat elk bedrijf,
                  groot of klein, recht heeft op dezelfde kwaliteit IT-service.
                </p>

                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Met een achtergrond in IT en een passie voor ondernemerschap,
                  heb ik Start Beheer opgericht om deze kloof te dichten.
                  Onze aanpak is simpel: persoonlijk, betrouwbaar, en altijd bereikbaar.
                </p>

                <div className="space-y-4">
                  {['Persoonlijke IT-partner voor uw bedrijf', 'Altijd bereikbaar wanneer u ons nodig heeft', 'Eerlijke prijzen, geen verborgen kosten', 'Proactief meedenken met uw groei'].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Visual Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-quantum-blue/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-quantum-purple/20 rounded-full blur-2xl" />

                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-quantum-blue to-quantum-purple flex items-center justify-center mb-6">
                      <span className="text-3xl font-display font-bold text-white">SB</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-white mb-2">Start Beheer</h3>
                    <p className="text-quantum-blue font-medium mb-6">IT Partner voor ZZP & MKB</p>

                    <div className="space-y-4 pt-6 border-t border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-quantum-blue/10 flex items-center justify-center">
                          <Target className="w-5 h-5 text-quantum-blue" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Missie</p>
                          <p className="text-white font-medium">IT voor Iedereen</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center">
                          <Globe className="w-5 h-5 text-quantum-green" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Locatie</p>
                          <p className="text-white font-medium">Nederland</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALUES SECTION ========== */}
      <section className="relative py-32 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Canvas>
            <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />
            <ambientLight intensity={0.3} />
            <Suspense fallback={null}>
              <ValuesCubes3D />
            </Suspense>
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.25} />
          </Canvas>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-darker/95 to-cyber-darker z-[1]" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
              <Award className="w-4 h-4 mr-2 inline" />
              Onze Waarden
            </Badge>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-white">Waar Wij </span>
              <span className="text-gradient">Voor Staan</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Onze kernwaarden vormen de basis van alles wat we doen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-500 h-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-${value.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <value.icon className={`w-8 h-8 text-${value.color}`} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/10 via-transparent to-quantum-purple/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-quantum-blue/10 rounded-full blur-[150px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="text-white">Klaar om </span>
              <span className="text-gradient">Samen te Werken?</span>
            </h2>

            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Plan een vrijblijvend kennismakingsgesprek en ontdek hoe wij uw
              bedrijf kunnen helpen groeien met de juiste IT-oplossingen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 px-10 py-6 text-lg"
                asChild
              >
                <Link href="/contact">
                  Neem Contact Op
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/5 px-10 py-6 text-lg"
                asChild
              >
                <Link href="tel:+31301234567">
                  <Phone className="mr-2 w-5 h-5" />
                  Bel Direct
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-quantum-green" />
                <span>Gratis Kennismaking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-quantum-green" />
                <span>Geen Verplichtingen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-quantum-green" />
                <span>Direct Advies</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
