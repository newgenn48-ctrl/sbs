'use client'

import { m } from 'framer-motion'
import { ReactNode } from 'react'

interface HologramCardProps {
  children: ReactNode
  className?: string
}

export default function HologramCard({
  children,
  className = '',
}: HologramCardProps) {
  return (
    <m.div
      whileHover={{ scale: 1.02 }}
      className={`relative overflow-hidden rounded-2xl glass-effect border border-quantum-blue/20 ${className}`}
    >
      {/* Hologram scan effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 hologram-effect opacity-50" />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-quantum-blue/50" />
      <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-quantum-blue/50" />
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-quantum-blue/50" />
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-quantum-blue/50" />
    </m.div>
  )
}
