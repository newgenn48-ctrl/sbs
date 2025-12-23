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
  ArrowRight, CheckCircle2, ChevronDown, Phone,
  Globe, ShieldCheck, BarChart3, Mail, Zap,
  Clock, Target, Users, Quote, TrendingUp,
  Award, Building2, User, Rocket, FileSearch,
  Headphones, LineChart, Cog
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

const BusinessDashboard = dynamic(() => import('@/components/3d/BusinessDashboard'), { ssr: false })

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

// Doelgroepen
const targetGroups = [
  {
    icon: User,
    title: 'ZZP\'ers',
    subtitle: 'Zelfstandig ondernemer',
    description: 'Focus op uw expertise terwijl wij uw digitale aanwezigheid regelen. Van website tot marketing.',
    benefits: ['Professionele uitstraling', 'Meer zichtbaarheid online', 'Alles in één pakket'],
    color: '#00FF88'
  },
  {
    icon: Building2,
    title: 'MKB',
    subtitle: 'Klein & middenbedrijf',
    description: 'Schaalbare IT- en marketingoplossingen die meegroeien met uw bedrijf. Van 2 tot 250 medewerkers.',
    benefits: ['Schaalbaar met groei', 'IT én marketing beheer', 'Eén aanspreekpunt'],
    color: '#A855F7'
  },
]

// Diensten overzicht
const services = [
  {
    icon: Globe,
    title: 'Website & Online Presence',
    description: 'Professionele websites die werken als uw beste verkoper. Geoptimaliseerd voor Google en conversie.',
    features: ['Responsive design', 'SEO-geoptimaliseerd', 'Snelle laadtijden', 'SSL beveiliging'],
    color: '#00FF88'
  },
  {
    icon: Mail,
    title: 'Zakelijke E-mail & Microsoft 365',
    description: 'Professionele communicatie met uw eigen domeinnaam. Inclusief alle Microsoft 365 tools.',
    features: ['Eigen domein e-mail', 'Microsoft 365 apps', 'Automatische backups', 'Overal toegankelijk'],
    color: '#00D9FF'
  },
  {
    icon: Headphones,
    title: 'IT Support & Beheer',
    description: 'Betrouwbare ondersteuning wanneer u het nodig heeft. Proactief beheer voorkomt problemen.',
    features: ['Helpdesk support', 'Remote ondersteuning', 'Proactief beheer', 'Snelle responstijd'],
    color: '#A855F7'
  },
  {
    icon: ShieldCheck,
    title: 'Security & Backup',
    description: 'Bescherm uw bedrijfsdata tegen cyberdreigingen. Automatische backups voor gemoedsrust.',
    features: ['Beveiligingsmonitoring', 'Automatische backups', 'Virusprotectie', 'Data recovery'],
    color: '#FF6B6B'
  },
  {
    icon: LineChart,
    title: 'Online Marketing',
    description: 'Meer klanten met gerichte online marketing. Van SEO tot Google Ads en social media.',
    features: ['Google Ads campagnes', 'SEO & vindbaarheid', 'Social media marketing', 'Lead generatie'],
    color: '#FFB800'
  },
  {
    icon: Cog,
    title: 'AI & Automatisering',
    description: 'Werk slimmer met AI-tools en automatisering. Bespaar tijd op repetitieve taken.',
    features: ['Chatbots', 'Process automation', 'AI analytics', 'Workflow optimalisatie'],
    color: '#4285F4'
  },
]

// Veelvoorkomende situaties
const customerSituations = [
  {
    quote: 'Ik ben te veel tijd kwijt aan technische zaken in plaats van mijn core business.',
    persona: 'ZZP & MKB',
    icon: Clock
  },
  {
    quote: 'We groeien, maar onze IT groeit niet mee. Het wordt steeds rommeliger.',
    persona: 'Groeiend MKB',
    icon: TrendingUp
  },
  {
    quote: 'Ik wil professioneel overkomen maar heb geen budget voor een IT-afdeling.',
    persona: 'ZZP & Klein MKB',
    icon: Award
  },
  {
    quote: 'We werken met meerdere leveranciers en niemand heeft het totaaloverzicht.',
    persona: 'MKB',
    icon: Users
  },
]

// Werkwijze
const processSteps = [
  {
    step: '01',
    title: 'Kennismaking',
    description: 'We bespreken uw situatie, uitdagingen en ambities in een vrijblijvend gesprek.',
    icon: FileSearch
  },
  {
    step: '02',
    title: 'Advies op Maat',
    description: 'U ontvangt een concreet voorstel afgestemd op uw bedrijfsgrootte en behoeften.',
    icon: Target
  },
  {
    step: '03',
    title: 'Implementatie',
    description: 'Wij regelen alles. Minimale verstoring van uw dagelijkse werkzaamheden.',
    icon: Rocket
  },
  {
    step: '04',
    title: 'Doorlopende Support',
    description: 'Proactief beheer en altijd een aanspreekpunt als u vragen heeft.',
    icon: Headphones
  },
]

// Waarom Start Beheer
const whyUs = [
  {
    icon: Target,
    title: 'ZZP & MKB Specialist',
    description: 'Wij begrijpen de uitdagingen van ondernemers en stemmen onze diensten hierop af.',
  },
  {
    icon: Zap,
    title: 'Eén Aanspreekpunt',
    description: 'Geen gedoe met verschillende leveranciers. Alles via één vertrouwd contactpersoon.',
  },
  {
    icon: Cog,
    title: 'Schaalbare Oplossingen',
    description: 'Start klein en breid uit wanneer uw bedrijf groeit. Flexibel en toekomstbestendig.',
  },
  {
    icon: Award,
    title: 'Persoonlijke Aanpak',
    description: 'Geen nummertje, maar een partner die uw bedrijf kent en meedenkt.',
  },
]

// FAQ
const faqs = [
  {
    q: 'Voor welke bedrijven zijn jullie oplossingen geschikt?',
    a: 'Onze oplossingen zijn geschikt voor ZZP\'ers en MKB-bedrijven van 1 tot circa 250 medewerkers. Of u nu net start of al jaren actief bent, wij hebben passende oplossingen die meegroeien met uw bedrijf.'
  },
  {
    q: 'Ik ben niet technisch. Is dat een probleem?',
    a: 'Absoluut niet, juist niet zelfs. Wij nemen alle technische complexiteit van u over en communiceren in begrijpelijke taal. U hoeft alleen te weten wát u wilt bereiken, wij regelen het hóe.'
  },
  {
    q: 'Kan ik beginnen met één dienst en later uitbreiden?',
    a: 'Ja, onze oplossingen zijn modulair. Start bijvoorbeeld met een website en voeg later e-mail, IT-support of marketing toe wanneer uw bedrijf daaraan toe is.'
  },
  {
    q: 'Hoe snel kunnen jullie starten?',
    a: 'Na het kennismakingsgesprek kunnen we meestal binnen 1-2 weken van start. Voor een complete website rekenen we 2-4 weken, afhankelijk van de complexiteit.'
  },
  {
    q: 'Werken jullie met lange contracten?',
    a: 'Nee, wij geloven in de kracht van onze dienstverlening. De meeste diensten zijn maandelijks opzegbaar. Wij willen dat u blijft omdat u tevreden bent, niet omdat u vastzit.'
  },
  {
    q: 'Wat maakt jullie anders dan andere IT-bedrijven?',
    a: 'Wij combineren IT, websites én marketing onder één dak, specifiek voor ZZP en MKB. Geen grote corporate aanpak, maar persoonlijke aandacht en oplossingen die passen bij uw schaal en budget.'
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

const TargetGroupCard = ({ group, index }: { group: typeof targetGroups[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-6 sm:p-8 rounded-2xl h-full border border-white/10 hover:border-quantum-purple/40 transition-all">
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${group.color}15` }}
        >
          <group.icon className="w-7 h-7" style={{ color: group.color }} />
        </div>
        <div>
          <h3 className="text-xl font-bold">{group.title}</h3>
          <p className="text-sm text-gray-500">{group.subtitle}</p>
        </div>
      </div>

      <p className="text-gray-400 mb-5">{group.description}</p>

      <ul className="space-y-2">
        {group.benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-quantum-green flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  </ScrollTrigger>
)

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-6 rounded-2xl h-full border border-quantum-purple/20 hover:border-quantum-purple/40 transition-all">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: `${service.color}15` }}
      >
        <service.icon className="w-6 h-6" style={{ color: service.color }} />
      </div>

      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{service.description}</p>

      <ul className="space-y-1.5">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-gray-300">
            <CheckCircle2 className="w-3 h-3 text-quantum-green flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </ScrollTrigger>
)

const WhyUsCard = ({ item, index }: { item: typeof whyUs[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-quantum-green/30 transition-all h-full">
      <div className="w-12 h-12 rounded-xl bg-quantum-green/10 flex items-center justify-center mb-4">
        <item.icon className="w-6 h-6 text-quantum-green" />
      </div>
      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
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

export default function OplossingenClientPage() {
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
                <Building2 className="w-4 h-4 mr-2 inline" />
                Voor ZZP & MKB
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                IT die{' '}
                <span className="block text-gradient mt-2">
                  met u Meegroeit
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                Van ZZP'er tot MKB – <strong className="text-white">wij zijn uw digitale partner</strong>.
                IT, websites, marketing en automatisering onder één dak. Persoonlijk en schaalbaar.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span><strong>Eén aanspreekpunt</strong> voor IT, websites én marketing</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span><strong>Schaalbare oplossingen</strong> die meegroeien met uw bedrijf</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span><strong>Persoonlijke aanpak</strong> – u bent geen nummertje</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <User className="w-4 h-4 text-quantum-green" />
                  <span>ZZP</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Building2 className="w-4 h-4 text-quantum-purple" />
                  <span>MKB</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <TrendingUp className="w-4 h-4 text-quantum-blue" />
                  <span>Groeiend bedrijf</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25"
                  asChild
                >
                  <Link href="/contact?service=oplossingen">
                    Vrijblijvend Kennismaken
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
                  <BusinessDashboard />
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
                    <User className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">ZZP'ers</p>
                    <p className="text-sm font-bold text-white">Focus op uw vak</p>
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
                    <Building2 className="w-5 h-5 text-quantum-purple" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">MKB</p>
                    <p className="text-sm font-bold text-white">Schaalbaar groeien</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent" />
      </section>

      {/* ==================== DOELGROEPEN ==================== */}
      <section className="py-20" aria-labelledby="doelgroepen-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Voor Wie</Badge>
              <h2 id="doelgroepen-title" className="text-3xl md:text-4xl font-bold mb-4">
                Oplossingen voor <span className="text-gradient">elke ondernemer</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Of u nu alleen werkt of een team heeft – wij hebben de juiste oplossing voor uw situatie.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {targetGroups.map((group, index) => (
              <TargetGroupCard key={index} group={group} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== VEELVOORKOMENDE SITUATIES ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="situaties-title">
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
                    Situaties die wij <span className="text-gradient">dagelijks oplossen</span>
                  </h2>
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
                          <p className="text-sm text-quantum-purple font-medium">{situation.persona}</p>
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
                    <Link href="/contact?service=oplossingen">
                      Ja, dit herken ik – laten we praten
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
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
              <Badge className="mb-4">Onze Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                IT, Marketing & meer onder <span className="text-gradient">één dak</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Van website en IT-support tot online marketing en AI. Wij regelen het zodat u kunt ondernemen.
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

      {/* ==================== WERKWIJZE ==================== */}
      <section className="py-24 bg-cyber-dark/50" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-quantum-purple to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Onze Aanpak</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Zo werken wij <span className="text-gradient">samen</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                      Een persoonlijke aanpak van kennismaking tot doorlopende ondersteuning.
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-quantum-purple/10 bg-gradient-to-b from-quantum-purple/5 to-transparent">
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-quantum-purple/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-quantum-green/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Wij</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Uw <span className="text-gradient">digitale partner</span>
                  </h2>
                  <p className="text-gray-400 max-w-2xl mx-auto">
                    Wij zijn er voor ondernemers die willen focussen op waar ze goed in zijn.
                  </p>
                </header>
              </ScrollTrigger>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
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
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Vragen over onze <span className="text-gradient">oplossingen</span>?
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
                <Building2 className="w-8 h-8 text-quantum-purple" />
              </div>

              <Badge className="mb-4 sm:mb-6 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
                Vrijblijvend Gesprek
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Laten we{' '}
                <span className="text-gradient">kennismaken</span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Vertel ons over uw bedrijf en ontdek hoe wij u kunnen helpen groeien.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-lg shadow-quantum-purple/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=oplossingen">
                    Plan een Gesprek
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
                  Vrijblijvend
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Persoonlijk advies
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Binnen 24u reactie
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
