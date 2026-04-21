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
        <Link href="/ai-video/" className="service-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['AI']}
            title="AI&#x2011;ролики для&nbsp;OLV&nbsp;+ DOOH"
            description="От&nbsp;сценария до&nbsp;финальных ресайзов для&nbsp;десятка поверхностей. Быстро, технически верно, без&nbsp;потери качества."
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
        <Link href="/creative-movie-production/" className="service-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['съёмки']}
            title="Креатив и&nbsp;съёмка имиджевых роликов"
            description="Сценарий, съёмка и&nbsp;постпродакшен&nbsp;&mdash; от&nbsp;историй в&nbsp;формате рилс до&nbsp;полноценного кино о&nbsp;ваших клиентах, сотрудниках, компании."
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
            chips={['Бренд и\u00a0контент', 'AI', '3D/Motion-design']}
            year="2026"
            title="Яндекс Го Казахстан"
            subtitle="AI+CGI Campaign"
            description="Подготовили AI-ролики для федеральной рекламной кампании с&nbsp;множеством ресайзов"
            href="/projects/yandex-go-kazakhstan"
            imgSrc="/images/_cases/yagno-kazakh/horizontal.avif"
            imgAlt="Яндекс Го Казахстан"
          />
          <CaseCard
            chips={['Бренд и\u00a0контент', 'AI', '3D/Motion-design']}
            year="2026"
            title="AI-ролик для Яндекс.Сплит"
            subtitle="AI+CGI Campaign"
            description="Рекламный AI-ролик для различных каналов коммуникации"
            href="/projects/ai-rolik-dlya-yandex-split"
            imgSrc="/images/_cases/yandex-split/image 2090012112.avif"
            imgAlt="AI-ролик для Яндекс.Сплит"
          />
          <CaseCard
            chips={['Бренд и\u00a0контент', 'AI', '3D/Motion-design']}
            year="2026"
            title="AI-ролик для Bootlegger"
            subtitle="AI+CGI Campaign"
            description="Рекламный AI-ролик для трансляции в&nbsp;кинотеатре Пионер"
            href="/projects/ai-rolik-dlya-bootlegger"
            imgSrc="/images/_cases/bootlegger/image 2090012112.avif"
            imgAlt="AI-ролик для Bootlegger"
          />
          <CaseCard
            chips={['DOOH', 'коллаборация']}
            year="2025"
            title="Синяя птица × Сила света"
            description="AI-ролики для сценического шоу «Синяя птица» в&nbsp;коллаборации с&nbsp;командой «Сила света»"
            href="/projects/scenicheskiy-vizual-dlya-siney-pticy-fony-k-nomeram-shou"
            imgSrc="/images/69aacdcc619e6cb9f4fcab3c_0.webp"
            imgAlt="Синяя птица × Сила света"
          />
          <CaseCard
            chips={['DOOH', 'ребрендинг']}
            year="2024"
            title="Моушен для ребрендинга Т&#x2011;Банка"
            description="Ролики для четырёх 3D-кубов и&nbsp;75+ ресайзов для&nbsp;медиафасадов по&nbsp;всей России"
            href="/projects/sdelali-moushen-dlya-rebrendinga-t-banka"
            imgSrc="/images/67f6496dbd9238c643e2de48_Rectangle 1004241 (12).webp"
            imgAlt="Т-Банк"
          />
        </div>
      </div>

      <ContactCard intro="Обсудим ваш ролик?" />
    </>
  )
}
