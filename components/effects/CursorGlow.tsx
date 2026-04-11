'use client'

import { useEffect, useRef, useCallback, useState } from 'react'

const cursorStyles = `
  .cursor-glow {
    --glow-size: 35px;
    --glow-bg: radial-gradient(circle, rgba(37,99,235,0.25) 0%, transparent 70%);
    --dot-size: 8px;
    --dot-color: #2563EB;
    --dot-shadow: 0 0 12px 4px rgba(37,99,235,0.4);
  }
  .cursor-glow.hovering {
    --glow-size: 50px;
    --glow-bg: radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%);
    --dot-size: 10px;
    --dot-color: #7C3AED;
    --dot-shadow: 0 0 15px 5px rgba(124,58,237,0.4);
  }
`

export default function CursorGlow() {
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const isHoveringRef = useRef(false)
  const positionRef = useRef({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number>(0)

  useEffect(() => {
    setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches)
  }, [])

  const updateCursor = useCallback(() => {
    const lerp = 0.35
    positionRef.current.x += (targetRef.current.x - positionRef.current.x) * lerp
    positionRef.current.y += (targetRef.current.y - positionRef.current.y) * lerp

    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`
    }

    rafRef.current = requestAnimationFrame(updateCursor)
  }, [])

  useEffect(() => {
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      targetRef.current.x = e.clientX
      targetRef.current.y = e.clientY

      if (cursorRef.current) {
        cursorRef.current.style.opacity = '1'
      }

      const target = e.target as HTMLElement
      const isHoverable = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor-hover]')

      if (!!isHoverable !== isHoveringRef.current) {
        isHoveringRef.current = !!isHoverable
        cursorRef.current?.classList.toggle('hovering', isHoveringRef.current)
      }
    }

    const handleMouseLeave = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '0'
    }

    const handleMouseEnter = () => {
      if (cursorRef.current) cursorRef.current.style.opacity = '1'
    }

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
  }, [updateCursor, isTouchDevice])

  if (isTouchDevice) return null

  return (
    <>
      <style>{cursorStyles}</style>
      <div
        ref={cursorRef}
        className="cursor-glow fixed pointer-events-none z-[9999] will-change-transform"
        style={{ opacity: 0 }}
      >
        <div
          className="absolute rounded-full transition-all duration-150 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: 'var(--glow-size)',
            height: 'var(--glow-size)',
            background: 'var(--glow-bg)',
          }}
        />
        <div
          className="rounded-full transition-all duration-150"
          style={{
            width: 'var(--dot-size)',
            height: 'var(--dot-size)',
            backgroundColor: 'var(--dot-color)',
            boxShadow: 'var(--dot-shadow)',
          }}
        />
      </div>
    </>
  )
}
