interface ServiceGridProps {
  children: React.ReactNode
  /** Extra bottom margin section */
  spaced?: boolean
}

export default function ServiceGrid({ children, spaced = true }: ServiceGridProps) {
  return (
    <div className={spaced ? 'service-points-section' : ''}>
      <div className="service-grid">
        {children}
      </div>
    </div>
  )
}
