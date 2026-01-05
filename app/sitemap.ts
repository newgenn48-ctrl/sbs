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

  const allPages = [
    ...mainPages,
    ...itPages,
    ...developmentPages,
    ...aiPages,
    ...marketingPages,
    ...solutionPages,
    ...legalPages,
  ]

  return allPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/about') || route.startsWith('/contact') ? 0.9 : 0.8,
  }))
}
