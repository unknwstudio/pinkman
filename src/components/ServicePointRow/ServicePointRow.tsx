/**
 * ServicePointRow — lays out ServicePoint cards 3-across on desktop,
 * stacked vertically on mobile (≤991px).
 *
 * Usage:
 *   <ServicePointRow>
 *     <ServicePoint tagsTop={['01']} title="…" description="…" />
 *     <ServicePoint tagsTop={['02']} title="…" description="…" />
 *     <ServicePoint tagsTop={['03']} title="…" description="…" />
 *   </ServicePointRow>
 */

interface ServicePointRowProps {
  children: React.ReactNode
  /** Adds .service-points-section spacing wrapper (default true) */
  spaced?: boolean
  /** Keeps side padding but reduces bottom margin to match card gap (default false) */
  compact?: boolean
  /** Stretch single child to span the full grid width (default false) */
  full?: boolean
  /** Span exactly 2 of 3 columns — aligns with 2-card rows (default false) */
  twoCol?: boolean
}

export default function ServicePointRow({
  children,
  spaced = true,
  compact = false,
  full = false,
  twoCol = false,
}: ServicePointRowProps) {
  const cls = compact
    ? 'service-points-section is--compact'
    : spaced
      ? 'service-points-section'
      : ''

  let rowCls = 'service-point-row'
  if (full) rowCls += ' service-point-row--full'
  if (twoCol) rowCls += ' service-point-row--two-col'

  return (
    <div className={cls}>
      <div className={rowCls}>
        {children}
      </div>
    </div>
  )
}
