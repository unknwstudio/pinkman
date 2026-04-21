import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import StatGrid from '@/components/StatGrid/StatGrid'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Креатив и съёмка имиджевых роликов',
  description: 'Сценарий, съёмка и постпродакшен — от историй в формате рилс до полноценного кино о ваших клиентах, сотрудниках, компании.',
  alternates: {
    canonical: 'https://pinkman.ru/creative-movie-production/',
  },
}

export default function CreativeMoviePage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Креатив и&nbsp;съёмка имиджевых бренд&#x2011;роликов</p></div></Section>
      <Section><div className="text-h2-wrapper"><h2>Сценарий, съёмка и&nbsp;постпродакшен&nbsp;— от&nbsp;историй в&nbsp;формате рилс до&nbsp;полноценного кино о&nbsp;ваших клиентах, сотрудниках, компании.</h2></div></Section>

      {/* ── Numbers ── */}
      <StatGrid items={[
        { value: '80+', label: 'рабочих часов освобождается', note: 'не тратите на сборку команды из отдельных специалистов' },
        { value: 'Full', label: 'цикл: стратегия → креатив → съёмка → постпродакшен', note: 'в партнёрстве с SHOWREAL' },
        { value: 'AI', label: 'визуализация сценария до старта съёмок', note: 'утверждаем стилистику без лишних итераций' },
      ]} />

      {/* ── Problems ── 8 items → 3+3+2 ── */}
      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Какие проблемы мы&nbsp;решаем</h2></div></Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['с чего начать?']} title="Нужна реальная съёмка, но&nbsp;не&nbsp;знаете с&nbsp;чего начать" />
        <ServicePoint tagsTop={['сложный процесс']} title="Нет времени разбираться в&nbsp;технически сложном процессе" />
        <ServicePoint tagsTop={['страх камеры']} title="Сотрудники боятся камер, не&nbsp;знаете как&nbsp;им помочь" />
        <ServicePoint tagsTop={['нет сценариста']} title="В&nbsp;команде нет или&nbsp;мало креаторов и&nbsp;сценаристов" />
        <ServicePoint tagsTop={['охваты']} title="Проседают охваты и&nbsp;просмотры&nbsp;— нужно видео&#x2011;миллионник" />
        <ServicePoint tagsTop={['слишком много исполнителей']} title="Нет партнёра от&nbsp;идеи до&nbsp;финального ролика" />
        <ServicePoint tagsTop={['скорость']} title="Нет времени на&nbsp;раскачку и&nbsp;сплочение специалистов" />
        <ServicePoint tagsTop={['репутация']} title="Высокие репутационные риски&nbsp;— проекты для&nbsp;бренда" />
      </ServicePointRow>

      {/* ── What we offer ── */}
      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Что мы&nbsp;предлагаем</h2></div>
        <p className="font-color-dark-gray">Комплексную поддержку в&nbsp;стратегии, креативе, съёмках и&nbsp;постпродакшене&nbsp;— в&nbsp;партнёрстве с&nbsp;видеопродакшн&#x2011;студией <strong>SHOWREAL</strong>.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Единый партнёр" tags={['все типы задач','один контакт']} description="Выступаем единым партнёром для&nbsp;всех типов задач&nbsp;— экономим ваше время на&nbsp;коммуникацию по&nbsp;статусам." />
        <ServicePoint title="Оптимальная конфигурация" tags={['под ваш запрос','прозрачная стоимость']} description="Стоимость «от и&nbsp;до» с&nbsp;учётом техники и&nbsp;степени вовлечения режиссёра&nbsp;— подберём оптимальную конфигурацию." />
        <ServicePoint title="База талантов" tags={['любая задача','в штате и пул']} description="Имеем необходимых специалистов в&nbsp;штате и&nbsp;базу талантов для&nbsp;любого типа задачи." />
        <ServicePoint title="Встроенный юнит" tags={['визуальный контроль','производственная дисциплина']} description="Работаем как&nbsp;встроенный юнит вашей команды&nbsp;— с&nbsp;визуальным контролем и&nbsp;производственной дисциплиной." />
      </ServiceGrid>

      {/* ── Team ── */}
      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Команда</h2></div></Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['управление']} title="Продюсер" description="Контролирует статусы, сроки, координирует команду." />
        <ServicePoint tagsTop={['идея']} title="Креативный директор" description="Придумывает идеи, лидирует проект от&nbsp;брифа до&nbsp;сдачи." />
        <ServicePoint tagsTop={['история']} title="Режиссёр&#x2011;сценарист" description="Отвечает за&nbsp;создание сценария и&nbsp;его реализацию в&nbsp;кадре." />
        <ServicePoint tagsTop={['визуал']} title="Арт&#x2011;директор" description="Следит за&nbsp;визуальной рамкой и&nbsp;идеей до&nbsp;публикации." />
        <ServicePoint tagsTop={['AI + 3D']} title="AI&#x2011;дизайнеры" description="Мультидисциплинарные: 3D, моушн и&nbsp;AI для&nbsp;зрелищного монтажа." />
        <ServicePoint tagsTop={['звук']} title="Саунд&#x2011;дизайнеры" description="Озвучка и&nbsp;музыкальное сопровождение с&nbsp;применением AI&#x2011;технологий." />
      </ServicePointRow>

      {/* ── Audience ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Бренд&#x2011;директор" tags={['имидж бренда']} description="Развиваете бренд и&nbsp;запускаете проекты с&nbsp;реальными съёмками людей&nbsp;— от&nbsp;небольших роликов до&nbsp;полноценного кино." />
        <ServicePoint title="Директор по&nbsp;маркетингу" tags={['репутационные риски']} description="Работаете с&nbsp;проектами, где&nbsp;высокие репутационные риски и&nbsp;большие ожидания от&nbsp;результата." />
        <ServicePoint title="Креативный директор" tags={['вовлечённая команда']} description="Хотите работать с&nbsp;командой, которая понимает нестандартные задачи и&nbsp;готова в&nbsp;них разбираться." />
        <ServicePoint title="Руководитель продакшена" tags={['высокое качество','в срок']} description="Важно получить контент высокого качества в&nbsp;оговоренные сроки на&nbsp;должном техническом уровне." />
      </ServiceGrid>

      {/* ── What you get ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что вы&nbsp;получите</h2></div></Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['результат']} title="Качественные имиджевые ролики в&nbsp;срок и&nbsp;в&nbsp;рамках бюджета" />
        <ServicePoint tagsTop={['полный цикл']} title="Стратегия, креатив, съёмки и&nbsp;постпродакшен в&nbsp;одних руках" />
        <ServicePoint tagsTop={['80+ часов']} title="Высвобождаем 80+ рабочих часов продюсера и&nbsp;команды" description="Не&nbsp;нужно подбирать команду (40&nbsp;ч), фиксировать договорённости (20&nbsp;ч) и&nbsp;вести статусы с&nbsp;каждым (20&nbsp;ч)." />
        <ServicePoint tagsTop={['люди в кадре']} title="Помогаем людям без&nbsp;актёрского опыта увереннее чувствовать себя в&nbsp;кадре" />
      </ServicePointRow>

      {/* ── Process ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Как&nbsp;работаем</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Бриф', description: 'Погружаемся в&nbsp;контекст, цели и&nbsp;ожидания. AI-визуализация сценария для&nbsp;быстрого утверждения', tag: 'старт' },
        { num: '2', title: 'Сценарий', description: 'Создаём авторский сценарий и&nbsp;раскадровку. Стилшоты для&nbsp;утверждения визуального языка', tag: 'идея' },
        { num: '3', title: 'Съёмка', description: 'Производим съёмку на&nbsp;профессиональные камеры. Работаем с&nbsp;актёрами и&nbsp;сотрудниками бренда', tag: 'продакшен' },
        { num: '4', title: 'Постпродакшен', description: 'Монтаж, цветокоррекция, звук, моушн. Технически верные итоговые ролики под&nbsp;все форматы', tag: 'финал' },
        { num: '5', title: 'Сдача', description: 'Сопровождаем до&nbsp;финальной приёмки. Еженедельные синки и&nbsp;прозрачные статусы на&nbsp;всём пути', tag: 'итог' },
      ]} />

      {/* ── Cases & SHOWREAL ── */}
      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Кейсы</h2></div>
        <div className="list-wrapper padding-32px" style={{paddingTop:'var(--16px)'}}><div className="list">
          {[
            ['ПСБ','Съёмки руководителей в&nbsp;рамках спецпроекта о&nbsp;компании'],
            ['СБЕР','Бренд&#x2011;шоурил с&nbsp;реальными съёмками команды'],
            ['Спецпроекты','Проекты с&nbsp;Константином Хабенским и&nbsp;Елизаветой Боярской'],
            ['TVC&#x2011;ролики','Chupa Chups, ОТП Банк, LG, Россельхоз Банк, Delivery Club, Мираторг'],
            ['Горизонтальные форматы','Ролики для&nbsp;Яндекса, Кинопоиска, KEEPMOSCOW'],
          ].map(([name, desc],i) => (
            <div key={i} className="list-item-wrapper"><div className="bullet-wrapper-left">
              <h3 dangerouslySetInnerHTML={{__html:`<strong>${name}</strong>&nbsp;— ${desc}`}}/>
            </div></div>
          ))}
        </div></div>
      </Section>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'var(--32px)'}}><h2 className="h1">В&nbsp;партнёрстве с&nbsp;SHOWREAL</h2></div>
        <div className="chip-list--lg">
          <Link className="chip--lg" href="https://disk.360.yandex.ru/d/ofWTdhABTZUnQg" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Креативные ролики →</Link>
          <Link className="chip--lg" href="https://disk.360.yandex.ru/d/XfGx5KId76f5XQ" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Интервью →</Link>
        </div>
      </Section>

      <ContactCard intro="Обсудим ваш ролик?" role="Управляющий партнер Юрий Григоренко&nbsp;— расскажет про&nbsp;состав команды, сроки и&nbsp;стоимость под&nbsp;ваш проект." />
    </>
  )
}
