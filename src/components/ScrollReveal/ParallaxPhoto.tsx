'use client'

import { useRef } from 'react'
import { useParallax } from '@/hooks/useScrollReveal'

interface ParallaxPhotoProps {
  src: string
  srcSet?: string
  sizes?: string
  alt?: string
  width?: number
  height?: number
  className?: string
  /** 0–1 fraction of element height to shift across the full scroll distance */
  speed?: number
}

export default function ParallaxPhoto({
  src,
  srcSet,
  sizes,
  alt = '',
  width,
  height,
  className = 'image',
  speed = 0.18,
}: ParallaxPhotoProps) {
  const imgRef = useRef<HTMLImageElement>(null)
  useParallax(imgRef, { speed })

  return (
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
    />
  )
}
