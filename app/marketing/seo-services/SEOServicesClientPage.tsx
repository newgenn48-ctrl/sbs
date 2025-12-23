'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Search, CheckCircle2, ArrowRight, Phone,
  TrendingUp, Globe, BarChart, FileText,
  Link as LinkIcon, Target, Zap, Eye,
  ChevronDown, Shield, Award, Clock
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

const SEOSearchResults3D = dynamic(() => import('@/components/3d/SEOSearchResults3D'), { ssr: false })

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

// SEO diensten
const services = [
  {
    icon: Zap,
    title: 'Technische SEO',
    description: 'Een waterdicht technisch fundament dat Google begrijpt en snel kan crawlen.',
    features: ['Core Web Vitals optimalisatie', 'Schema markup', 'Crawl budget optimalisatie', 'Internationale SEO'],
    color: 'quantum-blue'
  },
  {
    icon: FileText,
    title: 'Content Strategie',
    description: 'Content die niet alleen informeert, maar ook autoriteit en rankings bouwt.',
    features: ['Diepgaand keyword research', 'Content gap analyse', 'Topical authority mapping', '10x content creatie'],
    color: 'quantum-green'
  },
  {
    icon: LinkIcon,
    title: 'Linkbuilding',
    description: 'Hoogwaardige backlinks die vertrouwen en autoriteit opbouwen.',
    features: ['Digitale PR campagnes', 'Link-earning strategieën', 'Concurrentie backlink analyse', 'Broken link recovery'],
    color: 'quantum-purple'
  },
  {
    icon: Globe,
    title: 'Local SEO',
    description: 'Domineer lokale zoekresultaten en Google Maps voor uw regio.',
    features: ['Google Business optimalisatie', 'Lokale citations', 'Review management', 'Local pack rankings'],
    color: 'quantum-orange'
  },
  {
    icon: Target,
    title: 'Keyword Research',
    description: 'Ontdek de zoekwoorden waar uw klanten daadwerkelijk naar zoeken.',
    features: ['Search intent analyse', 'Long-tail opportunities', 'Concurrentie keyword analyse', 'Keyword clustering'],
    color: 'quantum-blue'
  },
  {
    icon: BarChart,
    title: 'Reporting & Analyse',
    description: 'Transparante rapportage met focus op resultaten die ertoe doen.',
    features: ['Live dashboard 24/7', 'Traffic & conversie tracking', 'ROI rapportage', 'Maandelijkse strategiesessies'],
    color: 'quantum-green'
  },
]

// Veelvoorkomende situaties
const customerSituations = [
  {
    quote: 'We zijn onzichtbaar in Google voor onze belangrijkste zoekwoorden.',
    context: 'Zichtbaarheid probleem',
    icon: Eye
  },
  {
    quote: 'Concurrenten met mindere producten domineren onze markt online.',
    context: 'Concurrentie dominantie',
    icon: TrendingUp
  },
  {
    quote: 'We investeren in content maar het levert geen organisch verkeer op.',
    context: 'Content strategie',
    icon: FileText
  },
  {
    quote: 'Onze website heeft technische problemen die rankings saboteren.',
    context: 'Technische SEO',
    icon: Zap
  },
]

// Waarom SEO
const whySEO = [
  {
    icon: TrendingUp,
    title: 'Duurzame Groei',
    description: 'SEO bouwt een fundament dat maanden en jaren blijft renderen, geen tijdelijke boost.',
    stat: 'Langetermijn',
    statLabel: 'investering'
  },
  {
    icon: Award,
    title: 'Gratis Verkeer',
    description: 'Organisch verkeer kost geen klik-kosten. Elke bezoeker is pure winst.',
    stat: '€0',
    statLabel: 'per klik'
  },
  {
    icon: Shield,
    title: 'Autoriteit Opbouwen',
    description: 'Hoge rankings positioneren u als expert en marktleider in uw vakgebied.',
    stat: 'Top 3',
    statLabel: 'posities'
  },
  {
    icon: BarChart,
    title: 'Lagere Kosten',
    description: 'Minder afhankelijk van betaalde advertenties met steeds hogere kosten.',
    stat: '-60%',
    statLabel: 'ad spend'
  },
]

// Het proces
const processSteps = [
  {
    step: '01',
    title: 'SEO Audit',
    description: 'Diepgaande analyse van uw website, concurrentie en groeikansen.',
    icon: Search
  },
  {
    step: '02',
    title: 'Strategie',
    description: 'Datagedreven SEO-strategie afgestemd op uw bedrijfsdoelen.',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'Technische optimalisaties, content creatie en linkbuilding campagnes.',
    icon: Zap
  },
  {
    step: '04',
    title: 'Monitoring',
    description: 'Continue optimalisatie op basis van data en Google updates.',
    icon: TrendingUp
  },
]

// FAQ
const faqs = [
  {
    q: 'Hoe lang duurt het voordat we resultaten zien?',
    a: 'SEO is een marathon, geen sprint. Technische verbeteringen kunnen binnen weken effect hebben, maar duurzame autoriteit en top rankings duren meestal 3-6 maanden. Dit is een investering in structurele groei, in tegenstelling tot betaalde advertenties die stoppen zodra u stopt met betalen.'
  },
  {
    q: 'Garanderen jullie nummer 1 posities?',
    a: 'Nee, en elk bureau dat dit doet is onbetrouwbaar. Google\'s algoritme is complex en verandert constant. Wat we wel garanderen is meetbare verbetering in organische zichtbaarheid, verkeer en leads door bewezen white-hat SEO-strategieën toe te passen.'
  },
  {
    q: 'Gebruiken jullie alleen white-hat SEO methoden?',
    a: 'Absoluut. We gebruiken alleen door Google goedgekeurde, duurzame strategieën. Geen riskante trucjes, spam of manipulatie. Onze focus ligt op het bouwen van echte waarde en autoriteit die bestand is tegen alle Google updates.'
  },
  {
    q: 'Hoe meten jullie het succes van een SEO-campagne?',
    a: 'We kijken verder dan alleen rankings. Onze rapportages focussen op wat echt belangrijk is: groei in organisch verkeer, toename in conversies (leads, verkopen), en verbetering van uw keyword footprint. Alles wordt bijgehouden in een transparant live-dashboard dat u 24/7 kunt raadplegen.'
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

const WhyCard = ({ item, index }: { item: typeof whySEO[0], index: number }) => (
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

export default function SEOServicesClientPage() {
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
                <Search className="w-4 h-4 mr-2 inline" />
                SEO Services
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Verover de Top,{' '}
                <span className="block text-gradient mt-2">
                  Domineer uw Markt
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                Wij bouwen geen 'SEO-trucjes'. Wij bouwen een <strong className="text-white">duurzaam fundament</strong> van
                technische perfectie en autoriteit dat u <strong className="text-white">structureel bovenaan</strong> de zoekresultaten plaatst.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Duurzame organische groei en autoriteit</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>White-hat strategieën, geen risico's</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Transparante rapportage 24/7</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25"
                  asChild
                >
                  <Link href="/contact?service=seo">
                    Gratis SEO Analyse
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
                <Canvas camera={{ position: [0, 0, isMobile ? 6 : 8], fov: isMobile ? 50 : 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <SEOSearchResults3D />
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
                    <p className="text-xs text-gray-400">Gemiddelde groei</p>
                    <p className="text-lg font-bold">+250% verkeer</p>
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
                    <Award className="w-5 h-5 text-quantum-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Gemiddelde positie</p>
                    <p className="text-lg font-bold">Top 3</p>
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
              <Badge className="mb-4">SEO Services</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Onze <span className="text-gradient">SEO Pijlers</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                De essentiële elementen voor duurzame top posities in Google.
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
                    <Eye className="w-3 h-3 mr-2" />
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
                          <p className="text-base sm:text-lg text-gray-200 mb-2">{situation.quote}</p>
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
                    <Link href="/contact?service=seo">
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

      {/* ==================== WAAROM SEO ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-blue/10 bg-gradient-to-b from-quantum-blue/5 to-transparent">
              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom SEO</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    De voordelen van <span className="text-gradient">SEO</span>
                  </h2>
                </header>
              </ScrollTrigger>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whySEO.map((item, index) => (
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
                  Van audit naar <span className="text-gradient">dominantie</span>
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
                Vragen over <span className="text-gradient">SEO</span>?
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
                Gratis SEO Analyse
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar om{' '}
                <span className="text-gradient">top posities</span> te veroveren?
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Vraag een gratis SEO analyse aan en ontdek uw groeipotentieel.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=seo">
                    Vraag Gratis Analyse
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
                  Technische scan
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Concurrentie-analyse
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Groeikansen rapport
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
