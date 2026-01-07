import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import AboutPreview from '@/components/sections/AboutPreview'
import IdealClientProfile from '@/components/sections/IdealClientProfile'
import OurApproach from '@/components/sections/OurApproach'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesGrid />
      <AboutPreview />
      <IdealClientProfile />
      <OurApproach />
      <TestimonialsSection />
      <CTASection />
    </main>
  )
}
