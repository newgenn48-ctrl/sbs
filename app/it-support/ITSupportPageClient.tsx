'use client'

import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Canvas } from '@react-three/fiber'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  ShieldCheck, Server, Wifi, Cloud, Lock, Zap, CheckCircle2, ArrowRight, Mail, Phone,
  Database, HardDrive, Search, Code, Camera, Settings, FileText, Users, XCircle,
  ClipboardList, Lightbulb, Rocket, Timer, TrendingUp, Check, ChevronDown
} from 'lucide-react'
import React, { useState } from 'react'

const NeuralNetwork = dynamic(() => import('@/components/3d/NeuralNetwork'), { ssr: false })

const polishedServices = [
  { icon: Cloud, name: 'Microsoft 365 Ecosysteem', description: 'Naadloze installatie, configuratie en proactief beheer van uw volledige M365-omgeving, inclusief Teams, OneDrive en SharePoint.' },
  { icon: Users, name: 'Compleet Werkplekbeheer', description: "Wij managen al uw devices (pc's, laptops, etc.) en garanderen dat uw volledige digitale werkplek altijd optimaal en veilig presteert." },
  { icon: Wifi, name: 'Robuust Internet & WiFi', description: 'Installatie en onderhoud van uw bedrijfsnetwerk, van ADSL tot glasvezel, voor een feilloze en supersnelle verbinding.' },
  { icon: HardDrive, name: 'Automatische Cloudback-ups', description: 'Dagelijkse, versleutelde back-ups naar meerdere externe locaties. Uw bedrijfscontinuïteit is gegarandeerd, wat er ook gebeurt.' },
  { icon: Server, name: 'Intelligent Netwerkbeheer', description: 'Wij zorgen dat al uw apparaten vlekkeloos communiceren. Potentiële problemen worden proactief gedetecteerd en geëlimineerd.' },
  { icon: Mail, name: 'Professionele E-mail Hosting', description: 'Zorgeloos beheer, configuratie en back-up van uw e-mail op eigen domein. Altijd en overal toegang tot mail, agenda en contacten.' },
  { icon: Phone, name: 'Direct-Response Helpdesk', description: 'Beschouw ons als uw interne IT-afdeling. Bij calamiteiten staan we direct voor u klaar en lossen problemen razendsnel en adequaat op.' },
  { icon: ShieldCheck, name: 'Proactieve Cyberbeveiliging', description: 'Voorkom datalekken, diefstal en misbruik van data met onze geavanceerde, meerlaagse beveiligingsprotocollen.' },
  { icon: Zap, name: 'Disaster Recovery Planning', description: 'Een calamiteit zoals brand of diefstal? Wij zijn voorbereid om verlies van kostbare data en tijdrovende hersteltrajecten te voorkomen.' },
  { icon: Lock, name: 'Geïntegreerd Antivirus & Spamfilter', description: 'Licentievrije bescherming tegen malware, phishing en ongewenste e-mail. Essentiële veiligheid, standaard inbegrepen.' },
  { icon: Database, name: 'AVG-Compliant Cloudopslag', description: 'Werk veilig samen aan projecten met bestanden die altijd beschikbaar zijn, versleuteld op Nederlandse servers volgens de AVG-normen.' },
  { icon: Settings, name: 'Strategisch VoIP & Telefonie Advies', description: 'Wij analyseren uw communicatiestromen en adviseren de juiste combinatie van vast, mobiel en VoIP voor maximale flexibiliteit en kostenbesparing.' },
  { icon: FileText, name: 'AVG & GDPR Implementatie', description: 'Wij navigeren de complexe privacywetgeving en implementeren de vereiste technische en organisatorische maatregelen binnen uw bedrijf.' },
  { icon: Search, name: 'Technische SEO & Monitoring', description: 'IT is meer dan problemen voorkomen. Wij monitoren uw online vindbaarheid en helpen u IT in te zetten om kansen te benutten en te groeien.' },
  { icon: Code, name: 'High-Performance Websites', description: 'Een conversiegerichte website die er fantastisch uitziet, perfect werkt op mobiel en technisch is geoptimaliseerd om hoog te scoren in zoekmachines.' },
  { icon: Camera, name: 'Professionele Camerabeveiliging', description: 'Beveilig niet alleen uw data, maar ook uw fysieke eigendommen. Wij leveren en installeren geavanceerde camerasystemen en opnameapparatuur.' }
];
const problemItems = [
  "IT-problemen kosten gemiddeld 14% productiviteit",
  "Security breaches kunnen €50.000+ kosten",
  "Verouderde systemen remmen groei",
  "Geen tijd voor strategische IT-planning"
];
const solutionItems = [
  "Proactief beheer voorkomt 95% van problemen",
  "Military-grade security & 24/7 monitoring",
  "Cloud-first strategie voor maximale flexibiliteit",
  "Strategische IT roadmap aligned met business goals"
];
const approachSteps = [
    { icon: ClipboardList, title: 'Gratis IT-Scan & Inventarisatie', description: 'We starten met een vrijblijvende analyse van uw huidige IT-omgeving om kansen en risico\'s in kaart te brengen.' },
    { icon: Lightbulb, title: 'Strategisch Advies op Maat', description: 'U ontvangt een helder, praktisch plan dat is afgestemd op uw bedrijfsdoelen, budget en toekomstvisie.' },
    { icon: Rocket, title: 'Naadloze Implementatie', description: 'Wij voeren de geplande verbeteringen door met minimale verstoring van uw dagelijkse werkzaamheden.' },
    { icon: ShieldCheck, title: 'Proactief Beheer & Support', description: 'We monitoren, onderhouden en beveiligen uw systemen continu en staan direct klaar voor al uw vragen.' }
];
const promiseItems = [
    { icon: Timer, title: 'Snelle Respons', description: 'Gegarandeerd een persoonlijke reactie binnen één uur op al uw supportvragen.' },
    { icon: FileText, title: 'Transparante Kosten', description: 'Heldere afspraken en geen onverwachte facturen. U weet altijd waar u aan toe bent.' },
    { icon: ShieldCheck, title: 'Proactieve Veiligheid', description: 'We wachten niet op problemen, maar voorkomen ze. Uw veiligheid is onze prioriteit.' },
    { icon: TrendingUp, title: 'Uw Groei Voorop', description: 'Onze IT-oplossingen zijn ontworpen om met uw bedrijf mee te groeien en uw ambities te ondersteunen.' }
];

const pricingPackages = {
  starter: {
    name: "Starter",
    price: "€84",
    frequency: "/ maand",
    description: "Voor de ambitieuze ZZP'er.",
    cta: "Kies Starter",
    features: [
      { title: 'Onbeperkte persoonlijke helpdesk', details: 'Direct toegang tot onze experts voor al uw IT-vragen en problemen, groot of klein. Geen tickets, geen wachttijden.' },
      { title: 'Beheer van Microsoft 365 of Google Workspace', details: 'Volledige configuratie, beheer en beveiliging van uw M365 of Google omgeving, inclusief e-mail, agenda en bestanden.' },
      { title: 'Installatie & configuratie van software', details: 'Wij zorgen dat alle benodigde bedrijfssoftware correct wordt geïnstalleerd, ingesteld en up-to-date gehouden.' },
      { title: 'Proactieve monitoring van systemen', details: '24/7 monitoring van uw systemen om problemen te signaleren en op te lossen voordat ze uw werk kunnen verstoren.' },
      { title: 'Dagelijkse versleutelde cloudback-ups', details: 'Automatische, versleutelde back-ups van al uw belangrijke data naar een veilige, externe locatie in Nederland.' },
      { title: 'Geïntegreerd antivirus en spamfilter', details: 'Robuuste bescherming tegen malware, phishing en andere digitale dreigingen, standaard inbegrepen.' },
    ]
  },
  business: {
    name: "Business",
    price: "€54",
    frequency: "/ werkplek / maand",
    subtext: "+ €90 basisbedrag per maand",
    description: "Voor het groeiende MKB, van 2 tot 150 medewerkers.",
    cta: "Kies Business",
    isPopular: true,
    features: [
      { title: 'Alle features van Starter', details: 'De volledige basis van het Starter-pakket vormt het fundament van uw IT-omgeving.' },
      { title: 'Proactief update- en patchmanagement', details: 'Wij zorgen dat alle systemen en software altijd voorzien zijn van de laatste (beveiligings)updates.' },
      { title: 'Beheer van netwerk & printers', details: 'Installatie, configuratie en onderhoud van uw bedrijfsnetwerk, WiFi en aangesloten apparaten zoals printers.' },
      { title: 'Centraal serverbeheer', details: 'Beheer en onderhoud van uw fysieke of virtuele server voor optimale prestaties en beschikbaarheid.' },
      { title: 'Uitgebreid device management', details: 'Volledig beheer van alle computers, laptops en mobiele apparaten binnen uw organisatie.' },
    ]
  },
  enterprise: {
    name: "Enterprise",
    price: "Op Aanvraag",
    frequency: "",
    description: "Voor maatwerk & hoge eisen.",
    cta: "Neem Contact Op",
    features: [
      { title: 'Alle features van Business', details: 'De solide basis van het Business-pakket, uitgebreid met maatwerk voor de hoogste standaarden.' },
      { title: 'Geavanceerde endpoint security (EDR)', details: 'Endpoint Detection & Response voor actieve dreigingsjacht en snelle isolatie van gecompromitteerde systemen.' },
      { title: 'Implementatie van 2FA/MFA', details: 'Verplichte multi-factor authenticatie voor een extra laag beveiliging op al uw accounts en systemen.' },
      { title: 'Security audits & logging', details: 'Continue logging en periodieke audits om te voldoen aan compliancy-eisen en de veiligheid te garanderen.' },
      { title: 'Begeleiding bij ISO/NEN audits', details: 'Technische en organisatorische ondersteuning bij het behalen en behouden van certificeringen als ISO 27001 en NEN 7510.' },
    ]
  }
};

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
    <div className={`glass-effect p-8 rounded-2xl ${borderColor}`}>
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
  <div className="border-b border-quantum-blue/10 py-3">
    <button onClick={onToggle} className="flex items-center justify-between w-full text-left text-sm">
      <span className="font-medium text-gray-200">{feature.title}</span>
      <ChevronDown className={`transform transition-transform duration-300 text-quantum-blue ${isOpen ? 'rotate-180' : ''}`} />
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
    features: Feature[];
    subtext?: string;
    isPopular?: boolean;
  };
}

const PricingCard: React.FC<PricingCardProps> = ({ pkg }) => {
  const [openFeature, setOpenFeature] = useState<number | null>(null);

  const toggleFeature = (index: number) => {
    setOpenFeature(openFeature === index ? null : index);
  };

  return (
    <div className={`glass-effect p-8 rounded-2xl h-full flex flex-col border transition-all duration-300 ${pkg.isPopular ? 'border-2 border-quantum-purple' : 'border-quantum-blue/20'}`}>
      {pkg.isPopular && <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-quantum-purple text-white px-4 py-1 font-bold">Meest Gekozen</Badge>}
      <h3 className="text-2xl font-display font-bold mb-2">{pkg.name}</h3>
      <p className="text-gray-400 mb-6 h-10">{pkg.description}</p>
      <div className="mb-6">
        <span className="text-5xl font-bold">{pkg.price}</span>
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
      <Button className={`w-full mt-auto ${pkg.isPopular ? 'bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform' : 'bg-quantum-blue/20 hover:bg-quantum-blue text-white border border-quantum-blue'}`}>{pkg.cta}</Button>
    </div>
  );
};

export default function ITSupportPageClient() {
  return (
    <div className="min-h-screen bg-cyber-darker text-white">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-darker">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF006E" />
            <NeuralNetwork />
          </Canvas>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Badge className="mb-4 bg-quantum-blue/20 text-quantum-blue border-quantum-blue">Uw Digitale Fundament</Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">Complete IT-Ontzorging</span><br /><span className="text-white">Voor het MKB</span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
              Van werkplekbeheer tot cyberbeveiliging. Ontdek onze uitgebreide IT-diensten die zijn ontworpen om uw bedrijf veilig, productief en toekomstbestendig te maken.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <ScrollTrigger>
              <InfoCard title="De IT Frustraties" items={problemItems} variant="problem" />
            </ScrollTrigger>
            <ScrollTrigger>
              <InfoCard title="De Staart Oplossing" items={solutionItems} variant="solution" />
            </ScrollTrigger>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4">
            <ScrollTrigger>
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">Onze Werkwijze</span></h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">Een helder en transparant proces voor maximaal resultaat, van begin tot eind.</p>
                </div>
            </ScrollTrigger>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {approachSteps.map((step, index) => (
                    <ScrollTrigger key={index} delay={index * 0.1}>
                        <div className="text-center">
                            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-quantum-blue/10 border border-quantum-blue/30 mx-auto mb-4">
                                <step.icon className="h-8 w-8 text-quantum-blue" />
                            </div>
                            <h3 className="text-xl font-display font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400 text-sm">{step.description}</p>
                        </div>
                    </ScrollTrigger>
                ))}
            </div>
        </div>
      </section>

      {/* Our Promise Section */}
        <section className="py-20 relative">
            <div className="container mx-auto px-4">
                <ScrollTrigger>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">De Staart Belofte</span></h2>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto">Vier garanties waarop u kunt bouwen. Dit is de standaard die u van ons mag verwachten.</p>
                    </div>
                </ScrollTrigger>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {promiseItems.map((promise, index) => (
                        <ScrollTrigger key={index} delay={index * 0.1}>
                            <div className="glass-effect p-6 rounded-2xl h-full border border-quantum-purple/20 text-center">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-quantum-purple/10 mx-auto mb-4">
                                    <promise.icon className="h-6 w-6 text-quantum-purple" />
                                </div>
                                <h3 className="text-xl font-display font-bold mb-2">{promise.title}</h3>
                                <p className="text-gray-400 text-sm">{promise.description}</p>
                            </div>
                        </ScrollTrigger>
                    ))}
                </div>
            </div>
        </section>

      {/* Pricing Section */}
      <section className="py-20 bg-cyber-dark">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">Tarieven op Maat</span></h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">Duidelijke en eerlijke prijzen, ontworpen om met uw bedrijf mee te groeien. Kies het pakket dat bij u past.</p>
            </div>
          </ScrollTrigger>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
            {Object.keys(pricingPackages).map((key, index) => (
              <ScrollTrigger key={key} delay={index * 0.1}>
                                <PricingCard pkg={pricingPackages[key as keyof typeof pricingPackages]} />
              </ScrollTrigger>
            ))}
          </div>
          <ScrollTrigger>
            <div className="text-center mt-12 max-w-4xl mx-auto">
                <h4 className="text-2xl font-display font-bold mb-6">Uw Vrijheid & Zekerheid</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm text-gray-300">
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-quantum-green"/><span>Dagelijks opzegbaar</span></div>
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-quantum-green"/><span>Gratis onboarding</span></div>
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-quantum-green"/><span>14 dagen gratis proberen</span></div>
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-quantum-green"/><span>Flexibel op- en afschalen</span></div>
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-quantum-green"/><span>Geen verborgen kosten</span></div>
                    <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-quantum-green"/><span>Vaste prijs, geen nacalculatie</span></div>
                </div>
                <p className="text-xs text-gray-500 mt-6">* Alle prijzen zijn excl. 21% btw. Licenties voor Microsoft 365 of Google Workspace worden apart gefactureerd, of kunt u zelf beheren.</p>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4"><span className="text-gradient">Ons Dienstenarsenaal</span></h2>
              <p className="text-xl text-gray-400">Een compleet overzicht van onze expertise. Alles wat u nodig heeft, onder één dak.</p>
            </div>
          </ScrollTrigger>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8 max-w-7xl mx-auto">
            {polishedServices.map((service, index) => (
              <ScrollTrigger key={index} delay={index * 0.05}>
                <motion.div 
                  className="glass-effect p-6 rounded-2xl h-full border border-quantum-blue/10 transition-all flex flex-col"
                  whileHover={{
                    scale: 1.03,
                    zIndex: 10,
                    boxShadow: '0px 0px 30px rgba(0, 217, 255, 0.2)',
                    borderColor: 'rgba(0, 217, 255, 0.5)'
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <service.icon className="h-8 w-8 text-quantum-blue flex-shrink-0" />
                    <h3 className="text-xl font-display font-bold">{service.name}</h3>
                  </div>
                  <p className="text-gray-400 text-sm flex-grow">{service.description}</p>
                </motion.div>
              </ScrollTrigger>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-12 rounded-3xl border border-quantum-purple/20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6"><span className="text-gradient">Interesse in een samenwerking?</span></h2>
              <p className="text-xl text-gray-400 mb-8">Laten we in een vrijblijvend gesprek ontdekken hoe wij uw IT kunnen transformeren. Claim uw gratis en vrijblijvende IT-scan en ontdek direct uw kansen.</p>
              <Button size="lg" className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform">
                Gratis IT-Scan Aanvragen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}