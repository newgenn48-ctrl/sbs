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

export default function HomePage() {
  const [show3D, setShow3D] = useState(false)

  // Delay 3D loading until after initial paint for better Core Web Vitals
  useEffect(() => {
    const timer = requestIdleCallback(() => setShow3D(true), { timeout: 2000 })
    return () => cancelIdleCallback(timer)
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
