'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import HologramCard from '@/components/animations/HologramCard'
import { 
  Server, 
  TrendingUp, 
  Globe, 
  Brain,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Server,
    title: 'IT Beheer & Support',
    description: 'Proactief IT beheer dat downtime voorkomt en uw team productief houdt. Van werkplekbeheer tot volledige ontzorging.',
    href: '/it-beheer-uitbesteden',
    color: 'from-quantum-blue to-quantum-purple',
    features: ['Proactief Beheer', '24/7 Monitoring', 'Cybersecurity', 'Strategisch Advies']
  },
  {
    icon: TrendingUp,
    title: 'Growth Marketing',
    description: 'Data-gedreven marketing die écht converteert. Google Ads, SEO, LinkedIn B2B lead generation en marketing automation.',
    href: '/marketing',
    color: 'from-quantum-purple to-quantum-pink',
    features: ['Google Ads', 'SEO', 'Social Media', 'Email Marketing']
  },
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Websites die verkopen, niet alleen mooi zijn. Van simpele bedrijfssite tot complex e-commerce platform.',
    href: '/websites',
    color: 'from-quantum-green to-quantum-blue',
    features: ['WordPress', 'E-commerce', 'Custom Development', 'Performance']
  },
  {
    icon: Brain,
    title: 'AI & Automation',
    description: 'Automatiseer repetitieve taken, verbeter klantenservice met AI-chatbots en bespaar tot 40% tijd met process automation.',
    href: '/ai',
    color: 'from-quantum-pink to-quantum-orange',
    features: ['Chatbots', 'Process Automation', 'Virtual Assistant', 'AI Analytics']
  }
]

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Onze Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Geïntegreerde oplossingen die samenwerken voor maximale impact
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <HologramCard className="h-full">
                <Link href={service.href} className="block p-8 group">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-gradient transition-all">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <span 
                        key={i}
                        className="px-3 py-1 text-xs rounded-full bg-cyber-light text-gray-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center text-quantum-blue group-hover:text-quantum-purple transition-colors">
                    <span className="font-medium">Meer informatie</span>
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              </HologramCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}