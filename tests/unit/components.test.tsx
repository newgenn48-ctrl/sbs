import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'
import HeroSection from '@/components/sections/HeroSection'

describe('Button Component', () => {
  it('renders button with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies correct variant classes', () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByText('Outline Button')
    expect(button).toHaveClass('border')
  })
})

describe('HeroSection Component', () => {
  it('renders hero title', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Digitale Partner/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Gratis Digital Scan/i)).toBeInTheDocument()
    expect(screen.getByText(/Bekijk Onze Diensten/i)).toBeInTheDocument()
  })
})