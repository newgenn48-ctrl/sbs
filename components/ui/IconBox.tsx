'use client'

import { motion } from 'framer-motion'
import { LucideIcon } from 'lucide-react'

interface IconBoxProps {
  icon: LucideIcon
  color?: 'blue' | 'purple' | 'green' | 'orange'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'solid' | 'outline'
  animated?: boolean
  className?: string
}

export default function IconBox({
  icon: Icon,
  color = 'blue',
  size = 'md',
  variant = 'default',
  animated = true,
  className = ''
}: IconBoxProps) {
  const colors = {
    blue: {
      bg: 'bg-quantum-blue/10',
      border: 'border-quantum-blue/30',
      text: 'text-quantum-blue',
      hoverBorder: 'hover:border-quantum-blue/50',
    },
    purple: {
      bg: 'bg-quantum-purple/10',
      border: 'border-quantum-purple/30',
      text: 'text-quantum-purple',
      hoverBorder: 'hover:border-quantum-purple/50',
    },
    green: {
      bg: 'bg-quantum-green/10',
      border: 'border-quantum-green/30',
      text: 'text-quantum-green',
      hoverBorder: 'hover:border-quantum-green/50',
    },
    orange: {
      bg: 'bg-quantum-orange/10',
      border: 'border-quantum-orange/30',
      text: 'text-quantum-orange',
      hoverBorder: 'hover:border-quantum-orange/50',
    },
  }

  const sizes = {
    sm: { box: 'w-10 h-10 rounded-lg', icon: 'w-5 h-5' },
    md: { box: 'w-12 h-12 rounded-xl', icon: 'w-6 h-6' },
    lg: { box: 'w-14 h-14 rounded-xl', icon: 'w-7 h-7' },
    xl: { box: 'w-16 h-16 rounded-2xl', icon: 'w-8 h-8' },
  }

  const variantStyles = {
    default: `${colors[color].bg} ${colors[color].text}`,
    solid: `${colors[color].bg} border ${colors[color].border} ${colors[color].text} ${colors[color].hoverBorder}`,
    outline: `border ${colors[color].border} ${colors[color].text} bg-transparent ${colors[color].hoverBorder}`,
  }

  const MotionWrapper = animated ? motion.div : 'div'
  const animationProps = animated ? {
    whileHover: { scale: 1.1 },
    transition: { type: 'spring' as const, stiffness: 400, damping: 25 }
  } : {}

  return (
    <MotionWrapper
      {...animationProps}
      className={`
        ${sizes[size].box}
        ${variantStyles[variant]}
        flex items-center justify-center
        flex-shrink-0
        transition-all duration-300
        ${className}
      `}
    >
      <Icon className={sizes[size].icon} />
    </MotionWrapper>
  )
}

// Floating icon with glow effect
interface FloatingIconBoxProps extends Omit<IconBoxProps, 'variant'> {
  glowEffect?: boolean
}

export function FloatingIconBox({
  icon: Icon,
  color = 'blue',
  size = 'lg',
  glowEffect = true,
  className = ''
}: FloatingIconBoxProps) {
  const colors = {
    blue: {
      bg: 'bg-quantum-blue/10',
      text: 'text-quantum-blue',
      glow: 'bg-quantum-blue/20',
    },
    purple: {
      bg: 'bg-quantum-purple/10',
      text: 'text-quantum-purple',
      glow: 'bg-quantum-purple/20',
    },
    green: {
      bg: 'bg-quantum-green/10',
      text: 'text-quantum-green',
      glow: 'bg-quantum-green/20',
    },
    orange: {
      bg: 'bg-quantum-orange/10',
      text: 'text-quantum-orange',
      glow: 'bg-quantum-orange/20',
    },
  }

  const sizes = {
    sm: { box: 'w-10 h-10', icon: 'w-5 h-5', ring: 'w-14 h-14' },
    md: { box: 'w-12 h-12', icon: 'w-6 h-6', ring: 'w-16 h-16' },
    lg: { box: 'w-14 h-14', icon: 'w-7 h-7', ring: 'w-20 h-20' },
    xl: { box: 'w-16 h-16', icon: 'w-8 h-8', ring: 'w-24 h-24' },
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Glow effect */}
      {glowEffect && (
        <div className={`
          absolute ${sizes[size].ring} rounded-full
          ${colors[color].glow} blur-xl opacity-50
        `} />
      )}

      {/* Icon box */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring' as const, stiffness: 400, damping: 25 }}
        className={`
          relative ${sizes[size].box} rounded-2xl
          ${colors[color].bg}
          flex items-center justify-center
        `}
      >
        <Icon className={`${sizes[size].icon} ${colors[color].text}`} />
      </motion.div>
    </div>
  )
}

// Number badge (for process steps)
interface NumberIconBoxProps {
  number: number | string
  color?: 'blue' | 'purple' | 'green' | 'orange'
  size?: 'sm' | 'md' | 'lg'
}

export function NumberIconBox({
  number,
  color = 'blue',
  size = 'md'
}: NumberIconBoxProps) {
  const colors = {
    blue: 'bg-quantum-blue text-white',
    purple: 'bg-quantum-purple text-white',
    green: 'bg-quantum-green text-cyber-darker',
    orange: 'bg-quantum-orange text-white',
  }

  const sizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-8 h-8 text-sm',
    lg: 'w-10 h-10 text-base',
  }

  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className={`
        ${sizes[size]} rounded-lg
        ${colors[color]}
        flex items-center justify-center
        font-bold
      `}
    >
      {number}
    </motion.div>
  )
}

// Feature icon for cards
interface FeatureIconProps {
  icon: LucideIcon
  color?: 'blue' | 'purple' | 'green' | 'orange'
  size?: 'sm' | 'md' | 'lg'
}

export function FeatureIcon({
  icon: Icon,
  color = 'blue',
  size = 'md'
}: FeatureIconProps) {
  const colors = {
    blue: 'text-quantum-blue',
    purple: 'text-quantum-purple',
    green: 'text-quantum-green',
    orange: 'text-quantum-orange',
  }

  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  }

  return <Icon className={`${sizes[size]} ${colors[color]}`} />
}
