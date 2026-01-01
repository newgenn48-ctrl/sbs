'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BarChart3, CheckCircle2, ArrowRight, Phone,
  Target, TrendingUp, Search, Filter,
  Quote, ChevronDown, Zap, LineChart,
  Users, DollarSign, MousePointer, Eye
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

const GoogleAdsDashboard3D = dynamic(() => import('@/components/3d/GoogleAdsDashboard3D'), { ssr: false })

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

const services = [
  {
    icon: Search,
    title: 'Zoekwoord Strategie',
    description: 'Vind de meest winstgevende zoekwoorden voor uw business met onze diepgaande analyse.',
    features: ['Long-tail keywords', 'Concurrentie analyse', 'Intentie mapping', 'Negatieve keywords'],
    color: 'quantum-green'
  },
  {
    icon: Target,
    title: 'Doelgroep Targeting',
    description: 'Bereik uw ideale klant op basis van demografie, locatie en online gedrag.',
    features: ['Locatie targeting', 'Demografie filters', 'Remarketing', 'Lookalike audiences'],
    color: 'quantum-blue'
  },
  {
    icon: MousePointer,
    title: 'Advertentie Creatie',
    description: 'Overtuigende advertenties die klikken genereren en converteren.',
    features: ['A/B testing', 'Responsive ads', 'Ad extensions', 'Call-to-actions'],
    color: 'quantum-purple'
  },
  {
    icon: TrendingUp,
    title: 'Conversie Optimalisatie',
    description: 'Maximaliseer uw ROI met continue optimalisatie van campagnes.',
    features: ['Conversie tracking', 'Landingspagina advies', 'Quality Score', 'Bid management'],
    color: 'quantum-orange'
  },
  {
    icon: LineChart,
    title: 'Shopping Campagnes',
    description: 'Voor e-commerce: toon uw producten direct in de zoekresultaten.',
    features: ['Product feed setup', 'Shopping ads', 'Performance Max', 'Merchant Center'],
    color: 'quantum-green'
  },
  {
    icon: Eye,
    title: 'Rapportage & Inzicht',
    description: 'Real-time inzicht in uw campagne prestaties via ons dashboard.',
    features: ['Live dashboard', 'ROI rapportage', 'Conversie attributie', 'Maandelijkse reviews'],
    color: 'quantum-blue'
  },
]

const customerSituations = [
  {
    quote: 'We geven veel uit aan advertenties maar zien geen duidelijke ROI.',
    context: 'ROAS Optimalisatie',
    icon: DollarSign
  },
  {
    quote: 'Onze concurrenten staan altijd boven ons in Google.',
    context: 'Concurrentie Strategie',
    icon: TrendingUp
  },
  {
    quote: 'We krijgen wel klikken maar nauwelijks leads of verkopen.',
    context: 'Conversie Focus',
    icon: Target
  },
  {
    quote: 'We weten niet welke campagnes echt bijdragen aan omzet.',
    context: 'Conversie Tracking',
    icon: LineChart
  },
]

const whyGoogleAds = [
  {
    icon: Zap,
    title: 'Direct Resultaat',
    description: 'Binnen 24 uur zichtbaar bij klanten die actief zoeken naar uw product of dienst.',
    stat: '24u',
    statLabel: 'tot zichtbaar'
  },
  {
    icon: Target,
    title: 'Meetbare ROI',
    description: 'Precies weten hoeveel elke euro oplevert. Geen giswerk, maar data.',
    stat: '100%',
    statLabel: 'meetbaar'
  },
  {
    icon: Filter,
    title: 'Gerichte Targeting',
    description: 'Bereik alleen de mensen die echt geïnteresseerd zijn in uw aanbod.',
    stat: 'Hyper',
    statLabel: 'targeted'
  },
  {
    icon: TrendingUp,
    title: 'Schaalbaar',
    description: 'Begin klein, schaal op wanneer het werkt. Volledige controle over uw budget.',
    stat: 'Flex',
    statLabel: 'budget'
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Audit & Analyse',
    description: 'We analyseren uw huidige situatie, markt en concurrentie.',
    icon: Search
  },
  {
    step: '02',
    title: 'Strategie',
    description: 'We ontwikkelen een campagne strategie gericht op uw doelen.',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'We bouwen en lanceren uw campagnes met conversie tracking.',
    icon: BarChart3
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description: 'Dagelijkse monitoring en wekelijkse optimalisatie voor maximale ROI.',
    icon: TrendingUp
  },
]

const faqs = [
  {
    q: 'Wat is het minimale advertentiebudget?',
    a: 'Voor de meeste MKB-bedrijven raden we een minimaal startbudget aan van €500 tot €1000 per maand. Dit geeft ons voldoende data om de campagnes effectief te optimaliseren. Voor zeer competitieve markten kan een hoger budget nodig zijn.'
  },
  {
    q: 'Hoe snel kan ik resultaten verwachten?',
    a: 'De eerste klikken en impressies ziet u vaak binnen 24 uur. Betekenisvolle resultaten zoals een stabiele stroom van leads duren doorgaans 60-90 dagen. Dit is de tijd die nodig is om voldoende data te verzamelen en te optimaliseren.'
  },
  {
    q: 'Wat maakt jullie aanpak anders?',
    a: 'Onze focus ligt op radicale transparantie en een 100% data-gedreven aanpak. U krijgt een live-dashboard met al uw campagnedata. Elke beslissing wordt onderbouwd met data, niet met onderbuikgevoel.'
  },
  {
    q: 'Werken jullie met vaste contracten?',
    a: 'Nee, wij geloven in onze resultaten en bieden maandelijks opzegbare contracten. We zijn ervan overtuigd dat onze prestaties de beste reden zijn om te blijven.'
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
    <article className="glass-effect p-5 sm:p-6 rounded-2xl h-full border border-quantum-green/20 hover:border-quantum-green/40 transition-all group">
      <div className="w-12 h-12 rounded-xl bg-quantum-green/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
        <service.icon className="w-6 h-6 text-quantum-green" />
      </div>

      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-400 mb-4 text-sm">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-quantum-green flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  </ScrollTrigger>
)

const WhyCard = ({ item, index }: { item: typeof whyGoogleAds[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-white/10 hover:border-quantum-green/30 transition-all h-full">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-quantum-green/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-quantum-green" />
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
        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-quantum-green/30 to-transparent z-0" />
      )}

      <div className="relative z-10 text-center">
        <div className="w-20 h-20 rounded-full bg-cyber-dark border-2 border-quantum-green/30 flex items-center justify-center mx-auto mb-4 relative">
          <step.icon className="w-8 h-8 text-quantum-green" />
          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-quantum-green text-sm font-bold flex items-center justify-center text-black">
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

export default function GoogleAdsClientPage() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-quantum-green/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
                <BarChart3 className="w-4 h-4 mr-2 inline" />
                Google Ads Beheer
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Domineer Google,{' '}
                <span className="block text-gradient mt-2">
                  Converteer Meer Klanten
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                <strong className="text-white">Winstgevende Google Ads campagnes</strong> die uw ideale klanten
                aantrekken op het moment dat ze op zoek zijn. <strong className="text-white">Data-gedreven en resultaatgericht</strong>.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Gemiddeld 3x meer conversies</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Live dashboard met alle resultaten</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Geen vaste contracten</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-green to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-green/25"
                  asChild
                >
                  <Link href="/contact?service=google-ads">
                    Gratis Campagne Audit
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
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-quantum-green/20 via-quantum-blue/10 to-transparent blur-3xl rounded-full" />

              <Suspense fallback={<Scene3DLoader />}>
                <Canvas camera={{ position: [0, 0, isMobile ? 6 : 8], fov: isMobile ? 50 : 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <GoogleAdsDashboard3D />
                </Canvas>
              </Suspense>

              {/* Floating cards */}
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
                    <p className="text-xs text-gray-400">Gem. ROAS</p>
                    <p className="text-lg font-bold">4.2x</p>
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
                    <Target className="w-5 h-5 text-quantum-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Conversie</p>
                    <p className="text-lg font-bold">+320%</p>
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
              <Badge className="mb-4">Onze Expertise</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Wat we doen met <span className="text-gradient">Google Ads</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van zoekwoord analyse tot conversie optimalisatie - wij beheren al uw campagnes.
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
                    <Link href="/contact?service=google-ads">
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

      {/* ==================== WAAROM GOOGLE ADS ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-green/10 bg-gradient-to-b from-quantum-green/5 to-transparent">
              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Google Ads</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    De voordelen van <span className="text-gradient">Google Ads</span>
                  </h2>
                </header>
              </ScrollTrigger>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyGoogleAds.map((item, index) => (
                  <WhyCard key={index} item={item} index={index} />
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
            <ScrollTrigger>
              <header className="text-center mb-16">
                <Badge className="mb-4">Ons Proces</Badge>
                <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                  Van analyse naar <span className="text-gradient">resultaat</span>
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
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="faq-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Vragen over <span className="text-gradient">Google Ads</span>?
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
                Gratis Audit
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar om te{' '}
                <span className="text-gradient">groeien?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Vraag een gratis campagne audit aan en ontdek hoeveel potentie er nog in uw Google Ads zit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-green to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-green/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=google-ads">
                    Gratis Audit Aanvragen
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
                  Resultaat binnen 48 uur
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
