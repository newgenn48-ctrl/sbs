'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Users,
  Target,
  Heart,
  Zap,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Lightbulb,
  Handshake,
  TrendingUp,
  Award
} from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Persoonlijke Aanpak',
    description: 'Bij ons bent u geen nummer. U krijgt een vast aanspreekpunt die uw bedrijf door en door kent.',
    color: 'quantum-blue'
  },
  {
    icon: Shield,
    title: 'Betrouwbaarheid',
    description: 'Wij doen wat we beloven. Transparante communicatie en geen verrassingen achteraf.',
    color: 'quantum-green'
  },
  {
    icon: Lightbulb,
    title: 'Innovatie',
    description: 'We blijven vooroplopen met de nieuwste technologieën om uw bedrijf te laten groeien.',
    color: 'quantum-purple'
  },
  {
    icon: Handshake,
    title: 'Partnerschap',
    description: 'Wij zien onszelf als verlengstuk van uw team, niet als externe leverancier.',
    color: 'quantum-orange'
  },
]

const stats = [
  { value: '50+', label: 'Tevreden Klanten' },
  { value: '24u', label: 'Responstijd' },
  { value: '99.9%', label: 'Uptime Garantie' },
  { value: '5+', label: 'Jaar Ervaring' },
]

const services = [
  'IT Beheer & Support',
  'Website Development',
  'AI & Automatisering',
  'Online Marketing',
  'Microsoft 365',
  'Cybersecurity',
]

export default function AboutClientPage() {
  return (
    <main className="min-h-screen bg-cyber-darker">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-quantum-blue/20 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-6 px-4 py-2 bg-quantum-blue/20 text-quantum-blue border-quantum-blue/30">
                <Users className="w-4 h-4 mr-2 inline" />
                Over Start Beheer
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                <span className="text-white">Uw IT Partner die </span>
                <span className="text-gradient">Écht Begrijpt</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Start Beheer is opgericht met één missie: ZZP'ers en het MKB helpen met
                IT-oplossingen die écht werken. Geen complexe enterprise-systemen, maar
                praktische tools die uw bedrijf laten groeien.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect p-6 rounded-2xl text-center border border-white/10"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-quantum-purple/10 via-transparent to-transparent" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-4 px-4 py-2 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                <Target className="w-4 h-4 mr-2 inline" />
                Onze Missie
              </Badge>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                <span className="text-white">IT Toegankelijk voor </span>
                <span className="text-gradient">Iedereen</span>
              </h2>

              <p className="text-gray-400 mb-6 leading-relaxed">
                Wij geloven dat professionele IT-oplossingen niet alleen voor grote bedrijven
                beschikbaar moeten zijn. Daarom bieden wij dezelfde kwaliteit en expertise aan
                ZZP'ers en het MKB, tegen eerlijke en transparante tarieven.
              </p>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Of u nu een website nodig heeft, uw IT wilt uitbesteden, of wilt groeien met
                AI en marketing - wij staan voor u klaar. Alles onder één dak, met één vast
                aanspreekpunt.
              </p>

              <div className="flex flex-wrap gap-3">
                {services.map((service) => (
                  <span
                    key={service}
                    className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 border border-white/10"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-3xl border border-quantum-purple/20"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Waarom Klanten voor Ons Kiezen
              </h3>

              <div className="space-y-4">
                {[
                  'Eén vast aanspreekpunt voor alle IT-zaken',
                  'Transparante tarieven zonder verrassingen',
                  'Snelle responstijd binnen 24 uur',
                  'Complete oplossingen onder één dak',
                  'Persoonlijke aanpak op maat',
                  'Proactief meedenken met uw bedrijf',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-quantum-green flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 px-4 py-2 bg-quantum-green/10 text-quantum-green border-quantum-green/30">
              <Award className="w-4 h-4 mr-2 inline" />
              Onze Waarden
            </Badge>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              <span className="text-white">Waar Wij </span>
              <span className="text-gradient">Voor Staan</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              Onze kernwaarden vormen de basis van alles wat we doen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`glass-effect p-6 rounded-2xl border border-${value.color}/20 hover:border-${value.color}/40 transition-all group h-full`}
              >
                <div className={`w-14 h-14 rounded-xl bg-${value.color}/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <value.icon className={`w-7 h-7 text-${value.color}`} />
                </div>
                <h3 className="text-xl font-display font-bold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/10 via-transparent to-quantum-purple/10" />

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-effect rounded-3xl overflow-hidden border border-quantum-blue/20">
              <div className="h-1 bg-gradient-to-r from-quantum-blue via-quantum-purple to-quantum-green" />

              <div className="p-8 sm:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                  <span className="text-white">Klaar om </span>
                  <span className="text-gradient">Kennis te Maken?</span>
                </h2>

                <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                  Plan een vrijblijvend kennismakingsgesprek en ontdek hoe wij uw
                  bedrijf kunnen helpen groeien met de juiste IT-oplossingen.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 px-8"
                    asChild
                  >
                    <Link href="/contact">
                      Neem Contact Op
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-white/20 hover:bg-white/5"
                    asChild
                  >
                    <Link href="tel:+31301234567">
                      <Phone className="mr-2 w-5 h-5" />
                      030-123 4567
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
