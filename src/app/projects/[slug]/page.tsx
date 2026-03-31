import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import casesData from '@/lib/cases.json'
import { ruNbsp, ruNbspHtml } from '@/lib/ru-nbsp'

type MediaBlock = {
  heading: string | null
  subheading?: string
  images: string[]
}

type CaseData = {
  cover_image?: string
  website_url?: string
  hero: string
  subtitle: string
  intro?: string[]
  what_we_did?: string[]
  results: string[]
  awards: string[]
  media_blocks: MediaBlock[]
}

const cases = casesData as Record<string, CaseData>

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return Object.keys(cases).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const data = cases[slug]
  if (!data) return {}
  const title = data.hero.replace(/&nbsp;/g, '\u00a0').replace(/<[^>]+>/g, '')
  const description = data.subtitle.replace(/&nbsp;/g, '\u00a0').replace(/<[^>]+>/g, '').slice(0, 160)
  return {
    title,
    description,
    alternates: { canonical: `https://pinkman.ru/projects/${slug}/` },
    openGraph: { title, description },
  }
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params
  const data = cases[slug]
  if (!data) notFound()

  const { cover_image, website_url, hero, subtitle, intro, what_we_did, results, awards, media_blocks } = data

  return (
    <>
      {/* ── Cover image ── */}
      {cover_image && (
        <div className="media-section last">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            className="picture"
            loading="eager"
            sizes="100vw"
            src={`/images/${cover_image}`}
          />
          {website_url && (
            <div className="case-cover-button">
              <a
                className="big-button-black case-web w-inline-block"
                href={website_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="text-regular">На&nbsp;сайт</p>
                <div className="button-arrow-wrapper-black">
                  <div className="button-arrow__black w-embed">
                    <svg fill="none" height="100%" viewBox="0 0 25 24" width="100%" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.6677 15.2266C17.6677 15.4401 17.5948 15.6172 17.449 15.7578C17.3083 15.8984 17.1443 15.9688 16.9568 15.9688C16.7641 15.9688 16.5974 15.8958 16.4568 15.75C16.3214 15.6042 16.2537 15.4401 16.2537 15.2578V12.3672L16.3943 8.71875L15.1052 10.1797L7.34741 17.9297C7.20679 18.0703 7.04272 18.1406 6.85522 18.1406C6.72502 18.1406 6.60522 18.1068 6.49585 18.0391C6.38647 17.9714 6.29793 17.8828 6.23022 17.7734C6.16252 17.6589 6.12866 17.5391 6.12866 17.4141C6.12866 17.2318 6.20158 17.0677 6.34741 16.9219L14.0896 9.16406L15.5427 7.89062L11.7302 8.01562H9.01147C8.82918 8.01562 8.66512 7.94792 8.51929 7.8125C8.37866 7.67188 8.30835 7.50781 8.30835 7.32031C8.30835 7.13281 8.37606 6.96875 8.51147 6.82812C8.64689 6.68229 8.82397 6.60938 9.04272 6.60938H16.9021C17.1365 6.60938 17.3214 6.67969 17.4568 6.82031C17.5922 6.96094 17.6599 7.14323 17.6599 7.36719L17.6677 15.2266Z" fill="#818181"/>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>
      )}

      {/* ── Hero ── */}
      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-big-wrapper">
            <p className="text-big" dangerouslySetInnerHTML={{ __html: ruNbspHtml(hero) }} />
          </div>
        </div>
      </div>

      {/* ── Subtitle ── */}
      {subtitle && (
        <div className="portfolio-section">
          <div className="main-container">
            <div className="text-h2-wrapper">
              <h2 dangerouslySetInnerHTML={{ __html: ruNbspHtml(subtitle) }} />
            </div>
          </div>
        </div>
      )}

      {/* ── Intro ── */}
      {intro && intro.length > 0 && (
        <div className="portfolio-section">
          <div className="main-container case-bullets">
            <div className="bullets-wrapper bullets-wrapper--case">
              <div className="bullet-wrapper___top bullet-wrapper___top--case">
                <h3 className="h3">Вводные</h3>
                <div className="bullet-wrapper___content-main case-bullet-wrapper">
                  {intro.map((r, i) => (
                    <div key={i} className="bullet-wrapper___content-item">
                      <img
                        alt=""
                        className="bullet-point"
                        loading="eager"
                        src="/images/66f6e23524a454603f7d5560_dot-icon.svg"
                      />
                      <p className="text-regular" dangerouslySetInnerHTML={{ __html: ruNbspHtml(r) }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── What we did ── */}
      {what_we_did && what_we_did.length > 0 && (
        <div className="portfolio-section">
          <div className="main-container case-bullets">
            <div className="bullets-wrapper bullets-wrapper--case">
              <div className="bullet-wrapper___top bullet-wrapper___top--case">
                <h3 className="h3">Что&nbsp;мы сделали</h3>
                <div className="bullet-wrapper___content-main case-bullet-wrapper">
                  {what_we_did.map((r, i) => (
                    <div key={i} className="bullet-wrapper___content-item">
                      <img
                        alt=""
                        className="bullet-point"
                        loading="eager"
                        src="/images/66f6e23524a454603f7d5560_dot-icon.svg"
                      />
                      <p className="text-regular" dangerouslySetInnerHTML={{ __html: ruNbspHtml(r) }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Results ── */}
      {results.length > 0 && (
        <div className="portfolio-section">
          <div className="main-container case-bullets">
            <div className="bullets-wrapper bullets-wrapper--case">
              <div className="bullet-wrapper___top bullet-wrapper___top--case">
                <h3 className="h3">Результаты</h3>
                <div className="bullet-wrapper___content-main case-bullet-wrapper">
                  {results.map((r, i) => (
                    <div key={i} className="bullet-wrapper___content-item">
                      <img
                        alt=""
                        className="bullet-point"
                        loading="eager"
                        src="/images/66f6e23524a454603f7d5560_dot-icon.svg"
                      />
                      <p className="text-regular" dangerouslySetInnerHTML={{ __html: ruNbspHtml(r) }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Awards ── */}
      {awards.length > 0 && (
        <>
          <div className="portfolio-section">
            <div className="main-container">
              <div className="text-h1-wrapper">
                <h2 className="h1">Награды</h2>
              </div>
            </div>
          </div>
          <div className="portfolio-section">
            <div className="main-container">
              <div className="list-wrapper padding-32px">
                <div className="list">
                  {awards.map((award, i) => (
                    <div key={i} className="list-item-wrapper">
                      <div className="bullet-wrapper-left">
                        <div className="w-richtext">
                          <p>{award}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Media blocks ── */}
      {media_blocks.map((block, i) => (
        <div key={i} className="case-media-block">
          {block.heading && (
            <div className="portfolio-section">
              <div className="main-container">
                <div className="text-h1-wrapper">
                  <h2 className="h1" dangerouslySetInnerHTML={{ __html: ruNbsp(block.heading!) }} />
                </div>
              </div>
            </div>
          )}
          {block.subheading && (
            <div className="portfolio-section">
              <div className="main-container">
                <div className="text-h2-wrapper">
                  <div className="rich-text w-richtext" dangerouslySetInnerHTML={{ __html: ruNbspHtml(block.subheading!) }} />
                </div>
              </div>
            </div>
          )}
          {block.images.length === 1 && (
            <div className="media-section last">
              <img
                alt=""
                className="picture"
                loading="lazy"
                sizes="100vw"
                src={`/images/${block.images[0]}`}
              />
            </div>
          )}
          {block.images.length > 1 && (
            <div className="media-section last full-size">
              <div className="media-section__photos">
                {block.images.map((img, j) => (
                  <div key={j} className="media-section__photos-item">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      alt=""
                      className="picture"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      src={`/images/${img}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  )
}
