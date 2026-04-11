'use client'

import HeroVisual from '@/components/ui/HeroVisual'
import { m } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Shield, CheckCircle2, ArrowRight,
  Lock, AlertTriangle,
  Mail, Users, Key,
  Headphones, HardDrive,
  ShieldAlert, Fingerprint, Scan
} from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FAQItem } from '@/components/ui/FAQItem'
import {
  services, whyChooseUs, processSteps, faqs
} from '@/lib/data/cybersecurity'
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

const WhyUsCard = ({ item, index }: { item: typeof whyChooseUs[0], index: number }) => (
  <ScrollTrigger delay={index * 0.1}>
    <div className="glass-effect p-4 sm:p-6 rounded-2xl border border-slate-200 hover:border-primary-blue/30 transition-all h-full">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-blue" />
        </div>
        <div className="text-right">
          <p className="text-xl sm:text-2xl font-bold text-primary-blue">{item.stat}</p>
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

export default function CybersecurityPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 overflow-x-hidden">

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
              <Badge className="mb-6 px-4 py-2 bg-primary-blue/10 text-primary-blue border-primary-blue/30">
                <Shield className="w-4 h-4 mr-2 inline" />
                Cybersecurity voor MKB
              </Badge>

              <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-[1.1]">
                Bescherm uw bedrijf{' '}
                <span className="block text-gradient mt-2">
                  tegen cyberdreigingen
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-300 mb-6 leading-relaxed">
                <strong className="text-white">Ransomware</strong>, <strong className="text-white">phishing</strong> en <strong className="text-white">datalekken</strong> vormen een reëel risico voor elk bedrijf.
                Wij helpen u de juiste beveiligingsmaatregelen te nemen - praktisch en betaalbaar.
              </p>

              <ul className="space-y-3 mb-8 text-slate-300">
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-blue flex-shrink-0" />
                  <span>Security audit om kwetsbaarheden te vinden</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-blue flex-shrink-0" />
                  <span>MFA, endpoint security en veilige backups</span>
                </li>
                <li className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-primary-blue flex-shrink-0" />
                  <span>Security awareness training voor medewerkers</span>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-blue to-primary-violet hover:opacity-90 shadow-lg shadow-primary-blue/25"
                  asChild
                >
                  <Link href="/contact?service=cybersecurity">
                    Gratis Security Check
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </m.div>

            {/* 3D Visualization - Rechter kolom */}
            <m.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]"
            >
              <HeroVisual variant="cybersecurity" />

              {/* Floating status cards - hidden on mobile */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="hidden md:block absolute bottom-8 right-4 glass-effect rounded-xl p-4 border border-primary-violet/20 max-w-[240px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-violet/20 flex items-center justify-center">
                    <Scan className="w-5 h-5 text-primary-violet" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Security</p>
                    <p className="text-lg font-bold text-slate-900">Audit</p>
                  </div>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="hidden md:block absolute top-8 left-4 glass-effect rounded-xl p-4 border border-primary-emerald/20 max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-emerald/20 flex items-center justify-center">
                    <HardDrive className="w-5 h-5 text-primary-emerald" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Backup &</p>
                    <p className="text-sm font-bold text-slate-900">Recovery</p>
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
            <div className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-primary-blue/5 via-transparent to-primary-blue/5 border border-slate-200">
              <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary-blue/30 rounded-tl-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary-blue/30 rounded-br-2xl" />

              <div className="text-center">
                <h2 id="seo-intro-title" className="text-2xl md:text-3xl font-bold mb-6">
                  Cybersecurity voor het <span className="text-gradient">MKB</span>
                </h2>
                <p className="text-lg text-slate-500 leading-relaxed">
                  Cyberaanvallen raken niet alleen grote bedrijven. MKB-bedrijven zijn steeds vaker doelwit - juist omdat ze vaak minder goed beveiligd zijn.
                  Wij helpen u met <strong className="text-slate-600">praktische beveiligingsmaatregelen</strong> die passen bij uw budget en risicoprofiel.
                  Geen overkill, wel de juiste bescherming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VIDEO SECTIE ==================== */}
      <section className="py-24 bg-slate-50/50" aria-labelledby="video-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Video */}
              <ScrollTrigger>
                <div className="relative rounded-2xl overflow-hidden border border-primary-blue/20 shadow-2xl shadow-primary-blue/10">
                  <video
                    className="w-full h-auto"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                  >
                    <source src="/cybersecurity.mp4" type="video/mp4" />
                  </video>
                </div>
              </ScrollTrigger>

              {/* Content */}
              <ScrollTrigger delay={0.2}>
                <div>
                  <Badge className="mb-4 bg-primary-blue/10 text-primary-blue border-primary-blue/30">
                    <Shield className="w-4 h-4 mr-2" />
                    Uw Digitale Veiligheid
                  </Badge>
                  <h2 id="video-title" className="text-3xl md:text-4xl font-bold mb-6">
                    Voorkom dat uw bedrijf <span className="text-gradient">het volgende slachtoffer</span> wordt
                  </h2>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    Cybercriminelen worden steeds slimmer. Elke dag worden Nederlandse bedrijven getroffen door ransomware, phishing en datalekken. De vraag is niet óf, maar wanneer u doelwit wordt.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-5 h-5 text-primary-blue" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Ransomware aanvallen</p>
                        <p className="text-sm text-slate-500">Uw data gegijzeld, bedrijf stilgelegd</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-violet/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary-violet" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Phishing e-mails</p>
                        <p className="text-sm text-slate-500">Eén klik kan alles kosten</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                        <Lock className="w-5 h-5 text-primary-emerald" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Wij beschermen u</p>
                        <p className="text-sm text-slate-500">Proactieve beveiliging op maat</p>
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
              <Badge className="mb-4 bg-primary-blue/10 text-primary-blue border-primary-blue/30">Onze Diensten</Badge>
              <h2 id="diensten-title" className="text-3xl md:text-4xl font-bold mb-4">
                Volledige <span className="text-gradient">cybersecurity</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Van security audit tot incident response. Alles wat u nodig heeft om uw bedrijf te beschermen.
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

      {/* ==================== STATISTIEKEN MET FOTO ==================== */}
      <section className="py-24 bg-slate-50/50" aria-labelledby="stats-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Foto */}
              <ScrollTrigger>
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden border border-primary-blue/20">
                    <Image
                      src="/beveiliging-v2.webp"
                      alt="Cybersecurity professionals aan het werk"
                      width={1200}
                      height={559}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 glass-effect rounded-xl p-3 border border-primary-blue/30 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-blue/20 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-primary-blue" />
                      </div>
                      <div>
                        <p className="text-lg font-bold text-slate-900">MKB</p>
                        <p className="text-xs text-slate-500">Security Partner</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>

              {/* Stats */}
              <ScrollTrigger delay={0.2}>
                <div>
                  <Badge className="mb-4 bg-primary-blue/10 text-primary-blue border-primary-blue/30">
                    <ShieldAlert className="w-4 h-4 mr-2" />
                    De Feiten
                  </Badge>
                  <h2 id="stats-title" className="text-3xl md:text-4xl font-bold mb-6">
                    Cybercrime in <span className="text-gradient">Nederland</span>
                  </h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    Elk jaar worden duizenden Nederlandse bedrijven slachtoffer van cybercriminaliteit. Met de juiste maatregelen voorkomt u dat uw bedrijf het volgende doelwit wordt.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="glass-effect p-4 rounded-xl border border-slate-200">
                      <p className="text-3xl font-bold text-primary-blue mb-1">77%</p>
                      <p className="text-sm text-slate-500">van MKB was al doelwit</p>
                    </div>
                    <div className="glass-effect p-4 rounded-xl border border-slate-200">
                      <p className="text-3xl font-bold text-primary-blue mb-1">€67K</p>
                      <p className="text-sm text-slate-500">gemiddelde schade</p>
                    </div>
                    <div className="glass-effect p-4 rounded-xl border border-slate-200">
                      <p className="text-3xl font-bold text-primary-violet mb-1">85%</p>
                      <p className="text-sm text-slate-500">menselijke fouten</p>
                    </div>
                    <div className="glass-effect p-4 rounded-xl border border-slate-200">
                      <p className="text-3xl font-bold text-primary-emerald mb-1">60%</p>
                      <p className="text-sm text-slate-500">failliet na hack</p>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary-blue to-primary-violet hover:opacity-90"
                    asChild
                  >
                    <Link href="/contact?service=cybersecurity">
                      Bescherm Uw Bedrijf
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollTrigger>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECURITY TRAINING ==================== */}
      <section className="py-24" aria-labelledby="training-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollTrigger>
                <div>
                  <Badge className="mb-4 bg-primary-violet/10 text-primary-violet border-primary-violet/30">
                    <Users className="w-3 h-3 mr-2" />
                    Security Awareness
                  </Badge>
                  <h2 id="training-title" className="text-3xl md:text-4xl font-bold mb-6">
                    Uw medewerkers als <span className="text-gradient">eerste verdedigingslinie</span>
                  </h2>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    85% van alle cyberaanvallen begint met een menselijke fout. Een verkeerde klik op een phishing mail of een zwak wachtwoord kan uw hele organisatie in gevaar brengen.
                    Daarom is <strong className="text-white">security awareness training</strong> essentieel.
                  </p>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    Wij bieden praktische trainingen die uw medewerkers leren om bedreigingen te herkennen en juist te handelen.
                    Geen saaie presentaties, maar interactieve sessies die blijven hangen.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-violet flex-shrink-0" />
                      <span>Phishing simulaties met realistische scenarios</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-violet flex-shrink-0" />
                      <span>Interactieve workshops op locatie of online</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-violet flex-shrink-0" />
                      <span>Voortgangsrapportages per medewerker</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-primary-violet flex-shrink-0" />
                      <span>Certificaat na afronding training</span>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>

              <ScrollTrigger delay={0.2}>
                <div className="space-y-4">
                  {/* Training modules */}
                  <div className="glass-effect p-5 rounded-xl border border-primary-violet/20 hover:border-primary-violet/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-violet/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary-violet" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Phishing Herkennen</h3>
                        <p className="text-slate-500 text-sm">Leer verdachte e-mails, links en bijlagen identificeren voordat het te laat is.</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-effect p-5 rounded-xl border border-primary-blue/20 hover:border-primary-blue/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                        <AlertTriangle className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Social Engineering</h3>
                        <p className="text-slate-500 text-sm">Herken manipulatietechnieken via telefoon, e-mail en in persoon.</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-effect p-5 rounded-xl border border-primary-blue/20 hover:border-primary-blue/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                        <Key className="w-6 h-6 text-primary-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Veilig Werken</h3>
                        <p className="text-slate-500 text-sm">Sterke wachtwoorden, veilig thuiswerken en omgaan met gevoelige data.</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-effect p-5 rounded-xl border border-primary-emerald/20 hover:border-primary-emerald/40 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary-emerald/10 flex items-center justify-center flex-shrink-0">
                        <Fingerprint className="w-6 h-6 text-primary-emerald" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Incident Response</h3>
                        <p className="text-slate-500 text-sm">Wat te doen als het misgaat? Snel en correct handelen bij een incident.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollTrigger>
            </div>

            {/* CTA voor training */}
            <ScrollTrigger>
              <div className="mt-12 text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-violet to-primary-blue hover:opacity-90"
                  asChild
                >
                  <Link href="/contact?service=security-training">
                    Plan een Security Training
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </section>

      {/* ==================== WAAROM WIJ ==================== */}
      <section className="py-24" aria-labelledby="waarom-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl border border-primary-blue/10 bg-gradient-to-b from-primary-blue/5 to-transparent">
              <div className="absolute left-0 top-1/4 w-1 h-24 bg-gradient-to-b from-primary-blue/50 to-transparent rounded-full" />
              <div className="absolute right-0 bottom-1/4 w-1 h-24 bg-gradient-to-t from-primary-blue/50 to-transparent rounded-full" />

              <ScrollTrigger>
                <header className="text-center mb-12">
                  <Badge className="mb-4">Waarom Start Beheer</Badge>
                  <h2 id="waarom-title" className="text-3xl md:text-4xl font-bold mb-4">
                    Cybersecurity met een <span className="text-gradient">praktische aanpak</span>
                  </h2>
                  <p className="text-slate-500 max-w-2xl mx-auto">
                    Wij geloven in effectieve beveiliging die past bij uw organisatie. Geen angstmarketing, wel eerlijk advies.
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
      <section className="py-24 bg-slate-50/50" aria-labelledby="proces-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary-blue to-transparent rounded-full" />

              <div className="pt-8">
                <ScrollTrigger>
                  <header className="text-center mb-16">
                    <Badge className="mb-4">Zo Werkt Het</Badge>
                    <h2 id="proces-title" className="text-3xl md:text-4xl font-bold mb-4">
                      Van onveilig naar <span className="text-gradient">beschermd</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                      Een gestructureerde aanpak om uw beveiliging stap voor stap te verbeteren.
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

      {/* ==================== FAQ ==================== */}
      <section className="py-24" aria-labelledby="faq-title">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <ScrollTrigger>
            <header className="text-center mb-12">
              <Badge className="mb-4">Veelgestelde Vragen</Badge>
              <h2 id="faq-title" className="text-3xl md:text-4xl font-bold mb-4">
                Vragen over <span className="text-gradient">cybersecurity</span>?
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-blue/10" />

        <div className="container relative z-10 mx-auto px-4">
          <ScrollTrigger>
            <div className="max-w-4xl mx-auto text-center glass-effect p-6 sm:p-10 md:p-16 rounded-2xl sm:rounded-3xl border border-primary-blue/20">
              <Badge className="mb-4 sm:mb-6 bg-primary-blue/20 text-primary-blue border-primary-blue/30">
                Gratis Security Check
              </Badge>

              <h2 id="cta-title" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Weet u hoe veilig uw{' '}
                <span className="text-gradient">bedrijf</span> is?
              </h2>

              <p className="text-lg sm:text-xl text-slate-500 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Plan een gratis security check. We bespreken uw situatie en geven eerlijk advies over de belangrijkste verbeterpunten.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-blue to-primary-violet hover:opacity-90 shadow-lg shadow-primary-blue/25 text-lg px-8"
                  asChild
                >
                  <Link href="/contact?service=cybersecurity">
                    Plan Gratis Security Check
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                  Geen verplichtingen
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
                  Eerlijk advies
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary-blue" />
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
