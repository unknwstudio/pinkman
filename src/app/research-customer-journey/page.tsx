import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Путь клиента: от первого касания до использования',
  description: 'Исследуем путь клиента от первого контакта до покупки, активации и первого опыта — убираем точки потери.',
  alternates: {
    canonical: 'https://pinkman.ru/research-customer-journey/',
  },
}

export default function ResearchCustomerJourneyPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Путь клиента: от&nbsp;первого касания до&nbsp;использования</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Помогаем понять, где ломается путь клиента от&nbsp;первого контакта с&nbsp;брендом или продуктом до&nbsp;покупки, подключения, активации и&nbsp;первого опыта использования&nbsp;&mdash; чтобы убрать точки потери и&nbsp;сделать путь более понятным и&nbsp;бесшовным.</h2></div></Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">В&nbsp;каких ситуациях можем помочь</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Проблема в&nbsp;цепочке шагов" description="Проблема не&nbsp;в&nbsp;одном экране или канале, а&nbsp;в&nbsp;цепочке шагов клиента" />
        <ServicePoint title="Пользователи теряются" description="Теряются до&nbsp;покупки, подключения или первого целевого действия" animDelay={2} />
        <ServicePoint title="Офлайн и&nbsp;онлайн не&nbsp;связаны" description="Есть точки контакта, которые плохо связаны между собой" animDelay={3} />
        <ServicePoint title="Много этапов до&nbsp;результата" description="Непонятно, где именно возникают потери" animDelay={4} />
        <ServicePoint title="Трафик есть, конверсии нет" description="Есть интерес, но&nbsp;конверсия в&nbsp;покупку или активацию низкая" />
        <ServicePoint title="Нужна картина целиком" description="Команда хочет понять путь клиента целиком, а&nbsp;не&nbsp;точечно по&nbsp;отдельным частям" animDelay={2} />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;предлагаем</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Исследуем путь клиента от&nbsp;первого касания до&nbsp;начала использования продукта, чтобы увидеть, где возникает трение, что ломает ожидания и&nbsp;какие шаги мешают человеку дойти до&nbsp;результата.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Карта клиентского пути" tags={['CJM']} description="Собираем карту клиентского пути" />
        <ServicePoint title="Точки контакта" tags={['реклама', 'сайт', 'оффер', 'онбординг']} description="Анализируем реклама&nbsp;→ сайт&nbsp;→ оффер&nbsp;→ заявка&nbsp;→ покупка&nbsp;→ онбординг&nbsp;→ первый опыт" animDelay={2} />
        <ServicePoint title="Точки потери" tags={['барьеры']} description="Выявляем точки потери, барьеры и&nbsp;разрывы между этапами" animDelay={3} />
        <ServicePoint title="Ожидание vs реальность" tags={['gap']} description="Смотрим, где ожидание клиента не&nbsp;совпадает с&nbsp;реальным опытом" animDelay={4} />
        <ServicePoint title="Рекомендации" tags={['путь', 'процессы']} description="Формируем рекомендации по&nbsp;улучшению пути, коммуникации и&nbsp;процессов" />
      </ServiceGrid>
      <Section>
        <p className="font-color-dark-gray">На&nbsp;выходе команда получает целостное понимание: где и&nbsp;почему клиент отваливается до&nbsp;покупки, активации или первого результата, и&nbsp;что нужно менять, чтобы путь стал короче и&nbsp;понятнее.</p>
      </Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Отдельная команда для&nbsp;проекта</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Работаем как встроенный юнит вашей команды.</p>
      </Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['управление']} title="Продюсер" description="Контролирует сроки и&nbsp;организацию проекта" />
        <ServicePoint tagsTop={['экспертиза']} title="Ведущий исследователь" description="Разрабатывает план исследования, отслеживает качество и&nbsp;отвечает за&nbsp;согласованный результат" />
        <ServicePoint tagsTop={['исследования']} title="Исследователь" description="Изучает путь клиента, проводит интервью, фиксирует проблемные точки, формирует выводы и&nbsp;презентует их&nbsp;команде" />
      </ServicePointRow>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Маркетинговой команде" tags={['маркетинг']} />
        <ServicePoint title="Продуктовой команде" tags={['product']} animDelay={2} />
        <ServicePoint title="Сервисным и&nbsp;CX&#x2011;командам" tags={['CX']} animDelay={3} />
        <ServicePoint title="Владельцу бизнеса" animDelay={4} />
        <ServicePoint title="Digital&#x2011;команде" tags={['digital']} />
        <ServicePoint title="Команде улучшения пути до&nbsp;покупки или активации" animDelay={2} />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы&nbsp;получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Карту пути клиента" description="Увидите путь от&nbsp;первого контакта до&nbsp;использования продукта целиком" />
        <ServicePoint title="Точки потери и&nbsp;барьеры" description="Поймёте, где именно люди тормозят, сомневаются или уходят" animDelay={2} />
        <ServicePoint title="Разрывы между ожиданием и&nbsp;опытом" description="Зафиксируем, на&nbsp;каких этапах клиентский опыт не&nbsp;соответствует обещанию" animDelay={3} />
        <ServicePoint title="Приоритеты улучшений" description="Команда поймёт, какие изменения сильнее всего повлияют на&nbsp;путь и&nbsp;конверсию" animDelay={4} />
        <ServicePoint title="Рекомендации по&nbsp;коммуникации, процессам и&nbsp;продукту" description="Не только что происходит, но&nbsp;и&nbsp;что с&nbsp;этим делать дальше" />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Сроки и&nbsp;стоимость</h2></div></Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['сроки']} title="от&nbsp;3 до&nbsp;6 недель" />
        <ServicePoint tagsTop={['стоимость']} title="от&nbsp;500&nbsp;000&nbsp;₽" />
      </ServicePointRow>
      <Section>
        <p className="font-color-dark-gray">Стоимость зависит от&nbsp;длины пути, числа точек контакта и&nbsp;сложности сценария.</p>
      </Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;делаем и&nbsp;как</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Бриф', description: 'Определяем, какой путь нужно разобрать: до&nbsp;покупки, подключения, активации или первого результата', tag: 'старт' },
        { num: '2', title: 'Карта шагов', description: 'Собираем текущую карту шагов и&nbsp;точек контакта', tag: 'карта' },
        { num: '3', title: 'Полевой этап', description: 'Проводим интервью, дневники или другие подходящие методы', tag: 'данные' },
      ]} />
      <ProcessSteps steps={[
        { num: '4', title: 'Анализ', description: 'Анализируем, где путь ломается и&nbsp;где возникают ожидания, которые не&nbsp;оправдываются', tag: 'gaps' },
        { num: '5', title: 'Итоговая карта', description: 'Формируем карту пути с&nbsp;проблемными точками и&nbsp;логикой потерь', tag: 'CJM' },
        { num: '6', title: 'Рекомендации', description: 'Передаём рекомендации по&nbsp;улучшению опыта, коммуникации и&nbsp;процессов', tag: 'итог' },
      ]} />

      <Section><div className="text-h1-wrapper" style={{ marginBottom: 'var(--32px)' }}><h2 className="h1">Кейсы</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--16px)' }}>
          <div className="anim"><p className="text-regular font-color-black"><strong>ОТП&nbsp;Банк</strong></p><p className="text-regular font-color-dark-gray">Карта пути клиента и&nbsp;приоритеты улучшений на&nbsp;ключевых этапах</p></div>
          <div className="anim"><p className="text-regular font-color-black"><strong>VK</strong></p><p className="text-regular font-color-dark-gray">Анализ цепочки шагов и&nbsp;точек потери от&nbsp;касания до&nbsp;активации</p></div>
        </div>
      </Section>

      <ContactCard intro="Обсудим путь вашего клиента?" />
    </>
  )
}
