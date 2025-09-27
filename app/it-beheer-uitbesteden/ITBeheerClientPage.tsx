'use client'

import { Canvas } from '@react-three/fiber'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight, Shield, Zap, BarChart2, XCircle, ChevronDown, User, Check, Cloud, Server, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import DigitalCommandCore from '@/components/3d/DigitalCommandCore'
import CTAPortal from '@/components/sections/CTAPortal'
import { Badge } from '@/components/ui/badge'
import ScrollTrigger from '@/components/animations/ScrollTrigger'

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

const ITBeheerClientPage = () => {
  const faqs = [
    {
      q: 'Wat zijn de gemiddelde kosten van IT beheer uitbesteden?',
      a: 'De kosten zijn afhankelijk van de omvang van uw bedrijf en de benodigde diensten. We werken met vaste, voorspelbare maandbedragen die vaak 30% lager liggen dan een interne IT-medewerker. Plan een gratis IT-scan voor een exacte prijsopgave op maat.',
    },
    {
      q: 'Werken jullie met lange, vaste contracten?',
      a: 'Nee, wij geloven in flexibiliteit. We bieden flexibele, maandelijks opzegbare contracten. Onze klanten blijven bij ons voor de kwaliteit van onze service, niet omdat ze vastzitten aan een contract.',
    },
    {
      q: 'Hoe snel reageren jullie op een storing of urgent probleem?',
      a: 'Voor kritieke storingen garanderen we een reactietijd van minder dan 15 minuten, 24/7. Onze proactieve monitoring zorgt er echter voor dat we de meeste problemen al hebben opgelost voordat u ze opmerkt.',
    },
    {
      q: 'Wat als we al een (part-time) IT\'er in dienst hebben?',
      a: 'Perfect. Wij zien onszelf als een strategische partner die uw huidige IT\'er kan ondersteunen en versterken. Wij nemen de tijdrovende, dagelijkse beheertaken over, zodat uw medewerker zich kan focussen op interne, bedrijfsspecifieke projecten.',
    },
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "IT Beheer Uitbesteden",
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
        "description": "Proactief IT beheer voor het Nederlandse MKB. Wij transformeren uw IT van een kostenpost naar een strategische groeimotor, voorkomen downtime en houden uw team productief.",
        "name": "Proactief IT Beheer voor MKB",
        "serviceOutput": {
          "@type": "Thing",
          "name": "Verhoogde productiviteit en gemoedsrust",
          "description": "Een stabiele, veilige en efficiënte IT-omgeving die bedrijfsgroei ondersteunt."
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
              <DigitalCommandCore />
            </Canvas>
          </div>
          <div className="container mx-auto px-4 z-10">
            <motion.div {...fadeIn} className="max-w-3xl">
              <Badge className="mb-4 bg-quantum-blue/20 text-quantum-blue border-quantum-blue">IT Beheer voor het MKB</Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white leading-tight">
                Focus op uw Bedrijf.
                <span className="block text-gradient">Wij Regelen uw IT Beheer.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-400">
                Wij transformeren uw IT van een kostenpost naar een strategische groeimotor, zodat uw MKB kan focussen op wat echt telt: groei.
              </p>
              <Button size="lg" className="mt-8 bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform">
                Ontdek Mijn IT-Kansen <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <ScrollTrigger>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Herkent u de Dagelijkse IT-Frustratie?</h2>
                <p className="text-lg text-gray-400 mt-4">Elk uur dat uw team verliest aan IT-problemen is pure kapitaalvernietiging. Een datalek kan uw reputatie onherstelbaar schaden.</p>
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
                    <p>❌ Trage systemen die de workflow onderbreken.</p>
                    <p>❌ Onverwachte storingen op cruciale momenten.</p>
                    <p>❌ Constante zorgen over de veiligheid van data.</p>
                    <p>❌ Medewerkers die niet productief zijn door techniek.</p>
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
                    <p>📉 Direct productiviteitsverlies en frustratie.</p>
                    <p>📉 Risico op onherstelbaar dataverlies.</p>
                    <p>📉 Verminderd vertrouwen van uw klanten.</p>
                    <p>📉 Geremde groei en gemiste kansen.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">De Weg naar Zorgeloze IT</h2>
                <p className="text-lg text-gray-400 mt-4">Wij nemen de frustratie weg en vervangen deze door controle, veiligheid en productiviteit.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="glass-effect p-6 rounded-lg border border-cyber-light">
                      <Shield className="h-8 w-8 text-quantum-blue mb-4" />
                      <h3 className="text-xl font-bold mb-2">Maximale Veiligheid</h3>
                      <p className="text-gray-400">Onze 24/7 monitoring en AI-gedreven cybersecurity beschermen uw data als een digitale vesting, zodat u met een gerust hart kunt ondernemen.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg border border-cyber-light">
                      <Zap className="h-8 w-8 text-quantum-blue mb-4" />
                      <h3 className="text-xl font-bold mb-2">Ongehinderde Productiviteit</h3>
                      <p className="text-gray-400">Wij lossen 95% van de problemen op voordat u ze opmerkt. Uw team kan ongestoord doorwerken, zonder technische onderbrekingen.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg border border-cyber-light">
                      <BarChart2 className="h-8 w-8 text-quantum-blue mb-4" />
                      <h3 className="text-xl font-bold mb-2">Strategische Groei</h3>
                      <p className="text-gray-400">Wij denken met u mee. Uw IT wordt een proactief instrument dat kosten verlaagt, efficiëntie verhoogt en uw bedrijfsdoelen ondersteunt.</p>
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
                  Vergeet 'IT Beheer'.
                  <span className="block mt-2">Wij Bouwen uw Digitale Fundament voor Groei.</span>
                </h2>
                <div className="text-lg text-gray-300 space-y-4">
                  <p>De meeste IT-partners focussen op het draaiende houden van uw systemen. Dat is de basis. Dat is de standaard.</p>
                  <p className="font-semibold text-white">Wij zien het anders. Voor ons is een stabiele IT-omgeving niet het einddoel, maar het <span className="text-quantum-green">startpunt</span>.</p>
                  <p>Een perfect beheerde infrastructuur is de lanceerbasis voor échte innovatie: voor slimmere processen, datagedreven beslissingen en een superieure klantervaring.</p>
                  <p className="text-xl font-bold text-white mt-6 p-4 bg-cyber-dark rounded-md">
                    U huurt ons niet in om brandjes te blussen. U werkt met ons samen om uw concurrentie te overtreffen. Wij beheren niet alleen uw techniek; wij maken het uw strategische voorsprong.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* --- NIEUW 1.1: WAT IS PROACTIEF BEHEER --- */}
        <ScrollTrigger>
          <section className="py-16 md:py-24 bg-cyber-darker">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div>
                    <h2 className="text-3xl font-bold text-gradient mb-4">Wat is Proactief IT Beheer?</h2>

                    <p className="text-gray-400 mb-4">Traditioneel IT-support is reactief: u heeft een probleem, u belt, en er wordt een oplossing gezocht. Dit 'brandjes blussen' model leidt onvermijdelijk tot downtime en frustratie.</p>
                    <p className="text-gray-300 font-semibold">Wij draaien het om. Proactief beheer betekent dat we problemen voorkomen. Door uw systemen 24/7 te monitoren, signaleren we potentiële issues en lossen we ze op voordat ze uw bedrijfsvoering kunnen verstoren. Het resultaat: een stabiele, betrouwbare en veilige IT-omgeving waarop u kunt bouwen.</p>
                  </div>
                </div>
                <div className="glass-effect p-8 rounded-lg border border-cyber-light">
                  <h3 className="text-xl font-bold mb-4">Reactief vs. Proactief</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Reactief:</strong> Wachten tot systemen uitvallen, dan repareren.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Proactief:</strong> Continu monitoren, updaten en optimaliseren om uitval te voorkomen.</span>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Onze IT Beheer Diensten: Een Compleet Overzicht</h2>
                <p className="text-lg text-gray-400 mt-4">Alles wat u nodig heeft voor een zorgeloze IT-omgeving, onder één dak.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Zap className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">24/7 Monitoring</h3>
                  <p className="text-gray-400">Continue bewaking van uw systemen om problemen direct te detecteren.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Shield className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Geavanceerde Cybersecurity</h3>
                  <p className="text-gray-400">Bescherming tegen virussen, phishing, ransomware en andere dreigingen.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Cloud className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cloud Back-ups</h3>
                  <p className="text-gray-400">Automatische, versleutelde back-ups zodat uw data altijd veilig is.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <User className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Helpdesk & Support</h3>
                  <p className="text-gray-400">Directe en persoonlijke ondersteuning voor al uw medewerkers.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Server className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Netwerk- & Serverbeheer</h3>
                  <p className="text-gray-400">Wij zorgen voor een stabiel, snel en betrouwbaar bedrijfsnetwerk.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <BarChart2 className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Strategisch IT Advies</h3>
                  <p className="text-gray-400">Wij helpen u de juiste technologische keuzes te maken voor de toekomst.</p>
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
                <p className="text-lg text-gray-400 mt-4">Verander uw IT van een onvoorspelbare kostenpost naar een slimme investering in groei.</p>
              </div>
              <div className="max-w-4xl mx-auto glass-effect p-8 md:p-12 rounded-lg border border-cyber-light">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-4">De Verborgen Kosten van 'Goedkoop'</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li><span className="font-bold">Downtime:</span> Elke minuut stilstand kost geld.</li>
                      <li><span className="font-bold">Productiviteitsverlies:</span> Trage systemen en frustratie.</li>
                      <li><span className="font-bold">Reputatieschade:</span> Na een datalek of storing.</li>
                      <li><span className="font-bold">Onverwachte rekeningen:</span> Voor spoedreparaties.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-quantum-green mb-4">Het Rendement van Proactief Beheer</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li><span className="font-bold">Vaste Maandprijs:</span> Voorspelbare, budgetvriendelijke kosten.</li>
                      <li><span className="font-bold">Maximale Uptime:</span> Uw team kan altijd doorwerken.</li>
                      <li><span className="font-bold">Verhoogde Efficiëntie:</span> Snelle, geoptimaliseerde systemen.</li>
                      <li><span className="font-bold">Gemoedsrust:</span> Wetende dat uw IT in deskundige handen is.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-8 p-4 bg-quantum-blue/10 rounded-md"><strong>Conclusie:</strong> Proactief IT beheer is een investering die zichzelf terugverdient door het voorkomen van kostbare problemen en het maximaliseren van de productiviteit.</p>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="py-16 md:py-24 bg-cyber-darker">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Onze Werkwijze</h2>
                <p className="text-lg text-gray-400 mt-4">Een helder en transparant proces voor maximaal resultaat.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start max-w-6xl mx-auto">
                {/* Stap 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">1</div>
                  <h3 className="text-lg font-semibold">Gratis IT-Scan</h3>
                  <p className="mt-1 text-gray-400 text-sm">We brengen uw huidige situatie en risico's in kaart.</p>
                </div>
                
                {/* Stap 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">2</div>
                  <h3 className="text-lg font-semibold">Strategisch Plan</h3>
                  <p className="mt-1 text-gray-400 text-sm">U ontvangt een helder plan van aanpak op maat.</p>
                </div>

                {/* Stap 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">3</div>
                  <h3 className="text-lg font-semibold">Naadloze Implementatie</h3>
                  <p className="mt-1 text-gray-400 text-sm">Wij voeren de verbeteringen door zonder uw werk te storen.</p>
                </div>

                {/* Stap 4 */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">4</div>
                  <h3 className="text-lg font-semibold">Continue Optimalisatie</h3>
                  <p className="mt-1 text-gray-400 text-sm">We blijven proactief beheren, monitoren en adviseren.</p>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* --- NIEUW: Ideale Klantprofiel (Archetype Case Study) --- */}
        <ScrollTrigger>
          <section className="py-16 md:py-24 bg-cyber-darker">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Gebouwd voor de Ambitieuze MKB'er</h2>
                <p className="text-lg text-gray-400 mt-4">Wij zijn geen generalisten. We zijn specialisten voor bedrijven met een duidelijke visie op groei.</p>
              </div>
              <div className="max-w-4xl mx-auto glass-effect p-8 md:p-12 rounded-lg border border-cyber-light">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Herkent u zich hierin?</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U leidt een bedrijf met 5-50 medewerkers.</span></li>
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U ziet technologie als een kans, niet als een last.</span></li>
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U bent te groot voor ad-hoc IT, maar te klein voor een eigen IT-afdeling.</span></li>
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U bent gefrustreerd door techniek die uw groei remt in plaats van versnelt.</span></li>
                    </ul>
                  </div>
                  <div className="text-center p-6 bg-quantum-blue/10 rounded-lg">
                    <h4 className="text-xl font-bold text-white">Dan zijn wij de juiste partner.</h4>
                    <p className="mt-2 text-gray-400">Onze diensten zijn specifiek ontworpen om bedrijven zoals het uwe de technologische ruggengraat te geven die nodig is om de concurrentie te overtreffen.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        {/* --- NIEUW: De Start Beheer Belofte (Garanties) --- */}
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
          title="Klaar om uw IT om te zetten in een Groeiversneller?"
          description="Vraag uw gratis, vrijblijvende Groei-Scan aan. Binnen 45 minuten brengen we uw huidige IT-situatie in kaart, identificeren we risico's en onthullen we concrete kansen om uw groei te versnellen. Geen verplichtingen, puur waarde."
          buttonText="Claim Mijn Gratis Groei-Scan"
          buttonLink="/contact?service=it-scan"
        />
      </div>
    </>
  )
}

export default ITBeheerClientPage