'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { ArrowRight, ShieldCheck, Zap, Eye, Infinity, ChevronDown, Mail, Users, BarChart3, Briefcase, ShoppingCart, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import CTAPortal from '@/components/sections/CTAPortal'
import AutomationFunnel from '@/components/3d/AutomationFunnel'

// --- Helper Components (Defined at top-level for stability) ---

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

// --- Main Page Component ---

export default function MarketingAutomationClientPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqData = [
        {
            q: "Met welke marketing automation software werken jullie?",
            a: "Wij zijn platform-agnostisch. We hebben diepgaande expertise in HubSpot, ActiveCampaign, Mailchimp, en Klaviyo, en kiezen altijd de tool die het beste bij uw doelen en budget past."
        },
        {
            q: "Is marketing automation alleen voor e-mail?",
            a: "Nee, het is een complete klantreis. We integreren e-mail, CRM, website personalisatie en zelfs SMS om een naadloze ervaring te creëren."
        },
        {
            q: "Wat moeten wij aanleveren om te beginnen?",
            a: "Uw kennis van uw klanten en verkoopproces is de belangrijkste input. Wij vertalen uw strategie naar geautomatiseerde, winstgevende workflows."
        },
        {
            q: "Hoe meten jullie het succes?",
            a: "We focussen op KPI's die er echt toe doen: hogere conversieratio's, een hogere Customer Lifetime Value (CLV), en de meetbare tijd die uw team bespaart."
        }
    ];

  return (
    <div className="bg-cyber-darker text-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
            <AutomationFunnel />
          </Canvas>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-quantum-blue/20 text-quantum-blue border-quantum-blue">
              Efficiëntie & Schaalbare Groei
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Stop met Leads Laten Lekken,
              <span className="block mt-2 text-gradient">
                Automatiseer uw Groei
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Wij ontwerpen en implementeren intelligente systemen die uw leads converteren, uw klanten binden en uw team tijd besparen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Gratis Automation Scan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                Onze Systemen
              </Button>
            </div>
             <div className="mt-6 text-sm text-gray-400">
              <p>✓ Analyse van uw processen ✓ Kansen-rapport ✓ Software-advies</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10 blueprint-background">
          {/* 2. Problem & Solution Section */}
          <ScrollTrigger>
            <section className="py-20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Verliest u Klanten door Chaos?</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Handmatige processen zijn de rem op uw groei en de bron van fouten.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4 text-gray-300">
                    <p>❌ Leads worden niet of te laat opgevolgd.</p>
                    <p>❌ Klanten haken af door een inconsistente ervaring.</p>
                    <p>❌ Uw team is te veel tijd kwijt aan repetitieve taken.</p>
                    <p>❌ U heeft geen inzicht in welke marketinginspanningen tot omzet leiden.</p>
                  </div>
                  <div className="glass-effect p-8 rounded-lg">
                    <h3 className="text-2xl font-bold mb-4 text-gradient">De Systeem-Oplossing</h3>
                    <p className="text-lg">Wij bouwen een <span className="text-quantum-blue font-semibold">gecentraliseerd, geautomatiseerd systeem</span> dat uw marketing- en salesprocessen stroomlijnt. Elke lead wordt perfect genurtured, elke klant krijgt een consistente ervaring, en uw team kan zich focussen op wat echt telt.</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 3. Key Features Grid */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Onze Automation Expertise</h2>
                  <p className="text-lg text-gray-400 mt-4">De bouwstenen van een zelfsturend marketing-ecosysteem.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <FeatureCard icon={Mail} title="Lead Nurturing Funnels">
                    We bouwen geautomatiseerde e-mailreeksen die koude leads omzetten in warme, sales-gekwalificeerde kansen.
                  </FeatureCard>
                  <FeatureCard icon={Users} title="CRM Integratie & Sales Handoff">
                    We zorgen voor een naadloze koppeling tussen uw marketing en CRM (HubSpot, Salesforce) voor een perfecte overdracht naar sales.
                  </FeatureCard>
                  <FeatureCard icon={BarChart3} title="Gedrags-Gedreven Automations">
                    We automatiseren acties op basis van gebruikersgedrag, zoals winkelwagen-verlaters, websitebezoeken of content-downloads.
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
                        <h2 className="text-4xl font-bold font-display">Voor Wie Is Dit Essentieel?</h2>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Onze systemen leveren de hoogste ROI voor deze type bedrijven:</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <PromiseCard icon={Briefcase} title="B2B Bedrijven">
                            Met een lange sales-cyclus die een consistente, professionele opvolging vereist.
                        </PromiseCard>
                        <PromiseCard icon={ShoppingCart} title="E-commerce Winkels">
                            Die de klantlevensduur willen verhogen met up-sell, cross-sell en re-activatie campagnes.
                        </PromiseCard>
                        <PromiseCard icon={User} title="Dienstverleners">
                            Die het boeken van afspraken, het sturen van herinneringen en het verzamelen van reviews willen automatiseren.
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
                        <h2 className="text-4xl font-bold font-display">Een Systeem op Maat</h2>
                        <p className="text-lg text-gray-400 mt-4 mb-8">
                            Elk proces is anders. We bouwen geen standaard-flows, maar een volledig op maat gemaakt automation-systeem dat naadloos integreert met uw manier van werken.
                        </p>
                        <div className="glass-effect p-8 rounded-2xl inline-block">
                            <div className="flex items-baseline justify-center mb-6">
                                <span className="text-xl text-gray-400 mr-2">Vanaf</span>
                                <span className="text-5xl font-bold text-gradient">€595</span>
                                <span className="text-xl text-gray-400 ml-2">/maand</span>
                            </div>
                            <Button variant="primary" size="lg">
                                Plan een Systeem-Analyse
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
                            U heeft 24/7 toegang tot een live-dashboard met alle flow-statistieken en conversie-data.
                        </PromiseCard>
                        <PromiseCard icon={Zap} title="Efficiëntie Garantie">
                            We garanderen dat ons systeem uw team meetbaar tijd bespaart in de eerste 90 dagen.
                        </PromiseCard>
                        <PromiseCard icon={ShieldCheck} title="Data Veiligheid">
                            We werken volgens de hoogste standaarden om uw klant- en bedrijfsdata 100% veilig te houden.
                        </PromiseCard>
                        <PromiseCard icon={Infinity} title="Geen Vaste Contracten">
                            We geloven in de waarde van onze systemen. Daarom bent u vrij om maandelijks op te zeggen.
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