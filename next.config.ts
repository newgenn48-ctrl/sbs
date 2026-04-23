import type { NextConfig } from 'next'
import bundleAnalyzer from '@next/bundle-analyzer'

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Experimental optimizations
  experimental: {
    optimizeCss: true,
  },

  // Target modern browsers only - eliminates legacy polyfills
  transpilePackages: [],

  // Compiler optimizations — strip console.log/debug/info/warn in prod, keep error/warn for observability
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
      ? { exclude: ['error', 'warn'] }
      : false,
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
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-site',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=(), usb=()',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Note: unsafe-inline/eval required for Next.js + Framer Motion
              // Consider implementing nonces for stricter CSP in production
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://googleads.g.doubleclick.net https://www.googleadservices.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https:",
              "media-src 'self' blob:",
              "connect-src 'self' https://www.google-analytics.com https://www.google.com https://www.googletagmanager.com https://googleads.g.doubleclick.net https://www.googleadservices.com https://vitals.vercel-insights.com https://va.vercel-scripts.com wss:",
              "frame-src 'self' https://www.googletagmanager.com https://www.google.com https://td.doubleclick.net",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "object-src 'none'",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
      // Cache static assets aggressively
      {
        source: '/(.*)\\.(ico|png|jpg|jpeg|gif|webp|avif|svg|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

export default withBundleAnalyzer(nextConfig)
