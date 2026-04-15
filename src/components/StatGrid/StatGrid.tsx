/**
 * StatGrid — key metric cards with service-points-section padding wrapper.
 * Uses repeat(auto-fit, minmax(200px, 1fr)) — adapts to any item count.
 */

interface StatItem {
  value: string
  label: string
  note?: string
}

interface StatGridProps {
  items: StatItem[]
  /** Slightly smaller value font size */
  smallValues?: boolean
}

export default function StatGrid({ items, smallValues }: StatGridProps) {
  return (
    <div className="service-points-section">
      <div className="stat-grid" style={smallValues ? { fontSize: '0.88em' } : undefined}>
        {items.map((item, i) => (
          <div key={i} className="stat-grid__item">
            <p className="stat-grid__value">{item.value}</p>
            <p className="stat-grid__label" dangerouslySetInnerHTML={{ __html: item.label }} />
            {item.note && <p className="stat-grid__note" dangerouslySetInnerHTML={{ __html: item.note }} />}
          </div>
        ))}
      </div>
    </div>
  )
}
