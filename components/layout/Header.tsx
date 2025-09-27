'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, ChevronDown } from 'lucide-react'
import Navigation from './Navigation'

const mobileNavigation = [
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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmenuToggle = (name: string) => {
    setOpenMobileSubmenu(openMobileSubmenu === name ? null : name)
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-darker backdrop-blur-xl border-b border-cyber-light'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <span className="text-2xl font-display font-bold text-gradient">
                START
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-quantum-blue to-quantum-purple opacity-30 blur-lg -z-10" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Navigation />
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform">
              Start Quantum Leap
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu" className="text-gray-300 hover:text-quantum-blue">
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-cyber-darker border-cyber-light">
                <div className="flex flex-col space-y-2 mt-8 bg-cyber-darker">
                  {mobileNavigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => handleSubmenuToggle(item.name)}
                            className="w-full flex justify-between items-center text-lg font-medium text-gray-300 hover:text-quantum-blue"
                          >
                            {item.name}
                            <ChevronDown className={`h-5 w-5 transition-transform ${openMobileSubmenu === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openMobileSubmenu === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4 mt-2 flex flex-col space-y-2"
                              >
                                {item.submenu.map((subitem) => (
                                  <Link
                                    key={subitem.name}
                                    href={subitem.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-base font-medium transition-colors hover:text-quantum-blue ${
                                      pathname === subitem.href ? 'text-quantum-blue' : 'text-gray-400'
                                    }`}
                                  >
                                    {subitem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-lg font-medium transition-colors hover:text-quantum-blue ${
                            pathname === item.href ? 'text-quantum-blue' : 'text-gray-300'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform mt-6">
                    Start Quantum Leap
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}