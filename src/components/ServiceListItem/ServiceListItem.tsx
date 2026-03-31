type ServiceListItemProps = {
  /** Service name displayed as h3 */
  label: string
  /** Link destination */
  href: string
  /** Staggered animation delay 1–4 */
  animDelay?: 1 | 2 | 3 | 4
}

/**
 * One row in a "Лучше всего мы делаем" / services list.
 * The whole row is a clickable link; the small-button is a visual indicator.
 * Hover on the row highlights the button via CSS (.list-item-wrapper:hover .small-button).
 */
export default function ServiceListItem({ label, href, animDelay }: ServiceListItemProps) {
  return (
    <div
      className="list-item-wrapper anim"
      {...(animDelay ? { 'data-d': String(animDelay) } : {})}
    >
      <div className="bullet-wrapper-left">
        <h3>{label}</h3>
      </div>
      <div className="small-button">
        <div className="small-button-arrow-wrapper">
          <img alt="" className="small-button-arrow" loading="eager" src="/images/67152c3278a3dccbefe124b3_arrow-grey.svg" />
          <img alt="" className="button-arrow__active" loading="eager" src="/images/66f6e23524a454603f7d5540_arrow-white.svg" />
        </div>
      </div>
      {/* Full-row transparent link overlay */}
      <a className="list-item-link w-inline-block" href={href} aria-label={label} />
    </div>
  )
}
