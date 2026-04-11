'use client'

import { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

// Static color classes for Tailwind purging (dynamic classes don't work)
const colorClasses = {
  'blue': 'text-primary-blue',
  'violet': 'text-primary-violet',
  'emerald': 'text-primary-emerald',
  'warm': 'text-amber-600',
} as const

export type FAQColor = keyof typeof colorClasses

interface FAQItemProps {
  q: string
  a: string
  color?: FAQColor
}

export function FAQItem({ q, a, color = 'blue' }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-slate-200">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-5"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-lg text-slate-700 pr-4">{q}</h3>
        <ChevronDown
          className={`w-5 h-5 ${colorClasses[color]} transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-500 leading-relaxed">{a}</p>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FAQItem
