'use client'

import { useEffect, RefObject } from 'react'
import gsap from '@/lib/gsap'
import { ScrollTrigger } from '@/lib/gsap'

// ─── useScrollReveal ────────────────────────────────────────────────────────
// Fades + slides a single element into view when it enters the viewport.

interface RevealOptions {
  y?: number
  duration?: number
  start?: string
  delay?: number
}

export function useScrollReveal(
  ref: RefObject<HTMLElement | null>,
  options: RevealOptions = {},
) {
  const { y = 32, duration = 0.7, start = 'top 85%', delay = 0 } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const actualY = isMobile ? Math.round(y / 2) : y

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: actualY },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}

// ─── useStaggerReveal ───────────────────────────────────────────────────────
// Staggers child elements inside a container when the container enters view.

interface StaggerOptions {
  childSelector?: string
  y?: number
  duration?: number
  stagger?: number
  start?: string
}

export function useStaggerReveal(
  containerRef: RefObject<HTMLElement | null>,
  options: StaggerOptions = {},
) {
  const {
    childSelector = ':scope > *',
    y = 28,
    duration = 0.6,
    stagger = 0.06,
    start = 'top 85%',
  } = options

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const actualY = isMobile ? Math.round(y / 2) : y

    const targets = container.querySelectorAll<HTMLElement>(childSelector)
    if (!targets.length) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        Array.from(targets),
        { opacity: 0, y: actualY },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: container,
            start,
            once: true,
          },
        },
      )
    }, container)

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}

// ─── useParallax ────────────────────────────────────────────────────────────
// Scrubs a translateY offset on an element as the page scrolls past it.
// No-op on mobile — scrub parallax is too heavy on touch devices.

interface ParallaxOptions {
  speed?: number   // 0 = static, 1 = scroll 1:1. Typical values 0.15–0.4
  start?: string
  end?: string
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  options: ParallaxOptions = {},
) {
  const { speed = 0.25, start = 'top bottom', end = 'bottom top' } = options

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Disable on mobile — native scroll and scrub effects conflict on touch
    if (window.matchMedia('(max-width: 767px)').matches) return

    const ctx = gsap.context(() => {
      const distance = el.offsetHeight * speed * -1
      gsap.fromTo(
        el,
        { y: 0 },
        {
          y: distance,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
}
