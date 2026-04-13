import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import StatGrid from '@/components/StatGrid/StatGrid'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Аутстафф AI-дизайнеров',
  description: 'Расширяем вашу команду AI-дизайнерами с опытом в корпоративных проектах.',
  alternates: {
    canonical: 'https://pinkman.ru/outstaff-designers/ai/',
  },
}

export default function OutstaffAiPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Аутстафф AI&#x2011;дизайнеров</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>AI&#x2011;дизайнеры в&nbsp;вашу команду&nbsp;— без&nbsp;найма, сразу в&nbsp;работу. С&nbsp;доступом к&nbsp;инструментам, которые блокирует корпоративный контур.</h2></div></Section>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Ситуация</h2></div>
        <p className="font-color-dark-gray">Бюджет урезан. Найм заморожен. Задач меньше не&nbsp;стало&nbsp;— больше. Внедрить AI хочется, но&nbsp;инструменты блокирует контур, команда не&nbsp;умеет, а&nbsp;оценить уровень изнутри нечем.</p>
      </Section>

      {/* ── 4 impact metrics ── */}
      <StatGrid items={[
        { value: '↓cost', label: 'Стоимость ассета снижается' },
        { value: '↓time', label: 'Time‑to‑market сокращается' },
        { value: '×2', label: 'Дизайн‑мощность без расширения штата' },
        { value: 'AI→', label: 'Доступ к инструментам через партнёра' },
      ]} />

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы получаете</h2></div></Section>

      {/* ── Top 3 items in a row ── */}
      <ServicePointRow>
        <ServicePoint
          tagsTop={['люди']}
          title="AI&#x2011;дизайнеры"
          description="Дизайнеры с&nbsp;подтверждёнными AI&#x2011;навыками, подобранные под&nbsp;ваши конкретные типы задач"
        />
        <ServicePoint
          tagsTop={['команда']}
          title="Под&nbsp;ключ"
          description="Полная конфигурация под&nbsp;масштаб проекта — продюсер, лид, дизайнеры — без&nbsp;самостоятельной сборки"
        />
        <ServicePoint
          tagsTop={['процесс']}
          title="Дизайн&#x2011;процесс"
          description="Точки роста и&nbsp;чеклисты задач. Прозрачная работа&nbsp;— без&nbsp;чёрных ящиков"
        />
      </ServicePointRow>

      {/* ── Remaining items ── */}
      <ServiceGrid spaced={false}>
        <ServicePoint title="Доступ к&nbsp;AI&#x2011;сервисам" tags={['через Pinkman','вне контура']} description="Инструменты, недоступные в&nbsp;корпоративном контуре,&nbsp;— через Pinkman как&nbsp;партнёра." />
        <ServicePoint title="Масштабирование" tags={['пиковая нагрузка','без&nbsp;аврала']} description="Гибкий рост в&nbsp;пиковую нагрузку&nbsp;— по&nbsp;обговоренному тарифу, без&nbsp;аврала." animDelay={2} />
        <ServicePoint title="Кейс для&nbsp;наград" tags={['дизайн&#x2011;награды']} description="Оформляем кейс для&nbsp;дизайн&#x2011;наград по&nbsp;итогам сотрудничества." animDelay={3} />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Для&nbsp;кого</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Директор по&nbsp;маркетингу" tags={['нужны результаты','найм закрыт']} description="Результаты нужны, найм закрыт&nbsp;— аутстафф закрывает разрыв без&nbsp;расширения штата." />
        <ServicePoint title="Руководитель продакшена" tags={['перегруженные стримы']} description="Стримы перегружены, решения внутри нет&nbsp;— команда встраивается с&nbsp;первого дня." animDelay={2} />
        <ServicePoint title="Продюсер" tags={['AI&#x2011;уровень команды']} description="Нет уверенности в&nbsp;AI&#x2011;уровне&nbsp;— подтверждённые навыки и&nbsp;прозрачный процесс снимают риск." animDelay={3} />
        <ServicePoint title="Корпорации с&nbsp;закрытым контуром" tags={['AI заблокирован']} description="AI&#x2011;инструменты заблокированы внутри&nbsp;— работаем через Pinkman, обходя ограничения." animDelay={4} />
      </ServiceGrid>

      {/* ── How we work — process steps ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Как&nbsp;работаем</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Погружение', description: 'Погружаемся в&nbsp;контекст, команду и&nbsp;типовые задачи', tag: 'старт' },
        { num: '2', title: 'Конфигурация', description: 'Формируем конфигурацию AI&#x2011;команды под&nbsp;вашу специфику', tag: 'сборка' },
        { num: '3', title: 'Настройка', description: 'Настраиваем дизайн&#x2011;процесс и&nbsp;чеклисты задач', tag: 'процесс' },
        { num: '4', title: 'Результат', description: 'Работаем, масштабируемся при&nbsp;пиках, оформляем кейс', tag: 'итог' },
      ]} />

      <Section><div className="text-h1-wrapper" style={{marginBottom:'var(--32px)'}}><h2 className="h1">Уже&nbsp;работаем с</h2></div>
        <div className="chip-list--lg">
          {['Яндекс AdTech','Яндекс Еда','Яндекс Сплит','ВТБ','ОТП\u00a0Банк','Газпромбанк','Открытая Кухня'].map(c => (
            <span key={c} className="chip--lg">{c}</span>
          ))}
        </div>
      </Section>

      <ContactCard intro="Обсудим ваши задачи?" role="Управляющий партнер Юрий Григоренко&nbsp;— подберёт дизайнеров и&nbsp;расскажет, как&nbsp;это работает." />
    </>
  )
}
