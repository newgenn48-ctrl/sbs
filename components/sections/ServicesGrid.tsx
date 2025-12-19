'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Code, BrainCircuit, Megaphone, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const services = [
  {
    icon: Shield,
    title: 'IT Beheer & Support',
    subtitle: 'Uw IT volledig ontzorgd',
    description: 'Professioneel IT beheer voor bedrijven die zich willen focussen op hun core business.',
    href: '/it-support',
    color: 'quantum-blue',
    services: [
      { name: 'Systeembeheer Uitbesteden', href: '/systeembeheer-uitbesteden' },
      { name: 'Werkplekbeheer Uitbesteden', href: '/werkplekbeheer-uitbesteden' },
      { name: 'Microsoft 365 Beheer', href: '/microsoft-365-beheer' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
    ],
  },
  {
    icon: Code,
    title: 'Development',
    subtitle: 'Websites & Applicaties op maat',
    description: 'Van professionele websites tot complexe webapplicaties die uw bedrijf laten groeien.',
    href: '/development',
    color: 'quantum-purple',
    services: [
      { name: 'Website Laten Maken', href: '/development/website-laten-maken' },
      { name: 'Webapplicatie Ontwikkeling', href: '/development/webapplicatie-ontwikkeling' },
      { name: 'E-commerce Oplossingen', href: '/development/ecommerce' },
      { name: 'API Integraties', href: '/development' },
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Automatisering',
    subtitle: 'Slimmer werken met AI',
    description: 'Implementeer kunstmatige intelligentie in uw bedrijfsprocessen.',
    href: '/ai',
    color: 'quantum-green',
    services: [
      { name: 'AI Chatbots', href: '/ai/chatbots' },
      { name: 'Proces Automatisering', href: '/ai/process-automation' },
      { name: 'AI Analytics', href: '/ai/analytics' },
      { name: 'Virtuele Assistent', href: '/ai/virtual-assistant' },
    ],
  },
  {
    icon: Megaphone,
    title: 'Online Marketing',
    subtitle: 'Meer zichtbaarheid & leads',
    description: 'Vergroot uw online bereik en genereer meer kwalitatieve leads.',
    href: '/marketing',
    color: 'quantum-orange',
    services: [
      { name: 'Google Ads Beheer', href: '/marketing/google-ads-beheer' },
      { name: 'SEO Services', href: '/marketing/seo-services' },
      { name: 'Social Media Marketing', href: '/marketing/social-media' },
      { name: 'Marketing Automation', href: '/marketing/marketing-automation' },
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Subtle color accents only */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-quantum-blue/10 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-quantum-purple/10 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="mb-4 px-4 py-2 bg-quantum-blue/10 text-quantum-blue border-quantum-blue/30">
            Onze Diensten
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Complete IT-Diensten voor{' '}
            <span className="text-gradient">ZZP & MKB</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Van IT beheer uitbesteden tot website laten maken. Wij zijn uw centrale partner voor alle digitale oplossingen.
          </p>
        </motion.header>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`glass-effect p-6 sm:p-8 rounded-2xl border border-${service.color}/20 hover:border-${service.color}/40 transition-all group h-full`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <service.icon className={`w-7 h-7 text-${service.color}`} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                    {service.title}
                  </h3>
                  <p className={`text-sm font-medium text-${service.color}`}>
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Service Links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {service.services.map((subService) => (
                  <Link
                    key={subService.name}
                    href={subService.href}
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors group/link"
                  >
                    <CheckCircle2 className={`w-4 h-4 text-${service.color} flex-shrink-0`} />
                    <span className="group-hover/link:translate-x-1 transition-transform">
                      {subService.name}
                    </span>
                  </Link>
                ))}
              </div>

              {/* CTA Link */}
              <Link
                href={service.href}
                className={`inline-flex items-center gap-2 text-${service.color} font-medium text-sm hover:gap-3 transition-all group/cta`}
              >
                <span>Bekijk alle diensten</span>
                <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass-effect px-8 py-6 rounded-2xl border border-white/10">
            <p className="text-gray-400 mb-4">
              Niet zeker welke diensten u nodig heeft?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-quantum-blue to-quantum-purple rounded-full text-white font-medium hover:shadow-lg hover:shadow-quantum-blue/25 transition-all duration-300 group"
            >
              <span>Vraag gratis advies aan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
