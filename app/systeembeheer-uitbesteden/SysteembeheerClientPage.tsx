'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Server, CheckCircle2, ArrowRight, Phone,
  Clock, Wrench, UserCheck, Shield, Database,
  Network, Cloud, Wifi, PhoneCall, Monitor,
  Users, FileCheck, ShieldCheck, BookOpen, Quote,
  ChevronDown, Settings, RefreshCw, Activity,
  Video, Bell, Lock
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
      <p className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm text-gray-500 whitespace-nowrap">
        Laden...
      </p>
    </div>
  </div>
)

// SupportNexus - servers, netwerk switch, WiFi, backup
const SupportNexus = dynamic(() => import('@/components/3d/SupportNexus'), { ssr: false })

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

// Systeembeheer diensten
const services = [
  {
    icon: Server,
    title: 'Serverbeheer',
    description: 'Beheer en onderhoud van uw fysieke en virtuele servers. Windows Server, Linux - wij zorgen dat alles draait.',
    features: ['Installatie & configuratie', 'Updates & patches', 'Performance optimalisatie', 'Troubleshooting'],
    color: 'quantum-blue'
  },
  {
    icon: Network,
    title: 'Netwerkbeheer',
    description: 'Uw bedrijfsnetwerk stabiel en veilig. Van switches tot firewalls, wij beheren de complete infrastructuur.',
    features: ['Firewall configuratie', 'Switch & router beheer', 'VPN oplossingen', 'Netwerk troubleshooting'],
    color: 'quantum-green'
  },
  {
    icon: Wifi,
    title: 'WiFi Infrastructuur',
    description: 'Betrouwbare draadloze dekking in uw hele pand. Zakelijke WiFi met gastnetwerk en beveiliging.',
    features: ['Site survey & ontwerp', 'Access point installatie', 'Gastnetwerk configuratie', 'Dekking optimalisatie'],
    color: 'quantum-purple'
  },
  {
    icon: Database,
    title: 'Backup & Recovery',
    description: 'Uw data veilig bewaard. Automatische backups en een helder herstelplan voor als het misgaat.',
    features: ['Automatische backups', 'Off-site opslag', 'Restore tests', 'Disaster recovery plan'],
    color: 'quantum-orange'
  },
  {
    icon: PhoneCall,
    title: 'VoIP & Telefonie',
    description: 'Moderne zakelijke telefonie via internet. Flexibel, schaalbaar en kostenefficiënt.',
    features: ['VoIP implementatie', 'Nummerbehoud', 'Doorschakelingen', 'Integratie met Teams'],
    color: 'quantum-blue'
  },
  {
    icon: Cloud,
    title: 'Hybride Cloud',
    description: 'Het beste van beide werelden. Lokale servers gecombineerd met cloud diensten waar dat zinvol is.',
    features: ['Cloud migratie advies', 'Azure / AWS basics', 'Hybride oplossingen', 'Kostenoptimalisatie'],
    color: 'quantum-green'
  },
  {
    icon: Video,
    title: 'Vergaderruimtes',
    description: 'Professionele meeting rooms met video conferencing. Teams, Zoom of andere oplossingen - wij installeren en configureren.',
    features: ['Beeldscherm & camera setup', 'Audio configuratie', 'Teams/Zoom integratie', 'Gebruiksvriendelijke bediening'],
    color: 'quantum-purple'
  },
  {
    icon: Bell,
    title: 'Alarm & Beveiliging',
    description: 'Fysieke beveiliging van uw pand. Alarmsystemen, toegangscontrole en camerabewaking.',
    features: ['Alarmsysteem installatie', 'Toegangscontrole', 'IP-camera systemen', 'Integratie met netwerk'],
    color: 'quantum-orange'
  },
]

// Veelvoorkomende klantsituaties
const customerSituations = [
  {
    quote: 'Onze server is verouderd en we weten niet of onze backups wel werken.',
    context: 'Server vernieuwing & backup',
    icon: Server
  },
  {
    quote: 'Het netwerk is traag en WiFi valt regelmatig uit in delen van het pand.',
    context: 'Netwerk optimalisatie',
    icon: Wifi
  },
  {
    quote: 'We willen een professionele vergaderruimte met video conferencing.',
    context: 'Meeting room setup',
    icon: Video
  },
  {
    quote: 'Ons alarmsysteem is gedateerd en we willen ook camera\'s.',
    context: 'Beveiliging upgrade',
    icon: Bell
  },
]

// Waarom wij
const whyChooseUs = [
  {
    icon: Clock,
    title: 'Snelle Respons',
    description: 'Geen eindeloze wachttijden. U spreekt direct met een specialist die uw infrastructuur kent.',
    stat: 'Direct',
    statLabel: 'persoonlijk contact'
  },
  {
    icon: UserCheck,
    title: 'Vaste Contactpersoon',
    description: 'Eén aanspreekpunt die uw omgeving door en door kent. Geen steeds wisselende technici.',
    stat: '1',
    statLabel: 'vast aanspreekpunt'
  },
  {
    icon: Wrench,
    title: 'Maatwerk Oplossingen',
    description: 'Geen standaardpakketten. Wij stemmen het beheer af op úw infrastructuur en budget.',
    stat: '100%',
    statLabel: 'op maat'
  },
  {
    icon: FileCheck,
    title: 'Volledige Documentatie',
    description: 'Alles wordt gedocumenteerd. U heeft altijd inzicht in uw IT-omgeving.',
    stat: 'Helder',
    statLabel: 'overzicht'
  },
]

// Het proces
const processSteps = [
  {
    step: '01',
    title: 'Inventarisatie',
    description: 'We brengen uw huidige infrastructuur in kaart: servers, netwerk, backups.',
    icon: Settings
  },
  {
    step: '02',
    title: 'Advies & Plan',
    description: 'U ontvangt een helder advies met concrete verbeterpunten en kostenindicatie.',
    icon: FileCheck
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'We voeren verbeteringen door en nemen het beheer over - met minimale verstoring.',
    icon: Wrench
  },
  {
    step: '04',
    title: 'Doorlopend Beheer',
    description: 'Regelmatig onderhoud, updates en support wanneer u ons nodig heeft.',
    icon: RefreshCw
  },
]

// FAQ
const faqs = [
  {
    q: 'Wat is het verschil tussen systeembeheer en werkplekbeheer?',
    a: 'Systeembeheer richt zich op de "achterkant": servers, netwerken, backups en infrastructuur. Werkplekbeheer gaat over de apparaten van uw medewerkers: laptops, PC\'s en software. Vaak combineren bedrijven beide diensten voor volledige IT-ontzorging.'
  },
  {
    q: 'Kunnen jullie ook onze vergaderruimtes inrichten?',
    a: 'Jazeker. We installeren complete meeting room oplossingen: beeldschermen, camera\'s, microfoons en integratie met Teams of Zoom. Zodat uw vergaderingen soepel verlopen.'
  },
  {
    q: 'Doen jullie ook alarmsystemen en camera\'s?',
    a: 'Ja, we installeren en beheren alarmsystemen, toegangscontrole en IP-camerasystemen. Deze integreren we met uw netwerk zodat u overal toegang heeft.'
  },
  {
    q: 'Werken jullie ook met kleine bedrijven met maar één server?',
    a: 'Absoluut. We werken met bedrijven van 5 tot 150+ medewerkers. Of u nu één server heeft of een complexe omgeving - we stemmen het beheer af op uw situatie en budget.'
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

export default function SysteembeheerClientPage() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">

      {/* ==================== HERO (2 kolommen zoals IT Support) ==================== */}
      <section className="relative min-h-screen flex items-center" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-quantum-blue/10 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content - Linker kolom */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-blue/10 text-quantum-blue border-quantum-blue/30">
                <Server className="w-4 h-4 mr-2 inline" />
                Systeembeheer Uitbesteden
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Systeembeheer{' '}
                <span className="block text-gradient mt-2">
                  Uitbesteden
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                Uw <strong className="text-white">servers</strong>, <strong className="text-white">netwerk</strong> en <strong className="text-white">infrastructuur</strong> in betrouwbare handen.
                Van serverbeheer tot vergaderruimtes en alarmsystemen - wij regelen het.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Servers, netwerk, WiFi en backups</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Vergaderruimtes met video conferencing</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Alarm, camera's en toegangscontrole</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4 text-quantum-blue" />
                  <span>Snelle responstijd</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Shield className="w-4 h-4 text-quantum-green" />
                  <span>Flexibele SLA's</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25"
                  asChild
                >
                  <Link href="/contact?service=systeembeheer">
                    Gratis Adviesgesprek
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
                <Canvas camera={{ position: [0, 0, isMobile ? 4 : 5.5], fov: isMobile ? 50 : 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <SupportNexus />
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
                    <Database className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Backups</p>
                    <p className="text-lg font-bold">Veilig</p>
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
                    <Lock className="w-5 h-5 text-quantum-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Infrastructuur</p>
                    <p className="text-lg font-bold">Beveiligd</p>
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
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-quantum-blue/5 via-transparent to-quantum-purple/5 border border-white/10">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-quantum-blue/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-quantum-purple/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  Complete IT-infrastructuur voor het <span className="text-gradient">MKB</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Uw servers, netwerk en backups zijn de ruggengraat van uw bedrijf. Maar ook uw vergaderruimtes, telefonie en beveiliging moeten goed werken.
                  Wij nemen het <strong className="text-gray-300">systeembeheer</strong> uit handen - inclusief <strong className="text-gray-300">meeting rooms</strong> en <strong className="text-gray-300">beveiligingssystemen</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="diensten-title">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Onze Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Compleet <span className="text-gradient">Systeembeheer</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van servers tot vergaderruimtes, van backups tot alarmsystemen. Alles wat u nodig heeft voor een goed werkende IT-infrastructuur.
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
                    <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-quantum-purple/30 transition-all h-full">
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-quantum-purple/10 flex items-center justify-center flex-shrink-0">
                          <situation.icon className="w-5 h-5 sm:w-6 sm:h-6 text-quantum-purple" />
                        </div>
                        <div>
                          <div className="flex items-start gap-2 mb-2">
                            <Quote className="w-4 h-4 text-quantum-purple/50 flex-shrink-0 mt-0.5" />
                            <p className="text-base sm:text-lg text-gray-200 italic">{situation.quote}</p>
                          </div>
                          <p className="text-sm text-quantum-purple font-medium">{situation.context}</p>
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
                    <Link href="/contact?service=systeembeheer">
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
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-blue/10 bg-gradient-to-b from-quantum-blue/5 to-transparent">
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-quantum-blue/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-quantum-green/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Systeembeheer met een <span className="text-gradient">persoonlijke aanpak</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Geen anoniem supportnummer. Bij ons krijgt u een vaste specialist die uw infrastructuur door en door kent.
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
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-quantum-blue to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Zo Werkt Het</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van inventarisatie naar <span className="text-gradient">stabiel beheer</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Een helder proces zonder verrassingen.
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
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollTrigger>
                <div>
                  <Badge className="mb-4 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
                    <ShieldCheck className="w-3 h-3 mr-2" />
                    Betrouwbaar & Transparant
                  </Badge>
                  <h2 id="trust-title" className="text-3xl md:text-4xl font-bold mb-6">
                    Wat u van ons mag <span className="text-gradient">verwachten</span>
                  </h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Geen loze beloftes, maar concrete afspraken. Wij documenteren alles, communiceren helder en zijn er wanneer u ons nodig heeft.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5 text-quantum-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">AVG-compliant werken</h3>
                        <p className="text-sm text-gray-400">Veilige omgang met uw bedrijfsgegevens</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-5 h-5 text-quantum-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">SLA op maat</h3>
                        <p className="text-sm text-gray-400">Duidelijke afspraken over responstijden</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-quantum-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">Volledige documentatie</h3>
                        <p className="text-sm text-gray-400">Alle wijzigingen worden vastgelegd</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <div className="glass-effect p-8 rounded-2xl border border-quantum-green/20">
                  <h3 className="text-xl font-bold mb-6 text-center">Geen verrassingen</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Transparante tarieven - u weet vooraf wat het kost</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Maandelijks opzegbaar - geen jarenlange contracten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Heldere communicatie over wat we doen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Eerlijk advies - ook als iets niet nodig is</span>
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
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Vragen over <span className="text-gradient">systeembeheer</span>?
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
                Systeembeheer{' '}
                <span className="text-gradient">uitbesteden?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis adviesgesprek. We bespreken uw situatie en adviseren wat voor u de beste aanpak is.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=systeembeheer">
                    Plan Gratis Adviesgesprek
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
