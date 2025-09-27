'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Cookie, X } from 'lucide-react'
import Cookies from 'js-cookie'

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = Cookies.get('cookie-consent')
    if (!consent) {
      setTimeout(() => setShowBanner(true), 2000)
    }
  }, [])

  const acceptCookies = () => {
    Cookies.set('cookie-consent', 'accepted', { expires: 365 })
    setShowBanner(false)
  }

  const declineCookies = () => {
    Cookies.set('cookie-consent', 'declined', { expires: 365 })
    setShowBanner(false)
  }

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25 }}
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50"
        >
          <div className="glass-effect rounded-2xl border border-quantum-blue/20 p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <Cookie className="h-6 w-6 text-quantum-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">Cookie Settings</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Wij gebruiken cookies om uw ervaring te verbeteren en onze services te optimaliseren. 
                  Lees meer in ons{' '}
                  <a href="/cookies" className="text-quantum-blue hover:underline">
                    cookie beleid
                  </a>
                  .
                </p>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    onClick={acceptCookies}
                    className="bg-gradient-to-r from-quantum-blue to-quantum-purple"
                  >
                    Accepteren
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={declineCookies}
                    className="border-quantum-blue/50"
                  >
                    Weigeren
                  </Button>
                </div>
              </div>
              <button
                onClick={() => setShowBanner(false)}
                className="flex-shrink-0 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}