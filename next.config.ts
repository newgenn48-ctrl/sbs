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
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Note: unsafe-inline/eval required for Next.js + Framer Motion + Three.js
              // Consider implementing nonces for stricter CSP in production
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https:",
              "media-src 'self' blob:",
              "connect-src 'self' https://www.google-analytics.com https://www.google.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://vitals.vercel-insights.com https://va.vercel-scripts.com wss:",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

export default nextConfig
