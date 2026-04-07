import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Креативные идеи и\u00a0айдентика мероприятий',
  description: 'Подготовим креатив и айдентику под мероприятия, конференции, спецпроекты — креативно, технически точно и в сжатые сроки.',
  alternates: {
    canonical: 'https://pinkman.ru/event-identity/',
  },
}

const cases = [
  ['Банк ПСБ', 'Айдентика мероприятий: корпоративные, спортивные, семейные (2025\u20112026)'],
  ['Правительство Москвы', 'Дизайн\u2011поддержка конференции \u00abНочь карьеры\u00bb в\u00a0рамках форума \u00abТерритория будущего. Москва\u00a02030\u00bb'],
  ['Банк ПСБ', 'Айдентика мероприятия \u00abПрямая линия с\u00a0Председателем банка\u00bb (2026)'],
  ['RICS', 'Айдентика и\u00a0лендинг для\u00a0конференции RICS\u00a0\u2014 первого международного ивента в\u00a0России по\u00a0креативной экономике (2025)'],
]

export default function EventIdentityPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section>
        <div className="text-big-wrapper">
          <p className="text-big">
            Креативные идеи и&nbsp;айдентика мероприятий
          </p>
        </div>
      </Section>
      <Section>
        <div className="text-h2-wrapper">
          <h2>
            Подготовим креатив и&nbsp;айдентику под&nbsp;мероприятия,
            конференции, спецпроекты, партнерские программы&nbsp;&mdash;
            креативно, технически точно и&nbsp;в&nbsp;сжатые сроки.
          </h2>
        </div>
      </Section>

      {/* ── Какие проблемы мы решаем — 6 карточек ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Какие проблемы мы&nbsp;решаем</h2>
        </div>
      </Section>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['идея']}
          title="Мероприятие совсем скоро, сроки поджимают, а&nbsp;KV ещё не&nbsp;готов"
        />
        <ServicePoint
          tagsTop={['масштабирование']}
          title="KV готов, непонятно, как адаптировать под&nbsp;другие носители или&nbsp;носителей так много, что нужна помощь"
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['сроки']}
          title="На подготовку мало времени, нужны качественные решения с&nbsp;AI на&nbsp;ожидаемо высоком уровне"
          animDelay={3}
        />
      </ServicePointRow>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['полный цикл']}
          title="Нет подрядчика, который закроет весь спектр работ: от&nbsp;создания креативной идеи до&nbsp;технически корректных носителей"
        />
        <ServicePoint
          tagsTop={['команда']}
          title="В&nbsp;команде нет свободных креаторов и&nbsp;дизайнеров"
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['мультидисциплина']}
          title="В&nbsp;команде нет мультидисциплинарных дизайнеров, которые могут сделать любой контент: от&nbsp;статики до&nbsp;motion с&nbsp;AI, 2D, 3D"
          animDelay={3}
        />
      </ServicePointRow>

      {/* ── Что мы предлагаем ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Что мы&nbsp;предлагаем</h2>
        </div>
      </Section>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['комплексно']}
          title="Комплексную поддержку: от&nbsp;креативной идеи до&nbsp;визуальной реализации и&nbsp;масштабирования на&nbsp;любые носители&nbsp;&mdash; от&nbsp;листовок до&nbsp;нестандартных экранов"
        />
        <ServicePoint
          tagsTop={['скорость', 'качество']}
          title="AI + мультидисциплина"
          description="Понимаем, что применение AI даёт скорость, но&nbsp;требует внимания к&nbsp;нюансам. Комбинируем инструменты с&nbsp;AI&nbsp;&mdash; качественный результат в&nbsp;короткие сроки."
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['база талантов', 'гибкость']}
          title="Управление ёмкостью"
          description="Самостоятельно управляем ёмкостью команд под&nbsp;ваши задачи, имеем базу талантов для&nbsp;любого типа задачи."
          animDelay={3}
        />
      </ServicePointRow>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['продакшен', 'дисциплина']}
          title="Встроенный юнит"
          description="Отдельная команда продакшена. Работаем как&nbsp;встроенный юнит вашей команды&nbsp;&mdash; с&nbsp;визуальным контролем и&nbsp;производственной дисциплиной."
        />
      </ServicePointRow>

      {/* ── Команда ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Команда</h2>
        </div>
        <div
          className="list-wrapper padding-32px"
          style={{ paddingTop: 'var(--16px)' }}
        >
          <div className="list">
            {[
              '<strong>Продюсер</strong>&nbsp;&mdash; контролирует статусы, сроки, координирует команду',
              '<strong>Креативный директор</strong>&nbsp;&mdash; придумывает идеи для&nbsp;креативной рамки',
              '<strong>Арт-директор</strong>&nbsp;&mdash; следит за&nbsp;визуальной рамкой и&nbsp;идеей от&nbsp;начала до&nbsp;конца',
              '<strong>AI&#x2011;дизайнеры</strong>&nbsp;&mdash; мультидисциплинарные специалисты: 3D, моушн и&nbsp;AI в&nbsp;одной роли для&nbsp;быстрой отрисовки и&nbsp;масштабирования',
              '<strong>Копирайтер</strong>&nbsp;&mdash; разрабатывает лайны для&nbsp;баннеров, сторисов, пушей',
            ].map((s, i) => (
              <div key={i} className="list-item-wrapper">
                <div className="bullet-wrapper-left">
                  <h3 dangerouslySetInnerHTML={{ __html: s }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Кому подходит ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Кому подходит</h2>
        </div>
      </Section>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['мероприятия']}
          title="Часто запускаете конференции, мероприятия, сезонные кампании"
        />
        <ServicePoint
          tagsTop={['крупные бренды']}
          title="Работаете с&nbsp;крупными брендами и&nbsp;корпоративными клиентами с&nbsp;высокими репутационными рисками"
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['агентствам']}
          title="Агентствам и&nbsp;студиям, которые занимаются монтажом конструкций и&nbsp;нуждаются в&nbsp;идейной, визуальной, технической помощи"
          animDelay={3}
        />
      </ServicePointRow>
      <ServicePointRow>
        <ServicePoint
          title="Руководителям маркетинга, бренд-менеджерам, креативным директорам, руководителям продакшена и&nbsp;продюсерам"
        />
      </ServicePointRow>

      {/* ── Что вы получите ── */}
      <Section>
        <div className="text-h1-wrapper">
          <h2 className="h1">Что вы&nbsp;получите</h2>
        </div>
      </Section>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['01']}
          title="Креатив, айдентику, тексты"
          description="Масштабирование на&nbsp;носители в&nbsp;рамках одной команды."
        />
        <ServicePoint
          tagsTop={['02']}
          title="Скоростную подготовку"
          description="Креативно, технически точно и&nbsp;в&nbsp;сжатые сроки."
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['03']}
          title="Технически верные ресайзы"
          description="Корректные ассеты для&nbsp;любых форматов и&nbsp;поверхностей."
          animDelay={3}
        />
      </ServicePointRow>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['04']}
          title="Проект на&nbsp;высоком уровне"
          description="Будет сдан в&nbsp;срок, в&nbsp;рамках бюджета, на&nbsp;высоком уровне качества."
        />
      </ServicePointRow>

      {/* ── Как работаем — процесс ── */}
      <Section>
        <div className="text-h1-wrapper">
          <h2 className="h1">Что мы&nbsp;делаем и&nbsp;как</h2>
        </div>
      </Section>
      <ProcessSteps
        steps={[
          { num: '1', title: 'Брифинг', description: 'Погружаемся в&nbsp;контекст задачи', tag: 'старт' },
          { num: '2', title: 'Креативная идея', description: 'Готовим концепцию и&nbsp;KV', tag: 'концепт' },
          { num: '3', title: 'Согласование', description: 'Презентуем решение для&nbsp;согласования со&nbsp;всеми ЛПР', tag: 'утверждение' },
          { num: '4', title: 'Мастер-макеты', description: 'Определяем ключевые макеты для&nbsp;масштабирования', tag: 'макеты' },
        ]}
      />
      <ProcessSteps
        steps={[
          { num: '5', title: 'Продакшен', description: 'Производим контент с&nbsp;AI: статика и&nbsp;motion', tag: 'AI' },
          { num: '6', title: 'Носители', description: 'Готовим технически верные носители', tag: 'финал' },
          { num: '7', title: 'Синки', description: 'Еженедельные синки, общее облако, сопровождение до&nbsp;финальной сдачи', tag: 'контроль' },
        ]}
      />

      {/* ── Дополнительно ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Дополнительно</h2>
        </div>
        <div
          className="list-wrapper padding-32px"
          style={{ paddingTop: 'var(--16px)' }}
        >
          <div className="list">
            {[
              'Берём задачи вне планирования и&nbsp;вне рабочего времени&nbsp;&mdash; актуально при&nbsp;ресурсных проблемах: ротация, зависимость от&nbsp;отпусков и&nbsp;больничных',
              'Продюсер прозрачно показывает все затраченные часы',
              'Подготовим с&nbsp;нуля или усилим внутренние шаблоны и&nbsp;описание процессов для&nbsp;ускорения запуска рекламных кампаний',
            ].map((s, i) => (
              <div key={i} className="list-item-wrapper">
                <div className="bullet-wrapper-left">
                  <h3 dangerouslySetInnerHTML={{ __html: s }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Кейсы ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Кейсы</h2>
        </div>
        <div
          className="list-wrapper padding-32px"
          style={{ paddingTop: 'var(--16px)' }}
        >
          <div className="list">
            {cases.map(([name, desc], i) => (
              <div key={i} className="list-item-wrapper">
                <div className="bullet-wrapper-left">
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: `<strong>${name}</strong>&nbsp;&mdash; ${desc}`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <ContactCard
        intro="Обсудим ваш проект?"
        role="Аккаунт&#x2011;директор Юрий Григоренко&nbsp;&mdash; расскажет про&nbsp;состав команды, сроки и&nbsp;стоимость под&nbsp;ваш проект."
      />
    </>
  )
}
