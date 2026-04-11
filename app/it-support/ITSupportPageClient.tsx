'use client'

import HeroVisual from '@/components/ui/HeroVisual'
import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Server, CheckCircle2, ArrowRight,
  Clock, Wrench, UserCheck,
  CalendarCheck, Target,
  Gauge, HeartHandshake, Award, HardHat,
  Headphones, Star, Activity, Shield,
  ShieldCheck
} from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FAQItem } from '@/components/ui/FAQItem'
import {
  colorClasses, itCategories, supportModels, trustIndicators,
  whyChooseUs, processSteps, faqs
} from '@/lib/data/it-support'
import type { ColorKey } from '@/lib/data/it-support'

// Deferred Canvas for better LCP
// ============================================================================
// COMPONENTS
// ============================================================================

const CategoryCard = ({ category, index }: { category: typeof itCategories[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <article className={`glass-effect p-5 sm:p-6 lg:p-8 rounded-2xl h-full border ${colorClasses[category.color].border} ${colorClasses[category.color].borderHover} transition-all group flex flex-col`}>
      <div className={`w-14 h-14 rounded-2xl ${colorClasses[category.color].bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <category.icon className={`w-7 h-7 ${colorClasses[category.color].text}`} />
      </div>

      <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
      <p className="text-slate-500 mb-6">{category.description}</p>

      <ul className="space-y-2 mb-6 flex-grow">
        {category.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 className={`w-4 h-4 ${colorClasses[category.color].text} flex-shrink-0`} />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${colorClasses[category.color].bg} ${colorClasses[category.color].bgHover} ${colorClasses[category.color].text} border ${colorClasses[category.color].btnBorder}`}
        asChild
      >
        <Link href={category.link}>
          {category.cta}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </Button>
    </article>
  </ScrollTrigger>
)

const SupportModelCard = ({ model, index }: { model: typeof supportModels[0], index: number }) => (
  <ScrollTrigger delay={index * 0.15}>
    <article className={`glass-effect p-5 sm:p-6 lg:p-8 rounded-2xl h-full border ${colorClasses[model.color].border} ${colorClasses[model.color].borderHover} transition-all group`}>
      <div className={`w-14 h-14 rounded-2xl ${colorClasses[model.color].bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <model.icon className={`w-7 h-7 ${colorClasses[model.color].text}`} />
      </div>

      <h3 className="text-2xl font-bold mb-3">{model.title}</h3>
      <p className="text-slate-500 mb-6">{model.description}</p>

      <ul className="space-y-3">
        {model.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-sm">
            <CheckCircle2 className={`w-4 h-4 ${colorClasses[model.color].text} flex-shrink-0`} />
            <span className="text-slate-600">{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  </ScrollTrigger>
)

const WhyUsCard = ({ item, index }: { item: typeof whyChooseUs[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-slate-200 hover:border-primary-blue/30 transition-all h-full">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue" />
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
        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-blue/30 to-transparent z-0" />
      )}

      <div className="relative z-10 text-center">
        <div className="w-20 h-20 rounded-full bg-slate-50 border-2 border-primary-blue/30 flex items-center justify-center mx-auto mb-4 relative">
          <step.icon className="w-8 h-8 text-primary-blue" />
          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-blue text-sm font-bold flex items-center justify-center text-white">
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

export default function ITSupportPageClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center text-white" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-[#0B1121] to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-blue/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">

            {/* Content */}
            <m.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <Badge className="mb-6 px-4 py-2 bg-primary-blue/10 text-primary-blue border-primary-blue/30">
                <Server className="w-4 h-4 mr-2 inline" />
                IT Support & Beheer
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                IT Support voor{' '}
                <span className="block text-gradient mt-2">
                  het MKB
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                Complete <strong className="text-white">IT-ondersteuning</strong>, <strong className="text-white">werkplekbeheer</strong> en <strong className="text-white">systeembeheer</strong> voor het MKB.
                Wij helpen bedrijven met het oplossen van IT-problemen, het beheren van systemen en het veilig en efficiënt maken van de gehele IT-omgeving.
              </p>

              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span><strong>Remote IT support</strong> of on-site ondersteuning op locatie</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Geschikt voor ZZP tot 150+ medewerkers</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Flexibele SLA's - <strong>IT beheer uitbesteden</strong> op maat</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock className="w-4 h-4 text-primary-blue" />
                  <span>Snelle responstijd</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span>Persoonlijke aanpak</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-blue to-primary-violet hover:opacity-90 shadow-lg shadow-primary-blue/25"
                  asChild
                >
                  <Link href="/contact?service=it-support">
                    Gratis Adviesgesprek
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </m.div>

            {/* 3D Visualization */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:h-[600px] lg:-mr-8 xl:-mr-12 2xl:-mr-20"
              aria-hidden="true"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 via-primary-violet/10 to-transparent blur-3xl rounded-full" />

              <HeroVisual variant="it-support" />

              {/* Floating cards */}
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden lg:block absolute bottom-8 left-4 glass-effect-dark px-4 py-3 rounded-xl border border-primary-emerald/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-emerald/20 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-primary-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Support Status</p>
                    <p className="text-lg font-bold">Beschikbaar</p>
                  </div>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="hidden lg:block absolute top-8 right-4 glass-effect-dark px-4 py-3 rounded-xl border border-primary-blue/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-blue/20 flex items-center justify-center">
                    <Activity className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Systemen</p>
                    <p className="text-lg font-bold">Beveiligd</p>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* ==================== SEO INTRO SECTIE ==================== */}
      <section className="py-16 relative" aria-labelledby="seo-intro-title">
        <div className="absolute inset-0 bg-white" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-primary-blue/5 via-transparent to-primary-violet/5 border border-slate-200">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary-blue/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary-violet/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  IT-support voor het MKB – complete <span className="text-gradient">IT-ondersteuning</span>, werkplekbeheer en systeembeheer
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Wij helpen bedrijven met het oplossen van IT-problemen, het beheren van systemen en het veilig en efficiënt maken van de gehele IT-omgeving.
                  Of u nu zoekt naar <strong className="text-slate-600">IT support uitbesteden</strong>, professioneel <strong className="text-slate-600">IT beheer</strong> of betrouwbare <strong className="text-slate-600">IT ondersteuning</strong> voor uw MKB-bedrijf –
                  Start Beheer is uw partner voor alle IT-zaken.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== IT DIENSTEN ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="diensten-title">
        {/* Modern mesh gradient background */}
        <div className="absolute inset-0 bg-slate-50/80" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-blue/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-violet/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-emerald/5 rounded-full blur-[150px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Onze IT Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Complete <span className="text-gradient">IT-ondersteuning</span> voor uw bedrijf
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Van werkplekbeheer tot cybersecurity. Kies de dienst die past bij uw behoefte, of combineer ze voor totale IT-ontzorging.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {itCategories.map((category, index) => (
              <CategoryCard key={index} category={category} index={index} />
            ))}
          </div>

          <ScrollTrigger>
            <div className="text-center mt-12">
              <p className="text-slate-500 mb-4">
                Niet zeker welke combinatie? Wij adviseren u graag.
              </p>
              <Button variant="outline" asChild>
                <Link href="/contact?service=it-advies">
                  Vraag Gratis Advies
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* ==================== VISUAL SECTIE MET FOTO ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-slate-50 to-white" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image - volledig zichtbaar */}
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-primary-blue/10">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue/20 via-primary-violet/20 to-primary-emerald/20 rounded-2xl blur-xl opacity-50" />
                  <div className="relative bg-slate-50 rounded-2xl overflow-hidden">
                    <Image
                      src="/IT Support.webp"
                      alt="IT Support team aan het werk"
                      width={1200}
                      height={800}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-auto"
                    />
                  </div>
                </div>

                {/* Floating badge */}
                <m.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute -bottom-4 -right-4 lg:-right-8"
                >
                  <div className="bg-slate-50/90 backdrop-blur-xl border border-primary-emerald/30 rounded-xl px-4 py-3 shadow-lg">
                    <p className="text-primary-emerald font-semibold text-lg">On-site</p>
                    <p className="text-slate-500 text-sm">& Remote</p>
                  </div>
                </m.div>
              </m.div>

              {/* Content */}
              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-4 px-4 py-2 bg-primary-blue/10 text-primary-blue border-primary-blue/30">
                  <Headphones className="w-4 h-4 mr-2 inline" />
                  Persoonlijke IT Support
                </Badge>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  <span className="text-slate-900">Uw IT, </span>
                  <span className="text-gradient">Onze Zorg</span>
                </h2>

                <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                  Geen wachtrijen of onpersoonlijke ticketsystemen. Bij Start Beheer krijgt u
                  direct contact met een ervaren IT-specialist die uw bedrijf kent.
                </p>

                <p className="text-slate-500 mb-8 leading-relaxed">
                  Of het nu gaat om een haperende computer, een netwerk storing of strategisch
                  IT-advies - wij staan voor u klaar met snelle, persoonlijke ondersteuning.
                </p>

                {/* Quick features */}
                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Clock, text: 'Snelle responstijd' },
                    { icon: UserCheck, text: 'Vaste contactpersoon' },
                    { icon: Wrench, text: 'Remote & on-site support' },
                    { icon: Shield, text: 'Proactief beheer' },
                  ].map((item, index) => (
                    <m.div
                      key={item.text}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary-blue" />
                      </div>
                      <span className="text-slate-600 text-sm">{item.text}</span>
                    </m.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-blue to-primary-violet hover:scale-105 transition-transform"
                  asChild
                >
                  <Link href="/contact">
                    Neem Contact Op
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </m.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SUPPORT MODELLEN ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="support-title">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-emerald/8 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary-blue/8 rounded-full blur-[100px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Flexibele Ondersteuning</Badge>
              <h2 id="support-title" className="text-3xl md:text-4xl font-bold mb-4">
                IT Support op <span className="text-gradient">úw manier</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Kies hoe u ondersteuning wilt ontvangen. Remote IT support, on-site ondersteuning, of een vaste IT-dag - alles is mogelijk.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {supportModels.map((model, index) => (
              <SupportModelCard key={index} model={model} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== TRUST / BETROUWBAARHEID ==================== */}
      <section className="py-24 relative" aria-labelledby="trust-title">
        {/* Subtle accent */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-emerald/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-emerald/20 to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollTrigger>
                <div>
                  <Badge className="mb-4 bg-primary-emerald/10 text-primary-emerald border-primary-emerald/30">
                    <ShieldCheck className="w-3 h-3 mr-2" />
                    Betrouwbaar & Veilig
                  </Badge>
                  <h2 id="trust-title" className="text-3xl md:text-4xl font-bold mb-6">
                    Betrouwbare <span className="text-gradient">IT-partner</span> voor het MKB
                  </h2>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Wij werken volgens AVG-richtlijnen, beheren veilige omgevingen en documenteren alle wijzigingen zodat u altijd inzicht heeft in uw IT-omgeving.
                    Bij Start Beheer staat betrouwbaarheid en transparantie centraal.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {trustIndicators.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-slate-100 border border-slate-100">
                        <div className="w-10 h-10 rounded-lg bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary-emerald" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base mb-1">{item.title}</h3>
                          <p className="text-sm text-slate-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <div className="glass-effect p-8 rounded-2xl border border-primary-emerald/20">
                  <h3 className="text-xl font-bold mb-6 text-center">Wat u van ons mag verwachten</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Volledige transparantie over werkzaamheden en kosten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Heldere communicatie over wat we doen en waarom</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Duidelijke SLA met heldere afspraken</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Veilige omgang met uw bedrijfsgegevens (AVG)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Uitgebreide documentatie van uw IT-omgeving</span>
                    </li>
                  </ul>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== HOE HET WERKT ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="proces-title">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-slate-50/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-blue/5 via-transparent to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-blue/20 to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Container met top border accent */}
            <div className="relative">
              {/* Top gradient line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary-blue to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Zo Werkt Het</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van vraag naar <span className="text-gradient">oplossing</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                      Geen ingewikkelde procedures. U meldt het, wij lossen het op.
                    </p>
                  </header>
                </ScrollTrigger>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {processSteps.map((step, index) => (
                    <ProcessStepCard key={index} step={step} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== WAAROM WIJ ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="waarom-title">
        {/* Modern glow background */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-blue/5 rounded-full blur-[100px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            {/* Container met side accents */}
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-primary-blue/10 bg-gradient-to-b from-primary-blue/5 to-transparent">
              {/* Side accent lines */}
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-primary-blue/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-primary-emerald/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    IT Support met een <span className="text-gradient">persoonlijke touch</span>
                  </h2>
                  <p className="text-slate-500 max-w-2xl mx-auto">
                    Wij zijn geen anoniem callcenter. Bij ons krijgt u een vaste IT-specialist die uw bedrijf en systemen door en door kent.
                  </p>
                </header>
              </ScrollTrigger>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyChooseUs.map((item, index) => (
                  <WhyUsCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SLA & MAATWERK ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="sla-title">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white" />
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary-violet/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-primary-blue/8 rounded-full blur-[120px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollTrigger>
                <div>
                  <Badge className="mb-4">100% Flexibel</Badge>
                  <h2 id="sla-title" className="text-3xl md:text-4xl font-bold mb-6">
                    SLA en tarieven <span className="text-gradient">volledig op maat</span>
                  </h2>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Wij geloven niet in standaardpakketten die niet passen. Daarom stellen wij samen met u een Service Level Agreement op die aansluit bij úw bedrijf, úw budget en úw verwachtingen.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                        <Gauge className="w-5 h-5 text-primary-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Flexibele Responstijden</h3>
                        <p className="text-slate-500 text-sm">Van 4 uur tot next-business-day - u kiest wat bij u past.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                        <HeartHandshake className="w-5 h-5 text-primary-emerald" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Geen Lange Contracten</h3>
                        <p className="text-slate-500 text-sm">Maandelijks opzegbaar of strippenkaart - geen verplichtingen.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary-violet/10 flex items-center justify-center flex-shrink-0">
                        <Target className="w-5 h-5 text-primary-violet" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">Transparante Tarieven</h3>
                        <p className="text-slate-500 text-sm">U weet vooraf wat het kost. Geen verrassingen achteraf.</p>
                      </div>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary-blue to-primary-violet hover:opacity-90"
                    asChild
                  >
                    <Link href="/contact?service=it-support">
                      Vraag een Offerte Op Maat
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <aside className="glass-effect p-8 rounded-2xl border border-primary-blue/20">
                  <h3 className="text-xl font-bold mb-6 text-center">Voorbeelden van onze flexibiliteit</h3>

                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Award className="w-5 h-5 text-primary-blue" />
                        <h4 className="font-bold">Strippenkaart</h4>
                      </div>
                      <p className="text-slate-500 text-sm">Koop een bundel uren en gebruik ze wanneer nodig. Ideaal als u incidenteel support nodig heeft.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
                      <div className="flex items-center gap-3 mb-2">
                        <CalendarCheck className="w-5 h-5 text-primary-emerald" />
                        <h4 className="font-bold">Vast Uurtarief</h4>
                      </div>
                      <p className="text-slate-500 text-sm">Betaal per uur voor de support die u afneemt. Duidelijk en overzichtelijk.</p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-100 border border-slate-200">
                      <div className="flex items-center gap-3 mb-2">
                        <HardHat className="w-5 h-5 text-primary-violet" />
                        <h4 className="font-bold">Vast Maandbedrag</h4>
                      </div>
                      <p className="text-slate-500 text-sm">Voorspelbare kosten met onbeperkte support. U weet precies waar u aan toe bent.</p>
                    </div>
                  </div>
                </aside>
              </ScrollTrigger>
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
                Vragen over <span className="text-gradient">IT support</span>?
              </h2>
            </header>
          </ScrollTrigger>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} color="blue" />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-violet/10" />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-primary-blue/20">
              <Badge className="mb-4 sm:mb-6 bg-primary-emerald/20 text-primary-emerald border-primary-emerald/30">
                Gratis & Vrijblijvend
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Welke IT-oplossing past bij{' '}
                <span className="text-gradient">uw bedrijf?</span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-500 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis adviesgesprek. Samen bekijken we uw situatie en adviseren we de beste aanpak - zonder verplichtingen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-blue to-primary-violet hover:opacity-90 shadow-lg shadow-primary-blue/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=it-support">
                    Plan Gratis Adviesgesprek
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
                  Advies op maat
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
                  Reactie binnen 24 uur
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
