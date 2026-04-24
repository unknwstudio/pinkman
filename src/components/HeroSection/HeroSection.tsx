'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from '@/lib/gsap'

const ALL_CASES = [
  {
    title: 'Ребрендинг Сбер Страхования жизни',
    desc: 'Представили ребрендинг Сбер Страхования жизни на\u00a0квартальном собрании вместе с\u00a0командой клиента',
    year: '2026',
    cats: ['Брендинг', '3D/Motion-design', 'Дизайн коммуникаций'],
    img: '/images/_cases/sber-insurance-life/sber-insurance-life-cover.webp',
    href: '/projects/sber-insurance-life',
  },
  {
    title: 'Зрелищные AI-ролики для\u00a0концерта Роскосмоса ко\u00a0Дню Космонавтики',
    desc: 'Оживили сцену на\u00a0Первом канале и\u00a0дополнили выступление артистов',
    year: '2026',
    cats: ['AI-ролики', 'шоу'],
    img: '/images/_cases/roscosmos-den-kosmonavtiki/roscosmos-den-kosmonavtiki-cover.webp',
    href: '/projects/roscosmos-den-kosmonavtiki',
  },
  {
    title: 'Поленов и ученики',
    desc: 'Интерактивный гид по выставке — цифровое AI-путешествие',
    year: '2026',
    cats: ['Спецпроекты', 'Интерфейсы'],
    img: '/images/_cases/polenov/polenov-cover.webp',
    href: '/projects/polenov-i-ucheniki',
  },
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
    img: '/images/_cases/yagno-kazakh/horizontal.webp',
    href: '/projects/yandex-go-kazakhstan',
  },
  {
    title: 'AI-ролик для Яндекс.Сплит',
    desc: 'Рекламный AI-ролик для различных каналов коммуникации',
    year: '2026',
    cats: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    img: '/images/_cases/yandex-split/image 2090012112.webp',
    href: '/projects/ai-rolik-dlya-yandex-split',
  },
  {
    title: 'AI-ролик для Bootlegger',
    desc: 'Рекламный AI-ролик для трансляции в\u00a0кинотеатре Пионер',
    year: '2026',
    cats: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    img: '/images/_cases/bootlegger/image 2090012112.webp',
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

const hasAiTag = (c: (typeof ALL_CASES)[number]) =>
  c.cats.some((cat) => cat.toLowerCase() === 'ai')

// Featured: the first 2 entries in ALL_CASES always lead the top carousel
// in order, even when they don't carry an AI tag. Edit the list order to
// control the top slots.
const FEATURED_COUNT = 2
const FEATURED = ALL_CASES.slice(0, FEATURED_COUNT)
const REST = ALL_CASES.slice(FEATURED_COUNT)
// Top carousel — featured + up to (5 - FEATURED_COUNT) newest AI cases
const AI_CASES = [...FEATURED, ...REST.filter(hasAiTag).slice(0, 5 - FEATURED_COUNT)]
// Non-AI carousel — remaining non-AI cases, newest-first
const OTHER_CASES = REST.filter((c) => !hasAiTag(c))

/**
 * Build a responsive AVIF srcset for locally-stored _cases cover images.
 * Returns undefined for CDN images that don't have generated AVIF variants.
 */
function avifSrcSet(img: string): string | undefined {
  if (!img.startsWith('/images/_cases/')) return undefined
  // URL-encode spaces: srcset uses whitespace as a delimiter, so literal spaces break parsing
  const base = img.replace(/\.(webp|png|jpe?g|avif)$/i, '').replace(/ /g, '%20')
  return `${base}-p-500.avif 500w, ${base}-p-800.avif 800w, ${base}-p-1080.avif 1080w, ${base}.avif 1248w`
}

/** Shared card JSX — identical for both grids */
function CaseCard({ c, i }: { c: (typeof ALL_CASES)[number]; i: number }) {
  const avif = avifSrcSet(c.img)
  return (
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
          <picture>
            {avif && <source type="image/avif" srcSet={avif} sizes="(max-width: 768px) 100vw, 50vw" />}
            <img
              alt={c.title}
              className="case-card-big___image hide-mobile"
              loading={i === 0 ? 'eager' : 'lazy'}
              sizes="(max-width: 768px) 100vw, 50vw"
              src={c.img}
              width={1248}
              height={823}
            />
          </picture>
          <picture>
            {avif && <source type="image/avif" srcSet={avif} sizes="100vw" />}
            <img
              alt={c.title}
              className="case-card-big___image hide-desktop"
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : undefined}
              sizes="100vw"
              src={c.img}
              width={1248}
              height={823}
            />
          </picture>
        </div>
      </div>
    </Link>
  )
}

/** Attach GSAP hover (x-shift + scale) to all direct <a> children of a grid */
function attachHoverListeners(grid: HTMLDivElement): () => void {
  const cleanups: (() => void)[] = []
  const cards = Array.from(grid.querySelectorAll<HTMLElement>(':scope > a'))
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
  return () => cleanups.forEach((fn) => fn())
}

export default function HeroSection() {
  const textRef = useRef<HTMLParagraphElement>(null)
  const aiGridRef = useRef<HTMLDivElement>(null)
  const otherGridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const text = textRef.current
    if (!text) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const isPointerFine = window.matchMedia('(pointer: fine)').matches

    const ctx = gsap.context(() => {
      gsap.from(text, {
        y: isMobile ? 60 : 120,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      })
    })

    const cleanupAi = isPointerFine && aiGridRef.current
      ? attachHoverListeners(aiGridRef.current)
      : null
    const cleanupOther = isPointerFine && otherGridRef.current
      ? attachHoverListeners(otherGridRef.current)
      : null

    return () => {
      ctx.revert()
      cleanupAi?.()
      cleanupOther?.()
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

      {/* ── AI projects carousel (max 5, newest first) ── */}
      <div className="service-cases-section">
        <div className="service-grid" ref={aiGridRef}>
          {AI_CASES.map((c, i) => (
            <CaseCard key={c.href} c={c} i={i} />
          ))}
        </div>
      </div>

      {/* ── Other projects ── */}
      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-h1-wrapper">
            <h2 className="h1 anim">Другие проекты</h2>
          </div>
        </div>
      </div>

      <div className="service-cases-section">
        <div className="service-grid" ref={otherGridRef}>
          {OTHER_CASES.map((c, i) => (
            <CaseCard key={c.href} c={c} i={i} />
          ))}
        </div>
      </div>
    </>
  )
}
