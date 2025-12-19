'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CursorGlow() {
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  // Smooth spring for outer circle
  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 }
  const outerX = useSpring(cursorX, springConfig)
  const outerY = useSpring(cursorY, springConfig)

  // Faster spring for inner dot
  const dotSpringConfig = { damping: 35, stiffness: 400, mass: 0.3 }
  const dotX = useSpring(cursorX, dotSpringConfig)
  const dotY = useSpring(cursorY, dotSpringConfig)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX)
    cursorY.set(e.clientY)
    if (!isVisible) setIsVisible(true)
  }, [cursorX, cursorY, isVisible])

  useEffect(() => {
    setIsMounted(true)

    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isHoverable = target.closest('a, button, [role="button"], input, textarea, select, label, [data-cursor-hover]')
      setIsHovering(!!isHoverable)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousemove', handleElementHover)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousemove', handleElementHover)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [handleMouseMove])

  if (!isMounted) return null
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Outer circle - follows with delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: outerX,
          y: outerY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: isHovering ? 60 : 40,
            height: isHovering ? 60 : 40,
            opacity: isVisible ? (isHovering ? 0.9 : 0.6) : 0,
            scale: isClicking ? 0.85 : 1,
          }}
          transition={{
            width: { duration: 0.2, ease: 'easeOut' },
            height: { duration: 0.2, ease: 'easeOut' },
            opacity: { duration: 0.15 },
            scale: { duration: 0.1 },
          }}
        />
      </motion.div>

      {/* Inner dot - follows cursor directly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      >
        <motion.div
          className="rounded-full"
          animate={{
            width: isHovering ? 6 : 5,
            height: isHovering ? 6 : 5,
            opacity: isVisible ? 1 : 0,
            scale: isClicking ? 0.5 : 1,
            backgroundColor: isHovering ? '#8338EC' : '#00D9FF',
          }}
          transition={{
            scale: { duration: 0.1 },
            opacity: { duration: 0.15 },
            backgroundColor: { duration: 0.2 },
          }}
          style={{
            boxShadow: isHovering
              ? '0 0 12px 2px rgba(131, 56, 236, 0.6)'
              : '0 0 8px 1px rgba(0, 217, 255, 0.5)',
          }}
        />
      </motion.div>
    </>
  )
}
