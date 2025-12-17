'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Shield, Code, BrainCircuit, Megaphone, ArrowRight, CheckCircle2 } from 'lucide-react'
import SectionContainer, { SectionHeader, PremiumCard } from '@/components/ui/SectionContainer'
import IconBox from '@/components/ui/IconBox'

const services = [
  {
    icon: Shield,
    title: 'IT Beheer & Support',
    subtitle: 'Uw IT volledig ontzorgd',
    description: 'Professioneel IT beheer voor bedrijven die zich willen focussen op hun core business.',
    href: '/it-support',
    color: 'blue' as const,
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
    color: 'purple' as const,
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
    color: 'green' as const,
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
    color: 'orange' as const,
    services: [
      { name: 'Google Ads Beheer', href: '/marketing/google-ads-beheer' },
      { name: 'SEO Services', href: '/marketing/seo-services' },
      { name: 'Social Media Marketing', href: '/marketing/social-media' },
      { name: 'Marketing Automation', href: '/marketing/marketing-automation' },
    ],
  },
]

const textColors = {
  blue: 'text-quantum-blue',
  purple: 'text-quantum-purple',
  green: 'text-quantum-green',
  orange: 'text-quantum-orange',
}

export default function ServicesGrid() {
  return (
    <SectionContainer id="services" variant="gradient" withGlow glowColor="blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Onze Diensten"
          badgeColor="blue"
          title="Complete IT-Diensten voor"
          titleHighlight="ZZP & MKB"
          description="Van IT beheer uitbesteden tot website laten maken. Wij zijn uw centrale partner voor alle digitale oplossingen."
        />

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <PremiumCard className="p-6 sm:p-8 h-full">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <IconBox
                    icon={service.icon}
                    color={service.color}
                    size="lg"
                    variant="solid"
                  />
                  <div>
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-1">
                      {service.title}
                    </h3>
                    <p className={`text-sm font-medium ${textColors[service.color]}`}>
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Service Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.services.map((subService) => (
                    <Link
                      key={subService.name}
                      href={subService.href}
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                    >
                      <CheckCircle2 className={`w-4 h-4 ${textColors[service.color]} flex-shrink-0`} />
                      <span className="group-hover/link:translate-x-1 transition-transform">
                        {subService.name}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* CTA Link */}
                <Link
                  href={service.href}
                  className={`inline-flex items-center gap-2 ${textColors[service.color]} font-medium text-sm hover:gap-3 transition-all group/cta`}
                >
                  <span>Bekijk alle diensten</span>
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </Link>
              </PremiumCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-6">
            Niet zeker welke diensten u nodig heeft?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-quantum-blue to-quantum-purple rounded-full text-white font-medium hover:shadow-lg hover:shadow-quantum-blue/25 transition-all duration-300 group"
          >
            <span>Vraag gratis advies aan</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
