'use client'

import HeroVisual from '@/components/ui/HeroVisual'
import { m, animate } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FAQItem } from '@/components/ui/FAQItem'
import {
  Globe, CheckCircle2, ArrowRight,
  Zap, Palette, Lock, Search,
  Smartphone, FileText,
  Users,
  Target,
  Sparkles,
  Phone,
} from 'lucide-react'
import Link from 'next/link'
import { useRef, useState, useEffect } from 'react'
import {
  services, priceInfo, whyChooseUs, processSteps, faqs
} from '@/lib/data/website'
import { serviceColors, type ServiceColorKey } from '@/lib/colors'

// ============================================================================
// COMPONENTS
// ============================================================================

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const num = parseInt(value)
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isNaN(num)) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const controls = animate(0, num, {
            duration: 1.5,
            ease: 'easeOut',
            onUpdate: (v) => setCount(Math.round(v)),
          })
          return () => controls.stop()
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [num])

  if (isNaN(num)) return <span>{value}</span>
  return <span ref={ref}>{count}{suffix}</span>
}

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
  <ScrollTrigger delay={index * 0.08}>
    <article className={`relative bg-white p-6 sm:p-7 rounded-2xl h-full border ${serviceColors[service.color as ServiceColorKey].border} ${serviceColors[service.color as ServiceColorKey].borderHover} transition-all duration-300 group card-hover`}>
      {/* Subtle gradient on hover */}
      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color === 'violet' ? 'from-primary-violet/[0.03]' : service.color === 'emerald' ? 'from-primary-emerald/[0.03]' : service.color === 'blue' ? 'from-primary-blue/[0.03]' : 'from-amber-500/[0.03]'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

      <div className="relative z-10">
        <div className={`w-12 h-12 rounded-xl ${serviceColors[service.color as ServiceColorKey].bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className={`w-6 h-6 ${serviceColors[service.color as ServiceColorKey].text}`} />
        </div>

        <h3 className="text-lg font-bold mb-2 text-slate-900">{service.title}</h3>
        <p className="text-slate-500 mb-4 text-sm leading-relaxed">{service.description}</p>

        <ul className="space-y-2">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
              <CheckCircle2 className={`w-4 h-4 ${serviceColors[service.color as ServiceColorKey].text} flex-shrink-0`} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </article>
  </ScrollTrigger>
)

const WhyUsCard = ({ item, index }: { item: typeof whyChooseUs[0], index: number }) => (
  <m.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="glass-effect-dark p-5 sm:p-6 rounded-2xl border border-white/[0.06] hover:border-primary-violet/30 transition-all duration-300 h-full group"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-11 h-11 rounded-xl bg-white/[0.06] flex items-center justify-center group-hover:bg-primary-violet/20 transition-colors duration-300">
        <item.icon className="w-5 h-5 text-primary-violet" />
      </div>
      <div className="text-right">
        <p className="text-2xl font-bold text-white">
          <AnimatedNumber value={item.stat} />
        </p>
        <p className="text-xs text-slate-400">{item.statLabel}</p>
      </div>
    </div>
    <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
    <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
  </m.div>
)

const ProcessStepCard = ({ step, index }: { step: typeof processSteps[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="relative group">
      {/* Verbindingslijn — alleen op desktop 4-kolom */}
      {index < 3 && (
        <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-px bg-gradient-to-r from-primary-violet/30 to-transparent z-0" />
      )}

      <div className="relative z-10 flex flex-row md:flex-col items-center md:text-center gap-4 md:gap-0">
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-primary-violet/40 flex items-center justify-center md:mx-auto md:mb-4 transition-colors duration-300 shadow-sm group-hover:shadow-md">
            <step.icon className="w-7 h-7 md:w-8 md:h-8 text-primary-violet" />
          </div>
          <span className="absolute -top-1.5 -right-1.5 w-6 h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-r from-primary-blue to-primary-violet text-[10px] md:text-xs font-bold flex items-center justify-center text-white shadow-sm">
            {step.step}
          </span>
        </div>
        <div>
          <h3 className="text-base md:text-lg font-bold mb-1 text-slate-900">{step.title}</h3>
          <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
        </div>
      </div>
    </div>
  </ScrollTrigger>
)

// ============================================================================
// MAIN PAGE COMPONENT
// ============================================================================

export default function WebsitePageClient() {
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
              <Badge className="mb-6 px-4 py-2 bg-white/[0.06] text-slate-300 border-white/[0.08]">
                <Globe className="w-4 h-4 mr-2 inline" />
                Webdesign & Development
              </Badge>

              <h1 id="hero-title" className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Website Laten Maken{' '}
                <span className="block text-gradient mt-2">
                  Die Klanten Oplevert.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                Wij bouwen websites die niet alleen mooi zijn, maar daadwerkelijk <strong className="text-white">klanten opleveren</strong>. Op maat, razend snel en vindbaar in Google.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>SEO-geoptimaliseerd uit de doos</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Binnen 2 weken online</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                  <span>Vaste prijs vanaf €585 excl. BTW</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-white text-[#0B1121] hover:bg-slate-100 font-semibold px-8 shadow-none"
                  asChild
                >
                  <Link href="/demo?type=website">
                    Gratis Demo Aanvragen
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

            </m.div>

            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
              aria-hidden="true"
            >
              <HeroVisual variant="website" />

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
                    <p className="text-xs text-slate-400">Laadtijd</p>
                    <p className="text-lg font-bold">&lt;2 seconden</p>
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
                    <Palette className="w-5 h-5 text-primary-violet" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Design</p>
                    <p className="text-lg font-bold">100% Custom</p>
                  </div>
                </div>
              </m.div>
            </m.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent" />
      </section>

      {/* Scheiding tussen hero en waarom wij */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* ==================== WAAROM WIJ — DONKERE ACCENT SECTIE ==================== */}
      <section className="py-16 sm:py-24 bg-[#0B1121] relative overflow-hidden" aria-labelledby="waarom-title">
        <div className="absolute inset-0 bg-dot-pattern" />
        <m.div
          className="absolute top-0 right-0 w-[60vw] max-w-[400px] h-[60vw] max-h-[400px] rounded-full blur-[100px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)' }}
          animate={{ x: [0, 15, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <m.header
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08] text-slate-300 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Onze Belofte
              </div>
              <h2 id="waarom-title" className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                Dit kunt u van ons <span className="text-gradient">verwachten</span>
              </h2>
            </m.header>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {whyChooseUs.map((item, index) => (
                <WhyUsCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DIENSTEN ==================== */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="diensten-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-16">
              <Badge className="mb-4">Wat U Krijgt</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Website laten maken? <span className="text-gradient">Dit zit er allemaal in</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Geen losse kosten voor SEO, geen meerprijs voor mobiel. Alles zit in het pakket zodat u geen verrassingen krijgt.
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

      {/* ==================== PRIJS — PREMIUM CARD ==================== */}
      <section className="py-16 sm:py-24 bg-slate-50" aria-labelledby="prijs-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Investering</Badge>
              <h2 id="prijs-title" className="text-3xl md:text-4xl font-bold mb-4">
                Transparante <span className="text-gradient">prijzen</span>
              </h2>
            </header>
          </ScrollTrigger>

          <ScrollTrigger>
            <div className="max-w-2xl mx-auto">
              {/* Animated gradient border */}
              <div className="relative rounded-2xl overflow-hidden">
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary-blue via-primary-violet to-primary-emerald opacity-60" style={{ backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite' }} />

                <div className="relative bg-white rounded-2xl p-6 sm:p-8 md:p-10">
                  <div className="text-center mb-8">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-gradient mb-2">{priceInfo.price}</p>
                    <p className="text-slate-500">{priceInfo.description}</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {priceInfo.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-slate-600 text-sm sm:text-base">
                        <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div className="text-center">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-primary-violet to-primary-blue hover:brightness-110 shadow-lg shadow-primary-violet/20 text-white px-8"
                      asChild
                    >
                      <Link href="/demo?type=website">
                        Gratis Demo Aanvragen
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                    </Button>
                    <p className="text-sm text-slate-500 mt-4">
                      Vaste prijs — geen verrassingen. Eerste ontwerp binnen 24 uur.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </section>

      {/* ==================== Gradient scheider ==================== */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary-violet/20 to-transparent" />

      {/* ==================== HOE HET WERKT ==================== */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <ScrollTrigger>
              <header className="text-center mb-16">
                <Badge className="mb-4">Ons Proces</Badge>
                <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                  Binnen 1-3 weken <span className="text-gradient">live</span>
                </h2>
                <p className="text-slate-500 max-w-2xl mx-auto">
                  Geen maandenlange trajecten. In vier stappen van eerste gesprek naar een werkende website die klanten binnenhaalt.
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
      </section>

      {/* ==================== RESULTAAT ==================== */}
      <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary-violet/20 via-primary-blue/20 to-primary-emerald/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative bg-slate-100 rounded-2xl overflow-hidden">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="w-full h-auto"
                    >
                      <source src="/website-laten-maken.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>

                <m.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-4 right-2 sm:-right-4 lg:-right-8"
                >
                  <div className="bg-white border border-slate-200 rounded-xl px-4 py-3 shadow-lg">
                    <p className="text-primary-emerald font-semibold text-lg">1-3 weken</p>
                    <p className="text-slate-500 text-sm">Oplevering</p>
                  </div>
                </m.div>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-4 px-4 py-2 bg-primary-emerald/10 text-primary-emerald border-primary-emerald/30">
                  <Target className="w-4 h-4 mr-2 inline" />
                  100% Op Maat
                </Badge>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                  <span className="text-slate-900">Geen template. </span>
                  <span className="text-gradient">Uw bedrijf, uw website.</span>
                </h2>

                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  Wij beginnen met een blanco canvas. Uw merk, uw doelgroep, uw doelen — dat bepaalt hoe de website eruitziet en werkt. Het resultaat is iets dat alleen van u is.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Palette, text: 'Design dat vertrouwen wekt' },
                    { icon: Users, text: 'Bezoekers worden klanten' },
                    { icon: Smartphone, text: 'Werkt overal foutloos' },
                    { icon: Globe, text: 'Groeit mee met uw bedrijf' },
                  ].map((item, index) => (
                    <m.div
                      key={item.text}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-emerald/10 flex items-center justify-center">
                        <item.icon className="w-4 h-4 text-primary-emerald" />
                      </div>
                      <span className="text-slate-600 text-sm">{item.text}</span>
                    </m.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-emerald to-primary-blue hover:brightness-110 transition-all shadow-lg shadow-primary-emerald/20 text-white"
                  asChild
                >
                  <Link href="/demo?type=website">
                    Gratis Demo Aanvragen
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </m.div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FAQ ==================== */}
      <section className="py-16 sm:py-24 bg-white" aria-labelledby="faq-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Veelgestelde <span className="text-gradient">vragen</span>
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

      {/* ==================== GERELATEERDE DIENSTEN ==================== */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-slate-500 text-center mb-4">Meer nodig dan een website?</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/webshop-laten-maken" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 hover:border-primary-violet/30 hover:text-primary-violet transition-all">
                Webshop Laten Maken
              </Link>
              <Link href="/webapplicatie-laten-maken" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 hover:border-primary-violet/30 hover:text-primary-violet transition-all">
                Webapplicatie Laten Maken
              </Link>
              <Link href="/seo-specialist" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 hover:border-primary-blue/30 hover:text-primary-blue transition-all">
                SEO Specialist
              </Link>
              <Link href="/google-ads-beheer" className="px-4 py-2 rounded-full bg-white border border-slate-200 text-sm text-slate-600 hover:border-amber-500/30 hover:text-amber-600 transition-all">
                Google Ads Beheer
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== CTA — DONKER ACCENT ==================== */}
      <section className="py-16 sm:py-24 bg-[#0B1121] relative overflow-hidden" aria-labelledby="cta-title">
        <div className="absolute inset-0 bg-dot-pattern" />
        <m.div
          className="absolute bottom-0 left-0 w-[60vw] max-w-[400px] h-[60vw] max-h-[400px] rounded-full blur-[100px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }}
          animate={{ x: [0, -15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Gratis & Vrijblijvend
              </div>

              <h2 id="cta-title" className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-6 text-white">
                Uw concurrenten hebben al een website. Wat heeft u?
              </h2>

              <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
                Wij maken binnen 24 uur een eerste ontwerp van uw homepage — gratis en vrijblijvend. Geen verplichtingen, geen verkooppraatjes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-white text-[#0B1121] hover:bg-slate-100 font-semibold px-8 shadow-none"
                  asChild
                >
                  <Link href="/demo?type=website">
                    Gratis Demo Aanvragen
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-2 justify-center text-slate-400 mb-6">
                <Phone className="w-4 h-4 text-primary-blue" />
                <span className="text-sm">Of bel direct: </span>
                <a href="tel:+31687874001" className="text-sm font-semibold text-white hover:text-primary-blue transition-colors">
                  06 87 87 40 01
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-400">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Geen verplichtingen
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Ontwerp binnen 24 uur
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Vaste prijsafspraak
                </span>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </div>
  )
}
