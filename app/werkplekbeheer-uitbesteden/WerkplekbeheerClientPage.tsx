'use client'

import { Canvas } from '@react-three/fiber'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight, Shield, Zap, BarChart2, XCircle, ChevronDown, User, Check, Cloud, Server, FileText, Database, HardDrive, Smartphone, UserCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DigitalBlueprint from '@/components/3d/DigitalBlueprint'
import CTAPortal from '@/components/sections/CTAPortal'
import { Badge } from '@/components/ui/badge'
import ScrollTrigger from '@/components/animations/ScrollTrigger'

// ... (fadeIn, FAQItem definitions)

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-b border-cyber-light"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <h3 className="font-semibold text-lg text-gray-200">{q}</h3>
        <ChevronDown
          className={`w-6 h-6 text-quantum-purple transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
            <p className="pb-6 text-gray-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

const WerkplekbeheerClientPage = () => {
  const faqs = [
    {
      q: 'Hoe snel kan een nieuwe medewerker aan de slag?',
      a: 'Dankzij onze gestandaardiseerde processen kan een nieuwe medewerker binnen 24 uur na aanmelding een volledig geconfigureerde en beveiligde werkplek ontvangen, klaar voor gebruik.',
    },
    {
      q: 'Beheren jullie ook softwarelicenties?',
      a: 'Ja, asset management is een kernonderdeel van onze dienst. Wij houden bij welke software op welk apparaat is geïnstalleerd, beheren de licenties en zorgen dat u nooit te veel of te weinig betaalt.',
    },
    {
      q: 'Wat gebeurt er als een laptop gestolen wordt of kapot gaat?',
      a: 'Geen paniek. Alle werkplekken zijn centraal beveiligd. We kunnen een gestolen apparaat op afstand wissen om een datalek te voorkomen. Bij een defect zorgen we direct voor een vervangend, vooraf geconfigureerd apparaat om downtime te minimaliseren.',
    },
    {
      q: 'Kunnen medewerkers zelf software installeren?',
      a: 'Dat is afhankelijk van het beleid dat we samen opstellen. We kunnen dit flexibel inrichten: van een volledig gesloten omgeving voor maximale veiligheid tot een meer open model met een goedgekeurde softwarecatalogus waaruit medewerkers zelf kunnen kiezen.',
    },
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Werkplekbeheer Uitbesteden",
        "provider": {
          "@type": "Organization",
          "name": "Start Beheer Solutions",
          "url": "https://www.startbeheer.nl",
          "logo": "https://www.startbeheer.nl/logo.png" 
        },
        "areaServed": {
          "@type": "Country",
          "name": "NL"
        },
        "description": "Proactief werkplekbeheer voor het MKB. Wij garanderen productieve medewerkers met veilige, gestandaardiseerde en optimaal presterende werkplekken.",
        "name": "Proactief Werkplekbeheer voor MKB",
        "serviceOutput": {
          "@type": "Thing",
          "name": "Verhoogde productiviteit en medewerkerstevredenheid",
          "description": "Een zorgeloze en efficiënte werkomgeving voor uw team, beheerd voor een vast bedrag per maand."
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div className="bg-cyber-dark text-gray-200">
        <section className="relative h-[80vh] min-h-[600px] flex items-center">
          <div className="absolute inset-0 z-0 opacity-40">
            <Canvas>
              <DigitalBlueprint />
            </Canvas>
          </div>
          <div className="container mx-auto px-4 z-10">
            <motion.div {...fadeIn} className="max-w-3xl">
              <Badge className="mb-4 bg-quantum-blue/20 text-quantum-blue border-quantum-blue">Proactief Werkplekbeheer</Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white leading-tight">
                Productieve Medewerkers,
                <span className="block text-gradient">Zorgeloze IT.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-400">
                Van installatie tot support en beveiliging. Wij zorgen dat de werkplekken van uw team altijd optimaal, veilig en up-to-date zijn, zodat zij kunnen excelleren.
              </p>
              <Button size="lg" className="mt-8 bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform">
                Vraag Werkplek-Scan Aan <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <ScrollTrigger>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Herkent u de Werkplek-Frustratie?</h2>
                <p className="text-lg text-gray-400 mt-4">Elk uur dat een medewerker verliest aan een IT-probleem is een uur verlies in productiviteit en een deuk in het moreel.</p>
              </div>
              <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card className="bg-cyber-darker border-red-500/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-400">
                      <XCircle className="mr-2" />
                      De Symptomen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-gray-300">
                    <p>❌ Nieuwe medewerkers wachten dagen op een ingerichte laptop.</p>
                    <p>❌ Software-updates worden overgeslagen, wat veiligheidsrisico's creëert.</p>
                    <p>❌ Problemen met apparaten leiden tot uren productiviteitsverlies.</p>
                    <p>❌ Geen overzicht van hardware, softwarelicenties en beveiligingsstatus.</p>
                  </CardContent>
                </Card>
                <Card className="bg-cyber-darker border-quantum-green/30">
                  <CardHeader>
                    <CardTitle className="flex items-center text-quantum-green">
                      <CheckCircle className="mr-2" />
                      De Gevolgen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-gray-300">
                    <p>📉 Trage start en frustratie bij nieuw talent.</p>
                    <p>📉 Verhoogd risico op datalekken en malware.</p>
                    <p>📉 Direct productiviteitsverlies en operationele vertraging.</p>
                    <p>📉 Onverwachte kosten en onnodige complexiteit.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="py-16 md:py-24 bg-cyber-darker">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">De Weg naar de Zorgeloze Werkplek</h2>
                <p className="text-lg text-gray-400 mt-4">Wij nemen het volledige beheer over, zodat uw team kan doen waar ze goed in zijn.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="glass-effect p-6 rounded-lg border border-cyber-light">
                      <Shield className="h-8 w-8 text-quantum-blue mb-4" />
                      <h3 className="text-xl font-bold mb-2">Gestandaardiseerde Veiligheid</h3>
                      <p className="text-gray-400">Elke werkplek wordt volgens de hoogste veiligheidsnormen geconfigureerd, beheerd en gemonitord.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg border border-cyber-light">
                      <Zap className="h-8 w-8 text-quantum-blue mb-4" />
                      <h3 className="text-xl font-bold mb-2">Maximale Productiviteit</h3>
                      <p className="text-gray-400">Door proactief onderhoud en snelle support zorgen we dat uw team altijd en overal ongestoord kan werken.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg border border-cyber-light">
                      <BarChart2 className="h-8 w-8 text-quantum-blue mb-4" />
                      <h3 className="text-xl font-bold mb-2">Kostenbeheersing</h3>
                      <p className="text-gray-400">Een vast, voorspelbaar bedrag per werkplek per maand. Geen onverwachte kosten voor support of onderhoud.</p>
                  </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* --- STRATEGIC REFRAME SECTION --- */}
        <ScrollTrigger>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center glass-effect p-8 md:p-12 rounded-lg border border-quantum-purple/30">
                <h2 className="text-3xl md:text-4xl font-bold font-display text-gradient mb-6">
                  Vergeet 'Werkplekbeheer'.
                  <span className="block mt-2">Wij Bouwen een Ecosysteem voor Productiviteit.</span>
                </h2>
                <div className="text-lg text-gray-300 space-y-4">
                  <p>De meeste IT-partners zorgen dat een laptop 'werkt'. Dat is de basis. Dat is de standaard.</p>
                  <p className="font-semibold text-white">Wij zien het anders. Een werkplek is geen doel op zich, maar een <span className="text-quantum-green">instrument voor succes</span>.</p>
                  <p>Een perfect beheerde werkplek is de basis voor tevreden, productieve en veilige medewerkers die het beste uit zichzelf kunnen halen.</p>
                  <p className="text-xl font-bold text-white mt-6 p-4 bg-cyber-dark rounded-md">
                    U huurt ons niet in om laptops te installeren. U werkt met ons samen om een werkomgeving te creëren waarin uw team kan excelleren.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* --- WAT IS PROACTIEF BEHEER --- */}
        <ScrollTrigger>
          <section className="py-16 md:py-24 bg-cyber-darker">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div>
                    <h2 className="text-3xl font-bold text-gradient mb-4">Wat is Proactief Werkplekbeheer?</h2>
                    <p className="text-gray-400 mb-4">Traditioneel werkplekbeheer is reactief: een laptop is traag, een medewerker belt, en er wordt een oplossing gezocht. Dit leidt tot productiviteitsverlies en frustratie.</p>
                    <p className="text-gray-300 font-semibold">Wij draaien het om. Proactief beheer betekent dat we problemen voorkomen. Door alle werkplekken centraal te monitoren, signaleren we issues, voeren we updates buiten werktijd door en zorgen we dat alles optimaal presteert, altijd.</p>
                  </div>
                </div>
                <div className="glass-effect p-8 rounded-lg border border-cyber-light">
                  <h3 className="text-xl font-bold mb-4">Reactief vs. Proactief</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Reactief:</strong> Wachten tot een medewerker een probleem meldt.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Proactief:</strong> Continu monitoren, updaten en optimaliseren om problemen te voorkomen.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="py-16 md:py-24 bg-cyber-darker">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Onze Werkplekbeheer Diensten: Een Compleet Overzicht</h2>
                <p className="text-lg text-gray-400 mt-4">Alles wat u nodig heeft voor een vloot van veilige, snelle en betrouwbare werkplekken.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <HardDrive className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Hardware & Software</h3>
                  <p className="text-gray-400">Installatie, configuratie en onderhoud van laptops, desktops en alle benodigde software.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Shield className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Endpoint Beveiliging</h3>
                  <p className="text-gray-400">Centraal beheerde antivirus, patchmanagement en encryptie om data op elk apparaat te beschermen.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Smartphone className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Mobile Device Management</h3>
                  <p className="text-gray-400">Beheer en beveiliging van smartphones en tablets die toegang hebben tot bedrijfsdata.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <UserCheck className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Gebruikersondersteuning</h3>
                  <p className="text-gray-400">Directe en persoonlijke hulp voor uw medewerkers bij alle hardware- of softwarevragen.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Zap className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">On- & Offboarding</h3>
                  <p className="text-gray-400">Een gestroomlijnd proces voor de uitrol van nieuwe werkplekken en het veilig innemen van oude.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <BarChart2 className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Asset Management</h3>
                  <p className="text-gray-400">Gedetailleerd overzicht van al uw hardware, softwarelicenties en de bijbehorende levenscyclus.</p>
                </Card>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">De Investering: Kosten vs. Rendement</h2>
                <p className="text-lg text-gray-400 mt-4">Verander uw werkplekken van een onvoorspelbare kostenpost naar een slimme investering in productiviteit.</p>
              </div>
              <div className="max-w-4xl mx-auto glass-effect p-8 md:p-12 rounded-lg border border-cyber-light">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-4">De Verborgen Kosten van Zelfbeheer</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li><span className="font-bold">Productiviteitsverlies:</span> Uren verloren aan IT-problemen per medewerker.</li>
                      <li><span className="font-bold">Inefficiënte onboarding:</span> Nieuwe medewerkers die niet direct kunnen starten.</li>
                      <li><span className="font-bold">Veiligheidsrisico's:</span> Door gemiste updates en incorrecte configuraties.</li>
                      <li><span className="font-bold">Verborgen IT-taken:</span> Medewerkers die elkaar proberen te helpen.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-quantum-green mb-4">Het Rendement van Proactief Beheer</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li><span className="font-bold">Vaste Maandprijs:</span> Een voorspelbaar, vast bedrag per werkplek.</li>
                      <li><span className="font-bold">Maximale Productiviteit:</span> Uw team kan altijd ongestoord doorwerken.</li>
                      <li><span className="font-bold">Verhoogde Veiligheid:</span> Centraal beheerde en gemonitorde beveiliging.</li>
                      <li><span className="font-bold">Tevreden Medewerkers:</span> Frustratievrije IT die gewoon werkt.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-8 p-4 bg-quantum-blue/10 rounded-md"><strong>Conclusie:</strong> Proactief werkplekbeheer is een investering die zichzelf terugverdient door het maximaliseren van de productiviteit en het minimaliseren van risico's.</p>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="py-16 md:py-24 bg-cyber-darker">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Onze Werkwijze</h2>
                <p className="text-lg text-gray-400 mt-4">Een helder en transparant proces voor een perfecte werkplek-ervaring.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">1</div>
                  <h3 className="text-lg font-semibold">Standaardisatie</h3>
                  <p className="mt-1 text-gray-400 text-sm">We bepalen de ideale hardware- en softwareconfiguratie voor uw team.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">2</div>
                  <h3 className="text-lg font-semibold">Uitrol & Onboarding</h3>
                  <p className="mt-1 text-gray-400 text-sm">Nieuwe medewerkers ontvangen een volledig gebruiksklare werkplek.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">3</div>
                  <h3 className="text-lg font-semibold">Proactief Beheer</h3>
                  <p className="mt-1 text-gray-400 text-sm">We monitoren, updaten en beveiligen alle werkplekken op afstand.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">4</div>
                  <h3 className="text-lg font-semibold">Lifecycle Management</h3>
                  <p className="mt-1 text-gray-400 text-sm">We beheren de volledige levenscyclus, inclusief vervanging.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* --- Ideale Klantprofiel --- */}
        <ScrollTrigger>
          <section className="py-16 md:py-24 bg-cyber-darker">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Gebouwd voor Groeiende Teams</h2>
                <p className="text-lg text-gray-400 mt-4">Onze aanpak is ideaal voor bedrijven waar elke medewerker telt en productiviteit essentieel is.</p>
              </div>
              <div className="max-w-4xl mx-auto glass-effect p-8 md:p-12 rounded-lg border border-cyber-light">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Herkent u zich hierin?</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U neemt regelmatig nieuwe mensen aan en wilt een vlekkeloze start.</span></li>
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U wilt dat uw team altijd en overal veilig kan werken.</span></li>
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U wilt geen tijd verspillen aan het oplossen van computerproblemen.</span></li>
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U zoekt een voorspelbare, schaalbare oplossing voor uw werkplekken.</span></li>
                    </ul>
                  </div>
                  <div className="text-center p-6 bg-quantum-blue/10 rounded-lg">
                    <h4 className="text-xl font-bold text-white">Dan zijn wij de juiste partner.</h4>
                    <p className="mt-2 text-gray-400">Wij creëren een gestandaardiseerde, veilige en productieve werkomgeving, zodat uw team kan floreren.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* --- De Start Beheer Belofte (Garanties) --- */}
        <ScrollTrigger>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">De Start Beheer Belofte</h2>
                <p className="text-lg text-gray-400 mt-4">Vier garanties waarop u kunt bouwen. Dit is de standaard die u van ons mag verwachten, geen loze beloftes.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                <div className="glass-effect p-6 rounded-2xl h-full border border-quantum-purple/20 text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-quantum-purple/10 mx-auto mb-4">
                    <Zap className="h-6 w-6 text-quantum-purple" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">Snelle Respons Garantie</h3>
                  <p className="text-gray-400 text-sm">Binnen 15 minuten een persoonlijke reactie op kritieke meldingen. 24/7.</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl h-full border border-quantum-purple/20 text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-quantum-purple/10 mx-auto mb-4">
                    <FileText className="h-6 w-6 text-quantum-purple" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">Transparantie Garantie</h3>
                  <p className="text-gray-400 text-sm">Maandelijks opzegbaar, geen verborgen kosten. U betaalt voor resultaat, niet voor onze tijd.</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl h-full border border-quantum-purple/20 text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-quantum-purple/10 mx-auto mb-4">
                    <Shield className="h-6 w-6 text-quantum-purple" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">Proactiviteitsgarantie</h3>
                  <p className="text-gray-400 text-sm">Wij lossen 95% van de problemen op voordat u ze opmerkt, dankzij onze 24/7 monitoring.</p>
                </div>
                <div className="glass-effect p-6 rounded-2xl h-full border border-quantum-purple/20 text-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-quantum-purple/10 mx-auto mb-4">
                    <BarChart2 className="h-6 w-6 text-quantum-purple" />
                  </div>
                  <h3 className="text-xl font-display font-bold mb-2">Groei Garantie</h3>
                  <p className="text-gray-400 text-sm">Onze IT-strategie en -oplossingen zijn ontworpen om flexibel met uw bedrijfsambities mee te groeien.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="py-16 md:py-24 bg-cyber-darker">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Veelgestelde Vragen</h2>
                <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto">Duidelijke antwoorden op uw vragen.</p>
              </div>
              <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <FAQItem key={index} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <CTAPortal
          title="Klaar voor een Productieve en Veilige Werkomgeving?"
          description="Vraag uw gratis, vrijblijvende Werkplek-Scan aan. We analyseren uw huidige setup, identificeren risico's en onthullen concrete kansen voor verbeterde productiviteit, veiligheid en kostenbeheersing."
          buttonText="Claim Mijn Gratis Werkplek-Scan"
          buttonLink="/contact?service=werkplek-scan"
        />
      </div>
    </>
  )
}

export default WerkplekbeheerClientPage