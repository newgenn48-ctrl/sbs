import { Metadata } from 'next'

interface GenerateMetadataProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata({
  title = 'Staart Beheer Solutions',
  description = 'Next-Gen Digital Infrastructure voor Nederlandse MKB',
  keywords = 'IT beheer, AI automation, growth marketing, website development',
  ogImage = '/og-image.png',
  noIndex = false
}: GenerateMetadataProps = {}): Metadata {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      images: [{ url: ogImage }],
      locale: 'nl_NL',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  }
}