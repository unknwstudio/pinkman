'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from '@/lib/gsap'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only mount on pointer: fine devices (no touch)
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot = dotRef.current
    const follower = followerRef.current
    if (!dot || !follower) return

    // Place both off-screen initially
    gsap.set([dot, follower], { x: -200, y: -200 })

    const xTo = gsap.quickTo(follower, 'x', { duration: 0.18, ease: 'power2.out' })
    const yTo = gsap.quickTo(follower, 'y', { duration: 0.18, ease: 'power2.out' })

    const onMove = (e: MouseEvent) => {
      if (!visible) setVisible(true)
      gsap.set(dot, { x: e.clientX, y: e.clientY })
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const onOver = (e: MouseEvent) => {
      const target = (e.target as Element).closest('[data-cursor]')
      if (!target) return
      // Skip if the mouse is moving between children of the same [data-cursor] element
      const from = e.relatedTarget as Element | null
      if (from && target.contains(from)) return
      const newLabel = target.getAttribute('data-cursor') ?? ''
      setLabel(newLabel)
      gsap.to(follower, {
        width: 80,
        height: 80,
        duration: 0.35,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const onOut = (e: MouseEvent) => {
      const target = (e.target as Element).closest('[data-cursor]')
      if (!target) return
      // Skip if the mouse is still inside the [data-cursor] element (moving to a child)
      const to = e.relatedTarget as Element | null
      if (to && target.contains(to)) return
      setLabel('')
      gsap.to(follower, {
        width: 40,
        height: 40,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const onReset = () => {
      setLabel('')
      gsap.to(follower, {
        width: 40,
        height: 40,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    document.addEventListener('click', onReset)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('click', onReset)
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  if (typeof window !== 'undefined' && !window.matchMedia('(pointer: fine)').matches) {
    return null
  }

  return (
    <>
      {/* Dot — follows cursor instantly */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#0d0d0d',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
          willChange: 'transform',
        }}
      />
      {/* Follower — lerps behind */}
      <div
        ref={followerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: '50%',
          border: '1.5px solid rgba(13,13,13,0.35)',
          pointerEvents: 'none',
          zIndex: 9998,
          transform: 'translate(-50%, -50%)',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.3s',
          willChange: 'transform, width, height',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {label && (
          <span
            style={{
              fontSize: '9px',
              fontFamily: 'inherit',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#0d0d0d',
              userSelect: 'none',
              fontWeight: 500,
            }}
          >
            {label}
          </span>
        )}
      </div>
    </>
  )
}
