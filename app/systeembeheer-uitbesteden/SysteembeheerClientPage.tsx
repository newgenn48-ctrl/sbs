'use client'

import HeroVisual from '@/components/ui/HeroVisual'
import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FAQItem } from '@/components/ui/FAQItem'
import {
  Server, CheckCircle2, ArrowRight,
  Clock, Shield, Database, Lock,
  FileCheck, ShieldCheck, BookOpen
} from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { services, whyChooseUs, processSteps, faqs } from '@/lib/data/systeembeheer'
import { serviceColors, type ServiceColorKey } from '@/lib/colors'

// SupportNexus - servers, netwerk switch, WiFi, backup
// ============================================================================
// COMPONENTS
// ============================================================================

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <article className={`glass-effect p-5 sm:p-6 rounded-2xl h-full border ${serviceColors[service.color as ServiceColorKey].border} ${serviceColors[service.color as ServiceColorKey].borderHover} transition-all group`}>
      <div className={`w-12 h-12 rounded-xl ${serviceColors[service.color as ServiceColorKey].bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <service.icon className={`w-6 h-6 ${serviceColors[service.color as ServiceColorKey].text}`} />
      </div>

      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-slate-500 mb-4 text-sm">{service.description}</p>

      <ul className="space-y-2">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 className={`w-4 h-4 ${serviceColors[service.color as ServiceColorKey].text} flex-shrink-0`} />
            {feature}
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

export default function SysteembeheerClientPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ==================== HERO (2 kolommen zoals IT Support) ==================== */}
      <section className="relative min-h-screen flex items-center text-white" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-[#0B1121] to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-blue/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content - Linker kolom */}
            <m.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-primary-blue/10 text-primary-blue border-primary-blue/30">
                <Server className="w-4 h-4 mr-2 inline" />
                Systeembeheer Uitbesteden
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Systeembeheer{' '}
                <span className="block text-gradient mt-2">
                  Uitbesteden
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                Uw <strong className="text-white">servers</strong>, <strong className="text-white">netwerk</strong> en <strong className="text-white">infrastructuur</strong> in betrouwbare handen.
                Van serverbeheer tot vergaderruimtes en alarmsystemen - wij regelen het.
              </p>

              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Servers, netwerk, WiFi en backups</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Vergaderruimtes met video conferencing</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Alarm, camera's en toegangscontrole</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <Clock className="w-4 h-4 text-primary-blue" />
                  <span>Snelle responstijd</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Shield className="w-4 h-4 text-primary-emerald" />
                  <span>Flexibele SLA's</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-blue to-primary-violet hover:opacity-90 shadow-lg shadow-primary-blue/25"
                  asChild
                >
                  <Link href="/contact?service=systeembeheer">
                    Gratis Adviesgesprek
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue/20 via-primary-violet/10 to-transparent blur-3xl rounded-full" />

              <HeroVisual variant="systeembeheer" />

              {/* Floating cards - hidden on mobile */}
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden md:block absolute bottom-8 left-4 glass-effect-dark px-4 py-3 rounded-xl border border-primary-emerald/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-emerald/20 flex items-center justify-center">
                    <Database className="w-5 h-5 text-primary-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Backups</p>
                    <p className="text-lg font-bold">Veilig</p>
                  </div>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="hidden md:block absolute top-8 right-4 glass-effect-dark px-4 py-3 rounded-xl border border-primary-blue/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-blue/20 flex items-center justify-center">
                    <Lock className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Infrastructuur</p>
                    <p className="text-lg font-bold">Beveiligd</p>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* ==================== SEO INTRO ==================== */}
      <section className="py-16" aria-labelledby="seo-intro-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-primary-blue/5 via-transparent to-primary-violet/5 border border-slate-200">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary-blue/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary-violet/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  Complete IT-infrastructuur voor het <span className="text-gradient">MKB</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Uw servers, netwerk en backups zijn de ruggengraat van uw bedrijf. Maar ook uw vergaderruimtes, telefonie en beveiliging moeten goed werken.
                  Wij nemen het <strong className="text-slate-600">systeembeheer</strong> uit handen - inclusief <strong className="text-slate-600">meeting rooms</strong> en <strong className="text-slate-600">beveiligingssystemen</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN ==================== */}
      <section className="py-24 bg-slate-50" aria-labelledby="diensten-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Onze Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Compleet <span className="text-gradient">Systeembeheer</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Van servers tot vergaderruimtes, van backups tot alarmsystemen. Alles wat u nodig heeft voor een goed werkende IT-infrastructuur.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WAAROM WIJ ==================== */}
      <section className="py-24 bg-slate-50" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-primary-blue/10 bg-gradient-to-b from-primary-blue/5 to-transparent">
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-primary-blue/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-primary-emerald/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Systeembeheer met een <span className="text-gradient">persoonlijke aanpak</span>
                  </h2>
                  <p className="text-slate-500 max-w-2xl mx-auto">
                    Geen anoniem supportnummer. Bij ons krijgt u een vaste specialist die uw infrastructuur door en door kent.
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

      {/* ==================== HOE HET WERKT ==================== */}
      <section className="py-24" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary-blue to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Zo Werkt Het</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van inventarisatie naar <span className="text-gradient">stabiel beheer</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                      Een helder proces zonder verrassingen.
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

      {/* ==================== TRUST INDICATORS ==================== */}
      <section className="py-24 bg-slate-50" aria-labelledby="trust-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollTrigger>
                <div>
                  <Badge className="mb-4 bg-primary-emerald/10 text-primary-emerald border-primary-emerald/30">
                    <ShieldCheck className="w-3 h-3 mr-2" />
                    Betrouwbaar & Transparant
                  </Badge>
                  <h2 id="trust-title" className="text-3xl md:text-4xl font-bold mb-6">
                    Wat u van ons mag <span className="text-gradient">verwachten</span>
                  </h2>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Geen loze beloftes, maar concrete afspraken. Wij documenteren alles, communiceren helder en zijn er wanneer u ons nodig heeft.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-100 border border-slate-100">
                      <div className="w-10 h-10 rounded-lg bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5 text-primary-emerald" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">AVG-compliant werken</h3>
                        <p className="text-sm text-slate-500">Veilige omgang met uw bedrijfsgegevens</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-100 border border-slate-100">
                      <div className="w-10 h-10 rounded-lg bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                        <FileCheck className="w-5 h-5 text-primary-emerald" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">SLA op maat</h3>
                        <p className="text-sm text-slate-500">Duidelijke afspraken over responstijden</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-100 border border-slate-100">
                      <div className="w-10 h-10 rounded-lg bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-primary-emerald" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base mb-1">Volledige documentatie</h3>
                        <p className="text-sm text-slate-500">Alle wijzigingen worden vastgelegd</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <div className="glass-effect p-8 rounded-2xl border border-primary-emerald/20">
                  <h3 className="text-xl font-bold mb-6 text-center">Geen verrassingen</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Transparante tarieven - u weet vooraf wat het kost</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Maandelijks opzegbaar - geen jarenlange contracten</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Heldere communicatie over wat we doen</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600">Eerlijk advies - ook als iets niet nodig is</span>
                    </li>
                  </ul>
                </div>
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
                Vragen over <span className="text-gradient">systeembeheer</span>?
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
                Systeembeheer{' '}
                <span className="text-gradient">uitbesteden?</span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-500 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis adviesgesprek. We bespreken uw situatie en adviseren wat voor u de beste aanpak is.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-blue to-primary-violet hover:opacity-90 shadow-lg shadow-primary-blue/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=systeembeheer">
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
