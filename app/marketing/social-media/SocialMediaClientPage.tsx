'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { ArrowRight, MessageCircle, Users, TrendingUp, ShieldCheck, Zap, Eye, Infinity, ChevronDown, Bot, PenTool, Linkedin, Instagram, CheckCircle2, ShoppingCart, Briefcase, MapPin, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import CTAPortal from '@/components/sections/CTAPortal'
import RipplesOfEngagement from '@/components/3d/RipplesOfEngagement'
import { cn } from '@/lib/utils'

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

export default function SocialMediaClientPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqData = [
        {
            q: "Op welke social media kanalen moeten we ons richten?",
            a: "Dit hangt volledig af van uw doelgroep. Voor B2B is LinkedIn vaak de beste keuze. Voor visuele producten zijn Instagram en Pinterest krachtig. Facebook is een sterke all-rounder voor een breed publiek. We beginnen altijd met een doelgroepanalyse om de kanalen met de hoogste ROI te bepalen."
        },
        {
            q: "Hoe vaak moeten we posten?",
            a: "Consistentie is belangrijker dan frequentie. We ontwikkelen een contentkalender die past bij uw bedrijf en middelen. Liever 2-3 kwalitatief hoogstaande posts per week die waarde bieden, dan elke dag een irrelevante post. Kwaliteit boven kwantiteit."
        },
        {
            q: "Wat is het verschil tussen organisch bereik en betaald adverteren?",
            a: "Organisch bereik is het publiek dat u bereikt zonder te betalen, via uw volgers en hun netwerk. Betaald adverteren (Social Ads) stelt ons in staat om uw boodschap te tonen aan een hyper-specifieke doelgroep buiten uw volgers, gebaseerd op demografie, interesses en gedrag. Een sterke strategie combineert beide."
        },
        {
            q: "Hoe meten jullie het succes van social media marketing?",
            a: "We kijken naar statistieken die impact hebben op uw bedrijfsdoelen: groei in engagement (likes, comments, shares), toename in websiteverkeer vanuit social media, en uiteindelijk de conversies (leads of verkopen) die hieruit voortkomen. Dit alles wordt gerapporteerd in ons transparante live-dashboard."
        }
    ];

  return (
    <div className="bg-cyber-darker text-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
            <RipplesOfEngagement />
          </Canvas>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-quantum-purple/20 text-quantum-purple border-quantum-purple">
              Bouw Relaties, Creëer Impact
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Meer dan alleen Likes,
              <span className="block mt-2 text-gradient">
                Echte Connecties
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Wij transformeren uw social media van een passief uithangbord naar een actieve community-builder en een krachtige lead-generator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Gratis Social Scan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Onze Aanpak
              </Button>
            </div>
             <div className="mt-6 text-sm text-gray-400">
              <p>✓ Profiel-analyse ✓ Content-audit ✓ Concurrentie-vergelijking</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* This div contains the scrollable content with a blueprint background */}
      <div className="relative z-10 blueprint-background">
          {/* 2. Problem & Solution Section */}
          <ScrollTrigger>
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Schreeuwt u in een Lege Ruimte?</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Zonder strategie levert social media alleen maar frustratie op.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 text-gray-300">
                    <p>❌ U post regelmatig, maar krijgt nauwelijks reacties.</p>
                    <p>❌ Uw volgersaantal groeit niet of bestaat uit bots.</p>
                    <p>❌ U weet niet welke content uw doelgroep wil zien.</p>
                    <p>❌ De tijd die u investeert, levert geen websitebezoekers of leads op.</p>
                  </div>
                  <div className="glass-effect p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-gradient">De Community-Oplossing</h3>
                    <p className="text-lg">Wij focussen op <span className="text-quantum-purple font-semibold">authentieke interactie en waardecreatie</span>. We ontwikkelen een contentstrategie die uw doelgroep boeit, bouwen een actieve community en zetten die community om in loyale klanten.</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 3. Platform Expertise Section */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Platform Expertise</h2>
                  <p className="text-lg text-gray-400 mt-4">Wij zijn geen generalisten. Wij zijn specialisten.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <FeatureCard icon={Linkedin} title="LinkedIn (B2B)">
                    Thought leadership, lead generation en het opbouwen van een professioneel netwerk dat converteert.
                  </FeatureCard>
                  <FeatureCard icon={Instagram} title="Instagram & Meta (B2C)">
                    Visuele storytelling, community-opbouw en gerichte advertentiecampagnes die uw merk laten groeien.
                  </FeatureCard>
                  <FeatureCard icon={MessageCircle} title="TikTok & Shorts (Emerging)">
                    Authentieke short-form video content om een nieuwe, jonge doelgroep te bereiken en merkbekendheid te creëren.
                  </FeatureCard>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 4. "For Who?" Section */}
          <ScrollTrigger>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-display">Voor Wie Is Dit Perfect?</h2>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Onze aanpak levert de meeste waarde voor deze type bedrijven:</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <PromiseCard icon={ShoppingCart} title="E-commerce Merken">
                            Die visuele producten verkopen en een loyale community willen bouwen die converteert.
                        </PromiseCard>
                        <PromiseCard icon={Briefcase} title="B2B Dienstverleners">
                            Die via LinkedIn autoriteit willen uitstralen en gekwalificeerde leads willen genereren.
                        </PromiseCard>
                        <PromiseCard icon={MapPin} title="Lokale Bedrijven">
                            Die de lokale gemeenschap willen bereiken en klanten naar hun fysieke locatie willen trekken.
                        </PromiseCard>
                        <PromiseCard icon={User} title="Personal Brands">
                            Coaches, consultants en experts die hun thought leadership willen vestigen en hun bereik willen vergroten.
                        </PromiseCard>
                    </div>
                </div>
            </section>
          </ScrollTrigger>

          {/* 5. Custom Strategy Section */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl font-bold font-display">Een Strategie op Maat</h2>
                        <p className="text-lg text-gray-400 mt-4 mb-8">
                            Elk bedrijf is uniek. Daarom geloven wij niet in een 'one-size-fits-all' aanpak. We ontwikkelen een social media strategie die volledig is afgestemd op uw specifieke doelen, doelgroep en budget.
                        </p>
                        <div className="glass-effect p-8 rounded-2xl inline-block">
                            <div className="flex items-baseline justify-center mb-6">
                                <span className="text-xl text-gray-400 mr-2">Vanaf</span>
                                <span className="text-5xl font-bold text-gradient">€495</span>
                                <span className="text-xl text-gray-400 ml-2">/maand</span>
                            </div>
                            <Button variant="primary" size="lg">
                                Plan een Strategiegesprek
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
          </ScrollTrigger>

          {/* 6. The Start Beheer Promise */}
          <ScrollTrigger>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-display">De Start Beheer Belofte</h2>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Dit zijn geen loze woorden, maar harde garanties.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <PromiseCard icon={Eye} title="Radicale Transparantie">
                            U heeft 24/7 toegang tot een live-dashboard met alle statistieken over groei en engagement.
                        </PromiseCard>
                        <PromiseCard icon={Bot} title="Authenticiteit Garantie">
                            We bouwen echte connecties. Geen gekochte volgers, geen spam-tactieken.
                        </PromiseCard>
                        <PromiseCard icon={ShieldCheck} title="Uw Merk, Onze Stem">
                            We bewaken uw merkidentiteit en zorgen voor een consistente, professionele tone-of-voice.
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
            <section className="py-20 bg-cyber-dark/50">
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
  )
}
