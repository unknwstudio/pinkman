/**
 * StatGrid — a 4-column (2-col on tablet, 2-col on mobile) grid of metric cards.
 * Each card shows a big Zona Pro bold number/value, a short label, and an optional note.
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
        <div key={i} className="stat-grid__item">
          <p className="stat-grid__value">{item.value}</p>
          <p
            className="stat-grid__label"
            dangerouslySetInnerHTML={{ __html: item.label }}
          />
          {item.note && (
            <p
              className="stat-grid__note"
              dangerouslySetInnerHTML={{ __html: item.note }}
            />
          )}
        </div>
      ))}
    </div>
  )
}
