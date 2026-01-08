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

  // IT Services
  const itPages = [
    '/it-support',
    '/microsoft-365-beheer',
    '/cybersecurity',
    '/systeembeheer-uitbesteden',
    '/werkplekbeheer-uitbesteden',
  ]

  // Development pages
  const developmentPages = [
    '/development',
    '/websites',
    '/website-laten-maken',
    '/webapplicatie-laten-maken',
    '/webshop-laten-maken',
  ]

  // AI pages
  const aiPages = [
    '/ai',
    '/ai-chatbots',
    '/ai-analytics',
    '/proces-automatisering',
    '/virtuele-assistent',
  ]

  // Marketing pages
  const marketingPages = [
    '/marketing',
    '/google-ads-beheer',
    '/seo-specialist',
    '/social-media-marketing',
    '/marketing-automatisering',
  ]

  // Solutions pages
  const solutionPages = [
    '/zzp-oplossingen',
  ]

  // Legal pages
  const legalPages = [
    '/privacy',
    '/cookies',
    '/disclaimer',
    '/terms',
  ]

  // All service pages (high priority)
  const servicePages = [
    ...itPages,
    ...developmentPages,
    ...aiPages,
    ...marketingPages,
    ...solutionPages,
  ]

  // Helper function to determine priority
  const getPriority = (route: string): number => {
    if (route === '') return 1.0 // Homepage
    if (route === '/contact' || route === '/oplossingen') return 0.9 // Important pages
    if (servicePages.includes(route)) return 0.9 // All service pages
    if (route === '/about') return 0.8 // About page
    if (legalPages.includes(route)) return 0.3 // Legal pages
    return 0.8
  }

  const allPages = [
    ...mainPages,
    ...servicePages,
    ...legalPages,
  ]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: getPriority(route),
  }))
}
