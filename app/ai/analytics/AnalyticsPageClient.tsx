'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BarChart3, CheckCircle2, ArrowRight, Phone,
  TrendingUp, Target, Brain, Zap,
  Users, PieChart, LineChart, Activity,
  Quote, ChevronDown, Eye, Lightbulb,
  Clock, Settings, Database, AlertCircle
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

const Analytics3D = dynamic(() => import('@/components/3d/Analytics3D'), { ssr: false })

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

// Analytics diensten
const services = [
  {
    icon: TrendingUp,
    title: 'Voorspellende Analyses',
    description: 'AI die trends voorspelt voordat ze zichtbaar zijn. Anticipeer op veranderingen.',
    features: ['Sales forecasting', 'Demand prediction', 'Trend identificatie', 'Seizoenspatronen'],
    color: 'quantum-blue'
  },
  {
    icon: Users,
    title: 'Klantinzichten',
    description: 'Begrijp uw klanten beter. Segmentatie, gedragsanalyse en churn voorspelling.',
    features: ['Klantsegmentatie', 'Gedragsanalyse', 'Churn prediction', 'Customer lifetime value'],
    color: 'quantum-purple'
  },
  {
    icon: PieChart,
    title: 'Business Intelligence',
    description: 'Real-time dashboards met KPIs en metrics die er toe doen.',
    features: ['Real-time dashboards', 'Custom KPIs', 'Drill-down analyse', 'Benchmark data'],
    color: 'quantum-green'
  },
  {
    icon: Activity,
    title: 'Performance Analytics',
    description: 'Meet en optimaliseer de prestaties van uw campagnes en kanalen.',
    features: ['Marketing ROI', 'Channel performance', 'Conversion tracking', 'Attribution modelling'],
    color: 'quantum-orange'
  },
  {
    icon: AlertCircle,
    title: 'Anomalie Detectie',
    description: 'Automatische detectie van afwijkingen en onverwachte patronen in uw data.',
    features: ['Fraud detection', 'Error alerts', 'Outlier detection', 'Quality monitoring'],
    color: 'quantum-blue'
  },
  {
    icon: Lightbulb,
    title: 'AI Recommendations',
    description: 'Concrete aanbevelingen op basis van uw data. Van pricing tot content.',
    features: ['Pricing optimization', 'Product recommendations', 'Content suggestions', 'Next best action'],
    color: 'quantum-purple'
  },
]


// Veelvoorkomende situaties
const customerSituations = [
  {
    quote: 'We hebben veel data maar weten niet wat we ermee moeten doen.',
    context: 'Data Strategie',
    icon: Database
  },
  {
    quote: 'Onze beslissingen zijn gebaseerd op onderbuikgevoel, niet op data.',
    context: 'Data-Driven Decisions',
    icon: Brain
  },
  {
    quote: 'We zien trends pas als het te laat is om erop te reageren.',
    context: 'Voorspellende Analytics',
    icon: TrendingUp
  },
  {
    quote: 'Rapportages maken kost veel tijd en zijn vaak verouderd.',
    context: 'Real-time Dashboards',
    icon: Clock
  },
]

// Waarom AI Analytics
const whyAnalytics = [
  {
    icon: Eye,
    title: 'Diepe Inzichten',
    description: 'AI ontdekt patronen die menselijk oog niet ziet.',
    stat: '10x',
    statLabel: 'meer inzicht'
  },
  {
    icon: TrendingUp,
    title: 'Voorspellend',
    description: 'Voorspel trends voordat ze zichtbaar worden.',
    stat: '85%',
    statLabel: 'accuratesse'
  },
  {
    icon: Zap,
    title: 'Real-time',
    description: 'Direct inzicht, geen wachten op rapporten.',
    stat: 'Live',
    statLabel: 'data'
  },
  {
    icon: Target,
    title: 'Actionable',
    description: 'Concrete aanbevelingen, niet alleen data.',
    stat: 'ROI',
    statLabel: 'focused'
  },
]

// Het proces
const processSteps = [
  {
    step: '01',
    title: 'Data Audit',
    description: 'We inventariseren uw databronnen en bepalen de mogelijkheden.',
    icon: Database
  },
  {
    step: '02',
    title: 'Strategie',
    description: 'We bepalen welke inzichten het meest waardevol zijn voor uw bedrijf.',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'We bouwen dashboards en AI-modellen op maat.',
    icon: Settings
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description: 'Continue verbetering van modellen en inzichten.',
    icon: TrendingUp
  },
]

// FAQ
const faqs = [
  {
    q: 'Welke data hebben jullie nodig?',
    a: 'Dat hangt af van de doelstellingen. Typisch werken we met CRM data, sales data, website analytics, marketing data, en operationele data. We kunnen vrijwel elk data formaat verwerken en integreren met bestaande systemen.'
  },
  {
    q: 'Hoe accuraat zijn de voorspellingen?',
    a: 'De accuratesse hangt af van de kwaliteit en hoeveelheid data, en de complexiteit van wat voorspeld wordt. Typisch behalen onze modellen 75-90% accuratesse. We zijn altijd transparant over de betrouwbaarheid en monitoren de prestaties continu.'
  },
  {
    q: 'Is onze data veilig?',
    a: 'Absoluut. Alle data wordt verwerkt conform AVG en opgeslagen in beveiligde omgevingen in Europa. We werken met encryptie en strikte toegangscontroles. U behoudt volledige eigendom van uw data.'
  },
  {
    q: 'Kunnen we de dashboards zelf aanpassen?',
    a: 'Ja, we bouwen dashboards die u zelf kunt aanpassen en uitbreiden. U krijgt training en documentatie. Voor complexe aanpassingen of nieuwe AI-modellen kunt u altijd bij ons terecht.'
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


const WhyCard = ({ item, index }: { item: typeof whyAnalytics[0], index: number }) => (
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

export default function AnalyticsPageClient() {
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
                <BarChart3 className="w-4 h-4 mr-2 inline" />
                AI Analytics
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Data-Driven{' '}
                <span className="block text-gradient mt-2">
                  Beslissingen
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                <strong className="text-white">AI-gedreven analytics</strong> die patronen ontdekt en trends voorspelt.
                Transformeer uw data in <strong className="text-white">concrete acties</strong>.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Voorspellende analyses voor betere beslissingen</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Real-time dashboards met uw KPIs</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Concrete aanbevelingen op basis van data</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25"
                  asChild
                >
                  <Link href="/contact?service=analytics">
                    Gratis Data Scan
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
                  <Analytics3D />
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
                    <TrendingUp className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Voorspelling</p>
                    <p className="text-lg font-bold">85% accuraat</p>
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
                    <BarChart3 className="w-5 h-5 text-quantum-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Data</p>
                    <p className="text-lg font-bold">Real-time</p>
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
              <Badge className="mb-4">Analytics Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Wat kan <span className="text-gradient">AI Analytics</span> voor u doen?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van voorspellende analyses tot real-time dashboards - ontdek de kracht van data.
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
                    <Link href="/contact?service=analytics">
                      Bespreek uw data
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WAAROM AI ANALYTICS ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-blue/10 bg-gradient-to-b from-quantum-blue/5 to-transparent">
              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom AI Analytics</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    De voordelen van <span className="text-gradient">data-driven werken</span>
                  </h2>
                </header>
              </ScrollTrigger>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyAnalytics.map((item, index) => (
                  <WhyCard key={index} item={item} index={index} />
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
                  Van data naar <span className="text-gradient">inzichten</span>
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
                Vragen over <span className="text-gradient">AI Analytics</span>?
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
                Gratis Data Scan
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar voor{' '}
                <span className="text-gradient">data-driven groei?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Vraag een gratis data scan aan. We identificeren uw grootste analytics kansen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=analytics">
                    Vraag Data Scan Aan
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
                  Scan binnen 48 uur
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Concrete aanbevelingen
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
