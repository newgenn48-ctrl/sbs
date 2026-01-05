import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CursorGlow from '@/components/effects/CursorGlow'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '600', '700', '800'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Start Beheer Solutions',
    alternateName: 'Start Beheer',
    url: 'https://startbeheer.nl',
    logo: 'https://startbeheer.nl/sbs.webp',
    description:
      'Uw betrouwbare IT-partner voor ZZP en MKB. Complete IT-oplossingen: systeembeheer, websites, AI-automatisering en online marketing.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-6-87-874-001',
      email: 'info@startbeheer.nl',
      contactType: 'customer service',
      availableLanguage: ['Dutch', 'English'],
    },
    areaServed: {
      '@type': 'Country',
      name: 'Nederland',
    },
    serviceType: [
      'IT Support',
      'Digital Marketing',
      'AI Automation',
      'Website Development',
    ],
    slogan: 'Uw Complete Digitale Partner',
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://startbeheer.nl/#localbusiness',
    name: 'Start Beheer Solutions',
    image: 'https://startbeheer.nl/sbs.webp',
    url: 'https://startbeheer.nl',
    telephone: '+31-6-87-874-001',
    email: 'info@startbeheer.nl',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '17:00',
    },
    priceRange: '€€',
    servesCuisine: undefined,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'IT Diensten',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'IT Beheer & Support',
            description: 'Complete IT ondersteuning voor uw bedrijf',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Website Development',
            description: 'Professionele websites en webapplicaties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI & Automatisering',
            description: 'AI-oplossingen en procesautomatisering',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Online Marketing',
            description: 'SEO, Google Ads en social media marketing',
          },
        },
      ],
    },
  }

  return (
    <html
      lang="nl"
      className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
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
        <CursorGlow />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
