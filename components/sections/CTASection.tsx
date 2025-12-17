'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Calendar, CheckCircle2, Clock, Shield, Users } from 'lucide-react'
import Link from 'next/link'
import SectionContainer, { PremiumCard } from '@/components/ui/SectionContainer'

const benefits = [
  { icon: Clock, text: 'Binnen 24 uur reactie' },
  { icon: Shield, text: '100% vrijblijvend' },
  { icon: Users, text: 'Persoonlijk advies' },
]

const services = [
  'IT Beheer Uitbesteden',
  'Website Laten Maken',
  'AI Chatbots',
  'Google Ads Beheer',
  'Systeembeheer',
  'SEO Services',
]

export default function CTASection() {
  return (
    <SectionContainer variant="gradient" withGlow glowColor="blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Main CTA Card */}
          <PremiumCard hoverable={false} className="overflow-hidden">
            {/* Gradient top border */}
            <div className="h-1 bg-gradient-to-r from-quantum-blue via-quantum-purple to-quantum-green" />

            <div className="p-8 sm:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div className="text-center lg:text-left">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-quantum-blue/10 border border-quantum-blue/20 rounded-full mb-6"
                  >
                    <Calendar className="w-4 h-4 text-quantum-blue" />
                    <span className="text-sm font-medium text-quantum-blue">Gratis Adviesgesprek</span>
                  </motion.div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
                    <span className="text-white">Klaar voor </span>
                    <span className="text-gradient">Digitale Groei?</span>
                  </h2>

                  <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                    Plan een vrijblijvend gesprek en ontdek hoe wij uw bedrijf kunnen helpen met
                    IT-beheer, websites, AI-oplossingen en online marketing.
                  </p>

                  {/* Benefits */}
                  <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                    {benefits.map((benefit) => (
                      <div key={benefit.text} className="flex items-center gap-2 text-gray-300">
                        <benefit.icon className="w-4 h-4 text-quantum-green" />
                        <span className="text-sm">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:shadow-lg hover:shadow-quantum-blue/25 transition-all duration-300 px-8 py-6 text-base sm:text-lg group"
                      asChild
                    >
                      <Link href="/contact">
                        Plan Kennismaking
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 px-8 py-6 text-base sm:text-lg transition-all duration-300"
                      asChild
                    >
                      <Link href="/oplossingen">
                        Bekijk Diensten
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Right Column - Service Tags */}
                <div className="hidden lg:block">
                  <div className="bg-cyber-darker/50 rounded-2xl p-8 border border-gray-800/50">
                    <h3 className="text-lg font-semibold text-white mb-6 text-center">
                      Waar kunnen we u mee helpen?
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 p-3 bg-cyber-dark/50 rounded-xl border border-gray-800/50 hover:border-quantum-blue/30 transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-quantum-blue flex-shrink-0" />
                          <span className="text-sm text-gray-300">{service}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-center text-gray-500 text-sm mt-6">
                      En nog veel meer IT-oplossingen
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </PremiumCard>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-500 text-sm">
              Geen verplichtingen - gewoon een goed gesprek
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  )
}
