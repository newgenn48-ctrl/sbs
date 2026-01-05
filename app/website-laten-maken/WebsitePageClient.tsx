'use client'

import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Globe, CheckCircle2, ArrowRight,
  Zap, Palette, Lock, Search,
  Smartphone, Code2, FileText,
  Users, ChevronDown,
  Rocket, Target
} from 'lucide-react'
import { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Loading skeleton voor 3D component
const Scene3DLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className="w-24 h-24 rounded-full bg-quantum-purple/20 animate-pulse" />
      <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-quantum-purple/30 animate-ping" style={{ animationDuration: '2s' }} />
    </div>
  </div>
)

const WebsiteBuilder3D = dynamic(() => import('@/components/3d/WebsiteBuilder3D'), { ssr: false })

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

// Website diensten
const services = [
  {
    icon: Palette,
    title: 'Custom Design',
    description: 'Uniek ontwerp dat perfect past bij uw merk. Geen templates, alleen maatwerk.',
    features: ['Merkidentiteit verwerkt', 'Unieke look & feel', 'UI/UX design', 'Responsive design'],
    color: 'quantum-purple'
  },
  {
    icon: Zap,
    title: 'Razendsnelle Performance',
    description: 'Websites die laden in minder dan 2 seconden. Cruciaal voor SEO en conversie.',
    features: ['Laadtijd <2s', 'Geoptimaliseerde code', 'CDN integratie', 'Image optimization'],
    color: 'quantum-green'
  },
  {
    icon: Search,
    title: 'SEO Geoptimaliseerd',
    description: 'Technisch SEO-fundament zodat u gevonden wordt in Google.',
    features: ['Meta tags & schema', 'Sitemap & robots.txt', 'Core Web Vitals', 'Keyword onderzoek'],
    color: 'quantum-blue'
  },
  {
    icon: Smartphone,
    title: 'Mobile-First',
    description: 'Meer dan 60% van uw bezoekers komt via mobiel. Wij ontwerpen daar eerst voor.',
    features: ['Responsive design', 'Touch-friendly', 'Mobiele snelheid', 'App-achtige ervaring'],
    color: 'quantum-orange'
  },
  {
    icon: FileText,
    title: 'CMS Integratie',
    description: 'Beheer zelf uw content via een gebruiksvriendelijk CMS.',
    features: ['Strapi / Sanity', 'Eenvoudig beheer', 'Media library', 'Meerdere gebruikers'],
    color: 'quantum-purple'
  },
  {
    icon: Lock,
    title: 'Veilig & Betrouwbaar',
    description: 'Moderne, veilige code zonder kwetsbare plugins of verouderde themas.',
    features: ['SSL certificaat', 'Geen plugins nodig', 'Regelmatige updates', 'Backup strategie'],
    color: 'quantum-green'
  },
]

// Prijs info
const priceInfo = {
  price: 'Vanaf €785',
  description: 'Professionele website volledig op maat',
  features: [
    'Custom design op maat',
    'Mobile-first & responsive',
    'SEO geoptimaliseerd',
    'Razendsnelle laadtijd',
    'Contactformulier',
    'SSL certificaat',
    'CMS voor zelf beheren',
    'Analytics integratie',
  ],
}

// Waarom wij - focus op bedrijf/samenwerking, niet product (dat staat bij Diensten)
const whyChooseUs = [
  {
    icon: Lock,
    title: 'Volledig Eigendom',
    description: 'U bent 100% eigenaar van uw website. Geen lock-in, geen doorlopende licentiekosten.',
    stat: '100%',
    statLabel: 'van u'
  },
  {
    icon: Users,
    title: 'Directe Lijnen',
    description: 'Eén vast aanspreekpunt. Geen helpdesk, geen wachtrijen. Direct contact met uw developer.',
    stat: '1',
    statLabel: 'contactpersoon'
  },
  {
    icon: FileText,
    title: 'Vaste Prijs',
    description: 'Vooraf een duidelijke offerte. Geen verrassingen achteraf, geen uurtje-factuurtje.',
    stat: '€',
    statLabel: 'vast'
  },
  {
    icon: Rocket,
    title: 'Nazorg Inbegrepen',
    description: 'Na oplevering staan wij voor u klaar. Updates, kleine aanpassingen en technische support.',
    stat: '∞',
    statLabel: 'support'
  },
]

// Het proces
const processSteps = [
  {
    step: '01',
    title: 'Kennismaking',
    description: 'We bespreken uw wensen, doelen en doelgroep in een vrijblijvend gesprek.',
    icon: Users
  },
  {
    step: '02',
    title: 'Ontwerp',
    description: 'Uw unieke design wordt uitgewerkt. U ziet het resultaat voordat we bouwen.',
    icon: Palette
  },
  {
    step: '03',
    title: 'Development',
    description: 'We bouwen uw website met moderne technologie en uitgebreide testing.',
    icon: Code2
  },
  {
    step: '04',
    title: 'Lancering',
    description: 'Na uw goedkeuring gaan we live. Wij regelen hosting en technische setup.',
    icon: Rocket
  },
]

// FAQ
const faqs = [
  {
    q: 'Hoe lang duurt het om een website te maken?',
    a: 'Een standaard website is meestal binnen 1-3 weken klaar. Dit hangt af van de complexiteit en hoe snel feedback wordt gegeven. Complexere projecten kunnen 4-6 weken duren.'
  },
  {
    q: 'Waarom geen WordPress of Wix?',
    a: 'WordPress en Wix zijn prima voor eenvoudige websites, maar hebben nadelen: tragere laadtijden, beveiligingsrisico\'s door plugins, en beperkte flexibiliteit. Onze websites zijn sneller, veiliger en volledig op maat - zonder maandelijkse licentiekosten.'
  },
  {
    q: 'Kan ik zelf content aanpassen na oplevering?',
    a: 'Ja, u krijgt een gebruiksvriendelijk CMS waarmee u zelf teksten en afbeeldingen kunt aanpassen. Wij geven ook een korte training zodat u direct aan de slag kunt.'
  },
  {
    q: 'Wat als ik later meer pagina\'s of functies wil?',
    a: 'Geen probleem. Onze websites zijn gebouwd om te groeien. U kunt altijd uitbreiden met extra pagina\'s, blog, webshop of andere functionaliteit.'
  },
  {
    q: 'Regelen jullie ook hosting en domein?',
    a: 'Ja, wij kunnen de volledige technische setup verzorgen: domeinregistratie, hosting, SSL certificaat en e-mail. Zo heeft u één aanspreekpunt voor alles.'
  },
  {
    q: 'Wat voor support krijg ik na oplevering?',
    a: 'Na oplevering blijven wij beschikbaar voor vragen, kleine aanpassingen en technische ondersteuning. Voor grotere wijzigingen maken we een offerte op maat. Zo bent u nooit alleen.'
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

const PriceCard = () => (
  <ScrollTrigger>
    <div className="glass-effect p-8 md:p-10 rounded-2xl border border-quantum-purple/30 hover:border-quantum-purple/50 transition-all max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Badge className="mb-4 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
          Transparante Prijzen
        </Badge>
        <p className="text-4xl md:text-5xl font-bold text-quantum-purple mb-2">{priceInfo.price}</p>
        <p className="text-gray-400">{priceInfo.description}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {priceInfo.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-gray-300">
            <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
            {feature}
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25"
          asChild
        >
          <Link href="/contact?service=website">
            Vraag Vrijblijvend Offerte
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
        <p className="text-sm text-gray-500 mt-4">
          Exacte prijs hangt af van uw wensen en complexiteit
        </p>
      </div>
    </div>
  </ScrollTrigger>
)

const WhyUsCard = ({ item, index }: { item: typeof whyChooseUs[0], index: number }) => (
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

export default function WebsitePageClient() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-quantum-purple/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content - Linker kolom */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                <Globe className="w-4 h-4 mr-2 inline" />
                Website Laten Maken
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Website Laten Maken?{' '}
                <span className="block text-gradient mt-2">
                  Professioneel & op Maat
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                Wilt u een <strong className="text-white">website laten maken</strong> die écht resultaat oplevert? Wij bouwen <strong className="text-white">razendsnelle websites</strong> met een <strong className="text-white">uniek design</strong> die bezoekers omzetten in klanten.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Custom design dat past bij uw merk</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Gegarandeerd onder 2 seconden laadtijd</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>SEO-fundament voor vindbaarheid</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25"
                  asChild
                >
                  <Link href="/contact?service=website">
                    Offerte Aanvragen
                    <ArrowRight className="ml-2 w-5 h-5" />
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
              <div className="absolute inset-0 bg-gradient-to-r from-quantum-purple/20 via-quantum-blue/10 to-transparent blur-3xl rounded-full" />

              <Suspense fallback={<Scene3DLoader />}>
                <Canvas camera={{ position: [0, 0, isMobile ? 8 : 10], fov: isMobile ? 50 : 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <WebsiteBuilder3D />
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
                    <Zap className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Laadtijd</p>
                    <p className="text-lg font-bold">&lt;2 seconden</p>
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
                    <Palette className="w-5 h-5 text-quantum-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Design</p>
                    <p className="text-lg font-bold">100% Custom</p>
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
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-quantum-purple/5 via-transparent to-quantum-blue/5 border border-white/10">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-quantum-purple/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-quantum-blue/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  Uw <span className="text-gradient">digitale visitekaartje</span>
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  In een wereld waar de eerste indruk vaak online plaatsvindt, is uw website cruciaal.
                  Wij bouwen geen standaard websites - wij creëren <strong className="text-gray-300">digitale ervaringen</strong> die
                  uw bezoekers overtuigen en converteren. Met oog voor detail, technische perfectie en uw unieke verhaal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VIDEO SECTIE ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark/50 to-cyber-darker" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Video */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-quantum-purple/10">
                  <div className="absolute -inset-1 bg-gradient-to-r from-quantum-purple/20 via-quantum-blue/20 to-quantum-green/20 rounded-2xl blur-xl opacity-50" />
                  <div className="relative bg-cyber-dark rounded-2xl overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto"
                      aria-label="Website laten maken - professioneel webdesign proces"
                      title="Website laten maken bij Start Beheer"
                    >
                      <source src="/website-laten-maken.mp4" type="video/mp4" />
                      Uw browser ondersteunt geen video. Bekijk onze website laten maken diensten.
                    </video>
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 lg:-right-8"
                >
                  <div className="bg-cyber-dark/90 backdrop-blur-xl border border-quantum-green/30 rounded-xl px-4 py-3 shadow-lg">
                    <p className="text-quantum-green font-semibold text-lg">1-3 weken</p>
                    <p className="text-gray-400 text-sm">Oplevering</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-4 px-4 py-2 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
                  <Target className="w-4 h-4 mr-2 inline" />
                  Resultaatgericht
                </Badge>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  <span className="text-white">Website laten maken die </span>
                  <span className="text-gradient">klanten oplevert</span>
                </h2>

                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Een mooie website is niet genoeg. Uw website moet werken als een 24/7 verkoper
                  die bezoekers overtuigt en omzet in leads of klanten.
                </p>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  Daarom focussen wij op conversie-optimalisatie: strategische call-to-actions,
                  overtuigende content en een gebruikerservaring die vertrouwen wekt.
                </p>

                {/* Conversion highlights */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Target, text: 'Conversie-geoptimaliseerd' },
                    { icon: Users, text: 'Gebruiksvriendelijk design' },
                    { icon: Search, text: 'Vindbaar in Google' },
                    { icon: Zap, text: 'Snelle laadtijden' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-quantum-green/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-quantum-green" />
                      </div>
                      <span className="text-gray-300 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-green to-quantum-blue hover:scale-105 transition-transform"
                  asChild
                >
                  <a href="#proces-title">
                    Bekijk Ons Proces
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MAATWERK SECTIE ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark/50 to-cyber-darker" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 px-4 py-2 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                  <Palette className="w-4 h-4 mr-2 inline" />
                  Maatwerk Design
                </Badge>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  <span className="text-white">Geen templates, </span>
                  <span className="text-gradient">alleen maatwerk</span>
                </h2>

                <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                  Elke website die wij bouwen is uniek. Wij beginnen met een blanco canvas
                  en ontwerpen specifiek voor uw merk, doelgroep en doelstellingen.
                </p>

                <p className="text-gray-400 mb-8 leading-relaxed">
                  Het resultaat is een website die er niet alleen professioneel uitziet,
                  maar ook perfect aansluit bij uw bedrijfsidentiteit en uw bezoekers aanspreekt.
                </p>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Palette, text: 'Uniek visueel ontwerp' },
                    { icon: Users, text: 'Merkidentiteit verwerkt' },
                    { icon: Smartphone, text: 'Responsive op alle apparaten' },
                    { icon: Globe, text: 'Klaar voor groei' },
                  ].map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-quantum-purple/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-quantum-purple" />
                      </div>
                      <span className="text-gray-300 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:scale-105 transition-transform"
                  asChild
                >
                  <Link href="/contact?service=website">
                    Vraag Offerte Aan
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </motion.div>

              {/* Afbeelding */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-quantum-purple/20">
                  <div className="absolute -inset-1 bg-gradient-to-r from-quantum-purple/20 via-quantum-blue/20 to-quantum-green/20 rounded-2xl blur-xl opacity-50" />
                  <div className="relative">
                    <Image
                      src="/website-laten-maken.webp"
                      alt="Website laten maken - professioneel maatwerk webdesign"
                      title="Website laten maken bij Start Beheer"
                      width={800}
                      height={600}
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 lg:-left-8"
                >
                  <div className="bg-cyber-dark/90 backdrop-blur-xl border border-quantum-purple/30 rounded-xl px-4 py-3 shadow-lg">
                    <p className="text-quantum-purple font-semibold text-lg">100%</p>
                    <p className="text-gray-400 text-sm">Op Maat</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="diensten-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Wat U Krijgt</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Uw website laten maken? <span className="text-gradient">Dit krijgt u</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van design tot SEO, van snelheid tot veiligheid - een compleet pakket zodat u zich kunt focussen op uw bedrijf.
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

      {/* ==================== WAAROM WIJ ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-purple/10 bg-gradient-to-b from-quantum-purple/5 to-transparent">
              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Waarom klanten voor <span className="text-gradient">ons kiezen</span>
                  </h2>
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
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <ScrollTrigger>
              <header className="text-center mb-16">
                <Badge className="mb-4">Ons Proces</Badge>
                <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                  Van idee naar <span className="text-gradient">live website</span>
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

      {/* ==================== PRIJS ==================== */}
      <section className="py-24" aria-labelledby="prijs-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Investering</Badge>
              <h2 id="prijs-title" className="text-3xl md:text-4xl font-bold mb-4">
                Transparante <span className="text-gradient">prijzen</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Geen verrassingen achteraf. U ontvangt altijd een vrijblijvende offerte op maat.
              </p>
            </header>
          </ScrollTrigger>

          <PriceCard />
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24" aria-labelledby="faq-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Veelgestelde <span className="text-gradient">vragen</span>
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
                Website laten maken?{' '}
                <span className="text-gradient">Start vandaag!</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Klaar om uw professionele website te laten maken? Plan een gratis gesprek en ontvang een offerte op maat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=website">
                    Vraag Gratis Offerte
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
                  Offerte binnen 48 uur
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Vaste prijsafspraak
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
