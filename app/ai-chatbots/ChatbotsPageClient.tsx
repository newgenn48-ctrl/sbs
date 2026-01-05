'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Bot, CheckCircle2, ArrowRight, Phone,
  MessageSquare, Clock, Users, Zap,
  Target, TrendingUp, Settings, Globe,
  ChevronDown, Headphones, Sparkles
} from 'lucide-react'
import React, { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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

const ChatBot3D = dynamic(() => import('@/components/3d/ChatBot3D'), { ssr: false })

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

// Chatbot diensten
const services = [
  {
    icon: MessageSquare,
    title: 'Klantenservice Chatbot',
    description: 'Beantwoord 80% van de vragen automatisch. 24/7 beschikbaar, direct antwoord.',
    features: ['FAQ automatisering', 'Product informatie', 'Order status', 'Retour handling'],
    color: 'quantum-purple'
  },
  {
    icon: Target,
    title: 'Lead Kwalificatie',
    description: 'Kwalificeer leads automatisch. Vraag de juiste vragen en plan afspraken in.',
    features: ['Intake formulieren', 'Lead scoring', 'Afspraak planning', 'CRM integratie'],
    color: 'quantum-blue'
  },
  {
    icon: Headphones,
    title: 'Support Escalatie',
    description: 'Intelligente overdracht naar menselijke medewerkers wanneer nodig.',
    features: ['Sentiment analyse', 'Prioriteit bepaling', 'Gesprekscontext', 'Naadloze overdracht'],
    color: 'quantum-green'
  },
  {
    icon: Globe,
    title: 'Multi-channel',
    description: 'Dezelfde chatbot op uw website, WhatsApp, Facebook en meer.',
    features: ['Website widget', 'WhatsApp Business', 'Facebook Messenger', 'Instagram DM'],
    color: 'quantum-orange'
  },
  {
    icon: Sparkles,
    title: 'Personalisatie',
    description: 'Chatbot die uw klanten herkent en gepersonaliseerde service biedt.',
    features: ['Klantherkenning', 'Bestelhistorie', 'Voorkeuren onthouden', 'Proactieve suggesties'],
    color: 'quantum-purple'
  },
  {
    icon: Settings,
    title: 'Integraties',
    description: 'Koppel uw chatbot aan bestaande systemen voor naadloze workflows.',
    features: ['CRM systemen', 'E-commerce platforms', 'Helpdesk software', 'Agenda integratie'],
    color: 'quantum-blue'
  },
]

// Waarom AI Chatbots
const whyChatbots = [
  {
    icon: Clock,
    title: '24/7 Beschikbaar',
    description: 'Uw chatbot is altijd bereikbaar. Ook buiten kantooruren, in het weekend en op feestdagen.',
    stat: '24/7',
    statLabel: 'online'
  },
  {
    icon: Zap,
    title: 'Direct Antwoord',
    description: 'Geen wachttijd. Klanten krijgen direct antwoord op hun vragen.',
    stat: '<1s',
    statLabel: 'reactietijd'
  },
  {
    icon: TrendingUp,
    title: '80% Automatisering',
    description: 'De meeste vragen worden automatisch beantwoord. Uw team focust op complexe cases.',
    stat: '80%',
    statLabel: 'automatisch'
  },
  {
    icon: Users,
    title: 'Tevreden Klanten',
    description: 'Snelle, consistente service leidt tot hogere klanttevredenheid.',
    stat: '+25%',
    statLabel: 'NPS score'
  },
]

// Het proces
const processSteps = [
  {
    step: '01',
    title: 'Analyse',
    description: 'We analyseren uw meest gestelde vragen en customer journey.',
    icon: Target
  },
  {
    step: '02',
    title: 'Ontwerp',
    description: 'We ontwerpen de gespreksflows en trainen de chatbot met uw content.',
    icon: Bot
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'Chatbot wordt geïntegreerd met uw website en systemen.',
    icon: Settings
  },
  {
    step: '04',
    title: 'Optimalisatie',
    description: 'Continue verbetering op basis van gesprekken en feedback.',
    icon: TrendingUp
  },
]

// FAQ
const faqs = [
  {
    q: 'Hoe slim is de chatbot echt?',
    a: 'Onze chatbots gebruiken de nieuwste AI technologie (GPT-4, Claude) en kunnen complexe vragen begrijpen. Ze leren continu bij op basis van gesprekken. Wel trainen we ze specifiek op uw content en bedrijf.'
  },
  {
    q: 'Kan de chatbot mijn merk/tone of voice overnemen?',
    a: 'Absoluut. We trainen de chatbot met uw merkrichtlijnen, tone of voice en voorbeeldgesprekken. De chatbot communiceert precies zoals u dat wilt.'
  },
  {
    q: 'Wat als de chatbot het antwoord niet weet?',
    a: 'De chatbot herkent wanneer hij het antwoord niet weet en draagt het gesprek naadloos over aan een medewerker. Alle context blijft behouden zodat de klant niet opnieuw hoeft uit te leggen.'
  },
  {
    q: 'Hoe zit het met privacy en data?',
    a: 'Alle data wordt verwerkt conform AVG. Gesprekken worden veilig opgeslagen in Europa. U kunt zelf bepalen welke data wordt bewaard en voor hoe lang.'
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


const WhyCard = ({ item, index }: { item: typeof whyChatbots[0], index: number }) => (
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

export default function ChatbotsPageClient() {
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
                <Bot className="w-4 h-4 mr-2 inline" />
                AI Chatbots
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                AI Chatbot voor{' '}
                <span className="block text-gradient mt-2">
                  24/7 Klantenservice
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                <strong className="text-white">Intelligente chatbots</strong> die vragen beantwoorden, leads kwalificeren
                en afspraken inplannen. <strong className="text-white">24 uur per dag, 7 dagen per week</strong>.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>80% van de vragen automatisch beantwoord</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Naadloze overdracht naar uw team</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Integratie met uw CRM en systemen</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25"
                  asChild
                >
                  <Link href="/contact?service=chatbot">
                    Gratis Demo Aanvragen
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
                  <ChatBot3D />
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
                    <Clock className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Beschikbaarheid</p>
                    <p className="text-lg font-bold">24/7 Online</p>
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
                    <Zap className="w-5 h-5 text-quantum-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Reactietijd</p>
                    <p className="text-lg font-bold">&lt;1 seconde</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent" />
      </section>

      {/* ==================== AFBEELDING SECTIE ==================== */}
      <section className="py-24 bg-cyber-dark/30">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollTrigger>
                <div className="relative rounded-2xl overflow-hidden border border-quantum-purple/20 shadow-2xl">
                  <Image
                    src="/ai-chatbots.webp"
                    alt="AI Chatbot conversatie interface"
                    width={1200}
                    height={800}
                    className="w-full h-auto"
                  />
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <div>
                  <Badge className="mb-4 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                    <Bot className="w-4 h-4 mr-2" />
                    24/7 Beschikbaar
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Uw digitale <span className="text-gradient">medewerker</span>
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Een AI chatbot die nooit slaapt, altijd vriendelijk is en direct antwoord geeft. Ontlast uw supportteam en verhoog de klanttevredenheid.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-quantum-purple/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-quantum-purple" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Directe antwoorden</p>
                        <p className="text-sm text-gray-400">Geen wachttijden meer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-quantum-blue/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-quantum-blue" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Schaalt mee</p>
                        <p className="text-sm text-gray-400">100 of 10.000 gesprekken tegelijk</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-quantum-green/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-quantum-green" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Leert continu</p>
                        <p className="text-sm text-gray-400">Wordt elke dag slimmer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN ==================== */}
      <section className="py-24" aria-labelledby="diensten-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Chatbot Mogelijkheden</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Wat kan een <span className="text-gradient">AI Chatbot</span> voor u doen?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van klantenservice tot lead generatie - ontdek alle mogelijkheden van onze AI chatbots.
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


      {/* ==================== WAAROM CHATBOTS ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-purple/10 bg-gradient-to-b from-quantum-purple/5 to-transparent">
              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom AI Chatbots</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    De voordelen van een <span className="text-gradient">AI Chatbot</span>
                  </h2>
                </header>
              </ScrollTrigger>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyChatbots.map((item, index) => (
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
                  Van concept naar <span className="text-gradient">werkende chatbot</span>
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
                Vragen over <span className="text-gradient">AI Chatbots</span>?
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
                Gratis Demo
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar voor{' '}
                <span className="text-gradient">24/7 service?</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Vraag een gratis demo aan en zie hoe onze chatbot uw klantvragen beantwoordt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=chatbot">
                    Vraag Gratis Demo
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
                  Demo binnen 48 uur
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
