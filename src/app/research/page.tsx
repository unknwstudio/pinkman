import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Исследования',
  description: 'UX-исследования, проверка гипотез и тестирование на реальных пользователях — помогаем принимать решения на основе данных.',
  alternates: {
    canonical: 'https://pinkman.ru/research/',
  },
}

export default function ResearchPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Исследования</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>UX&#x2011;исследования, проверка гипотез и&nbsp;тестирование на&nbsp;реальных пользователях&nbsp;&mdash; помогаем принимать решения на&nbsp;основе данных.</h2></div></Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Направления</h2></div></Section>

      <ServiceGrid>
        <Link href="/ux-research-redesign/" className="service-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['UX']}
            title="UX&#x2011;исследования при&nbsp;редизайне и&nbsp;запуске обновлений в&nbsp;продукт"
            description="Помогаем вносить изменения в&nbsp;продукт без&nbsp;риска просадки метрик. Проверяем сценарии на&nbsp;реальных пользователях до&nbsp;релиза."
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
        <Link href="/ux-audit/" className="service-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['экспресс']}
            title="Экспресс&#x2011;аудит продукта (UX&nbsp;+ аналитика)"
            description="Помогаем быстро понять, где продукт теряет пользователей, конверсию и&nbsp;деньги&nbsp;&mdash; чтобы определить, что менять в&nbsp;первую очередь."
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

      <ContactCard intro="Обсудим ваш проект?" />
    </>
  )
}
