'use client'

import { usePathname } from 'next/navigation'
import { FileText } from 'lucide-react'
import Link from 'next/link'

const demoPages = [
  '/website-laten-maken',
  '/websites',
  '/webshop-laten-maken',
  '/webapplicatie-laten-maken',
  '/development',
]

export default function FloatingContact() {
  const pathname = usePathname()

  const isDemoPage = demoPages.some(p => pathname.startsWith(p))
  const formHref = isDemoPage ? '/demo' : '/gratis-advies'
  const formLabel = isDemoPage ? 'Gratis demo' : 'Contact'

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {isDemoPage ? (
        <Link
          href={formHref}
          className="h-11 sm:h-12 pl-3.5 pr-4 sm:pl-4 sm:pr-5 rounded-full shadow-lg flex items-center gap-2 bg-gradient-to-r from-primary-blue to-primary-violet transition-shadow hover:shadow-xl"
          aria-label={formLabel}
        >
          <FileText className="w-4 h-4 text-white flex-shrink-0" />
          <span className="text-sm font-semibold text-white whitespace-nowrap">{formLabel}</span>
        </Link>
      ) : (
        <Link
          href={formHref}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg flex items-center justify-center bg-gradient-to-r from-primary-blue to-primary-violet transition-shadow hover:shadow-xl"
          aria-label={formLabel}
        >
          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </Link>
      )}
    </div>
  )
}
