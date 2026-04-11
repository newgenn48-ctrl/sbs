'use client'

import HeroVisual from '@/components/ui/HeroVisual'
import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import {
  ArrowRight, CheckCircle2,
  User, Building2, TrendingUp
} from 'lucide-react'

import { FAQItem } from '@/components/ui/FAQItem'
import { targetGroups, services, processSteps, whyUs, faqs } from '@/lib/data/oplossingen'
import { serviceColors, type ServiceColorKey } from '@/lib/colors'
// ============================================================================
// COMPONENTS
// ============================================================================

const TargetGroupCard = ({ group, index }: { group: typeof targetGroups[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-6 sm:p-8 rounded-2xl h-full border border-slate-200 hover:border-primary-violet/40 transition-all">
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${serviceColors[group.color as ServiceColorKey].bg}`}>
          <group.icon className={`w-7 h-7 ${serviceColors[group.color as ServiceColorKey].text}`} />
        </div>
        <div>
          <h3 className="text-xl font-bold">{group.title}</h3>
          <p className="text-sm text-slate-400">{group.subtitle}</p>
        </div>
      </div>

      <p className="text-slate-500 mb-5">{group.description}</p>

      <ul className="space-y-2">
        {group.benefits.map((benefit, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 className="w-4 h-4 text-primary-emerald flex-shrink-0" />
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  </ScrollTrigger>
)

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-6 rounded-2xl h-full border border-primary-violet/20 hover:border-primary-violet/40 transition-all">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${serviceColors[service.color as ServiceColorKey].bg}`}>
        <service.icon className={`w-6 h-6 ${serviceColors[service.color as ServiceColorKey].text}`} />
      </div>

      <h3 className="text-lg font-bold mb-2">{service.title}</h3>
      <p className="text-slate-500 text-sm mb-4">{service.description}</p>

      <ul className="space-y-1.5">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
            <CheckCircle2 className="w-3 h-3 text-primary-emerald flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </ScrollTrigger>
)

const WhyUsCard = ({ item, index }: { item: typeof whyUs[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-5 sm:p-6 rounded-2xl border border-slate-200 hover:border-primary-emerald/30 transition-all h-full">
      <div className="w-12 h-12 rounded-xl bg-primary-emerald/10 flex items-center justify-center mb-4">
        <item.icon className="w-6 h-6 text-primary-emerald" />
      </div>
      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
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

export default function OplossingenClientPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center text-white" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-[#0B1121] to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-blue/15 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content */}
            <m.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-primary-violet/10 text-primary-violet border-primary-violet/30">
                <Building2 className="w-4 h-4 mr-2 inline" />
                Voor ZZP & MKB
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                IT die{' '}
                <span className="block text-gradient mt-2">
                  met u Meegroeit
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                Van ZZP'er tot MKB – <strong className="text-white">wij zijn uw digitale partner</strong>.
                IT, websites, marketing en automatisering onder één dak. Persoonlijk en schaalbaar.
              </p>

              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span><strong>Eén aanspreekpunt</strong> voor IT, websites én marketing</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span><strong>Schaalbare oplossingen</strong> die meegroeien met uw bedrijf</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span><strong>Persoonlijke aanpak</strong> – u bent geen nummertje</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-8 text-sm">
                <div className="flex items-center gap-2 text-slate-500">
                  <User className="w-4 h-4 text-primary-emerald" />
                  <span>ZZP</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <Building2 className="w-4 h-4 text-primary-violet" />
                  <span>MKB</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500">
                  <TrendingUp className="w-4 h-4 text-primary-blue" />
                  <span>Groeiend bedrijf</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-violet to-primary-blue hover:opacity-90 shadow-lg shadow-primary-violet/25"
                  asChild
                >
                  <Link href="/contact?service=oplossingen">
                    Vrijblijvend Kennismaken
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
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              aria-hidden="true"
            >
              <HeroVisual variant="oplossingen" />

              {/* Floating cards */}
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden md:block absolute bottom-8 left-4 glass-effect-dark px-4 py-3 rounded-xl border border-primary-emerald/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-emerald/20 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">ZZP'ers</p>
                    <p className="text-sm font-bold text-slate-900">Focus op uw vak</p>
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
                    <Building2 className="w-5 h-5 text-primary-violet" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">MKB</p>
                    <p className="text-sm font-bold text-slate-900">Schaalbaar groeien</p>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* ==================== DOELGROEPEN ==================== */}
      <section className="py-20" aria-labelledby="doelgroepen-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Voor Wie</Badge>
              <h2 id="doelgroepen-title" className="text-3xl md:text-4xl font-bold mb-4">
                Oplossingen voor <span className="text-gradient">elke ondernemer</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Of u nu alleen werkt of een team heeft – wij hebben de juiste oplossing voor uw situatie.
              </p>
            </header>
          </ScrollTrigger>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {targetGroups.map((group, index) => (
              <TargetGroupCard key={index} group={group} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN ==================== */}
      <section className="py-24" aria-labelledby="diensten-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Onze Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                IT, Marketing & meer onder <span className="text-gradient">één dak</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Van website en IT-support tot online marketing en AI. Wij regelen het zodat u kunt ondernemen.
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

      {/* ==================== WERKWIJZE ==================== */}
      <section className="py-24 bg-slate-50" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary-violet to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Onze Aanpak</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Zo werken wij <span className="text-gradient">samen</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                      Een persoonlijke aanpak van kennismaking tot doorlopende ondersteuning.
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

      {/* ==================== WAAROM START BEHEER ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-primary-violet/10 bg-gradient-to-b from-primary-violet/5 to-transparent">
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-primary-violet/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-primary-emerald/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Wij</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Uw <span className="text-gradient">digitale partner</span>
                  </h2>
                  <p className="text-slate-500 max-w-2xl mx-auto">
                    Wij zijn er voor ondernemers die willen focussen op waar ze goed in zijn.
                  </p>
                </header>
              </ScrollTrigger>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {whyUs.map((item, index) => (
                  <WhyUsCard key={index} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-24 bg-slate-50" aria-labelledby="faq-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Vragen over onze <span className="text-gradient">oplossingen</span>?
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
              <div className="w-16 h-16 rounded-full bg-primary-violet/10 flex items-center justify-center mx-auto mb-6">
                <Building2 className="w-8 h-8 text-primary-violet" />
              </div>

              <Badge className="mb-4 sm:mb-6 bg-primary-emerald/20 text-primary-emerald border-primary-emerald/30">
                Vrijblijvend Gesprek
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Laten we{' '}
                <span className="text-gradient">kennismaken</span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-500 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Vertel ons over uw bedrijf en ontdek hoe wij u kunnen helpen groeien.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-violet to-primary-blue hover:opacity-90 shadow-lg shadow-primary-violet/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=oplossingen">
                    Plan een Gesprek
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
                  Vrijblijvend
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
                  Persoonlijk advies
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
                  Binnen 24u reactie
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
