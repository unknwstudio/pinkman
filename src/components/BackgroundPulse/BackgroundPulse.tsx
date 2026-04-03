'use client'

import { useEffect } from 'react'
import gsap from '@/lib/gsap'
import { ScrollTrigger } from '@/lib/gsap'

export default function BackgroundPulse() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return

    const st = ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        const brightness = 1 + 0.25 * Math.sin(self.progress * Math.PI * 6)
        gsap.set(document.body, { filter: `brightness(${brightness})` })
      },
    })

    return () => {
      st.kill()
      gsap.set(document.body, { filter: 'brightness(1)' })
    }
  }, [])

  return null
}
