'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { m, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, X, ChevronDown } from 'lucide-react'
import Navigation from './Navigation'
import { navigation } from '@/lib/navigation'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmenuToggle = useCallback((name: string) => {
    setOpenMobileSubmenu(prev => prev === name ? null : name)
  }, [])

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:bg-primary-blue focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:z-[9999] focus:font-medium focus:outline-none"
      >
        Skip naar hoofdinhoud
      </a>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
            : 'bg-dark/90 backdrop-blur-sm'
        }`}
      >
        <nav className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <m.div
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
                sizes="180px"
                className="h-14 w-auto"
                priority
              />
            </m.div>
          </Link>

          <div className="hidden lg:flex items-center">
            <Navigation isScrolled={isScrolled} />
          </div>

          <div className="hidden lg:flex items-center">
            <Button className="bg-gradient-to-r from-primary-blue to-primary-violet hover:brightness-110 transition-all shadow-lg shadow-primary-blue/20 text-white" asChild>
              <Link href="/gratis-advies">
                Gratis Advies
              </Link>
            </Button>
          </div>

          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className={isScrolled ? 'text-slate-700 hover:text-primary-blue' : 'text-white hover:text-blue-300'}
                >
                  {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 bg-white border-slate-200">
                <div className="flex flex-col space-y-2 mt-8">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.submenu ? (
                        <>
                          <button
                            onClick={() => handleSubmenuToggle(item.name)}
                            className="w-full flex justify-between items-center text-lg font-medium text-slate-700 hover:text-primary-blue py-3 min-h-[44px]"
                          >
                            {item.name}
                            <ChevronDown className={`h-5 w-5 transition-transform ${openMobileSubmenu === item.name ? 'rotate-180' : ''}`} />
                          </button>
                          <AnimatePresence>
                            {openMobileSubmenu === item.name && (
                              <m.div
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
                                    className={`text-base font-medium transition-colors hover:text-primary-blue py-2 min-h-[44px] flex items-center ${
                                      pathname === subitem.href ? 'text-primary-blue' : 'text-slate-600'
                                    }`}
                                  >
                                    {subitem.name}
                                  </Link>
                                ))}
                              </m.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block text-lg font-medium transition-colors hover:text-primary-blue py-3 min-h-[44px] flex items-center ${
                            pathname === item.href ? 'text-primary-blue' : 'text-slate-700'
                          }`}
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                  <Button className="bg-gradient-to-r from-primary-blue to-primary-violet hover:brightness-110 transition-all mt-4 text-white" asChild>
                    <Link href="/gratis-advies" onClick={() => setIsMobileMenuOpen(false)}>Gratis Advies</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        </nav>
      </header>
    </>
  )
}
