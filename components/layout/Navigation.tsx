'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { navigation } from '@/lib/navigation'

export default function Navigation() {
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  return (
    <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 2xl:space-x-6">
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
            className={`flex items-center gap-1 text-xs 2xl:text-sm font-medium transition-colors hover:text-quantum-blue whitespace-nowrap ${
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
                className="absolute top-full left-0 mt-2 w-64 rounded-xl bg-cyber-darker border border-cyber-light overflow-hidden z-50 shadow-xl shadow-black/50"
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
