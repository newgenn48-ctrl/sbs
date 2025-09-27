import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://staartbeheer.nl'

  // Core pages
  const routes = [
    '',
    '/about',
    '/it-support',
    '/it-beheer-uitbesteden',
    '/systeembeheer-uitbesteden',
    '/werkplekbeheer-uitbesteden',
    '/office-365-mkb',
    '/office-365-zzp',
    '/marketing',
    '/marketing/google-ads-beheer',
    '/marketing/seo-services',
    '/marketing/social-media',
    '/marketing/marketing-automation',
    '/websites',
    '/website-laten-bouwen',
    '/websites/website-laten-maken',
    '/solutions/mkb',
    '/solutions/zzp',
    '/ai',
  ]

  // Major Dutch cities for local SEO
  const cities = [
    'amsterdam',
    'rotterdam',
    'den-haag',
    'utrecht',
    'eindhoven',
    'tilburg',
    'groningen',
    'almere',
    'breda',
    'nijmegen',
    'enschede',
    'haarlem',
    'arnhem',
    'zaanstad',
    'haarlemmermeer',
    'apeldoorn',
    'amersfoort',
    'hoofddorp',
    'maastricht',
    'leiden'
  ]

  // Core service pages
  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }))

  // Add city-specific service pages (for future implementation)
  const cityServices = ['it-support', 'marketing', 'websites']

  cities.forEach((city) => {
    cityServices.forEach((service) => {
      sitemapEntries.push({
        url: `${baseUrl}/${service}/${city}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      })
    })
  })

  return sitemapEntries
}