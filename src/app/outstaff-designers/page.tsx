import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Аутстафф дизайнеров',
  description: 'Усиливаем вашу команду опытными дизайнерами — без найма, сразу в работу.',
  alternates: {
    canonical: 'https://pinkman.ru/outstaff-designers/',
  },
}

export default function OutstaffDesignersPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Аутстафф дизайнеров</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Усиливаем вашу команду опытными дизайнерами&nbsp;&mdash; без&nbsp;найма, сразу в&nbsp;работу. Подберём специалистов под&nbsp;ваш проект и&nbsp;задачи.</h2></div></Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Направления</h2></div></Section>

      <ServiceGrid>
        <Link href="/outstaff-designers/ai/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['AI']}
            title="Аутстафф AI&#x2011;дизайнеров"
            description="AI&#x2011;дизайнеры в&nbsp;вашу команду с&nbsp;доступом к&nbsp;инструментам, которые блокирует корпоративный контур."
          />
        </Link>
      </ServiceGrid>

      <ContactCard intro="Обсудим ваши задачи?" />
    </>
  )
}
