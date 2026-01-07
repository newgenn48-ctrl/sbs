'use client'

import { useEffect, useState, useRef, ReactNode, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'

interface DeferredCanvasProps {
  children: ReactNode
  fallback?: ReactNode
  camera?: { position: [number, number, number]; fov: number }
  dpr?: [number, number]
  className?: string
}

// Loading skeleton for 3D scenes
const Scene3DLoader = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="relative">
      <div className="w-24 h-24 rounded-full bg-quantum-blue/20 animate-pulse" />
      <div className="absolute inset-0 w-24 h-24 rounded-full border-2 border-quantum-blue/30 animate-ping" style={{ animationDuration: '2s' }} />
    </div>
  </div>
)

/**
 * DeferredCanvas - Loads Three.js Canvas only when visible AND browser is idle
 * This significantly improves LCP by not blocking the main thread during initial render
 */
export default function DeferredCanvas({
  children,
  fallback,
  camera = { position: [0, 0, 6], fov: 45 },
  dpr = [1, 1.5],
  className = '',
}: DeferredCanvasProps) {
  const [shouldRender, setShouldRender] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const hasLoadedRef = useRef(false)

  useEffect(() => {
    if (hasLoadedRef.current) return

    const container = containerRef.current
    if (!container) return

    // Create intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasLoadedRef.current) {
          // Element is visible, wait for idle time to load
          if ('requestIdleCallback' in window) {
            requestIdleCallback(
              () => {
                hasLoadedRef.current = true
                setShouldRender(true)
              },
              { timeout: 2000 } // Load within 2 seconds max
            )
          } else {
            // Fallback for Safari
            setTimeout(() => {
              hasLoadedRef.current = true
              setShouldRender(true)
            }, 100)
          }
          observer.disconnect()
        }
      },
      {
        rootMargin: '100px', // Start loading slightly before visible
        threshold: 0.1,
      }
    )

    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`relative w-full h-full ${className}`}>
      {shouldRender ? (
        <Suspense fallback={fallback || <Scene3DLoader />}>
          <Canvas
            camera={camera}
            dpr={dpr}
            performance={{ min: 0.5 }}
            gl={{ antialias: false, powerPreference: 'high-performance' }}
          >
            {children}
          </Canvas>
        </Suspense>
      ) : (
        fallback || <Scene3DLoader />
      )}
    </div>
  )
}
