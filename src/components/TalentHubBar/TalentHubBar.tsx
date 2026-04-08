'use client'

import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

/**
 * Floating sticky CTA bar for the /talent-hub/ page.
 * Replaces the default pk-bar with two action buttons.
 */
export default function TalentHubBar() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  // Hide the default pk-bar while this page is mounted
  useEffect(() => {
    const el = document.querySelector('.pk-bar-outer') as HTMLElement | null
    if (el) el.style.display = 'none'
    return () => { if (el) el.style.display = '' }
  }, [mounted])

  if (!mounted) return null

  return createPortal(
    <div className="th-bar-outer">
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
            Все отклики с&nbsp;тестовыми имеют высокий приоритет и&nbsp;разбираются
            в&nbsp;первую очередь
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
