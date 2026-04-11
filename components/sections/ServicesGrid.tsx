'use client'

import { m, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Link from 'next/link'
import { Shield, Code, BrainCircuit, Megaphone, ArrowRight, CheckCircle2 } from 'lucide-react'
import { useRef, useEffect } from 'react'

const colorClasses = {
  blue: {
    border: 'border-primary-blue/20 hover:border-primary-blue/40',
    bg: 'bg-primary-blue/10',
    text: 'text-primary-blue',
    icon: 'text-primary-blue',
    glow: 'group-hover:shadow-primary-blue/10',
    gradient: 'from-primary-blue/5 to-transparent',
  },
  violet: {
    border: 'border-primary-violet/20 hover:border-primary-violet/40',
    bg: 'bg-primary-violet/10',
    text: 'text-primary-violet',
    icon: 'text-primary-violet',
    glow: 'group-hover:shadow-primary-violet/10',
    gradient: 'from-primary-violet/5 to-transparent',
  },
  emerald: {
    border: 'border-primary-emerald/20 hover:border-primary-emerald/40',
    bg: 'bg-primary-emerald/10',
    text: 'text-primary-emerald',
    icon: 'text-primary-emerald',
    glow: 'group-hover:shadow-primary-emerald/10',
    gradient: 'from-primary-emerald/5 to-transparent',
  },
  warm: {
    border: 'border-amber-500/20 hover:border-amber-500/40',
    bg: 'bg-amber-500/10',
    text: 'text-amber-600',
    icon: 'text-amber-600',
    glow: 'group-hover:shadow-amber-500/10',
    gradient: 'from-amber-500/5 to-transparent',
  },
} as const

type ColorKey = keyof typeof colorClasses

const services: Array<{
  icon: typeof Shield
  title: string
  subtitle: string
  description: string
  href: string
  color: ColorKey
  services: Array<{ name: string; href: string }>
}> = [
  {
    icon: Shield,
    title: 'IT Beheer & Support',
    subtitle: 'Geen IT-zorgen meer',
    description: 'Wij nemen uw complete IT uit handen, zodat u zich kunt focussen op uw core business.',
    href: '/it-support',
    color: 'blue',
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
    subtitle: 'Websites die converteren',
    description: 'Professionele websites en webapplicaties die daadwerkelijk klanten opleveren.',
    href: '/development',
    color: 'violet',
    services: [
      { name: 'Website Laten Maken', href: '/website-laten-maken' },
      { name: 'Webapplicatie Ontwikkeling', href: '/webapplicatie-laten-maken' },
      { name: 'E-commerce Oplossingen', href: '/webshop-laten-maken' },
      { name: 'API Integraties', href: '/development' },
    ],
  },
  {
    icon: BrainCircuit,
    title: 'AI & Automatisering',
    subtitle: 'Bespaar uren per week',
    description: 'Automatiseer repetitieve taken en laat AI het zware werk doen.',
    href: '/ai',
    color: 'emerald',
    services: [
      { name: 'AI Chatbots', href: '/ai-chatbots' },
      { name: 'Proces Automatisering', href: '/proces-automatisering' },
      { name: 'AI Analytics', href: '/ai-analytics' },
      { name: 'Virtuele Assistent', href: '/virtuele-assistent' },
    ],
  },
  {
    icon: Megaphone,
    title: 'Online Marketing',
    subtitle: 'Meer klanten, meer omzet',
    description: 'Vergroot uw online zichtbaarheid en genereer kwalitatieve leads.',
    href: '/marketing',
    color: 'warm',
    services: [
      { name: 'Google Ads Beheer', href: '/google-ads-beheer' },
      { name: 'SEO Services', href: '/seo-specialist' },
      { name: 'Social Media Marketing', href: '/social-media-marketing' },
      { name: 'Marketing Automation', href: '/marketing-automatisering' },
    ],
  },
]

function TiltCard({ children, className }: { children: React.ReactNode; className: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isTouchRef = useRef(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), { stiffness: 300, damping: 30 })

  useEffect(() => {
    isTouchRef.current = window.matchMedia('(pointer: coarse)').matches
  }, [])

  function handleMouse(e: React.MouseEvent) {
    if (isTouchRef.current || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <m.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={className}
    >
      {children}
    </m.div>
  )
}

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 relative bg-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <m.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-blue/10 border border-primary-blue/20 text-primary-blue text-sm font-medium">
            Onze Diensten
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 text-slate-900">
            Alles wat uw bedrijf nodig heeft,{' '}
            <span className="text-gradient">onder één dak</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Geen gedoe met meerdere leveranciers. Wij zijn uw centrale partner voor alle digitale oplossingen.
          </p>
        </m.header>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TiltCard className={`relative bg-white p-6 sm:p-8 rounded-2xl border ${colorClasses[service.color].border} shadow-sm group h-full transition-shadow duration-300 hover:shadow-xl ${colorClasses[service.color].glow}`}>
                {/* Subtle gradient overlay on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses[service.color].gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl ${colorClasses[service.color].bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className={`w-7 h-7 ${colorClasses[service.color].icon}`} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-1">
                        {service.title}
                      </h3>
                      <p className={`text-sm font-medium ${colorClasses[service.color].text}`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {service.services.map((subService) => (
                      <Link
                        key={subService.name}
                        href={subService.href}
                        className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors group/link"
                      >
                        <CheckCircle2 className={`w-4 h-4 ${colorClasses[service.color].icon} flex-shrink-0`} />
                        <span className="group-hover/link:translate-x-1 transition-transform">
                          {subService.name}
                        </span>
                      </Link>
                    ))}
                  </div>

                  <Link
                    href={service.href}
                    className={`inline-flex items-center gap-2 ${colorClasses[service.color].text} font-medium text-sm hover:gap-3 transition-all group/cta`}
                  >
                    <span>Bekijk alle diensten</span>
                    <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </TiltCard>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-slate-50 px-8 py-6 rounded-2xl border border-slate-200">
            <p className="text-slate-600 mb-4">Niet zeker welke diensten u nodig heeft?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-blue to-primary-violet rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary-blue/25 transition-all duration-300 group"
            >
              <span>Vraag gratis advies aan</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </m.div>
      </div>
    </section>
  )
}
