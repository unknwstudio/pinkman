'use client'

import { useEffect, useState, useCallback } from 'react'
import { createPortal } from 'react-dom'

/**
 * Floating sticky CTA bar for the /talent-hub/ page.
 * Replaces the default pk-bar with two action buttons.
 * Hides when inline CTA buttons (.th-intro-buttons) are visible in viewport.
 * Also hides the Webflow deepdive CTA circle and mobile header on this page.
 */
export default function TalentHubBar() {
  const [mounted, setMounted] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Hide the default pk-bar, deepdive CTA circle, and mobile header
  useEffect(() => {
    if (!mounted) return
    const pkBar = document.querySelector('.pk-bar-outer') as HTMLElement | null
    const deepdive = document.querySelector('.deepdive-cta-button') as HTMLElement | null
    const header = document.querySelector('.header-new') as HTMLElement | null
    const menuSpace = document.querySelector('.menu-space') as HTMLElement | null

    if (pkBar) pkBar.style.display = 'none'
    if (deepdive) deepdive.style.display = 'none'
    if (header) header.style.display = 'none'
    if (menuSpace) menuSpace.style.display = 'none'

    return () => {
      if (pkBar) pkBar.style.display = ''
      if (deepdive) deepdive.style.display = ''
      if (header) header.style.display = ''
      if (menuSpace) menuSpace.style.display = ''
    }
  }, [mounted])

  // IntersectionObserver: hide sticky bar when ANY .th-intro-buttons is in viewport
  const observeButtons = useCallback(() => {
    const targets = document.querySelectorAll('.th-intro-buttons')
    if (!targets.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((e) => e.isIntersecting)
        if (anyVisible) {
          setVisible(false)
        } else {
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
