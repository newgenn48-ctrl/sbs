'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, Award, Clock, CheckCircle2 } from 'lucide-react'

const highlights = [
  { icon: Users, text: 'Persoonlijke aanpak, geen nummers' },
  { icon: Award, text: '10+ jaar IT ervaring' },
  { icon: Clock, text: 'Snelle responstijd' },
  { icon: CheckCircle2, text: 'Transparante communicatie' },
]

export default function AboutPreview() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark/50 to-cyber-darker" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Video */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-quantum-blue/10">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-quantum-blue/20 via-quantum-purple/20 to-quantum-green/20 rounded-2xl blur-xl opacity-50" />

                <div className="relative aspect-video bg-cyber-dark rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                  </video>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker/60 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 lg:-right-8"
              >
                <div className="bg-cyber-dark/90 backdrop-blur-xl border border-quantum-blue/30 rounded-xl px-4 py-3 shadow-lg">
                  <p className="text-quantum-blue font-semibold text-lg">ZZP & MKB</p>
                  <p className="text-gray-400 text-sm">Specialist</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="mb-4 px-4 py-2 bg-quantum-purple/10 text-quantum-purple border-quantum-purple/30">
                <Users className="w-4 h-4 mr-2 inline" />
                Over Ons
              </Badge>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                <span className="text-white">Wij Zijn </span>
                <span className="text-gradient">Start Beheer</span>
              </h2>

              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                Als uw digitale partner nemen wij de complete IT-zorg uit handen.
                Van systeembeheer tot websites, van AI-automatisering tot online marketing.
                Zodat u zich kunt focussen op wat echt belangrijk is: uw business.
              </p>

              <p className="text-gray-400 mb-8 leading-relaxed">
                Geen ingewikkelde contracten, geen verborgen kosten. Gewoon eerlijke IT-ondersteuning
                met een persoonlijke touch. Wij geloven dat technologie moet werken voor u, niet andersom.
              </p>

              {/* Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-quantum-blue/10 flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-quantum-blue" />
                    </div>
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <Button
                size="lg"
                className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform"
                asChild
              >
                <Link href="/about">
                  Meer Over Ons
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
