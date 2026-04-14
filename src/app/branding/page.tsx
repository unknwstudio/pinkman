import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'
import CaseCard from '@/components/CaseCard/CaseCard'

export const metadata: Metadata = {
  title: 'Брендинг и айдентика',
  description: 'Стратегия, айдентика, визуальная система — от идеи до работающих материалов.',
  alternates: {
    canonical: 'https://pinkman.ru/branding/',
  },
}

export default function BrandingPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Брендинг и&nbsp;айдентика</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Стратегия, айдентика, визуальная система&nbsp;&mdash; от&nbsp;идеи до&nbsp;работающих материалов.</h2></div></Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Направления</h2></div></Section>

      <ServiceGrid>
        <Link href="/brand-identity/" className="service-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['стратегия + дизайн']}
            title="Брендинг и&nbsp;айдентика"
            description="Делаем стратегию компании ясной, выстраиваем бренд&#x2011;платформу, айдентику и&nbsp;реальные материалы. Система, которая влияет на&nbsp;продажи, найм и&nbsp;инвестиции."
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
        <Link href="/event-identity/" className="service-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['ивенты']}
            title="Айдентика мероприятий"
            description="Подготовим креатив и&nbsp;айдентику под&nbsp;мероприятия, конференции, спецпроекты&nbsp;&mdash; креативно, технически точно и&nbsp;в&nbsp;сжатые сроки."
            animDelay={2}
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

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кейсы</h2></div></Section>
      <div className="service-cases-section">
        <div className="service-grid">
          <CaseCard
            chips={['Брендинг', 'Карьерный бренд']}
            year="2026"
            title="СИБУР"
            subtitle="Зонтичный карьерный бренд для&nbsp;нефтехимической компании"
            description="Разработка зонтичного бренда СИБУР для&nbsp;упаковки программ карьерной траектории для&nbsp;СУЗов и&nbsp;ВУЗов"
            href="/projects/sibur-kariernyy-brend"
            imgSrc="/images/_cases/sibur/sibur-cover.webp"
            imgAlt="СИБУР"
          />
          <CaseCard
            chips={['Брендинг', 'Сайт', 'Приложение']}
            year="2025"
            title="Норма"
            subtitle="Брендинг, мобильное приложение и&nbsp;сайт для&nbsp;сети химчисток"
            description="Разработали брендинг, мобильное приложение и&nbsp;сайт для&nbsp;сети химчисток &laquo;Норма&raquo;"
            href="/projects/norma"
            imgSrc="/images/_cases/norma/norma-cover.webp"
            imgAlt="Норма"
          />
        </div>
      </div>

      <ContactCard intro="Обсудим ваш проект?" />
    </>
  )
}
