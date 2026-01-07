'use client'

import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import AboutPreview from '@/components/sections/AboutPreview'
import IdealClientProfile from '@/components/sections/IdealClientProfile'
import OurApproach from '@/components/sections/OurApproach'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

// Lazy load 3D background after initial render for better LCP
const BackgroundScene = dynamic(() => import('@/components/3d/BackgroundScene'), {
  ssr: false,
  loading: () => null,
})

// Detect problematic in-app browsers (Instagram, Facebook, etc.)
function isInAppBrowser(): boolean {
  if (typeof window === 'undefined') return false
  const ua = navigator.userAgent || navigator.vendor || ''
  return /FBAN|FBAV|Instagram|Line|Twitter|TikTok/i.test(ua)
}

// Check if WebGL is supported
function isWebGLSupported(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const canvas = document.createElement('canvas')
    return !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
  } catch {
    return false
  }
}

export default function HomePage() {
  const [show3D, setShow3D] = useState(false)

  // Delay 3D loading and check browser compatibility
  useEffect(() => {
    // Skip 3D on in-app browsers or if WebGL not supported
    if (isInAppBrowser() || !isWebGLSupported()) {
      return
    }

    // Polyfill for requestIdleCallback
    const requestIdle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1))
    const cancelIdle = window.cancelIdleCallback || clearTimeout

    const timer = requestIdle(() => setShow3D(true), { timeout: 2000 })
    return () => cancelIdle(timer)
  }, [])

  return (
    <>
      {/* Animated Background - loaded after initial render */}
      {show3D && <BackgroundScene />}

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ServicesGrid />
        <AboutPreview />
        <IdealClientProfile />
        <OurApproach />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  )
}
