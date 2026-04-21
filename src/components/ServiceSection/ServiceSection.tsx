type ServiceSectionProps = {
  title: string
  description: string
  imgSrc: string
  imgSrcSet?: string
  imgSrcMobile?: string
  imgSrcSetMobile?: string
  imgAlt?: string
  imgWidth?: number
  imgHeight?: number
  imgMobileWidth?: number
  imgMobileHeight?: number
}

export default function ServiceSection({
  title,
  description,
  imgSrc,
  imgSrcSet,
  imgSrcMobile,
  imgSrcSetMobile,
  imgAlt = '',
  imgWidth,
  imgHeight,
  imgMobileWidth,
  imgMobileHeight,
}: ServiceSectionProps) {
  return (
    <div className="service-section anim">
      <div className="service">
        <div className="service__text">
          <h2 className="font-color-black" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="font-color-dark-gray" dangerouslySetInnerHTML={{ __html: description }} />
        </div>
        <div className="service__picture">
          <picture>
            <source type="image/avif" srcSet={imgSrc.replace(/\.(webp|png|jpe?g)$/i, '.avif')} sizes="100vw" />
            <img
              alt={imgAlt}
              className="service__img hide-mobile"
              loading="eager"
              sizes="100vw"
              src={imgSrc}
              srcSet={imgSrcSet}
              width={imgWidth}
              height={imgHeight}
            />
          </picture>
          <picture>
            <source type="image/avif" srcSet={(imgSrcMobile ?? imgSrc).replace(/\.(webp|png|jpe?g)$/i, '.avif')} sizes="100vw" />
            <img
              alt={imgAlt}
              className="service__img hide-desktop"
              loading="eager"
              sizes="100vw"
              src={imgSrcMobile ?? imgSrc}
              srcSet={imgSrcSetMobile ?? imgSrcSet}
              width={imgMobileWidth ?? imgWidth}
              height={imgMobileHeight ?? imgHeight}
            />
          </picture>
        </div>
      </div>
    </div>
  )
}
