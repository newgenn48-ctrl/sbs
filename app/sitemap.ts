import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://startbeheer.nl'
  const lastModified = new Date()

  // Main pages
  const mainPages = [
    '',
    '/about',
    '/contact',
    '/oplossingen',
  ]

  // Service pages
  const servicePages = [
    // IT Services
    '/it-support',
    '/microsoft-365-beheer',
    '/cybersecurity',
    '/systeembeheer-uitbesteden',
    '/werkplekbeheer-uitbesteden',
    // Development
    '/development',
    '/development/website-laten-maken',
    '/development/webapplicatie-ontwikkeling',
    '/development/ecommerce',
    '/websites',
    // AI
    '/ai',
    '/ai/chatbots',
    '/ai/analytics',
    '/ai/process-automation',
    '/ai/virtual-assistant',
    // Marketing
    '/marketing',
    '/marketing/google-ads-beheer',
    '/marketing/seo-services',
    '/marketing/social-media',
    '/marketing/marketing-automation',
    // Solutions
    '/solutions/zzp',
  ]

  // Legal pages
  const legalPages = [
    '/privacy',
    '/cookies',
    '/disclaimer',
    '/terms',
  ]

  const allPages = [...mainPages, ...servicePages, ...legalPages]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/about') || route.startsWith('/contact') ? 0.9 : 0.8,
  }))
}
