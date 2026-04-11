'use client'

import HeroVisual from '@/components/ui/HeroVisual'
import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FAQItem } from '@/components/ui/FAQItem'
import {
  ShoppingCart, CheckCircle2, ArrowRight,
  Zap, Lock, TrendingUp, Globe, Target
} from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { services, priceInfo, whyChooseUs, processSteps, faqs } from '@/lib/data/ecommerce'
import { serviceColors, type ServiceColorKey } from '@/lib/colors'
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

const PriceCard = () => (
  <ScrollTrigger>
    <div className="glass-effect p-8 md:p-10 rounded-2xl border border-primary-emerald/30 hover:border-primary-emerald/50 transition-all max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <Badge className="mb-4 bg-primary-emerald/20 text-primary-emerald border-primary-emerald/30">
          Transparante Prijzen
        </Badge>
        <p className="text-4xl md:text-5xl font-bold text-primary-emerald mb-2">{priceInfo.price}</p>
        <p className="text-slate-500">{priceInfo.description}</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mb-8">
        {priceInfo.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2 text-slate-600">
            <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
            {feature}
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-primary-emerald to-primary-blue hover:opacity-90 shadow-lg shadow-primary-emerald/25"
          asChild
        >
          <Link href="/demo?type=webshop">
            Gratis Demo Aanvragen
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </Button>
        <p className="text-sm text-slate-500 mt-4">
          Exacte prijs hangt af van uw wensen en complexiteit
        </p>
      </div>
    </div>
  </ScrollTrigger>
)

const WhyUsCard = ({ item, index }: { item: typeof whyChooseUs[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-slate-200 hover:border-primary-emerald/30 transition-all h-full">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-emerald/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-emerald" />
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
        <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary-emerald/30 to-transparent z-0" />
      )}

      <div className="relative z-10 text-center">
        <div className="w-20 h-20 rounded-full bg-slate-50 border-2 border-primary-emerald/30 flex items-center justify-center mx-auto mb-4 relative">
          <step.icon className="w-8 h-8 text-primary-emerald" />
          <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-emerald text-sm font-bold flex items-center justify-center text-white">
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

export default function EcommercePageClient() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden">

      {/* ==================== HERO ==================== */}
      <section className="relative min-h-screen flex items-center text-white" aria-labelledby="hero-title">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-[#0B1121] to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-emerald/10 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20 md:pt-28 lg:pt-32 lg:pb-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Content - Linker kolom */}
            <m.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-white/[0.06] text-slate-300 border-white/[0.08]">
                <ShoppingCart className="w-4 h-4 mr-2 inline" />
                E-commerce Ontwikkeling
              </Badge>

              <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Webshop Laten Maken?{' '}
                <span className="block text-gradient mt-2">
                  Shopify & WooCommerce
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                <strong className="text-white">E-commerce oplossingen</strong> die verkopen.
                Wij bouwen webshops op Shopify en WooCommerce die bezoekers omzetten in klanten.
              </p>

              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Shopify of WooCommerce - wij adviseren</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Alle betaalmethodes geïntegreerd</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Geoptimaliseerd voor conversie</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Binnen 24 uur gratis demo</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-emerald to-primary-blue hover:opacity-90 shadow-lg shadow-primary-emerald/25"
                  asChild
                >
                  <Link href="/demo?type=webshop">
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
              <div className="absolute inset-0 bg-gradient-to-r from-primary-emerald/20 via-primary-blue/10 to-transparent blur-3xl rounded-full" />

              <HeroVisual variant="webshop" />

              {/* Floating cards - hidden on mobile */}
              <m.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="hidden md:block absolute bottom-8 left-4 glass-effect-dark px-4 py-3 rounded-xl border border-primary-emerald/30"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-emerald/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-primary-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Conversie</p>
                    <p className="text-lg font-bold">Geoptimaliseerd</p>
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
                    <ShoppingCart className="w-5 h-5 text-primary-blue" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Platform</p>
                    <p className="text-lg font-bold">Shopify/WooCommerce</p>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* ==================== VIDEO SECTIE ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/50 to-white" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Video */}
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-video rounded-2xl overflow-hidden border border-primary-emerald/20 shadow-2xl shadow-primary-emerald/10"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="none"
                  className="w-full h-full object-cover"
                  title="Webshop ontwikkeling demo"
                  aria-label="Video demonstratie van onze webshop ontwikkeling"
                >
                  <source src="/website-laten-maken.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                  <Badge className="bg-primary-emerald/90 text-slate-900 border-0">
                    <Zap className="w-3 h-3 mr-1" />
                    Snel Laden
                  </Badge>
                  <Badge className="bg-primary-blue/90 text-slate-900 border-0">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Conversie Geoptimaliseerd
                  </Badge>
                </div>
              </m.div>

              {/* Content */}
              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 bg-white/[0.06] text-slate-300 border-white/[0.08]">
                  <Target className="w-4 h-4 mr-2 inline" />
                  Resultaatgericht
                </Badge>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  <span className="text-slate-900">Webshop die </span>
                  <span className="text-gradient">verkoopt</span>
                </h2>

                <p className="text-slate-500 text-lg mb-6 leading-relaxed">
                  Een mooie webshop is niet genoeg. Uw webshop moet bezoekers omzetten in klanten.
                  Daarom focussen wij op conversie: snelle laadtijden, intuïtieve checkout en vertrouwen.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { icon: Zap, text: 'Snelle laadtijden' },
                    { icon: Lock, text: 'Veilig betalen' },
                    { icon: TrendingUp, text: 'Conversie geoptimaliseerd' },
                    { icon: Globe, text: 'SEO-vriendelijk' },
                  ].map((item, index) => (
                    <m.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-2 text-slate-600"
                    >
                      <item.icon className="w-5 h-5 text-primary-emerald" />
                      <span className="text-sm">{item.text}</span>
                    </m.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-emerald to-primary-blue hover:scale-105 transition-transform"
                  asChild
                >
                  <Link href="/demo">
                    Gratis Demo Aanvragen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </m.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN ==================== */}
      <section className="py-24 bg-slate-50" aria-labelledby="diensten-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">E-commerce Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Alles voor een <span className="text-gradient">succesvolle webshop</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Van design tot betalingen, van voorraad tot verzending - wij regelen alle aspecten van uw webshop.
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

      {/* ==================== PRIJS ==================== */}
      <section className="py-24" aria-labelledby="prijs-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Investering</Badge>
              <h2 id="prijs-title" className="text-3xl md:text-4xl font-bold mb-4">
                Webshop laten maken: <span className="text-gradient">wat kost het?</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Transparante prijzen, geen verrassingen achteraf. U ontvangt altijd een offerte op maat.
              </p>
            </header>
          </ScrollTrigger>

          <PriceCard />
        </div>
      </section>

      {/* ==================== WAAROM WIJ ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-primary-emerald/10 bg-gradient-to-b from-primary-emerald/5 to-transparent">
              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Waarom klanten voor <span className="text-gradient">ons kiezen</span>
                  </h2>
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
      <section className="py-24 bg-slate-50" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <ScrollTrigger>
              <header className="text-center mb-16">
                <Badge className="mb-4">Ons Proces</Badge>
                <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                  Van idee naar <span className="text-gradient">verkoopsucces</span>
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
                Vragen over <span className="text-gradient">e-commerce</span>?
              </h2>
            </header>
          </ScrollTrigger>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem key={index} q={faq.q} a={faq.a} color="emerald" />
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA ==================== */}
      <section className="py-24 relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-emerald/10 via-transparent to-primary-blue/10" />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-primary-emerald/20">
              <Badge className="mb-4 sm:mb-6 bg-primary-emerald/20 text-primary-emerald border-primary-emerald/30">
                Gratis & Vrijblijvend
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Webshop laten maken?{' '}
                <span className="text-gradient">Start vandaag!</span>
              </h2>

              <p className="text-lg sm:text-xl text-slate-500 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Vraag een vrijblijvende offerte aan. We bespreken uw producten en maken een plan voor uw webshop.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-emerald to-primary-blue hover:opacity-90 shadow-lg shadow-primary-emerald/25 text-lg px-8"
                  asChild
                >
                  <Link href="/demo?type=webshop">
                    Gratis Demo Aanvragen
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
                  Offerte binnen 48 uur
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-emerald" />
                  Vaste prijsafspraak
                </span>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>
    </div>
  )
}
