/**
 * StatGrid — a 4-column (2-col on mobile) grid of metric cards.
 * Each card shows a big bold number/value, a short label, and an optional note.
 *
 * Uses the Zona Pro font for the value (matches the pinkman brand display font).
 *
 * Usage:
 *   <StatGrid items={[
 *     { value: '10+', label: 'лет в дизайне' },
 *     { value: '200+', label: 'проектов' },
 *     { value: '7', label: 'наград Tagline' },
 *     { value: '40%', label: 'средний рост конверсии', note: 'на проектах редизайна' },
 *   ]} />
 */

interface StatItem {
  value: string
  label: string
  note?: string
}

interface StatGridProps {
  items: StatItem[]
}

export default function StatGrid({ items }: StatGridProps) {
  return (
    <div className="stat-grid">
      {items.map((item, i) => (
        <div key={i} className="stat-grid__item anim" {...(i > 0 ? { 'data-d': String(Math.min(i, 4)) } : {})}>
          <p className="stat-grid__value">{item.value}</p>
          <p className="stat-grid__label">{item.label}</p>
          {item.note && <p className="stat-grid__note">{item.note}</p>}
        </div>
      ))}
    </div>
  )
}
