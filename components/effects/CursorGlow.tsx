'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface SmokeParticle {
  id: number
  x: number
  y: number
  size: number
  opacity: number
}

export default function CursorGlow() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [particles, setParticles] = useState<SmokeParticle[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const particleId = useRef(0)
  const lastPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX
      const newY = e.clientY

      setMousePosition({ x: newX, y: newY })
      if (!isVisible) setIsVisible(true)

      // Calculate distance moved
      const dx = newX - lastPosition.current.x
      const dy = newY - lastPosition.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      // Create smoke particles based on movement
      if (distance > 8) {
        const newParticles: SmokeParticle[] = []
        const particleCount = Math.min(Math.floor(distance / 10), 3)

        for (let i = 0; i < particleCount; i++) {
          newParticles.push({
            id: particleId.current++,
            x: newX + (Math.random() - 0.5) * 20,
            y: newY + (Math.random() - 0.5) * 20,
            size: 15 + Math.random() * 25,
            opacity: 0.4 + Math.random() * 0.3,
          })
        }

        setParticles(prev => [...prev.slice(-20), ...newParticles])
        lastPosition.current = { x: newX, y: newY }
      }
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')
      setIsHovering(!!isHoverable)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousemove', handleElementHover)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    // Cleanup old particles
    const cleanup = setInterval(() => {
      setParticles(prev => prev.slice(-15))
    }, 100)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousemove', handleElementHover)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      clearInterval(cleanup)
    }
  }, [isVisible])

  if (!isMounted) return null
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Smoke trail particles */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed pointer-events-none z-[9998]"
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 0.5,
              opacity: particle.opacity,
            }}
            animate={{
              y: particle.y - 30,
              scale: 1.5,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: 'easeOut',
            }}
            style={{
              translateX: '-50%',
              translateY: '-50%',
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: particle.size,
                height: particle.size,
                background: `radial-gradient(circle, ${isHovering ? 'rgba(131,56,236,0.4)' : 'rgba(0,217,255,0.4)'} 0%, transparent 70%)`,
                filter: 'blur(8px)',
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Main cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 400,
          mass: 0.3,
        }}
        style={{
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        {/* Outer glow */}
        <motion.div
          className="absolute rounded-full"
          animate={{
            width: isHovering ? 50 : 35,
            height: isHovering ? 50 : 35,
          }}
          transition={{ duration: 0.2 }}
          style={{
            translateX: '-50%',
            translateY: '-50%',
            left: '50%',
            top: '50%',
            background: isHovering
              ? 'radial-gradient(circle, rgba(131,56,236,0.3) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(0,217,255,0.3) 0%, transparent 70%)',
            filter: 'blur(4px)',
          }}
        />

        {/* Inner dot */}
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 10 : 8,
            height: isHovering ? 10 : 8,
            backgroundColor: isHovering ? '#8338EC' : '#00D9FF',
          }}
          transition={{ duration: 0.15 }}
          style={{
            boxShadow: isHovering
              ? '0 0 15px 5px rgba(131,56,236,0.5)'
              : '0 0 12px 4px rgba(0,217,255,0.5)',
          }}
        />
      </motion.div>
    </>
  )
}
