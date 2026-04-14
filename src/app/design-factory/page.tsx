import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Дизайн-завод',
  description: 'Дизайн-завод Pinkman — масштабное производство дизайн-материалов.',
  alternates: {
    canonical: 'https://pinkman.ru/design-factory/',
  },
}

export default function DesignFactoryPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Дизайн&#x2011;завод</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Масштабное производство дизайн&#x2011;материалов</h2></div></Section>

      <ContactCard intro="Обсудим ваш проект?" />
    </>
  )
}
