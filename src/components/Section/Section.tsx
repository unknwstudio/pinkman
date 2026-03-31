interface SectionProps {
  children: React.ReactNode
  style?: React.CSSProperties
}

/** Thin wrapper — matches .portfolio-section > .main-container */
export default function Section({ children, style }: SectionProps) {
  return (
    <div className="portfolio-section">
      <div className="main-container" style={style}>
        {children}
      </div>
    </div>
  )
}
