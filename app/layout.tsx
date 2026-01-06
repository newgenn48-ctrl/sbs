import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import Script from 'next/script'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CursorGlow from '@/components/effects/CursorGlow'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Start Beheer Solutions - IT Beheer, Websites & AI voor ZZP en MKB",
  description:
    'Uw betrouwbare IT-partner voor ZZP en MKB. Complete IT-oplossingen: systeembeheer, websites, AI-automatisering en online marketing.',
  keywords:
    'IT beheer, systeembeheer, website laten maken, AI automatisering, online marketing, ZZP IT, MKB IT, Microsoft 365',
  authors: [{ name: 'Start Beheer Solutions' }],
  creator: 'Start Beheer Solutions',
  publisher: 'Start Beheer Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://startbeheer.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Start Beheer Solutions - IT Beheer, Websites & AI voor ZZP en MKB",
    description:
      'Betrouwbare IT-oplossingen voor ZZP en MKB. Systeembeheer, websites, AI en marketing onder een dak.',
    url: 'https://startbeheer.nl',
    siteName: 'Start Beheer Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Start Beheer Solutions - IT Beheer, Websites & AI',
        type: 'image/jpeg',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Start Beheer Solutions - IT Beheer, Websites & AI voor ZZP en MKB",
    description:
      'Betrouwbare IT-oplossingen voor ZZP en MKB. Systeembeheer, websites, AI en marketing onder een dak.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: '#050714',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://startbeheer.nl/#organization',
    name: 'Start Beheer Solutions',
    alternateName: 'Start Beheer',
    url: 'https://startbeheer.nl',
    logo: {
      '@type': 'ImageObject',
      url: 'https://startbeheer.nl/sbs.webp',
      width: 200,
      height: 58,
    },
    description:
      'Uw betrouwbare IT-partner voor ZZP en MKB. Complete IT-oplossingen: systeembeheer, websites, AI-automatisering en online marketing.',
    foundingDate: '2024',
    vatID: 'NL005041113B60',
    legalName: 'Start Beheer Solutions',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+31-6-87874001',
        email: 'info@startbeheer.nl',
        contactType: 'customer service',
        availableLanguage: ['Dutch', 'English'],
        areaServed: 'NL',
      },
      {
        '@type': 'ContactPoint',
        telephone: '+31-6-87874001',
        contactType: 'sales',
        availableLanguage: ['Dutch', 'English'],
        areaServed: 'NL',
      },
    ],
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
    },
    knowsAbout: [
      'IT Support',
      'Systeembeheer',
      'Website Development',
      'AI Automatisering',
      'Online Marketing',
      'Microsoft 365',
      'Cybersecurity',
    ],
    slogan: 'Uw Complete Digitale Partner',
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://startbeheer.nl/#localbusiness',
    name: 'Start Beheer Solutions',
    image: 'https://startbeheer.nl/sbs.webp',
    url: 'https://startbeheer.nl',
    telephone: '+31-6-87874001',
    email: 'info@startbeheer.nl',
    vatID: 'NL005041113B60',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
      addressRegion: 'Nederland',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.0907,
      longitude: 5.1214,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '17:00',
      },
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Bank Transfer, iDEAL',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Beheer & Support',
            description: 'Complete IT ondersteuning voor ZZP en MKB bedrijven',
            url: 'https://startbeheer.nl/it-support',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Systeembeheer Uitbesteden',
            description: 'Professioneel systeembeheer voor uw bedrijf',
            url: 'https://startbeheer.nl/systeembeheer-uitbesteden',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Laten Maken',
            description: 'Professionele websites en webshops op maat',
            url: 'https://startbeheer.nl/website-laten-maken',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI & Automatisering',
            description: 'AI-oplossingen en procesautomatisering',
            url: 'https://startbeheer.nl/ai',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Online Marketing',
            description: 'SEO, Google Ads en social media marketing',
            url: 'https://startbeheer.nl/marketing',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '10',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://startbeheer.nl/#website',
    url: 'https://startbeheer.nl',
    name: 'Start Beheer Solutions',
    description: 'IT Beheer, Websites & AI voor ZZP en MKB',
    publisher: {
      '@id': 'https://startbeheer.nl/#organization',
    },
    inLanguage: 'nl-NL',
  }

  return (
    <html
      lang="nl"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Google Ads */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17852710951"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17852710951');
          `}
        </Script>
      </head>
      <body className="min-h-screen bg-cyber-darker antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <CursorGlow />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
