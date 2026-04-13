interface ServicePointProps {
  title: string
  description?: string
  tags?: string[]
  /** Tags above the title (used for numbered/icon chips) */
  tagsTop?: string[]
  variant?: 'white' | 'default'
  children?: React.ReactNode
  /** Content rendered in the left column, below title and tags */
  afterTitle?: React.ReactNode
  /** Staggered animation delay 1–4 (maps to data-d attribute) */
  animDelay?: 1 | 2 | 3 | 4
}

export default function ServicePoint({
  title,
  description,
  tags,
  tagsTop,
  variant = 'white',
  children,
  afterTitle,
  animDelay,
}: ServicePointProps) {
  return (
    <div
      className={`service-point${variant === 'white' ? ' white' : ''} anim`}
      {...(animDelay ? { 'data-d': String(animDelay) } : {})}
    >
      <div className="service-point__left">
        {tagsTop && tagsTop.length > 0 && (
          <div className="service-point__tags service-point__tags--top">
            {tagsTop.map((t) => (
              <p key={t} className="text-small is__chip">{t}</p>
            ))}
          </div>
        )}
        <h2 className="font-color-black" dangerouslySetInnerHTML={{ __html: title }} />
        {tags && tags.length > 0 && (
          <div className="service-point__tags">
            {tags.map((t) => (
              <p key={t} className="text-small is__chip">{t}</p>
            ))}
          </div>
        )}
        {afterTitle}
      </div>
      {(description || children) && (
        <div className="service-point__right">
          {description && (
            <p className="font-color-dark-gray" dangerouslySetInnerHTML={{ __html: description }} />
          )}
          {children}
        </div>
      )}
    </div>
  )
}
