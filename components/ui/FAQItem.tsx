'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Static color classes for Tailwind purging (dynamic classes don't work)
const colorClasses = {
  'quantum-blue': 'text-quantum-blue',
  'quantum-purple': 'text-quantum-purple',
  'quantum-green': 'text-quantum-green',
  'quantum-orange': 'text-quantum-orange',
} as const

export type FAQColor = keyof typeof colorClasses

interface FAQItemProps {
  q: string
  a: string
  color?: FAQColor
}

export function FAQItem({ q, a, color = 'quantum-blue' }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-lg text-gray-200 pr-4">{q}</h3>
        <ChevronDown
          className={`w-5 h-5 ${colorClasses[color]} transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
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
            <p className="pb-5 text-gray-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQItem
