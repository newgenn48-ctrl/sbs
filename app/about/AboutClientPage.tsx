'use client'

import { m } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Target,
  Heart,
  Zap,
  Shield,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Handshake,
  Award,
  Rocket,
  Star,
  Globe,
  Code,
  Brain,
  Megaphone,
} from 'lucide-react'

import HeroVisual from '@/components/ui/HeroVisual'
import { serviceColors, type ServiceColorKey } from '@/lib/colors'

const values: { icon: typeof Heart; title: string; description: string; color: ServiceColorKey; gradient: string }[] = [
  {
    icon: Heart,
    title: 'Persoonlijke Aanpak',
    description: 'Bij ons bent u geen nummer. U krijgt een vast aanspreekpunt die uw bedrijf door en door kent.',
    color: 'blue',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Shield,
    title: 'Betrouwbaarheid',
    description: 'Wij doen wat we beloven. Transparante communicatie en geen verrassingen achteraf.',
    color: 'emerald',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Lightbulb,
    title: 'Innovatie',
    description: 'We blijven vooroplopen met de nieuwste technologieen om uw bedrijf te laten groeien.',
    color: 'violet',
    gradient: 'from-purple-500 to-violet-500',
  },
  {
    icon: Handshake,
    title: 'Partnerschap',
    description: 'Wij zien onszelf als verlengstuk van uw team, niet als externe leverancier.',
    color: 'warm',
    gradient: 'from-orange-500 to-red-500',
  },
]

const aboutServices: { name: string; icon: typeof Globe; color: ServiceColorKey }[] = [
  { name: 'IT Beheer', icon: Globe, color: 'blue' },
  { name: 'Web Development', icon: Code, color: 'violet' },
  { name: 'AI & Automatisering', icon: Brain, color: 'emerald' },
  { name: 'Online Marketing', icon: Megaphone, color: 'warm' },
]

export default function AboutClientPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-screen flex items-center overflow-hidden text-white">
        
        <div className="absolute inset-0 z-0 bg-[#0B1121]">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/[0.07] rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/[0.05] rounded-full blur-[100px]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1121] via-[#0B1121]/50 to-white z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1121]/80 via-transparent to-[#0B1121]/80 z-[1]" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 pt-32 pb-20">
          <div className="max-w-4xl">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-primary-blue/20 text-primary-blue border-primary-blue/30">
                <Rocket className="w-4 h-4 mr-2 inline" />
                Over Start Beheer
              </Badge>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
                <span className="text-white">Uw IT Partner die </span>
                <br />
                <span className="text-gradient bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                  Echt Begrijpt
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-2xl mb-8">
                Wij maken professionele IT toegankelijk voor ZZP&apos;ers en het MKB.
                Geen complexe systemen, maar praktische oplossingen die werken.
              </p>

              <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary-blue to-primary-violet hover:opacity-90 shadow-lg shadow-primary-blue/25 px-8 py-6 text-lg"
                  asChild
                >
                  <Link href="/contact">
                    Neem Contact Op
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
            </m.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <m.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full" />
          </div>
        </m.div>
      </section>

      {/* ========== SERVICES OVERVIEW ========== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-blue/5 via-transparent to-transparent" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2 bg-primary-emerald/10 text-primary-emerald border-primary-emerald/30">
              <Zap className="w-4 h-4 mr-2 inline" />
              Wat Wij Doen
            </Badge>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-slate-900">Alles Onder </span>
              <span className="text-gradient">Een Dak</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Van IT-beheer tot marketing, wij bieden complete digitale oplossingen
            </p>
          </m.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {aboutServices.map((service, index) => (
              <m.div
                key={service.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative p-8 rounded-3xl bg-slate-100 border border-slate-200 hover:border-opacity-50 transition-all duration-500 h-full">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${serviceColors[service.color].bg}`}>
                    <service.icon className={`w-8 h-8 ${serviceColors[service.color].text}`} />
                  </div>
                  <h3 className="text-xl font-display font-bold text-slate-900 group-hover:text-gradient transition-colors">
                    {service.name}
                  </h3>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOUNDER SECTION ========== */}
      <section className="relative py-32 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <HeroVisual variant="about" className="opacity-30" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-50/90 to-white z-[1]" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-4 px-4 py-2 bg-primary-violet/10 text-primary-violet border-primary-violet/30">
                  <Star className="w-4 h-4 mr-2 inline" />
                  De Oprichter
                </Badge>

                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  <span className="text-slate-900">De Visie </span>
                  <span className="text-gradient">Achter Start Beheer</span>
                </h2>

                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  Start Beheer is geboren uit de frustratie dat kleine bedrijven vaak
                  worden overgeslagen door grote IT-bedrijven. Wij geloven dat elk bedrijf,
                  groot of klein, recht heeft op dezelfde kwaliteit IT-service.
                </p>

                <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                  Met een achtergrond in IT en een passie voor ondernemerschap,
                  heb ik Start Beheer opgericht om deze kloof te dichten.
                  Onze aanpak is simpel: persoonlijk, betrouwbaar, en altijd bereikbaar.
                </p>

                <div className="space-y-4">
                  {['Persoonlijke IT-partner voor uw bedrijf', 'Altijd bereikbaar wanneer u ons nodig heeft', 'Eerlijke prijzen, geen verborgen kosten', 'Proactief meedenken met uw groei'].map((item, i) => (
                    <m.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary-emerald flex-shrink-0" />
                      <span className="text-slate-600">{item}</span>
                    </m.div>
                  ))}
                </div>
              </m.div>
              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-slate-200 backdrop-blur-sm">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-blue/20 rounded-full blur-2xl" />
                  <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-violet/20 rounded-full blur-2xl" />

                  <div className="relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary-blue to-primary-violet flex items-center justify-center mb-6">
                      <span className="text-3xl font-display font-bold text-slate-900">SB</span>
                    </div>

                    <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">Start Beheer</h3>
                    <p className="text-primary-blue font-medium mb-6">IT Partner voor ZZP & MKB</p>

                    <div className="space-y-4 pt-6 border-t border-slate-200">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-blue/10 flex items-center justify-center">
                          <Target className="w-5 h-5 text-primary-blue" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Missie</p>
                          <p className="text-slate-900 font-medium">IT voor Iedereen</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary-emerald/10 flex items-center justify-center">
                          <Globe className="w-5 h-5 text-primary-emerald" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-500">Locatie</p>
                          <p className="text-slate-900 font-medium">Nederland</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== VALUES SECTION ========== */}
      <section className="relative py-32 overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <HeroVisual variant="about" className="opacity-20" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/95 to-white z-[1]" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2 bg-primary-emerald/10 text-primary-emerald border-primary-emerald/30">
              <Award className="w-4 h-4 mr-2 inline" />
              Onze Waarden
            </Badge>

            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="text-slate-900">Waar Wij </span>
              <span className="text-gradient">Voor Staan</span>
            </h2>

            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Onze kernwaarden vormen de basis van alles wat we doen
            </p>
          </m.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <m.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-3xl bg-slate-100 border border-slate-200 hover:border-white/20 transition-all duration-500 h-full overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl ${serviceColors[value.color].bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <value.icon className={`w-8 h-8 ${serviceColors[value.color].text}`} />
                    </div>
                    <h3 className="text-xl font-display font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-500 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </m.article>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue/10 via-transparent to-primary-violet/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-blue/10 rounded-full blur-[150px]" />

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              <span className="text-slate-900">Klaar om </span>
              <span className="text-gradient">Samen te Werken?</span>
            </h2>

            <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
              Plan een vrijblijvend kennismakingsgesprek en ontdek hoe wij uw
              bedrijf kunnen helpen groeien met de juiste IT-oplossingen.
            </p>

            <Button
                size="lg"
                className="bg-gradient-to-r from-primary-blue to-primary-violet hover:opacity-90 shadow-lg shadow-primary-blue/25 px-10 py-6 text-lg"
                asChild
              >
                <Link href="/contact">
                  Neem Contact Op
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-emerald" />
                <span>Gratis Kennismaking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-emerald" />
                <span>Geen Verplichtingen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary-emerald" />
                <span>Direct Advies</span>
              </div>
            </div>
          </m.div>
        </div>
      </section>
    </main>
  )
}
