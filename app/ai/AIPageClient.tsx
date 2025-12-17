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
  Brain, Bot, Workflow, Phone, ArrowRight, CheckCircle2,
  ChevronDown, ShieldCheck, Zap, BarChart, HeartHandshake,
  Puzzle, Clock, Target, Quote, Users, FileSearch,
  Settings, Rocket, TrendingUp, Sparkles
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

const AICore = dynamic(() => import('@/components/3d/AICore'), { ssr: false })

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

// AI diensten/subdiensten
const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: '24/7 klantenservice met een AI die vragen beantwoordt, leads kwalificeert en afspraken inplant.',
    href: '/ai/chatbots',
    features: ['24/7 beschikbaarheid', 'Lead kwalificatie', 'CRM integratie', 'Menselijke overdracht'],
    stat: '80%',
    statLabel: 'vragen direct beantwoord'
  },
  {
    icon: Workflow,
    title: 'Process Automation',
    description: 'Automatiseer repetitieve taken zoals data-invoer, facturatie en rapportages.',
    href: '/ai/process-automation',
    features: ['Data-invoer automatisering', 'Document verwerking', 'Workflow automatisering', 'Software koppelingen'],
    stat: '40%',
    statLabel: 'tijdsbesparing'
  },
  {
    icon: BarChart,
    title: 'AI Analytics',
    description: 'Transformeer data in acties met voorspellende analyses en real-time inzichten.',
    href: '/ai/analytics',
    features: ['Voorspellende analyses', 'Klantgedrag inzicht', 'Trend detectie', 'Real-time dashboards'],
    stat: '3x',
    statLabel: 'snellere inzichten'
  },
  {
    icon: Phone,
    title: 'Virtuele Assistent',
    description: 'Een slimme assistent voor telefoongesprekken, afspraakplanning en agendabeheer.',
    href: '/ai/virtual-assistant',
    features: ['Intelligente call routing', 'Automatische planning', 'Transcriptie', '24/7 bereikbaar'],
    stat: '95%',
    statLabel: 'bereikbaarheid'
  },
]

// Veelvoorkomende klantsituaties
const customerSituations = [
  {
    quote: 'Mijn team is te veel tijd kwijt aan repetitieve, handmatige taken.',
    context: 'Process Automation',
    icon: Clock
  },
  {
    quote: 'We lopen omzet mis omdat we niet 24/7 kunnen reageren op leads.',
    context: 'AI Chatbot',
    icon: Bot
  },
  {
    quote: 'Onze klantenservice is overbelast en de wachttijden zijn te lang.',
    context: 'AI Klantenservice',
    icon: Users
  },
  {
    quote: 'We nemen beslissingen op onderbuikgevoel in plaats van op data.',
    context: 'AI Analytics',
    icon: BarChart
  },
]

// Werkwijze/Proces
const processSteps = [
  {
    step: '01',
    title: 'Gratis AI Scan',
    description: 'We analyseren uw processen en identificeren de beste AI kansen voor uw bedrijf.',
    icon: FileSearch
  },
  {
    step: '02',
    title: 'Oplossing & ROI',
    description: 'We presenteren concrete AI oplossingen met een duidelijke business case en ROI berekening.',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'Snelle implementatie met minimale verstoring. Uw team wordt volledig getraind.',
    icon: Rocket
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description: 'Continue monitoring en optimalisatie voor maximale resultaten.',
    icon: TrendingUp
  },
]

// Waarom Start Beheer voor AI
const whyUs = [
  {
    icon: BarChart,
    title: 'Meetbare ROI',
    description: 'We implementeren alleen AI die zichzelf gegarandeerd terugverdient, met duidelijke KPIs.',
    stat: '100%',
    statLabel: 'ROI focus'
  },
  {
    icon: Puzzle,
    title: 'Naadloze Integratie',
    description: 'Onze AI werkt perfect samen met uw bestaande software en processen.',
    stat: 'Alle',
    statLabel: 'systemen'
  },
  {
    icon: ShieldCheck,
    title: 'Veilig & Ethisch',
    description: 'Uw data is veilig en onze AI wordt ethisch en verantwoordelijk ingezet.',
    stat: 'AVG',
    statLabel: 'compliant'
  },
  {
    icon: HeartHandshake,
    title: 'Jargon-vrij',
    description: 'Wij spreken uw taal, geen technische termen. U begrijpt precies wat u krijgt.',
    stat: '1',
    statLabel: 'aanspreekpunt'
  },
]

// FAQ - geoptimaliseerd voor SEO
const faqs = [
  {
    q: 'Wat kost AI implementatie voor het MKB?',
    a: 'De kosten voor AI implementatie variëren sterk per oplossing. Een eenvoudige chatbot start vanaf €500/maand, terwijl complexe process automation projecten een eenmalige investering van €5.000-€15.000 vragen. Belangrijk: onze focus ligt altijd op ROI - de investering moet zichzelf terugverdienen.'
  },
  {
    q: 'Vervangt AI mijn medewerkers?',
    a: 'Nee, AI vervangt taken, geen mensen. Het doel is om uw medewerkers te "augmenteren": bevrijd hen van saai, repetitief werk, zodat zij zich kunnen richten op creativiteit, strategie en complex klantcontact. AI maakt uw team productiever, niet kleiner.'
  },
  {
    q: 'Hoe snel zie ik resultaat van AI?',
    a: 'Afhankelijk van de complexiteit, maar onze projecten leveren vaak al binnen 4 tot 6 weken de eerste meetbare resultaten op. Bij chatbots ziet u direct effect, bij process automation duurt de implementatie iets langer maar is de impact groter.'
  },
  {
    q: 'Is mijn bedrijf geschikt voor AI?',
    a: 'Als uw bedrijf processen heeft die herhaaldelijk worden uitgevoerd, of als u veel klantcontact heeft, is de kans 99% dat u kunt profiteren van AI. Onze gratis AI Scan is de perfecte manier om vrijblijvend uw specifieke kansen te ontdekken.'
  },
  {
    q: 'Welke AI oplossing levert het meeste op?',
    a: 'Dit hangt af van uw situatie. Voor bedrijven met veel klantcontact is een AI chatbot vaak het meest impactvol. Voor administratie-intensieve bedrijven is process automation de winnaar. Onze AI Scan helpt u de beste keuze te maken.'
  },
  {
    q: 'Hoe werkt AI samen met mijn huidige software?',
    a: 'Onze AI-oplossingen integreren naadloos met populaire software zoals Microsoft 365, HubSpot, Salesforce, en vele anderen. We gebruiken standaard API-koppelingen en kunnen custom integraties bouwen waar nodig.'
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
    <Link href={service.href} className="block h-full">
      <article className="glass-effect p-6 rounded-2xl h-full border border-quantum-purple/20 hover:border-quantum-purple/40 transition-all group cursor-pointer hover:scale-[1.02]">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 rounded-xl bg-quantum-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <service.icon className="w-7 h-7 text-quantum-purple" />
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-quantum-green">{service.stat}</p>
            <p className="text-xs text-gray-500">{service.statLabel}</p>
          </div>
        </div>

        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-400 mb-4">{service.description}</p>

        <ul className="space-y-2 mb-6">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
              <CheckCircle2 className="w-4 h-4 text-quantum-green flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="flex items-center text-quantum-purple font-medium group-hover:gap-3 gap-2 transition-all">
          Bekijk dienst
          <ArrowRight className="w-4 h-4" />
        </div>
      </article>
    </Link>
  </ScrollTrigger>
)

const WhyUsCard = ({ item, index }: { item: typeof whyUs[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-quantum-purple/30 transition-all h-full">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-quantum-purple/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-quantum-purple" />
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

export default function AIPageClient() {
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
                <Brain className="w-4 h-4 mr-2 inline" />
                AI & Automatisering
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                AI die{' '}
                <span className="block text-gradient mt-2">
                  Écht Werkt
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                Wij brengen de <strong className="text-white">kracht van AI naar het MKB</strong>.
                Van slimme chatbots tot process automation – meetbare resultaten zonder hype.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span><strong>Chatbots, Automation & Analytics</strong> in één aanpak</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Bespaar gemiddeld <strong>40% tijd</strong> op repetitieve taken</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span><strong>Meetbare ROI</strong> – geen vage beloftes</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Target className="w-4 h-4 text-quantum-purple" />
                  <span>MKB specialist</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Zap className="w-4 h-4 text-quantum-green" />
                  <span>Snelle implementatie</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25"
                  asChild
                >
                  <Link href="/contact?service=ai-scan">
                    Gratis AI Scan
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
                  <AICore />
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
                    <p className="text-xs text-gray-400">Tijdsbesparing</p>
                    <p className="text-lg font-bold text-white">40%</p>
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
                    <Bot className="w-5 h-5 text-quantum-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">24/7 Beschikbaar</p>
                    <p className="text-lg font-bold text-white">Altijd</p>
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
                  AI implementatie voor het <span className="text-gradient">MKB</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Als specialist in <strong className="text-gray-300">AI voor het MKB</strong> helpen wij bedrijven groeien met slimme automatisering.
                  Of u nu zoekt naar <strong className="text-gray-300">chatbot implementatie</strong>, efficiënte <strong className="text-gray-300">process automation (RPA)</strong>,
                  voorspellende <strong className="text-gray-300">AI analytics</strong> of een slimme <strong className="text-gray-300">virtuele assistent</strong> –
                  wij maken AI toegankelijk en winstgevend voor uw bedrijf.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN OVERZICHT ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="diensten-title">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Onze AI Oplossingen</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Praktische AI met <span className="text-gradient">meetbare resultaten</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Geen abstracte technologie, maar concrete oplossingen die direct waarde toevoegen aan uw bedrijf.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          <ScrollTrigger>
            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">
                Niet zeker welke AI oplossing past bij uw situatie?
              </p>
              <Button variant="outline" className="border-white/20 hover:bg-white/5" asChild>
                <Link href="/contact?service=ai-advies">
                  Plan Gratis AI Scan
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* ==================== VEELVOORKOMENDE SITUATIES ==================== */}
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
                    Veelvoorkomende <span className="text-gradient">AI uitdagingen</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Herkent u één van deze situaties? Dan kan AI u direct helpen.
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
                    <Link href="/contact?service=ai">
                      Ja, dit herken ik – neem contact op
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollTrigger>
            </div>
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
                    <Badge className="mb-4">Onze AI Werkwijze</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van scan naar <span className="text-gradient">werkende AI</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Een gestructureerde aanpak die zorgt voor snelle resultaten en meetbare impact.
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
                  <Badge className="mb-4">Onze AI Belofte</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    AI die <span className="text-gradient">écht werkt</span> voor uw bedrijf
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Geen hype, maar praktische AI-oplossingen met aantoonbare resultaten.
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
                Vragen over <span className="text-gradient">AI voor uw bedrijf</span>?
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
                <Brain className="w-8 h-8 text-quantum-purple" />
              </div>

              <Badge className="mb-4 sm:mb-6 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
                Gratis & Vrijblijvend
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar om AI{' '}
                <span className="text-gradient">te omarmen?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis AI Scan en ontdek hoe u minimaal 20 uur per week kunt besparen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=ai-scan">
                    Plan Gratis AI Scan
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
                  Concrete kansen
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  ROI berekening
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
