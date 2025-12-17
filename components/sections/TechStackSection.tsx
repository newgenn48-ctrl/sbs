'use client'

import { motion } from 'framer-motion'
import ScrollTrigger from '@/components/animations/ScrollTrigger'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const FloatingElements = dynamic(() => import('@/components/3d/FloatingElements'), {
  ssr: false,
})

// Technologies we work with - grouped by category
const techCategories = [
  {
    category: 'Cloud & Infrastructure',
    items: [
      { name: 'Microsoft 365', icon: '☁️' },
      { name: 'Azure', icon: '⚡' },
      { name: 'Google Workspace', icon: '🔷' },
      { name: 'AWS', icon: '🌐' },
    ]
  },
  {
    category: 'Development',
    items: [
      { name: 'React', icon: '⚛️' },
      { name: 'Next.js', icon: '▲' },
      { name: 'Node.js', icon: '💚' },
      { name: 'TypeScript', icon: '🔷' },
    ]
  },
  {
    category: 'AI & Automation',
    items: [
      { name: 'OpenAI', icon: '🤖' },
      { name: 'Zapier', icon: '⚡' },
      { name: 'Make', icon: '🔗' },
      { name: 'Power Automate', icon: '🔄' },
    ]
  },
  {
    category: 'Marketing',
    items: [
      { name: 'Google Ads', icon: '📊' },
      { name: 'Analytics', icon: '📈' },
      { name: 'SEO Tools', icon: '🔍' },
      { name: 'Social Platforms', icon: '📱' },
    ]
  },
]

export default function TechStackSection() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark/30 to-cyber-darker" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3D Floating Elements */}
        <div className="relative mb-8 lg:mb-12">
          <Suspense fallback={
            <div className="h-[300px] md:h-[400px] flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-quantum-blue/20 animate-pulse" />
            </div>
          }>
            <FloatingElements />
          </Suspense>

          {/* Centered text overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold">
                <span className="text-white">Gebouwd met </span>
                <span className="text-gradient">Moderne Tech</span>
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Section description */}
        <ScrollTrigger>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-lg text-gray-400 max-w-2xl mx-auto mb-12 lg:mb-16"
          >
            Wij werken met de nieuwste en meest betrouwbare technologieën
            om uw bedrijf toekomstbestendig te maken.
          </motion.p>
        </ScrollTrigger>

        {/* Tech Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {techCategories.map((category, categoryIndex) => (
            <ScrollTrigger key={category.category}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-cyber-dark/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 h-full hover:border-quantum-blue/30 transition-all duration-300">
                  {/* Category Header */}
                  <h3 className="text-sm font-semibold text-quantum-blue mb-4 uppercase tracking-wider">
                    {category.category}
                  </h3>

                  {/* Tech Items */}
                  <div className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: categoryIndex * 0.1 + itemIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                      >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm">{item.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollTrigger>
          ))}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-quantum-blue/50 to-transparent max-w-2xl mx-auto"
        />
      </div>
    </section>
  )
}
