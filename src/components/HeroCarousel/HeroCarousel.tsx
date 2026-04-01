'use client'

import { useState, useRef, useCallback, useEffect } from 'react'

type Slide = {
  title: string
  tag?: string
  desc: string
  img: string
  imgSrcSet?: string
  href: string
}

const SLIDES: Slide[] = [
  {
    title: 'Свои Плюсы',
    tag: 'AI-Campaign',
    desc: 'Всего за\u00a02 месяца сделали редизайн и\u00a0полностью обновили ключевой канал коммуникации',
    img: '/images/69a43d4c9c4d979bb18d08a3_Frame 174.webp',
    imgSrcSet:
      '/images/69a43d4c9c4d979bb18d08a3_Frame 174-p-500.webp 500w, /images/69a43d4c9c4d979bb18d08a3_Frame 174-p-800.webp 800w, /images/69a43d4c9c4d979bb18d08a3_Frame 174-p-1080.webp 1080w, /images/69a43d4c9c4d979bb18d08a3_Frame 174.webp 1248w',
    href: '/projects/masshtabirovali-svoi-plyusy----programmu-loyalnosti-yandeksa',
  },
  {
    title: 'Синяя птица',
    tag: 'AI-контент на\u00a0Телеканал «Россия»',
    desc: 'Подготовили 19 видеофонов и\u00a0оживили персонажей для номеров шоу',
    img: '/images/69aae24b7c2dab0e74e8a302_Frame-2136139030.webp',
    imgSrcSet:
      '/images/69aae24b7c2dab0e74e8a302_Frame-2136139030-p-500.webp 500w, /images/69aae24b7c2dab0e74e8a302_Frame-2136139030-p-800.webp 800w, /images/69aae24b7c2dab0e74e8a302_Frame-2136139030-p-1080.webp 1080w, /images/69aae24b7c2dab0e74e8a302_Frame-2136139030.webp 1248w',
    href: '/projects/scenicheskiy-vizual-dlya-siney-pticy-fony-k-nomeram-shou',
  },
  {
    title: 'Яндекс Еда',
    desc: '2 года работаем с\u00a0дизайном коммуникаций фудтех-проектов Яндекса в\u00a0нескольких странах',
    img: '/images/683eccfa54b8a997cf797735_Frame 174 (2).webp',
    imgSrcSet:
      '/images/683eccfa54b8a997cf797735_Frame 174 (2)-p-500.webp 500w, /images/683eccfa54b8a997cf797735_Frame 174 (2)-p-800.webp 800w, /images/683eccfa54b8a997cf797735_Frame 174 (2)-p-1080.webp 1080w, /images/683eccfa54b8a997cf797735_Frame 174 (2).webp 1248w',
    href: '/projects/2-goda-dizayn-podderzhki-yandeks-edy',
  },
  {
    title: 'Сбер НПФ',
    desc: 'Обновили сайт негосударственного пенсионного фонда Сбербанка',
    img: '/images/68d55d1e9a752dbe263fe0fe_Frame 174 (4).webp',
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

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goTo(active - 1)
      if (e.key === 'ArrowRight') goTo(active + 1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, goTo])

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
            <a className="hero-carousel__img-wrap" href={slide.href} tabIndex={i !== active ? -1 : 0}>
              <img
                alt={slide.title}
                className="hero-carousel__img"
                loading={i === 0 ? 'eager' : 'lazy'}
                src={slide.img}
                srcSet={slide.imgSrcSet}
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 100vw, 1248px"
              />
            </a>
            <div className="hero-carousel__info">
              <div className="hero-carousel__info-text">
                {slide.tag && (
                  <span className="hero-carousel__tag">{slide.tag}</span>
                )}
                <h3 className="hero-carousel__title">{slide.title}</h3>
                <p className="hero-carousel__desc">{slide.desc}</p>
              </div>
              <a
                className="small-button w-inline-block"
                href={slide.href}
                tabIndex={i !== active ? -1 : 0}
                aria-label={`Подробнее о ${slide.title}`}
              >
                <p className="text-regular hide">Подробнее</p>
                <div className="small-button-arrow-wrapper">
                  <img
                    alt=""
                    className="small-button-arrow"
                    loading="eager"
                    src="/images/67152c3278a3dccbefe124b3_arrow-grey.svg"
                  />
                  <img
                    alt=""
                    className="button-arrow__active"
                    loading="eager"
                    src="/images/66f6e23524a454603f7d5540_arrow-white.svg"
                  />
                </div>
              </a>
            </div>
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
