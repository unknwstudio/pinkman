'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { type ComponentProps, useCallback } from 'react'

type Props = ComponentProps<typeof Link>

/**
 * Drop-in replacement for next/link that wraps navigation in
 * document.startViewTransition() when the browser supports it.
 * Falls back to plain <Link> on unsupported browsers (Safari < 18, Firefox).
 */
export default function TransitionLink({ href, onClick, children, ...rest }: Props) {
  const router = useRouter()

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      // Let modifier-key clicks (open-in-tab etc.) work normally
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      if (typeof document === 'undefined') return
      if (!('startViewTransition' in document)) return

      e.preventDefault()
      onClick?.(e)

      ;(document as Document & { startViewTransition: (cb: () => void) => void })
        .startViewTransition(() => {
          router.push(href as string)
        })
    },
    [href, onClick, router],
  )

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}
