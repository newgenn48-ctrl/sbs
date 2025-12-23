'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Layers, CheckCircle2, ArrowRight, Phone,
  Zap, Database, Lock, RefreshCw, Code2,
  Users, FileCheck, Settings, Cloud,
  BarChart3, Plug, Workflow, Shield,
  Quote, ChevronDown, Rocket, Target
} from 'lucide-react'
import React, { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

// Loading skeleton voor 3D component
const Scene3DLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className="w-24 h-24 rounded-full bg-quantum-blue/20 animate-pulse" />
      <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-quantum-blue/30 animate-ping" style={{ animationDuration: '2s' }} />
    </div>
  </div>
)

const AppDashboard3D = dynamic(() => import('@/components/3d/AppDashboard3D'), { ssr: false })

// Hook voor responsive camera
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

// ============================================================================
// DATA
// ============================================================================

// Webapplicatie diensten
const services = [
  {
    icon: Layers,
    title: 'Custom Webapplicaties',
    description: 'Op maat gemaakte applicaties die precies doen wat u nodig heeft. Geen compromissen met standaard software.',
    features: ['Volledig maatwerk', 'Schaalbare architectuur', 'Moderne UI/UX', 'Progressive Web App'],
    color: 'quantum-blue'
  },
  {
    icon: BarChart3,
    title: 'Dashboards & Portalen',
    description: 'Overzichtelijke dashboards en klantportalen voor inzicht in uw data en processen.',
    features: ['Real-time data', 'Interactieve grafieken', 'Rol-gebaseerde toegang', 'Custom rapportages'],
    color: 'quantum-purple'
  },
  {
    icon: Plug,
    title: 'API Integraties',
    description: 'Koppel uw systemen aan elkaar. CRM, boekhouding, voorraad - alles communiceert naadloos.',
    features: ['REST & GraphQL APIs', 'Webhook integraties', 'Data synchronisatie', 'Legacy systemen'],
    color: 'quantum-green'
  },
  {
    icon: Workflow,
    title: 'Proces Automatisering',
    description: 'Automatiseer repetitieve taken en workflows. Bespaar tijd en voorkom fouten.',
    features: ['Workflow automation', 'Notificaties & alerts', 'Automatische rapporten', 'Task scheduling'],
    color: 'quantum-orange'
  },
  {
    icon: Database,
    title: 'Database Oplossingen',
    description: 'Robuuste data-architectuur voor veilige opslag en snelle toegang tot uw informatie.',
    features: ['Database ontwerp', 'Data migratie', 'Backup strategie', 'Performance tuning'],
    color: 'quantum-blue'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Veilige applicaties die voldoen aan AVG en andere regelgeving.',
    features: ['Authenticatie & autorisatie', 'Data encryptie', 'AVG compliance', 'Security audits'],
    color: 'quantum-purple'
  },
]

// Voorbeelden van webapplicaties
const examples = [
  {
    title: 'Klantportalen',
    description: 'Geef klanten toegang tot hun gegevens, facturen en documenten via een eigen portaal.',
    icon: Users
  },
  {
    title: 'Interne Tools',
    description: 'CRM, project management, urenregistratie - tools op maat voor uw team.',
    icon: Settings
  },
  {
    title: 'Data Dashboards',
    description: 'Visualiseer uw KPIs en bedrijfsdata in overzichtelijke, realtime dashboards.',
    icon: BarChart3
  },
  {
    title: 'Booking Systemen',
    description: 'Reserveringssystemen voor afspraken, ruimtes of diensten.',
    icon: FileCheck
  },
]

// Veelvoorkomende situaties
const customerSituations = [
  {
    quote: 'We werken met Excel en losse systemen die niet met elkaar praten.',
    context: 'Geïntegreerde oplossing',
    icon: Database
  },
  {
    quote: 'We willen klanten toegang geven tot hun gegevens via een portaal.',
    context: 'Klantportaal',
    icon: Users
  },
  {
    quote: 'Onze processen zijn handmatig en foutgevoelig.',
    context: 'Proces automatisering',
    icon: Workflow
  },
  {
    quote: 'We missen inzicht in onze bedrijfsdata en KPIs.',
    context: 'Dashboard ontwikkeling',
    icon: BarChart3
  },
]

// Waarom wij
const whyChooseUs = [
  {
    icon: Code2,
    title: 'Ervaren Developers',
    description: 'Ons team heeft jarenlange ervaring met complexe webapplicaties.',
    stat: '10+',
    statLabel: 'jaar ervaring'
  },
  {
    icon: Zap,
    title: 'Moderne Stack',
    description: 'We bouwen met de nieuwste technologieën voor optimale performance.',
    stat: 'Next.js',
    statLabel: 'React & Node'
  },
  {
    icon: RefreshCw,
    title: 'Agile Werkwijze',
    description: 'Regelmatige demos en feedback zodat u altijd ziet wat we bouwen.',
    stat: '2 weken',
    statLabel: 'sprint cycli'
  },
  {
    icon: Target,
    title: 'Resultaatgericht',
    description: 'We focussen op oplossingen die echt waarde toevoegen aan uw bedrijf.',
    stat: 'ROI',
    statLabel: 'focused'
  },
]

// Het proces
const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We analyseren uw processen, wensen en technische requirements.',
    icon: Target
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Wireframes, user flows en technische architectuur worden uitgewerkt.',
    icon: FileCheck
  },
  {
    step: '03',
    title: 'Agile Development',
    description: 'In korte sprints bouwen we de applicatie met regelmatige demos.',
    icon: Code2
  },
  {
    step: '04',
    title: 'Testing & Launch',
    description: 'Uitgebreid testen, training voor gebruikers en live gang.',
    icon: Rocket
  },
]

// FAQ
const faqs = [
  {
    q: 'Hoe lang duurt het om een webapplicatie te bouwen?',
    a: 'Dit hangt sterk af van de complexiteit. Een eenvoudige applicatie kan in 2-3 maanden klaar zijn. Complexere projecten kunnen 6-12 maanden duren. Na de discovery fase geven we een realistische planning.'
  },
  {
    q: 'Kunnen jullie integreren met onze bestaande systemen?',
    a: 'Ja, wij hebben ervaring met het koppelen aan diverse systemen: CRM (Salesforce, HubSpot), boekhouding (Exact, Moneybird), voorraadbeheer en andere zakelijke software. Als er een API is, kunnen we koppelen.'
  },
  {
    q: 'Wie is eigenaar van de code?',
    a: 'U bent volledig eigenaar van de broncode. Na oplevering ontvangt u alle code en documentatie. Er is geen lock-in of afhankelijkheid van ons.'
  },
  {
    q: 'Bieden jullie ook onderhoud en support?',
    a: 'Ja, we bieden flexibele onderhoudscontracten voor hosting, updates, bugfixes en doorontwikkeling. U kunt ook kiezen voor support op afroep.'
  },
]

// FAQ Component
const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5"
      >
        <h3 className="font-semibold text-lg text-gray-200 pr-4">{q}</h3>
        <ChevronDown
          className={`w-5 h-5 text-quantum-blue transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-gray-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// ============================================================================
// COMPONENTS
// ============================================================================

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <article className={`glass-effect p-5 sm:p-6 rounded-2xl h-full border border-${service.color}/20 hover:border-${service.color}/40 transition-all group`}>
      <div className={`w-12 h-12 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <service.icon className={`w-6 h-6 text-${service.color}`} />
      </div>

      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className={`w-4 h-4 text-${service.color} flex-shrink-0`} />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  </ScrollTrigger>
)

const WhyUsCard = ({ item, index }: { item: typeof whyChooseUs[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-quantum-blue/30 transition-all h-full">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-quantum-blue/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-quantum-blue" />
        </div>
        <div className="text-right">
          <p className="text-xl sm:text-2xl font-bold text-quantum-green">{item.stat}</p>
          <p className="text-xs text-gray-500">{item.statLabel}</p>
        </div>
      </div>
      <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
    </div>
  </ScrollTrigger>
)

const ProcessStepCard = ({ step, index }: { step: typeof processSteps[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="relative">
      {index < 3 && (
        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-quantum-blue/30 to-transparent z-0" />
      )}

      <div className="relative z-10 text-center">
        <div className="w-20 h-20 rounded-full bg-cyber-dark border-2 border-quantum-blue/30 flex items-center justify-center mx-auto mb-4 relative">
          <step.icon className="w-8 h-8 text-quantum-blue" />
          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-quantum-blue text-sm font-bold flex items-center justify-center text-white">
            {step.step}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
        <p className="text-gray-400 text-sm max-w-[200px] mx-auto">{step.description}</p>
      </div>
    </div>
  </ScrollTrigger>
)

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function WebapplicatiePageClient() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-quantum-blue/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content - Linker kolom */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-blue/10 text-quantum-blue border-quantum-blue/30">
                <Layers className="w-4 h-4 mr-2 inline" />
                Webapplicatie Ontwikkeling
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Webapplicaties{' '}
                <span className="block text-gradient mt-2">
                  op Maat
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                <strong className="text-white">Custom webapplicaties</strong> die uw bedrijfsprocessen stroomlijnen.
                Van dashboards tot portalen, van integraties tot automatisering.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Volledig op maat voor uw processen</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Integraties met bestaande systemen</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Schaalbaar en toekomstbestendig</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25"
                  asChild
                >
                  <Link href="/contact?service=webapplicatie">
                    Plan een Gesprek
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/5"
                  asChild
                >
                  <Link href="tel:+31301234567">
                    <Phone className="mr-2 w-5 h-5" />
                    Bel: 030-123 4567
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* 3D Visualization - Rechter kolom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-quantum-blue/20 via-quantum-purple/10 to-transparent blur-3xl rounded-full" />

              <Suspense fallback={<Scene3DLoader />}>
                <Canvas camera={{ position: [0, 0, isMobile ? 9 : 11], fov: isMobile ? 50 : 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <AppDashboard3D />
                </Canvas>
              </Suspense>

              {/* Floating cards - hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden md:block absolute bottom-8 left-4 glass-effect px-4 py-3 rounded-xl border border-quantum-green/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-quantum-green/20 flex items-center justify-center">
                    <Plug className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Integraties</p>
                    <p className="text-lg font-bold">Naadloos</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="hidden md:block absolute top-8 right-4 glass-effect px-4 py-3 rounded-xl border border-quantum-blue/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-quantum-blue/20 flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-quantum-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Code</p>
                    <p className="text-lg font-bold">100% Custom</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent" />
      </section>

      {/* ==================== DIENSTEN ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="diensten-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Onze Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Webapplicatie <span className="text-gradient">oplossingen</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van concept tot onderhoud - wij bouwen webapplicaties die uw bedrijf vooruit helpen.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VOORBEELDEN ==================== */}
      <section className="py-24" aria-labelledby="voorbeelden-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Toepassingen</Badge>
              <h2 id="voorbeelden-title" className="text-3xl md:text-4xl font-bold mb-4">
                Wat kunnen wij <span className="text-gradient">bouwen</span>?
              </h2>
            </header>
          </ScrollTrigger>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {examples.map((example, index) => (
              <ScrollTrigger key={index} delay={index * 0.1}>
                <div className="glass-effect p-6 rounded-2xl border border-white/10 hover:border-quantum-blue/30 transition-all text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-quantum-blue/10 flex items-center justify-center mx-auto mb-4">
                    <example.icon className="w-7 h-7 text-quantum-blue" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{example.title}</h3>
                  <p className="text-gray-400 text-sm">{example.description}</p>
                </div>
              </ScrollTrigger>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== KLANTSITUATIES ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="situaties-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-cyber-dark/80 border border-quantum-blue/20 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-quantum-blue/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-quantum-purple/10 rounded-full blur-3xl" />

              <ScrollTrigger>
                <header className="text-center mb-10 relative z-10">
                  <Badge className="mb-4 bg-quantum-blue/10 text-quantum-blue border-quantum-blue/30">
                    <Users className="w-3 h-3 mr-2" />
                    Herkenbaar?
                  </Badge>
                  <h2 id="situaties-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Veelvoorkomende <span className="text-gradient">situaties</span>
                  </h2>
                </header>
              </ScrollTrigger>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                {customerSituations.map((situation, index) => (
                  <ScrollTrigger key={index} delay={index * 0.1}>
                    <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-quantum-blue/30 transition-all h-full">
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-quantum-blue/10 flex items-center justify-center flex-shrink-0">
                          <situation.icon className="w-5 h-5 sm:w-6 sm:h-6 text-quantum-blue" />
                        </div>
                        <div>
                          <div className="flex items-start gap-2 mb-2">
                            <Quote className="w-4 h-4 text-quantum-blue/50 flex-shrink-0 mt-0.5" />
                            <p className="text-base sm:text-lg text-gray-200 italic">{situation.quote}</p>
                          </div>
                          <p className="text-sm text-quantum-blue font-medium">{situation.context}</p>
                        </div>
                      </div>
                    </div>
                  </ScrollTrigger>
                ))}
              </div>

              <ScrollTrigger>
                <div className="text-center mt-10 relative z-10">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90"
                    asChild
                  >
                    <Link href="/contact?service=webapplicatie">
                      Bespreek uw situatie
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WAAROM WIJ ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-blue/10 bg-gradient-to-b from-quantum-blue/5 to-transparent">
              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Ervaren <span className="text-gradient">development partner</span>
                  </h2>
                </header>
              </ScrollTrigger>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyChooseUs.map((item, index) => (
                  <WhyUsCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOE HET WERKT ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <ScrollTrigger>
              <header className="text-center mb-16">
                <Badge className="mb-4">Ons Proces</Badge>
                <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                  Van idee naar <span className="text-gradient">werkende applicatie</span>
                </h2>
              </header>
            </ScrollTrigger>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <ProcessStepCard key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24" aria-labelledby="faq-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Vragen over <span className="text-gradient">webapplicatie ontwikkeling</span>?
              </h2>
            </header>
          </ScrollTrigger>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/10 via-transparent to-quantum-purple/10" />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-quantum-blue/20">
              <Badge className="mb-4 sm:mb-6 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
                Gratis & Vrijblijvend
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar om uw processen te{' '}
                <span className="text-gradient">digitaliseren?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een vrijblijvend gesprek. We bespreken uw situatie en verkennen de mogelijkheden.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=webapplicatie">
                    Plan een Gesprek
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 hover:bg-white/5 text-lg px-8"
                  asChild
                >
                  <Link href="tel:+31301234567">
                    <Phone className="mr-2 w-5 h-5" />
                    030-123 4567
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Geen verplichtingen
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Gratis advies
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  U bent eigenaar van code
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
