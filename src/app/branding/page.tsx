import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Брендинг и айдентика',
  description: 'Разрабатываем айдентику для мероприятий, конференций и спецпроектов — креативно, технически точно и в сжатые сроки.',
  alternates: {
    canonical: 'https://pinkman.ru/branding/',
  },
}

export default function BrandingPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Брендинг и&nbsp;айдентика</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Разрабатываем айдентику для&nbsp;мероприятий, конференций и&nbsp;спецпроектов&nbsp;&mdash; креативно, технически точно и&nbsp;в&nbsp;сжатые сроки.</h2></div></Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Направления</h2></div></Section>

      <ServiceGrid>
        <Link href="/event-identity/" className="service-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['ивенты']}
            title="Айдентика мероприятий"
            description="Подготовим креатив и&nbsp;айдентику под&nbsp;мероприятия, конференции, спецпроекты&nbsp;&mdash; креативно, технически точно и&nbsp;в&nbsp;сжатые сроки."
            afterTitle={
              <div className="small-button small-button--cases w-inline-block" style={{ marginTop: 'var(--16px)', display: 'inline-flex' }}>
                <p className="text-regular small-button-text">Подробнее</p>
                <div className="small-button-arrow-wrapper">
                  <img alt="" className="small-button-arrow" loading="eager" src="/images/67152c3278a3dccbefe124b3_arrow-grey.svg" />
                  <img alt="" className="button-arrow__active" loading="eager" src="/images/66f6e23524a454603f7d5540_arrow-white.svg" />
                </div>
              </div>
            }
          />
        </Link>
      </ServiceGrid>

      <ContactCard intro="Обсудим ваш проект?" />
    </>
  )
}
