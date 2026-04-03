'use client'

/**
 * ServicePageAnimator — null-render client component.
 * Runs on every route change and applies GSAP scroll animations to
 * service page elements that are rendered by server components and
 * therefore cannot hold refs themselves.
 *
 * Targets elements inside #smooth-content to stay within a known scope.
 * Re-runs on pathname change so animations refresh on soft navigation.
 */

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import gsap from '@/lib/gsap'
import { ScrollTrigger } from '@/lib/gsap'

export default function ServicePageAnimator() {
  const pathname = usePathname()

  useEffect(() => {
    const root = document.getElementById('smooth-content')
    if (!root) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches

    const ctx = gsap.context(() => {

      // ── Hero headings (not the home-page hero which has .text-hero) ────────
      const heroHeadings = root.querySelectorAll<HTMLElement>(
        '.text-big-wrapper .text-big:not(.text-hero)',
      )
      heroHeadings.forEach((el) => {
        gsap.from(el, {
          y: isMobile ? 60 : 120,
          opacity: 0,
          duration: 1.2,
          ease: 'power4.out',
        })
      })

      // ── Service section image wipe + zoom ─────────────────────────────────
      const servicePictures = root.querySelectorAll<HTMLElement>('.service__picture')
      servicePictures.forEach((pic) => {
        const imgs = Array.from(pic.querySelectorAll<HTMLElement>('img'))

        gsap.fromTo(
          pic,
          { clipPath: 'inset(100% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            duration: 1.0,
            ease: 'power4.inOut',
            scrollTrigger: { trigger: pic, start: 'top 80%', once: true },
          },
        )
        if (imgs.length) {
          gsap.fromTo(
            imgs,
            { scale: 1.18 },
            {
              scale: 1,
              duration: 1.0,
              ease: 'power4.inOut',
              scrollTrigger: { trigger: pic, start: 'top 80%', once: true },
            },
          )
        }
      })

      // ── Service section block reveal ──────────────────────────────────────
      const serviceSections = root.querySelectorAll<HTMLElement>('.service-section')
      serviceSections.forEach((section) => {
        // Skip elements already handled by CSS ScrollAnimator (.anim class)
        if (section.classList.contains('anim')) return

        gsap.fromTo(
          section,
          { opacity: 0, y: isMobile ? 30 : 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 85%', once: true },
          },
        )

        // Section overlap scrub — desktop only
        if (!isMobile) {
          gsap.fromTo(
            section,
            { yPercent: 8, opacity: 0.7 },
            {
              yPercent: 0,
              opacity: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: section,
                start: 'top bottom',
                end: 'top 60%',
                scrub: true,
              },
            },
          )
        }
      })

      // ── Stat grid items stagger ───────────────────────────────────────────
      const statGrid = root.querySelector<HTMLElement>('.stat-grid')
      if (statGrid) {
        const items = Array.from(statGrid.querySelectorAll<HTMLElement>('.stat-grid__item'))
        if (items.length) {
          gsap.fromTo(
            items,
            { opacity: 0, y: isMobile ? 20 : 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.08,
              ease: 'power2.out',
              scrollTrigger: { trigger: statGrid, start: 'top 85%', once: true },
            },
          )
        }
      }

      // ── Step / process list items stagger ────────────────────────────────
      const lists = root.querySelectorAll<HTMLElement>('.list-wrapper .list')
      lists.forEach((list) => {
        const items = Array.from(list.querySelectorAll<HTMLElement>('.list-item-wrapper'))
        if (!items.length) return

        gsap.fromTo(
          items,
          { opacity: 0, y: isMobile ? 20 : 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: list, start: 'top 85%', once: true },
          },
        )
      })

      // ── Service-points / feature cards stagger ────────────────────────────
      const servicePointSections = root.querySelectorAll<HTMLElement>('.service-points-section')
      servicePointSections.forEach((section) => {
        const points = Array.from(section.querySelectorAll<HTMLElement>('.service-point'))
        if (!points.length) return

        gsap.fromTo(
          points,
          { opacity: 0, y: isMobile ? 20 : 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: section, start: 'top 85%', once: true },
          },
        )
      })

    }) // end gsap.context

    // Let ScrollTrigger recalculate positions after new animations are set up
    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [pathname])

  return null
}
