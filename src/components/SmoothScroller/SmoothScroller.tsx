'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import gsap, { ScrollSmoother, ScrollTrigger } from '@/lib/gsap'

/**
 * Initialises GSAP ScrollSmoother once on mount.
 * Requires the DOM to have:
 *   <div id="smooth-wrapper">
 *     <div id="smooth-content"> … </div>
 *   </div>
 * On soft Next.js route changes ScrollTrigger.refresh() keeps
 * all triggers in sync without re-creating the smoother.
 */
export default function SmoothScroller() {
  const smootherRef = useRef<ReturnType<typeof ScrollSmoother.create> | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    // Create once
    if (smootherRef.current) return

    smootherRef.current = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: 1.5,
      effects: true,
    })
    console.log('[GSAP] ScrollSmoother initialized', smootherRef.current)

    return () => {
      smootherRef.current?.kill()
      smootherRef.current = null
    }
  }, [])

  // Refresh triggers after every client-side navigation so scroll
  // positions and ScrollTrigger pin-spacers update correctly.
  useEffect(() => {
    ScrollTrigger.refresh()
    // Scroll to top on route change
    smootherRef.current?.scrollTo(0, false)
  }, [pathname])

  return null
}
