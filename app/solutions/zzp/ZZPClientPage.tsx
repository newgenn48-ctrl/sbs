'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2, ChevronDown, Phone,
  Globe, ShieldCheck, BarChart3, Mail, Search, Zap,
  Clock, Target, Users, Quote, TrendingUp, TrendingDown,
  EyeOff, ServerCrash, Award, Briefcase, Rocket, FileSearch
} from 'lucide-react'

// Loading skeleton voor 3D component
const Scene3DLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className="w-24 h-24 rounded-full bg-quantum-purple/20 animate-pulse" />
      <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-quantum-purple/30 animate-ping" style={{ animationDuration: '2s' }} />
    </div>
  </div>
)

const BusinessDashboard = dynamic(() => import('@/components/3d/BusinessDashboard'), { ssr: false })

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

// ZZP diensten/oplossingen
const services = [
  {
    icon: Globe,
    title: 'Professionele Website',
    description: 'Een website die werkt als uw beste verkoper. 24/7 online, geoptimaliseerd voor Google.',
    features: ['Conversiegericht design', 'Mobiel geoptimaliseerd', 'Sub-seconde laadtijden', 'SSL beveiliging'],
    color: '#00FF88'
  },
  {
    icon: Mail,
    title: 'Zakelijke E-mail',
    description: 'Microsoft 365 e-mail met uw eigen domeinnaam. Professioneel en betrouwbaar.',
    features: ['Eigen domein e-mail', 'Microsoft 365 apps', 'Automatische backups', '50GB opslag'],
    color: '#00D9FF'
  },
  {
    icon: Search,
    title: 'Lokale SEO',
    description: 'Word gevonden door klanten in uw regio. Domineer de lokale zoekresultaten.',
    features: ['Google Mijn Bedrijf', 'Lokale zoekwoorden', 'Review management', 'Maandrapportages'],
    color: '#A855F7'
  },
  {
    icon: ShieldCheck,
    title: 'IT Support & Security',
    description: 'Technische ondersteuning wanneer u het nodig heeft. Altijd bereikbaar.',
    features: ['Helpdesk support', 'Beveiligingsmonitoring', 'Software updates', 'Probleemoplossing'],
    color: '#FF6B6B'
  },
]

// Veelvoorkomende klantsituaties
const customerSituations = [
  {
    quote: 'Ik ben uren kwijt aan mijn website en e-mail terwijl ik zou moeten factureren.',
    context: 'Tijdverspilling',
    icon: Clock
  },
  {
    quote: 'Potentiële klanten kunnen me niet vinden op Google.',
    context: 'Onzichtbaarheid',
    icon: EyeOff
  },
  {
    quote: 'Ik maak me zorgen over beveiliging maar weet niet waar te beginnen.',
    context: 'Technostress',
    icon: ServerCrash
  },
  {
    quote: 'Mijn concurrenten zien er online veel professioneler uit dan ik.',
    context: 'Achterstand',
    icon: TrendingDown
  },
]

// Werkwijze/Proces
const processSteps = [
  {
    step: '01',
    title: 'Gratis Intake',
    description: 'We bespreken uw situatie, doelen en waar u nu tegenaan loopt.',
    icon: FileSearch
  },
  {
    step: '02',
    title: 'Maatwerkplan',
    description: 'U ontvangt een concreet plan met exacte kosten en verwachte resultaten.',
    icon: Target
  },
  {
    step: '03',
    title: 'Snelle Setup',
    description: 'Binnen 2 weken staat alles live en werkt uw digitale basis perfect.',
    icon: Rocket
  },
  {
    step: '04',
    title: 'Continue Groei',
    description: 'Wij optimaliseren continu terwijl u focust op uw klanten.',
    icon: TrendingUp
  },
]

// Waarom Start Beheer
const whyUs = [
  {
    icon: Target,
    title: 'ZZP Specialist',
    description: 'Wij begrijpen de uitdagingen van zelfstandigen en stemmen onze diensten hierop af.',
    stat: '100+',
    statLabel: 'ZZP klanten'
  },
  {
    icon: Zap,
    title: 'Alles-in-één',
    description: 'Geen gedoe met verschillende leveranciers. Eén aanspreekpunt voor al uw digitale zaken.',
    stat: '1',
    statLabel: 'contactpersoon'
  },
  {
    icon: BarChart3,
    title: 'Betaalbaar',
    description: 'Professionele oplossingen tegen tarieven die passen bij een ZZP-budget.',
    stat: 'Vanaf',
    statLabel: '€99/mnd'
  },
  {
    icon: Award,
    title: 'Resultaatgericht',
    description: 'Wij focussen op wat telt: meer zichtbaarheid, meer klanten, meer omzet.',
    stat: 'Meetbare',
    statLabel: 'resultaten'
  },
]

// FAQ - geoptimaliseerd voor SEO
const faqs = [
  {
    q: 'Wat kost een complete digitale oplossing voor een ZZP\'er?',
    a: 'Onze complete pakketten beginnen vanaf €99 per maand, inclusief website, e-mail, basis SEO en support. Voor een volledige prijsopgave op maat plannen we graag een gratis intake gesprek.'
  },
  {
    q: 'Is dit niet te duur voor een ZZP\'er?',
    a: 'Zie het als uw meest rendabele "medewerker". De tijd die u bespaart (gemiddeld 5-10 uur per maand) en de extra klanten die het oplevert, maken de investering ruimschoots terug. Bovendien zijn de kosten zakelijk aftrekbaar.'
  },
  {
    q: 'Ik ben niet technisch. Is dit moeilijk te begrijpen?',
    a: 'Juist niet. Wij nemen alle technische complexiteit weg en vertalen alles naar duidelijke taal. U focust op uw vak, wij op de technologie. Bij vragen staat onze helpdesk altijd klaar.'
  },
  {
    q: 'Hoe snel kan mijn website live staan?',
    a: 'Een professionele website hebben wij binnen 1-2 weken live staan. De snelheid hangt af van hoe snel u feedback geeft en content aanlevert. Wij zorgen voor een gestroomlijnd proces.'
  },
  {
    q: 'Kan ik klein beginnen en later uitbreiden?',
    a: 'Absoluut. Onze oplossingen zijn modulair opgebouwd. Start met wat u nu nodig heeft en breid uit naarmate uw bedrijf groeit. Geen langlopende contracten, maandelijks opzegbaar.'
  },
  {
    q: 'Wat als ik al een website heb?',
    a: 'Geen probleem. We kunnen uw bestaande website overnemen en optimaliseren, of adviseren of een nieuwe website meer oplevert. In een gratis intake bespreken we de beste optie voor uw situatie.'
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
          className={`w-5 h-5 text-quantum-purple transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
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
    <div className="glass-effect p-6 rounded-2xl h-full border border-quantum-purple/20 hover:border-quantum-purple/40 transition-all">
      <div className="w-14 h-14 rounded-xl bg-quantum-purple/10 flex items-center justify-center mb-5">
        <service.icon className="w-7 h-7" style={{ color: service.color }} />
      </div>

      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-4">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-quantum-green flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </ScrollTrigger>
)

const WhyUsCard = ({ item, index }: { item: typeof whyUs[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-quantum-green/30 transition-all h-full">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-quantum-green/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-quantum-green" />
        </div>
        <div className="text-right">
          <p className="text-xl sm:text-2xl font-bold text-quantum-purple">{item.stat}</p>
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
        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-quantum-purple/30 to-transparent z-0" />
      )}

      <div className="relative z-10 text-center">
        <div className="w-20 h-20 rounded-full bg-cyber-dark border-2 border-quantum-purple/30 flex items-center justify-center mx-auto mb-4 relative">
          <step.icon className="w-8 h-8 text-quantum-purple" />
          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-quantum-purple text-sm font-bold flex items-center justify-center text-white">
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

export default function ZZPClientPage() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-quantum-purple/10 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                <Briefcase className="w-4 h-4 mr-2 inline" />
                ZZP Oplossingen
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Focus op{' '}
                <span className="block text-gradient mt-2">
                  Uw Expertise
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                U bent expert in uw vak. <strong className="text-white">Wij regelen de rest</strong>.
                Website, e-mail, SEO en IT-support – alles in één pakket voor ZZP'ers.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span><strong>Complete digitale basis</strong> in één pakket</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Bespaar <strong>5-10 uur per maand</strong> aan techgedoe</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span><strong>Maandelijks opzegbaar</strong> – geen lange contracten</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Target className="w-4 h-4 text-quantum-purple" />
                  <span>ZZP specialist</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <TrendingUp className="w-4 h-4 text-quantum-green" />
                  <span>Vanaf €99/mnd</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25"
                  asChild
                >
                  <Link href="/contact?service=zzp">
                    Gratis Intake Gesprek
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

            {/* 3D Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-quantum-purple/20 via-quantum-blue/10 to-transparent blur-3xl rounded-full" />

              <Suspense fallback={<Scene3DLoader />}>
                <Canvas camera={{ position: [0, 0, isMobile ? 10 : 12], fov: isMobile ? 50 : 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <BusinessDashboard />
                </Canvas>
              </Suspense>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden md:block absolute bottom-8 left-4 glass-effect px-4 py-3 rounded-xl border border-quantum-green/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-quantum-green/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Tijdwinst</p>
                    <p className="text-lg font-bold text-white">5-10 uur/mnd</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="hidden md:block absolute top-8 right-4 glass-effect px-4 py-3 rounded-xl border border-quantum-purple/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-quantum-purple/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-quantum-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">ZZP klanten</p>
                    <p className="text-lg font-bold text-white">100+</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent" />
      </section>

      {/* ==================== SEO INTRO SECTIE ==================== */}
      <section className="py-16" aria-labelledby="seo-intro-title">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-quantum-purple/5 via-transparent to-quantum-blue/5 border border-white/10">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-quantum-purple/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-quantum-blue/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  Digitale oplossingen voor <span className="text-gradient">ZZP'ers</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Als <strong className="text-gray-300">ZZP'er</strong> heeft u genoeg aan uw hoofd.
                  Wij bieden een <strong className="text-gray-300">complete digitale oplossing</strong>: van een professionele <strong className="text-gray-300">website</strong> en
                  <strong className="text-gray-300"> zakelijke e-mail</strong> tot <strong className="text-gray-300">lokale SEO</strong> en <strong className="text-gray-300">IT-support</strong>.
                  Alles wat u nodig heeft om online professioneel over te komen en gevonden te worden door klanten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VEELVOORKOMENDE SITUATIES ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="situaties-title">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-cyber-dark/80 border border-quantum-purple/20 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-quantum-purple/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-quantum-blue/10 rounded-full blur-3xl" />

              <ScrollTrigger>
                <header className="text-center mb-10 relative z-10">
                  <Badge className="mb-4 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                    <Users className="w-3 h-3 mr-2" />
                    Herkenbaar?
                  </Badge>
                  <h2 id="situaties-title" className="text-3xl md:text-4xl font-bold mb-4">
                    De uitdagingen van een <span className="text-gradient">ZZP'er</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Herkent u één van deze situaties? Dan kunnen wij u helpen.
                  </p>
                </header>
              </ScrollTrigger>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                {customerSituations.map((situation, index) => (
                  <ScrollTrigger key={index} delay={index * 0.1}>
                    <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-quantum-purple/30 transition-all h-full">
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                          <situation.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />
                        </div>
                        <div>
                          <div className="flex items-start gap-2 mb-2">
                            <Quote className="w-4 h-4 text-quantum-purple/50 flex-shrink-0 mt-0.5" />
                            <p className="text-base sm:text-lg text-gray-200 italic">{situation.quote}</p>
                          </div>
                          <p className="text-sm text-red-400 font-medium">{situation.context}</p>
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
                    className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90"
                    asChild
                  >
                    <Link href="/contact?service=zzp">
                      Ja, dit herken ik – help mij
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN OVERZICHT ==================== */}
      <section className="py-24" aria-labelledby="diensten-title">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Ons ZZP Pakket</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Alles wat u nodig heeft in <span className="text-gradient">één pakket</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Geen losse diensten bij verschillende leveranciers. Eén compleet pakket, één factuur, één aanspreekpunt.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WERKWIJZE/PROCES ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="proces-title">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-quantum-purple to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Zo Werkt Het</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van intake naar <span className="text-gradient">online succes</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Een eenvoudig proces dat u binnen 2 weken van start tot professionele online aanwezigheid brengt.
                    </p>
                  </header>
                </ScrollTrigger>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => (
                    <ProcessStepCard key={index} step={step} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WAAROM START BEHEER ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-purple/10 bg-gradient-to-b from-quantum-purple/5 to-transparent">
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-quantum-purple/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-quantum-green/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Dé IT-partner voor <span className="text-gradient">ZZP'ers</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Wij snappen de ZZP-realiteit: beperkt budget, geen tijd voor techgedoe, behoefte aan betrouwbaarheid.
                  </p>
                </header>
              </ScrollTrigger>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyUs.map((item, index) => (
                  <WhyUsCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="faq-title">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Vragen over onze <span className="text-gradient">ZZP oplossingen</span>?
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
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-purple/10 via-transparent to-quantum-blue/10" />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-quantum-purple/20">
              <div className="w-16 h-16 rounded-full bg-quantum-purple/10 flex items-center justify-center mx-auto mb-6">
                <Briefcase className="w-8 h-8 text-quantum-purple" />
              </div>

              <Badge className="mb-4 sm:mb-6 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
                Gratis & Vrijblijvend
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar om te{' '}
                <span className="text-gradient">groeien?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis intake gesprek en ontdek hoe wij uw digitale aanwezigheid kunnen transformeren.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=zzp">
                    Plan Gratis Intake
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
                  Maandelijks opzegbaar
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Vanaf €99/mnd
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
