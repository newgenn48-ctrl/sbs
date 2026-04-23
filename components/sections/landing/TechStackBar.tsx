'use client'

import type { IconType } from 'react-icons'

export interface TechItem {
  icon: IconType
  name: string
}

interface Props {
  label?: string // default: "Wij werken met"
  items: TechItem[]
}

/**
 * Dark tech-stack bar met monochrome logos en hover white-transition.
 * Wordt direct na de hero geplaatst voor credibility.
 */
export default function TechStackBar({ label = 'Wij werken met', items }: Props) {
  return (
    <section className="bg-[#0B1121] py-8 sm:py-10 relative">
      <div className="divider-hairline-dark absolute top-0 left-0 right-0" />
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-500 mb-6 font-medium">{label}</p>
        <div className="flex flex-wrap justify-center items-center gap-x-8 sm:gap-x-12 gap-y-5">
          {items.map((tech, i) => (
            <div key={tech.name} className="flex items-center gap-x-8 sm:gap-x-12">
              <div
                className="group flex items-center gap-2.5 text-slate-400 hover:text-white transition-colors duration-300"
                title={tech.name}
              >
                <tech.icon className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" aria-label={tech.name} />
                <span className="text-sm sm:text-base font-medium">{tech.name}</span>
              </div>
              {i < items.length - 1 && <span className="hidden sm:block w-1 h-1 rounded-full bg-slate-700" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
