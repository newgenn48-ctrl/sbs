'use client'

import React from 'react'

/**
 * ServiceIllustration — Brand-consistent SVG illustrations
 * Generates professional, abstract illustrations using brand colors
 * Used as fallback/alternative to 3D scenes and for OG images
 */

interface ServiceIllustrationProps {
  variant: 'it' | 'development' | 'ai' | 'marketing' | 'security' | 'cloud' | 'analytics' | 'automation'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const brandColors = {
  blue: '#2563EB',
  blueLight: '#3B82F6',
  bluePale: '#DBEAFE',
  violet: '#7C3AED',
  violetLight: '#8B5CF6',
  violetPale: '#EDE9FE',
  emerald: '#10B981',
  emeraldLight: '#34D399',
  emeraldPale: '#D1FAE5',
  amber: '#F59E0B',
  amberPale: '#FEF3C7',
  slate100: '#F1F5F9',
  slate200: '#E2E8F0',
  slate300: '#CBD5E1',
}

const sizeMap = {
  sm: { width: 200, height: 200 },
  md: { width: 400, height: 300 },
  lg: { width: 600, height: 400 },
}

function ITIllustration({ w, h }: { w: number; h: number }) {
  return (
    <>
      {/* Server rack */}
      <rect x={w * 0.35} y={h * 0.2} width={w * 0.3} height={h * 0.6} rx="8" fill={brandColors.slate100} stroke={brandColors.slate200} strokeWidth="1.5" />
      {[0.28, 0.4, 0.52, 0.64].map((y, i) => (
        <g key={i}>
          <rect x={w * 0.38} y={h * y} width={w * 0.24} height={h * 0.08} rx="4" fill="white" stroke={brandColors.slate200} strokeWidth="1" />
          <circle cx={w * 0.57} cy={h * (y + 0.04)} r="3" fill={i < 3 ? brandColors.emerald : brandColors.amber} />
          <rect x={w * 0.4} y={h * (y + 0.025)} width={w * 0.1} height="3" rx="1.5" fill={brandColors.bluePale} />
        </g>
      ))}
      {/* Connection lines */}
      <line x1={w * 0.5} y1={h * 0.15} x2={w * 0.5} y2={h * 0.2} stroke={brandColors.blue} strokeWidth="2" strokeDasharray="4 2" />
      <circle cx={w * 0.5} cy={h * 0.12} r="6" fill={brandColors.bluePale} stroke={brandColors.blue} strokeWidth="1.5" />
      {/* Network nodes */}
      {[{ x: 0.15, y: 0.35 }, { x: 0.85, y: 0.35 }, { x: 0.15, y: 0.65 }, { x: 0.85, y: 0.65 }].map((pos, i) => (
        <g key={`node-${i}`}>
          <line x1={w * (pos.x < 0.5 ? 0.35 : 0.65)} y1={h * pos.y} x2={w * pos.x} y2={h * pos.y} stroke={brandColors.blue} strokeWidth="1" strokeDasharray="4 2" opacity="0.5" />
          <circle cx={w * pos.x} cy={h * pos.y} r="8" fill={brandColors.bluePale} stroke={brandColors.blue} strokeWidth="1.5" />
          <circle cx={w * pos.x} cy={h * pos.y} r="3" fill={brandColors.blue} />
        </g>
      ))}
    </>
  )
}

function DevelopmentIllustration({ w, h }: { w: number; h: number }) {
  return (
    <>
      {/* Browser window */}
      <rect x={w * 0.15} y={h * 0.15} width={w * 0.7} height={h * 0.7} rx="8" fill="white" stroke={brandColors.slate200} strokeWidth="1.5" />
      {/* Title bar */}
      <rect x={w * 0.15} y={h * 0.15} width={w * 0.7} height={h * 0.08} rx="8" fill={brandColors.slate100} />
      <rect x={w * 0.15} y={h * 0.195} width={w * 0.7} height={h * 0.035} fill={brandColors.slate100} />
      {/* Dots */}
      {[0.2, 0.235, 0.27].map((x, i) => (
        <circle key={i} cx={w * x} cy={h * 0.19} r="3.5" fill={['#EF4444', '#FBBF24', '#34D399'][i]} />
      ))}
      {/* Content blocks */}
      <rect x={w * 0.2} y={h * 0.3} width={w * 0.3} height={h * 0.08} rx="4" fill={brandColors.violetPale} />
      <rect x={w * 0.2} y={h * 0.42} width={w * 0.55} height="3" rx="1.5" fill={brandColors.slate200} />
      <rect x={w * 0.2} y={h * 0.46} width={w * 0.45} height="3" rx="1.5" fill={brandColors.slate200} />
      <rect x={w * 0.2} y={h * 0.5} width={w * 0.35} height="3" rx="1.5" fill={brandColors.slate200} />
      {/* CTA button */}
      <rect x={w * 0.2} y={h * 0.58} width={w * 0.25} height={h * 0.07} rx="6" fill={brandColors.violet} />
      {/* Image placeholder */}
      <rect x={w * 0.55} y={h * 0.3} width={w * 0.25} height={h * 0.35} rx="6" fill={brandColors.bluePale} />
      {/* Code symbols */}
      <text x={w * 0.6} y={h * 0.5} fontSize="14" fill={brandColors.blue} fontFamily="monospace" opacity="0.4">&lt;/&gt;</text>
    </>
  )
}

function AIIllustration({ w, h }: { w: number; h: number }) {
  return (
    <>
      {/* Central brain/circle */}
      <circle cx={w * 0.5} cy={h * 0.5} r={w * 0.15} fill={brandColors.violetPale} stroke={brandColors.violet} strokeWidth="2" />
      <circle cx={w * 0.5} cy={h * 0.5} r={w * 0.1} fill="white" stroke={brandColors.violetLight} strokeWidth="1.5" />
      {/* Brain lines */}
      <path d={`M${w * 0.44} ${h * 0.45} Q${w * 0.5} ${h * 0.42} ${w * 0.56} ${h * 0.45}`} fill="none" stroke={brandColors.violet} strokeWidth="1.5" />
      <path d={`M${w * 0.44} ${h * 0.52} Q${w * 0.5} ${h * 0.55} ${w * 0.56} ${h * 0.52}`} fill="none" stroke={brandColors.violet} strokeWidth="1.5" />
      {/* Orbital rings */}
      <ellipse cx={w * 0.5} cy={h * 0.5} rx={w * 0.25} ry={h * 0.12} fill="none" stroke={brandColors.blue} strokeWidth="1" strokeDasharray="6 3" opacity="0.4" />
      <ellipse cx={w * 0.5} cy={h * 0.5} rx={w * 0.12} ry={h * 0.25} fill="none" stroke={brandColors.emerald} strokeWidth="1" strokeDasharray="6 3" opacity="0.4" />
      {/* Data nodes */}
      {[
        { x: 0.25, y: 0.3 }, { x: 0.75, y: 0.3 },
        { x: 0.2, y: 0.6 }, { x: 0.8, y: 0.6 },
        { x: 0.35, y: 0.15 }, { x: 0.65, y: 0.85 },
      ].map((pos, i) => (
        <g key={i}>
          <line x1={w * 0.5} y1={h * 0.5} x2={w * pos.x} y2={h * pos.y} stroke={brandColors.blue} strokeWidth="0.5" opacity="0.3" />
          <circle cx={w * pos.x} cy={h * pos.y} r="5" fill={[brandColors.bluePale, brandColors.violetPale, brandColors.emeraldPale][i % 3]} stroke={[brandColors.blue, brandColors.violet, brandColors.emerald][i % 3]} strokeWidth="1" />
        </g>
      ))}
    </>
  )
}

function MarketingIllustration({ w, h }: { w: number; h: number }) {
  return (
    <>
      {/* Chart background */}
      <rect x={w * 0.15} y={h * 0.15} width={w * 0.7} height={h * 0.7} rx="8" fill="white" stroke={brandColors.slate200} strokeWidth="1.5" />
      {/* Grid lines */}
      {[0.35, 0.5, 0.65].map((y, i) => (
        <line key={i} x1={w * 0.2} y1={h * y} x2={w * 0.8} y2={h * y} stroke={brandColors.slate100} strokeWidth="1" />
      ))}
      {/* Bar chart */}
      {[
        { x: 0.25, h: 0.25, color: brandColors.bluePale },
        { x: 0.35, h: 0.35, color: brandColors.blue },
        { x: 0.45, h: 0.3, color: brandColors.violetPale },
        { x: 0.55, h: 0.45, color: brandColors.violet },
        { x: 0.65, h: 0.4, color: brandColors.emeraldPale },
        { x: 0.75, h: 0.55, color: brandColors.emerald },
      ].map((bar, i) => (
        <rect key={i} x={w * bar.x - 12} y={h * (0.78 - bar.h)} width="24" height={h * bar.h} rx="4" fill={bar.color} />
      ))}
      {/* Trend line */}
      <polyline
        points={`${w * 0.25},${h * 0.6} ${w * 0.35},${h * 0.5} ${w * 0.45},${h * 0.55} ${w * 0.55},${h * 0.38} ${w * 0.65},${h * 0.42} ${w * 0.75},${h * 0.25}`}
        fill="none"
        stroke={brandColors.emerald}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Arrow up */}
      <polygon points={`${w * 0.78},${h * 0.2} ${w * 0.75},${h * 0.26} ${w * 0.81},${h * 0.26}`} fill={brandColors.emerald} />
    </>
  )
}

function SecurityIllustration({ w, h }: { w: number; h: number }) {
  return (
    <>
      {/* Shield */}
      <path
        d={`M${w * 0.5} ${h * 0.15} L${w * 0.72} ${h * 0.3} L${w * 0.72} ${h * 0.6} Q${w * 0.72} ${h * 0.8} ${w * 0.5} ${h * 0.88} Q${w * 0.28} ${h * 0.8} ${w * 0.28} ${h * 0.6} L${w * 0.28} ${h * 0.3} Z`}
        fill={brandColors.bluePale}
        stroke={brandColors.blue}
        strokeWidth="2"
      />
      {/* Inner shield */}
      <path
        d={`M${w * 0.5} ${h * 0.25} L${w * 0.65} ${h * 0.36} L${w * 0.65} ${h * 0.58} Q${w * 0.65} ${h * 0.72} ${w * 0.5} ${h * 0.78} Q${w * 0.35} ${h * 0.72} ${w * 0.35} ${h * 0.58} L${w * 0.35} ${h * 0.36} Z`}
        fill="white"
        stroke={brandColors.blue}
        strokeWidth="1.5"
      />
      {/* Check mark */}
      <polyline
        points={`${w * 0.44} ${h * 0.52} ${w * 0.48} ${h * 0.58} ${w * 0.57} ${h * 0.45}`}
        fill="none"
        stroke={brandColors.emerald}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lock icon dots */}
      <circle cx={w * 0.5} cy={h * 0.65} r="3" fill={brandColors.blue} />
    </>
  )
}

function CloudIllustration({ w, h }: { w: number; h: number }) {
  return (
    <>
      {/* Main cloud */}
      <ellipse cx={w * 0.5} cy={h * 0.4} rx={w * 0.25} ry={h * 0.15} fill={brandColors.bluePale} stroke={brandColors.blue} strokeWidth="1.5" />
      <ellipse cx={w * 0.38} cy={h * 0.42} rx={w * 0.15} ry={h * 0.12} fill={brandColors.bluePale} stroke={brandColors.blue} strokeWidth="1.5" />
      <ellipse cx={w * 0.62} cy={h * 0.42} rx={w * 0.15} ry={h * 0.12} fill={brandColors.bluePale} stroke={brandColors.blue} strokeWidth="1.5" />
      <rect x={w * 0.25} y={h * 0.4} width={w * 0.5} height={h * 0.08} fill={brandColors.bluePale} />
      {/* Connection arrows down */}
      {[0.35, 0.5, 0.65].map((x, i) => (
        <g key={i}>
          <line x1={w * x} y1={h * 0.5} x2={w * x} y2={h * 0.7} stroke={[brandColors.blue, brandColors.violet, brandColors.emerald][i]} strokeWidth="1.5" strokeDasharray="4 3" />
          <rect x={w * x - 15} y={h * 0.72} width="30" height="20" rx="4" fill="white" stroke={[brandColors.blue, brandColors.violet, brandColors.emerald][i]} strokeWidth="1" />
        </g>
      ))}
    </>
  )
}

function AnalyticsIllustration({ w, h }: { w: number; h: number }) {
  return (
    <>
      <rect x={w * 0.1} y={h * 0.1} width={w * 0.8} height={h * 0.8} rx="8" fill="white" stroke={brandColors.slate200} strokeWidth="1.5" />
      {/* Line chart area */}
      <path
        d={`M${w * 0.15} ${h * 0.7} L${w * 0.3} ${h * 0.55} L${w * 0.45} ${h * 0.6} L${w * 0.6} ${h * 0.35} L${w * 0.75} ${h * 0.4} L${w * 0.85} ${h * 0.2} L${w * 0.85} ${h * 0.7} Z`}
        fill={brandColors.bluePale}
        opacity="0.5"
      />
      <polyline
        points={`${w * 0.15},${h * 0.7} ${w * 0.3},${h * 0.55} ${w * 0.45},${h * 0.6} ${w * 0.6},${h * 0.35} ${w * 0.75},${h * 0.4} ${w * 0.85},${h * 0.2}`}
        fill="none"
        stroke={brandColors.blue}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Data points */}
      {[{ x: 0.3, y: 0.55 }, { x: 0.45, y: 0.6 }, { x: 0.6, y: 0.35 }, { x: 0.75, y: 0.4 }, { x: 0.85, y: 0.2 }].map((p, i) => (
        <circle key={i} cx={w * p.x} cy={h * p.y} r="4" fill="white" stroke={brandColors.blue} strokeWidth="2" />
      ))}
      {/* Mini stat cards */}
      <rect x={w * 0.15} y={h * 0.78} width={w * 0.2} height={h * 0.1} rx="4" fill={brandColors.emeraldPale} />
      <rect x={w * 0.4} y={h * 0.78} width={w * 0.2} height={h * 0.1} rx="4" fill={brandColors.violetPale} />
      <rect x={w * 0.65} y={h * 0.78} width={w * 0.2} height={h * 0.1} rx="4" fill={brandColors.amberPale} />
    </>
  )
}

function AutomationIllustration({ w, h }: { w: number; h: number }) {
  return (
    <>
      {/* Workflow nodes */}
      {[
        { x: 0.2, y: 0.3, color: brandColors.blue, bg: brandColors.bluePale },
        { x: 0.5, y: 0.3, color: brandColors.violet, bg: brandColors.violetPale },
        { x: 0.8, y: 0.3, color: brandColors.emerald, bg: brandColors.emeraldPale },
        { x: 0.35, y: 0.65, color: brandColors.violet, bg: brandColors.violetPale },
        { x: 0.65, y: 0.65, color: brandColors.blue, bg: brandColors.bluePale },
      ].map((node, i) => (
        <g key={i}>
          <circle cx={w * node.x} cy={h * node.y} r="20" fill={node.bg} stroke={node.color} strokeWidth="1.5" />
          <circle cx={w * node.x} cy={h * node.y} r="6" fill={node.color} />
        </g>
      ))}
      {/* Connection lines */}
      {[
        [0.2, 0.3, 0.5, 0.3], [0.5, 0.3, 0.8, 0.3],
        [0.2, 0.3, 0.35, 0.65], [0.5, 0.3, 0.35, 0.65],
        [0.5, 0.3, 0.65, 0.65], [0.8, 0.3, 0.65, 0.65],
      ].map(([x1, y1, x2, y2], i) => (
        <line key={i} x1={w * x1} y1={h * y1} x2={w * x2} y2={h * y2} stroke={brandColors.slate300} strokeWidth="1.5" strokeDasharray="4 3" />
      ))}
      {/* Gear icon in center */}
      <circle cx={w * 0.5} cy={h * 0.5} r="12" fill={brandColors.amberPale} stroke={brandColors.amber} strokeWidth="1.5" />
    </>
  )
}

const illustrations: Record<ServiceIllustrationProps['variant'], (props: { w: number; h: number }) => React.ReactElement> = {
  it: ITIllustration,
  development: DevelopmentIllustration,
  ai: AIIllustration,
  marketing: MarketingIllustration,
  security: SecurityIllustration,
  cloud: CloudIllustration,
  analytics: AnalyticsIllustration,
  automation: AutomationIllustration,
}

export default function ServiceIllustration({ variant, className = '', size = 'md' }: ServiceIllustrationProps) {
  const { width, height } = sizeMap[size]
  const Illustration = illustrations[variant]

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto ${className}`}
      role="img"
      aria-label={`${variant} service illustration`}
    >
      {/* Subtle background */}
      <rect width={width} height={height} rx="12" fill="#F8FAFC" />
      <Illustration w={width} h={height} />
    </svg>
  )
}
