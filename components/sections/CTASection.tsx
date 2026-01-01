'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Calendar, CheckCircle2, Clock, Shield, Users, Phone } from 'lucide-react'
import Link from 'next/link'

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
    <section className="py-24 relative overflow-hidden">
      {/* Subtle color accent only */}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/10 via-transparent to-quantum-purple/10" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Main CTA Card */}
          <div className="glass-effect rounded-3xl overflow-hidden border border-quantum-blue/20">
            {/* Gradient top border */}
            <div className="h-1 bg-gradient-to-r from-quantum-blue via-quantum-purple to-quantum-green" />

            <div className="p-8 sm:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Column - Content */}
                <div className="text-center lg:text-left">
                  <Badge className="mb-6 px-4 py-2 bg-quantum-green/20 text-quantum-green border-quantum-green/30">
                    <Calendar className="w-4 h-4 mr-2 inline" />
                    Gratis & Vrijblijvend
                  </Badge>

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
                      className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:opacity-90 shadow-lg shadow-quantum-blue/25 px-8"
                      asChild
                    >
                      <Link href="/contact">
                        Plan Gratis Adviesgesprek
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    
                  </div>
                </div>

                {/* Right Column - Service Tags */}
                <div className="hidden lg:block">
                  <div className="glass-effect rounded-2xl p-8 border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-6 text-center">
                      Waar kunnen we u mee helpen?
                    </h3>

                    <div className="grid grid-cols-2 gap-3">
                      {services.map((service) => (
                        <div
                          key={service}
                          className="flex items-center gap-2 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-quantum-blue/30 transition-all"
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
          </div>

          {/* Bottom trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-quantum-green" />
              Geen verplichtingen
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-quantum-green" />
              Advies op maat
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-quantum-green" />
              Reactie binnen 24 uur
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
