'use client'

// DEFINITIVE FIX: Directly extend the THREE namespace within this component file.
// This eliminates any potential race conditions or module loading issues with external setup files.
import { extend } from '@react-three/fiber';
import * as THREE from 'three';
extend(THREE);

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Zap, Eye, Infinity, ChevronDown, Package, TrendingUp, User, CheckCircle, Briefcase, BarChart2, Clock, TrendingDown, EyeOff, ServerCrash, Target, Award } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ScrollTrigger from '@/components/animations/ScrollTrigger';
import CTAPortal from '@/components/sections/CTAPortal';
import TechCoreScene from '@/components/3d/TechCoreScene';

// Sub-component: FeatureCard for the Digital Autonomy Platform
const FeatureCard = ({ icon: Icon, title, features }: { icon: React.ElementType, title: string, features: string[] }) => (
    <div className="glass-effect p-6 rounded-lg h-full border border-quantum-blue/20 hover:border-quantum-green/30 transition-colors duration-300 flex flex-col">
        <div className="flex items-center mb-4">
            <Icon className="h-10 w-10 text-quantum-green mr-4" />
            <h3 className="text-2xl font-bold font-display">{title}</h3>
        </div>
        <ul className="space-y-2 text-gray-400 text-sm flex-grow">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-quantum-green mr-2 mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
    </div>
);

// Sub-component: FaqItem for the FAQ section
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

// --- MAIN PAGE COMPONENT ---
export default function ZZPClientPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const faqData = [
        {
            q: "Is dit niet te duur voor een ZZP'er?",
            a: "Zie het als de meest rendabele 'medewerker' die je ooit zult aannemen. De investering betaalt zichzelf terug door de tijd die je bespaart en de nieuwe klanten die het oplevert. We focussen op maximale ROI."
        },
        {
            q: "Ik ben niet technisch. Is dit moeilijk te begrijpen?",
            a: "Juist niet. Wij nemen alle technische complexiteit weg en vertalen het naar duidelijke taal en resultaten. Jij focust op je vak, wij op de technologie die jouw bedrijf laat groeien."
        },
        {
            q: "Kan ik klein beginnen en later uitbreiden?",
            a: "Absoluut. Het Digital Autonomy Platform is ontworpen om met je mee te groeien. Je kunt starten met de basis en modules toevoegen naarmate je imperium en je behoeften groeien."
        }
    ];

  return (
    <div className="bg-cyber-darker text-white">
      {/* 1. Hero Section: The Confrontation */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <TechCoreScene />
        </div>
        <div className="absolute inset-0 z-1 bg-black/60"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 px-4 py-2 text-sm bg-quantum-purple/20 text-quantum-purple border-quantum-purple">
              Voor de ZZP'er die voorop wil lopen
            </Badge>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              Stop met zwoegen.
              <span className="block mt-2 text-gradient">
                Start met domineren.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Jij bent de expert in je vak. Wij bouwen het digitale imperium eromheen. Geen compromissen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="primary" size="xl">
                Activeer Mijn Groei Engine
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="relative z-10">
          {/* 2. The Digital Ceiling Section */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-4xl font-bold font-display">Het Digitale Plafond: Waarom Uitmuntendheid Alleen Niet Genoeg Is</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">Je bent een expert, maar wordt tegengehouden door randzaken. Herkenbaar?</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
                  <div className="glass-effect p-8 rounded-lg border border-red-500/30">
                    <h3 className="text-2xl font-bold mb-6 text-red-400 flex items-center"><TrendingDown className="mr-3" /> De Zwoeger</h3>
                    <div className="space-y-4 text-gray-300">
                      <p className="flex items-start"><Clock className="h-5 w-5 mr-3 mt-1 text-red-400" /> <strong>Tijdverspilling:</strong> Uren kwijt aan website-updates, mailproblemen en marketing die niets oplevert.</p>
                      <p className="flex items-start"><EyeOff className="h-5 w-5 mr-3 mt-1 text-red-400" /> <strong>Onzichtbaarheid:</strong> Potentiële klanten kunnen je online niet vinden, waardoor je omzet misloopt.</p>
                      <p className="flex items-start"><ServerCrash className="h-5 w-5 mr-3 mt-1 text-red-400" /> <strong>Technostress:</strong> Constant zorgen over beveiliging, backups en of alles wel goed werkt.</p>
                    </div>
                  </div>
                  <div className="glass-effect p-8 rounded-lg border border-quantum-green/30 bg-quantum-green/5">
                    <h3 className="text-2xl font-bold mb-6 text-quantum-green flex items-center"><TrendingUp className="mr-3" /> De Domineerder</h3>
                    <div className="space-y-4 text-gray-300">
                      <p className="flex items-start"><Target className="h-5 w-5 mr-3 mt-1 text-quantum-green" /> <strong>Maximale Focus:</strong> 100% van je tijd en energie gaat naar je klanten en je vak.</p>
                      <p className="flex items-start"><Award className="h-5 w-5 mr-3 mt-1 text-quantum-green" /> <strong>Marktautoriteit:</strong> Je wordt gezien als dé expert in jouw regio door een professionele online aanwezigheid.</p>
                      <p className="flex items-start"><ShieldCheck className="h-5 w-5 mr-3 mt-1 text-quantum-green" /> <strong>Totale Gemoedsrust:</strong> De zekerheid dat je digitale operatie een onstopbare groeimachine is.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 3. The Digital Autonomy Platform Section */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <Badge className="mb-4">Het Antwoord</Badge>
                  <h2 className="text-4xl font-bold font-display">Het Digital Autonomy Platform</h2>
                  <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">Geen losse diensten, maar één geïntegreerd platform dat voor je werkt. Dit is jouw arsenaal.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto text-left">
                  <FeatureCard icon={Briefcase} title="Uw Digitale Vesting" features={[
                    "Conversiegericht Design: Gebouwd om bezoekers om te zetten in klanten.",
                    "Sub-seconde Laadtijden: Geoptimaliseerd voor Google Core Web Vitals.",
                    "Onbreekbare Beveiliging: 24/7 monitoring en proactieve verdediging.",
                    "Onbeperkte Schaalbaarheid: Klaar voor uw groei, nog voordat u het zelf bent.",
                    "Schema-Verrijkt: Voor maximale zichtbaarheid in zoekmachines."
                  ]}/>
                  <FeatureCard icon={ShieldCheck} title="Uw Operationele Ruggegraat" features={[
                    "Enterprise-Grade E-mail: Office 365, de standaard voor professionals.",
                    "Automatische Backups: Uw levenswerk, elke dag veiliggesteld.",
                    "Gegarandeerde Uptime: Altijd online, altijd bereikbaar.",
                    "Persoonlijke Tech-Conciërge: Eén direct nummer voor al uw vragen.",
                  ]}/>
                  <FeatureCard icon={BarChart2} title="Uw Klantenmagneet" features={[
                    "Hyperlokale SEO Dominantie: Word de onbetwiste nummer één in uw regio.",
                    "Leadgeneratie Systeem: Een voorspelbare stroom van gekwalificeerde aanvragen.",
                    "Reputatie Management: Bouw en bewaak een 5-sterren online reputatie.",
                    "Data-Gedreven Inzichten: Maandelijkse rapportages die vooruitgang tonen.",
                  ]}/>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 4. Social Proof Section */}
          <ScrollTrigger>
            <section className="py-20 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="glass-effect p-8 md:p-12 rounded-lg max-w-4xl mx-auto text-center border border-quantum-purple/30">
                  <p className="text-2xl font-display text-gray-300 mb-6">"Dit is meer dan een dienst, het is een partnerschap. Mijn bedrijf transformeerde van onzichtbaar naar de meest gevraagde expert in mijn regio. De investering betaalde zichzelf binnen twee maanden terug."</p>
                  <p className="font-bold text-lg text-gradient">Jeroen van der Meer</p>
                  <p className="text-gray-400">Financieel Adviseur</p>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 5. Investment Section: The ROI Engine */}
          <ScrollTrigger>
            <section className="py-20 bg-cyber-dark/50 border-t border-cyber-light/20">
              <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold font-display mb-4">Uw ROI Engine</h2>
                  <p className="text-lg text-gray-400 mt-4 mb-8">Dit is geen kostenpost. Dit is de meest rendabele investering in de groei van uw bedrijf. Eén nieuwe klant dekt vaak de investering voor een heel jaar.</p>
                  
                  <Card className="glass-effect inline-block p-8 rounded-lg border border-quantum-green/30 text-left w-full max-w-md">
                    <CardHeader>
                      <CardTitle className="text-2xl font-display flex justify-between items-center">
                        <span>Digital Autonomy Platform</span>
                        <span className="text-gradient text-3xl">€149</span>
                      </CardTitle>
                      <p className="text-gray-400">per maand, maandelijks opzegbaar</p>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-gray-300 font-bold">Het complete platform, inclusief:</p>
                      <ul className="space-y-2 text-gray-400">
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-quantum-green mr-2" /> Digitale Vesting (Website & Hosting)</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-quantum-green mr-2" /> Operationele Ruggegraat (IT & E-mail)</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-quantum-green mr-2" /> Klantenmagneet (Marketing & SEO)</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-quantum-green mr-2" /> Persoonlijke Tech-Conciërge</li>
                        <li className="flex items-center"><CheckCircle className="h-5 w-5 text-quantum-green mr-2" /> Maandelijkse Groei-Rapportage</li>
                      </ul>
                      <Button variant="secondary" size="lg" className="w-full mt-6">
                        Plan een Strategie-Sessie
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>
          </ScrollTrigger>

          {/* 6. FAQ Section */}
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

          {/* 7. Centralized CTA */}
          <ScrollTrigger>
            <CTAPortal
              title="Klaar om te domineren?"
              description="Laten we in een vrijblijvende strategie-sessie van 30 minuten jouw groeipotentieel in kaart brengen. Geen verkooppraatje, maar pure strategie."
              buttonText="Plan Mijn Strategie-Sessie"
            />
          </ScrollTrigger>
        </div>
    </div>
  )
}