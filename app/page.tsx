import HeroSection from '@/components/sections/HeroSection'
import ServicesGrid from '@/components/sections/ServicesGrid'
import AboutPreview from '@/components/sections/AboutPreview'
import IdealClientProfile from '@/components/sections/IdealClientProfile'
import OurApproach from '@/components/sections/OurApproach'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import Script from 'next/script'

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
