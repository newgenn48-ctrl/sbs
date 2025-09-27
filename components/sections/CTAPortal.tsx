'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface CTAPortalProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTAPortal({
  title = "Klaar voor Digitale Voorsprong?",
  description = "Laten we samen uw digitale fundament bouwen voor stabiele, voorspelbare groei. Transformeer uw IT en marketing van een kostenpost naar uw sterkste troef.",
  buttonText = "Plan Kennismaking",
  buttonLink
}: CTAPortalProps) {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-quantum-blue via-quantum-purple to-quantum-pink opacity-20" />
            <div className="absolute inset-0 bg-grid-pattern opacity-10" />
            
            {/* Content */}
            <div className="relative glass-effect p-12 md:p-16 text-center">
              <Sparkles className="h-12 w-12 text-quantum-blue mx-auto mb-6" />
              
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="text-gradient">{title}</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                {description}
              </p>
              
              <div className="bg-cyber-dark/50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold mb-4 text-quantum-green">
                  Plan een Vrijblijvende Kennismaking
                </h3>
                <p className="text-gray-400 mb-4">Laten we bespreken hoe wij uw bedrijf kunnen helpen groeien.</p>
                <ul className="text-left max-w-md mx-auto space-y-2 text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-quantum-green">✓</span>
                    We luisteren naar uw doelen en uitdagingen
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-quantum-green">✓</span>
                    U krijgt direct praktisch en eerlijk advies
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-quantum-green">✓</span>
                    We schetsen een mogelijke, concrete aanpak
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-quantum-green">✓</span>
                    100% vrijblijvend en vertrouwelijk
                  </li>
                </ul>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {buttonLink ? (
                  <Link href={buttonLink}>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform text-lg px-8 py-6"
                    >
                      {buttonText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                ) : (
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform text-lg px-8 py-6"
                  >
                    {buttonText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                )}
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-quantum-blue/50 hover:bg-quantum-blue/10 text-lg px-8 py-6"
                >
                  Of Bel Direct
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}