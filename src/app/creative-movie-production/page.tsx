import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Креатив и съёмка имиджевых роликов',
  description: 'Сценарий, съёмка и постпродакшен — от историй в формате рилс до полноценного кино о ваших клиентах, сотрудниках, компании.',
  alternates: {
    canonical: 'https://pinkman.ru/creative-movie-production/',
  },
}

const teamItems = [
  '<strong>Продюсер</strong>&nbsp;— контролирует статусы, сроки, координирует команду',
  '<strong>Креативный директор</strong>&nbsp;— придумывает идеи, лидирует проект',
  '<strong>Режиссёр&#x2011;сценарист</strong>&nbsp;— отвечает за&nbsp;создание сценария и&nbsp;его реализацию',
  '<strong>Арт&#x2011;директор</strong>&nbsp;— следит за&nbsp;визуальной рамкой и&nbsp;идеей до&nbsp;публикации',
  '<strong>AI&#x2011;дизайнеры</strong>&nbsp;— мультидисциплинарные, в&nbsp;связке с&nbsp;3D, моушн и&nbsp;AI для&nbsp;зрелищного монтажа',
  '<strong>Саунд&#x2011;дизайнеры</strong>&nbsp;— озвучка и&nbsp;музыкальное сопровождение с&nbsp;применением AI&#x2011;технологий',
]

const processSteps = [
  'На&nbsp;брифе погружаемся в&nbsp;контекст',
  'Создаём авторский сценарий',
  'Презентуем подход с&nbsp;максимально точной AI&#x2011;визуализацией для&nbsp;утверждения сценария, раскадровки, стилистики',
  'Производим съёмку на&nbsp;профессиональные камеры',
  'Готовим качественный монтаж',
  'Готовим технически верные итоговые ролики',
  'Проводим еженедельные синки и&nbsp;статусы',
  'Ведём общее облако с&nbsp;чистой структурой и&nbsp;неймингом файлов',
  'Сопровождаем реализацию до&nbsp;финальной сдачи',
]

const caseItems = [
  ['ПСБ','Съёмки руководителей в&nbsp;рамках спецпроекта о&nbsp;компании'],
  ['СБЕР','Бренд&#x2011;шоурил с&nbsp;реальными съёмками команды'],
  ['Спецпроекты','Проекты с&nbsp;Константином Хабенским и&nbsp;Елизаветой Боярской'],
  ['TVC&#x2011;ролики','Chupa Chups, ОТП Банк, LG, Россельхоз Банк, Delivery Club, Мираторг'],
  ['Горизонтальные форматы','Ролики для&nbsp;Яндекса, Кинопоиска, KEEPMOSCOW'],
]

export default function CreativeMoviePage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Креатив и&nbsp;съёмка имиджевых бренд&#x2011;роликов</p></div></Section>
      <Section><div className="text-h2-wrapper"><h2>Сценарий, съёмка и&nbsp;постпродакшен&nbsp;— от&nbsp;историй в&nbsp;формате рилс до&nbsp;полноценного кино о&nbsp;ваших клиентах, сотрудниках, компании.</h2></div></Section>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Какие проблемы мы&nbsp;решаем</h2></div></Section>
      <ServiceGrid>
        <ServicePoint tagsTop={['с чего начать?']} title="Нужна реальная съёмка сотрудников или&nbsp;клиентов, но&nbsp;не&nbsp;знаете с&nbsp;чего начать" />
        <ServicePoint tagsTop={['сложный процесс']} title="Нет времени разбираться в&nbsp;технически сложном процессе съёмок" />
        <ServicePoint tagsTop={['страх камеры']} title="Сотрудники боятся камер, не&nbsp;знаете как&nbsp;им помочь расслабиться" />
        <ServicePoint tagsTop={['нет сценариста']} title="В&nbsp;команде нет или&nbsp;мало креаторов и&nbsp;сценаристов" />
        <ServicePoint tagsTop={['охваты']} title="Проседают охваты и&nbsp;просмотры&nbsp;— нужно видео&#x2011;миллионник" />
        <ServicePoint tagsTop={['слишком много исполнителей']} title="Нет партнёра, который закроет весь спектр: от&nbsp;идеи до&nbsp;финального ролика" />
        <ServicePoint tagsTop={['скорость']} title="Нет времени на&nbsp;раскачку и&nbsp;сплочение разных специалистов" />
        <ServicePoint tagsTop={['репутация']} title="Высокие репутационные риски&nbsp;— проекты для&nbsp;бренда компании" />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Что мы&nbsp;предлагаем</h2></div>
        <p className="font-color-dark-gray">Комплексную поддержку в&nbsp;стратегии, креативе, съёмках и&nbsp;постпродакшене&nbsp;— в&nbsp;партнёрстве с&nbsp;видеопродакшн&#x2011;студией <strong>SHOWREAL</strong>.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Единый партнёр" tags={['все типы задач','один контакт']} description="Выступаем единым партнёром для&nbsp;всех типов задач&nbsp;— экономим ваше время на&nbsp;коммуникацию по&nbsp;статусам." />
        <ServicePoint title="Оптимальная конфигурация" tags={['под ваш запрос','прозрачная стоимость']} description="Стоимость «от и&nbsp;до» с&nbsp;учётом техники и&nbsp;степени вовлечения режиссёра&nbsp;— подберём оптимальную конфигурацию команды." />
        <ServicePoint title="База талантов" tags={['любая задача','в штате и пул']} description="Имеем необходимых специалистов в&nbsp;штате и&nbsp;базу талантов для&nbsp;любого типа задачи." />
        <ServicePoint title="Встроенный юнит" tags={['визуальный контроль','производственная дисциплина']} description="Работаем как&nbsp;встроенный юнит вашей команды&nbsp;— с&nbsp;визуальным контролем и&nbsp;производственной дисциплиной." />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Команда</h2></div>
        <div className="list-wrapper padding-32px"><div className="list">
          {teamItems.map((s,i) => (
            <div key={i} className="list-item-wrapper"><div className="bullet-wrapper-left"><h3 dangerouslySetInnerHTML={{__html:s}}/></div></div>
          ))}
        </div></div>
      </Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Бренд&#x2011;директор" tags={['имидж бренда']} description="Развиваете бренд и&nbsp;запускаете проекты с&nbsp;реальными съёмками людей&nbsp;— от&nbsp;небольших роликов до&nbsp;полноценного кино." />
        <ServicePoint title="Директор по&nbsp;маркетингу" tags={['репутационные риски']} description="Работаете с&nbsp;проектами, где&nbsp;высокие репутационные риски и&nbsp;большие ожидания от&nbsp;результата." />
        <ServicePoint title="Креативный директор" tags={['вовлечённая команда']} description="Хотите работать с&nbsp;командой, которая понимает нестандартные задачи и&nbsp;готова в&nbsp;них разбираться." />
        <ServicePoint title="Руководитель продакшена" tags={['высокое качество','в срок']} description="Важно получить контент высокого качества в&nbsp;оговоренные сроки на&nbsp;должном техническом уровне." />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что вы&nbsp;получите</h2></div></Section>
      <ServiceGrid>
        <ServicePoint tagsTop={['результат']} title="Качественные имиджевые ролики в&nbsp;срок и&nbsp;в&nbsp;рамках бюджета" />
        <ServicePoint tagsTop={['полный цикл']} title="Стратегия, креатив, съёмки и&nbsp;постпродакшен в&nbsp;одних руках" />
        <ServicePoint tagsTop={['80+ часов']} title="Высвобождаем 80+ рабочих часов продюсера и&nbsp;команды" description="Не&nbsp;нужно подбирать команду из&nbsp;отдельных специалистов (40&nbsp;ч), фиксировать договорённости (20&nbsp;ч) и&nbsp;вести статусы с&nbsp;каждым (20&nbsp;ч)." />
        <ServicePoint tagsTop={['люди в кадре']} title="Помогаем людям без&nbsp;актёрского опыта увереннее чувствовать себя в&nbsp;кадре" />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Как&nbsp;работаем</h2></div>
        <div className="list-wrapper padding-32px"><div className="list">
          {processSteps.map((s,i) => (
            <div key={i} className="list-item-wrapper"><div className="bullet-wrapper-left">
              <h3 dangerouslySetInnerHTML={{__html:`0${i+1}.&nbsp;${s}`}}/>
            </div></div>
          ))}
        </div></div>
      </Section>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Кейсы</h2></div>
        <div className="list-wrapper padding-32px"><div className="list">
          {caseItems.map(([name, desc],i) => (
            <div key={i} className="list-item-wrapper"><div className="bullet-wrapper-left">
              <h3 dangerouslySetInnerHTML={{__html:`<strong>${name}</strong>&nbsp;— ${desc}`}}/>
            </div></div>
          ))}
        </div></div>
      </Section>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1.5rem'}}><h2 className="h1">В&nbsp;партнёрстве с&nbsp;SHOWREAL</h2></div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
          <Link className="text-small is__chip" href="https://disk.360.yandex.ru/d/ofWTdhABTZUnQg" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Креативные ролики →</Link>
          <Link className="text-small is__chip" href="https://disk.360.yandex.ru/d/XfGx5KId76f5XQ" target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}}>Интервью →</Link>
        </div>
      </Section>

      <ContactCard intro="Обсудим ваш ролик?" role="Аккаунт&#x2011;директор Юрий Григоренко&nbsp;— расскажет про&nbsp;состав команды, сроки и&nbsp;стоимость под&nbsp;ваш проект." />
    </>
  )
}
