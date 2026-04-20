import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Развитие продукта: проработка гипотез роста',
  description: 'Понимаем, какие новые возможности нужны пользователям, есть ли на них спрос и как внедрять их в существующий продукт.',
  alternates: {
    canonical: 'https://pinkman.ru/research-product-growth/',
  },
}

export default function ResearchProductGrowthPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Развитие продукта: проработка гипотез роста</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Помогаем понять, какие новые возможности действительно нужны пользователям, есть&nbsp;ли на&nbsp;них спрос и&nbsp;как внедрять их&nbsp;в&nbsp;существующий продукт так, чтобы они усиливали сценарии, а&nbsp;не&nbsp;усложняли их.</h2></div></Section>

      {/* ── В каких ситуациях ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">В&nbsp;каких ситуациях можем помочь</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Продукт работает и&nbsp;приносит деньги"
          description="Но команде нужно развивать его дальше"
        />
        <ServicePoint
          title="Есть новые идеи и&nbsp;гипотезы"
          description="Но непонятно, есть&nbsp;ли на&nbsp;них реальный спрос"
          animDelay={2}
        />
        <ServicePoint
          title="Встраивание в&nbsp;опыт"
          description="Нужно понять, как новая возможность должна выглядеть и&nbsp;встраиваться в&nbsp;текущий пользовательский опыт"
          animDelay={3}
        />
        <ServicePoint
          title="Подтверждённые сигналы"
          description="Команда хочет развивать продукт не&nbsp;на&nbsp;внутренних предположениях, а&nbsp;на&nbsp;подтверждённых сигналах от&nbsp;аудитории"
          animDelay={4}
        />
        <ServicePoint
          title="Риск потратить ресурсы"
          description="Есть риск потратить ресурсы на&nbsp;фичи, которые не&nbsp;дадут эффекта или усложнят продукт"
        />
        <ServicePoint
          title="Влияние на&nbsp;метрики"
          description="Нужно определить, какие гипотезы действительно могут повлиять на&nbsp;метрики и&nbsp;развитие продукта"
          animDelay={2}
        />
      </ServiceGrid>

      {/* ── Что мы предлагаем ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;предлагаем</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Проводим продуктовую проработку гипотез, чтобы понять, какие идеи действительно нужны пользователям, как они должны быть реализованы и&nbsp;какой эффект могут дать продукту.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint
          title="Потребности внутри продукта"
          tags={['ЦА', 'контекст']}
          description="Изучаем потребности и&nbsp;контекст аудитории внутри существующего продукта"
        />
        <ServicePoint
          title="Спрос на&nbsp;возможности"
          tags={['гипотезы']}
          description="Проверяем спрос на&nbsp;новые возможности, сценарии и&nbsp;продуктовые инициативы"
          animDelay={2}
        />
        <ServicePoint
          title="Встройка в&nbsp;опыт"
          tags={['UX']}
          description="Анализируем, как гипотеза должна быть встроена в&nbsp;текущий опыт"
          animDelay={3}
        />
        <ServicePoint
          title="Барьеры и&nbsp;риски"
          tags={['ограничения']}
          description="Выявляем барьеры, риски и&nbsp;ограничения"
          animDelay={4}
        />
        <ServicePoint
          title="Решения и&nbsp;паттерны"
          tags={['UX&#x2011;практики']}
          description="Определяем, какие решения и&nbsp;паттерны лучше сработают для&nbsp;аудитории"
        />
        <ServicePoint
          title="Формат и&nbsp;приоритеты"
          tags={['реализация']}
          description="Формируем рекомендации по&nbsp;формату реализации и&nbsp;приоритетам"
          animDelay={2}
        />
      </ServiceGrid>
      <Section>
        <p className="font-color-dark-gray">На&nbsp;выходе команда получает не&nbsp;просто обратную связь по&nbsp;гипотезе, а&nbsp;основание для&nbsp;продуктового решения: что действительно стоит запускать, как это должно работать и&nbsp;что может дать реальный эффект для&nbsp;продукта.</p>
      </Section>

      {/* ── Команда ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Отдельная команда для&nbsp;проекта</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Работаем как встроенный юнит вашей команды.</p>
      </Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['управление']}
          title="Продюсер"
          description="Контролирует сроки, статусы и&nbsp;коммуникацию"
        />
        <ServicePoint
          tagsTop={['экспертиза']}
          title="Ведущий продуктовый исследователь"
          description="Определяет исследовательский фокус, собирает общую логику работы и&nbsp;формирует выводы"
        />
        <ServicePoint
          tagsTop={['исследования']}
          title="Продуктовый исследователь"
          description="Изучает потребности, проводит интервью и&nbsp;тестирование гипотез"
        />
      </ServicePointRow>

      {/* ── Кому подходит ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="CPO&nbsp;/ Head of&nbsp;Product" tags={['CPO']} />
        <ServicePoint title="Владельцу продукта" tags={['Product Owner']} animDelay={2} />
        <ServicePoint title="Продакт&#x2011;менеджеру" tags={['PM']} animDelay={3} />
        <ServicePoint title="Руководителю продуктовой команды" animDelay={4} />
        <ServicePoint title="Product marketing manager" tags={['PMM']} />
        <ServicePoint title="Команде зрелого продукта в&nbsp;поиске точек роста" tags={['growth']} animDelay={2} />
      </ServiceGrid>

      {/* ── Что вы получите ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы&nbsp;получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Гипотезы, нужные аудитории"
          description="Станет ясно, есть&nbsp;ли на&nbsp;идею спрос и&nbsp;в&nbsp;чём её реальная ценность"
        />
        <ServicePoint
          title="Как гипотеза должна быть реализована"
          description="Зафиксируем, в&nbsp;каком виде решение лучше встроить в&nbsp;текущий продукт"
          animDelay={2}
        />
        <ServicePoint
          title="Оценка рисков и&nbsp;ограничений"
          description="Покажем, что может помешать успеху новой возможности"
          animDelay={3}
        />
        <ServicePoint
          title="Приоритеты команды"
          description="Поможем определить, во&nbsp;что стоит инвестировать ресурсы в&nbsp;первую очередь"
          animDelay={4}
        />
        <ServicePoint
          title="Продуктовые метрики"
          description="Ориентиры не&nbsp;только по&nbsp;UX, но&nbsp;и&nbsp;по&nbsp;тому, как гипотеза может повлиять на&nbsp;развитие продукта"
        />
      </ServiceGrid>

      {/* ── Сроки и стоимость ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Сроки и&nbsp;стоимость</h2></div></Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['сроки']}
          title="от&nbsp;3 до&nbsp;5 недель"
        />
        <ServicePoint
          tagsTop={['стоимость']}
          title="от&nbsp;600&nbsp;000&nbsp;₽"
        />
      </ServicePointRow>
      <Section>
        <p className="font-color-dark-gray">Стоимость и&nbsp;сроки зависят от&nbsp;количества гипотез, сегментов аудитории и&nbsp;объёма проработки.</p>
      </Section>

      {/* ── Процесс ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;делаем и&nbsp;как</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Бриф', description: 'Погружаемся в&nbsp;продукт, текущие метрики, ограничения и&nbsp;цели развития', tag: 'старт' },
        { num: '2', title: 'Гипотезы', description: 'Определяем, какие гипотезы или направления нужно проработать', tag: 'scope' },
        { num: '3', title: 'Аудитория', description: 'Изучаем аудиторию, её потребности, сценарии и&nbsp;отношение к&nbsp;новым возможностям', tag: 'ЦА' },
      ]} />
      <ProcessSteps steps={[
        { num: '4', title: 'Встройка', description: 'Анализируем, как гипотеза должна быть встроена в&nbsp;текущий продукт', tag: 'UX' },
        { num: '5', title: 'Проверка', description: 'При необходимости проверяем концепции, сценарии или прототипы на&nbsp;пользователях', tag: 'тесты' },
        { num: '6', title: 'Выводы', description: 'Формируем рекомендации: что стоит запускать, в&nbsp;каком виде и&nbsp;с&nbsp;каким приоритетом', tag: 'итог' },
      ]} />

      {/* ── Кейсы ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: 'var(--32px)' }}><h2 className="h1">Кейсы</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--16px)' }}>
          <div className="anim">
            <p className="text-regular font-color-black"><strong>Overgear</strong></p>
            <p className="text-regular font-color-dark-gray">Проработка гипотез роста и&nbsp;ориентиры для&nbsp;продуктовой команды</p>
          </div>
          <div className="anim">
            <p className="text-regular font-color-black"><strong>РЕГРО</strong></p>
            <p className="text-regular font-color-dark-gray">Проверка спроса и&nbsp;ценности новых возможностей до&nbsp;внедрения</p>
          </div>
          <div className="anim">
            <p className="text-regular font-color-black"><strong>VK</strong></p>
            <p className="text-regular font-color-dark-gray">Продуктовая проработка гипотез и&nbsp;сценариев для&nbsp;развития продукта</p>
          </div>
          <div className="anim">
            <p className="text-regular font-color-black"><strong>MAX</strong></p>
            <p className="text-regular font-color-dark-gray">Анализ гипотез и&nbsp;рекомендации по&nbsp;их&nbsp;встройке в&nbsp;существующий опыт</p>
          </div>
        </div>
      </Section>

      <ContactCard intro="Обсудим проработку гипотез?" />
    </>
  )
}
