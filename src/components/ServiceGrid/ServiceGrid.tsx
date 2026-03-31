interface ServiceGridProps {
  children: React.ReactNode
  /** When false: removes the 5rem bottom margin but KEEPS the side padding */
  spaced?: boolean
}

export default function ServiceGrid({ children, spaced = true }: ServiceGridProps) {
  return (
    // Always wrap in service-points-section so side padding (var(--64px)) is always present.
    // spaced=false only kills the 5rem bottom margin via inline style.
    <div
      className="service-points-section"
      style={!spaced ? { marginBottom: 0 } : undefined}
    >
      <div className="service-grid">
        {children}
      </div>
    </div>
  )
}
