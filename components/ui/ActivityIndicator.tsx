'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Calendar, Mail, Phone } from 'lucide-react'

const activities = [
  {
    icon: Calendar,
    text: "Nieuwe consultatie ingepland",
    location: "Utrecht",
    timeAgo: "2 min geleden"
  },
  {
    icon: Mail,
    text: "IT-scan aanvraag ontvangen", 
    location: "Amsterdam",
    timeAgo: "5 min geleden"
  },
  {
    icon: Phone,
    text: "Demo gepland voor volgende week",
    location: "Rotterdam", 
    timeAgo: "12 min geleden"
  }
]

export default function ActivityIndicator() {
  const [currentActivity, setCurrentActivity] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentActivity((prev) => (prev + 1) % activities.length)
        setIsVisible(true)
      }, 300)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const activity = activities[currentActivity]

  return (
    <div className="fixed bottom-4 left-4 z-50 max-w-sm">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="glass-effect rounded-lg border border-quantum-green/20 p-4 shadow-2xl"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-quantum-green/20 flex items-center justify-center">
                  <activity.icon className="h-4 w-4 text-quantum-green" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-2 h-2 bg-quantum-green rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white">
                    {activity.text}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>{activity.location}</span>
                  <span>{activity.timeAgo}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}