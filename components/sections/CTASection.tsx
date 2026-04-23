'use client'

import { m } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle2, Clock, Shield, Users, Phone, Sparkles } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  { icon: Clock, text: 'Snel geschakeld' },
  { icon: Shield, text: '100% vrijblijvend' },
  { icon: Users, text: 'Op maat advies' },
]

const services = [
  'IT Beheer Uitbesteden',
  'Website Laten Maken',
  'AI Chatbots',
  'Google Ads Beheer',
  'Systeembeheer',
  'SEO Services',
]

const bottomTexts = ['Geen verplichtingen', 'Direct een plan van aanpak', 'Concrete resultaten']

export default function CTASection() {
  return (
    <section className="py-24 relative bg-[#0B1121] overflow-hidden">
      {/* Animated gradient blobs */}
      <m.div
        className="absolute top-0 right-0 w-[80vw] max-w-[500px] h-[80vw] max-h-[500px] rounded-full blur-[120px] opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }}
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <m.div
        className="absolute bottom-0 left-0 w-[70vw] max-w-[400px] h-[70vw] max-h-[400px] rounded-full blur-[100px] opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)' }}
        animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dot-pattern" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          {/* Main card with animated gradient border */}
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient border */}
            <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary-blue via-primary-violet to-primary-emerald opacity-60" />

            <div className="relative bg-[#0f1629] rounded-3xl">
              <div className="p-8 sm:p-12 lg:p-16">
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  
                  <div className="text-center lg:text-left">
                    <m.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium"
                    >
                      <Sparkles className="w-4 h-4" />
                      Gratis & Vrijblijvend
                    </m.div>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6 text-white">
                      Klaar voor{' '}
                      <span className="text-gradient">digitale groei?</span>
                    </h2>

                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                      Plan een vrijblijvend gesprek en ontdek hoe wij uw bedrijf kunnen helpen met
                      IT-beheer, websites, AI-oplossingen en online marketing.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                      {benefits.map((benefit) => (
                        <div key={benefit.text} className="flex items-center gap-2 text-slate-400">
                          <benefit.icon className="w-4 h-4 text-emerald-400" />
                          <span className="text-sm">{benefit.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                      <Button
                        size="lg"
                        className="bg-white text-[#0B1121] hover:bg-slate-100 font-semibold px-8 shadow-none hover-glow"
                        asChild
                      >
                        <Link href="/gratis-advies">
                          Plan Gratis Adviesgesprek
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>

                    <div className="mt-6 flex items-center gap-2 justify-center lg:justify-start text-slate-400">
                      <Phone className="w-4 h-4 text-primary-blue" />
                      <span className="text-sm">Of bel direct: </span>
                      <a href="tel:+31687874001" className="text-sm font-semibold text-white hover:text-primary-blue transition-colors">
                        06 87 87 40 01
                      </a>
                    </div>
                  </div>
                  <div className="hidden lg:block">
                    <div className="bg-white/[0.03] backdrop-blur-sm rounded-2xl p-8 border border-white/[0.06]">
                      <h3 className="text-lg font-semibold text-white mb-6 text-center">
                        Waar kunnen we u mee helpen?
                      </h3>
                      <div className="grid grid-cols-2 gap-3">
                        {services.map((service, i) => (
                          <m.div
                            key={service}
                            initial={{ opacity: 0, x: 10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 + i * 0.08 }}
                            className="flex items-center gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-primary-blue/30 hover:bg-white/[0.06] transition-all duration-300"
                          >
                            <CheckCircle2 className="w-4 h-4 text-primary-blue flex-shrink-0" />
                            <span className="text-sm text-slate-300">{service}</span>
                          </m.div>
                        ))}
                      </div>
                      <p className="text-center text-slate-500 text-sm mt-6">
                        En nog veel meer IT-oplossingen
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <m.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400"
          >
            {bottomTexts.map((text) => (
              <span key={text} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {text}
              </span>
            ))}
          </m.div>
        </m.div>
      </div>
    </section>
  )
}
