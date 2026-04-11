'use client'

import HeroVisual from '@/components/ui/HeroVisual'
import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Bot, CheckCircle2, ArrowRight,
  MessageSquare, Clock, Users, Zap,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { FAQItem } from '@/components/ui/FAQItem'
import { services, whyChatbots, processSteps, faqs } from '@/lib/data/chatbots'
import { serviceColors } from '@/lib/colors'
// ============================================================================
// COMPONENTS
// ============================================================================

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <article className={`glass-effect p-5 sm:p-6 rounded-2xl h-full border ${serviceColors[service.color].border} ${serviceColors[service.color].borderHover} transition-all group`}>
      <div className={`w-12 h-12 rounded-xl ${serviceColors[service.color].bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <service.icon className={`w-6 h-6 ${serviceColors[service.color].text}`} />
      </div>

      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-slate-500 mb-4 text-sm">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 className={`w-4 h-4 ${serviceColors[service.color].text} flex-shrink-0`} />
            {feature}
          </li>
        ))}
      </ul>
    </article>
  </ScrollTrigger>
)

const WhyCard = ({ item, index }: { item: typeof whyChatbots[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-slate-200 hover:border-primary-violet/30 transition-all h-full">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-violet/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-violet" />
        </div>
        <div className="text-right">
          <p className="text-xl sm:text-2xl font-bold text-primary-emerald">{item.stat}</p>
          <p className="text-xs text-slate-400">{item.statLabel}</p>
        </div>
      </div>
      <h3 className="text-base sm:text-lg font-bold mb-2">{item.title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
    </div>
  </ScrollTrigger>
)

const ProcessStepCard = ({ step, index }: { step: typeof processSteps[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="relative">
      {index < 3 && (
        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-violet/30 to-transparent z-0" />
      )}

      <div className="relative z-10 text-center">
        <div className="w-20 h-20 rounded-full bg-slate-50 border-2 border-primary-violet/30 flex items-center justify-center mx-auto mb-4 relative">
          <step.icon className="w-8 h-8 text-primary-violet" />
          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-violet text-sm font-bold flex items-center justify-center text-white">
            {step.step}
          </span>
        </div>
        <h3 className="text-lg font-bold mb-2">{step.title}</h3>
        <p className="text-slate-500 text-sm max-w-[200px] mx-auto">{step.description}</p>
      </div>
    </div>
  </ScrollTrigger>
)

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function ChatbotsPageClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center text-white" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-[#0B1121] to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-blue/15 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <m.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-primary-violet/10 text-primary-violet border-primary-violet/30">
                <Bot className="w-4 h-4 mr-2 inline" />
                AI Chatbots
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                AI Chatbot voor{' '}
                <span className="block text-gradient mt-2">
                  24/7 Klantenservice
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                <strong className="text-white">Intelligente chatbots</strong> die vragen beantwoorden, leads kwalificeren
                en afspraken inplannen. <strong className="text-white">24 uur per dag, 7 dagen per week</strong>.
              </p>

              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>80% van de vragen automatisch beantwoord</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Naadloze overdracht naar uw team</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Integratie met uw CRM en systemen</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-violet to-primary-blue hover:opacity-90 shadow-lg shadow-primary-violet/25"
                  asChild
                >
                  <Link href="/contact?service=chatbot">
                    Gratis Demo Aanvragen
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </m.div>

            {/* 3D Visualization - Rechter kolom */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              aria-hidden="true"
            >
              <HeroVisual variant="chatbots" />

              {/* Floating cards - hidden on mobile */}
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden md:block absolute bottom-8 left-4 glass-effect-dark px-4 py-3 rounded-xl border border-primary-emerald/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-emerald/20 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Beschikbaarheid</p>
                    <p className="text-lg font-bold">24/7 Online</p>
                  </div>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="hidden md:block absolute top-8 right-4 glass-effect-dark px-4 py-3 rounded-xl border border-primary-violet/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-violet/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-violet" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Reactietijd</p>
                    <p className="text-lg font-bold">&lt;1 seconde</p>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* ==================== AFBEELDING SECTIE ==================== */}
      <section className="py-24 bg-slate-50/50">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <ScrollTrigger>
                <div className="relative rounded-2xl overflow-hidden border border-primary-violet/20 shadow-2xl">
                  <Image
                    src="/ai-chatbots.webp"
                    alt="AI Chatbot conversatie interface"
                    width={1200}
                    height={800}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="w-full h-auto"
                  />
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <div>
                  <Badge className="mb-4 bg-primary-violet/10 text-primary-violet border-primary-violet/30">
                    <Bot className="w-4 h-4 mr-2" />
                    24/7 Beschikbaar
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Uw digitale <span className="text-gradient">medewerker</span>
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Een AI chatbot die nooit slaapt, altijd vriendelijk is en direct antwoord geeft. Ontlast uw supportteam en verhoog de klanttevredenheid.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-violet/10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-primary-violet" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Directe antwoorden</p>
                        <p className="text-sm text-slate-500">Geen wachttijden meer</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-primary-blue" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Schaalt mee</p>
                        <p className="text-sm text-slate-500">100 of 10.000 gesprekken tegelijk</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-primary-emerald" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Leert continu</p>
                        <p className="text-sm text-slate-500">Wordt elke dag slimmer</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN ==================== */}
      <section className="py-24" aria-labelledby="diensten-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Chatbot Mogelijkheden</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Wat kan een <span className="text-gradient">AI Chatbot</span> voor u doen?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Van klantenservice tot lead generatie - ontdek alle mogelijkheden van onze AI chatbots.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WAAROM CHATBOTS ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-primary-violet/10 bg-gradient-to-b from-primary-violet/5 to-transparent">
              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom AI Chatbots</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    De voordelen van een <span className="text-gradient">AI Chatbot</span>
                  </h2>
                </header>
              </ScrollTrigger>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyChatbots.map((item, index) => (
                  <WhyCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOE HET WERKT ==================== */}
      <section className="py-24 bg-slate-50" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <ScrollTrigger>
              <header className="text-center mb-16">
                <Badge className="mb-4">Ons Proces</Badge>
                <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                  Van concept naar <span className="text-gradient">werkende chatbot</span>
                </h2>
              </header>
            </ScrollTrigger>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <ProcessStepCard key={index} step={step} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24" aria-labelledby="faq-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Vragen over <span className="text-gradient">AI Chatbots</span>?
              </h2>
            </header>
          </ScrollTrigger>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} color="violet" />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/10 via-transparent to-primary-blue/10" />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-primary-violet/20">
              <Badge className="mb-4 sm:mb-6 bg-primary-emerald/20 text-primary-emerald border-primary-emerald/30">
                Gratis Demo
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar voor{' '}
                <span className="text-gradient">24/7 service?</span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-500 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Vraag een gratis demo aan en zie hoe onze chatbot uw klantvragen beantwoordt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-violet to-primary-blue hover:opacity-90 shadow-lg shadow-primary-violet/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=chatbot">
                    Vraag Gratis Demo
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
                  Geen verplichtingen
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
                  Demo binnen 48 uur
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
                  Gepersonaliseerd advies
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
