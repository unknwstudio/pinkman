import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'
import CaseCard from '@/components/CaseCard/CaseCard'

export const metadata: Metadata = {
  title: 'Видеоролики (AI, CG, съёмки)',
  description: 'AI-ролики для рекламных поверхностей, креативные съёмки и постпродакшен — полный цикл видеопроизводства.',
  alternates: {
    canonical: 'https://pinkman.ru/video-production/',
  },
}

export default function VideoProductionPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Видеоролики</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>AI&#x2011;ролики для&nbsp;рекламных поверхностей, креативные съёмки и&nbsp;постпродакшен&nbsp;&mdash; полный цикл видеопроизводства.</h2></div></Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Направления</h2></div></Section>

      <ServiceGrid>
        <Link href="/ai-video/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['AI']}
            title="AI&#x2011;ролики для&nbsp;OLV&nbsp;+ DOOH"
            description="От&nbsp;сценария до&nbsp;финальных ресайзов для&nbsp;десятка поверхностей. Быстро, технически верно, без&nbsp;потери качества."
          />
        </Link>
        <Link href="/creative-movie-production/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['съёмки']}
            title="Креатив и&nbsp;съёмка имиджевых роликов"
            description="Сценарий, съёмка и&nbsp;постпродакшен&nbsp;&mdash; от&nbsp;историй в&nbsp;формате рилс до&nbsp;полноценного кино о&nbsp;ваших клиентах, сотрудниках, компании."
            animDelay={2}
          />
        </Link>
      </ServiceGrid>

      <div className="service-cases-section">
        <div className="service-grid">
          <CaseCard
            chips={['Бренд и\u00a0контент', 'AI', '3D/Motion-design']}
            year="2026"
            title="Яндекс Го Казахстан"
            subtitle="AI+CGI Campaign"
            description="Подготовили AI-ролики для федеральной рекламной кампании с&nbsp;множеством ресайзов"
            href="/projects/yandex-go-kazakhstan"
            imgSrc="/images/_cases/yagno-kazakh/horizontal.png"
            imgAlt="Яндекс Го Казахстан"
          />
          <CaseCard
            chips={['Бренд и\u00a0контент', 'AI', '3D/Motion-design']}
            year="2026"
            title="AI-ролик для Яндекс.Сплит"
            subtitle="AI+CGI Campaign"
            description="Рекламный AI-ролик для различных каналов коммуникации"
            href="/projects/ai-rolik-dlya-yandex-split"
            imgSrc="/images/_cases/yandex-split/image 2090012112.png"
            imgAlt="AI-ролик для Яндекс.Сплит"
          />
          <CaseCard
            chips={['Бренд и\u00a0контент', 'AI', '3D/Motion-design']}
            year="2026"
            title="AI-ролик для Bootlegger"
            subtitle="AI+CGI Campaign"
            description="Рекламный AI-ролик для трансляции в&nbsp;кинотеатре Пионер"
            href="/projects/ai-rolik-dlya-bootlegger"
            imgSrc="/images/_cases/bootlegger/image 2090012112.png"
            imgAlt="AI-ролик для Bootlegger"
          />
        </div>
      </div>

      <ContactCard intro="Обсудим ваш ролик?" />
    </>
  )
}
