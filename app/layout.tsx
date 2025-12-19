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
  title: "Start Beheer Solutions - Next-Gen Digital Infrastructure",
  description:
    'Pioniers in next-gen digitale infrastructuur. Wij bouwen de toekomst met AI automation, growth marketing en revolutionaire digital experiences.',
  keywords:
    'IT solutions, AI automation, growth marketing, website development, digital infrastructure, tech startup, Office 365, Google Ads',
  authors: [{ name: 'Start Beheer Solutions' }],
  creator: 'Start Beheer Solutions',
  publisher: 'Start Beheer Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://staartbeheer.nl'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Start Beheer Solutions - Next-Gen Digital Infrastructure",
    description:
      'Revolutionaire IT-infrastructuur, AI automation, growth marketing en digital experiences.',
    url: 'https://staartbeheer.nl',
    siteName: 'Start Beheer Solutions',
    images: [
      {
        url: '/sbs.webp',
        width: 1200,
        height: 630,
        alt: 'Start Beheer Solutions',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Start Beheer Solutions - Next-Gen Digital Infrastructure",
    description:
      'Revolutionaire IT-infrastructuur, AI automation, growth marketing en digital experiences.',
    images: ['/sbs.webp'],
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
    icon: '/sbs.webp',
    shortcut: '/sbs.webp',
    apple: '/sbs.webp',
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
    url: 'https://staartbeheer.nl',
    logo: 'https://staartbeheer.nl/sbs.webp',
    description:
      'Pioniers in next-gen digitale infrastructuur. Wij bouwen de toekomst met AI automation, growth marketing en revolutionaire digital experiences.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+31-30-123-4567',
      email: 'info@staartbeheer.nl',
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
        <CursorGlow />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
