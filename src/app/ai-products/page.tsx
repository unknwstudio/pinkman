import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'AI в Pinkman',
  description: 'Все AI-направления студии Pinkman: от производства контента и роликов до аутстаффа AI-дизайнеров и вайбкодинга сайтов.',
  alternates: {
    canonical: 'https://pinkman.ru/ai-products/',
  },
}

export default function AiProductsPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">AI в&nbsp;Pinkman</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Используем AI на&nbsp;каждом этапе продакшена&nbsp;&mdash; от&nbsp;генерации контента и&nbsp;роликов до&nbsp;обучения команд и&nbsp;разработки сайтов. Вот что мы&nbsp;умеем.</h2></div></Section>

      {/* ── Производство AI-контента ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Производство AI&#x2011;контента</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['статика + анимация']}
          title="AI&#x2011;контент для&nbsp;брендов"
          description="Производство статичного и&nbsp;анимационного AI&#x2011;контента: кей&#x2011;вижуалы, иллюстрации, motion&#x2011;графика."
        />
      </ServiceGrid>

      {/* ── OLV + DOOH ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">OLV&#x2011;ролики для&nbsp;ТВ и&nbsp;DOOH</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['видео']}
          title="AI&#x2011;ролики с&nbsp;AI&#x2011;озвучкой и&nbsp;AI&#x2011;музыкой"
          tags={['Яндекс Го', 'Яндекс Сплит']}
          description="Разработка OLV&#x2011;роликов для&nbsp;телевидения и&nbsp;медиафасадов DOOH. Полный цикл: от&nbsp;сценария до&nbsp;финальных ресайзов."
        />
      </ServiceGrid>

      {/* ── Шоу и мероприятия ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">AI&#x2011;контент для&nbsp;шоу и&nbsp;мероприятий</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['мероприятия']}
          title="Оформление шоу, выставок, инсталляций"
          tags={['Роскосмос 2026', 'Синяя птица', 'Поленов', 'ANNA ASTI']}
          description="Производство AI&#x2011;контента для&nbsp;оформления шоу, мероприятий, музейных выставок и&nbsp;инсталляций."
        />
      </ServiceGrid>

      {/* ── Маркетинг ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">AI&#x2011;поддержка маркетинговых кампаний</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['маркетинг']}
          title="Кампании и&nbsp;интеграции"
          tags={['Яндекс Плюс']}
          description="AI&#x2011;поддержка маркетинговых кампаний, интеграций и&nbsp;спецпроектов."
        />
      </ServiceGrid>

      {/* ── Приложения и интерфейсы ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">AI&#x2011;графика для&nbsp;приложений и&nbsp;интерфейсов</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['интерфейсы']}
          title="Мобильные приложения, лендинги"
          tags={['Яндекс Еда', 'ОТП', 'Яндекс Плюс', 'Яндекс AdTech']}
          description="Оформление мобильных приложений, интерфейсов, лендингов AI&#x2011;графикой."
        />
      </ServiceGrid>

      {/* ── Персонажи и маскоты ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">AI&#x2011;гиды, персонажи и&nbsp;маскоты</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['персонажи']}
          title="Маскоты и&nbsp;AI&#x2011;гиды"
          tags={['маскот ПСБ', 'капибара Чипа для&nbsp;Едадил', 'Поленов']}
          description="Разработка AI&#x2011;персонажей, маскотов и&nbsp;гидов для&nbsp;брендов и&nbsp;продуктов."
        />
      </ServiceGrid>

      {/* ── Фотосессии ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">AI&#x2011;фотосессии для&nbsp;KV</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['фото']}
          title="AI&#x2011;фотосессии"
          tags={['Яндекс Лавка', 'Яндекс Сплит']}
          description="AI&#x2011;фотосессии для&nbsp;ключевых визуалов рекламных кампаний."
        />
      </ServiceGrid>

      {/* ── Аутстафф ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Аутстафф AI&#x2011;дизайнеров</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['команда']}
          title="AI&#x2011;дизайнеры в&nbsp;ваш отдел маркетинга"
          description="Аутстафф дизайнеров с&nbsp;сильными навыками AI&nbsp;&mdash; встраиваются в&nbsp;вашу команду и&nbsp;усиливают продакшен."
        />
      </ServiceGrid>

      {/* ── Обучение ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Корпоративное обучение AI</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['обучение']}
          title="Обучение команд AI&#x2011;инструментам"
          tags={['Яндекс', 'Сбер']}
          description="Корпоративное обучение команд работе с&nbsp;AI&#x2011;инструментами. Сейчас проходят обучения команды Яндекс и&nbsp;Сбер."
        />
      </ServiceGrid>

      {/* ── Презентации ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Презентации с&nbsp;AI&#x2011;графикой</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['продажи']}
          title="Материалы для&nbsp;продаж"
          description="Разработка презентаций и&nbsp;материалов для&nbsp;продаж с&nbsp;AI&#x2011;графикой для&nbsp;визуализации идей и&nbsp;продуктов."
        />
      </ServiceGrid>

      {/* ── Сайты ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">AI и&nbsp;сайты</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          tagsTop={['вайбкодинг']}
          title="Вайбкодинг сайтов"
          description="Создание сайтов с&nbsp;помощью AI&nbsp;&mdash; быстро, итеративно, без&nbsp;классического цикла разработки."
        />
        <ServicePoint
          tagsTop={['платформа']}
          title="AI&#x2011;платформа для&nbsp;управления сайтом"
          description="Перенос сайтов на&nbsp;AI&#x2011;платформу для&nbsp;управления контентом и&nbsp;страницами без&nbsp;разработчиков."
          animDelay={2}
        />
      </ServiceGrid>

      <ContactCard intro="Обсудим ваш AI-проект?" />
    </>
  )
}
