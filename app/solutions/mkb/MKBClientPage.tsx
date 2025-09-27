'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { ArrowRight, ShieldCheck, Zap, Eye, Infinity, ChevronDown, Package, TrendingUp, Users, CheckCircle, Briefcase, BarChart2, Building } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import CTAPortal from '@/components/sections/CTAPortal'
import DigitalBlueprint from '@/components/3d/DigitalBlueprint'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const FeatureCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
    <div className="glass-effect p-6 rounded-lg text-center h-full border border-quantum-blue/20 hover:border-quantum-green/30 transition-colors duration-300">
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

export default function MKBClientPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqData = [
        {
            q: "Is een geïntegreerde oplossing niet te duur voor een MKB-bedrijf?",
            a: "Nee, integendeel. Door IT en marketing te combineren, creëren we efficiëntie die kosten bespaart. Onze pakketten zijn schaalbaar en ontworpen om een duidelijke, positieve ROI te leveren, waardoor het een investering in groei is, geen kostenpost."
        },
        {
            q: "We hebben al een IT-leverancier. Kunnen we alleen marketingdiensten afnemen?",
            a: "Absoluut. Hoewel de grootste winst in de integratie zit, zijn al onze diensten ook modulair beschikbaar. We kunnen perfect samenwerken met uw bestaande leveranciers om uw marketing naar een hoger niveau te tillen."
        },
        {
            q: "Hoeveel tijd kost dit ons als ondernemer?",
            a: "Ons doel is om u te ontzorgen. Na een strategische kick-off nemen wij het volledige beheer over. We houden u proactief op de hoogte met duidelijke rapportages en maandelijkse strategiesessies, zodat u zich kunt focussen op uw kernactiviteiten."
        }
    ];

  return (
    <div className="bg-cyber-darker text-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
            <DigitalBlueprint />
          </Canvas>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-quantum-purple/20 text-quantum-purple border-quantum-purple">
              Oplossingen voor het MKB
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Uw Partner in
              <span className="block mt-2 text-gradient">
                Digitale Bedrijfsvoering
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Wij integreren uw IT en marketing tot één krachtige groeimotor. Stabiel, veilig en gericht op meetbaar resultaat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Plan een Strategische Sessie
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
          {/* 2. Problem & Solution Section */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Herkent u deze Groeipijnen?</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">De uitdagingen van een groeiend MKB-bedrijf zijn uniek.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                  <div className="space-y-4 text-gray-300">
                    <p>❌ IT-systemen die niet meegroeien met uw ambities.</p>
                    <p>❌ Marketinginspanningen die geld kosten maar weinig opleveren.</p>
                    <p>❌ Te veel tijd kwijt aan het aansturen van verschillende bureaus.</p>
                    <p>❌ Gebrek aan een duidelijke, data-gedreven strategie voor de toekomst.</p>
                  </div>
                  <div className="glass-effect p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-gradient">De Geïntegreerde Oplossing</h3>
                    <p className="text-lg">Wij functioneren als uw <span className="text-quantum-green font-semibold">externe CTO en CMO in één</span>. Door IT en marketing vanuit één visie te beheren, zorgen we voor een stabiel, veilig fundament en een voorspelbare stroom van nieuwe klanten. Efficiënt, schaalbaar en volledig ontzorgd.</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 3. Our MKB Solution Section */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <Badge className="mb-4">De MKB Groei-Suite</Badge>
                  <h2 className="text-4xl font-bold font-display">Uw Fundament voor Schaalbare Groei</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Drie pijlers voor een zorgeloze en voorspelbare toekomst.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                  <FeatureCard icon={Building} title="Stabiel & Veilig Fundament">Proactief IT-beheer, 24/7 monitoring en ijzersterke cybersecurity. De basis voor elke succesvolle operatie.</FeatureCard>
                  <FeatureCard icon={TrendingUp} title="Voorspelbare Klantengroei">Een geïntegreerde mix van Google Ads en SEO om een constante stroom van gekwalificeerde leads te genereren.</FeatureCard>
                  <FeatureCard icon={Users} title="Strategisch Partnerschap">Maandelijkse strategiesessies en één vast aanspreekpunt. We zijn geen leverancier, maar uw partner in groei.</FeatureCard>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 4. Investment Section */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold font-display mb-4">Een Transparante Investering</h2>
                  <p className="text-lg text-gray-400 mt-4 mb-8">Wij bieden geen losse diensten, maar een geïntegreerde oplossing op maat. De investering is afhankelijk van uw ambities, omvang en huidige digitale volwassenheid.</p>
                  
                  <Card className="glass-effect inline-block p-8 rounded-lg border border-quantum-green/30 text-left w-full max-w-md">
                    <CardHeader>
                      <CardTitle className="text-2xl font-display flex justify-between items-center">
                        <span>MKB Groei-Suite</span>
                        <span className="text-gradient text-3xl">Op Maat</span>
                      </CardTitle>
                      <p className="text-gray-400">Vanaf €499 per maand</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-gray-300">Een pakket volledig afgestemd op uw doelen:</p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-quantum-green mr-2" /> Volledig IT-beheer & support</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-quantum-green mr-2" /> Geavanceerde cybersecurity</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-quantum-green mr-2" /> Data-gedreven marketing (SEO & SEA)</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-quantum-green mr-2" /> Maandelijkse strategiesessie</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-quantum-green mr-2" /> Geïntegreerd dashboard</li>
                      </ul>
                      <Button variant="secondary" size="lg" className="w-full mt-6">
                        Vraag een Offerte aan
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 5. FAQ Section */}
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

          {/* 6. Centralized CTA */}
          <ScrollTrigger>
            <CTAPortal />
          </ScrollTrigger>
        </div>
    </div>
  )
}