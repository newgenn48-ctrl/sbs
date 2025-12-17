'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface SubMenuItem {
  name: string
  href: string
  isSub?: boolean
}

interface NavigationItem {
  name: string
  href: string
  submenu?: SubMenuItem[]
}

const navigation: NavigationItem[] = [
  {
    name: 'IT Services',
    href: '#',
    submenu: [
      { name: 'IT Support', href: '/it-support' },
      { name: 'Systeembeheer Uitbesteden', href: '/systeembeheer-uitbesteden' },
      { name: 'Werkplekbeheer Uitbesteden', href: '/werkplekbeheer-uitbesteden' },
      { name: 'Microsoft 365 Beheer', href: '/microsoft-365-beheer' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
    ],
  },
  {
    name: 'Development',
    href: '/development',
    submenu: [
      { name: 'Development Overzicht', href: '/development' },
      { name: 'Website Laten Maken', href: '/development/website-laten-maken', isSub: true },
      { name: 'Webapplicatie Ontwikkeling', href: '/development/webapplicatie-ontwikkeling', isSub: true },
      { name: 'E-commerce Oplossingen', href: '/development/ecommerce', isSub: true },
    ],
  },
  {
    name: 'AI & Automatisering',
    href: '/ai',
    submenu: [
      { name: 'AI Overzicht', href: '/ai' },
      { name: 'AI Chatbots', href: '/ai/chatbots', isSub: true },
      { name: 'Proces Automatisering', href: '/ai/process-automation', isSub: true },
      { name: 'AI Analytics', href: '/ai/analytics', isSub: true },
      { name: 'Virtuele Assistent', href: '/ai/virtual-assistant', isSub: true },
    ],
  },
  {
    name: 'Marketing',
    href: '/marketing',
    submenu: [
      { name: 'Marketing Overzicht', href: '/marketing' },
      { name: 'Google Ads Beheer', href: '/marketing/google-ads-beheer', isSub: true },
      { name: 'SEO Services', href: '/marketing/seo-services', isSub: true },
      { name: 'Social Media', href: '/marketing/social-media', isSub: true },
      { name: 'Marketing Automation', href: '/marketing/marketing-automation', isSub: true },
    ],
  },
  { name: 'Oplossingen', href: '/oplossingen' },
  { name: 'Over Ons', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navigation() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <nav className="hidden lg:flex items-center space-x-8">
      {navigation.map((item) => (
        <div
          key={item.name}
          className="relative"
          onMouseEnter={() => item.submenu && setActiveSubmenu(item.name)}
          onMouseLeave={() => setActiveSubmenu(null)}
        >
          <Link
            href={item.href}
            onClick={(e) => item.href === '#' && e.preventDefault()}
            className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-quantum-blue ${
              pathname && pathname.startsWith(item.href) && item.href !== '#'
                ? 'text-quantum-blue'
                : 'text-gray-300'
            }`}
          >
            {item.name}
            {item.submenu && <ChevronDown className="h-4 w-4" />}
          </Link>

          <AnimatePresence>
            {item.submenu && activeSubmenu === item.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 rounded-xl glass-effect border border-cyber-light overflow-hidden z-50"
              >
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.name}
                    href={subitem.href}
                    className={`block px-4 py-3 text-sm text-gray-300 hover:text-quantum-blue hover:bg-cyber-light/50 transition-colors ${
                      subitem.isSub ? 'pl-8' : ''
                    }`}
                  >
                    {subitem.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </nav>
  )
}
