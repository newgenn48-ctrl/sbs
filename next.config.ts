import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Experimental optimizations
  experimental: {
    optimizeCss: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'startbeheer.nl',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // SEO Redirects - oude URLs naar nieuwe URLs
  async redirects() {
    return [
      // Development pagina's
      { source: '/development/website-laten-maken', destination: '/website-laten-maken', permanent: true },
      { source: '/development/webapplicatie-ontwikkeling', destination: '/webapplicatie-laten-maken', permanent: true },
      { source: '/development/ecommerce', destination: '/webshop-laten-maken', permanent: true },
      // Marketing pagina's
      { source: '/marketing/google-ads-beheer', destination: '/google-ads-beheer', permanent: true },
      { source: '/marketing/seo-services', destination: '/seo-specialist', permanent: true },
      { source: '/marketing/social-media', destination: '/social-media-marketing', permanent: true },
      { source: '/marketing/marketing-automation', destination: '/marketing-automatisering', permanent: true },
      // AI pagina's
      { source: '/ai/analytics', destination: '/ai-analytics', permanent: true },
      { source: '/ai/chatbots', destination: '/ai-chatbots', permanent: true },
      { source: '/ai/process-automation', destination: '/proces-automatisering', permanent: true },
      { source: '/ai/virtual-assistant', destination: '/virtuele-assistent', permanent: true },
      // Solutions
      { source: '/solutions/zzp', destination: '/zzp-oplossingen', permanent: true },
    ]
  },

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
