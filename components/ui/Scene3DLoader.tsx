'use client'

interface Scene3DLoaderProps {
  size?: 'sm' | 'md' | 'lg'
  color?: string
}

export const Scene3DLoader = ({ size = 'md', color = 'quantum-green' }: Scene3DLoaderProps) => {
  const sizeMap = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
      <div className="relative">
        <div className={`${sizeMap[size]} rounded-full bg-${color}/20 animate-pulse`} />
        <div
          className={`absolute inset-0 ${sizeMap[size]} rounded-full border-2 border-${color}/30 animate-ping`}
          style={{ animationDuration: '2s' }}
        />
      </div>
    </div>
  )
}

export default Scene3DLoader
