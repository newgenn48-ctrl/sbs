'use client'

import { Canvas } from '@react-three/fiber'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, ArrowRight, Shield, Zap, BarChart2, XCircle, ChevronDown, User, Check, Cloud, Server, FileText, Database } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ItInfrastructure from '@/components/3d/ItInfrastructure'
import CTAPortal from '@/components/sections/CTAPortal'
import { Badge } from '@/components/ui/badge'
import ScrollTrigger from '@/components/animations/ScrollTrigger'

// ... (imports)

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

const SysteembeheerClientPage = () => {
  const faqs = [
    {
      q: 'Wat is het verschil tussen Systeembeheer en IT Beheer?',
      a: 'IT Beheer is de overkoepelende term voor de gehele IT-omgeving, inclusief werkplekken en strategie. Systeembeheer focust specifiek op de ruggengraat: uw servers, netwerk en cloud-infrastructuur. Het is het technische fundament waarop de rest van uw IT draait.',
    },
    {
      q: 'Ondersteunen jullie ook cloud-omgevingen zoals Azure of AWS?',
      a: 'Jazeker. Modern systeembeheer is onlosmakelijk verbonden met de cloud. Wij zijn gespecialiseerd in het beheren, beveiligen en optimaliseren van cloud- en hybride infrastructuren op platformen als Microsoft Azure en Amazon Web Services.',
    },
    {
      q: 'Mijn servers zijn verouderd. Helpen jullie ook met migratie?',
      a: 'Absoluut. Een belangrijk onderdeel van ons strategisch systeembeheer is het plannen en uitvoeren van migratietrajecten. Of het nu gaat om een upgrade van fysieke servers of een volledige migratie naar de cloud, wij begeleiden het hele proces.',
    },
    {
      q: 'Hoe zorgen jullie voor de beveiliging van onze servers en netwerk?',
      a: 'Beveiliging is de kern van ons beheer. We implementeren een gelaagde beveiligingsstrategie met o.a. geavanceerde firewalls, continue monitoring op verdachte activiteit, proactief patchmanagement en strikt toegangsbeheer.',
    },
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "serviceType": "Systeembeheer Uitbesteden",
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
        "description": "Proactief systeembeheer voor het MKB. Wij garanderen de stabiliteit, veiligheid en performance van uw servers, netwerk en cloud-infrastructuur.",
        "name": "Proactief Systeembeheer voor MKB",
        "serviceOutput": {
          "@type": "Thing",
          "name": "Maximale uptime en een schaalbare IT-infrastructuur",
          "description": "Een robuust en betrouwbaar digitaal fundament dat bedrijfsgroei ondersteunt."
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
              <ItInfrastructure />
            </Canvas>
          </div>
          <div className="container mx-auto px-4 z-10">
            <motion.div {...fadeIn} className="max-w-3xl">
              <Badge className="mb-4 bg-quantum-blue/20 text-quantum-blue border-quantum-blue">Proactief Systeembeheer</Badge>
              <h1 className="text-4xl md:text-6xl font-bold font-display text-white leading-tight">
                Proactief Systeembeheer
                <span className="block text-gradient">Voor Maximale Uptime.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-400">
                Uw servers, netwerk en cloud-infrastructuur zijn de motor van uw bedrijf. Wij zorgen dat deze motor altijd draait: veilig, snel en betrouwbaar.
              </p>
              <Button size="lg" className="mt-8 bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform">
                Start met een Infrastructuur-Scan <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </section>

        <ScrollTrigger>
          <section className="py-16 md:py-24">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Is uw Infrastructuur een Zorg of een Kracht?</h2>
                <p className="text-lg text-gray-400 mt-4">Elke minuut server downtime kost geld. Een zwak netwerk frustreert uw team en remt de productiviteit.</p>
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
                    <p>❌ Angst voor server-downtime op cruciale momenten.</p>
                    <p>❌ Trage netwerkprestaties die de workflow hinderen.</p>
                    <p>❌ Geen duidelijk back-up en disaster recovery plan.</p>
                    <p>❌ Onvoldoende beveiliging van de kern van uw netwerk.</p>
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
                    <p>📉 Omzetverlies en operationele stilstand.</p>
                    <p>📉 Risico op catastrofaal dataverlies.</p>
                    <p>📉 Kwetsbaarheid voor cyberaanvallen.</p>
                    <p>📉 Een rem op schaalbaarheid en groei.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">De Weg naar een Toekomstbestendige Infrastructuur</h2>
                <p className="text-lg text-gray-400 mt-4">Wij vervangen onzekerheid door controle, stabiliteit en performance.</p>
              </div>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="glass-effect p-6 rounded-lg border border-cyber-light">
                      <Shield className="h-8 w-8 text-quantum-blue mb-4" />
                      <h3 className="text-xl font-bold mb-2">Maximale Uptime</h3>
                      <p className="text-gray-400">Door 24/7 monitoring en proactief onderhoud garanderen we de continuïteit van uw kritieke bedrijfsprocessen.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg border border-cyber-light">
                      <Zap className="h-8 w-8 text-quantum-blue mb-4" />
                      <h3 className="text-xl font-bold mb-2">Optimale Performance</h3>
                      <p className="text-gray-400">Wij optimaliseren uw servers en netwerk voor maximale snelheid en efficiëntie, zodat uw team altijd productief is.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg border border-cyber-light">
                      <BarChart2 className="h-8 w-8 text-quantum-blue mb-4" />
                      <h3 className="text-xl font-bold mb-2">Strategische Schaalbaarheid</h3>
                      <p className="text-gray-400">Wij bouwen een infrastructuur die niet alleen vandaag werkt, maar ook klaar is voor uw groei van morgen.</p>
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
                  Vergeet 'Systeembeheer'.
                  <span className="block mt-2">Wij Bouwen de Snelweg voor uw Groei.</span>
                </h2>
                <div className="text-lg text-gray-300 space-y-4">
                  <p>De meeste IT-partners zorgen dat uw servers 'aan' staan. Dat is de basis. Dat is de standaard.</p>
                  <p className="font-semibold text-white">Wij zien het anders. Voor ons is een stabiele server niet het einddoel, maar de <span className="text-quantum-green">fundering</span>.</p>
                  <p>Een perfect beheerde infrastructuur is de basis voor alles: voor snelle applicaties, veilige data en de flexibiliteit om te innoveren.</p>
                  <p className="text-xl font-bold text-white mt-6 p-4 bg-cyber-dark rounded-md">
                    U huurt ons niet in om servers te patchen. U werkt met ons samen om een technologisch fundament te leggen waarop uw bedrijf kan excelleren.
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
                    <h2 className="text-3xl font-bold text-gradient mb-4">Wat is Proactief Systeembeheer?</h2>
                    <p className="text-gray-400 mb-4">Traditioneel systeembeheer is reactief: een server crasht, u belt, en er wordt een oplossing gezocht. Dit 'brandjes blussen' model is een garantie voor downtime.</p>
                    <p className="text-gray-300 font-semibold">Wij draaien het om. Proactief beheer betekent dat we problemen voorkomen. Door uw servers, netwerk en cloud-infrastructuur 24/7 te monitoren, signaleren we potentiële issues zoals vollopende schijven of verdachte activiteit en lossen we ze op voordat ze uw bedrijfsvoering kunnen verstoren.</p>
                  </div>
                </div>
                <div className="glass-effect p-8 rounded-lg border border-cyber-light">
                  <h3 className="text-xl font-bold mb-4">Reactief vs. Proactief</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-400 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Reactief:</strong> Wachten tot een server uitvalt, dan repareren.</span>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Onze Systeembeheer Diensten: Een Compleet Overzicht</h2>
                <p className="text-lg text-gray-400 mt-4">Alle componenten voor een robuuste en toekomstbestendige IT-infrastructuur.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Server className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Serverbeheer</h3>
                  <p className="text-gray-400">24/7 monitoring, onderhoud en optimalisatie van uw fysieke en virtuele servers (Windows & Linux).</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Shield className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Netwerkbeheer</h3>
                  <p className="text-gray-400">Beheer van firewalls, switches en WiFi voor een stabiel, snel en veilig bedrijfsnetwerk.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Cloud className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Cloud Infrastructuur</h3>
                  <p className="text-gray-400">Beheer van uw Azure of AWS-omgeving. Kostenoptimalisatie, security en performance.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Database className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Back-up & Disaster Recovery</h3>
                  <p className="text-gray-400">Een waterdicht plan voor data-integriteit en bedrijfscontinuïteit, wat er ook gebeurt.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <Zap className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Performance Monitoring</h3>
                  <p className="text-gray-400">Continue analyse van systeemprestaties om knelpunten proactief te identificeren en op te lossen.</p>
                </Card>
                <Card className="bg-cyber-dark border-cyber-light text-center p-6">
                  <BarChart2 className="h-10 w-10 text-quantum-blue mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Strategisch Advies</h3>
                  <p className="text-gray-400">Advies over hardware-vervanging, cloud-migraties en toekomstbestendige architectuur.</p>
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
                <p className="text-lg text-gray-400 mt-4">Verander uw infrastructuur van een onvoorspelbare kostenpost naar een slimme investering in continuïteit.</p>
              </div>
              <div className="max-w-4xl mx-auto glass-effect p-8 md:p-12 rounded-lg border border-cyber-light">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-4">De Verborgen Kosten van Reactief Beheer</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li><span className="font-bold">Downtime:</span> Elke minuut dat uw server offline is, kost omzet.</li>
                      <li><span className="font-bold">Productiviteitsverlies:</span> Een traag netwerk frustreert uw hele team.</li>
                      <li><span className="font-bold">Dataverlies:</span> De kosten van een mislukte back-up zijn onmeetbaar.</li>
                      <li><span className="font-bold">Spoedreparaties:</span> Hoge, onverwachte rekeningen voor noodhulp.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-quantum-green mb-4">Het Rendement van Proactief Beheer</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li><span className="font-bold">Vaste Maandprijs:</span> Voorspelbare, budgetvriendelijke kosten.</li>
                      <li><span className="font-bold">Maximale Uptime:</span> Gegarandeerde bedrijfscontinuïteit.</li>
                      <li><span className="font-bold">Verhoogde Efficiëntie:</span> Een snelle, geoptimaliseerde infrastructuur.</li>
                      <li><span className="font-bold">Gemoedsrust:</span> Wetende dat uw fundament in deskundige handen is.</li>
                    </ul>
                  </div>
                </div>
                <p className="text-center text-gray-300 mt-8 p-4 bg-quantum-blue/10 rounded-md"><strong>Conclusie:</strong> Proactief systeembeheer is een investering die zichzelf terugverdient door het voorkomen van kostbare calamiteiten en het maximaliseren van de performance.</p>
              </div>
            </div>
          </section>
        </ScrollTrigger>

        <ScrollTrigger>
          <section className="py-16 md:py-24 bg-cyber-darker">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Onze Werkwijze</h2>
                <p className="text-lg text-gray-400 mt-4">Een helder en transparant proces voor een rotsvaste infrastructuur.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start max-w-6xl mx-auto">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">1</div>
                  <h3 className="text-lg font-semibold">Infrastructuur Audit</h3>
                  <p className="mt-1 text-gray-400 text-sm">We brengen uw volledige netwerk, servers en cloud-diensten in kaart.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">2</div>
                  <h3 className="text-lg font-semibold">Architectuur & Design</h3>
                  <p className="mt-1 text-gray-400 text-sm">We ontwerpen een schaalbaar en veilig verbeterplan.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">3</div>
                  <h3 className="text-lg font-semibold">Implementatie & Migratie</h3>
                  <p className="mt-1 text-gray-400 text-sm">We voeren de verbeteringen door met focus op continuïteit.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-2xl border-2 border-quantum-blue/50 mb-4">4</div>
                  <h3 className="text-lg font-semibold">24/7 Monitoring & Beheer</h3>
                  <p className="mt-1 text-gray-400 text-sm">We blijven proactief uw systemen beheren en optimaliseren.</p>
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
                <h2 className="text-3xl md:text-4xl font-bold text-gradient">Gebouwd voor Bedrijven die Afhankelijk zijn van hun IT</h2>
                <p className="text-lg text-gray-400 mt-4">Onze aanpak is voor bedrijven waarvoor uptime geen luxe is, maar een absolute noodzaak.</p>
              </div>
              <div className="max-w-4xl mx-auto glass-effect p-8 md:p-12 rounded-lg border border-cyber-light">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Herkent u zich hierin?</h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>Uw kernapplicaties draaien op eigen servers.</span></li>
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U kunt zich absoluut geen dataverlies permitteren.</span></li>
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U wilt groeien zonder zich zorgen te maken over de schaalbaarheid van uw IT.</span></li>
                      <li className="flex items-start"><CheckCircle className="w-5 h-5 text-quantum-green mr-3 mt-1 flex-shrink-0" /><span>U zoekt een partner die meedenkt over uw infrastructuur, niet alleen reageert op tickets.</span></li>
                    </ul>
                  </div>
                  <div className="text-center p-6 bg-quantum-blue/10 rounded-lg">
                    <h4 className="text-xl font-bold text-white">Dan zijn wij de juiste partner.</h4>
                    <p className="mt-2 text-gray-400">Wij bouwen en beheren het rotsvaste fundament waarop u met een gerust hart kunt bouwen.</p>
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
          title="Klaar voor een Toekomstbestendig Digitaal Fundament?"
          description="Vraag uw gratis, vrijblijvende Infrastructuur-Scan aan. We analyseren uw huidige setup, identificeren risico's en onthullen concrete kansen voor verbeterde stabiliteit, veiligheid en performance."
          buttonText="Claim Mijn Gratis Infrastructuur-Scan"
          buttonLink="/contact?service=infrastructuur-scan"
        />
      </div>
    </>
  )
}

export default SysteembeheerClientPage