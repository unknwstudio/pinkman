type CaseCardProps = {
  /** Category chips shown top-left */
  chips: string[]
  /** Year / date shown top-right */
  year: string
  /** Bold title (h3-bold) */
  title: string
  /** Subtitle / description in dark-gray */
  subtitle?: string
  /** Short body text below subtitle */
  description?: string
  /** Result label + value */
  result?: { label: string; value: string }
  /** Internal or external href for "Подробнее" button — omit to hide button */
  href?: string
  /** Desktop image src */
  imgSrc?: string
  /** Desktop image srcSet */
  imgSrcSet?: string
  /** Mobile image src (falls back to imgSrc if not provided) */
  imgSrcMobile?: string
  /** Mobile image srcSet */
  imgSrcSetMobile?: string
  /** Alt text for image */
  imgAlt?: string
}

export default function CaseCard({
  chips,
  year,
  title,
  subtitle,
  description,
  result,
  href,
  imgSrc,
  imgSrcSet,
  imgSrcMobile,
  imgSrcSetMobile,
  imgAlt = '',
}: CaseCardProps) {
  const hasImage = Boolean(imgSrc)

  return (
    <div className="case-card-wrapper anim">
      <div className="case-card-big">
        <div className="case-card-big___left">
          <div className="case-card-big-top">
            <div className="cases-item__top-navigation">
              <div className="cases-item__top-left">
                {chips.map((chip) => (
                  <p key={chip} className="text-small is__chip">{chip}</p>
                ))}
              </div>
              <p className="text-regular font-color-medium-grey mob-text-s">{year}</p>
            </div>

            <div className="cases-item__title-wrapper">
              <h3 className="h3-bold font-color-black" dangerouslySetInnerHTML={{ __html: title }} />
              {subtitle && (
                <h3 className="font-color-dark-gray" dangerouslySetInnerHTML={{ __html: subtitle }} />
              )}
            </div>

            {(description || result) && (
              <div className="cases-item__results-wrapper">
                {description && (
                  <p className="text-small font-color-dark-gray" dangerouslySetInnerHTML={{ __html: description }} />
                )}
                {result && (
                  <div className="cases-item__results">
                    <p className="text-small font-color-black">{result.label}</p>
                    <p className="text-small font-color-dark-gray" dangerouslySetInnerHTML={{ __html: result.value }} />
                  </div>
                )}
              </div>
            )}

            {href && (
              <div className="case-card-big__btn-wrapper">
                <a className="small-button small-button--cases w-inline-block" href={href}>
                  <p className="text-regular small-button-text">Подробнее</p>
                  <div className="small-button-arrow-wrapper">
                    <img alt="" className="small-button-arrow" loading="eager" src="/images/67152c3278a3dccbefe124b3_arrow-grey.svg" />
                    <img alt="" className="button-arrow__active" loading="eager" src="/images/66f6e23524a454603f7d5540_arrow-white.svg" />
                  </div>
                </a>
              </div>
            )}
          </div>
        </div>

        {hasImage && (
          <div className="case-card-big___right">
            <img
              alt={imgAlt}
              className="case-card-big___image hide-mobile"
              loading="eager"
              sizes="(max-width: 1248px) 100vw, 1248px"
              src={imgSrc}
              srcSet={imgSrcSet}
              width={1248}
              height={823}
            />
            <img
              alt={imgAlt}
              className="case-card-big___image hide-desktop"
              loading="eager"
              sizes="100vw"
              src={imgSrcMobile ?? imgSrc}
              srcSet={imgSrcSetMobile ?? imgSrcSet}
              width={1248}
              height={823}
            />
          </div>
        )}
      </div>
    </div>
  )
}
