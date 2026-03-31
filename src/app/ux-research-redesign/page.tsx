import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'UX\u2011исследования при редизайне',
  description: 'Помогаем вносить изменения в продукт без риска просадки метрик. Проверяем сценарии на реальных пользователях до релиза.',
  alternates: {
    canonical: 'https://pinkman.ru/ux-research-redesign/',
  },
}

const steps = [
  'На&nbsp;брифе погружаемся в&nbsp;контекст задачи и&nbsp;продукта',
  'Готовим сценарий исследования и&nbsp;все необходимые артефакты',
  'Проверяем ключевые сценарии на&nbsp;реальных пользователях',
  'Анализируем точки потерь',
  'Формируем конкретные рекомендации в&nbsp;формате презентации',
]

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

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">В&nbsp;каких ситуациях поможем</h2></div></Section>
      <ServiceGrid>
        <ServicePoint tagsTop={['с чего начать?']} title="Планируете редизайн, но&nbsp;не&nbsp;понимаете фокус и&nbsp;показатели" />
        <ServicePoint tagsTop={['прототип']} title="Новая версия готова, но&nbsp;нет уверенности, что&nbsp;она востребована" />
        <ServicePoint tagsTop={['бюджет и сроки']} title="Хотите разумно подойти к&nbsp;бюджету перед внедрением изменений" />
        <ServicePoint tagsTop={['после запуска']} title="После запуска метрики не&nbsp;растут или&nbsp;падают" />
        <ServicePoint tagsTop={['конверсия']} title="Есть трафик, но&nbsp;слабая конверсия" />
        <ServicePoint tagsTop={['что менять?']} title="Команда не&nbsp;уверена, что именно нужно изменить" />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Что мы&nbsp;предлагаем</h2></div>
        <p className="font-color-dark-gray">Прежде чем вкладываться в&nbsp;редизайн&nbsp;— проверим ключевые сценарии на&nbsp;реальных пользователях, покажем, где теряется конверсия и&nbsp;что нужно изменить, чтобы редизайн дал рост, а&nbsp;не&nbsp;просто новый визуал.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Встроенный юнит" tags={['ваша команда','наш процесс']} description="Работаем как&nbsp;встроенный исследовательский юнит&nbsp;— вливаемся в&nbsp;ваши процессы с&nbsp;первого дня." />
        <ServicePoint title="Реальные пользователи" tags={['до релиза','без сюрпризов']} description="Проверяем ключевые сценарии до&nbsp;финального релиза&nbsp;— чтобы метрики не&nbsp;падали после запуска." />
        <ServicePoint title="Прозрачные инсайты" tags={['не только «где»','но и «почему»']} description="На каждом этапе прозрачно показываем все идеи и&nbsp;инсайты. Формируем список рекомендаций в&nbsp;наглядной презентации." />
      </ServiceGrid>

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

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Директор по&nbsp;продукту" tags={['редизайн продукта']} description="Планируете редизайн всего продукта или&nbsp;его отдельных частей&nbsp;— нужна исследовательская база для&nbsp;уверенных решений." />
        <ServicePoint title="Владелец продукта" tags={['запуск фич']} description="Запускаете обновление разделов и&nbsp;внедряете новые фичи&nbsp;— хотите проверить гипотезы до&nbsp;релиза." />
        <ServicePoint title="Директор по&nbsp;маркетингу" tags={['метрики','конверсия']} description="Трафик есть, конверсия слабая&nbsp;— нужно понять, где именно ломается сценарий и&nbsp;почему." />
        <ServicePoint title="Продуктовый маркетолог" tags={['новая стратегия']} description="Запускаете новую стратегию или&nbsp;инициативу&nbsp;— хотите контролировать, как&nbsp;изменения влияют на&nbsp;поведение пользователей." />
        <ServicePoint title="Руководитель отдела исследований" tags={['мощность','регулярно']} description="Нужна дополнительная исследовательская мощность для&nbsp;регулярного мониторинга или&nbsp;срочного проекта." />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что вы&nbsp;получите</h2></div></Section>
      <ServiceGrid>
        <ServicePoint tagsTop={['01']} title="Где теряются пользователи" description="Чётко показываем шаги, на&nbsp;которых ломается сценарий&nbsp;— без&nbsp;догадок." />
        <ServicePoint tagsTop={['02']} title="Причины потерь конверсии" description="Не&nbsp;просто «где», а&nbsp;«почему это происходит»&nbsp;— с&nbsp;цитатами и&nbsp;паттернами поведения." />
        <ServicePoint tagsTop={['03']} title="Приоритетный список изменений" description="Что исправить в&nbsp;первую очередь, чтобы повлиять на&nbsp;метрики&nbsp;— расставлено по&nbsp;приоритету." />
        <ServicePoint tagsTop={['04']} title="План внедрения" description="Понятный объём задач на&nbsp;ближайшие 1–2&nbsp;спринта&nbsp;— команда сразу знает, что делать." />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Сроки и&nbsp;стоимость</h2></div></Section>
      <ServiceGrid>
        <ServicePoint tagsTop={['сроки']} title="до&nbsp;3&nbsp;недель" description="1&nbsp;сегмент аудитории. +1&nbsp;неделя за&nbsp;каждый дополнительный сегмент." />
        <ServicePoint tagsTop={['стоимость']} title="от&nbsp;400&nbsp;000&nbsp;₽" description="1&nbsp;сегмент аудитории. +&nbsp;от&nbsp;200&nbsp;000&nbsp;₽ за&nbsp;каждый дополнительный сегмент." />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Как&nbsp;работаем</h2></div>
        <div className="list-wrapper padding-32px"><div className="list">
          {steps.map((s,i) => (
            <div key={i} className="list-item-wrapper"><div className="bullet-wrapper-left"><h3 dangerouslySetInnerHTML={{__html:`0${i+1}.&nbsp;${s}`}}/></div></div>
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
