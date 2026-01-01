'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Server, CheckCircle2, ArrowRight, Phone,
  Clock, Wrench, UserCheck,
  CalendarCheck, MessageSquare, ThumbsUp, Target,
  Gauge, HeartHandshake, Award, HardHat,
  Headphones, MapPin, Star, Activity, Search, Cloud, Shield, Monitor,
  Building2, Laptop, Users, FileCheck, ShieldCheck, BookOpen, Quote
} from 'lucide-react'
import React, { Suspense } from 'react'
import Link from 'next/link'

// Loading skeleton voor 3D component (buiten Canvas)
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

const ITInfrastructure = dynamic(() => import('@/components/3d/ITInfrastructure'), {
  ssr: false
})

// ============================================================================
// DATA
// ============================================================================

// De 4 hoofdcategorieën met links naar subpagina's
const itCategories = [
  {
    icon: Server,
    title: 'Systeembeheer',
    description: 'Volledig IT-beheer uitbesteden. Servers, netwerken, backups en infrastructuur - wij regelen het allemaal.',
    features: ['Server beheer & onderhoud', 'Netwerk & WiFi infrastructuur', 'Backup & disaster recovery', 'VoIP & telefonie'],
    link: '/systeembeheer-uitbesteden',
    color: 'quantum-blue',
    cta: 'Bekijk Systeembeheer'
  },
  {
    icon: Monitor,
    title: 'Werkplekbeheer',
    description: "Al uw werkplekken professioneel beheerd. PC's, laptops en software - altijd up-to-date en veilig.",
    features: ['Device management', 'Software installatie & updates', 'Helpdesk & remote support', 'Gebruikersbeheer'],
    link: '/werkplekbeheer-uitbesteden',
    color: 'quantum-green',
    cta: 'Bekijk Werkplekbeheer'
  },
  {
    icon: Cloud,
    title: 'Cloud & Microsoft 365',
    description: 'Optimaal werken in de cloud. Microsoft 365 beheer, e-mail, opslag en samenwerking.',
    features: ['Microsoft 365 beheer', 'E-mail & Exchange', 'OneDrive & SharePoint', 'Teams implementatie'],
    link: '/microsoft-365-beheer',
    color: 'quantum-purple',
    cta: 'Bekijk Cloud Diensten'
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description: 'Bescherm uw bedrijf tegen digitale dreigingen. Van antivirus tot complete security audits.',
    features: ['Antivirus & anti-malware', 'Firewall & netwerkbeveiliging', 'Security awareness training', 'AVG & compliance'],
    link: '/cybersecurity',
    color: 'quantum-orange',
    cta: 'Bekijk Security'
  },
]

// Support modellen
const supportModels = [
  {
    icon: Headphones,
    title: 'Remote IT Support',
    description: 'Directe hulp op afstand via telefoon of remote verbinding. Ideaal voor snelle vragen en softwareproblemen.',
    features: ['Directe verbinding met IT-expert', 'Scherm delen voor snelle diagnose', 'Geen reistijd, snelle oplossing', 'Beschikbaar tijdens kantooruren'],
    color: 'quantum-blue'
  },
  {
    icon: MapPin,
    title: 'On-Site IT Support',
    description: 'Een IT-specialist komt naar uw locatie voor hardwareproblemen, installaties of complexe issues.',
    features: ['Hands-on hulp op locatie', 'Hardware reparatie & installatie', 'Netwerk troubleshooting', 'Persoonlijk contact'],
    color: 'quantum-green'
  },
  {
    icon: CalendarCheck,
    title: 'Vaste IT-dag',
    description: 'Een vaste IT\'er op uw locatie, bijvoorbeeld één dag per week. Uw eigen "IT-afdeling" zonder vast dienstverband.',
    features: ['Vaste IT\'er die uw omgeving kent', 'Structurele ondersteuning', 'Direct aanspreekpunt voor medewerkers', 'Preventief onderhoud inbegrepen'],
    color: 'quantum-purple'
  },
]

// Veelvoorkomende klantsituaties (Social Proof alternatief)
const customerSituations = [
  {
    quote: 'Wij hebben geen interne IT-afdeling en willen alles uitbesteden.',
    context: 'Volledige IT-uitbesteding',
    icon: Building2
  },
  {
    quote: 'Onze medewerkers hebben regelmatig problemen met laptops en software.',
    context: 'Werkplekbeheer & Helpdesk',
    icon: Laptop
  },
  {
    quote: 'We willen overstappen naar Microsoft 365 maar weten niet hoe.',
    context: 'Cloud migratie',
    icon: Cloud
  },
  {
    quote: 'We zoeken een partij die sneller reageert dan onze huidige IT-leverancier.',
    context: 'Betere IT-partner',
    icon: Clock
  },
]

// Trust indicators
const trustIndicators = [
  {
    icon: ShieldCheck,
    title: 'AVG-compliant',
    description: 'Wij werken volgens AVG-richtlijnen en zorgen voor veilige gegevensverwerking.'
  },
  {
    icon: FileCheck,
    title: 'SLA op maat',
    description: 'Duidelijke afspraken over responstijden en serviceniveaus.'
  },
  {
    icon: Activity,
    title: 'Snelle reactie',
    description: 'Direct aan de slag wanneer u ons nodig heeft.'
  },
  {
    icon: BookOpen,
    title: 'Volledige documentatie',
    description: 'Alle wijzigingen worden vastgelegd zodat u altijd inzicht heeft.'
  },
]

// Waarom kiezen voor ons
const whyChooseUs = [
  {
    icon: Clock,
    title: 'Snelle Respons',
    description: 'Geen eindeloze wachttijden. U spreekt direct met een IT-expert die uw probleem begrijpt en oplost.',
    stat: 'Direct',
    statLabel: 'persoonlijk contact'
  },
  {
    icon: UserCheck,
    title: 'Persoonlijk Contact',
    description: 'Geen anonieme callcenters. U kent uw IT\'er en uw IT\'er kent uw bedrijf en systemen.',
    stat: '1',
    statLabel: 'vast aanspreekpunt'
  },
  {
    icon: Wrench,
    title: 'Alles Op Maat',
    description: 'Geen standaardpakketten die niet passen. Wij stemmen de support af op úw situatie en budget.',
    stat: '100%',
    statLabel: 'flexibele SLA\'s'
  },
  {
    icon: ThumbsUp,
    title: 'Echte Oplossingen',
    description: 'Wij lossen problemen écht op, geen tijdelijke pleisters. En we leggen uit wat we doen.',
    stat: 'Grondig',
    statLabel: 'geen halve oplossingen'
  },
]

// Het proces
const processSteps = [
  {
    step: '01',
    title: 'U belt of mailt',
    description: 'Probleem? Neem contact op via telefoon, e-mail of ons klantenportaal.',
    icon: MessageSquare
  },
  {
    step: '02',
    title: 'Wij analyseren',
    description: 'Een IT-specialist beoordeelt uw vraag en bepaalt de beste aanpak.',
    icon: Search
  },
  {
    step: '03',
    title: 'Wij lossen op',
    description: 'Remote of on-site - wij werken tot het probleem is opgelost.',
    icon: Wrench
  },
  {
    step: '04',
    title: 'U bent geholpen',
    description: 'Probleem opgelost, uitleg gegeven, en advies voor de toekomst.',
    icon: CheckCircle2
  },
]

// ============================================================================
// COMPONENTS
// ============================================================================

const CategoryCard = ({ category, index }: { category: typeof itCategories[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <article className={`glass-effect p-5 sm:p-6 lg:p-8 rounded-2xl h-full border border-${category.color}/20 hover:border-${category.color}/40 transition-all group flex flex-col`}>
      <div className={`w-14 h-14 rounded-2xl bg-${category.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <category.icon className={`w-7 h-7 text-${category.color}`} />
      </div>

      <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
      <p className="text-gray-400 mb-6">{category.description}</p>

      <ul className="space-y-2 mb-6 flex-grow">
        {category.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className={`w-4 h-4 text-${category.color} flex-shrink-0`} />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        className={`w-full bg-${category.color}/10 hover:bg-${category.color}/20 text-${category.color} border border-${category.color}/30`}
        asChild
      >
        <Link href={category.link}>
          {category.cta}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </Button>
    </article>
  </ScrollTrigger>
)

const SupportModelCard = ({ model, index }: { model: typeof supportModels[0], index: number }) => (
  <ScrollTrigger delay={index * 0.15}>
    <article className={`glass-effect p-5 sm:p-6 lg:p-8 rounded-2xl h-full border border-${model.color}/20 hover:border-${model.color}/40 transition-all group`}>
      <div className={`w-14 h-14 rounded-2xl bg-${model.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <model.icon className={`w-7 h-7 text-${model.color}`} />
      </div>

      <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
      <p className="text-gray-400 mb-6">{model.description}</p>

      <ul className="space-y-3">
        {model.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <CheckCircle2 className={`w-4 h-4 text-${model.color} flex-shrink-0`} />
            <span className="text-gray-300">{feature}</span>
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

export default function ITSupportPageClient() {
  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-quantum-blue/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-blue/10 text-quantum-blue border-quantum-blue/30">
                <Server className="w-4 h-4 mr-2 inline" />
                IT Support & Beheer
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                IT Support voor{' '}
                <span className="block text-gradient mt-2">
                  het MKB
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                Complete <strong className="text-white">IT-ondersteuning</strong>, <strong className="text-white">werkplekbeheer</strong> en <strong className="text-white">systeembeheer</strong> voor het MKB.
                Wij helpen bedrijven met het oplossen van IT-problemen, het beheren van systemen en het veilig en efficiënt maken van de gehele IT-omgeving.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span><strong>Remote IT support</strong> of on-site ondersteuning op locatie</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Geschikt voor ZZP tot 150+ medewerkers</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Flexibele SLA's - <strong>IT beheer uitbesteden</strong> op maat</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4 text-quantum-blue" />
                  <span>Snelle responstijd</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>Persoonlijke aanpak</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25"
                  asChild
                >
                  <Link href="/contact?service=it-support">
                    Gratis Adviesgesprek
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                </div>
            </motion.div>

            {/* 3D Visualization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] lg:-mr-8 xl:-mr-12 2xl:-mr-20"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-quantum-blue/20 via-quantum-purple/10 to-transparent blur-3xl rounded-full" />

              <Suspense fallback={<Scene3DLoader />}>
                <Canvas camera={{ position: [0, 0.5, 6], fov: 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <ITInfrastructure />
                </Canvas>
              </Suspense>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden lg:block absolute bottom-8 left-4 glass-effect px-4 py-3 rounded-xl border border-quantum-green/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-quantum-green/20 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Support Status</p>
                    <p className="text-lg font-bold">Beschikbaar</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="hidden lg:block absolute top-8 right-4 glass-effect px-4 py-3 rounded-xl border border-quantum-blue/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-quantum-blue/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-quantum-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Systemen</p>
                    <p className="text-lg font-bold">Beveiligd</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent" />
      </section>

      {/* ==================== SEO INTRO SECTIE ==================== */}
      <section className="py-16 relative" aria-labelledby="seo-intro-title">
        <div className="absolute inset-0 bg-cyber-darker" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-quantum-blue/5 via-transparent to-quantum-purple/5 border border-white/10">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-quantum-blue/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-quantum-purple/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  IT-support voor het MKB – complete <span className="text-gradient">IT-ondersteuning</span>, werkplekbeheer en systeembeheer
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Wij helpen bedrijven met het oplossen van IT-problemen, het beheren van systemen en het veilig en efficiënt maken van de gehele IT-omgeving.
                  Of u nu zoekt naar <strong className="text-gray-300">IT support uitbesteden</strong>, professioneel <strong className="text-gray-300">IT beheer</strong> of betrouwbare <strong className="text-gray-300">IT ondersteuning</strong> voor uw MKB-bedrijf –
                  Start Beheer is uw partner voor alle IT-zaken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== IT DIENSTEN ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="diensten-title">
        {/* Modern mesh gradient background */}
        <div className="absolute inset-0 bg-cyber-dark/80" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-quantum-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-quantum-purple/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-quantum-green/5 rounded-full blur-[150px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Onze IT Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Complete <span className="text-gradient">IT-ondersteuning</span> voor uw bedrijf
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van werkplekbeheer tot cybersecurity. Kies de dienst die past bij uw behoefte, of combineer ze voor totale IT-ontzorging.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {itCategories.map((category, index) => (
              <CategoryCard key={index} category={category} index={index} />
            ))}
          </div>

          <ScrollTrigger>
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">
                Niet zeker welke combinatie? Wij adviseren u graag.
              </p>
              <Button variant="outline" className="border-white/20 hover:bg-white/5" asChild>
                <Link href="/contact?service=it-advies">
                  Vraag Gratis Advies
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* ==================== VEELVOORKOMENDE KLANTSITUATIES ==================== */}
      <section className="py-24 relative" aria-labelledby="situaties-title">
        <div className="absolute inset-0 bg-cyber-darker" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-5xl mx-auto">
            {/* Container met gradient border effect */}
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-cyber-dark/80 border border-quantum-purple/20 overflow-hidden">
              {/* Background glow */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-quantum-purple/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-quantum-blue/10 rounded-full blur-3xl" />

              <ScrollTrigger>
                <header className="text-center mb-10 relative z-10">
                  <Badge className="mb-4 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                    <Users className="w-3 h-3 mr-2" />
                    Herkenbaar?
                  </Badge>
                  <h2 id="situaties-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Veelvoorkomende <span className="text-gradient">klantsituaties</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Herkent u één van deze situaties? Dan kunnen wij u helpen met professionele IT-ondersteuning.
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
                    <Link href="/contact?service=it-support">
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

      {/* ==================== SUPPORT MODELLEN ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="support-title">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark/50 to-cyber-darker" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-quantum-green/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-quantum-blue/8 rounded-full blur-[100px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Flexibele Ondersteuning</Badge>
              <h2 id="support-title" className="text-3xl md:text-4xl font-bold mb-4">
                IT Support op <span className="text-gradient">úw manier</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Kies hoe u ondersteuning wilt ontvangen. Remote IT support, on-site ondersteuning, of een vaste IT-dag - alles is mogelijk.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {supportModels.map((model, index) => (
              <SupportModelCard key={index} model={model} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRUST / BETROUWBAARHEID ==================== */}
      <section className="py-24 relative" aria-labelledby="trust-title">
        {/* Subtle accent */}
        <div className="absolute inset-0 bg-cyber-darker" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-quantum-green/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-quantum-green/20 to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollTrigger>
                <div>
                  <Badge className="mb-4 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
                    <ShieldCheck className="w-3 h-3 mr-2" />
                    Betrouwbaar & Veilig
                  </Badge>
                  <h2 id="trust-title" className="text-3xl md:text-4xl font-bold mb-6">
                    Betrouwbare <span className="text-gradient">IT-partner</span> voor het MKB
                  </h2>
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Wij werken volgens AVG-richtlijnen, beheren veilige omgevingen en documenteren alle wijzigingen zodat u altijd inzicht heeft in uw IT-omgeving.
                    Bij Start Beheer staat betrouwbaarheid en transparantie centraal.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {trustIndicators.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/5">
                        <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-quantum-green" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <div className="glass-effect p-8 rounded-2xl border border-quantum-green/20">
                  <h3 className="text-xl font-bold mb-6 text-center">Wat u van ons mag verwachten</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Volledige transparantie over werkzaamheden en kosten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Heldere communicatie over wat we doen en waarom</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Duidelijke SLA met heldere afspraken</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Veilige omgang met uw bedrijfsgegevens (AVG)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">Uitgebreide documentatie van uw IT-omgeving</span>
                    </li>
                  </ul>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOE HET WERKT ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="proces-title">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-cyber-dark/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-quantum-blue/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-quantum-blue/20 to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Container met top border accent */}
            <div className="relative">
              {/* Top gradient line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-quantum-blue to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Zo Werkt Het</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van vraag naar <span className="text-gradient">oplossing</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Geen ingewikkelde procedures. U meldt het, wij lossen het op.
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

      {/* ==================== WAAROM WIJ ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="waarom-title">
        {/* Modern glow background */}
        <div className="absolute inset-0 bg-cyber-darker" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-quantum-blue/5 rounded-full blur-[100px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Container met side accents */}
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-blue/10 bg-gradient-to-b from-quantum-blue/5 to-transparent">
              {/* Side accent lines */}
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-quantum-blue/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-quantum-green/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    IT Support met een <span className="text-gradient">persoonlijke touch</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Wij zijn geen anoniem callcenter. Bij ons krijgt u een vaste IT-specialist die uw bedrijf en systemen door en door kent.
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

      {/* ==================== SLA & MAATWERK ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="sla-title">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-darker via-cyber-dark to-cyber-darker" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-quantum-purple/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-quantum-blue/8 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollTrigger>
                <div>
                  <Badge className="mb-4">100% Flexibel</Badge>
                  <h2 id="sla-title" className="text-3xl md:text-4xl font-bold mb-6">
                    SLA en tarieven <span className="text-gradient">volledig op maat</span>
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Wij geloven niet in standaardpakketten die niet passen. Daarom stellen wij samen met u een Service Level Agreement op die aansluit bij úw bedrijf, úw budget en úw verwachtingen.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-quantum-blue/10 flex items-center justify-center flex-shrink-0">
                        <Gauge className="w-5 h-5 text-quantum-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Flexibele Responstijden</h3>
                        <p className="text-gray-400 text-sm">Van 4 uur tot next-business-day - u kiest wat bij u past.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                        <HeartHandshake className="w-5 h-5 text-quantum-green" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Geen Lange Contracten</h3>
                        <p className="text-gray-400 text-sm">Maandelijks opzegbaar of strippenkaart - geen verplichtingen.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-quantum-purple/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-quantum-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Transparante Tarieven</h3>
                        <p className="text-gray-400 text-sm">U weet vooraf wat het kost. Geen verrassingen achteraf.</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90"
                    asChild
                  >
                    <Link href="/contact?service=it-support">
                      Vraag een Offerte Op Maat
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <aside className="glass-effect p-8 rounded-2xl border border-quantum-blue/20">
                  <h3 className="text-xl font-bold mb-6 text-center">Voorbeelden van onze flexibiliteit</h3>

                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-quantum-blue" />
                        <h4 className="font-bold">Strippenkaart</h4>
                      </div>
                      <p className="text-gray-400 text-sm">Koop een bundel uren en gebruik ze wanneer nodig. Ideaal als u incidenteel support nodig heeft.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <CalendarCheck className="w-5 h-5 text-quantum-green" />
                        <h4 className="font-bold">Vast Uurtarief</h4>
                      </div>
                      <p className="text-gray-400 text-sm">Betaal per uur voor de support die u afneemt. Duidelijk en overzichtelijk.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="flex items-center gap-3 mb-2">
                        <HardHat className="w-5 h-5 text-quantum-purple" />
                        <h4 className="font-bold">Vast Maandbedrag</h4>
                      </div>
                      <p className="text-gray-400 text-sm">Voorspelbare kosten met onbeperkte support. U weet precies waar u aan toe bent.</p>
                    </div>
                  </div>
                </aside>
              </ScrollTrigger>
            </div>
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
                Welke IT-oplossing past bij{' '}
                <span className="text-gradient">uw bedrijf?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis adviesgesprek. Samen bekijken we uw situatie en adviseren we de beste aanpak - zonder verplichtingen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=it-support">
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
