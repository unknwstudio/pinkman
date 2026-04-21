import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Поиск точек роста на рынке',
  description: 'Ищем новые возможности для роста: сегменты, сценарии, потребности и направления — решения на данных, а не на интуиции.',
  alternates: {
    canonical: 'https://pinkman.ru/research-growth-opportunities/',
  },
}

export default function ResearchGrowthOpportunitiesPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Поиск точек роста на&nbsp;рынке</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Помогаем понять, где искать следующие возможности для&nbsp;роста: в&nbsp;новых сегментах, сценариях, потребностях или направлениях&nbsp;&mdash; чтобы принимать решения не&nbsp;на&nbsp;интуиции, а&nbsp;на&nbsp;данных.</h2></div></Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">В&nbsp;каких ситуациях можем помочь</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Бизнес упёрся в&nbsp;модель роста" description="Текущая модель исчерпала потенциал" />
        <ServicePoint title="Конкуренты запускают новое" description="Нужно понять, куда смотреть дальше" animDelay={2} />
        <ServicePoint title="Продукт уже оптимизирован" description="Этого недостаточно для&nbsp;следующего шага" animDelay={3} />
        <ServicePoint title="Нужны новые точки роста" description="Не только улучшать существующее" animDelay={4} />
        <ServicePoint title="Есть идеи, но&nbsp;нет приоритетов" description="Непонятно, во&nbsp;что действительно стоит инвестировать" />
        <ServicePoint title="Данные для&nbsp;руководства" description="Нужны аргументы для&nbsp;выбора следующего направления" animDelay={2} />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;предлагаем</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Проводим исследование, которое помогает найти реальные возможности для&nbsp;роста на&nbsp;рынке и&nbsp;понять, какие направления имеют наибольший потенциал.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Рынок и&nbsp;контекст" tags={['рынок']} description="Анализируем рынок и&nbsp;контекст" />
        <ServicePoint title="Незакрытые потребности" tags={['потребности']} description="Изучаем незакрытые потребности и&nbsp;новые сценарии" animDelay={2} />
        <ServicePoint title="Сегменты и&nbsp;предложение" tags={['оффер']} description="Ищем точки роста в&nbsp;сегментах, предложении и&nbsp;поведении аудитории" animDelay={3} />
        <ServicePoint title="Перспективные направления" tags={['потенциал']} description="Определяем, какие направления выглядят наиболее перспективно" animDelay={4} />
        <ServicePoint title="Рекомендации" tags={['шаги', 'приоритеты']} description="Формируем рекомендации по&nbsp;следующим шагам и&nbsp;приоритетам" />
      </ServiceGrid>
      <Section>
        <p className="font-color-dark-gray">На&nbsp;выходе команда получает не&nbsp;просто набор идей, а&nbsp;обоснованный список направлений, в&nbsp;которые действительно стоит смотреть дальше.</p>
      </Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Отдельная команда для&nbsp;проекта</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Работаем как встроенный юнит вашей команды.</p>
      </Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['управление']} title="Продюсер" description="Координирует проект и&nbsp;коммуникацию" />
        <ServicePoint tagsTop={['экспертиза']} title="Ведущий исследователь" description="Разрабатывает план исследования, отслеживает качество и&nbsp;отвечает за&nbsp;согласованный результат" />
        <ServicePoint tagsTop={['исследования']} title="Исследователь" description="Изучает рынок, аудиторию, фиксирует точки роста и&nbsp;приоритеты, формирует выводы и&nbsp;презентует их&nbsp;команде" />
      </ServicePointRow>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Владельцу бизнеса" />
        <ServicePoint title="Директору по&nbsp;маркетингу" tags={['CMO']} animDelay={2} />
        <ServicePoint title="CPO&nbsp;/ Head of&nbsp;Product" tags={['CPO']} animDelay={3} />
        <ServicePoint title="Руководителю стратегии" tags={['strategy']} animDelay={4} />
        <ServicePoint title="Руководителю нового направления" />
        <ServicePoint title="Команде поиска вектора роста" animDelay={2} />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы&nbsp;получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Пространство для&nbsp;роста" description="Увидите новые сегменты, потребности и&nbsp;сценарии" />
        <ServicePoint title="Приоритетные направления" description="Поймёте, на&nbsp;какие возможности стоит смотреть в&nbsp;первую очередь" animDelay={2} />
        <ServicePoint title="Снижение риска инвестиций" description="Команда не&nbsp;будет выбирать следующее направление на&nbsp;уровне интуиции" animDelay={3} />
        <ServicePoint title="Аргументация для&nbsp;руководства" description="Результаты можно использовать для&nbsp;защиты новых направлений и&nbsp;инициатив" animDelay={4} />
        <ServicePoint title="Ориентиры для&nbsp;шагов" description="Не только анализ, но&nbsp;и&nbsp;понимание, что делать дальше" />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Сроки и&nbsp;стоимость</h2></div></Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['сроки']} title="от&nbsp;4 до&nbsp;5 недель" />
        <ServicePoint tagsTop={['стоимость']} title="от&nbsp;700&nbsp;000&nbsp;₽" />
      </ServicePointRow>
      <Section>
        <p className="font-color-dark-gray">Стоимость зависит от&nbsp;скоупа задачи, количества сегментов и&nbsp;уровня неопределённости.</p>
      </Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;делаем и&nbsp;как</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Бриф', description: 'Погружаемся в&nbsp;бизнес&#x2011;контекст, текущую ситуацию и&nbsp;вопросы руководства', tag: 'старт' },
        { num: '2', title: 'Рамка', description: 'Формируем исследовательскую рамку под&nbsp;задачу', tag: 'подход' },
        { num: '3', title: 'Рынок и&nbsp;ЦА', description: 'Изучаем рынок, аудиторию, сценарии и&nbsp;новые возможности', tag: 'анализ' },
      ]} />
      <ProcessSteps steps={[
        { num: '4', title: 'Методы', description: 'Сочетаем качественные и&nbsp;количественные методы, если это нужно', tag: 'данные' },
        { num: '5', title: 'Направления', description: 'Формируем выводы о&nbsp;потенциальных направлениях роста', tag: 'точки роста' },
        { num: '6', title: 'Рекомендации', description: 'Передаём рекомендации: куда смотреть дальше, что проверять и&nbsp;как двигаться поэтапно', tag: 'итог' },
      ]} />

      <Section><div className="text-h1-wrapper" style={{ marginBottom: 'var(--32px)' }}><h2 className="h1">Кейсы</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--16px)' }}>
          <div className="anim"><p className="text-regular font-color-black"><strong>MOEX</strong></p><p className="text-regular font-color-dark-gray">Поиск точек роста и&nbsp;приоритетные направления для&nbsp;стратегии</p></div>
          <div className="anim"><p className="text-regular font-color-black"><strong>MAX</strong></p><p className="text-regular font-color-dark-gray">Анализ рынка и&nbsp;возможностей для&nbsp;следующего шага развития</p></div>
          <div className="anim"><p className="text-regular font-color-black"><strong>ОТП&nbsp;Банк</strong></p><p className="text-regular font-color-dark-gray">Определение перспективных сегментов и&nbsp;сценариев роста</p></div>
        </div>
      </Section>

      <ContactCard intro="Обсудим поиск ваших точек роста?" />
    </>
  )
}
