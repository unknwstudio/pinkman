import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'

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
          >
            <div style={{ display: 'flex', gap: 'var(--8px)', marginTop: 'var(--16px)' }}>
              {[
                { src: '/images/_cases/yagno-kazakh/horizontal.png', alt: 'Яндекс Го Казахстан' },
                { src: '/images/_cases/bootlegger/image 2090012112.png', alt: 'AI-ролик для Bootlegger' },
                { src: '/images/_cases/yandex-split/image 2090012112.png', alt: 'AI-ролик для Яндекс.Сплит' },
              ].map((c) => (
                <img
                  key={c.alt}
                  src={c.src}
                  alt={c.alt}
                  style={{ width: '80px', height: '56px', objectFit: 'cover', borderRadius: '6px' }}
                  loading="lazy"
                />
              ))}
            </div>
          </ServicePoint>
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

      <ContactCard intro="Обсудим ваш ролик?" />
    </>
  )
}
