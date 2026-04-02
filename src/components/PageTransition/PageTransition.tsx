'use client'

import { useRef, useState, useLayoutEffect, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from '@/lib/gsap'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)

  const [displayChildren, setDisplayChildren] = useState(children)
  const [isEntering, setIsEntering] = useState(false)
  const isFirstRender = useRef(true)
  const pendingChildren = useRef<React.ReactNode>(children)

  // ── DEBUG: log on every render (not inside effects) ──────────────────────
  console.log(
    '[PT] render — pathname:', pathname,
    '| isFirstRender:', isFirstRender.current,
    '| isEntering:', isEntering,
  )

  // ── 1. Initial mount useLayoutEffect ─────────────────────────────────────
  useLayoutEffect(() => {
    const el = containerRef.current
    console.log(
      '[PT] useLayoutEffect[] fired',
      '| el exists:', !!el,
      '| opacity:', el?.style.opacity,
      '| visibility:', el?.style.visibility,
    )
    if (!el) return
    gsap.set(el, { opacity: 1, visibility: 'visible', y: 0 })
    console.log(
      '[PT] after gsap.set — opacity:', el.style.opacity,
      '| visibility:', el.style.visibility,
    )
  }, [])

  // ── 2. Pathname effect ────────────────────────────────────────────────────
  useEffect(() => {
    console.log(
      '[PT] useEffect[pathname] fired — pathname:', pathname,
      '| isFirstRender:', isFirstRender.current,
    )
    if (isFirstRender.current) {
      isFirstRender.current = false
      console.log('[PT] skipping — first render')
      return
    }

    pendingChildren.current = children
    const el = containerRef.current
    if (!el) return

    console.log('[PT] starting EXIT animation')
    gsap.killTweensOf(el)

    gsap.to(el, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: 'power2.in',
      onComplete() {
        console.log('[PT] EXIT complete — swapping children, triggering enter')
        setDisplayChildren(pendingChildren.current)
        setIsEntering(true)
      },
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // ── 3. Enter useLayoutEffect ──────────────────────────────────────────────
  useLayoutEffect(() => {
    console.log('[PT] useLayoutEffect[isEntering] fired — isEntering:', isEntering)
    if (!isEntering) return
    const el = containerRef.current
    if (!el) return

    console.log('[PT] starting ENTER animation')
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        onStart: () => {
          el.style.visibility = 'visible'
          console.log('[PT] ENTER onStart — visibility set to visible')
        },
        // Do NOT use clearProps — removing GSAP's inline opacity/transform
        // creates a one-render gap where React's declared style={{ opacity:0 }}
        // could briefly win. Explicitly set final state so GSAP retains
        // ownership of all three properties across subsequent React renders.
        onComplete: () => {
          gsap.set(el, { opacity: 1, y: 0, visibility: 'visible' })
          console.log('[PT] ENTER complete')
          setIsEntering(false)
        },
      }
    )
  }, [isEntering])

  return (
    <div ref={containerRef} style={{ opacity: 0, visibility: 'hidden' }}>
      {displayChildren}
    </div>
  )
}
