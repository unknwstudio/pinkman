'use client'

import { useRef, useEffect } from 'react'
import gsap from '@/lib/gsap'

interface ParallaxPhotoProps {
  src: string
  srcSet?: string
  sizes?: string
  alt?: string
  width?: number
  height?: number
  className?: string
}

export default function ParallaxPhoto({
  src,
  srcSet,
  sizes,
  alt = '',
  width,
  height,
  className = 'image',
}: ParallaxPhotoProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const img = imgRef.current
    if (!wrap || !img) return

    const ctx = gsap.context(() => {
      // ── Curtain wipe (clip-path) + zoom reveal ─────────────────────────
      gsap.fromTo(
        wrap,
        { clipPath: 'inset(100% 0% 0% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.0,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: wrap,
            start: 'top 80%',
            once: true,
          },
        },
      )
      gsap.fromTo(
        img,
        { scale: 1.18 },
        {
          scale: 1,
          duration: 1.0,
          ease: 'power4.inOut',
          scrollTrigger: {
            trigger: wrap,
            start: 'top 80%',
            once: true,
          },
        },
      )
    }, wrap)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapRef} style={{ overflow: 'hidden', lineHeight: 0 }}>
      <img
        ref={imgRef}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={className}
        loading="lazy"
        width={width}
        height={height}
        style={{ display: 'block', width: '100%', transformOrigin: 'center center' }}
      />
    </div>
  )
}
