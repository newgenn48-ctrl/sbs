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
    <div className="fixed bottom-6 right-6 z-50">
      {isDemoPage ? (
        <Link
          href={formHref}
          className="h-12 pl-4 pr-5 rounded-full shadow-xl flex items-center gap-2 bg-gradient-to-r from-primary-blue to-primary-violet hover:shadow-primary-blue/30 hover:shadow-2xl transition-all"
          aria-label={formLabel}
        >
          <FileText className="w-4 h-4 text-white flex-shrink-0" />
          <span className="text-sm font-semibold text-white whitespace-nowrap">{formLabel}</span>
        </Link>
      ) : (
        <Link
          href={formHref}
          className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center bg-gradient-to-r from-primary-blue to-primary-violet hover:shadow-primary-blue/30 hover:shadow-2xl transition-all"
          aria-label={formLabel}
        >
          <FileText className="w-6 h-6 text-white" />
        </Link>
      )}
    </div>
  )
}
