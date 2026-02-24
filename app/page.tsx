import dynamic from 'next/dynamic'
import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import Script from 'next/script'

// Below-fold sections: dynamically imported to defer client JS
const AboutPreview = dynamic(() => import('@/components/sections/AboutPreview'))
const IdealClientProfile = dynamic(() => import('@/components/sections/IdealClientProfile'))
const OurApproach = dynamic(() => import('@/components/sections/OurApproach'))
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection'))
const CTASection = dynamic(() => import('@/components/sections/CTASection'))

export default function HomePage() {
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://startbeheer.nl/#webpage',
    url: 'https://startbeheer.nl',
    name: 'Start Beheer Solutions - IT Beheer, Websites & AI voor ZZP en MKB',
    description: 'Uw betrouwbare IT-partner voor ZZP en MKB. Complete IT-oplossingen: systeembeheer, websites, AI-automatisering en online marketing.',
    isPartOf: { '@id': 'https://startbeheer.nl/#website' },
    about: { '@id': 'https://startbeheer.nl/#organization' },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://startbeheer.nl/og-image.jpg',
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://startbeheer.nl' },
      ],
    },
  }

  return (
    <main>
      <Script
        id="homepage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
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
