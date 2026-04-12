'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from '@/lib/gsap'

const TOP_CASES = [
  {
    title: 'Норма',
    desc: 'Разработали брендинг, мобильное приложение и сайт для сети химчисток',
    year: '2026',
    cats: ['Брендинг', 'Веб-дизайн', 'Интерфейсы'],
    img: '/images/_cases/norma/norma-cover.webp',
    href: '/projects/norma',
  },
  {
    title: 'СИБУР',
    desc: 'Зонтичный карьерный бренд для нефтехимической компании',
    year: '2026',
    cats: ['Брендинг'],
    img: '/images/_cases/sibur/sibur-cover.webp',
    href: '/projects/sibur-kariernyy-brend',
  },
  {
    title: 'Яндекс Го Казахстан',
    desc: 'Подготовили AI-ролики для федеральной рекламной кампании с\u00a0множеством ресайзов',
    year: '2026',
    cats: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    img: '/images/_cases/yagno-kazakh/horizontal.png',
    href: '/projects/yandex-go-kazakhstan',
  },
  {
    title: 'AI-ролик для Яндекс.Сплит',
    desc: 'Рекламный AI-ролик для различных каналов коммуникации',
    year: '2026',
    cats: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    img: '/images/_cases/yandex-split/image 2090012112.png',
    href: '/projects/ai-rolik-dlya-yandex-split',
  },
  {
    title: 'AI-ролик для Bootlegger',
    desc: 'Рекламный AI-ролик для трансляции в\u00a0кинотеатре Пионер',
    year: '2026',
    cats: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    img: '/images/_cases/bootlegger/image 2090012112.png',
    href: '/projects/ai-rolik-dlya-bootlegger',
  },
  {
    title: 'Синяя птица',
    desc: 'Подготовили 19 видеофонов и\u00a0оживили персонажей для номеров шоу',
    year: '2025',
    cats: ['Бренд и\u00a0контент', 'Спецпроекты'],
    img: '/images/69aae24b7c2dab0e74e8a302_Frame-2136139030.webp',
    href: '/projects/scenicheskiy-vizual-dlya-siney-pticy-fony-k-nomeram-shou',
  },
  {
    title: 'Свои Плюсы',
    desc: 'Всего за\u00a02 месяца сделали редизайн и\u00a0полностью обновили ключевой канал коммуникации',
    year: '2025',
    cats: ['Бренд и\u00a0контент', '3D/Motion-design'],
    img: '/images/69a43d4c9c4d979bb18d08a3_Frame 174.webp',
    href: '/projects/masshtabirovali-svoi-plyusy----programmu-loyalnosti-yandeksa',
  },
  {
    title: 'Сбер НПФ',
    desc: 'Обновили сайт негосударственного пенсионного фонда Сбербанка',
    year: '2025',
    cats: ['Веб-дизайн', 'Исследования', 'Сайты корпораций'],
    img: '/images/68d55d1e9a752dbe263fe0fe_Frame 174 (4).webp',
    href: '/projects/sdelali-novyy-sayt-dlya-sber-npf',
  },
]

export default function HeroSection() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = textRef.current
    if (!text) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const isPointerFine = window.matchMedia('(pointer: fine)').matches

    const ctx = gsap.context(() => {
      // One-shot entrance — no scroll trigger, no scrub
      gsap.from(text, {
        y: isMobile ? 60 : 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      })
    })

    // Horizontal hover — same as portfolio cards, pointer:fine only
    const cleanups: (() => void)[] = []

    if (isPointerFine && gridRef.current) {
      const cards = Array.from(gridRef.current.querySelectorAll<HTMLElement>(':scope > a'))

      cards.forEach((card) => {
        const img = card.querySelector<HTMLElement>('img.case-card-big___image')

        const onEnter = () => {
          gsap.to(card, { x: 8, duration: 0.4, ease: 'power2.out', overwrite: 'auto' })
          if (img) gsap.to(img, { scale: 1.05, duration: 0.5, ease: 'power2.out' })
        }

        const onLeave = () => {
          gsap.to(card, { x: 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' })
          if (img) gsap.to(img, { scale: 1, duration: 0.4, ease: 'power2.out' })
        }

        card.addEventListener('mouseenter', onEnter)
        card.addEventListener('mouseleave', onLeave)
        cleanups.push(() => {
          card.removeEventListener('mouseenter', onEnter)
          card.removeEventListener('mouseleave', onLeave)
        })
      })
    }

    return () => {
      ctx.revert()
      cleanups.forEach((fn) => fn())
    }
  }, [])

  return (
    <>
      {/* ── Hero text ── */}
      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-big-wrapper">
            <p className="text-big text-hero" ref={textRef}>
              пинкман — AI‑партнёр в&nbsp;дизайне
            </p>
          </div>
        </div>
      </div>

      {/* ── Top 3 cases (replaces carousel) ── */}
      <div className="service-cases-section">
        <div className="service-grid" ref={gridRef}>
          {TOP_CASES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              style={{ display: 'block', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}
              data-cursor="VIEW"
            >
              <div className="case-card-big">
                <div className="case-card-big___left">
                  <div className="case-card-big-top">
                    <div className="cases-item__top-navigation">
                      <div className="cases-item__top-left">
                        {c.cats.map((cat) => (
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
                <div className="case-card-big___right">
                  <img
                    alt={c.title}
                    className="case-card-big___image hide-mobile"
                    loading="eager"
                    sizes="(max-width: 1248px) 100vw, 1248px"
                    src={c.img}
                    width={1248}
                    height={823}
                  />
                  <img
                    alt={c.title}
                    className="case-card-big___image hide-desktop"
                    loading="eager"
                    sizes="100vw"
                    src={c.img}
                    width={1248}
                    height={823}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
