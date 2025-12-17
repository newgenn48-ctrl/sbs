'use client'

import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import IdealClientProfile from '@/components/sections/IdealClientProfile'
import OurApproach from '@/components/sections/OurApproach'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), {
  ssr: false,
})

export default function HomePage() {
  return (
    <>
      {/* Background Particle Field */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
        <ParticleField />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <ServicesGrid />
        <IdealClientProfile />
        <OurApproach />
        <TestimonialsSection />
        <CTASection />
      </main>
    </>
  )
}
