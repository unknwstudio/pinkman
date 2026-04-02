'use client'

import { useState, useRef, useCallback, useEffect } from 'react'
import CaseCard from '@/components/CaseCard/CaseCard'

type Slide = {
  chips: string[]
  year: string
  title: string
  subtitle?: string
  description?: string
  href: string
  imgSrc?: string
  imgSrcSet?: string
}

const SLIDES: Slide[] = [
  // ── 2026 AI+CGI — first ───────────────────────────────────
  {
    chips: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    year: '2026',
    title: 'Яндекс Го Казахстан',
    subtitle: 'AI+CGI Campaign',
    description: 'Подготовили AI-ролики для федеральной рекламной кампании с\u00a0множеством ресайзов',
    imgSrc: '/images/_cases/yagno-kazakh/horizontal.png',
    href: '/projects/yandex-go-kazakhstan',
  },
  {
    chips: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    year: '2026',
    title: 'AI-ролик для Яндекс.Сплит',
    subtitle: 'AI+CGI Campaign',
    description: 'Рекламный AI-ролик для различных каналов коммуникации',
    imgSrc: '/images/_cases/yandex-split/image 2090012112.png',
    href: '/projects/ai-rolik-dlya-yandex-split',
  },
  {
    chips: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    year: '2026',
    title: 'AI-ролик для Bootlegger',
    subtitle: 'AI+CGI Campaign',
    description: 'Рекламный AI-ролик для трансляции в\u00a0кинотеатре Пионер',
    imgSrc: '/images/_cases/bootlegger/image 2090012112.png',
    href: '/projects/ai-rolik-dlya-bootlegger',
  },
  // ── 2025 ─────────────────────────────────────────────────
  {
    chips: ['Бренд и\u00a0контент', '3D/Motion-design'],
    year: '2025',
    title: 'Свои Плюсы',
    subtitle: 'AI-Campaign',
    description: 'Всего за\u00a02 месяца сделали редизайн и\u00a0полностью обновили ключевой канал коммуникации',
    imgSrc: '/images/69a43d4c9c4d979bb18d08a3_Frame 174.webp',
    imgSrcSet:
      '/images/69a43d4c9c4d979bb18d08a3_Frame 174-p-500.webp 500w, /images/69a43d4c9c4d979bb18d08a3_Frame 174-p-800.webp 800w, /images/69a43d4c9c4d979bb18d08a3_Frame 174-p-1080.webp 1080w, /images/69a43d4c9c4d979bb18d08a3_Frame 174.webp 1248w',
    href: '/projects/masshtabirovali-svoi-plyusy----programmu-loyalnosti-yandeksa',
  },
  {
    chips: ['Бренд и\u00a0контент', 'Спецпроекты'],
    year: '2025',
    title: 'Синяя птица',
    subtitle: 'AI-контент на\u00a0Телеканал «Россия»',
    description: 'Подготовили 19 видеофонов и\u00a0оживили персонажей для номеров шоу',
    imgSrc: '/images/69aae24b7c2dab0e74e8a302_Frame-2136139030.webp',
    imgSrcSet:
      '/images/69aae24b7c2dab0e74e8a302_Frame-2136139030-p-500.webp 500w, /images/69aae24b7c2dab0e74e8a302_Frame-2136139030-p-800.webp 800w, /images/69aae24b7c2dab0e74e8a302_Frame-2136139030-p-1080.webp 1080w, /images/69aae24b7c2dab0e74e8a302_Frame-2136139030.webp 1248w',
    href: '/projects/scenicheskiy-vizual-dlya-siney-pticy-fony-k-nomeram-shou',
  },
  {
    chips: ['Дизайн коммуникаций', '3D/Motion-design'],
    year: '2025',
    title: 'Яндекс Еда',
    description: '2 года работаем с\u00a0дизайном коммуникаций фудтех-проектов Яндекса в\u00a0нескольких странах',
    imgSrc: '/images/683eccfa54b8a997cf797735_Frame 174 (2).webp',
    imgSrcSet:
      '/images/683eccfa54b8a997cf797735_Frame 174 (2)-p-500.webp 500w, /images/683eccfa54b8a997cf797735_Frame 174 (2)-p-800.webp 800w, /images/683eccfa54b8a997cf797735_Frame 174 (2)-p-1080.webp 1080w, /images/683eccfa54b8a997cf797735_Frame 174 (2).webp 1248w',
    href: '/projects/2-goda-dizayn-podderzhki-yandeks-edy',
  },
  {
    chips: ['Веб-дизайн', 'Исследования', 'Сайты корпораций'],
    year: '2025',
    title: 'Сбер НПФ',
    description: 'Обновили сайт негосударственного пенсионного фонда Сбербанка',
    imgSrc: '/images/68d55d1e9a752dbe263fe0fe_Frame 174 (4).webp',
    imgSrcSet:
      '/images/68d55d1e9a752dbe263fe0fe_Frame 174 (4)-p-500.webp 500w, /images/68d55d1e9a752dbe263fe0fe_Frame 174 (4)-p-800.webp 800w, /images/68d55d1e9a752dbe263fe0fe_Frame 174 (4)-p-1080.webp 1080w, /images/68d55d1e9a752dbe263fe0fe_Frame 174 (4).webp 1248w',
    href: '/projects/sdelali-novyy-sayt-dlya-sber-npf',
  },
]

export default function HeroCarousel() {
  const [active, setActive] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const ticking = useRef(false)

  const goTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(SLIDES.length - 1, idx))
    setActive(clamped)
    const track = trackRef.current
    if (!track) return
    const slide = track.children[clamped] as HTMLElement
    if (slide) track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' })
  }, [])

  const onScroll = useCallback(() => {
    if (ticking.current) return
    ticking.current = true
    requestAnimationFrame(() => {
      const track = trackRef.current
      if (track) {
        const slideWidth = (track.children[0] as HTMLElement)?.offsetWidth ?? 1
        const idx = Math.round(track.scrollLeft / slideWidth)
        setActive(Math.max(0, Math.min(SLIDES.length - 1, idx)))
      }
      ticking.current = false
    })
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goTo(active - 1)
      if (e.key === 'ArrowRight') goTo(active + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, goTo])

  // Prevent the carousel from capturing vertical wheel/trackpad scroll —
  // pass vertical intent straight through to the page.
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onWheel = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY)
      if (isHorizontal) {
        // Horizontal intent → let the track scroll itself, block page
        e.preventDefault()
        track.scrollLeft += e.deltaX
      }
      // Vertical intent → do nothing; browser scrolls the page naturally
    }
    track.addEventListener('wheel', onWheel, { passive: false })
    return () => track.removeEventListener('wheel', onWheel)
  }, [])

  return (
    <div className="hero-carousel">
      {/* Track */}
      <div
        className="hero-carousel__track"
        ref={trackRef}
        onScroll={onScroll}
        aria-label="Карусель проектов"
      >
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className="hero-carousel__slide"
            aria-hidden={i !== active}
          >
            <CaseCard
              chips={slide.chips}
              year={slide.year}
              title={slide.title}
              subtitle={slide.subtitle}
              description={slide.description}
              href={slide.href}
              imgSrc={slide.imgSrc}
              imgSrcSet={slide.imgSrcSet}
              imgAlt={slide.title}
            />
          </div>
        ))}
      </div>

      {/* Controls: prev — dots — next */}
      <div className="hero-carousel__controls">
        <button
          className="hero-carousel__arrow"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Предыдущий слайд"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <div className="hero-carousel__dots" role="tablist" aria-label="Навигация по слайдам">
          {SLIDES.map((slide, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === active}
              aria-label={`Слайд ${i + 1}: ${slide.title}`}
              className={`hero-carousel__dot${i === active ? ' hero-carousel__dot--active' : ''}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        <button
          className="hero-carousel__arrow"
          onClick={() => goTo(active + 1)}
          disabled={active === SLIDES.length - 1}
          aria-label="Следующий слайд"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
