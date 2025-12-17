'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Shield, CheckCircle2, ArrowRight, Phone,
  Clock, Lock, AlertTriangle, Eye,
  Mail, Users, FileCheck, Key,
  Settings, Headphones, RefreshCw, HardDrive,
  ShieldCheck, ShieldAlert, Fingerprint, Scan,
  Quote, ChevronDown
} from 'lucide-react'
import React, { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

// Loading skeleton voor 3D component
const Scene3DLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className="w-24 h-24 rounded-full bg-red-500/20 animate-pulse" />
      <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-red-500/30 animate-ping" style={{ animationDuration: '2s' }} />
    </div>
  </div>
)

const CyberShield = dynamic(() => import('@/components/3d/CyberShield'), { ssr: false })

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

// Cybersecurity diensten
const services = [
  {
    icon: Scan,
    title: 'Security Audit',
    description: 'Een grondige analyse van uw IT-beveiliging. We identificeren kwetsbaarheden en geven concrete aanbevelingen.',
    features: ['Netwerk scan', 'Configuratie check', 'Rapport met prioriteiten', 'Actieplan'],
    color: 'red-500'
  },
  {
    icon: ShieldCheck,
    title: 'Endpoint Security',
    description: 'Bescherming van alle werkplekken tegen malware, virussen en andere bedreigingen. Centraal beheerd.',
    features: ['Antivirus & antimalware', 'Firewall beheer', 'Updates automatiseren', 'Monitoring'],
    color: 'quantum-blue'
  },
  {
    icon: Users,
    title: 'Security Awareness Training',
    description: 'Train uw medewerkers om phishing en social engineering te herkennen. De mens is vaak de zwakste schakel.',
    features: ['Phishing simulaties', 'Interactieve trainingen', 'Bewustwording campagnes', 'Certificering medewerkers'],
    color: 'quantum-purple'
  },
  {
    icon: Key,
    title: 'Toegangsbeheer',
    description: 'Wie heeft toegang tot wat? Multi-factor authenticatie en goed wachtwoordbeleid beschermen uw data.',
    features: ['MFA implementatie', 'Wachtwoordbeleid', 'Rechten beheer', 'Single sign-on'],
    color: 'quantum-orange'
  },
  {
    icon: HardDrive,
    title: 'Backup & Recovery',
    description: 'Veilige backups zodat u snel kunt herstellen na een incident. Ransomware hoeft geen ramp te zijn.',
    features: ['Automatische backups', 'Off-site opslag', 'Regelmatige tests', 'Snelle recovery'],
    color: 'quantum-green'
  },
  {
    icon: Eye,
    title: 'Monitoring & Response',
    description: 'We houden uw systemen in de gaten en reageren snel bij verdachte activiteit.',
    features: ['Log monitoring', 'Alerting', 'Incident response', 'Forensisch onderzoek'],
    color: 'red-500'
  },
]

// Veelvoorkomende klantsituaties
const customerSituations = [
  {
    quote: 'We hebben geen idee hoe veilig onze systemen eigenlijk zijn.',
    context: 'Security audit',
    icon: AlertTriangle
  },
  {
    quote: 'Medewerkers klikken op verdachte links in e-mails.',
    context: 'Security awareness',
    icon: Mail
  },
  {
    quote: 'We weten niet of onze backups echt werken bij een ransomware aanval.',
    context: 'Backup & recovery',
    icon: HardDrive
  },
  {
    quote: 'We hebben geen MFA maar weten dat het belangrijk is.',
    context: 'Toegangsbeheer',
    icon: Key
  },
]

// Waarom cybersecurity
const whyChooseUs = [
  {
    icon: Shield,
    title: 'Praktische Aanpak',
    description: 'Geen overdreven complexiteit. Wij focussen op de maatregelen die voor uw organisatie het meeste verschil maken.',
    stat: 'Focus',
    statLabel: 'op wat werkt'
  },
  {
    icon: Clock,
    title: 'Snelle Hulp',
    description: 'Bij een incident bent u niet alleen. Wij helpen u snel de schade te beperken en te herstellen.',
    stat: 'Direct',
    statLabel: 'beschikbaar'
  },
  {
    icon: FileCheck,
    title: 'Compliance',
    description: 'AVG, NIS2, ISO 27001 - wij helpen u voldoen aan de eisen die voor uw branche gelden.',
    stat: 'AVG',
    statLabel: 'compliant'
  },
  {
    icon: Headphones,
    title: 'Nederlandse Support',
    description: 'Geen buitenlandse helpdesk. Persoonlijk contact met IT-beveiligingsexperts die uw taal spreken.',
    stat: '100%',
    statLabel: 'Nederlands'
  },
]

// Het proces
const processSteps = [
  {
    step: '01',
    title: 'Assessment',
    description: 'We brengen uw huidige beveiliging in kaart en identificeren de belangrijkste risicos.',
    icon: Scan
  },
  {
    step: '02',
    title: 'Prioriteiten',
    description: 'Samen bepalen we welke maatregelen het meeste impact hebben voor uw situatie.',
    icon: FileCheck
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'We voeren de beveiligingsmaatregelen stap voor stap door met minimale verstoring.',
    icon: Settings
  },
  {
    step: '04',
    title: 'Onderhoud',
    description: 'Beveiliging is geen eenmalige actie. Wij houden uw systemen veilig.',
    icon: RefreshCw
  },
]

// FAQ
const faqs = [
  {
    q: 'Hoe weet ik of mijn bedrijf goed beveiligd is?',
    a: 'Een security audit geeft u inzicht in de huidige staat van uw beveiliging. We testen uw systemen, bekijken configuraties en rapporteren over gevonden kwetsbaarheden met concrete aanbevelingen.'
  },
  {
    q: 'Is cybersecurity niet alleen voor grote bedrijven?',
    a: 'Juist niet. Kleine bedrijven zijn aantrekkelijke doelwitten omdat ze vaak minder goed beveiligd zijn. Gelukkig hoeft goede beveiliging niet duur te zijn - het gaat om de juiste basismaatregelen.'
  },
  {
    q: 'Waarom is security awareness training belangrijk?',
    a: '90% van alle cyberaanvallen begint met een menselijke fout, zoals het klikken op een phishing link. Goed getrainde medewerkers herkennen bedreigingen en weten hoe ze moeten handelen. Dit is vaak uw beste verdediging.'
  },
  {
    q: 'Wat kost een ransomware aanval?',
    a: 'Gemiddeld kost een ransomware aanval een MKB bedrijf tussen de 50.000 en 250.000 euro aan schade, losgeld, herstelkosten en gemiste omzet. Preventie is vele malen goedkoper dan herstel.'
  },
  {
    q: 'Hoe lang duurt het om basis beveiliging op orde te krijgen?',
    a: 'De belangrijkste maatregelen - MFA, goede backups, endpoint security - kunnen we vaak binnen enkele weken implementeren. Een volledig beveiligingsplan is een doorlopend proces.'
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
          className={`w-5 h-5 text-red-500 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
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
    <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all h-full">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
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
        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-red-500/30 to-transparent z-0" />
      )}

      <div className="relative z-10 text-center">
        <div className="w-20 h-20 rounded-full bg-cyber-dark border-2 border-red-500/30 flex items-center justify-center mx-auto mb-4 relative">
          <step.icon className="w-8 h-8 text-red-500" />
          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-red-500 text-sm font-bold flex items-center justify-center text-white">
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

export default function CybersecurityPageClient() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-red-500/10 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content - Linker kolom */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-red-500/10 text-red-500 border-red-500/30">
                <Shield className="w-4 h-4 mr-2 inline" />
                Cybersecurity voor MKB
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Bescherm uw bedrijf{' '}
                <span className="block text-gradient mt-2">
                  tegen cyberdreigingen
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                <strong className="text-white">Ransomware</strong>, <strong className="text-white">phishing</strong> en <strong className="text-white">datalekken</strong> vormen een reeel risico voor elk bedrijf.
                Wij helpen u de juiste beveiligingsmaatregelen te nemen - praktisch en betaalbaar.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Security audit om kwetsbaarheden te vinden</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>MFA, endpoint security en veilige backups</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>Security awareness training voor medewerkers</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 shadow-lg shadow-red-500/25"
                  asChild
                >
                  <Link href="/contact?service=cybersecurity">
                    Gratis Security Check
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
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
            >
              <Suspense fallback={<Scene3DLoader />}>
                <Canvas camera={{ position: [0, 0, isMobile ? 4 : 5], fov: isMobile ? 55 : 50 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <CyberShield />
                </Canvas>
              </Suspense>

              {/* Floating status cards - hidden on mobile */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="hidden md:block absolute bottom-8 right-4 glass-effect rounded-xl p-4 border border-red-500/20 max-w-[240px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Bedreigingen</p>
                    <p className="text-lg font-bold text-white">Geblokkeerd</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="hidden md:block absolute top-8 left-4 glass-effect rounded-xl p-4 border border-quantum-green/20 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-quantum-green/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Data</p>
                    <p className="text-sm font-bold text-white">Beveiligd</p>
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
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-red-500/5 via-transparent to-quantum-blue/5 border border-white/10">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-red-500/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-quantum-blue/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  Cybersecurity voor het <span className="text-gradient">MKB</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Cyberaanvallen raken niet alleen grote bedrijven. MKB-bedrijven zijn steeds vaker doelwit - juist omdat ze vaak minder goed beveiligd zijn.
                  Wij helpen u met <strong className="text-gray-300">praktische beveiligingsmaatregelen</strong> die passen bij uw budget en risicoprofiel.
                  Geen overkill, wel de juiste bescherming.
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
              <Badge className="mb-4 bg-red-500/10 text-red-500 border-red-500/30">Onze Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Volledige <span className="text-gradient">cybersecurity</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van security audit tot incident response. Alles wat u nodig heeft om uw bedrijf te beschermen.
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

      {/* ==================== SECURITY TRAINING ==================== */}
      <section className="py-24" aria-labelledby="training-title">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollTrigger>
                <div>
                  <Badge className="mb-4 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                    <Users className="w-3 h-3 mr-2" />
                    Security Awareness
                  </Badge>
                  <h2 id="training-title" className="text-3xl md:text-4xl font-bold mb-6">
                    Uw medewerkers als <span className="text-gradient">eerste verdedigingslinie</span>
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    90% van alle cyberaanvallen begint met een menselijke fout. Een verkeerde klik op een phishing mail of een zwak wachtwoord kan uw hele organisatie in gevaar brengen.
                    Daarom is <strong className="text-white">security awareness training</strong> essentieel.
                  </p>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Wij bieden praktische trainingen die uw medewerkers leren om bedreigingen te herkennen en juist te handelen.
                    Geen saaie presentaties, maar interactieve sessies die blijven hangen.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-quantum-purple flex-shrink-0" />
                      <span>Phishing simulaties met realistische scenarios</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-quantum-purple flex-shrink-0" />
                      <span>Interactieve workshops op locatie of online</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-quantum-purple flex-shrink-0" />
                      <span>Voortgangsrapportages per medewerker</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-quantum-purple flex-shrink-0" />
                      <span>Certificaat na afronding training</span>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <div className="space-y-4">
                  {/* Training modules */}
                  <div className="glass-effect p-5 rounded-xl border border-quantum-purple/20 hover:border-quantum-purple/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-quantum-purple/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-quantum-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phishing Herkennen</h3>
                        <p className="text-gray-400 text-sm">Leer verdachte e-mails, links en bijlagen identificeren voordat het te laat is.</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-effect p-5 rounded-xl border border-red-500/20 hover:border-red-500/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-6 h-6 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Social Engineering</h3>
                        <p className="text-gray-400 text-sm">Herken manipulatietechnieken via telefoon, e-mail en in persoon.</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-effect p-5 rounded-xl border border-quantum-blue/20 hover:border-quantum-blue/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-quantum-blue/10 flex items-center justify-center flex-shrink-0">
                        <Key className="w-6 h-6 text-quantum-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Veilig Werken</h3>
                        <p className="text-gray-400 text-sm">Sterke wachtwoorden, veilig thuiswerken en omgaan met gevoelige data.</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-effect p-5 rounded-xl border border-quantum-green/20 hover:border-quantum-green/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                        <Fingerprint className="w-6 h-6 text-quantum-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Incident Response</h3>
                        <p className="text-gray-400 text-sm">Wat te doen als het misgaat? Snel en correct handelen bij een incident.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>
            </div>

            {/* CTA voor training */}
            <ScrollTrigger>
              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90"
                  asChild
                >
                  <Link href="/contact?service=security-training">
                    Plan een Security Training
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </section>

      {/* ==================== KLANTSITUATIES ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="situaties-title">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-cyber-dark/80 border border-red-500/20 overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-red-500/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-quantum-blue/10 rounded-full blur-3xl" />

              <ScrollTrigger>
                <header className="text-center mb-10 relative z-10">
                  <Badge className="mb-4 bg-red-500/10 text-red-500 border-red-500/30">
                    <AlertTriangle className="w-3 h-3 mr-2" />
                    Herkenbaar?
                  </Badge>
                  <h2 id="situaties-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Veelvoorkomende <span className="text-gradient">zorgen</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Herkent u een van deze situaties? Dan wordt het tijd om actie te ondernemen.
                  </p>
                </header>
              </ScrollTrigger>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                {customerSituations.map((situation, index) => (
                  <ScrollTrigger key={index} delay={index * 0.1}>
                    <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all h-full">
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 flex items-center justify-center flex-shrink-0">
                          <situation.icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                        </div>
                        <div>
                          <div className="flex items-start gap-2 mb-2">
                            <Quote className="w-4 h-4 text-red-500/50 flex-shrink-0 mt-0.5" />
                            <p className="text-base sm:text-lg text-gray-200 italic">{situation.quote}</p>
                          </div>
                          <p className="text-sm text-red-500 font-medium">{situation.context}</p>
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
                    className="bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90"
                    asChild
                  >
                    <Link href="/contact?service=cybersecurity">
                      Ja, ik wil mijn beveiliging verbeteren
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
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-red-500/10 bg-gradient-to-b from-red-500/5 to-transparent">
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-red-500/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-quantum-blue/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Cybersecurity met een <span className="text-gradient">praktische aanpak</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Wij geloven in effectieve beveiliging die past bij uw organisatie. Geen angstmarketing, wel eerlijk advies.
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
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Zo Werkt Het</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van onveilig naar <span className="text-gradient">beschermd</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Een gestructureerde aanpak om uw beveiliging stap voor stap te verbeteren.
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
                  <Badge className="mb-4 bg-red-500/10 text-red-500 border-red-500/30">
                    <Lock className="w-3 h-3 mr-2" />
                    Bescherming
                  </Badge>
                  <h2 id="trust-title" className="text-3xl md:text-4xl font-bold mb-6">
                    Wat goede beveiliging u <span className="text-gradient">oplevert</span>
                  </h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Cybersecurity is niet alleen bescherming tegen risicos. Het is ook gemoedsrust en zakelijke continuiteit.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center flex-shrink-0">
                        <ShieldAlert className="w-5 h-5 text-red-500" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">Bescherming tegen aanvallen</h3>
                        <p className="text-sm text-gray-400">Ransomware, phishing en malware worden geblokkeerd</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                        <HardDrive className="w-5 h-5 text-quantum-green" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">Snel herstel na incidenten</h3>
                        <p className="text-sm text-gray-400">Met goede backups bent u snel weer operationeel</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="w-10 h-10 rounded-lg bg-quantum-blue/10 flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-5 h-5 text-quantum-blue" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">Voldoen aan regelgeving</h3>
                        <p className="text-sm text-gray-400">AVG, NIS2 en andere compliance eisen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <div className="glass-effect p-8 rounded-2xl border border-red-500/20">
                  <h3 className="text-xl font-bold mb-6 text-center">Onze aanpak</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Eerlijk advies - geen angstmarketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Focus op wat echt risico vermindert</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Maatregelen passend bij uw budget</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Helder uitgelegd, geen technisch jargon</span>
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
                Vragen over <span className="text-gradient">cybersecurity</span>?
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-quantum-blue/10" />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-red-500/20">
              <Badge className="mb-4 sm:mb-6 bg-red-500/20 text-red-500 border-red-500/30">
                Gratis Security Check
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Weet u hoe veilig uw{' '}
                <span className="text-gradient">bedrijf</span> is?
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis security check. We bespreken uw situatie en geven eerlijk advies over de belangrijkste verbeterpunten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:opacity-90 shadow-lg shadow-red-500/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=cybersecurity">
                    Plan Gratis Security Check
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
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  Geen verplichtingen
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
                  Eerlijk advies
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500" />
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
