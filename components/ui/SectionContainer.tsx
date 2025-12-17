'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  className?: string
  id?: string
  variant?: 'default' | 'gradient' | 'glass' | 'dark'
  withGlow?: boolean
  glowColor?: 'blue' | 'purple' | 'green' | 'orange'
}

export default function SectionContainer({
  children,
  className = '',
  id,
  variant = 'default',
  withGlow = false,
  glowColor = 'blue'
}: SectionContainerProps) {
  const glowColors = {
    blue: 'from-quantum-blue/10 via-quantum-blue/5',
    purple: 'from-quantum-purple/10 via-quantum-purple/5',
    green: 'from-quantum-green/10 via-quantum-green/5',
    orange: 'from-quantum-orange/10 via-quantum-orange/5',
  }

  const variants = {
    default: 'bg-cyber-darker',
    gradient: 'bg-gradient-to-b from-cyber-darker via-cyber-dark/50 to-cyber-darker',
    glass: 'bg-cyber-dark/40 backdrop-blur-xl',
    dark: 'bg-cyber-darker',
  }

  return (
    <section id={id} className={`relative py-24 lg:py-32 overflow-hidden ${className}`}>
      {/* Base background */}
      <div className={`absolute inset-0 ${variants[variant]}`} />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />

      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Optional glow effect - very subtle */}
      {withGlow && (
        <>
          <div className={`absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-gradient-radial ${glowColors[glowColor]} to-transparent rounded-full blur-3xl -translate-y-1/2 opacity-30`} />
          <div className={`absolute top-1/2 right-1/4 w-[400px] h-[400px] bg-gradient-radial ${glowColors[glowColor]} to-transparent rounded-full blur-3xl -translate-y-1/2 opacity-20`} />
        </>
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

// Premium card component - monochrome style
interface PremiumCardProps {
  children: ReactNode
  className?: string
  hoverable?: boolean
}

export function PremiumCard({
  children,
  className = '',
  hoverable = true
}: PremiumCardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.3 }}
      className={`
        relative overflow-hidden
        bg-white/[0.02] backdrop-blur-sm
        border border-white/[0.06]
        ${hoverable ? 'hover:border-white/[0.12] hover:bg-white/[0.04]' : ''}
        rounded-2xl lg:rounded-3xl
        transition-all duration-300
        ${className}
      `}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Content */}
      {children}
    </motion.div>
  )
}

// Section header component
interface SectionHeaderProps {
  badge?: string
  badgeColor?: 'blue' | 'purple' | 'green' | 'orange'
  title: string
  titleHighlight?: string
  description?: string
}

export function SectionHeader({
  badge,
  badgeColor = 'blue',
  title,
  titleHighlight,
  description
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16 lg:mb-20"
    >
      {badge && (
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-2 bg-white/5 border border-white/10 text-white/70 text-sm font-medium rounded-full mb-6"
        >
          {badge}
        </motion.span>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-6">
        <span className="text-white">{title} </span>
        {titleHighlight && <span className="text-gradient">{titleHighlight}</span>}
      </h2>

      {description && (
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}
