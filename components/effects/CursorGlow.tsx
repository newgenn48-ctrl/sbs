'use client'

import { useEffect, useRef, useCallback } from 'react'

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const isHoveringRef = useRef(false)
  const positionRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  const updateCursor = useCallback(() => {
    // Fast lerp for smooth but responsive movement
    const lerp = 0.35
    positionRef.current.x += (targetRef.current.x - positionRef.current.x) * lerp
    positionRef.current.y += (targetRef.current.y - positionRef.current.y) * lerp

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`
    }

    rafRef.current = requestAnimationFrame(updateCursor)
  }, [])

  useEffect(() => {
    // Skip on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY

      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }

      // Check for hoverable elements
      const target = e.target as HTMLElement
      const isHoverable = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')

      if (!!isHoverable !== isHoveringRef.current) {
        isHoveringRef.current = !!isHoverable

        if (glowRef.current && dotRef.current) {
          if (isHoveringRef.current) {
            glowRef.current.style.width = '50px'
            glowRef.current.style.height = '50px'
            glowRef.current.style.background = 'radial-gradient(circle, rgba(131,56,236,0.3) 0%, transparent 70%)'
            dotRef.current.style.width = '10px'
            dotRef.current.style.height = '10px'
            dotRef.current.style.backgroundColor = '#8338EC'
            dotRef.current.style.boxShadow = '0 0 15px 5px rgba(131,56,236,0.5)'
          } else {
            glowRef.current.style.width = '35px'
            glowRef.current.style.height = '35px'
            glowRef.current.style.background = 'radial-gradient(circle, rgba(0,217,255,0.3) 0%, transparent 70%)'
            dotRef.current.style.width = '8px'
            dotRef.current.style.height = '8px'
            dotRef.current.style.backgroundColor = '#00D9FF'
            dotRef.current.style.boxShadow = '0 0 12px 4px rgba(0,217,255,0.5)'
          }
        }
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0'
      }
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }
    }

    // Start animation loop
    rafRef.current = requestAnimationFrame(updateCursor)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.body.addEventListener('mouseleave', handleMouseLeave)
    document.body.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [updateCursor])

  // Skip render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <div
      ref={cursorRef}
      className="fixed pointer-events-none z-[9999] will-change-transform"
      style={{ opacity: 0 }}
    >
      {/* Outer glow */}
      <div
        ref={glowRef}
        className="absolute rounded-full transition-all duration-150"
        style={{
          width: 35,
          height: 35,
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,217,255,0.3) 0%, transparent 70%)',
        }}
      />
      {/* Inner dot */}
      <div
        ref={dotRef}
        className="rounded-full transition-all duration-150"
        style={{
          width: 8,
          height: 8,
          backgroundColor: '#00D9FF',
          boxShadow: '0 0 12px 4px rgba(0,217,255,0.5)',
        }}
      />
    </div>
  )
}
