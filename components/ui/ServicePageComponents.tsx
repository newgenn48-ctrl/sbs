'use client'

import React from 'react'

export const FeatureCard = ({ icon: Icon, title, children }: { icon: React.ElementType, title: string, children: React.ReactNode }) => (
  <div className="glass-effect p-6 rounded-lg border border-cyber-light hover:border-quantum-blue transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-quantum-blue/20 rounded-full mr-4">
        <Icon className="w-6 h-6 text-quantum-blue" />
      </div>
      <h3 className="text-xl font-bold font-display">{title}</h3>
    </div>
    <p className="text-gray-400">{children}</p>
  </div>
);

export const ProcessStep = ({ number, title, children }: { number: string, title: string, children: React.ReactNode }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-cyber-light flex items-center justify-center text-quantum-blue font-bold text-xl border-2 border-quantum-blue/50">
      {number}
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-1">{title}</h4>
      <p className="text-gray-400">{children}</p>
    </div>
  </div>
);
