'use client'

import { m, animate } from 'framer-motion'
import { Award, Clock, Users } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const trustItems = [
  { icon: Award, text: '10+ Jaar Ervaring' },
  { icon: Users, text: 'ZZP & MKB Specialist' },
  { icon: Clock, text: 'Alles Onder Één Dak' },
]

export default function TrustBar() {
  return (
    <section className="py-8 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
          {trustItems.map((item, i) => (
            <m.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-center gap-2.5 text-slate-500"
            >
              <item.icon className="w-4 h-4 text-primary-blue" />
              <span className="text-sm font-medium">{item.text}</span>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}
