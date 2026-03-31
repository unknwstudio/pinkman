import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Аутстафф AI-дизайнеров',
  description: 'Расширяем вашу команду AI-дизайнерами с опытом в корпоративных проектах.',
  alternates: {
    canonical: 'https://pinkman.ru/outstaff-ai/',
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

      <ServiceGrid>
        <ServicePoint tagsTop={['↓cost']} title="Стоимость ассета снижается" />
        <ServicePoint tagsTop={['↓time']} title="Time&nbsp;to&nbsp;market сокращается" />
        <ServicePoint tagsTop={['×2']} title="Дизайн&#x2011;мощность без&nbsp;расширения штата" />
        <ServicePoint tagsTop={['AI→']} title="Доступ к&nbsp;инструментам через партнёра" />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы получаете</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="AI&#x2011;дизайнеры" tags={['проверенные навыки','под&nbsp;ваши задачи']} description="Дизайнеры с&nbsp;подтверждёнными AI&#x2011;навыками, подобранные под&nbsp;ваши конкретные типы задач." />
        <ServicePoint title="Команда под&nbsp;ключ" tags={['продюсер','лид','дизайнеры']} description="Полная конфигурация под&nbsp;масштаб проекта&nbsp;— без&nbsp;самостоятельной сборки." />
        <ServicePoint title="Дизайн&#x2011;процесс" tags={['точки роста','чеклисты']} description="Точки роста и&nbsp;чеклисты задач. Прозрачная работа&nbsp;— без&nbsp;чёрных ящиков." />
        <ServicePoint title="Доступ к&nbsp;AI&#x2011;сервисам" tags={['через Pinkman','вне контура']} description="Инструменты, недоступные в&nbsp;корпоративном контуре,&nbsp;— через Pinkman как&nbsp;партнёра." />
        <ServicePoint title="Масштабирование" tags={['пиковая нагрузка','без&nbsp;аврала']} description="Гибкий рост в&nbsp;пиковую нагрузку&nbsp;— по&nbsp;обговоренному тарифу, без&nbsp;аврала." />
        <ServicePoint title="Кейс для&nbsp;наград" tags={['дизайн&#x2011;награды']} description="Оформляем кейс для&nbsp;дизайн&#x2011;наград по&nbsp;итогам сотрудничества." />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Для&nbsp;кого</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Директор по&nbsp;маркетингу" tags={['нужны результаты','найм закрыт']} description="Результаты нужны, найм закрыт&nbsp;— аутстафф закрывает разрыв без&nbsp;расширения штата." />
        <ServicePoint title="Руководитель продакшена" tags={['перегруженные стримы']} description="Стримы перегружены, решения внутри нет&nbsp;— команда встраивается с&nbsp;первого дня." />
        <ServicePoint title="Продюсер" tags={['AI&#x2011;уровень команды']} description="Нет уверенности в&nbsp;AI&#x2011;уровне&nbsp;— подтверждённые навыки и&nbsp;прозрачный процесс снимают риск." />
        <ServicePoint title="Компании с&nbsp;бюджетом на&nbsp;аутсорс" tags={['активные кампании']} description="Бюджет есть, кампании идут&nbsp;— нужна команда, которая сразу в&nbsp;деле." />
        <ServicePoint title="Корпорации с&nbsp;закрытым контуром" tags={['AI заблокирован']} description="AI&#x2011;инструменты заблокированы внутри&nbsp;— работаем через Pinkman, обходя ограничения." />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Как&nbsp;работаем</h2></div>
        <div className="list-wrapper padding-32px"><div className="list">
          {['Погружаемся в&nbsp;контекст, команду и&nbsp;типовые задачи','Формируем конфигурацию AI&#x2011;команды под&nbsp;вашу специфику','Настраиваем дизайн&#x2011;процесс и&nbsp;чеклисты задач','Работаем, масштабируемся при&nbsp;пиках, делаем кейс'].map((s,i) => (
            <div key={i} className="list-item-wrapper"><div className="bullet-wrapper-left"><h3 dangerouslySetInnerHTML={{__html:`0${i+1}.&nbsp;${s}`}}/></div></div>
          ))}
        </div></div>
      </Section>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1.5rem'}}><h2 className="h1">Уже&nbsp;работаем с</h2></div>
        <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
          {['Яндекс AdTech','Яндекс Еда','Яндекс Сплит','ВТБ','ОТП\u00a0Банк','Газпромбанк','Открытая Кухня'].map(c => (
            <p key={c} className="text-small is__chip">{c}</p>
          ))}
        </div>
      </Section>

      <ContactCard intro="Обсудим ваши задачи?" role="Аккаунт&#x2011;директор Юрий Григоренко&nbsp;— подберёт дизайнеров и&nbsp;расскажет, как&nbsp;это работает." />
    </>
  )
}
