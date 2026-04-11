'use client'

import HeroVisual from '@/components/ui/HeroVisual'
import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Code2, CheckCircle2, ArrowRight, Zap
} from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { developmentServices, whyCustomDev, technologies, processSteps } from '@/lib/data/development'
import { serviceColors, type ServiceColorKey } from '@/lib/colors'
// ============================================================================
// COMPONENTS
// ============================================================================

const ServiceCard = ({ service, index }: { service: typeof developmentServices[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <article className={`glass-effect p-6 lg:p-8 rounded-2xl h-full border ${serviceColors[service.color as ServiceColorKey].border} ${serviceColors[service.color as ServiceColorKey].borderHover} transition-all group flex flex-col`}>
      <div className={`w-14 h-14 rounded-2xl ${serviceColors[service.color as ServiceColorKey].bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        <service.icon className={`w-7 h-7 ${serviceColors[service.color as ServiceColorKey].text}`} />
      </div>

      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
      <p className="text-slate-500 mb-6">{service.description}</p>

      <ul className="space-y-2 mb-6 flex-grow">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 className={`w-4 h-4 ${serviceColors[service.color as ServiceColorKey].text} flex-shrink-0`} />
            {feature}
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${serviceColors[service.color as ServiceColorKey].bg} hover:${serviceColors[service.color as ServiceColorKey].bgHover} ${serviceColors[service.color as ServiceColorKey].text} border ${serviceColors[service.color as ServiceColorKey].btnBorder}`}
        asChild
      >
        <Link href={service.link}>
          {service.cta}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Link>
      </Button>
    </article>
  </ScrollTrigger>
)

const WhyUsCard = ({ item, index }: { item: typeof whyCustomDev[0], index: number }) => (
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
        <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  </ScrollTrigger>
)

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function DevelopmentPageClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center text-white" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-[#0B1121] to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-blue/15 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content - Linker kolom */}
            <m.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-white/[0.06] text-slate-300 border-white/[0.08]">
                <Code2 className="w-4 h-4 mr-2 inline" />
                Web Development
              </Badge>

              <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Websites &{' '}
                <span className="block text-gradient mt-2">
                  Webapplicaties
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                <strong className="text-white">Custom development</strong> voor bedrijven die het verschil willen maken.
                Geen templates, geen compromissen - alleen <strong className="text-white">maatwerk</strong> dat resultaat oplevert.
              </p>

              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Professionele websites die converteren</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Webapplicaties op maat voor uw processen</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>E-commerce oplossingen die verkopen</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Binnen 24 uur gratis demo</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-violet to-primary-blue hover:opacity-90 shadow-lg shadow-primary-violet/25"
                  asChild
                >
                  <Link href="/demo">
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
              <HeroVisual variant="development" />

              {/* Floating cards - hidden on mobile */}
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden md:block absolute bottom-8 left-4 glass-effect-dark px-4 py-3 rounded-xl border border-primary-emerald/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-emerald/20 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-primary-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Performance</p>
                    <p className="text-lg font-bold">Razendsnel</p>
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
                    <Code2 className="w-5 h-5 text-primary-violet" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Code</p>
                    <p className="text-lg font-bold">100% Custom</p>
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
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-primary-violet/5 via-transparent to-primary-blue/5 border border-slate-200">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary-violet/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary-blue/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  Web Development die het <span className="text-gradient">verschil maakt</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Wij geloven niet in templates en standaard oplossingen. Elk bedrijf is uniek en verdient een website of applicatie die dat weerspiegelt.
                  Onze <strong className="text-slate-600">custom development</strong> aanpak levert websites die niet alleen mooi zijn, maar ook
                  <strong className="text-slate-600"> razendsnel</strong>, <strong className="text-slate-600">veilig</strong> en <strong className="text-slate-600">schaalbaar</strong>.
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
              <Badge className="mb-4">Onze Development Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Van concept tot <span className="text-gradient">lancering</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Of u nu een website, webapplicatie of webshop nodig heeft - wij bouwen het op maat voor uw specifieke situatie.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            {developmentServices.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== WAAROM CUSTOM ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-primary-violet/10 bg-gradient-to-b from-primary-violet/5 to-transparent">
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-primary-violet/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-primary-emerald/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Custom Development</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Geen templates, geen <span className="text-gradient">compromissen</span>
                  </h2>
                  <p className="text-slate-500 max-w-2xl mx-auto">
                    Template websites zijn traag, onveilig en zien er allemaal hetzelfde uit. Wij bouwen alles vanaf scratch voor optimale prestaties.
                  </p>
                </header>
              </ScrollTrigger>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyCustomDev.map((item, index) => (
                  <WhyUsCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TECHNOLOGIEËN ==================== */}
      <section className="py-24 bg-slate-50" aria-labelledby="tech-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Onze Stack</Badge>
              <h2 id="tech-title" className="text-3xl md:text-4xl font-bold mb-4">
                Moderne <span className="text-gradient">technologieën</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We werken met de nieuwste en beste technologieën voor optimale performance en developer experience.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <ScrollTrigger key={index} delay={index * 0.05}>
                <div className="glass-effect p-4 rounded-xl border border-slate-200 hover:border-primary-violet/30 transition-all text-center">
                  <p className="font-bold text-slate-900 mb-1">{tech.name}</p>
                  <p className="text-xs text-slate-400">{tech.description}</p>
                </div>
              </ScrollTrigger>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== HOE HET WERKT ==================== */}
      <section className="py-24" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary-violet to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Ons Proces</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van idee naar <span className="text-gradient">realiteit</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                      Een bewezen proces dat zorgt voor succesvolle projecten.
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

      {/* ==================== CTA ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-violet/10 via-transparent to-primary-blue/10" />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-primary-violet/20">
              <Badge className="mb-4 sm:mb-6 bg-primary-emerald/20 text-primary-emerald border-primary-emerald/30">
                Gratis & Vrijblijvend
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Klaar voor een website die{' '}
                <span className="text-gradient">écht werkt?</span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-500 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis adviesgesprek. We bespreken uw wensen en adviseren de beste aanpak voor uw project.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-violet to-primary-blue hover:opacity-90 shadow-lg shadow-primary-violet/25 text-lg px-8"
                  asChild
                >
                  <Link href="/demo">
                    Start Uw Project
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
