'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { RotateCw, AlertOctagon } from 'lucide-react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-cyber-darker flex items-center justify-center">
      <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-quantum-pink/10 via-transparent to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <AlertOctagon className="h-16 w-16 text-quantum-pink" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
              <span className="text-gradient-pink">Something Went Wrong</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              An unexpected error occurred. We have been notified and are working to fix it.
            </p>

            <Button 
              size="lg"
              onClick={() => reset()}
              className="bg-gradient-to-r from-quantum-pink to-quantum-orange hover:scale-105 transition-transform"
            >
              <RotateCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
