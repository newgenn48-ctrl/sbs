'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Monitor, CheckCircle2, ArrowRight, Phone,
  Clock, Wrench, UserCheck, Shield, Laptop,
  Smartphone, Settings, Download,
  Users, FileCheck, ShieldCheck, BookOpen, Quote,
  ChevronDown, RefreshCw, Headphones, UserPlus, UserMinus,
  PackageOpen, MoveRight
} from 'lucide-react'
import React, { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

// Loading skeleton voor 3D component
const Scene3DLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className="w-24 h-24 rounded-full bg-quantum-green/20 animate-pulse" />
      <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-quantum-green/30 animate-ping" style={{ animationDuration: '2s' }} />
    </div>
  </div>
)

const ProductivityHub = dynamic(() => import('@/components/3d/ProductivityHub'), { ssr: false })

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

// Werkplekbeheer diensten
const services = [
  {
    icon: Laptop,
    title: 'Device Management',
    description: 'Beheer van alle werkplekken: laptops, desktops en thin clients. Installatie, configuratie en onderhoud.',
    features: ['Nieuwe werkplek inrichten', 'Hardware troubleshooting', 'Vervanging bij defect', 'Inventarisbeheer'],
    color: 'quantum-green'
  },
  {
    icon: Download,
    title: 'Software Beheer',
    description: 'Installatie en updates van alle software die uw medewerkers nodig hebben. Altijd up-to-date en gelicentieerd.',
    features: ['Software installatie', 'Updates & patches', 'Licentie beheer', 'Applicatie support'],
    color: 'quantum-blue'
  },
  {
    icon: Headphones,
    title: 'Helpdesk & Support',
    description: 'Uw medewerkers kunnen bij ons terecht voor al hun IT-vragen. Remote of on-site hulp wanneer nodig.',
    features: ['Remote support', 'Telefonische hulp', 'On-site wanneer nodig', 'Snelle responstijd'],
    color: 'quantum-purple'
  },
  {
    icon: UserPlus,
    title: 'Onboarding',
    description: 'Nieuwe medewerker? Wij zorgen dat de werkplek klaar staat. Laptop, accounts, software - alles geregeld.',
    features: ['Werkplek configuratie', 'Account aanmaken', 'Software installatie', 'Introductie IT'],
    color: 'quantum-orange'
  },
  {
    icon: UserMinus,
    title: 'Offboarding',
    description: 'Medewerker uit dienst? Wij zorgen voor veilige overdracht en opschoning van accounts en apparaten.',
    features: ['Data backup', 'Account deactivatie', 'Apparaat innemen', 'Veilige data wissing'],
    color: 'quantum-green'
  },
  {
    icon: Smartphone,
    title: 'Mobiele Apparaten',
    description: 'Zakelijke telefoons en tablets beheren. Beveiliging, apps en integratie met uw bedrijfsomgeving.',
    features: ['Telefoon configuratie', 'App beheer', 'Beveiliging instellen', 'E-mail & agenda sync'],
    color: 'quantum-blue'
  },
  {
    icon: PackageOpen,
    title: 'Werkplek Installatie',
    description: 'Nieuwe werkplekken opzetten? Wij installeren en configureren alles: hardware, software, accounts en netwerk.',
    features: ['Hardware setup', 'Software installatie', 'Netwerk configuratie', 'Gebruiker klaar maken'],
    color: 'quantum-purple'
  },
  {
    icon: MoveRight,
    title: 'Werkplek Migratie',
    description: 'Overstappen naar nieuwe systemen of hardware? Wij migreren data, instellingen en applicaties zonder productiviteitsverlies.',
    features: ['Data migratie', 'Applicatie overdracht', 'Instellingen behouden', 'Minimale downtime'],
    color: 'quantum-orange'
  },
]

// Veelvoorkomende klantsituaties
const customerSituations = [
  {
    quote: 'Nieuwe medewerkers moeten vaak dagen wachten op een werkende laptop.',
    context: 'Snellere onboarding',
    icon: UserPlus
  },
  {
    quote: 'We gaan naar nieuwe laptops maar het migreren van alles lijkt een enorme klus.',
    context: 'Werkplek migratie',
    icon: MoveRight
  },
  {
    quote: 'We groeien snel en moeten veel nieuwe werkplekken tegelijk opzetten.',
    context: 'Werkplek installatie',
    icon: PackageOpen
  },
  {
    quote: 'Als een laptop kapot gaat, duurt het te lang voor er een oplossing is.',
    context: 'Snellere support',
    icon: Clock
  },
]

// Waarom wij
const whyChooseUs = [
  {
    icon: Clock,
    title: 'Snelle Support',
    description: 'Uw medewerkers krijgen snel hulp bij IT-problemen. Geen lange wachttijden.',
    stat: 'Direct',
    statLabel: 'beschikbaar'
  },
  {
    icon: UserCheck,
    title: 'Persoonlijke Aanpak',
    description: 'Wij kennen uw medewerkers en hun werkplekken. Geen anonieme helpdesk.',
    stat: '1',
    statLabel: 'vast aanspreekpunt'
  },
  {
    icon: Wrench,
    title: 'Alles Inbegrepen',
    description: 'Van installatie tot support, van onboarding tot offboarding. Compleet werkplekbeheer.',
    stat: '100%',
    statLabel: 'ontzorging'
  },
  {
    icon: FileCheck,
    title: 'Duidelijk Overzicht',
    description: 'U weet precies welke apparaten en software u heeft. Altijd actueel.',
    stat: 'Helder',
    statLabel: 'inventaris'
  },
]

// Het proces
const processSteps = [
  {
    step: '01',
    title: 'Inventarisatie',
    description: 'We brengen alle werkplekken in kaart: hardware, software, gebruikers.',
    icon: Settings
  },
  {
    step: '02',
    title: 'Standaardisatie',
    description: 'We bepalen samen de ideale werkplek-configuratie voor uw organisatie.',
    icon: FileCheck
  },
  {
    step: '03',
    title: 'Overname Beheer',
    description: 'We nemen het beheer over en zorgen dat alles up-to-date en veilig is.',
    icon: RefreshCw
  },
  {
    step: '04',
    title: 'Doorlopende Support',
    description: 'Uw medewerkers kunnen bij ons terecht. Wij regelen de rest.',
    icon: Headphones
  },
]

// FAQ
const faqs = [
  {
    q: 'Hoe snel kan een nieuwe medewerker aan de slag?',
    a: 'Bij standaard onboarding is een nieuwe werkplek binnen 1-2 werkdagen klaar. Bij spoed kunnen we vaak dezelfde dag nog een laptop inrichten. We stemmen dit af op uw wensen.'
  },
  {
    q: 'Hoe werkt een werkplek migratie?',
    a: 'We plannen de migratie samen in. Eerst maken we een complete backup, dan installeren we de nieuwe werkplek met alle software en instellingen. Data en profielen worden overgezet. Uw medewerker merkt minimale onderbreking.'
  },
  {
    q: 'Kunnen jullie meerdere werkplekken tegelijk installeren?',
    a: 'Zeker. Bij grotere projecten - zoals een kantoorverhuizing of hardware refresh - plannen we de uitrol in fases. Zo verstoren we het dagelijks werk minimaal en blijft iedereen productief.'
  },
  {
    q: 'Hoe werkt de support voor medewerkers?',
    a: 'Medewerkers kunnen bellen, mailen of een ticket aanmaken. We helpen eerst remote - vaak is het probleem zo opgelost. Als dat niet lukt, komen we on-site of sturen we vervangende hardware.'
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
          className={`w-5 h-5 text-quantum-green transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
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
    <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-quantum-green/30 transition-all h-full">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-quantum-green/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-quantum-green" />
        </div>
        <div className="text-right">
          <p className="text-xl sm:text-2xl font-bold text-quantum-blue">{item.stat}</p>
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
        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-quantum-green/30 to-transparent z-0" />
      )}

      <div className="relative z-10 text-center">
        <div className="w-20 h-20 rounded-full bg-cyber-dark border-2 border-quantum-green/30 flex items-center justify-center mx-auto mb-4 relative">
          <step.icon className="w-8 h-8 text-quantum-green" />
          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-quantum-green text-sm font-bold flex items-center justify-center text-white">
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

export default function WerkplekbeheerClientPage() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-quantum-green/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content - Linker kolom */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
                <Monitor className="w-4 h-4 mr-2 inline" />
                Werkplekbeheer Uitbesteden
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Werkplekbeheer{' '}
                <span className="block text-gradient mt-2">
                  Uitbesteden
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                Alle <strong className="text-white">werkplekken</strong> van uw medewerkers professioneel beheerd.
                Van <strong className="text-white">laptops</strong> en <strong className="text-white">software</strong> tot <strong className="text-white">helpdesk support</strong> - wij zorgen dat uw team productief kan werken.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Laptops, desktops en mobiele apparaten</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Werkplek installatie en migratie</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>On- en offboarding van medewerkers</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-green to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-green/25"
                  asChild
                >
                  <Link href="/contact?service=werkplekbeheer">
                    Gratis Adviesgesprek
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                </div>
            </motion.div>

            {/* 3D Visualization - Rechter kolom */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
            >
              <Suspense fallback={<Scene3DLoader />}>
                <Canvas camera={{ position: [0, 0, isMobile ? 4 : 5], fov: isMobile ? 55 : 50 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <ProductivityHub />
                </Canvas>
              </Suspense>

              {/* Floating status cards - hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="hidden md:block absolute bottom-8 right-4 glass-effect rounded-xl p-4 border border-quantum-green/20 max-w-[240px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-quantum-green/20 flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Geen gedoe</p>
                    <p className="text-lg font-bold text-white">Wij regelen het</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="hidden md:block absolute top-8 left-4 glass-effect rounded-xl p-4 border border-quantum-blue/20 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-quantum-blue/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-quantum-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Responstijd</p>
                    <p className="text-sm font-bold text-white">Snel geholpen</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent" />
      </section>

      {/* ==================== SEO INTRO ==================== */}
      <section className="py-16" aria-labelledby="seo-intro-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-quantum-green/5 via-transparent to-quantum-blue/5 border border-white/10">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-quantum-green/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-quantum-blue/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  Werkplekbeheer voor het <span className="text-gradient">MKB</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Uw medewerkers verdienen werkplekken die gewoon werken. Geen trage laptops, geen software problemen, geen gedoe met nieuwe accounts.
                  Wij nemen het <strong className="text-gray-300">werkplekbeheer</strong> uit handen: van <strong className="text-gray-300">device management</strong> tot <strong className="text-gray-300">helpdesk support</strong>.
                  Zodat uw team productief kan zijn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="diensten-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Onze Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Compleet <span className="text-gradient">Werkplekbeheer</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van laptop tot telefoon, van installatie tot support. Alles wat uw medewerkers nodig hebben om productief te werken.
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

      {/* ==================== KLANTSITUATIES ==================== */}
      <section className="py-24" aria-labelledby="situaties-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-5xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-cyber-dark/80 border border-quantum-green/20 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-quantum-green/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-quantum-blue/10 rounded-full blur-3xl" />

              <ScrollTrigger>
                <header className="text-center mb-10 relative z-10">
                  <Badge className="mb-4 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
                    <Users className="w-3 h-3 mr-2" />
                    Herkenbaar?
                  </Badge>
                  <h2 id="situaties-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Veelvoorkomende <span className="text-gradient">situaties</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Herkent u één van deze situaties? Dan kunnen wij u helpen.
                  </p>
                </header>
              </ScrollTrigger>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                {customerSituations.map((situation, index) => (
                  <ScrollTrigger key={index} delay={index * 0.1}>
                    <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-quantum-green/30 transition-all h-full">
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                          <situation.icon className="w-5 h-5 sm:w-6 sm:h-6 text-quantum-green" />
                        </div>
                        <div>
                          <div className="flex items-start gap-2 mb-2">
                            <Quote className="w-4 h-4 text-quantum-green/50 flex-shrink-0 mt-0.5" />
                            <p className="text-base sm:text-lg text-gray-200 italic">{situation.quote}</p>
                          </div>
                          <p className="text-sm text-quantum-green font-medium">{situation.context}</p>
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
                    className="bg-gradient-to-r from-quantum-green to-quantum-blue hover:opacity-90"
                    asChild
                  >
                    <Link href="/contact?service=werkplekbeheer">
                      Ja, dit herken ik - neem contact op
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
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-green/10 bg-gradient-to-b from-quantum-green/5 to-transparent">
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-quantum-green/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-quantum-blue/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Werkplekbeheer met een <span className="text-gradient">persoonlijke aanpak</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Uw medewerkers verdienen een helpdesk die hen kent. Geen ticket-nummers, maar echte hulp.
                  </p>
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
      <section className="py-24" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-quantum-green to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Zo Werkt Het</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van inventarisatie naar <span className="text-gradient">zorgeloos beheer</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Een helder proces. Wij nemen het beheer over, uw medewerkers werken door.
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

      {/* ==================== TRUST INDICATORS ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="trust-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollTrigger>
                <div>
                  <Badge className="mb-4 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
                    <ShieldCheck className="w-3 h-3 mr-2" />
                    Betrouwbaar & Veilig
                  </Badge>
                  <h2 id="trust-title" className="text-3xl md:text-4xl font-bold mb-6">
                    Wat u van ons mag <span className="text-gradient">verwachten</span>
                  </h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Uw medewerkers en hun data in goede handen. Wij zorgen voor veilige werkplekken en zijn er wanneer u ons nodig heeft.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-quantum-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">Beveiligde werkplekken</h3>
                        <p className="text-sm text-gray-400">Antivirus, updates en veilige configuratie</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-5 h-5 text-quantum-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">Duidelijke afspraken</h3>
                        <p className="text-sm text-gray-400">SLA op maat met heldere responstijden</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-quantum-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">Volledig overzicht</h3>
                        <p className="text-sm text-gray-400">Inventaris van alle apparaten en software</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <div className="glass-effect p-8 rounded-2xl border border-quantum-green/20">
                  <h3 className="text-xl font-bold mb-6 text-center">Geen gedoe</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Eén vast aanspreekpunt - geen wisselende technici</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Maandelijks opzegbaar - geen jarenlange contracten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Transparante prijzen - geen verrassingen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Heldere communicatie - u weet wat we doen</span>
                    </li>
                  </ul>
                </div>
              </ScrollTrigger>
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
                Vragen over <span className="text-gradient">werkplekbeheer</span>?
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
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-green/10 via-transparent to-quantum-blue/10" />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-quantum-green/20">
              <Badge className="mb-4 sm:mb-6 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
                Gratis & Vrijblijvend
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Werkplekbeheer{' '}
                <span className="text-gradient">uitbesteden?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis adviesgesprek. We bespreken hoe we uw medewerkers het beste kunnen ondersteunen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-green to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-green/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=werkplekbeheer">
                    Plan Gratis Adviesgesprek
                    <ArrowRight className="ml-2 w-5 h-5" />
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
                  Advies op maat
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Reactie binnen 24 uur
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
