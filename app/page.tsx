'use client'

import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import OurApproach from '@/components/sections/OurApproach'
import FounderSection from '@/components/sections/FounderSection'
import IdealClientProfile from '@/components/sections/IdealClientProfile'
import CTAPortal from '@/components/sections/CTAPortal'
import StartupProof from '@/components/sections/StartupProof'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import StartupCredibility from '@/components/sections/StartupCredibility'
import ScrollTrigger from '@/components/animations/ScrollTrigger'

const ParticleField = dynamic(() => import('@/components/3d/ParticleField'), {
  ssr: false,
})

export default function HomePage() {
  return (
    <>
      <div className="fixed inset-0 z-0">
        <ParticleField />
      </div>
      
      <div className="relative z-10">
        <HeroSection />
        
        <ScrollTrigger>
          <StartupProof />
        </ScrollTrigger>
        
        <ScrollTrigger>
          <ServicesGrid />
        </ScrollTrigger>
        
        <ScrollTrigger>
          <OurApproach />
        </ScrollTrigger>
        
        <ScrollTrigger>
          <IdealClientProfile />
        </ScrollTrigger>

        <ScrollTrigger>
          <TestimonialsSection />
        </ScrollTrigger>

        <ScrollTrigger>
          <StartupCredibility />
        </ScrollTrigger>

        <ScrollTrigger>
          <FounderSection />
        </ScrollTrigger>
        
        <ScrollTrigger>
          <CTAPortal />
        </ScrollTrigger>
      </div>
    </>
  )
}
