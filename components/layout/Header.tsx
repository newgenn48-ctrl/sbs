'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
      { name: 'IT Support', href: '/it-support' },
      { name: 'Systeembeheer Uitbesteden', href: '/systeembeheer-uitbesteden' },
      { name: 'Werkplekbeheer Uitbesteden', href: '/werkplekbeheer-uitbesteden' },
      { name: 'Microsoft 365 Beheer', href: '/microsoft-365-beheer' },
      { name: 'Cybersecurity', href: '/cybersecurity' },
    ],
  },
  {
    name: 'Development',
    href: '#',
    submenu: [
      { name: 'Development Overzicht', href: '/development' },
      { name: 'Website Laten Maken', href: '/development/website-laten-maken' },
      { name: 'Webapplicatie Ontwikkeling', href: '/development/webapplicatie-ontwikkeling' },
      { name: 'E-commerce Oplossingen', href: '/development/ecommerce' },
    ],
  },
  {
    name: 'AI & Automatisering',
    href: '#',
    submenu: [
      { name: 'AI Overzicht', href: '/ai' },
      { name: 'AI Chatbots', href: '/ai/chatbots' },
      { name: 'Proces Automatisering', href: '/ai/process-automation' },
      { name: 'AI Analytics', href: '/ai/analytics' },
      { name: 'Virtuele Assistent', href: '/ai/virtual-assistant' },
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
    ],
  },
  { name: 'Oplossingen', href: '/oplossingen' },
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
          ? 'bg-cyber-darker/95 backdrop-blur-xl border-b border-cyber-light'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                src="/sbs.webp"
                alt="Start Beheer Solutions"
                width={180}
                height={52}
                className="h-14 w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Navigation />
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform" asChild>
              <Link href="/contact">
                Gratis Advies
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="text-gray-300 hover:text-quantum-blue"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 bg-cyber-darker border-cyber-light"
              >
                <div className="flex flex-col space-y-2 mt-8">
                  {mobileNavigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => handleSubmenuToggle(item.name)}
                            className="w-full flex justify-between items-center text-lg font-medium text-gray-300 hover:text-quantum-blue py-2"
                          >
                            {item.name}
                            <ChevronDown
                              className={`h-5 w-5 transition-transform ${
                                openMobileSubmenu === item.name
                                  ? 'rotate-180'
                                  : ''
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {openMobileSubmenu === item.name && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden pl-4 flex flex-col space-y-2"
                              >
                                {item.submenu.map((subitem) => (
                                  <Link
                                    key={subitem.name}
                                    href={subitem.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-base font-medium transition-colors hover:text-quantum-blue py-1 ${
                                      pathname === subitem.href
                                        ? 'text-quantum-blue'
                                        : 'text-gray-400'
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
                          className={`block text-lg font-medium transition-colors hover:text-quantum-blue py-2 ${
                            pathname === item.href
                              ? 'text-quantum-blue'
                              : 'text-gray-300'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform mt-6" asChild>
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                      Gratis Advies
                    </Link>
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
