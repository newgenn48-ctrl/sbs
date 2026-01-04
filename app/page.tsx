'use client'

import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import AboutPreview from '@/components/sections/AboutPreview'
import IdealClientProfile from '@/components/sections/IdealClientProfile'
import OurApproach from '@/components/sections/OurApproach'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

const BackgroundScene = dynamic(() => import('@/components/3d/BackgroundScene'), {
  ssr: false,
})

export default function HomePage() {
  return (
    <>
      {/* Animated Background */}
      <BackgroundScene />

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
