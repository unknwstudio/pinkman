'use client'

import { useEffect, useRef } from 'react'
import gsap from '@/lib/gsap'
import { ScrollTrigger } from '@/lib/gsap'
import HeroCarousel from '@/components/HeroCarousel/HeroCarousel'

export default function HeroSection() {
  const textSectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLParagraphElement>(null)
  const carouselSectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const textSection = textSectionRef.current
    const text = textRef.current
    const carouselSection = carouselSectionRef.current
    if (!text || !textSection || !carouselSection) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches

    const ctx = gsap.context(() => {
      // ── Hero text entrance (page load) ───────────────────────────────────
      gsap.from(text, {
        y: isMobile ? 60 : 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      })

      // ── Hero text scroll exit ────────────────────────────────────────────
      if (!isMobile) {
        gsap.to(text, {
          y: -80,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: textSection,
            start: 'top top',
            end: '80% top',
            scrub: true,
          },
        })
      }

      // ── Carousel entrance (page load, slight delay) ──────────────────────
      gsap.from(carouselSection, {
        scale: 1.04,
        opacity: 0,
        duration: 1.6,
        ease: 'power3.out',
        delay: 0.15,
      })

      // ── Carousel parallax scrub — desktop only ───────────────────────────
      if (!isMobile) {
        ScrollTrigger.create({
          trigger: carouselSection,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
          onUpdate: (self) => {
            gsap.set(carouselSection, {
              yPercent: -15 * self.progress,
            })
          },
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* ── Hero text ── */}
      <div className="portfolio-section" ref={textSectionRef}>
        <div className="main-container">
          <div className="text-big-wrapper">
            <p className="text-big text-hero" ref={textRef}>
              пинкман&nbsp;—&nbsp;AI&#x2011;дизайн бизнес&nbsp;партнер
            </p>
          </div>
        </div>
      </div>

      {/* ── Hero carousel ── */}
      <div className="portfolio-section" ref={carouselSectionRef} data-cursor="VIEW">
        <div className="images-container">
          <HeroCarousel />
        </div>
      </div>
    </>
  )
}
