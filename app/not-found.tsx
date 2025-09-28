'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-quantum-orange/10 via-transparent to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <AlertTriangle className="h-16 w-16 text-quantum-orange" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient">404</span>
              <br />
              <span className="text-white">Page Not Found</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              The page you are looking for does not exist. It might have been moved or deleted.
            </p>

            <Link href="/" passHref>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-quantum-orange to-quantum-pink hover:scale-105 transition-transform"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
