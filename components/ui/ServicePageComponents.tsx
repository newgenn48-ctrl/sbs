'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-b border-cyber-light"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <h3 className="font-semibold text-lg text-gray-200">{q}</h3>
        <ChevronDown
          className={`w-6 h-6 text-quantum-purple transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-400">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, children }) => (
  <div className="glass-effect p-6 rounded-lg border border-cyber-light hover:border-quantum-blue transition-all duration-300 h-full flex flex-col">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-quantum-blue/20 rounded-full mr-4">
        <Icon className="w-6 h-6 text-quantum-blue" />
      </div>
      <h3 className="text-xl font-bold font-display">{title}</h3>
    </div>
    <div className="flex-grow text-gray-400">
        {children}
    </div>
  </div>
);
