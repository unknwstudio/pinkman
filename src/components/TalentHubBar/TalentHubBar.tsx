'use client'

import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'

/**
 * Floating sticky CTA bar for the /talent-hub/ page.
 * Replaces the default pk-bar with two action buttons.
 * Hides when inline CTA buttons (.th-intro-buttons) are visible in viewport.
 */
export default function TalentHubBar() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Hide the default pk-bar while this page is mounted
  useEffect(() => {
    const el = document.querySelector('.pk-bar-outer') as HTMLElement | null
    if (el) el.style.display = 'none'
    return () => { if (el) el.style.display = '' }
  }, [mounted])

  // IntersectionObserver: hide sticky bar when ANY .th-intro-buttons is in viewport
  const observeButtons = useCallback(() => {
    const targets = document.querySelectorAll('.th-intro-buttons')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting)
        // If any inline CTA block is visible → hide the sticky bar
        // We need to check ALL observed elements, not just changed ones
        if (anyVisible) {
          setVisible(false)
        } else {
          // Double-check: none of the targets are intersecting
          setVisible(true)
        }
      },
      { threshold: 0 },
    )

    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!mounted) return
    // Small delay to ensure DOM is ready
    const timer = setTimeout(observeButtons, 100)
    return () => clearTimeout(timer)
  }, [mounted, observeButtons])

  if (!mounted) return null

  return createPortal(
    <div className={`th-bar-outer${visible ? '' : ' th-bar--hidden'}`}>
      <div className="th-bar">
        <div className="th-bar__group">
          <a
            className="th-bar__primary"
            href="https://airtable.com/appNFasdKaA7VMRcv/pagIoxATuyvLeg6FS/form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Пройти тестовые задания
          </a>
          <span className="th-bar__note">
            Все отклики с&nbsp;тестовыми имеют высокий приоритет для&nbsp;нас
            и&nbsp;разбираются в&nbsp;первую очередь
          </span>
        </div>
        <a
          className="th-bar__secondary"
          href="https://airtable.com/appNFasdKaA7VMRcv/pagNXJJsEKtJhwys5/form"
          target="_blank"
          rel="noopener noreferrer"
        >
          Просто оставить отклик
        </a>
      </div>
    </div>,
    document.body,
  )
}
