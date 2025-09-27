'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const navigation = [
  {
    name: 'IT Services',
    href: '#',
    submenu: [
      { name: 'IT Beheer Uitbesteden', href: '/it-beheer-uitbesteden' },
      { name: 'Systeembeheer Uitbesteden', href: '/systeembeheer-uitbesteden' },
      { name: 'Werkplekbeheer Uitbesteden', href: '/werkplekbeheer-uitbesteden' },
      { name: 'IT Support', href: '/it-support' },
      { name: 'Office 365 MKB', href: '/office-365-mkb' },
      { name: 'Office 365 ZZP', href: '/office-365-zzp' },
    ],
  },
  {
    name: 'Development & AI',
    href: '#',
    submenu: [
      { name: 'Websites', href: '/websites' },
      { name: 'Website Laten Bouwen', href: '/website-laten-bouwen' },
      { name: 'AI & Automation', href: '/ai' },
    ],
  },
  {
    name: 'Marketing',
    href: '#',
    submenu: [
        { name: 'Marketing Overzicht', href: '/marketing' },
        { name: 'Google Ads Beheer', href: '/marketing/google-ads-beheer' },
        { name: 'SEO Services', href: '/marketing/seo-services' },
        { name: 'Social Media', href: '/marketing/social-media' },
        { name: 'Marketing Automation', href: '/marketing/marketing-automation' },
    ]
  },
  {
    name: 'Solutions',
    href: '#',
    submenu: [
      { name: 'Voor ZZP', href: '/solutions/zzp' },
      { name: 'Voor MKB', href: '/solutions/mkb' },
    ],
  },
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
              pathname && pathname.startsWith(item.href) && item.href !== '#' ? 'text-quantum-blue' : 'text-gray-300'
            }`}
          >
            {item.name}
            {item.submenu && (
              <ChevronDown className="h-4 w-4" />
            )}
          </Link>

          <AnimatePresence>
            {item.submenu && activeSubmenu === item.name && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-2 w-64 rounded-xl glass-effect border border-cyber-light overflow-hidden z-20"
              >
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.name}
                    href={subitem.href}
                    className="block px-4 py-3 text-sm text-gray-300 hover:text-quantum-blue hover:bg-cyber-light/50 transition-colors"
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