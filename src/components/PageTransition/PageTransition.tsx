'use client'

import { useRef, useState, useLayoutEffect, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from '@/lib/gsap'

/**
 * GSAP page transition wrapper.
 *
 * Strategy (no Framer Motion):
 *  - `displayChildren` state holds what is currently rendered in the DOM.
 *    It lags one step behind the real `children` prop, which lets us keep the
 *    OLD page visible while the exit animation plays.
 *  - On pathname change: animate the container OUT → swap displayChildren →
 *    animate the container IN.
 *  - On first mount: animate IN only (no exit needed).
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const containerRef = useRef<HTMLDivElement>(null)

  // Holds the children currently rendered in the DOM (may be one route behind)
  const [displayChildren, setDisplayChildren] = useState(children)

  // True while the enter animation is queued (triggers the enter useLayoutEffect)
  const [isEntering, setIsEntering] = useState(false)

  // Avoid running the exit effect on the very first render
  const isFirstRender = useRef(true)

  // Capture the incoming children at the moment the pathname effect fires so
  // the closure inside onComplete always has the right value
  const pendingChildren = useRef<React.ReactNode>(children)

  // ── 1. Initial enter animation ───────────────────────────────────────────
  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' }
    )
  }, [])

  // ── 2. Exit on route change ───────────────────────────────────────────────
  useEffect(() => {
    // Skip the initial mount run
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }

    pendingChildren.current = children
    const el = containerRef.current
    if (!el) return

    // Kill any in-progress animation first so we don't get stuck mid-tween
    gsap.killTweensOf(el)

    gsap.to(el, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: 'power2.in',
      onComplete() {
        // Swap the rendered content, then trigger the enter animation
        setDisplayChildren(pendingChildren.current)
        setIsEntering(true)
      },
    })
    // pathname is the only dep we care about; including children would re-run
    // on every render, so suppress the exhaustive-deps warning intentionally.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  // ── 3. Enter after displayChildren has been swapped ──────────────────────
  useLayoutEffect(() => {
    if (!isEntering) return
    const el = containerRef.current
    if (!el) return

    gsap.fromTo(
      el,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
        clearProps: 'transform,opacity',
        onComplete: () => setIsEntering(false),
      }
    )
  }, [isEntering])

  return <div ref={containerRef}>{displayChildren}</div>
}
