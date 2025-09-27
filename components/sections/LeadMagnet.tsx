'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Download, CheckCircle, Shield, AlertTriangle, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: AlertTriangle,
    title: "Beveiligingsgaten Opsporen",
    description: "We identificeren kwetsbaarheden voordat hackers dat doen"
  },
  {
    icon: TrendingUp,
    title: "Kostenbesparingen Vinden",
    description: "Gemiddeld €200-500 per maand aan onnodige IT-kosten"
  },
  {
    icon: Shield,
    title: "Compliance Check",
    description: "AVG/GDPR conformiteit en backup strategie beoordeling"
  }
]

export default function LeadMagnet() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-effect p-8 md:p-12 rounded-3xl border border-quantum-blue/30"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-quantum-blue/20 rounded-full mb-4">
                <Download className="h-8 w-8 text-quantum-blue" />
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                <span className="text-gradient">Gratis IT Health Check</span>
              </h2>

              <p className="text-xl text-gray-300 mb-6">
                Ontdek binnen 15 minuten wat jullie IT-infrastructuur kost en bespaart
              </p>

              <div className="inline-flex items-center space-x-2 bg-quantum-green/20 text-quantum-green px-4 py-2 rounded-full text-sm font-semibold mb-8">
                <CheckCircle className="h-4 w-4" />
                <span>100% Gratis & Vrijblijvend</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <benefit.icon className="h-8 w-8 text-quantum-blue mx-auto mb-3" />
                  <h4 className="font-semibold text-white mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-quantum-blue to-quantum-purple hover:scale-105 transition-transform text-lg px-8 py-6 mr-4"
              >
                Plan Gratis IT Scan
                <Download className="ml-2 h-5 w-5" />
              </Button>

              <p className="text-sm text-gray-400 mt-4">
                ⏱️ Duurt 15 minuten • 💬 Direct praktisch advies • 🔒 Vertrouwelijk
              </p>
            </div>

            {/* Social Proof Elements */}
            <div className="border-t border-gray-700 mt-8 pt-8">
              <div className="flex flex-wrap items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-quantum-green" />
                  <span>Geen verplichtingen</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-quantum-green" />
                  <span>Direct bruikbaar advies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-quantum-green" />
                  <span>Heel Nederland</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}