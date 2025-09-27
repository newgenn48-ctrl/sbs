'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface HologramCardProps {
  children: ReactNode
  className?: string
}

export default function HologramCard({ children, className = '' }: HologramCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, rotateY: 5 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className={`relative group ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue/20 via-quantum-purple/20 to-quantum-pink/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
      <div className="relative glass-effect rounded-2xl border border-quantum-blue/20 hover:border-quantum-blue/50 transition-all overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-quantum-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {children}
      </div>
    </motion.div>
  )
}