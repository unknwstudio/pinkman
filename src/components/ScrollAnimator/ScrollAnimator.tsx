'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

/**
 * Drop-in replacement for scroll.js.
 * Adds `.in` to every `.anim` element when it enters the viewport.
 * Re-runs on every client-side route change via usePathname.
 */
export default function ScrollAnimator() {
  const pathname = usePathname()

  useEffect(() => {
    // Only observe elements that haven't already animated in
    const els = Array.from(document.querySelectorAll<HTMLElement>('.anim:not(.in)'))
    if (!els.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])

  return null
}
