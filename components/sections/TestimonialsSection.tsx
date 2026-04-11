'use client'

import { m, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Star, Quote, CheckCircle2 } from 'lucide-react'
import { useRef, useEffect } from 'react'

const testimonials = [
  {
    name: 'Mark de Vries',
    role: 'Directeur, MKB Adviesgroep',
    text: 'Sinds we onze IT hebben uitbesteed aan Start Beheer, hebben we geen enkel IT-probleem meer gehad. Ze denken proactief mee en zijn altijd bereikbaar.',
    rating: 5,
  },
  {
    name: 'Sandra Bakker',
    role: 'ZZP Consultant',
    text: 'Eindelijk een IT-partner die begrijpt wat een zelfstandige nodig heeft. Mijn website ziet er professioneel uit en de SEO levert daadwerkelijk klanten op.',
    rating: 5,
  },
  {
    name: 'Peter Janssen',
    role: 'Eigenaar, Janssen & Co',
    text: 'De AI chatbot die Start Beheer voor ons heeft gebouwd bespaart ons minstens 10 uur per week. Dat had ik niet verwacht van zo\'n klein team.',
    rating: 5,
  },
]

const reasons = [
  { title: 'Eén Vast Aanspreekpunt', description: 'U spreekt altijd met dezelfde persoon die uw bedrijf kent.' },
  { title: 'Alles Onder Één Dak', description: 'IT, websites, AI en marketing. Geen meerdere leveranciers.' },
  { title: 'Focus op ZZP & MKB', description: 'Praktische oplossingen, geen enterprise-complexiteit.' },
  { title: 'Transparante Tarieven', description: 'Duidelijke prijzen vooraf. Geen verborgen kosten.' },
]

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isTouchRef = useRef(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [3, -3]), { stiffness: 300, damping: 30 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-3, 3]), { stiffness: 300, damping: 30 })

  useEffect(() => {
    isTouchRef.current = window.matchMedia('(pointer: coarse)').matches
  }, [])

  function handleMouse(e: React.MouseEvent) {
    if (isTouchRef.current || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      viewport={{ once: true }}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 hover:border-primary-blue/30 transition-all h-full flex flex-col shadow-sm hover:shadow-xl group"
    >
      <Quote className="w-8 h-8 text-primary-blue/15 mb-4 group-hover:text-primary-blue/30 transition-colors" />

      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>

      <p className="text-slate-700 leading-relaxed mb-6 flex-1">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-blue to-primary-violet flex items-center justify-center text-white font-bold text-sm">
          {testimonial.name.split(' ').map(n => n[0]).join('')}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">{testimonial.name}</div>
          <div className="text-xs text-slate-500">{testimonial.role}</div>
        </div>
      </div>
    </m.div>
  )
}

export default function TestimonialsSection() {
  return (
    <section className="py-24 relative bg-white">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary-violet/10 border border-primary-violet/20 text-primary-violet text-sm font-medium">
            Waarom Start Beheer
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4 text-slate-900">
            Wat onze klanten{' '}
            <span className="text-gradient">over ons zeggen</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Echte verhalen van ondernemers die hun IT aan ons hebben toevertrouwd.
          </p>
        </m.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto mb-20">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Reasons — bento style */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <m.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-blue/20 hover:bg-white transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-blue/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-primary-blue font-display font-bold text-sm">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="text-base font-display font-bold text-slate-900 mb-1.5">{reason.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
