'use client'

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Cloud, CheckCircle2, ArrowRight, Phone,
  Clock, Users, Shield, Zap,
  Mail, HardDrive, Video, MessageSquare,
  FileText, Calendar, Lock, RefreshCw,
  Settings, Headphones, Star, Activity,
  Building2, TrendingUp, Target, Award
} from 'lucide-react'
import React, { Suspense, useState, useEffect } from 'react'
import Link from 'next/link'

const CloudNetwork = dynamic(() => import('@/components/3d/CloudNetwork'), { ssr: false })

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

// Loading skeleton voor 3D component
const Scene3DLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className="w-24 h-24 rounded-full bg-[#0078D4]/20 animate-pulse" />
      <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-[#0078D4]/30 animate-ping" style={{ animationDuration: '2s' }} />
    </div>
  </div>
)

// ============================================================================
// DATA
// ============================================================================

const m365Apps = [
  {
    icon: Mail,
    name: 'Exchange Online',
    description: 'Professionele zakelijke e-mail met 50GB opslag, gedeelde agenda\'s en contacten. Overal toegang via web, desktop en mobiel.',
    color: '#0078D4'
  },
  {
    icon: Video,
    name: 'Microsoft Teams',
    description: 'Videobellen, chatten en samenwerken in één platform. De centrale hub voor al uw teamcommunicatie.',
    color: '#6264A7'
  },
  {
    icon: HardDrive,
    name: 'OneDrive',
    description: '1TB cloudopslag per gebruiker. Bestanden veilig opslaan, delen en synchroniseren tussen al uw apparaten.',
    color: '#0078D4'
  },
  {
    icon: FileText,
    name: 'SharePoint',
    description: 'Intranet en documentbeheer voor uw organisatie. Centrale plek voor bedrijfsinformatie en samenwerking.',
    color: '#038387'
  },
  {
    icon: Calendar,
    name: 'Outlook & Agenda',
    description: 'E-mail, agenda en taken geïntegreerd. Plan vergaderingen, beheer uw tijd en blijf georganiseerd.',
    color: '#0078D4'
  },
  {
    icon: Shield,
    name: 'Security & Compliance',
    description: 'Ingebouwde beveiliging, AVG-compliance en data loss prevention. Uw data is veilig.',
    color: '#D83B01'
  },
]

const services = [
  {
    icon: RefreshCw,
    title: 'Migratie & Implementatie',
    description: 'Soepele overgang naar Microsoft 365. Van Google Workspace, on-premise Exchange of andere systemen - wij migreren uw e-mail, bestanden en agenda\'s zonder dataverlies.',
    features: ['E-mail migratie', 'Data migratie', 'Gebruikers training', 'Minimale downtime']
  },
  {
    icon: Settings,
    title: 'Configuratie & Optimalisatie',
    description: 'Microsoft 365 optimaal inrichten voor uw organisatie. Security policies, gebruikersbeheer, groepen en alle instellingen precies zoals u het wilt.',
    features: ['Tenant configuratie', 'Security policies', 'Groepen & rechten', 'Best practices']
  },
  {
    icon: Headphones,
    title: 'Beheer & Support',
    description: 'Doorlopend beheer van uw M365 omgeving. Wij handelen gebruikersaanvragen af, lossen problemen op en houden alles up-to-date.',
    features: ['Gebruikersbeheer', 'Licentie beheer', 'Troubleshooting', 'Updates & patches']
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    description: 'Beveilig uw Microsoft 365 omgeving. Multi-factor authenticatie, conditional access, data loss prevention en AVG-compliance.',
    features: ['MFA implementatie', 'Conditional access', 'DLP policies', 'Audit logging']
  },
]

const benefits = [
  {
    icon: Cloud,
    title: 'Overal Werken',
    description: 'Toegang tot al uw bestanden, e-mail en applicaties vanaf elk apparaat, waar u ook bent.'
  },
  {
    icon: Users,
    title: 'Betere Samenwerking',
    description: 'Teams, SharePoint en OneDrive maken samenwerken eenvoudig - intern en met externe partners.'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Microsoft investeert miljarden in security. Profiteer van dezelfde beveiliging als grote enterprises.'
  },
  {
    icon: TrendingUp,
    title: 'Schaalbaar',
    description: 'Eenvoudig gebruikers toevoegen of verwijderen. Betaal alleen voor wat u gebruikt.'
  },
  {
    icon: RefreshCw,
    title: 'Altijd Up-to-date',
    description: 'Automatische updates zorgen dat u altijd de nieuwste features en security patches heeft.'
  },
  {
    icon: Zap,
    title: 'Verhoogde Productiviteit',
    description: 'Geïntegreerde tools die naadloos samenwerken. Minder schakelen, meer gedaan krijgen.'
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Inventarisatie',
    description: 'We analyseren uw huidige situatie, wensen en eisen voor de perfecte M365 configuratie.',
    icon: Target
  },
  {
    step: '02',
    title: 'Planning',
    description: 'Een gedetailleerd migratieplan met tijdlijn, zodat u precies weet wat u kunt verwachten.',
    icon: Calendar
  },
  {
    step: '03',
    title: 'Migratie',
    description: 'Wij voeren de migratie uit - meestal in het weekend om verstoring te minimaliseren.',
    icon: RefreshCw
  },
  {
    step: '04',
    title: 'Training & Support',
    description: 'Uw team leert de nieuwe tools kennen. En wij blijven beschikbaar voor vragen.',
    icon: Users
  },
]

const whyUs = [
  {
    icon: Award,
    title: 'Microsoft Partner',
    description: 'Gecertificeerd Microsoft Partner met jarenlange M365 ervaring.',
    stat: 'Certified',
    statLabel: 'Microsoft Partner'
  },
  {
    icon: Building2,
    title: 'MKB Specialist',
    description: 'Wij begrijpen de uitdagingen van het MKB en stemmen onze aanpak daarop af.',
    stat: '500+',
    statLabel: 'MKB klanten'
  },
  {
    icon: Headphones,
    title: 'Persoonlijke Support',
    description: 'Geen helpdesk in het buitenland. Directe toegang tot Nederlandse M365 experts.',
    stat: '<1 uur',
    statLabel: 'responstijd'
  },
  {
    icon: Target,
    title: 'Vaste Prijzen',
    description: 'Transparante tarieven voor migratie en beheer. Geen verrassingen achteraf.',
    stat: '100%',
    statLabel: 'transparant'
  },
]

// ============================================================================
// COMPONENTS
// ============================================================================

const AppCard = ({ app, index }: { app: typeof m365Apps[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-6 rounded-2xl border border-white/10 hover:border-quantum-blue/30 transition-all h-full group">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
        style={{ backgroundColor: `${app.color}20` }}
      >
        <app.icon className="w-6 h-6" style={{ color: app.color }} />
      </div>
      <h3 className="text-lg font-bold mb-2">{app.name}</h3>
      <p className="text-gray-400 text-sm">{app.description}</p>
    </div>
  </ScrollTrigger>
)

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-8 rounded-2xl border border-quantum-blue/20 hover:border-quantum-blue/40 transition-all h-full">
      <div className="w-14 h-14 rounded-2xl bg-quantum-blue/10 flex items-center justify-center mb-6">
        <service.icon className="w-7 h-7 text-quantum-blue" />
      </div>
      <h3 className="text-xl font-bold mb-3">{service.title}</h3>
      <p className="text-gray-400 mb-6">{service.description}</p>
      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <CheckCircle2 className="w-4 h-4 text-quantum-green flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </ScrollTrigger>
)

const BenefitCard = ({ benefit, index }: { benefit: typeof benefits[0], index: number }) => (
  <ScrollTrigger delay={index * 0.05}>
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors">
      <div className="w-10 h-10 rounded-lg bg-quantum-purple/10 flex items-center justify-center flex-shrink-0">
        <benefit.icon className="w-5 h-5 text-quantum-purple" />
      </div>
      <div>
        <h3 className="font-bold mb-1">{benefit.title}</h3>
        <p className="text-gray-400 text-sm">{benefit.description}</p>
      </div>
    </div>
  </ScrollTrigger>
)

const ProcessStep = ({ step, index }: { step: typeof processSteps[0], index: number }) => (
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

const WhyUsCard = ({ item, index }: { item: typeof whyUs[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-6 rounded-2xl border border-white/10 hover:border-quantum-blue/30 transition-all h-full">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-quantum-blue/10 flex items-center justify-center">
          <item.icon className="w-6 h-6 text-quantum-blue" />
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-quantum-green">{item.stat}</p>
          <p className="text-xs text-gray-500">{item.statLabel}</p>
        </div>
      </div>
      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
      <p className="text-gray-400 text-sm">{item.description}</p>
    </div>
  </ScrollTrigger>
)

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function Microsoft365PageClient() {
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-cyber-darker text-white overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#0078D4]/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-[#0078D4]/10 text-[#0078D4] border-[#0078D4]/30">
                <Cloud className="w-4 h-4 mr-2 inline" />
                Microsoft Partner
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Microsoft 365
                <span className="block text-gradient mt-2">
                  optimaal benut
                </span>
              </h1>

              <p className="text-lg md:text-xl text-gray-400 mb-6 leading-relaxed">
                Haal meer uit uw Microsoft 365 investering. Van migratie tot dagelijks beheer - wij zorgen dat Teams, SharePoint, OneDrive en Exchange perfect werken voor uw organisatie.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Soepele migratie zonder dataverlies</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Optimale configuratie voor uw organisatie</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0" />
                  <span>Doorlopend beheer en Nederlandse support</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4 text-quantum-blue" />
                  <span>Snelle implementatie</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>Microsoft Partner</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0078D4] to-quantum-purple hover:opacity-90 shadow-lg shadow-[#0078D4]/25"
                  asChild
                >
                  <Link href="/contact?service=microsoft-365">
                    Gratis M365 Advies
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
              className="relative h-[400px] md:h-[500px] lg:h-[550px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#0078D4]/20 via-quantum-purple/10 to-transparent blur-3xl rounded-full" />

              <Suspense fallback={<Scene3DLoader />}>
                <Canvas camera={{ position: [0, 0, isMobile ? 4.5 : 6], fov: isMobile ? 50 : 45 }} dpr={[1, 1.5]} performance={{ min: 0.5 }}>
                  <CloudNetwork />
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
                    <Cloud className="w-5 h-5 text-quantum-green" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Cloud</p>
                    <p className="text-lg font-bold">Altijd toegang</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="hidden md:block absolute top-8 right-4 glass-effect px-4 py-3 rounded-xl border border-[#0078D4]/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0078D4]/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#0078D4]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400">Productiviteit</p>
                    <p className="text-lg font-bold">Verhoogd</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cyber-darker to-transparent" />
      </section>

      {/* ==================== M365 APPS ==================== */}
      <section className="py-24 bg-cyber-dark/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <div className="text-center mb-16">
              <Badge className="mb-4">Microsoft 365 Apps</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Alles wat u nodig heeft in <span className="text-gradient">één platform</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Microsoft 365 biedt een complete suite van productiviteitstools die naadloos samenwerken.
              </p>
            </div>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {m365Apps.map((app, index) => (
              <AppCard key={index} app={app} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SERVICES ==================== */}
      <section className="py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <div className="text-center mb-16">
              <Badge className="mb-4">Onze Diensten</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Van migratie tot <span className="text-gradient">dagelijks beheer</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Wij ondersteunen u in elke fase van uw Microsoft 365 journey.
              </p>
            </div>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== BENEFITS ==================== */}
      <section className="py-24 bg-cyber-dark/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <ScrollTrigger>
              <div>
                <Badge className="mb-4 bg-quantum-purple/20 text-quantum-purple border-quantum-purple/30">Voordelen</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Waarom <span className="text-gradient">Microsoft 365?</span>
                </h2>
                <p className="text-gray-400 mb-8">
                  Microsoft 365 is meer dan alleen Office. Het is een compleet platform voor moderne werkplekken dat groeit met uw organisatie.
                </p>
                <Button asChild>
                  <Link href="/contact?service=microsoft-365">
                    Ontdek de mogelijkheden
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </ScrollTrigger>

            <div className="grid gap-2">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROCESS ==================== */}
      <section className="py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <div className="text-center mb-16">
              <Badge className="mb-4">Ons Proces</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Van start tot <span className="text-gradient">productief</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Een gestructureerde aanpak voor een succesvolle Microsoft 365 implementatie.
              </p>
            </div>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WHY US ==================== */}
      <section className="py-24 bg-cyber-dark/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <div className="text-center mb-16">
              <Badge className="mb-4">Waarom Start Beheer</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Uw <span className="text-gradient">Microsoft 365 partner</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Gecertificeerde expertise gecombineerd met persoonlijke aandacht voor uw organisatie.
              </p>
            </div>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyUs.map((item, index) => (
              <WhyUsCard key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0078D4]/10 via-transparent to-quantum-purple/10" />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-12 md:p-16 rounded-3xl border border-[#0078D4]/20">
              <Badge className="mb-6 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
                Gratis Adviesgesprek
              </Badge>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Klaar om meer uit <span className="text-gradient">M365 te halen?</span>
              </h2>

              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Plan een vrijblijvend gesprek. Wij analyseren uw huidige situatie en adviseren over de beste aanpak voor uw organisatie.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#0078D4] to-quantum-purple hover:opacity-90 shadow-lg shadow-[#0078D4]/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=microsoft-365">
                    Plan Gratis Adviesgesprek
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
                  Vrijblijvend advies
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Microsoft Partner
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-quantum-green" />
                  Nederlandse support
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
