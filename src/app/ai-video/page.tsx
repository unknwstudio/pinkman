import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'
import CaseCard from '@/components/CaseCard/CaseCard'

export const metadata: Metadata = {
  title: 'AI\u2011ролики для OLV и DOOH',
  description: 'От сценария до финальных ресайзов для десятка поверхностей. Быстро, технически верно, без потери качества.',
  alternates: {
    canonical: 'https://pinkman.ru/ai-video/',
  },
}

export default function AiVideoPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Рекламные AI&#x2011;ролики для&nbsp;OLV&nbsp;+ DOOH</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>От&nbsp;сценария до&nbsp;финальных ресайзов для&nbsp;десятка поверхностей. Быстро, технически верно, без&nbsp;потери качества.</h2></div></Section>

      <Section>
        <div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Бюджет срезан, дедлайн вчера</h2></div>
        <p className="font-color-dark-gray">Видеопродакшен дорожает, а&nbsp;сроки не&nbsp;растягиваются. AI&nbsp;даёт скорость&nbsp;— но&nbsp;требует экспертизы, чтобы результат выглядел на&nbsp;уровне, а&nbsp;не&nbsp;как&nbsp;генерация ради генерации.</p>
      </Section>

      <Section>
        <div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;предлагаем</h2></div>
        <p className="font-color-dark-gray">Разрабатываем идею и&nbsp;сценарий, производим реалистичные AI-ролики, адаптируем под&nbsp;OLV и&nbsp;DOOH с&nbsp;учётом технических требований каждой поверхности. AI-озвучка и&nbsp;музыка&nbsp;— включены.</p>
        <p className="font-color-dark-gray" style={{marginTop:'1rem'}}>Мы мультидисциплинарны: комбинируем AI с&nbsp;3D, моушном и&nbsp;постпродакшеном&nbsp;— именно это даёт реалистичный результат, а&nbsp;не&nbsp;просто генерацию. Работаем как&nbsp;встроенный юнит вашей команды&nbsp;— с&nbsp;визуальным контролем и&nbsp;производственной дисциплиной.</p>
      </Section>

      <ServiceGrid>
        <ServicePoint title="Продюсер" tags={['статусы','сроки','координация']} description="Контролирует ход работ, ведёт коммуникацию. Вы&nbsp;всегда знаете, что&nbsp;происходит." />
        <ServicePoint title="Арт-директор" tags={['визуальная рамка','идея']} description="Держит визуальный язык от&nbsp;первого брифа до&nbsp;финального ролика." />
        <ServicePoint title="AI-дизайнеры" tags={['3D','моушн','AI']} description="Мультидисциплинарная связка: графика, анимация и&nbsp;AI в&nbsp;одной роли. Состав&nbsp;— под&nbsp;специфику проекта." />
        <ServicePoint title="2D-моушен, композер, саунд-дизайнер" tags={['по&nbsp;необходимости']} description="Подключаем при&nbsp;необходимости&nbsp;— озвучка и&nbsp;музыкальное сопровождение внутри команды." />
      </ServiceGrid>

      <Section>
        <div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div>
        <p className="font-color-dark-gray">Запускаете рекламные кампании на&nbsp;несколько каналов и&nbsp;нужна поддержка при&nbsp;производстве роликов: от&nbsp;идеи до&nbsp;озвучки.</p>
        <p className="font-color-dark-gray" style={{marginTop:'1rem'}}>Работаете с&nbsp;крупными брендами и&nbsp;корпоративными клиентами, где&nbsp;высокие репутационные риски и&nbsp;большие ожидания от&nbsp;результата.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Бренд-менеджер" tags={['рекламные кампании']} description="Хочет результат&nbsp;— красивый, в&nbsp;срок, без&nbsp;сюрпризов." />
        <ServicePoint title="Креативный директор" tags={['идея и&nbsp;качество']} description="Знает, чего хочет. Ценит экспертизу и&nbsp;визуальную дисциплину на&nbsp;каждом этапе." />
        <ServicePoint title="Руководитель продакшена" tags={['дедлайны','бюджет']} description="Следит за&nbsp;сроками и&nbsp;ресурсами&nbsp;— мы встраиваемся без&nbsp;трений и&nbsp;лишних вопросов." />
        <ServicePoint title="Продюсер" tags={['координация','процесс']} description="Знает цену хаосу. Ценит прозрачный процесс и&nbsp;предсказуемый результат." />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы&nbsp;получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Реалистичные AI-ролики" tags={['сценарий','озвучка','музыка']} description="Полный цикл: от&nbsp;идеи и&nbsp;раскадровки до&nbsp;финального ролика с&nbsp;AI-озвучкой и&nbsp;музыкальным сопровождением." />
        <ServicePoint title="Технически верные ресайзы" tags={['OLV','DOOH','все&nbsp;поверхности']} description="Адаптация под&nbsp;каждый формат с&nbsp;учётом технических требований&nbsp;— от&nbsp;телевидения до&nbsp;фасадов." />
        <ServicePoint title="Мультидисциплинарное производство" tags={['AI + 3D + моушн']} description="Всё в&nbsp;одной команде&nbsp;— никаких потерь на&nbsp;стыках, единая эстетика от&nbsp;первого кадра до&nbsp;последнего." />
        <ServicePoint title="Сдача в&nbsp;срок, в&nbsp;бюджет" tags={['без&nbsp;сюрпризов']} description="Прозрачный процесс, чёткие статусы&nbsp;— без&nbsp;перерасхода бюджета и&nbsp;поиска ресурсов в&nbsp;спешке." />
        <ServicePoint title="Кейс для&nbsp;наград" tags={['индустриальный вес']} description="Оформляем результат как&nbsp;полноценный кейс, который имеет вес в&nbsp;индустрии." />
        <ServicePoint title="AI-экспертиза из&nbsp;первых рук" tags={['Сбер','Яндекс','ПСБ']} description="Команда с&nbsp;ежедневной AI-практикой на&nbsp;сотнях задач&nbsp;— обучаем дизайнеров Сбера, Яндекса и&nbsp;ПСБ." />
      </ServiceGrid>

      <Section>
        <div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Что&nbsp;мы&nbsp;делаем и&nbsp;как</h2></div>
        <div className="list-wrapper padding-32px"><div className="list">
          {[
            'Погружаемся в&nbsp;контекст на&nbsp;брифе',
            'Готовим решение под&nbsp;запрос и&nbsp;возможности AI',
            'Разрабатываем сценарий, раскадровку, стилшоты',
            'Производим AI-контент по&nbsp;утверждённой рамке: графика, озвучка, музыка',
            'Утверждаем мастер-ролик, готовим технически верные ресайзы',
            'Еженедельные синки и&nbsp;статусы',
            'Общее облако с&nbsp;чистой структурой и&nbsp;неймингом файлов',
            'Сопровождаем до&nbsp;финальной сдачи',
          ].map((s, i) => (
            <div key={i} className="list-item-wrapper">
              <div className="bullet-wrapper-left"><h3 dangerouslySetInnerHTML={{__html:`${i+1}.&nbsp;${s}`}} /></div>
            </div>
          ))}
        </div></div>
      </Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кейсы</h2></div></Section>
      <div className="service-cases-section">
        <div className="service-grid">

          {[
            { chips: ['AI OLV'], year: '2026', title: 'AI OLV-ролики для&nbsp;РК Яндекс Казахстан', desc: 'Серия рекламных AI-роликов для&nbsp;федеральной кампании Яндекса в&nbsp;Казахстане.' },
            { chips: ['OLV', 'федеральная кампания'], year: '2025', title: 'Яндекс Плюс AdTech&nbsp;— «Свои плюсы»', desc: 'Федеральная кампания с&nbsp;AI-роликами для&nbsp;одного из&nbsp;крупнейших рекламных продуктов Яндекса.' },
            { chips: ['имиджевый ролик'], year: '2025', title: 'Яндекс Сплит: «Умный дом»', desc: 'Имиджевая AI-кампания для&nbsp;сервиса рассрочки Яндекс Сплит.' },
            { chips: ['full AI', 'кинотеатры'], year: '2025', title: 'Bootlegger&nbsp;— барный кейтеринг', desc: 'Полностью AI-ролик для&nbsp;показа в&nbsp;кинотеатрах. От&nbsp;сценария до&nbsp;финального монтажа.' },
            { chips: ['имиджевый'], year: '2025', title: 'Яндекс Go&nbsp;— эволюция сервиса', desc: 'Имиджевый AI-ролик об&nbsp;эволюции Яндекс Go: от&nbsp;концепции до&nbsp;финального монтажа.' },
            { chips: ['инсталляции', 'DOOH'], year: '2025', title: 'Открытие Пермской галереи', desc: 'AI-контент для&nbsp;инсталляций к&nbsp;открытию нового здания Пермской государственной художественной галереи.' },
            { chips: ['интерактивная выставка'], year: '2025', title: 'Музей «Страна Побед»', desc: 'AI-контент для&nbsp;интерактивной выставки. Мультимедийные инсталляции и&nbsp;визуальные решения для&nbsp;экспозиции.' },
            { chips: ['DOOH', 'коллаборация'], year: 'декабрь 2025', title: 'Синяя птица&nbsp;× Сила света', desc: 'AI-ролики для&nbsp;сценического шоу «Синяя птица» в&nbsp;коллаборации с&nbsp;командой «Сила света».' },
            { chips: ['AI + 3D', 'концерт'], year: '2025', title: 'ANNA ASTI&nbsp;— 180+ минут AI-контента', desc: 'Более 180&nbsp;минут сгенерированного AI-контента (AI&nbsp;+&nbsp;3D) для&nbsp;концерта 14.06.2025.' },
          ].map((c, i) => (
            <CaseCard
              key={i}
              chips={c.chips}
              year={c.year}
              title={c.title}
              subtitle={c.desc}
            />
          ))}

        </div>
      </div>

      <ContactCard
        intro="Обсудим проект?"
        role="Аккаунт-директор Юрий Григоренко&nbsp;— расскажет про&nbsp;состав команды, сроки и&nbsp;стоимость под&nbsp;ваш проект."
      />
    </>
  )
}
