'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from '@/lib/gsap'
import { ScrollTrigger } from '@/lib/gsap'

export type ServiceCase = {
  title: string
  desc: string
  year: string
  cats: string[]
  img?: string
  imgSrcSet?: string
  href?: string
}

type Props = {
  cases: ServiceCase[]
}

export default function ServiceCasesGrid({ cases }: Props) {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const isPointerFine = window.matchMedia('(pointer: fine)').matches

    const ctx = gsap.context(() => {
      const cards = Array.from(grid.querySelectorAll<HTMLElement>('.case-card-wrapper'))
      if (!cards.length) return

      gsap.fromTo(
        cards,
        { opacity: 0, y: isMobile ? 40 : 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: { amount: 0.5, from: 'start' },
          scrollTrigger: { trigger: grid, start: 'top 85%', once: true },
        },
      )
    }, grid)

    const cleanups: (() => void)[] = []

    if (isPointerFine) {
      const cards = Array.from(grid.querySelectorAll<HTMLElement>('.case-card-wrapper'))
      cards.forEach((card) => {
        const img = card.querySelector<HTMLElement>('img.case-card-big___image')

        const onEnter = () => {
          gsap.to(card, { x: 8, duration: 0.4, ease: 'power2.out', overwrite: 'auto' })
          if (img) gsap.to(img, { scale: 1.05, duration: 0.5, ease: 'power2.out' })
        }

        const onLeave = () => {
          gsap.to(card, { x: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)', overwrite: 'auto' })
          if (img) gsap.to(img, { scale: 1, duration: 0.6, ease: 'power2.out' })
        }

        card.addEventListener('mouseenter', onEnter)
        card.addEventListener('mouseleave', onLeave)
        card.setAttribute('data-cursor', 'VIEW')

        cleanups.push(() => {
          card.removeEventListener('mouseenter', onEnter)
          card.removeEventListener('mouseleave', onLeave)
        })
      })
    }

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return (
    <div className="service-cases-section">
      <div className="service-grid" ref={gridRef}>
        {cases.map((c, i) => (
          <div key={`${c.title}-${c.year}-${i}`} className="case-card-wrapper">
            {c.href ? (
              <Link href={c.href} style={{ display: 'block', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                <div className="case-card-big">
                  <div className="case-card-big___left">
                    <div className="case-card-big-top">
                      <div className="cases-item__top-navigation">
                        <div className="cases-item__top-left">
                          {c.cats.map(cat => (
                            <p key={cat} className="text-small is__chip">{cat}</p>
                          ))}
                        </div>
                        <p className="text-regular font-color-medium-grey mob-text-s">{c.year}</p>
                      </div>
                      <div className="cases-item__title-wrapper">
                        <h3 className="h3-bold font-color-black">{c.title}</h3>
                        <h3 className="font-color-dark-gray mb-20">{c.desc}</h3>
                        <div className="case-card-big__btn-wrapper" style={{ pointerEvents: 'none' }}>
                          <span className="small-button small-button--cases w-inline-block">
                            <p className="text-regular small-button-text">Подробнее</p>
                            <div className="small-button-arrow-wrapper">
                              <img alt="" className="small-button-arrow" loading="eager" src="/images/67152c3278a3dccbefe124b3_arrow-grey.svg" />
                              <img alt="" className="button-arrow__active" loading="eager" src="/images/66f6e23524a454603f7d5540_arrow-white.svg" />
                            </div>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {c.img && (
                    <div className="case-card-big___right">
                      <img
                        alt={c.title}
                        className="case-card-big___image hide-mobile"
                        loading="lazy"
                        sizes="(max-width: 1248px) 100vw, 1248px"
                        src={c.img}
                        srcSet={c.imgSrcSet}
                        width={1248}
                        height={823}
                      />
                      <img
                        alt={c.title}
                        className="case-card-big___image hide-desktop"
                        loading="lazy"
                        sizes="100vw"
                        src={c.img}
                        srcSet={c.imgSrcSet}
                        width={1248}
                        height={823}
                      />
                    </div>
                  )}
                </div>
              </Link>
            ) : (
              <div className="case-card-big">
                <div className="case-card-big___left">
                  <div className="case-card-big-top">
                    <div className="cases-item__top-navigation">
                      <div className="cases-item__top-left">
                        {c.cats.map(cat => (
                          <p key={cat} className="text-small is__chip">{cat}</p>
                        ))}
                      </div>
                      <p className="text-regular font-color-medium-grey mob-text-s">{c.year}</p>
                    </div>
                    <div className="cases-item__title-wrapper">
                      <h3 className="h3-bold font-color-black">{c.title}</h3>
                      <h3 className="font-color-dark-gray mb-20">{c.desc}</h3>
                    </div>
                  </div>
                </div>
                {c.img && (
                  <div className="case-card-big___right">
                    <img
                      alt={c.title}
                      className="case-card-big___image hide-mobile"
                      loading="lazy"
                      sizes="(max-width: 1248px) 100vw, 1248px"
                      src={c.img}
                      srcSet={c.imgSrcSet}
                      width={1248}
                      height={823}
                    />
                    <img
                      alt={c.title}
                      className="case-card-big___image hide-desktop"
                      loading="lazy"
                      sizes="100vw"
                      src={c.img}
                      srcSet={c.imgSrcSet}
                      width={1248}
                      height={823}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
