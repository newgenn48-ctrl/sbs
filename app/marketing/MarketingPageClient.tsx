'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  BarChart3, Search, MessageCircle, Zap,
  ArrowRight, CheckCircle2, TrendingUp, Target,
  ChevronDown, Eye, ShieldCheck, Infinity, Users, Phone,
  Quote, Clock, LineChart, Rocket, FileSearch, Settings, Link2
} from 'lucide-react'
import React, { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import { AnimatePresence } from 'framer-motion'

// Loading skeleton voor 3D component
const Scene3DLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className="w-24 h-24 rounded-full bg-quantum-purple/20 animate-pulse" />
      <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-quantum-purple/30 animate-ping" style={{ animationDuration: '2s' }} />
    </div>
  </div>
)

const MarketingNexus = dynamic(() => import('@/components/3d/MarketingNexus'), { ssr: false })

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

// Marketing diensten/subdiensten
const services = [
  {
    icon: BarChart3,
    title: 'Google Ads Beheer',
    description: 'Direct resultaat met hyper-gerichte advertentiecampagnes die converteren.',
    href: '/marketing/google-ads-beheer',
    color: 'quantum-green',
    features: ['Zoekwoord strategie', 'Conversie optimalisatie', 'Shopping campagnes', 'Live dashboard']
  },
  {
    icon: Search,
    title: 'SEO Services',
    description: 'Verover de top van de zoekresultaten voor duurzame, organische groei.',
    href: '/marketing/seo-services',
    color: 'quantum-blue',
    features: ['Technische SEO', 'Content strategie', 'Linkbuilding', 'Local SEO']
  },
  {
    icon: MessageCircle,
    title: 'Social Media Marketing',
    description: 'Transformeer uw kanalen in een actieve community die converteert.',
    href: '/marketing/social-media',
    color: 'quantum-purple',
    features: ['LinkedIn B2B', 'Instagram & Meta', 'Content creatie', 'Community management']
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Automatiseer uw marketing en sales voor schaalbare groei.',
    href: '/marketing/marketing-automation',
    color: 'quantum-orange',
    features: ['Lead nurturing', 'Email automation', 'CRM integratie', 'Sales handoff']
  },
]

// Veelvoorkomende klantsituaties
const customerSituations = [
  {
    quote: 'We investeren in marketing maar weten niet wat het oplevert.',
    context: 'ROI & Meetbaarheid',
    icon: LineChart
  },
  {
    quote: 'Onze marketingkanalen werken los van elkaar en missen samenhang.',
    context: 'Geïntegreerde strategie',
    icon: Target
  },
  {
    quote: 'We hebben geen tijd om marketing goed te doen naast onze core business.',
    context: 'Marketing uitbesteden',
    icon: Clock
  },
  {
    quote: 'Onze concurrenten zijn veel zichtbaarder online dan wij.',
    context: 'Online zichtbaarheid',
    icon: Eye
  },
]

// Geïntegreerde aanpak
const integratedApproach = [
  {
    title: 'Ads → SEO',
    description: 'Winstgevende zoekwoorden uit Google Ads campagnes vormen de directe input voor onze SEO content strategie, waardoor we sneller scoren op termen die converteren.'
  },
  {
    title: 'SEO → Social',
    description: 'Bezoekers die via organisch verkeer op uw website komen, retargeten we met specifieke campagnes op social media om top-of-mind te blijven.'
  },
  {
    title: 'All → Automation',
    description: 'Leads die binnenkomen via Ads, SEO of Social worden automatisch opgenomen in nurture-campagnes om ze te converteren naar betalende klanten.'
  },
]

// Werkwijze/Proces
const processSteps = [
  {
    step: '01',
    title: 'Analyse & Strategie',
    description: 'We analyseren uw markt, concurrentie en doelgroep om een winnende strategie te bepalen.',
    icon: FileSearch
  },
  {
    step: '02',
    title: 'Kanaal Setup',
    description: 'We richten de juiste kanalen in met optimale tracking en meetbaarheid.',
    icon: Settings
  },
  {
    step: '03',
    title: 'Uitvoering & Optimalisatie',
    description: 'Continue campagne-optimalisatie op basis van real-time data en resultaten.',
    icon: Rocket
  },
  {
    step: '04',
    title: 'Rapportage & Groei',
    description: 'Transparante rapportage en strategische bijsturing voor continue groei.',
    icon: TrendingUp
  },
]

// Waarom Start Beheer
const whyUs = [
  {
    icon: Eye,
    title: 'Radicale Transparantie',
    description: 'Eén geïntegreerd dashboard met al uw marketingdata. Volledig inzicht, geen verrassingen.',
    stat: '24/7',
    statLabel: 'live inzicht'
  },
  {
    icon: ShieldCheck,
    title: 'Data-Gedreven',
    description: 'Elke beslissing wordt onderbouwd met data. We testen, meten en weten wat werkt.',
    stat: '100%',
    statLabel: 'meetbaar'
  },
  {
    icon: Infinity,
    title: 'Geen Vaste Contracten',
    description: 'We geloven in onze resultaten. Daarom bent u vrij om maandelijks aan te passen.',
    stat: 'Flex',
    statLabel: 'opzegbaar'
  },
  {
    icon: Users,
    title: 'Uw Groei-Partner',
    description: 'Geen externe leverancier, maar uw strategische partner. Uw succes is ons succes.',
    stat: '1',
    statLabel: 'aanspreekpunt'
  },
]

// FAQ - geoptimaliseerd voor SEO
const faqs = [
  {
    q: 'Wat kost online marketing uitbesteden?',
    a: 'De kosten voor online marketing uitbesteden variëren op basis van uw doelen en de gekozen kanalen. Wij werken met transparante maandbudgetten waarbij u vooraf weet wat de investering is. Een typische MKB-campagne start vanaf €1.500 per maand inclusief beheer. We maken altijd een vrijblijvende offerte op maat.'
  },
  {
    q: 'Waarom een geïntegreerde marketing aanpak?',
    a: 'Losse marketing-inspanningen zijn als een orkest zonder dirigent. Google Ads, SEO en Social Media versterken elkaar exponentieel wanneer ze vanuit één centrale strategie worden aangestuurd. Dit vliegwieleffect zorgt voor lagere kosten per lead en hogere conversies.'
  },
  {
    q: 'Welke marketingdienst levert het snelste resultaat?',
    a: 'Voor direct resultaat is Google Ads de snelste route - binnen 24 uur kunt u al zichtbaar zijn. Voor duurzame groei op lange termijn is SEO essentieel. De meeste klanten kiezen voor een combinatie waarbij Ads voor directe leads zorgt terwijl SEO organisch groeit.'
  },
  {
    q: 'Hoe meten jullie marketing succes?',
    a: 'We focussen op metrics die ertoe doen: Cost per Acquisition (CPA), Return on Ad Spend (ROAS) en Customer Lifetime Value (CLV). Alle data komt samen in één overzichtelijk live-dashboard dat u 24/7 kunt raadplegen. Geen vanity metrics, maar echte business resultaten.'
  },
  {
    q: 'Werken jullie met vaste contracten?',
    a: 'Nee, wij geloven in onze resultaten. Al onze marketing diensten zijn maandelijks opzegbaar. Dit dwingt ons om elke maand te presteren en houdt ons scherp. Onze resultaten zijn de beste reden om te blijven samenwerken.'
  },
  {
    q: 'Voor welke bedrijven is jullie marketing geschikt?',
    a: 'Wij werken voornamelijk met MKB-bedrijven die serieus willen groeien online. Van ZZP\'ers tot bedrijven met 100+ medewerkers. Onze aanpak is vooral effectief voor B2B dienstverleners, e-commerce en lokale ondernemers die hun online zichtbaarheid willen vergroten.'
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
        <div className="w-14 h-14 rounded-xl bg-quantum-purple/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
          <service.icon className="w-7 h-7 text-quantum-purple" />
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

export default function MarketingPageClient() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-quantum-purple/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                <TrendingUp className="w-4 h-4 mr-2 inline" />
                Online Marketing Bureau
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Online Marketing{' '}
                <span className="block text-gradient mt-2">
                  die Écht Werkt
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                Wij bouwen een <strong className="text-white">geïntegreerd marketing-ecosysteem</strong> voor het MKB.
                Van Google Ads en SEO tot Social Media – alles versterkt elkaar voor maximale groei.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span><strong>Google Ads, SEO, Social & Automation</strong> in één strategie</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Meetbare resultaten met <strong>live dashboard</strong></span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span><strong>Geen vaste contracten</strong> – maandelijks opzegbaar</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Target className="w-4 h-4 text-quantum-purple" />
                  <span>MKB specialist</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <TrendingUp className="w-4 h-4 text-quantum-green" />
                  <span>Bewezen ROI</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25"
                  asChild
                >
                  <Link href="/contact?service=marketing">
                    Gratis Strategie Gesprek
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
              <div className="absolute inset-0 bg-gradient-to-r from-quantum-purple/20 via-quantum-blue/10 to-transparent blur-3xl rounded-full" />

              <Suspense fallback={<Scene3DLoader />}>
                <Canvas camera={{ position: [0, 0, isMobile ? 10 : 12], fov: isMobile ? 50 : 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <MarketingNexus />
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
                    <p className="text-xs text-gray-400">Gem. ROI</p>
                    <p className="text-lg font-bold">4.5x</p>
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
                    <Target className="w-5 h-5 text-quantum-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Kanalen</p>
                    <p className="text-lg font-bold">4 Geïntegreerd</p>
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-quantum-purple/5 via-transparent to-quantum-blue/5 border border-white/10">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-quantum-purple/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-quantum-blue/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  Online marketing bureau voor het <span className="text-gradient">MKB</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Als <strong className="text-gray-300">online marketing bureau</strong> helpen wij MKB-bedrijven groeien met een geïntegreerde aanpak.
                  Of u nu zoekt naar <strong className="text-gray-300">Google Ads beheer</strong>, professionele <strong className="text-gray-300">SEO services</strong>,
                  effectieve <strong className="text-gray-300">social media marketing</strong> of slimme <strong className="text-gray-300">marketing automation</strong> –
                  wij combineren deze kanalen tot één krachtig groei-ecosysteem dat meetbare resultaten oplevert.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN OVERZICHT ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="diensten-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Onze Marketing Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Vier specialisaties, één <span className="text-gradient">geïntegreerd systeem</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Kies een specialisatie of combineer ze voor het vliegwieleffect. Elke dienst is ook los af te nemen.
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
                Niet zeker welke combinatie past bij uw situatie?
              </p>
              <Button variant="outline" className="border-white/20 hover:bg-white/5" asChild>
                <Link href="/contact?service=marketing-advies">
                  Vraag Gratis Advies
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* ==================== VEELVOORKOMENDE SITUATIES ==================== */}
      <section className="py-24" aria-labelledby="situaties-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
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
                    Veelvoorkomende <span className="text-gradient">marketing uitdagingen</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Herkent u één van deze situaties? Dan kunnen wij u helpen met een professionele marketing aanpak.
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
                    <Link href="/contact?service=marketing">
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

      {/* ==================== GEÏNTEGREERDE AANPAK ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="integrated-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-5xl mx-auto">
            <ScrollTrigger>
              <header className="text-center mb-12">
                <Badge className="mb-4 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
                  <Link2 className="w-3 h-3 mr-2" />
                  Geïntegreerde Aanpak
                </Badge>
                <h2 id="integrated-title" className="text-3xl md:text-4xl font-bold mb-4">
                  Kanalen die elkaar <span className="text-gradient">versterken</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto">
                  Onze marketing kanalen werken niet los van elkaar, maar versterken elkaar voor maximaal resultaat.
                </p>
              </header>
            </ScrollTrigger>

            <div className="grid md:grid-cols-3 gap-6">
              {integratedApproach.map((item, index) => (
                <ScrollTrigger key={index} delay={index * 0.1}>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-quantum-green/30 transition-all h-full">
                    <h3 className="text-xl font-bold mb-3 text-quantum-green">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </ScrollTrigger>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WERKWIJZE/PROCES ==================== */}
      <section className="py-24" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-quantum-purple to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Onze Werkwijze</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van strategie naar <span className="text-gradient">meetbaar resultaat</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Een gestructureerde aanpak die zorgt voor voorspelbare groei.
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
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-green/10 bg-gradient-to-b from-quantum-green/5 to-transparent">
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-quantum-purple/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-quantum-green/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Marketing met een <span className="text-gradient">persoonlijke aanpak</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Wij zijn geen grote anonieme marketing agency. Bij ons krijgt u een vast team dat uw bedrijf écht begrijpt.
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
      <section className="py-24" aria-labelledby="faq-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Vragen over <span className="text-gradient">online marketing uitbesteden</span>?
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
              <Badge className="mb-4 sm:mb-6 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
                Gratis & Vrijblijvend
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar om uw marketing{' '}
                <span className="text-gradient">te laten groeien?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis strategie gesprek en ontdek hoe wij uw online marketing naar het volgende niveau tillen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=marketing">
                    Plan Gratis Gesprek
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
