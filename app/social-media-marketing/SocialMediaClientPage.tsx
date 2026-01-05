'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Linkedin, Instagram, Video, PenTool, Users, Target,
  TrendingUp, BarChart3, MessageCircle, Share2, Heart,
  Globe, ChevronDown, ArrowRight,
  CheckCircle2
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

const SocialMediaFeed3D = dynamic(() => import('@/components/3d/SocialMediaFeed3D'), { ssr: false })

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

// Social Media diensten
const services = [
  {
    icon: Linkedin,
    title: 'LinkedIn B2B Marketing',
    description: 'Thought leadership en lead generatie via het grootste professionele netwerk.',
    features: ['Company page beheer', 'LinkedIn Ads', 'Content strategie', 'Lead generation'],
    color: 'quantum-purple'
  },
  {
    icon: Instagram,
    title: 'Instagram & Meta',
    description: 'Visuele storytelling en community building op Instagram en Facebook.',
    features: ['Feed & Stories', 'Reels productie', 'Meta Ads', 'Influencer samenwerking'],
    color: 'quantum-blue'
  },
  {
    icon: Video,
    title: 'TikTok & Shorts',
    description: 'Authentieke short-form video content voor een jonge, betrokken doelgroep.',
    features: ['TikTok strategie', 'YouTube Shorts', 'Trend monitoring', 'Virale content'],
    color: 'quantum-green'
  },
  {
    icon: PenTool,
    title: 'Content Creatie',
    description: 'Professionele content die resoneert met uw doelgroep en merkidentiteit.',
    features: ['Fotografie & video', 'Copywriting', 'Grafisch ontwerp', 'Content kalender'],
    color: 'quantum-orange'
  },
  {
    icon: Users,
    title: 'Community Management',
    description: 'Actieve community-opbouw door authentieke interactie en engagement.',
    features: ['Daily engagement', 'Reactiebeheer', 'DM management', 'Crisis communicatie'],
    color: 'quantum-purple'
  },
  {
    icon: Target,
    title: 'Social Advertising',
    description: 'Gerichte advertentiecampagnes die converteren en ROI maximaliseren.',
    features: ['Meta Ads', 'LinkedIn Ads', 'TikTok Ads', 'A/B testing'],
    color: 'quantum-blue'
  },
]


// Waarom Social Media
const whySocial = [
  {
    icon: Users,
    title: 'Community Building',
    description: 'Bouw een loyale community van engaged volgers die ambassadeurs van uw merk worden.',
    stat: '3x',
    statLabel: 'meer engagement'
  },
  {
    icon: Globe,
    title: 'Brand Awareness',
    description: 'Vergroot uw naamsbekendheid en word top-of-mind bij uw doelgroep.',
    stat: '85%',
    statLabel: 'grotere bekendheid'
  },
  {
    icon: MessageCircle,
    title: 'Direct Contact',
    description: 'Creëer directe, authentieke conversaties met (potentiële) klanten.',
    stat: '<1u',
    statLabel: 'reactietijd'
  },
  {
    icon: Target,
    title: 'Lead Generatie',
    description: 'Zet engagement om in gekwalificeerde leads en tastbare business resultaten.',
    stat: '+150%',
    statLabel: 'meer leads'
  },
]

// Het proces
const processSteps = [
  {
    step: '01',
    title: 'Analyse',
    description: 'Doelgroep onderzoek, concurrentie analyse en audit van huidige kanalen.',
    icon: BarChart3
  },
  {
    step: '02',
    title: 'Strategie',
    description: 'Content strategie, posting schema en platform selectie op maat.',
    icon: Target
  },
  {
    step: '03',
    title: 'Content Creatie',
    description: 'Professionele content productie die past bij uw merk en doelgroep.',
    icon: PenTool
  },
  {
    step: '04',
    title: 'Management',
    description: 'Daily posting, community engagement en continue optimalisatie.',
    icon: Users
  },
]

// FAQ
const faqs = [
  {
    q: 'Op welke social media platforms moeten we actief zijn?',
    a: 'Dit hangt volledig af van uw doelgroep en business doelen. Voor B2B is LinkedIn vaak essentieel. Voor visuele producten zijn Instagram en Pinterest krachtig. TikTok werkt uitstekend voor een jonge doelgroep. We starten altijd met een doelgroep analyse om de platforms met de hoogste ROI te bepalen.'
  },
  {
    q: 'Hoe vaak moeten we posten voor resultaat?',
    a: 'Consistentie is belangrijker dan frequentie. We ontwikkelen een realistische content kalender die past bij uw resources. Liever 3 kwalitatief hoogstaande posts per week die waarde bieden, dan dagelijks irrelevante content. De optimale frequentie verschilt per platform en wordt bepaald door data-analyse.'
  },
  {
    q: 'Wat is het verschil tussen organisch bereik en betaald adverteren?',
    a: 'Organisch bereik is het publiek dat u gratis bereikt via uw volgers en hun netwerk. Social Advertising (betaalde ads) stelt ons in staat om uw boodschap te tonen aan een hyper-specifieke doelgroep buiten uw volgers. Een sterke social media strategie combineert beide voor maximale impact en ROI.'
  },
  {
    q: 'Hoe meten jullie het succes van social media marketing?',
    a: 'We kijken naar KPI\'s die direct impact hebben op uw bedrijfsdoelen: groei in engagement (likes, comments, shares), toename in website verkeer vanuit social media, lead generatie en uiteindelijk conversies. Dit alles wordt transparant gerapporteerd in een live dashboard waar u 24/7 toegang tot heeft.'
  },
  {
    q: 'Kunnen jullie ook influencer marketing verzorgen?',
    a: 'Ja, influencer marketing is onderdeel van ons aanbod. We identificeren relevante influencers binnen uw niche, onderhandelen samenwerkingen en coördineren campagnes. Van micro-influencers tot grotere namen - we matchen op basis van uw doelgroep, budget en merkwaarden voor authentieke partnerships die resultaat opleveren.'
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


const WhyCard = ({ item, index }: { item: typeof whySocial[0], index: number }) => (
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

export default function SocialMediaClientPage() {
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
                <Share2 className="w-4 h-4 mr-2 inline" />
                Social Media Marketing
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Meer dan Likes,{' '}
                <span className="block text-gradient mt-2">
                  Echte Connecties
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                <strong className="text-white">Community building en engagement</strong> die converteert.
                Wij transformeren uw social media van een passief uithangbord naar een actieve <strong className="text-white">lead-generator</strong>.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Authentieke community building</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Data-gedreven content strategie</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Meetbare business resultaten</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25"
                  asChild
                >
                  <Link href="/contact?service=social-media">
                    Gratis Social Audit
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
                <Canvas camera={{ position: [0, 0, isMobile ? 6 : 8], fov: isMobile ? 50 : 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1} />
                  <SocialMediaFeed3D />
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
                    <Heart className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Engagement</p>
                    <p className="text-lg font-bold">+150%</p>
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
                    <TrendingUp className="w-5 h-5 text-quantum-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Reach Growth</p>
                    <p className="text-lg font-bold">3x Groei</p>
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
              <Badge className="mb-4">Social Media Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Onze <span className="text-gradient">Social Media</span> Expertise
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van strategie tot executie - wij beheren uw volledige social media presence.
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


      {/* ==================== WAAROM SOCIAL MEDIA ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-purple/10 bg-gradient-to-b from-quantum-purple/5 to-transparent">
              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Social Media</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    De kracht van <span className="text-gradient">Social Media Marketing</span>
                  </h2>
                </header>
              </ScrollTrigger>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whySocial.map((item, index) => (
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
                  Van strategie naar <span className="text-gradient">engagement</span>
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
                Vragen over <span className="text-gradient">Social Media</span>?
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
                Gratis Social Audit
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar voor{' '}
                <span className="text-gradient">echte connecties?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Vraag een gratis social media audit aan en ontdek het potentieel van uw kanalen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=social-media">
                    Vraag Gratis Audit
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
                  Analyse binnen 48 uur
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Gepersonaliseerd advies
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
