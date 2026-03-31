import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import StatGrid from '@/components/StatGrid/StatGrid'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'UX\u2011исследования при редизайне',
  description: 'Помогаем вносить изменения в продукт без риска просадки метрик. Проверяем сценарии на реальных пользователях до релиза.',
  alternates: {
    canonical: 'https://pinkman.ru/ux-research-redesign/',
  },
}

const cases = [
  ['VK','Исследования каждые&nbsp;2 недели по&nbsp;разным продуктам: от&nbsp;запуска новых до&nbsp;мониторинга текущих. VK&nbsp;Студия простора, VK&nbsp;Видео&nbsp;Live'],
  ['Аскона','Определили, где формируется барьер и&nbsp;какие изменения вернут контроль над&nbsp;конверсией'],
  ['ВТБ','Провели исследования и&nbsp;увеличили конверсию страниц дебетовых карт'],
  ['ОТП Банк','Помогли исправить низкую конверсию из&nbsp;продуктовых страниц в&nbsp;заявку'],
  ['Overgear','Провели исследования перед редизайном и&nbsp;масштабированием'],
]

export default function UxResearchPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">UX&#x2011;исследования при&nbsp;редизайне и&nbsp;запуске обновлений</p></div></Section>
      <Section><div className="text-h2-wrapper"><h2>Помогаем вносить изменения в&nbsp;продукт перед редизайном, после релиза фич и&nbsp;запуска новой стратегии&nbsp;— без&nbsp;риска просадки метрик.</h2></div></Section>

      {/* ── When we help — 3+3 horizontal rows ── */}
      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">В&nbsp;каких ситуациях поможем</h2></div></Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['с чего начать?']} title="Планируете редизайн, но&nbsp;не&nbsp;понимаете фокус и&nbsp;показатели" />
        <ServicePoint tagsTop={['прототип']} title="Новая версия готова, но&nbsp;нет уверенности, что&nbsp;она востребована" />
        <ServicePoint tagsTop={['бюджет и сроки']} title="Хотите разумно подойти к&nbsp;бюджету перед внедрением изменений" />
      </ServicePointRow>
      <ServicePointRow spaced={false}>
        <ServicePoint tagsTop={['после запуска']} title="После запуска метрики не&nbsp;растут или&nbsp;падают" />
        <ServicePoint tagsTop={['конверсия']} title="Есть трафик, но&nbsp;слабая конверсия" />
        <ServicePoint tagsTop={['что менять?']} title="Команда не&nbsp;уверена, что именно нужно изменить" />
      </ServicePointRow>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Что мы&nbsp;предлагаем</h2></div>
        <p className="font-color-dark-gray">Прежде чем вкладываться в&nbsp;редизайн&nbsp;— проверим ключевые сценарии на&nbsp;реальных пользователях, покажем, где теряется конверсия и&nbsp;что нужно изменить, чтобы редизайн дал рост, а&nbsp;не&nbsp;просто новый визуал.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Встроенный юнит" tags={['ваша команда','наш процесс']} description="Работаем как&nbsp;встроенный исследовательский юнит&nbsp;— вливаемся в&nbsp;ваши процессы с&nbsp;первого дня." />
        <ServicePoint title="Реальные пользователи" tags={['до релиза','без сюрпризов']} description="Проверяем ключевые сценарии до&nbsp;финального релиза&nbsp;— чтобы метрики не&nbsp;падали после запуска." animDelay={2} />
        <ServicePoint title="Прозрачные инсайты" tags={['не только «где»','но и «почему»']} description="На каждом этапе прозрачно показываем все идеи и&nbsp;инсайты. Формируем список рекомендаций в&nbsp;наглядной презентации." animDelay={3} />
      </ServiceGrid>

      {/* ── What you get — numbered horizontal ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что вы&nbsp;получите</h2></div></Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['01']} title="Где теряются пользователи" description="Чётко показываем шаги, на&nbsp;которых ломается сценарий&nbsp;— без&nbsp;догадок." />
        <ServicePoint tagsTop={['02']} title="Причины потерь конверсии" description="Не&nbsp;просто «где», а&nbsp;«почему это происходит»&nbsp;— с&nbsp;цитатами и&nbsp;паттернами поведения." />
        <ServicePoint tagsTop={['03']} title="Приоритетный список изменений" description="Что исправить в&nbsp;первую очередь, чтобы повлиять на&nbsp;метрики&nbsp;— расставлено по&nbsp;приоритету." />
      </ServicePointRow>
      {/* 4th item as wide standalone */}
      <ServiceGrid spaced={false}>
        <ServicePoint tagsTop={['04']} title="План внедрения" description="Понятный объём задач на&nbsp;ближайшие 1–2&nbsp;спринта&nbsp;— команда сразу знает, что делать." />
      </ServiceGrid>

      {/* ── Pricing ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Сроки и&nbsp;стоимость</h2></div></Section>
      <StatGrid items={[
        { value: '≤3 нед', label: 'на 1 сегмент аудитории', note: '+1 неделя за каждый доп. сегмент' },
        { value: 'от 400К', label: 'за исследование 1 сегмента', note: '+от 200К за каждый доп. сегмент' },
      ]} />

      {/* ── How we work — process steps ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Как&nbsp;работаем</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Брифинг', description: 'На&nbsp;брифе погружаемся в&nbsp;контекст задачи и&nbsp;продукта', tag: 'старт' },
        { num: '2', title: 'Подготовка', description: 'Готовим сценарий исследования и&nbsp;все необходимые артефакты', tag: 'план' },
        { num: '3', title: 'Исследование', description: 'Проверяем ключевые сценарии на&nbsp;реальных пользователях', tag: 'тест' },
        { num: '4', title: 'Анализ', description: 'Анализируем точки потерь и&nbsp;паттерны поведения', tag: 'данные' },
        { num: '5', title: 'Результат', description: 'Формируем конкретные рекомендации в&nbsp;формате презентации', tag: 'итог' },
      ]} />

      {/* ── Команда ── */}
      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Команда</h2></div>
        <div className="list-wrapper padding-32px"><div className="list">
          {[
            '<strong>Продюсер</strong>&nbsp;— контролирует статусы, сроки, координирует команду',
            '<strong>Ведущий исследователь</strong>&nbsp;— настраивает исследовательские процессы, курирует работу команды, формирует список рекомендаций',
            '<strong>Исследователь</strong>&nbsp;— планирует и&nbsp;проводит исследование, на&nbsp;каждом этапе прозрачно показывает все идеи и&nbsp;инсайты',
          ].map((s,i) => (
            <div key={i} className="list-item-wrapper"><div className="bullet-wrapper-left"><h3 dangerouslySetInnerHTML={{__html:s}}/></div></div>
          ))}
        </div></div>
      </Section>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Кейсы</h2></div>
        <div className="list-wrapper padding-32px"><div className="list">
          {cases.map(([name, desc], i) => (
            <div key={i} className="list-item-wrapper"><div className="bullet-wrapper-left">
              <h3 dangerouslySetInnerHTML={{__html:`<strong>${name}</strong>&nbsp;— ${desc}`}}/>
            </div></div>
          ))}
        </div></div>
      </Section>

      <ContactCard intro="Обсудим ваш продукт?" role="Аккаунт&#x2011;директор Юрий Григоренко&nbsp;— расскажет про&nbsp;состав команды, сроки и&nbsp;стоимость под&nbsp;ваш проект." />
    </>
  )
}
