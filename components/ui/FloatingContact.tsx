'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Phone, X, MessageCircle, FileText } from 'lucide-react'
import { m, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const demoPages = [
  '/website-laten-maken',
  '/webshop-laten-maken',
  '/webapplicatie-laten-maken',
  '/development',
]

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const pathname = usePathname()

  const isDemoPage = demoPages.some(p => pathname.startsWith(p))
  const formHref = isDemoPage ? '/demo' : '/contact'
  const formLabel = isDemoPage ? 'Gratis Demo' : 'Contact'
  const formSub = isDemoPage ? 'Ontwerp binnen 24u' : 'Formulier invullen'

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  // Desktop: direct link, no menu
  if (!isMobile) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href={formHref}
          className="w-14 h-14 rounded-full shadow-xl flex items-center justify-center bg-gradient-to-r from-primary-blue to-primary-violet hover:shadow-primary-blue/30 hover:shadow-2xl transition-all"
          aria-label={formLabel}
        >
          <FileText className="w-6 h-6 text-white" />
        </Link>
      </div>
    )
  }

  // Mobile: expandable menu with WhatsApp + form link
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <m.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="mb-4 flex flex-col gap-3 max-w-[calc(100vw-3rem)]"
          >
            <a
              href="https://wa.me/31687874001?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20jullie%20diensten."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-5 py-3 shadow-xl hover:border-primary-emerald/40 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary-emerald/10 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-primary-emerald" />
              </div>
              <div className="pr-2">
                <div className="text-sm font-semibold text-slate-900">WhatsApp</div>
                <div className="text-xs text-slate-500">Direct chatten</div>
              </div>
            </a>

            <Link
              href={formHref}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 bg-white border border-slate-200 rounded-full px-5 py-3 shadow-xl hover:border-primary-blue/40 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-primary-blue/10 flex items-center justify-center">
                <FileText className="w-5 h-5 text-primary-blue" />
              </div>
              <div className="pr-2">
                <div className="text-sm font-semibold text-slate-900">{formLabel}</div>
                <div className="text-xs text-slate-500">{formSub}</div>
              </div>
            </Link>
          </m.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full shadow-xl flex items-center justify-center transition-all duration-300 ${
          isOpen
            ? 'bg-slate-100 border border-slate-200'
            : 'bg-gradient-to-r from-primary-blue to-primary-violet hover:shadow-primary-blue/30 hover:shadow-2xl'
        }`}
        aria-label={isOpen ? 'Sluit contactopties' : 'Neem contact op'}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-slate-600" />
        ) : (
          <Phone className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
  )
}
