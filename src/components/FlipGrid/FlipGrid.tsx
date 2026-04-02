'use client'

import { useRef, useState, useLayoutEffect } from 'react'
import gsap, { Flip } from '@/lib/gsap'
import styles from './FlipGrid.module.css'

type Item = { id: number; label: string; category: 'A' | 'B' | 'C' }

const ITEMS: Item[] = [
  { id: 1,  label: 'Проект 01', category: 'A' },
  { id: 2,  label: 'Проект 02', category: 'B' },
  { id: 3,  label: 'Проект 03', category: 'A' },
  { id: 4,  label: 'Проект 04', category: 'C' },
  { id: 5,  label: 'Проект 05', category: 'B' },
  { id: 6,  label: 'Проект 06', category: 'C' },
  { id: 7,  label: 'Проект 07', category: 'A' },
  { id: 8,  label: 'Проект 08', category: 'B' },
  { id: 9,  label: 'Проект 09', category: 'C' },
]

const FILTERS = ['Все', 'A', 'B', 'C'] as const
type Filter = (typeof FILTERS)[number]

export default function FlipGrid() {
  const [filter, setFilter] = useState<Filter>('Все')
  const gridRef = useRef<HTMLDivElement>(null)

  const visible = filter === 'Все'
    ? ITEMS
    : ITEMS.filter((it) => it.category === filter)

  // Run Flip animation whenever filter changes
  useLayoutEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    // Capture the current state BEFORE React updates the DOM
    const state = Flip.getState(grid.querySelectorAll('[data-flip-id]'))

    // React has already committed the new DOM at this point (useLayoutEffect)
    // Animate from the captured state to the new positions
    Flip.from(state, {
      duration: 0.6,
      ease: 'power1.inOut',
      absolute: true,
      onLeave: (els) =>
        gsap.to(els, { opacity: 0, scale: 0.85, duration: 0.25 }),
      onEnter: (els) =>
        gsap.fromTo(els, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1, duration: 0.35 }),
    })
  }, [filter])

  return (
    <div className={styles.root}>
      {/* Filter buttons */}
      <div className={styles.filters}>
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`${styles.btn}${filter === f ? ` ${styles.btnActive}` : ''}`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid — all items always rendered, Flip handles show/hide */}
      <div className={styles.grid} ref={gridRef}>
        {visible.map((item) => (
          <div
            key={item.id}
            data-flip-id={`item-${item.id}`}
            className={styles.card}
          >
            <span className={styles.cardLabel}>{item.label}</span>
            <span className={styles.cardCategory}>{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
