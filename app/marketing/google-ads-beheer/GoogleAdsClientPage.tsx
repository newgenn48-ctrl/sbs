'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { ArrowRight, Target, BarChart, Filter, TrendingUp, Search, TestTube, ShieldCheck, Zap, Eye, Infinity, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import CTAPortal from '@/components/sections/CTAPortal'
import DataStreams from '@/components/3d/DataStreams'

// Helper components are defined INSIDE the main component to ensure correct scope and prevent compiler errors.
const FeatureCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="glass-effect p-6 rounded-lg border border-cyber-light hover:border-quantum-blue transition-all duration-300">
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

export default function GoogleAdsClientPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqData = [
        {
            q: "Wat is het minimale advertentiebudget dat jullie aanraden?",
            a: "Voor de meeste MKB-bedrijven raden we een minimaal startbudget aan van €500 tot €1000 per maand. Dit geeft ons voldoende data om de campagnes effectief te optimaliseren en een positieve ROAS te behalen. Voor zeer competitieve markten kan een hoger budget nodig zijn."
        },
        {
            q: "Hoe snel kan ik resultaten verwachten?",
            a: "U kunt de eerste resultaten, zoals klikken en impressies, vaak al binnen 24 uur zien. Echte, betekenisvolle resultaten zoals een stabiele stroom van leads of verkopen, duren doorgaans 60 tot 90 dagen. Dit is de tijd die we nodig hebben om voldoende data te verzamelen en de campagnes volledig te optimaliseren."
        },
        {
            q: "Werken jullie met vaste contracten?",
            a: "Nee. Wij geloven in onze resultaten en bieden daarom een maandelijks opzegbaar contract. We zijn ervan overtuigd dat onze prestaties de beste reden zijn om te blijven. U heeft de volledige flexibiliteit."
        },
        {
            q: "Wat maakt jullie aanpak anders dan die van andere bureaus?",
            a: "Onze focus ligt op radicale transparantie en een 100% data-gedreven aanpak. U krijgt een live-dashboard met al uw campagnedata, en elke beslissing die we nemen wordt onderbouwd met data, niet met onderbuikgevoel. We zijn uw strategische partner, niet zomaar een uitvoerende partij."
        }
    ];

  return (
    <div className="bg-cyber-darker text-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
            <DataStreams />
          </Canvas>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-quantum-green/20 text-quantum-green border-quantum-green">
              Direct Resultaat met SEA
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Domineer de Zoekresultaten,
              <span className="block mt-2 text-gradient">
                Converteer uw Doelgroep
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Wij creëren en beheren winstgevende Google Ads campagnes die uw ideale klanten aantrekken op het moment dat ze op zoek zijn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Gratis Campagne Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Onze Strategie
              </Button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>✓ Zoekwoord-analyse ✓ Concurrentie-scan ✓ Concrete aanbevelingen</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* This div creates the persistent background for scrolling sections */}
      <div className="relative">
        <div className="absolute inset-0 z-0 h-full">
          <div className="sticky top-0 h-screen">
            <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
              <DataStreams />
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
                  <h2 className="text-4xl font-bold font-display">Verbrandt u Advertentiebudget?</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Zonder expertise lekt geld snel weg in Google Ads.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 text-gray-300">
                    <p>❌ Hoge kosten per klik (CPC) zonder conversies.</p>
                    <p>❌ Advertenties trekken de verkeerde bezoekers aan.</p>
                    <p>❌ Onvoldoende inzicht in de Return on Ad Spend (ROAS).</p>
                    <p>❌ Concurrenten zijn u constant te slim af.</p>
                  </div>
                  <div className="glass-effect p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-gradient">De Data-Gedreven Oplossing</h3>
                    <p className="text-lg">Wij hanteren een <span className="text-quantum-green font-semibold">strategische en analytische aanpak</span>. Door diepgaand zoekwoordonderzoek, A/B-testen en continue optimalisatie zorgen we voor maximale relevantie en een positieve ROAS. Elke euro wordt effectief besteed.</p>
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
                  <h2 className="text-4xl font-bold font-display">Onze Google Ads Expertise</h2>
                  <p className="text-lg text-gray-400 mt-4">Een complete aanpak voor online advertentiesucces.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <FeatureCard icon={Target} title="Zoekwoord Strategie">
                    We vinden de meest winstgevende zoekwoorden voor uw business, inclusief long-tail en high-intent zoekopdrachten.
                  </FeatureCard>
                  <FeatureCard icon={Filter} title="Doelgroep Targeting">
                    We bereiken uw ideale klant op basis van demografie, locatie, interesses en online gedrag.
                  </FeatureCard>
                  <FeatureCard icon={TrendingUp} title="Conversie Optimalisatie">
                    We optimaliseren niet alleen de campagnes, maar ook uw landingspagina's voor een maximaal conversiepercentage.
                  </FeatureCard>
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
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Google Ads is de perfecte oplossing als u...</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-green">Snel Leads Nodig Heeft</h3>
                    <p className="text-gray-400 text-sm">Direct zichtbaar zijn bij klanten die actief op zoek zijn naar uw diensten of producten.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-green">Direct ROI Wilt Meten</h3>
                    <p className="text-gray-400 text-sm">Precies willen weten hoeveel elke geïnvesteerde euro oplevert in termen van leads en omzet.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-green">Specifieke Diensten Promoot</h3>
                    <p className="text-gray-400 text-sm">Een nieuw aanbod, evenement of specifieke dienst snel en effectief onder de aandacht brengen.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-green">E-commerce Verkoop Stimuleert</h3>
                    <p className="text-gray-400 text-sm">Met Shopping- en Performance Max-campagnes direct uw producten tonen aan een koopgericht publiek.</p>
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
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Een voorbeeld uit de praktijk: B2B Dienstverlener</p>
                </div>
                <div className="glass-effect p-8 md:p-12 rounded-lg max-w-4xl mx-auto border border-quantum-green/30">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold font-display mb-4">De Uitdaging</h3>
                      <p className="text-gray-400 mb-6">Een B2B-dienstverlener kreeg wel klikken, maar nauwelijks gekwalificeerde leads. Het advertentiebudget verdampte zonder duidelijke ROI.</p>
                      <h3 className="text-2xl font-bold font-display mb-4">Onze Aanpak</h3>
                      <p className="text-gray-400">Door een diepgaande analyse van zoekintentie en het uitsluiten van irrelevante zoektermen, hebben we de campagnes volledig opnieuw gestructureerd en gericht op conversies.</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold font-display mb-4 text-gradient">Het Resultaat na 90 Dagen</h3>
                      <div className="space-y-4">
                        <div>
                          <p className="text-4xl font-bold text-quantum-green">-72%</p>
                          <p className="text-gray-400">Kosten per Lead</p>
                        </div>
                        <div>
                          <p className="text-4xl font-bold text-quantum-green">+150%</p>
                          <p className="text-gray-400">Conversieratio</p>
                        </div>
                        <div>
                          <p className="text-4xl font-bold text-quantum-green">+320%</p>
                          <p className="text-gray-400">Gekwalificeerde Leads</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 6. Methodology Section */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Onze Winstgevende Methodiek</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Ons proces is ontworpen om giswerk te elimineren en resultaten te maximaliseren.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-left">
                  <div className="glass-effect p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Search className="h-10 w-10 text-quantum-blue mr-4" />
                      <h3 className="text-2xl font-bold font-display">1. Data-Analyse</h3>
                    </div>
                    <p className="text-gray-400 mb-4">De basis van elke succesvolle campagne is een diepgaand begrip van de markt.</p>
                    <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                      <li>Concurrentie-analyse</li>
                      <li>Zoekwoord-intentie mapping</li>
                      <li>Doelgroep segmentatie</li>
                      <li>Analyse van historische data</li>
                    </ul>
                  </div>
                  <div className="glass-effect p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                      <TestTube className="h-10 w-10 text-quantum-blue mr-4" />
                      <h3 className="text-2xl font-bold font-display">2. Strategie & Creatie</h3>
                    </div>
                    <p className="text-gray-400 mb-4">We vertalen data naar een concrete strategie en overtuigende advertenties.</p>
                     <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                      <li>Campagnestructuur opzetten</li>
                      <li>Advertentieteksten A/B testen</li>
                      <li>Landingspagina optimalisatie</li>
                      <li>Conversie tracking instellen</li>
                    </ul>
                  </div>
                  <div className="glass-effect p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="h-10 w-10 text-quantum-blue mr-4" />
                      <h3 className="text-2xl font-bold font-display">3. Continue Optimalisatie</h3>
                    </div>
                    <p className="text-gray-400 mb-4">Een campagne is nooit 'af'. We monitoren en sturen dagelijks bij voor maximaal rendement.</p>
                     <ul className="space-y-2 text-gray-300 text-sm list-disc list-inside">
                      <li>Dagelijks bod-management</li>
                      <li>Negatieve zoekwoorden toevoegen</li>
                      <li>Wekelijkse performance rapportage</li>
                      <li>Strategische aanpassingen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 7. The Start Beheer Promise */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50 border-t border-cyber-light/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-display">De Start Beheer Belofte</h2>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Dit zijn geen loze woorden, maar harde garanties.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <PromiseCard icon={Eye} title="Radicale Transparantie">
                            U heeft 24/7 toegang tot een live-dashboard met al uw data. Geen geheimen, geen verrassingen.
                        </PromiseCard>
                        <PromiseCard icon={Zap} title="Data, Geen Meningen">
                            Elke beslissing wordt onderbouwd met data. We testen, meten en weten wat werkt voor uw bedrijf.
                        </PromiseCard>
                        <PromiseCard icon={ShieldCheck} title="Uw Groei, Onze Missie">
                            We zijn pas succesvol als u dat bent. Uw bedrijfsdoelen staan centraal in alles wat we doen.
                        </PromiseCard>
                        <PromiseCard icon={Infinity} title="Geen Vaste Contracten">
                            We geloven in onze resultaten. Daarom bent u vrij om maandelijks op te zeggen.
                        </PromiseCard>
                    </div>
                </div>
            </section>
          </ScrollTrigger>

          {/* 8. FAQ Section */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
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

          {/* 9. Centralized CTA */}
          <ScrollTrigger>
            <CTAPortal />
          </ScrollTrigger>
        </div>
      </div>
    </div>
  )
}
