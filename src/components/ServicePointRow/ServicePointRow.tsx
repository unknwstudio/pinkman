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
}

export default function ServicePointRow({
  children,
  spaced = true,
  compact = false,
}: ServicePointRowProps) {
  const cls = compact
    ? 'service-points-section is--compact'
    : spaced
      ? 'service-points-section'
      : ''

  return (
    <div className={cls}>
      <div className="service-point-row">
        {children}
      </div>
    </div>
  )
}
