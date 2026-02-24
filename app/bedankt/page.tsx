'use client'

import { m } from 'framer-motion'
import Link from 'next/link'
import { CheckCircle2, ArrowRight, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BedanktPage() {
  return (
    <main className="min-h-screen bg-cyber-darker flex items-center justify-center py-20 pt-32">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-effect rounded-3xl overflow-hidden border border-quantum-green/20"
        >
          <div className="h-1 bg-gradient-to-r from-quantum-green via-quantum-blue to-quantum-purple" />

          <div className="p-8 sm:p-12 text-center">
            <m.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-quantum-green/20 flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-quantum-green" />
            </m.div>

            <h1 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Bedankt voor uw bericht!
            </h1>

            <p className="text-gray-300 mb-8 max-w-md mx-auto">
              Wij hebben uw aanvraag ontvangen en nemen binnen 24 uur contact met u op.
            </p>

            <div className="glass-effect rounded-xl p-6 mb-8 border border-white/10">
              <p className="text-gray-400 text-sm mb-4">Liever direct contact?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+31687874001"
                  className="flex items-center justify-center gap-2 text-quantum-blue hover:text-quantum-blue/80 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>06 87 87 40 01</span>
                </a>
                <a
                  href="mailto:info@startbeheer.nl"
                  className="flex items-center justify-center gap-2 text-quantum-blue hover:text-quantum-blue/80 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@startbeheer.nl</span>
                </a>
              </div>
            </div>

            <Button asChild className="bg-gradient-to-r from-quantum-blue to-quantum-purple">
              <Link href="/">
                Terug naar home
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </m.div>
      </div>
    </main>
  )
}
