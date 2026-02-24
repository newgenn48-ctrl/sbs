'use client'

import React, { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import HologramCard from '@/components/animations/HologramCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Globe,
  Code2,
  Palette,
  Gauge,
  ShoppingCart,
  ArrowRight,
  CheckCircle2,
  XCircle,
  FileText,
  FileLock2,
  Rocket,
  ChevronDown,
  ShieldCheck,
  Zap,
  Infinity,
  Scale,
  Puzzle,
  ThumbsDown,
  ThumbsUp,
  Sparkles,
  Target,
  Clock,
  Award
} from 'lucide-react'
import Link from 'next/link'

const DigitalNetwork = dynamic(() => import('@/components/3d/DigitalNetwork'), {
  ssr: false,
})
const DeferredCanvas = dynamic(() => import('@/components/3d/DeferredCanvas'), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-24 h-24 rounded-full bg-quantum-blue/20 animate-pulse" />
    </div>
  ),
})

const problemItems = [
  "Mijn website is traag, onveilig en gebouwd op een log WordPress thema.",
  "Het ontwerp is een 13-in-een-dozijn template en straalt geen autoriteit uit.",
  "Ik ben afhankelijk van dure, trage plugins die constant updates vereisen.",
  "Mijn site is niet vindbaar en levert geen leads of klanten op."
];

const solutionItems = [
  "Een vlijmscherpe, custom-coded website die gegarandeerd onder 2 seconden laadt.",
  "Een uniek, high-end design dat uw merkidentiteit perfect vertaalt en vertrouwen wekt.",
  "Nul afhankelijkheid van externe plugins. Alle functionaliteit is maatwerk.",
  "Een solide technisch SEO-fundament voor duurzame online dominantie."
];

const promiseItems = [
    { icon: Gauge, title: 'Gegarandeerde Performance', description: 'Uw site laadt gegarandeerd onder 2 seconden, een cruciale factor voor SEO en gebruikerservaring.' },
    { icon: FileLock2, title: '100% Eigendom, 0% Lock-in', description: 'U bent volledig eigenaar van de code, zonder afhankelijkheid van thema- of plugin-licenties.' },
    { icon: FileText, title: 'Vaste, Transparante Prijzen', description: 'Geen onverwachte kosten voor licenties of premium plugins. U weet precies waar u aan toe bent.' },
    { icon: Rocket, title: 'Toekomstbestendige Architectuur', description: 'Gebouwd op een modern, schaalbaar fundament dat meegroeit met uw ambities, niet ertegen vecht.' }
];

const packages = [
  {
    name: 'Basis Website',
    price: 'Vanaf €1.199',
    description: 'Een professionele online start',
    pages: '1-3 pagina\'s',
    features: [
      { title: 'Modern, responsive design', details: 'Een visueel aantrekkelijk ontwerp dat perfect werkt op desktops, tablets en mobiele telefoons.' },
      { title: 'Basis SEO optimalisatie', details: 'We implementeren de essentiële SEO-technieken zodat zoekmachines uw site kunnen vinden en indexeren.' },
      { title: 'Contactformulier', details: 'Een eenvoudig en effectief formulier waarmee bezoekers direct contact met u kunnen opnemen.' },
      { title: 'SSL certificaat', details: 'Essentiële beveiliging (het slotje in de browser) die het vertrouwen van bezoekers verhoogt.' },
      { title: '1 maand support', details: 'Technische ondersteuning en hulp bij vragen gedurende de eerste maand na livegang.' }
    ]
  },
  {
    name: 'Business Website',
    price: 'Vanaf €2.495',
    description: 'Voor groeiende ondernemingen',
    pages: '5-8 pagina\'s',
    features: [
      { title: 'Alle features van Basis', details: 'De solide fundering van het basispakket is volledig inbegrepen.' },
      { title: 'Custom design op maat', details: 'Een uniek ontwerp dat volledig is afgestemd op uw merkidentiteit, zonder gebruik van templates.' },
      { title: 'Eenvoudig CMS (bv. Strapi)', details: 'Beheer zelf eenvoudig teksten en afbeeldingen via een gebruiksvriendelijk en snel Content Management Systeem.' },
      { title: 'Blog functionaliteit', details: 'Deel uw expertise en trek meer bezoekers aan met een geïntegreerde, SEO-vriendelijke blogmodule.' },
      { title: 'Marketing integraties', details: 'Koppelingen met tools zoals Google Analytics, Mailchimp & HubSpot.' },
      { title: '3 maanden support', details: 'Uitgebreide technische ondersteuning en advies voor een periode van drie maanden.' }
    ],
    recommended: true
  },
  {
    name: 'Maatwerk Applicatie',
    price: 'Vanaf €7.995',
    description: 'Complexe web applicaties',
    pages: 'Onbeperkt',
    features: [
      { title: 'Alles uit Business', details: 'Alle voordelen van het Business-pakket, uitgebreid met geavanceerde functionaliteiten.' },
      { title: 'Shopify E-commerce', details: 'Volledige webshopfunctionaliteit op het krachtige en schaalbare Shopify-platform.' },
      { title: 'API koppelingen', details: 'Integraties met externe software, zoals uw CRM, boekhoudpakket of andere bedrijfssystemen.' },
      { title: 'Advanced analytics', details: 'Diepgaande tracking en rapportages om het gedrag van uw bezoekers te analyseren en te optimaliseren.' },
      { title: 'Performance monitoring', details: 'Continue, proactieve monitoring van de snelheid en prestaties van uw applicatie.' },
      { title: '12 maanden support', details: 'Een volledig jaar van prioritaire ondersteuning, onderhoud en strategisch advies.' }
    ]
  }
]

const technologies = [
  { icon: Code2, name: 'Custom Code', desc: 'Geen trage templates/plugins' },
  { icon: Palette, name: 'Uniek Design', desc: 'Perfecte merkidentiteit' },
  { icon: Zap, name: 'Extreme Performance', desc: '<2s laadtijd, wereldwijd' },
  { icon: ShoppingCart, name: 'Shopify E-commerce', desc: 'Krachtige, schaalbare webshops' }
]

const comparisonData = {
  features: [
    { name: 'Performance', custom: 'Extreem snel, <2s laadtijd', standard: 'Traag, afhankelijk van server & plugins', icon: Zap },
    { name: 'Veiligheid', custom: 'Modern, robuust & proactief beveiligd', standard: 'Kwetsbaar, constant doelwit van hackers', icon: ShieldCheck },
    { name: 'Design', custom: '100% uniek, onbeperkte mogelijkheden', standard: 'Gelimiteerd door aangekocht thema', icon: Palette },
    { name: 'Schaalbaarheid', custom: 'Gebouwd om mee te groeien met uw bedrijf', standard: 'Beperkt, wordt complex en duur bij groei', icon: Scale },
    { name: 'Onderhoud', custom: 'Minimaal, geen constante plugin-updates', standard: 'Hoog, wekelijkse updates vereist', icon: Puzzle },
    { name: 'Lange Termijn Kosten', custom: 'Lagere TCO, geen licentiekosten', standard: 'Hoge TCO door licenties & onderhoud', icon: Infinity },
  ]
}

const faqItems = [
  {
    question: "Waarom gebruiken jullie geen WordPress of templates?",
    answer: "Simpel: performance, veiligheid en maatwerk. WordPress is een fantastische tool voor bloggers, maar voor serieuze bedrijfswebsites is het vaak traag, onveilig en beperkend. Door 100% custom code te schrijven, hebben we volledige controle over de snelheid, beveiligen we de site proactief en zijn we niet gelimiteerd door een aangekocht thema."
  },
  {
    question: "Is een custom website niet veel duurder?",
    answer: "De initiële investering kan hoger zijn dan een simpele template-website, maar op de lange termijn is het bijna altijd goedkoper. U betaalt niet voor dure, jaarlijkse licenties voor thema's en premium plugins. Bovendien levert een snellere, professionelere website significant meer klanten en omzet op."
  },
  {
    question: "Waarom Shopify voor E-commerce?",
    answer: "Wij geloven in het kiezen van de beste tool voor de klus. Voor e-commerce is Shopify de onbetwiste wereldleider. Ze bieden ongeëvenaarde schaalbaarheid, veiligheid en een ecosysteem van apps dat elke denkbare functionaliteit mogelijk maakt."
  },
  {
    question: "Wat gebeurt er na de supportperiode?",
    answer: "Na de inbegrepen supportperiode bent u volledig vrij. U kunt zelf klein onderhoud doen, of een onderhoudscontract bij ons afsluiten voor continue monitoring, updates en support. We bieden flexibele pakketten die passen bij uw behoefte."
  }
]

interface InfoCardProps {
  title: string;
  items: string[];
  variant: 'problem' | 'solution';
}

const InfoCard: React.FC<InfoCardProps> = ({ title, items, variant }) => {
  const isProblem = variant === 'problem';
  const titleColor = isProblem ? 'text-red-400' : 'text-quantum-green';
  const borderColor = isProblem ? 'border-red-500/20' : 'border-quantum-green/20';
  const Icon = isProblem ? XCircle : CheckCircle2;
  const iconColor = isProblem ? 'text-red-500' : 'text-quantum-green';

  return (
    <div className={`glass-effect p-8 rounded-2xl ${borderColor} h-full`}>
      <h2 className={`text-3xl font-display font-bold mb-6 ${titleColor}`}>{title}</h2>
      <ul className="space-y-4 text-gray-300">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <Icon className={`${iconColor} mt-1 h-5 w-5 flex-shrink-0`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface Feature {
  title: string;
  details: string;
}

interface FeatureAccordionProps {
  feature: Feature;
  isOpen: boolean;
  onToggle: () => void;
}

const FeatureAccordion: React.FC<FeatureAccordionProps> = ({ feature, isOpen, onToggle }) => (
  <div className="border-b border-quantum-green/10 py-2">
    <button onClick={onToggle} className="flex items-center justify-between w-full text-left text-sm">
      <span className="font-medium text-gray-200 flex items-start gap-2">
        <CheckCircle2 className="h-4 w-4 text-quantum-green mt-0.5 flex-shrink-0" />
        {feature.title}
      </span>
      <ChevronDown className={`transform transition-transform duration-300 text-quantum-green ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: 'auto', marginTop: '8px' }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-xs text-gray-400 pl-6 pr-4">{feature.details}</p>
        </m.div>
      )}
    </AnimatePresence>
  </div>
);

interface PricingCardProps {
  pkg: typeof packages[0];
}

const PricingCard: React.FC<PricingCardProps> = ({ pkg }) => {
  const [openFeature, setOpenFeature] = useState<number | null>(0);

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <HologramCard className={`h-full flex flex-col ${pkg.recommended ? 'scale-105' : ''}`}>
      <div className="p-8 flex flex-col flex-grow">
        {pkg.recommended && (
          <Badge className="mb-4 bg-quantum-green/20 text-quantum-green border-quantum-green">
            Populairste Keuze
          </Badge>
        )}

        <h3 className="text-2xl font-display font-bold mb-2">
          {pkg.name}
        </h3>

        <div className="mb-2">
          <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
        </div>

        <p className="text-quantum-blue mb-2">{pkg.pages}</p>
        <p className="text-gray-400 mb-6 flex-grow">{pkg.description}</p>

        <div className="space-y-1 mb-8">
          {pkg.features.map((feature, i) => (
            <FeatureAccordion
              key={i}
              feature={feature}
              isOpen={openFeature === i}
              onToggle={() => toggleFeature(i)}
            />
          ))}
        </div>

        <Button
          className={`w-full mt-auto ${
            pkg.recommended
              ? 'bg-gradient-to-r from-quantum-green to-quantum-blue'
              : 'bg-cyber-light hover:bg-cyber-light/80'
          }`}
        >
          Start Project
        </Button>
      </div>
    </HologramCard>
  );
};

const FaqAccordion = ({ item, isOpen, onToggle }: { item: typeof faqItems[0], isOpen: boolean, onToggle: () => void }) => (
  <div className="border-b border-quantum-green/10 py-4">
    <button onClick={onToggle} className="flex items-center justify-between w-full text-left">
      <span className="font-medium text-lg text-gray-200">{item.question}</span>
      <ChevronDown className={`transform transition-transform duration-300 text-quantum-green h-6 w-6 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <m.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-gray-400 pr-8">{item.answer}</p>
        </m.div>
      )}
    </AnimatePresence>
  </div>
);

export default function WebsitesPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-cyber-darker text-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-darker">
          <DeferredCanvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <DigitalNetwork />
          </DeferredCanvas>
        </div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-quantum-green/20 text-quantum-green border-quantum-green">
              High-Performance Web Development
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">Geen Templates.</span>
              <br />
              <span className="text-white">Puur Maatwerk.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Wij bouwen geen trage WordPress sites. Wij creëren 100% custom, high-performance digitale ervaringen die uw concurrentie ver achter zich laten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-quantum-green to-quantum-blue hover:scale-105 transition-transform"
              >
                Ontdek het Verschil
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-quantum-green/50 hover:bg-quantum-green/10"
              >
                Vraag een Demo aan
              </Button>
            </div>
          </m.div>
        </div>
      </section>

      <div className="relative z-10">
        {/* Features Grid */}
        <section className="py-20 relative">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
            <ScrollTrigger>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  <span className="text-gradient">De Fundamenten van Succes</span>
                </h2>
                <p className="text-xl text-gray-400">
                  Technologie gekozen voor maximale impact en ROI.
                </p>
              </div>
            </ScrollTrigger>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {technologies.map((tech, index) => (
                <ScrollTrigger key={index} delay={index * 0.1}>
                  <m.div
                    whileHover={{ scale: 1.05, rotateY: 5 }}
                    className="glass-effect p-6 rounded-xl border border-quantum-green/20 hover:border-quantum-green/50 transition-all text-center"
                  >
                    <tech.icon className="h-12 w-12 text-quantum-green mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                    <p className="text-gray-400 text-sm">{tech.desc}</p>
                  </m.div>
                </ScrollTrigger>
              ))}
            </div>
          </div>
        </section>

        {/* Video Sectie */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark/50 to-cyber-darker" />

          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Video */}
                <m.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-quantum-green/10">
                    <div className="absolute -inset-1 bg-gradient-to-r from-quantum-green/20 via-quantum-blue/20 to-quantum-purple/20 rounded-2xl blur-xl opacity-50" />
                    <div className="relative bg-cyber-dark rounded-2xl overflow-hidden">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="none"
                        className="w-full h-auto"
                      >
                        <source src="/website-laten-maken.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>

                  {/* Floating badge */}
                  <m.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="absolute -bottom-4 -right-4 lg:-right-8"
                  >
                    <div className="bg-cyber-dark/90 backdrop-blur-xl border border-quantum-green/30 rounded-xl px-4 py-3 shadow-lg">
                      <p className="text-quantum-green font-semibold text-lg">100%</p>
                      <p className="text-gray-400 text-sm">Maatwerk</p>
                    </div>
                  </m.div>
                </m.div>

                {/* Content */}
                <m.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Badge className="mb-4 px-4 py-2 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
                    <Sparkles className="w-4 h-4 mr-2 inline" />
                    Website Laten Maken
                  </Badge>

                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                    <span className="text-white">Uw Visie, </span>
                    <span className="text-gradient">Onze Code</span>
                  </h2>

                  <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                    Een website die niet alleen mooi is, maar ook écht werkt. Geen templates,
                    geen compromissen - puur maatwerk dat uw bedrijf laat groeien.
                  </p>

                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Van strategie tot livegang begeleiden wij u door het hele proces.
                    Het resultaat? Een razendsnelle, conversiegerichte website die uw
                    concurrentie ver achter zich laat.
                  </p>

                  {/* Quick features */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: Zap, text: 'Laadtijd onder 2 seconden' },
                      { icon: Target, text: 'Conversie geoptimaliseerd' },
                      { icon: Clock, text: 'Oplevering binnen 4 weken' },
                      { icon: Award, text: 'SEO-proof fundament' },
                    ].map((item, index) => (
                      <m.div
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
                      </m.div>
                    ))}
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-quantum-green to-quantum-blue hover:scale-105 transition-transform"
                    asChild
                  >
                    <Link href="/contact?service=website">
                      Start Uw Project
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </m.div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="py-20 relative bg-cyber-dark">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <ScrollTrigger>
                <InfoCard title="Herkent u dit?" items={problemItems} variant="problem" />
              </ScrollTrigger>
              <ScrollTrigger>
                <InfoCard title="De Oplossing" items={solutionItems} variant="solution" />
              </ScrollTrigger>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 relative">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
            <ScrollTrigger>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  <span className="text-gradient">Onze Aanpak vs. De Standaard</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Waarom een custom website op de lange termijn de slimmere investering is.
                </p>
              </div>
            </ScrollTrigger>
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-2 md:p-4">
                <div className="hidden md:grid grid-cols-3 gap-4 font-bold text-lg text-center p-4">
                  <div></div>
                  <div className="flex items-center justify-center gap-2">
                    <ThumbsUp className="text-quantum-green" /> Onze Aanpak
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <ThumbsDown className="text-red-400" /> Standaard (WordPress)
                  </div>
                </div>
                {comparisonData.features.map((feature, index) => (
                  <ScrollTrigger key={index} delay={index * 0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left p-4 border-t border-quantum-green/10">
                      <div className="font-bold flex items-center gap-3">
                        <feature.icon className="h-6 w-6 text-quantum-green" />
                        {feature.name}
                      </div>
                      <div className="text-gray-300 md:text-center">
                        <span className="md:hidden font-bold text-quantum-green/80">Onze Aanpak: </span>{feature.custom}
                      </div>
                      <div className="text-gray-400 md:text-center">
                        <span className="md:hidden font-bold text-red-400/80">Standaard: </span>{feature.standard}
                      </div>
                    </div>
                  </ScrollTrigger>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 relative bg-cyber-dark">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
            <ScrollTrigger>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  <span className="text-gradient">Transparante Pakketten</span>
                </h2>
                <p className="text-xl text-gray-400">
                  Duidelijke prijzen voor meetbare resultaten.
                </p>
              </div>
            </ScrollTrigger>

            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
              {packages.map((pkg, index) => (
                <ScrollTrigger key={index} delay={index * 0.1}>
                  <PricingCard pkg={pkg} />
                </ScrollTrigger>
              ))}
            </div>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-20">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
              <ScrollTrigger>
                  <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">Onze Website Belofte</span></h2>
                      <p className="text-xl text-gray-400 max-w-3xl mx-auto">Vier garanties waarop u kunt bouwen. Dit is de standaard die u van ons mag verwachten.</p>
                  </div>
              </ScrollTrigger>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                  {promiseItems.map((promise, index) => (
                      <ScrollTrigger key={index} delay={index * 0.1}>
                          <div className="glass-effect p-6 rounded-2xl h-full border border-quantum-green/20 text-center">
                              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-quantum-green/10 mx-auto mb-4">
                                  <promise.icon className="h-6 w-6 text-quantum-green" />
                              </div>
                              <h3 className="text-xl font-display font-bold mb-2">{promise.title}</h3>
                              <p className="text-gray-400 text-sm">{promise.description}</p>
                          </div>
                      </ScrollTrigger>
                  ))}
              </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 relative bg-cyber-dark">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
            <ScrollTrigger>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  <span className="text-gradient">Veelgestelde Vragen</span>
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Antwoorden op de meest voorkomende vragen.
                </p>
              </div>
            </ScrollTrigger>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <ScrollTrigger key={index} delay={index * 0.1}>
                  <FaqAccordion
                    item={item}
                    isOpen={openFaq === index}
                    onToggle={() => toggleFaq(index)}
                  />
                </ScrollTrigger>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
            <ScrollTrigger>
              <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-3xl border border-quantum-green/20">
                <Globe className="h-16 w-16 text-quantum-green mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  <span className="text-gradient">Klaar voor een Echte Website?</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  Stop met het verspillen van geld aan trage, onveilige template-sites. Investeer in een digitale ervaring die resultaat oplevert.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-quantum-green to-quantum-blue hover:scale-105 transition-transform"
                  >
                    Plan Strategie Sessie
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-quantum-green/50 hover:bg-quantum-green/10"
                  >
                    Bekijk Ons Werk
                  </Button>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </section>
      </div>
    </div>
  )
}
