'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { ArrowRight, Search, Link as LinkIcon, TrendingUp, ShieldCheck, Zap, Eye, Infinity, ChevronDown, FileText, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import CTAPortal from '@/components/sections/CTAPortal'
import DigitalNetwork from '@/components/3d/DigitalNetwork'

const FeatureCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="glass-effect p-6 rounded-lg border border-cyber-light hover:border-quantum-blue transition-all duration-300 h-full">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-quantum-blue/20 rounded-full mr-4">
        <Icon className="w-6 h-6 text-quantum-blue" />
      </div>
      <h3 className="text-xl font-bold font-display">{title}</h3>
    </div>
    <p className="text-gray-400">{children}</p>
  </div>
);

const PromiseCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
    <div className="glass-effect p-6 rounded-lg text-center h-full">
        <Icon className="h-10 w-10 text-quantum-green mx-auto mb-4" />
        <h3 className="text-xl font-bold font-display mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{children}</p>
    </div>
);

const FaqItem = ({ q, a, isOpen, onToggle }: { q: string, a: string, isOpen: boolean, onToggle: () => void }) => (
    <div className="border-b border-quantum-blue/20 py-4">
        <button onClick={onToggle} className="flex justify-between items-center w-full text-left">
            <h4 className="text-lg font-semibold">{q}</h4>
            <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    className="overflow-hidden"
                >
                    <p className="text-gray-400 pr-8">{a}</p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

export default function SEOServicesClientPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqData = [
        {
            q: "Is SEO niet een langzaam proces?",
            a: "SEO is een marathon, geen sprint. Hoewel technische verbeteringen snel effect kunnen hebben, duurt het opbouwen van duurzame autoriteit en rankings doorgaans 3 tot 6 maanden. Dit is een investering in de lange-termijn groei en waarde van uw bedrijf, in tegenstelling tot betaalde advertenties die stoppen zodra u stopt met betalen."
        },
        {
            q: "Garanderen jullie nummer #1 posities?",
            a: "Nee, en elk bureau dat dit doet is onbetrouwbaar. Google's algoritme is complex en verandert constant. Wat we wél garanderen is een aanzienlijke, meetbare verbetering in uw organische zichtbaarheid, verkeer en leads, door het toepassen van bewezen, 'white-hat' SEO-strategieën."
        },
        {
            q: "Wat is het verschil tussen technische SEO en content?",
            a: "Technische SEO is het fundament van uw huis: de code, snelheid, en structuur die zoekmachines begrijpen. Content is de inrichting: de waardevolle informatie die uw doelgroep aantrekt en overtuigt. Beide zijn absoluut essentieel; een sterk huis zonder meubels is nutteloos, en andersom."
        },
        {
            q: "Hoe meten jullie het succes van een SEO-campagne?",
            a: "We kijken verder dan alleen rankings. Onze rapportages focussen op de statistieken die er echt toe doen: groei in organisch verkeer, toename in conversies (leads, verkopen), en verbetering van de 'keyword footprint' (het aantal zoekwoorden waarop u gevonden wordt). Alles wordt bijgehouden in een transparant live-dashboard."
        }
    ];

  return (
    <div className="bg-cyber-darker text-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
            <DigitalNetwork />
          </Canvas>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-quantum-green/20 text-quantum-green border-quantum-green">
              Duurzame Online Groei
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Verover de Top,
              <span className="block mt-2 text-gradient">
                Domineer uw Markt
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Wij bouwen geen 'SEO-trucjes'. Wij bouwen een duurzaam fundament van technische perfectie en autoriteit dat u structureel bovenaan de zoekresultaten plaatst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Gratis SEO Analyse
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Onze Methodiek
              </Button>
            </div>
             <div className="mt-6 text-sm text-gray-400">
              <p>✓ Technische Scan ✓ Concurrentie-analyse ✓ Groeikansen Rapport</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* This div creates the persistent background for scrolling sections */}
      <div className="relative">
        <div className="absolute inset-0 z-0 h-full">
          <div className="sticky top-0 h-screen">
            <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
              <DigitalNetwork />
            </Canvas>
            <div className="absolute inset-0 bg-cyber-darker/95" />
          </div>
        </div>

        {/* This div contains the scrollable content */}
        <div className="relative z-10">
          {/* 2. Problem & Solution Section */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Onzichtbaar voor uw Klanten?</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Als u niet op de eerste pagina staat, bestaat u niet voor 91% van de zoekers.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 text-gray-300">
                    <p>❌ Uw concurrenten domineren de belangrijkste zoekwoorden.</p>
                    <p>❌ U investeert in content die niemand leest.</p>
                    <p>❌ Technische problemen saboteren uw rankings zonder dat u het weet.</p>
                    <p>❌ U krijgt geen organisch verkeer, leads of verkopen.</p>
                  </div>
                  <div className="glass-effect p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-gradient">De Autoriteits-Oplossing</h3>
                    <p className="text-lg">Wij hanteren een <span className="text-quantum-green font-semibold">holistische SEO-strategie</span>. We combineren een waterdicht technisch fundament met content die autoriteit uitstraalt en backlinks die vertrouwen wekken bij Google. Zo bouwen we aan duurzame dominantie.</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 3. Key Features Grid */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Onze SEO Pijlers</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">De drie onmisbare elementen voor #1 posities.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 text-left">
                  <div className="glass-effect p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Zap className="h-10 w-10 text-quantum-blue mr-4" />
                      <h3 className="text-2xl font-bold font-display">Technische SEO</h3>
                    </div>
                    <p className="text-gray-400 mb-4">Het fundament voor succes. We zorgen voor een vlekkeloze site-architectuur die Google's bots moeiteloos begrijpen.</p>
                    <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                      <li>Core Web Vitals optimalisatie</li>
                      <li>Schema markup implementatie</li>
                      <li>Crawl budget optimalisatie</li>
                      <li>Internationale SEO (hreflang)</li>
                    </ul>
                  </div>
                  <div className="glass-effect p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                      <FileText className="h-10 w-10 text-quantum-blue mr-4" />
                      <h3 className="text-2xl font-bold font-display">Content & Autoriteit</h3>
                    </div>
                    <p className="text-gray-400 mb-4">Content die niet alleen de lezer informeert, maar ook zoekmachines overtuigt van uw expertise.</p>
                    <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                      <li>Diepgaand zoekwoordenonderzoek</li>
                      <li>Content gap analyse</li>
                      <li>Topical authority mapping</li>
                      <li>Creatie van 10x content</li>
                    </ul>
                  </div>
                  <div className="glass-effect p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                      <LinkIcon className="h-10 w-10 text-quantum-blue mr-4" />
                      <h3 className="text-2xl font-bold font-display">Linkbuilding & PR</h3>
                    </div>
                    <p className="text-gray-400 mb-4">We bouwen een profiel van hoge kwaliteit backlinks die vertrouwen wekken en uw autoriteit versterken.</p>
                    <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                      <li>Digitale PR campagnes</li>
                      <li>Link-earning strategieën</li>
                      <li>Analyse van concurrentie-backlinks</li>
                      <li>Herstellen van broken links</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 4. For Whom Is This Ideal? Section */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Voor Wie Is Dit Ideaal?</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">SEO is de strategische keuze als u...</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-green">Duurzaam Wilt Groeien</h3>
                    <p className="text-gray-400 text-sm">Een solide, lange-termijn fundament wilt bouwen voor een constante stroom van 'gratis' organisch verkeer.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-green">Autoriteit Wilt Opbouwen</h3>
                    <p className="text-gray-400 text-sm">Gezien wilt worden als dé expert en marktleider in uw niche, wat vertrouwen en conversies verhoogt.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-green">Minder Afhankelijk Wilt Zijn</h3>
                    <p className="text-gray-400 text-sm">De afhankelijkheid van dure, betaalde advertenties wilt verminderen en uw marketingmix wilt diversifiëren.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-green">Complexe Diensten Aanbiedt</h3>
                    <p className="text-gray-400 text-sm">Klanten wilt aantrekken die in de oriënterende fase zitten en behoefte hebben aan diepgaande informatie.</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 5. Tangible Results (Case Study) Section */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Tastbare Resultaten</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Een voorbeeld uit de praktijk: SaaS Bedrijf</p>
                </div>
                <div className="glass-effect p-8 md:p-12 rounded-lg max-w-4xl mx-auto border border-quantum-green/30">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold font-display mb-4">De Uitdaging</h3>
                      <p className="text-gray-400 mb-6">Een innovatief SaaS-bedrijf was onzichtbaar in de zoekresultaten. Concurrenten met minderwaardige producten domineerden de markt op basis van hun online autoriteit.</p>
                      <h3 className="text-2xl font-bold font-display mb-4">Onze Aanpak</h3>
                      <p className="text-gray-400">We hebben een content-strategie ontwikkeld gericht op 'thought leadership' en een technisch perfecte website. Dit, gecombineerd met strategische PR, bouwde hun autoriteit op.</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold font-display mb-4 text-gradient">Het Resultaat na 6 Maanden</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-4xl font-bold text-quantum-green">+450%</p>
                          <p className="text-gray-400">Organisch Verkeer</p>
                        </div>
                        <div>
                          <p className="text-4xl font-bold text-quantum-green">+78</p>
                          <p className="text-gray-400">Nieuwe Top 3 Zoekwoorden</p>
                        </div>
                        <div>
                          <p className="text-4xl font-bold text-quantum-green">+250%</p>
                          <p className="text-gray-400">Demo Aanvragen (Organisch)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 6. The Start Beheer Promise */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-display">De Start Beheer Belofte</h2>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Dit zijn geen loze woorden, maar harde garanties.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <PromiseCard icon={Eye} title="Radicale Transparantie">
                            U heeft 24/7 toegang tot een live-dashboard met al uw rankings, verkeer en conversies.
                        </PromiseCard>
                        <PromiseCard icon={Bot} title="White-Hat Garantie">
                            We gebruiken alleen duurzame, door Google goedgekeurde strategieën. Geen riskante trucjes.
                        </PromiseCard>
                        <PromiseCard icon={ShieldCheck} title="Uw Groei, Onze Missie">
                            We zijn pas succesvol als u organisch groeit. Uw bedrijfsdoelen staan centraal.
                        </PromiseCard>
                        <PromiseCard icon={Infinity} title="Geen Vaste Contracten">
                            We geloven in onze resultaten. Daarom bent u vrij om maandelijks op te zeggen.
                        </PromiseCard>
                    </div>
                </div>
            </section>
          </ScrollTrigger>

          {/* 7. FAQ Section */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50 border-t border-cyber-light/20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-display">Veelgestelde Vragen</h2>
                    </div>
                    <div className="space-y-2">
                        {faqData.map((item, index) => (
                            <FaqItem 
                                key={index}
                                q={item.q}
                                a={item.a}
                                isOpen={openFaq === index}
                                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>
            </section>
          </ScrollTrigger>

          {/* 8. Centralized CTA */}
          <ScrollTrigger>
            <CTAPortal />
          </ScrollTrigger>
        </div>
      </div>
    </div>
  )
}