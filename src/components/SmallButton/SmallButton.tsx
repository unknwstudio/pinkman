type SmallButtonProps = {
  href: string
  /** Optional label text (hidden on icon-only variant when absent) */
  text?: string
  /** Adds .small-button--cases modifier */
  cases?: boolean
  target?: '_blank' | '_self'
}

export default function SmallButton({ href, text, cases, target }: SmallButtonProps) {
  return (
    <a
      className={`small-button${cases ? ' small-button--cases' : ''} w-inline-block`}
      href={href}
      {...(target ? { target, rel: target === '_blank' ? 'noopener noreferrer' : undefined } : {})}
    >
      {text && <p className="text-regular small-button-text">{text}</p>}
      <div className="small-button-arrow-wrapper">
        <img alt="" className="small-button-arrow" loading="eager" src="/images/67152c3278a3dccbefe124b3_arrow-grey.svg" />
        <img alt="" className="button-arrow__active" loading="eager" src="/images/66f6e23524a454603f7d5540_arrow-white.svg" />
      </div>
    </a>
  )
}
