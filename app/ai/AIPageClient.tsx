'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import HologramCard from '@/components/animations/HologramCard'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Typewriter from 'typewriter-effect'
import CountUp from 'react-countup'
import {
  Brain,
  Bot,
  Cpu,
  Workflow,
  Phone,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  ChevronDown,
  ShieldCheck,
  Zap,
  ThumbsDown,
  ThumbsUp,
  Scale,
  Puzzle,
  Infinity,
  BarChart,
  HeartHandshake
} from 'lucide-react'

const NeuralNetwork = dynamic(() => import('@/components/3d/NeuralNetwork'), {
  ssr: false,
})

const problemItems = [
  "Mijn team is te veel tijd kwijt aan repetitieve, handmatige taken.",
  "We lopen omzet mis omdat we niet 24/7 kunnen reageren op leads.",
  "Onze klantenservice is overbelast en de wachttijden zijn te lang.",
  "We nemen beslissingen op onderbuikgevoel in plaats van op data."
];

const solutionItems = [
  "Automatiseer 80% van uw administratie met slimme workflows.",
  "Een AI-chatbot die 24/7 leads kwalificeert en afspraken inplant.",
  "Verlaag de druk op uw supportteam met een AI die 70% van de vragen direct beantwoordt.",
  "Krijg voorspellende analyses die u precies vertellen waar uw volgende kans ligt."
];

const solutionCards = [
  {
    icon: Bot,
    title: 'AI Chatbots & Klantenservice',
    description: 'Verhoog klanttevredenheid en verlaag de druk op uw team met een AI die 24/7 vragen beantwoordt, leads kwalificeert en problemen oplost.',
    features: [
      '24/7 beschikbaarheid',
      'Directe antwoorden op 80% van de vragen',
      'Naadloze overdracht naar medewerkers',
      'CRM & Systeem Integratie'
    ],
    stat: {
      prefix: 'Bespaar ',
      value: 2500,
      suffix: '€/mnd',
    }
  },
  {
    icon: Workflow,
    title: 'Process Automation (RPA)',
    description: 'Elimineer saaie, repetitieve taken. Laat AI de administratie, data-invoer en rapportages doen, zodat uw team zich kan focussen op wat echt telt.',
    features: [
      'Automatisering van data-invoer',
      'Factuur- en documentverwerking',
      'Rapportage & Analyse',
      'Koppelingen met uw software'
    ],
    stat: {
      prefix: 'Bespaar ',
      value: 40,
      suffix: '% tijd',
    }
  },
  {
    icon: BarChart,
    title: 'AI Analytics & Inzichten',
    description: 'Transformeer data in concrete acties. Onze AI-modellen ontdekken patronen, voorspellen trends en geven u de inzichten om de concurrentie voor te blijven.',
    features: [
      'Voorspellende analyses',
      'Klantgedrag & Churn voorspelling',
      'Markttrend-analyse',
      'Real-time dashboards'
    ],
    stat: {
      prefix: '',
      value: 3,
      suffix: 'x snellere insights',
    }
  },
  {
    icon: Phone,
    title: 'Virtuele AI Assistent',
    description: 'Een slimme assistent die telefoongesprekken kan voeren, afspraken inplant en uw agenda beheert, volledig geïntegreerd met uw processen.',
    features: [
      'Intelligente call routing & afhandeling',
      'Automatische afspraakplanning',
      'Transcriptie en samenvattingen',
      '24/7 telefonische bereikbaarheid'
    ],
    stat: {
      prefix: 'Verhoogd met ',
      value: 95,
      suffix: '% bereikbaarheid',
    }
  }
]

const comparisonData = {
  features: [
    { name: 'Kosten', traditional: 'Hoge personeelskosten, schaalt lineair', ai: 'Lage operationele kosten, schaalt exponentieel', icon: Infinity },
    { name: 'Efficiëntie', traditional: 'Gevoelig voor menselijke fouten, 9-tot-5', ai: 'Foutloos, consistent en 24/7 operationeel', icon: Zap },
    { name: 'Klanttevredenheid', traditional: 'Lange wachttijden, inconsistente service', ai: 'Directe antwoorden, gepersonaliseerde ervaring', icon: HeartHandshake },
    { name: 'Inzichten', traditional: 'Gebaseerd op historische data, reactief', ai: 'Voorspellend, proactief en real-time', icon: BarChart },
    { name: 'Schaalbaarheid', traditional: 'Beperkt door personeelsomvang', ai: 'Onbeperkt schaalbaar zonder extra personeel', icon: Scale },
  ]
}

const pricingPackages = {
  kickstart: {
    name: 'AI Kickstart',
    price: '€1.495',
    frequency: '/ eenmalig',
    description: 'De perfecte start met AI.',
    cta: 'Kies Kickstart',
    features: [
      { title: '1x AI Chatbot Implementatie', details: 'Een slimme chatbot voor uw website om bezoekers te helpen en leads te verzamelen.' },
      { title: '1x Workflow Automatisering', details: 'Automatisering van één repetitief proces (bv. automatische factuurverwerking of data-invoer).' },
      { title: 'Basis CRM Integratie', details: 'Koppeling met uw bestaande CRM om data naadloos door te laten stromen.' },
      { title: 'Maandelijkse Rapportage', details: 'Een overzicht van de prestaties en de bespaarde tijd/kosten.' },
    ]
  },
  business: {
    name: 'Business Automation',
    price: '€3.995',
    frequency: '/ eenmalig',
    description: 'Voor serieuze efficiëntie.',
    cta: 'Kies Business',
    isPopular: true,
    features: [
      { title: 'Alles uit AI Kickstart', details: 'De solide fundering van het basispakket is volledig inbegrepen.' },
      { title: 'Geavanceerde Chatbot', details: 'Een chatbot met complexere gespreksflows en API-integraties (bv. afspraken plannen).' },
      { title: 'Meerdere Workflows', details: 'Automatisering van 3 tot 5 kernprocessen binnen uw bedrijf.' },
      { title: 'Uitgebreide Integraties', details: 'Koppelingen met meerdere systemen zoals boekhouding, projectmanagement, etc.' },
    ]
  },
  transformation: {
    name: 'AI Transformatie',
    price: 'Op Aanvraag',
    frequency: '',
    description: 'Volledige AI-integratie op maat.',
    cta: 'Neem Contact Op',
    features: [
      { title: 'Alles uit Business Automation', details: 'Alle voordelen van het Business-pakket, uitgebreid met maatwerk.' },
      { title: 'Maatwerk AI Modellen', details: 'Ontwikkeling van specifieke AI-modellen voor uw unieke uitdagingen, zoals voorspellende analyses.' },
      { title: 'Virtuele AI Assistent', details: 'Implementatie van een AI die telefoongesprekken kan aannemen en verwerken.' },
      { title: 'Real-time Analytics Dashboard', details: 'Een op maat gemaakt dashboard met voorspellende inzichten.' },
    ]
  }
};

const promiseItems = [
    { icon: BarChart, title: 'Meetbare ROI', description: 'We implementeren alleen AI die zichzelf gegarandeerd terugverdient, met duidelijke KPI\'s.' },
    { icon: Puzzle, title: 'Naadloze Integratie', description: 'Onze AI werkt perfect samen met uw bestaande software en processen.' },
    { icon: ShieldCheck, title: 'Ethisch & Veilig', description: 'Uw data is veilig en onze AI wordt ethisch en verantwoordelijk ingezet.' },
    { icon: HeartHandshake, title: 'Jargon-vrij', description: 'Wij spreken uw taal, geen onbegrijpelijke technische termen. U begrijpt precies wat u krijgt.' }
];

const faqItems = [
  {
    question: "Is AI niet ontzettend duur?",
    answer: "Niet meer. De technologie is toegankelijker dan ooit. Onze 'AI Kickstart' is ontworpen voor een snelle, betaalbare instap. De focus ligt altijd op ROI: de investering verdient zichzelf terug door kostenbesparing of omzetverhoging. Op de lange termijn is niets doen vaak duurder."
  },
  {
    question: "Vervangt AI mijn medewerkers?",
    answer: "Nee, AI vervangt taken, geen mensen. Het doel is om uw medewerkers te 'augmenteren': bevrijd hen van saai, repetitief werk, zodat zij zich kunnen richten op creativiteit, strategie en complex klantcontact. AI maakt hun werk waardevoller, niet overbodig."
  },
  {
    question: "Hoe snel zie ik resultaat?",
    answer: "Afhankelijk van de complexiteit, maar onze 'AI Kickstart' projecten leveren vaak al binnen 4 tot 6 weken de eerste meetbare resultaten op. U ziet direct een vermindering in handmatige uren of een toename in gekwalificeerde leads."
  },
  {
    question: "Is mijn bedrijf wel geschikt voor AI?",
    answer: "Als uw bedrijf processen heeft die herhaaldelijk worden uitgevoerd, of als u veel klantcontact heeft, is de kans 99% dat u kunt profiteren van AI. Onze gratis 'AI Scan' is de perfecte manier om vrijblijvend uw specifieke kansen te ontdekken."
  }
]

// Sub-components
const InfoCard: React.FC<{ title: string; items: string[]; variant: 'problem' | 'solution'; }> = ({ title, items, variant }) => {
  const isProblem = variant === 'problem';
  const titleColor = isProblem ? 'text-red-400' : 'text-quantum-green';
  const borderColor = isProblem ? 'border-red-500/20' : 'border-quantum-green/20';
  const Icon = isProblem ? XCircle : CheckCircle2;
  const iconColor = isProblem ? 'text-red-500' : 'text-quantum-green';

  return (
    <div className={`glass-effect p-8 rounded-2xl ${borderColor} h-full`}>
      <h2 className={`text-3xl font-display font-bold mb-6 ${titleColor}`}>{title}</h2>
      {isProblem ? (
        <ul className="space-y-4 text-gray-300">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Icon className={`${iconColor} mt-1 h-5 w-5 flex-shrink-0`} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-gray-300 space-y-4">
          <ScrollTrigger>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="text-quantum-green mt-1 h-5 w-5 flex-shrink-0" />
              <div className="flex-1">
                <Typewriter
                  options={{
                    strings: items,
                    autoStart: true,
                    loop: true,
                    delay: 40,
                    deleteSpeed: 10,
                  }}
                />
              </div>
            </div>
          </ScrollTrigger>
        </div>
      )}
    </div>
  );
};

const FeatureAccordion: React.FC<{ feature: { title: string; details: string; }; isOpen: boolean; onToggle: () => void; }> = ({ feature, isOpen, onToggle }) => (
  <div className="border-b border-quantum-pink/10 py-3">
    <button onClick={onToggle} className="flex items-center justify-between w-full text-left text-sm">
      <span className="font-medium text-gray-200">{feature.title}</span>
      <ChevronDown className={`transform transition-transform duration-300 text-quantum-pink ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0, marginTop: 0 }}
          animate={{ opacity: 1, height: 'auto', marginTop: '8px' }}
          exit={{ opacity: 0, height: 0, marginTop: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="text-xs text-gray-400 pr-4">{feature.details}</p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

interface PricingCardProps {
  pkg: {
    name: string;
    price: string;
    frequency: string;
    description: string;
    cta: string;
    features: { title: string; details: string; }[];
    subtext?: string;
    isPopular?: boolean;
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ pkg }) => {
  const [openFeature, setOpenFeature] = useState<number | null>(0);

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  const popularClass = pkg.isPopular ? 'p-[2px] bg-gradient-to-r from-quantum-purple via-quantum-pink to-quantum-purple bg-[length:200%_100%] animate-border-flow' : 'border border-quantum-pink/20';

  return (
    <div className={`rounded-2xl h-full ${popularClass}`}>
      <div className="glass-effect p-8 rounded-[14px] h-full flex flex-col relative">
        {pkg.isPopular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-quantum-purple text-white px-4 py-1 font-bold">Meest Gekozen</Badge>}
        <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
        <p className="text-gray-400 mb-6 h-10">{pkg.description}</p>
        <div className="mb-6">
          <span className="text-5xl font-bold text-quantum-pink">{pkg.price}</span>
          <span className="text-gray-400">{pkg.frequency}</span>
          {pkg.subtext && <p className="text-sm text-gray-400 mt-1">{pkg.subtext}</p>}
        </div>
        <div className="mb-8 flex-grow">
          <p className="font-semibold text-white mb-4">Wat is inbegrepen:</p>
          <div className="space-y-1">
            {pkg.features.map((feature, i) => (
              <FeatureAccordion 
                key={i} 
                feature={feature} 
                isOpen={openFeature === i}
                onToggle={() => toggleFeature(i)}
              />
            ))}
          </div>
        </div>
        <Button className={`w-full mt-auto ${pkg.isPopular ? 'bg-gradient-to-r from-quantum-pink to-quantum-purple hover:scale-105 transition-transform' : 'bg-quantum-pink/20 hover:bg-quantum-pink text-white border border-quantum-pink'}`}>{pkg.cta}</Button>
      </div>
    </div>
  );
};

const FaqAccordion = ({ item, isOpen, onToggle }: { item: typeof faqItems[0], isOpen: boolean, onToggle: () => void }) => (
    <div className="border-b border-quantum-pink/10 py-4">
        <button onClick={onToggle} className="flex items-center justify-between w-full text-left">
            <span className="font-medium text-lg text-gray-200">{item.question}</span>
            <ChevronDown className={`transform transition-transform duration-300 text-quantum-pink h-6 w-6 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                >
                    <p className="text-gray-400 pr-8">{item.answer}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);


export default function AIPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const toggleFaq = (index: number) => setOpenFaq(openFaq === index ? null : index);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      <div className="min-h-screen bg-cyber-darker text-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] pt-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} />
            <pointLight position={[-10, -10, -10]} intensity={0.7} color="#FF006E" />
            <NeuralNetwork />
          </Canvas>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-darker/50 to-cyber-darker z-1" />
        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-quantum-pink/20 text-quantum-pink border-quantum-pink">AI & Automation</Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">Stop met Tijd Verspillen.</span>
              <br />
              <span className="text-white">Automatiseer het.</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">Implementeer AI die direct kosten bespaart en omzet verhoogt.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-quantum-pink to-quantum-purple hover:scale-105 transition-transform">
                Start mijn AI Scan <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
        {/* Problem & Solution */}
        <section className="py-20 relative bg-cyber-dark">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <ScrollTrigger><InfoCard title="Herkent u dit?" items={problemItems} variant="problem" /></ScrollTrigger>
              <ScrollTrigger><InfoCard title="De Oplossing" items={solutionItems} variant="solution" /></ScrollTrigger>
            </div>
          </div>
        </section>

        {/* AI Solutions Matrix */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <ScrollTrigger>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">Onze AI-Diensten</span></h2>
                <p className="text-xl text-gray-400">Praktische AI-implementaties met directe ROI.</p>
              </div>
            </ScrollTrigger>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {solutionCards.map((solution, index) => (
                <ScrollTrigger key={index} delay={index * 0.1}>
                  <HologramCard className="h-full">
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-4">
                        <solution.icon className="h-12 w-12 text-quantum-pink" />
                        <Badge className="bg-quantum-green/20 text-quantum-green border-quantum-green">
                          {solution.stat.prefix}
                          <CountUp end={solution.stat.value} duration={2.5} enableScrollSpy scrollSpyDelay={300} />
                          {solution.stat.suffix}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-3">{solution.title}</h3>
                      <p className="text-gray-400 mb-6">{solution.description}</p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-quantum-pink" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </HologramCard>
                </ScrollTrigger>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 relative bg-cyber-dark">
          <div className="container mx-auto px-4">
            <ScrollTrigger>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">Traditioneel vs. AI-Gedreven</span></h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">Waarom een AI-investering op de lange termijn altijd wint.</p>
              </div>
            </ScrollTrigger>
            <div className="max-w-4xl mx-auto">
              <div className="glass-effect rounded-2xl p-2 md:p-4">
                <div className="hidden md:grid grid-cols-3 gap-4 font-bold text-lg text-center p-4">
                  <div></div>
                  <div className="flex items-center justify-center gap-2"><ThumbsUp className="text-quantum-green" /> AI-Gedreven Aanpak</div>
                  <div className="flex items-center justify-center gap-2"><ThumbsDown className="text-red-400" /> Traditionele Aanpak</div>
                </div>
                {comparisonData.features.map((feature, index) => (
                  <ScrollTrigger key={index} delay={index * 0.1}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-center md:text-left p-4 border-t border-quantum-pink/10">
                      <div className="font-bold flex items-center gap-3"><feature.icon className="h-6 w-6 text-quantum-green" />{feature.name}</div>
                      <div className="text-gray-300 md:text-center"><span className="md:hidden font-bold text-quantum-green/80">AI: </span>{feature.ai}</div>
                      <div className="text-gray-400 md:text-center"><span className="md:hidden font-bold text-red-400/80">Traditioneel: </span>{feature.traditional}</div>
                    </div>
                  </ScrollTrigger>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <ScrollTrigger>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">Transparante Pakketten</span></h2>
                <p className="text-xl text-gray-400">Duidelijke prijzen voor meetbare resultaten.</p>
              </div>
            </ScrollTrigger>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
              {Object.keys(pricingPackages).map((key, index) => (
                <ScrollTrigger key={key} delay={index * 0.1}>
                  <PricingCard pkg={pricingPackages[key as keyof typeof pricingPackages]} />
                </ScrollTrigger>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Journey */}
        <section className="py-20 relative bg-cyber-dark">
          <div className="container mx-auto px-4">
            <ScrollTrigger>
              <div className="max-w-3xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">Onze Implementatie Reis</span></h2>
                  <p className="text-xl text-gray-400">Van strategie tot livegang in 6-8 weken.</p>
                </div>
                <div className="relative">
                  <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-quantum-pink/50 via-quantum-purple/50 to-transparent" aria-hidden="true" />
                  <div className="space-y-12">
                    {[ 
                      { week: 'Week 1-2', title: 'Discovery & AI Scan', desc: 'Analyse van processen, identificatie van kansen en ROI-calculatie.' },
                      { week: 'Week 3-4', title: 'Proof of Concept', desc: 'Ontwikkeling van een pilot om de waarde direct aan te tonen.' },
                      { week: 'Week 5-6', title: 'Integratie & Training', desc: 'Naadloze koppeling met uw systemen en training van uw team.' },
                      { week: 'Week 7-8', title: 'Livegang & Optimalisatie', desc: 'Lancering, monitoring en continue verbetering voor maximaal resultaat.' }
                    ].map((step, i) => (
                      <motion.div key={i} initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative flex items-start gap-6">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyber-dark border-2 border-quantum-pink flex-shrink-0 mt-1 z-10"><div className="h-3 w-3 rounded-full bg-quantum-pink" /></div>
                        <div className="flex-1">
                          <p className="text-lg font-bold text-quantum-pink mb-1">{step.week}</p>
                          <h3 className="text-2xl font-display font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-400">{step.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </section>

        {/* Our Promise Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
              <ScrollTrigger>
                  <div className="text-center mb-12">
                      <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">Onze AI Belofte</span></h2>
                      <p className="text-xl text-gray-400 max-w-3xl mx-auto">Vier garanties waarop u kunt bouwen.</p>
                  </div>
              </ScrollTrigger>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                  {promiseItems.map((promise, index) => (
                      <ScrollTrigger key={index} delay={index * 0.1}>
                          <div className="glass-effect p-6 rounded-2xl h-full border border-quantum-pink/20 text-center">
                              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-quantum-pink/10 mx-auto mb-4">
                                  <promise.icon className="h-6 w-6 text-quantum-pink" />
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
          <div className="container mx-auto px-4">
            <ScrollTrigger>
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">Veelgestelde Vragen</span></h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">Antwoorden op de meest voorkomende vragen.</p>
              </div>
            </ScrollTrigger>
            <div className="max-w-3xl mx-auto">
              {faqItems.map((item, index) => (
                <ScrollTrigger key={index} delay={index * 0.1}>
                  <FaqAccordion item={item} isOpen={openFaq === index} onToggle={() => toggleFaq(index)} />
                </ScrollTrigger>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <ScrollTrigger>
              <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-3xl border border-quantum-pink/20">
                <Sparkles className="h-16 w-16 text-quantum-pink mx-auto mb-6" />
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6"><span className="text-gradient">Klaar om uw Bedrijf te Upgraden?</span></h2>
                <p className="text-xl text-gray-400 mb-8">Stop met concurreren op mankracht, start met winnen op intelligentie. Plan een gratis, vrijblijvende AI-strategiesessie en ontdek uw kansen.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-quantum-pink to-quantum-purple hover:scale-105 transition-transform">
                    Plan Gratis AI Sessie <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </ScrollTrigger>
          </div>
        </section>
      </div>
      </div>
    </>
  )
}