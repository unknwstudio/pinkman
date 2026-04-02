'use client'

import { useRef } from 'react'
import { useStaggerReveal } from '@/hooks/useScrollReveal'

interface Logo {
  src: string
  alt: string
}

interface ClientLogosGridProps {
  logos: Logo[]
}

export default function ClientLogosGrid({ logos }: ClientLogosGridProps) {
  const rowRef = useRef<HTMLDivElement>(null)
  useStaggerReveal(rowRef, {
    childSelector: '.clients-grid__item',
    y: 16,
    duration: 0.5,
    stagger: 0.04,
    start: 'top 90%',
  })

  return (
    <div className="partners-wrapper">
      <div className="row" ref={rowRef}>
        {logos.map((logo) => (
          <div
            key={logo.src}
            className="clients-grid__item bg-1"
            style={{ backgroundImage: `url("${logo.src}")` }}
            aria-label={logo.alt}
          />
        ))}
      </div>
    </div>
  )
}
