import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import R3FSetup from '@/components/layout/R3FSetup'

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
  title: "Start Beheer Solution's - Next-Gen Digital Infrastructure",
  description: 'Pioniers in next-gen digitale infrastructuur. Wij bouwen de toekomst met AI automation, growth marketing en revolutionaire digital experiences.',
  keywords: 'IT solutions, AI automation, growth marketing, website development, digital infrastructure, tech startup, Office 365, Google Ads',
  authors: [{ name: "Start Beheer Solution's" }],
  creator: "Start Beheer Solution's",
  publisher: "Start Beheer Solution's",
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
    title: "Start Beheer Solution's - Next-Gen Digital Infrastructure",
    description: 'Revolutionaire IT-infrastructuur, AI automation, growth marketing en digital experiences.',
    url: 'https://staartbeheer.nl',
    siteName: "Start Beheer Solution's",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: "Start Beheer Solution's",
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Start Beheer Solution's - Next-Gen Digital Infrastructure",
    description: 'Revolutionaire IT-infrastructuur, AI automation, growth marketing en digital experiences.',
    images: ['/og-image.png'],
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
    icon: '/favicon.ico',
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
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Start Beheer Solutions",
    "alternateName": "Start Beheer",
    "url": "https://staartbeheer.nl",
    "logo": "https://staartbeheer.nl/logo.png",
    "description": "Pioniers in next-gen digitale infrastructuur. Wij bouwen de toekomst met AI automation, growth marketing en revolutionaire digital experiences.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31-30-123-4567",
      "email": "info@staartbeheer.nl",
      "contactType": "customer service",
      "availableLanguage": ["Dutch", "English"]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nederland"
    },
    "serviceType": ["IT Support", "Digital Marketing", "AI Automation", "Website Development"],
    "slogan": "Uw Complete Digitale Partner",
    "knowsAbout": ["IT beheer", "Marketing automation", "AI", "Website development", "Cybersecurity", "Cloud solutions"]
  }

  return (
    <html lang="nl" className={`${plusJakartaSans.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-cyber-darker antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema)
          }}
        />
        <R3FSetup />
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
