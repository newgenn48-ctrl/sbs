'use client'

import { m, animate } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Users, Award, Clock, CheckCircle2 } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const highlights = [
  { icon: Users, text: 'Persoonlijke aanpak, geen nummers' },
  { icon: Award, text: '10+ jaar IT ervaring' },
  { icon: Clock, text: 'Snelle responstijd' },
  { icon: CheckCircle2, text: 'Transparante communicatie' },
]

function AnimatedStat({ value, label, suffix = '' }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const controls = animate(0, value, {
            duration: 2,
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
  }, [value])

  return (
    <div ref={ref} className="bg-white rounded-xl p-5 text-center border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
      <div className="text-2xl font-display font-bold text-slate-900 group-hover:text-gradient transition-colors">
        {count}{suffix}
      </div>
      <div className="text-xs text-slate-500 mt-1">{label}</div>
    </div>
  )
}

export default function AboutPreview() {
  return (
    <section className="relative py-24 lg:py-32 bg-slate-50">
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Video */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                {/* Gradient glow on hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-blue/20 via-primary-violet/20 to-primary-emerald/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                <div className="relative aspect-video bg-slate-100 rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                  >
                    <source src="/hero-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Stats bar */}
              <div className="mt-6 grid grid-cols-3 gap-4">
                <AnimatedStat value={10} suffix="+" label="Jaar Ervaring" />
                <AnimatedStat value={4} suffix="-in-1" label="IT, Dev, AI & Marketing" />
                <AnimatedStat value={24} suffix="u" label="Responstijd" />
              </div>
            </m.div>
            <m.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-violet/10 border border-primary-violet/20 text-primary-violet text-sm font-medium">
                <Users className="w-4 h-4" />
                Over Ons
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 text-slate-900">
                Wij Zijn{' '}
                <span className="text-gradient">Start Beheer</span>
              </h2>

              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Als uw digitale partner nemen wij de complete IT-zorg uit handen.
                Van systeembeheer tot websites, van AI-automatisering tot online marketing.
                Zodat u zich kunt focussen op wat echt belangrijk is: uw business.
              </p>

              <p className="text-slate-500 mb-8 leading-relaxed">
                Geen ingewikkelde contracten, geen verborgen kosten. Gewoon eerlijke IT-ondersteuning
                met een persoonlijke touch.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {highlights.map((item, index) => (
                  <m.div
                    key={item.text}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-blue/10 flex items-center justify-center group-hover:bg-primary-blue/20 transition-colors">
                      <item.icon className="w-4 h-4 text-primary-blue" />
                    </div>
                    <span className="text-slate-700 text-sm">{item.text}</span>
                  </m.div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-primary-blue to-primary-violet hover:brightness-110 transition-all shadow-lg shadow-primary-blue/20 text-white"
                asChild
              >
                <Link href="/about">
                  Meer Over Ons
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}
