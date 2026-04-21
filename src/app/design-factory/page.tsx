import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Дизайн-завод',
  description: 'Собственный дизайн-заводик по производству контента для отдела маркетинга.',
  alternates: {
    canonical: 'https://pinkman.ru/design-factory/',
  },
}

export default function DesignFactoryPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Дизайн&#x2011;завод</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Собственный &laquo;дизайн&#x2011;заводик&raquo; по&nbsp;производству контента для&nbsp;отдела маркетинга.</h2></div></Section>

      {/* ── Кому подходит ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Новым направлениям на&nbsp;стадии MVP"
          tags={['нет дизайнеров', 'бюджет на&nbsp;аутсорс']}
          description="Нет дизайнеров в&nbsp;команде, нет бюджета на&nbsp;найм, но&nbsp;доступен ресурс на&nbsp;аутсорс&nbsp;&mdash; усилить команду, разработать айдентику на&nbsp;рабочих артефактах и&nbsp;запустить рекламные кампании, презентации для&nbsp;партнёров, инвесторов, клиентов."
        />
        <ServicePoint
          title="Команда есть, но&nbsp;не&nbsp;хватает ёмкости"
          tags={['отпуска', 'больничные', 'влётные задачи']}
          description="Команда дизайна внутри есть, но&nbsp;её нужно усилить&nbsp;&mdash; страдает ёмкость из&#x2011;за отпусков, больничных, влётных задач."
          animDelay={2}
        />
        <ServicePoint
          title="Команды дизайна нет, а&nbsp;задачи есть"
          tags={['продюсер в&nbsp;стрессе']}
          description="Продюсер или маркетолог в&nbsp;стрессе, потому что некому отдать задачи."
          animDelay={3}
        />
        <ServicePoint
          title="Важная техническая работа"
          tags={['ресайзы', 'CRM&#x2011;рассылки']}
          description="Технически точные ресайзы баннеров, подготовка CRM&#x2011;рассылок&nbsp;&mdash; работа, которую сложно оптимизировать через AI."
          animDelay={4}
        />
        <ServicePoint
          title="Большой поток презентаций"
          tags={['отчётные периоды', 'конференции']}
          description="Особенно перед отчётными периодами и&nbsp;важными конференциями."
        />
      </ServiceGrid>

      {/* ── Как можем помочь ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Как можем вам помочь</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Отдельная команда продакшена"
          tags={['продюсер', 'лид', 'дизайнеры']}
          description="Сформируем конкретно под&nbsp;вас отдельную команду&nbsp;&mdash; продюсер, лид, ведущие дизайнеры, дизайнеры."
        />
        <ServicePoint
          title="Дизайн&#x2011;процесс"
          tags={['cost per asset', 'time to&nbsp;market']}
          description="Настроим процесс продакшена и&nbsp;снизим cost per asset, time per asset, time to&nbsp;market."
          animDelay={2}
        />
        <ServicePoint
          title="Аудит типовых задач"
          tags={['точки роста', 'проблемные стримы']}
          description="Опишем типовые задачи в&nbsp;вашей компании и&nbsp;точки роста по&nbsp;скорости, качеству, технологичности&nbsp;&mdash; особенно по&nbsp;нагруженным стримам."
          animDelay={3}
        />
        <ServicePoint
          title="Чек&#x2011;листы и&nbsp;технологии"
          tags={['AI&#x2011;сервисы']}
          description="Создадим чек&#x2011;листы для&nbsp;дизайн&#x2011;задач, список необходимых технологий и&nbsp;обеспечим доступ к&nbsp;AI&#x2011;сервисам."
          animDelay={4}
        />
        <ServicePoint
          title="Масштабирование"
          tags={['экстра задачи', 'выходные']}
          description="Увеличим ресурс и&nbsp;дизайн&#x2011;мощности на&nbsp;экстра задачи и&nbsp;в&nbsp;выходные по&nbsp;обговоренному тарифу."
        />
        <ServicePoint
          title="Кейс для&nbsp;наград"
          tags={['дизайн&#x2011;награды']}
          description="Сделаем кейс о&nbsp;совместной работе для&nbsp;дизайн&#x2011;наград."
          animDelay={2}
        />
      </ServiceGrid>

      {/* ── Как мы это делаем ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Как мы&nbsp;это делаем</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Погружение', description: 'Погрузимся в&nbsp;контекст, сформируем основные стримы и&nbsp;типовые задачи по&nbsp;ним', tag: 'старт' },
        { num: '2', title: 'Команда', description: 'Подберём лида, ведущего дизайнера, необходимых дизайнеров. Имеем базу талантов WANNABE с&nbsp;топовыми навыками + AI', tag: 'сборка' },
        { num: '3', title: 'Масштабирование', description: 'Поможем с&nbsp;ёмкостью команд&nbsp;&mdash; если нагрузка станет больше ожидаемого, подключим ещё дизайнеров по&nbsp;оговорённому прайсу', tag: 'рост' },
      ]} />

      <Section>
        <p className="font-color-dark-gray">Ежедневно в&nbsp;студии PINKMAN мы&nbsp;делаем десятки проектов и&nbsp;задач в&nbsp;топовом качестве, с&nbsp;невероятной скоростью, используя и&nbsp;тестируя самые новые технологии AI. В&nbsp;таком темпе мы&nbsp;быстро находим точки роста и&nbsp;корректируем процессы работы, тестируем разные подходы, чтобы в&nbsp;итоге этим можно было поделиться с&nbsp;нашими клиентами.</p>
      </Section>

      <Section><div className="text-h1-wrapper" style={{ marginBottom: 'var(--32px)' }}><h2 className="h1">Уже&nbsp;работаем с</h2></div>
        <div className="chip-list--lg">
          {['Яндекс', 'Сбер', 'ОТП', 'ГПБ'].map(c => (
            <span key={c} className="chip--lg">{c}</span>
          ))}
        </div>
      </Section>

      <ContactCard intro="Обсудим ваш проект?" />
    </>
  )
}
