'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { ArrowRight, ShieldCheck, Eye, Infinity, ChevronDown, BarChart, Search, MessageCircle, Bot, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import CTAPortal from '@/components/sections/CTAPortal'
import MarketingNexus from '@/components/3d/MarketingNexus'

// --- Main Page Component ---

export default function MarketingPageClient() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    
    const faqData = [
        {
            q: "Waarom een geïntegreerde aanpak?",
            a: "Losse marketing-inspanningen zijn als een orkest zonder dirigent. Google Ads, SEO en Social Media versterken elkaar exponentieel wanneer ze vanuit één centrale strategie worden aangestuurd."
        },
        {
            q: "Welke dienst is het beste om mee te beginnen?",
            a: "Voor snelle resultaten is Google Ads vaak de beste start. Voor duurzame groei is SEO essentieel. We bepalen samen het startpunt dat de meeste waarde oplevert."
        },
        {
            q: "Hoe meten jullie het succes?",
            a: "We focussen op de 'Total Cost of Customer Acquisition' (CAC) en de 'Customer Lifetime Value' (CLV). Alle data komt samen in één overzichtelijk live-dashboard."
        }
    ];

    return (
        <div className="bg-cyber-darker text-white">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 12], fov: 75 }}>
            <MarketingNexus />
          </Canvas>
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-quantum-purple/20 text-quantum-purple border-quantum-purple">
              Geïntegreerde Groei
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Stop met Losse Campagnes,
              <span className="block mt-2 text-gradient">
                Bouw een Groei-Ecosysteem
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-4xl mx-auto">
              Wij bouwen een geïntegreerd, data-gedreven marketing-ecosysteem dat uw bedrijf laat domineren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Plan uw Groei-Strategie
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="relative z-10 blueprint-background">
          {/* 2. Service Portals Section (Simplified) */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold font-display">Ons Groei-Arsenaal</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Vier specialisaties, één geïntegreerd systeem, ontworpen voor maximale impact.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                  {/* Service Portal 1: Google Ads */}
                  <motion.div whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0, 217, 255, 0.2)'}}>
                    <Link href="/marketing/google-ads-beheer" className="glass-effect p-8 rounded-2xl border border-cyber-light hover:border-quantum-blue transition-all duration-300 h-full flex flex-col text-center">
                      <BarChart className="h-12 w-12 text-quantum-blue mx-auto mb-6" />
                      <h3 className="text-2xl font-bold font-display mb-4">Google Ads Beheer</h3>
                      <p className="text-gray-400 mb-6 flex-grow">Direct resultaat met hyper-gerichte advertentiecampagnes.</p>
                      <div className="mt-auto">
                        <Button variant="secondary" size="lg" className="w-full">Ontdek Strategie <ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </div>
                    </Link>
                  </motion.div>
                  {/* Service Portal 2: SEO */}
                  <motion.div whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0, 217, 255, 0.2)'}}>
                    <Link href="/marketing/seo-services" className="glass-effect p-8 rounded-2xl border border-cyber-light hover:border-quantum-blue transition-all duration-300 h-full flex flex-col text-center">
                      <Search className="h-12 w-12 text-quantum-blue mx-auto mb-6" />
                      <h3 className="text-2xl font-bold font-display mb-4">SEO Services</h3>
                      <p className="text-gray-400 mb-6 flex-grow">Verover de top van de zoekresultaten voor duurzame, organische groei.</p>
                      <div className="mt-auto">
                        <Button variant="secondary" size="lg" className="w-full">Ontdek Strategie <ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </div>
                    </Link>
                  </motion.div>
                  {/* Service Portal 3: Social Media */}
                  <motion.div whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0, 217, 255, 0.2)'}}>
                    <Link href="/marketing/social-media" className="glass-effect p-8 rounded-2xl border border-cyber-light hover:border-quantum-blue transition-all duration-300 h-full flex flex-col text-center">
                      <MessageCircle className="h-12 w-12 text-quantum-blue mx-auto mb-6" />
                      <h3 className="text-2xl font-bold font-display mb-4">Social Media</h3>
                      <p className="text-gray-400 mb-6 flex-grow">Transformeer uw kanalen in een actieve community-builder.</p>
                      <div className="mt-auto">
                        <Button variant="secondary" size="lg" className="w-full">Ontdek Strategie <ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </div>
                    </Link>
                  </motion.div>
                  {/* Service Portal 4: Marketing Automation */}
                  <motion.div whileHover={{ y: -10, boxShadow: '0px 20px 40px rgba(0, 217, 255, 0.2)'}}>
                    <Link href="/marketing/marketing-automation" className="glass-effect p-8 rounded-2xl border border-cyber-light hover:border-quantum-blue transition-all duration-300 h-full flex flex-col text-center">
                      <Bot className="h-12 w-12 text-quantum-blue mx-auto mb-6" />
                      <h3 className="text-2xl font-bold font-display mb-4">Marketing Automation</h3>
                      <p className="text-gray-400 mb-6 flex-grow">Bouw intelligente systemen die uw marketing- en salesprocessen automatiseren.</p>
                      <div className="mt-auto">
                        <Button variant="secondary" size="lg" className="w-full">Ontdek Strategie <ArrowRight className="ml-2 h-4 w-4" /></Button>
                      </div>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 3. The Flywheel Effect Section */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Het Vliegwiel Effect</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Waarom 1 + 1 + 1 = 5. Onze diensten zijn ontworpen om elkaar te versterken.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-purple">Ads → SEO</h3>
                    <p className="text-gray-400 text-sm">Winstgevende zoekwoorden uit Google Ads campagnes vormen de directe input voor onze SEO content strategie, waardoor we sneller scoren op termen die converteren.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-purple">SEO → Social</h3>
                    <p className="text-gray-400 text-sm">Bezoekers die via organisch verkeer op uw website komen, retargeten we met specifieke campagnes op social media om top-of-mind te blijven.</p>
                  </div>
                  <div className="glass-effect p-6 rounded-lg">
                    <h3 className="text-xl font-bold font-display mb-2 text-quantum-purple">All → Automation</h3>
                    <p className="text-gray-400 text-sm">Leads die binnenkomen via Ads, SEO of Social worden automatisch opgenomen in nurture-campagnes om ze te converteren naar betalende klanten.</p>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 4. The Start Beheer Promise */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold font-display">De Start Beheer Belofte</h2>
                        <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">Dit zijn geen loze woorden, maar harde garanties.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        <div className="glass-effect p-6 rounded-lg text-center h-full"><Eye className="h-10 w-10 text-quantum-green mx-auto mb-4" /><h3 className="text-xl font-bold font-display mb-2">Radicale Transparantie</h3><p className="text-gray-400 text-sm">Eén geïntegreerd dashboard met al uw marketingdata. Volledig inzicht, geen verrassingen.</p></div>
                        <div className="glass-effect p-6 rounded-lg text-center h-full"><ShieldCheck className="h-10 w-10 text-quantum-green mx-auto mb-4" /><h3 className="text-xl font-bold font-display mb-2">Data-Gedreven Beslissingen</h3><p className="text-gray-400 text-sm">Elke stap wordt onderbouwd met data. We testen, meten en weten wat werkt voor uw groei.</p></div>
                        <div className="glass-effect p-6 rounded-lg text-center h-full"><Infinity className="h-10 w-10 text-quantum-green mx-auto mb-4" /><h3 className="text-xl font-bold font-display mb-2">Geen Vaste Contracten</h3><p className="text-gray-400 text-sm">We geloven in onze resultaten. Daarom bent u vrij om onze samenwerking maandelijks aan te passen.</p></div>
                        <div className="glass-effect p-6 rounded-lg text-center h-full"><Users className="h-10 w-10 text-quantum-green mx-auto mb-4" /><h3 className="text-xl font-bold font-display mb-2">Uw Partner in Groei</h3><p className="text-gray-400 text-sm">We zijn geen externe leverancier, maar uw strategische partner. Uw succes is ons succes.</p></div>
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
                            <div className="border-b border-quantum-blue/20 py-4" key={index}>
                                <button onClick={() => setOpenFaq(openFaq === index ? null : index)} className="flex justify-between items-center w-full text-left">
                                    <h4 className="text-lg font-semibold">{item.q}</h4>
                                    <ChevronDown className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: '1rem' }}
                                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="text-gray-400 pr-8">{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
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