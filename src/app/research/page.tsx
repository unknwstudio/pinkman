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
        <Link href="/ux-research-redesign/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['UX']}
            title="UX&#x2011;исследования при&nbsp;редизайне"
            description="Помогаем вносить изменения в&nbsp;продукт без&nbsp;риска просадки метрик. Проверяем сценарии на&nbsp;реальных пользователях до&nbsp;релиза."
          />
        </Link>
      </ServiceGrid>

      <ContactCard intro="Обсудим ваш проект?" />
    </>
  )
}
