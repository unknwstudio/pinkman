import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Понимание аудитории и причин выбора',
  description: 'Исследование аудитории: кто ваш клиент, что для него важно и почему он выбирает вас или конкурентов.',
  alternates: {
    canonical: 'https://pinkman.ru/research-audience/',
  },
}

export default function ResearchAudiencePage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Понимание аудитории и&nbsp;причин выбора</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Помогаем понять, кто ваш клиент, что для&nbsp;него важно и&nbsp;почему он&nbsp;выбирает вас или конкурентов&nbsp;&mdash; чтобы продукт, коммуникация и&nbsp;предложение опирались не&nbsp;на&nbsp;предположения, а&nbsp;на&nbsp;реальные мотивы аудитории.</h2></div></Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">В&nbsp;каких ситуациях можем помочь</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Непонятна реальная аудитория" description="Не до&nbsp;конца понятно, кто ваша реальная аудитория" />
        <ServicePoint title="Рост остановился" description="Непонятно, в&nbsp;чём причина стагнации" animDelay={2} />
        <ServicePoint title="Рынок изменился" description="Старое понимание клиента больше не&nbsp;работает" animDelay={3} />
        <ServicePoint title="Нужно увеличить конверсию" description="Команда не&nbsp;понимает, что действительно важно для&nbsp;людей" animDelay={4} />
        <ServicePoint title="Коммуникация не&nbsp;попадает" description="Сообщения не&nbsp;откликаются у&nbsp;аудитории" />
        <ServicePoint title="Перепозиционирование или обновление" description="Планируется обновление продукта или изменение предложения" animDelay={2} />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;предлагаем</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Проводим исследование, которое помогает понять, кто ваш клиент, чем отличаются сегменты, что влияет на&nbsp;выбор и&nbsp;почему часть аудитории выбирает вас, а&nbsp;часть&nbsp;&mdash; нет.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Сегменты аудитории" tags={['ЦА']} description="Изучаем сегменты аудитории" />
        <ServicePoint title="Мотивы, барьеры, триггеры" tags={['выбор']} description="Выявляем мотивы, барьеры и&nbsp;триггеры выбора" animDelay={2} />
        <ServicePoint title="Критерии категории" tags={['важное']} description="Анализируем, какие критерии действительно важны в&nbsp;категории" animDelay={3} />
        <ServicePoint title="Восприятие продукта" tags={['альтернативы']} description="Понимаем, как аудитория воспринимает ваш продукт и&nbsp;альтернативы" animDelay={4} />
        <ServicePoint title="Рекомендации" tags={['продукт', 'оффер']} description="Формируем рекомендации по&nbsp;продукту, предложению и&nbsp;коммуникации" />
      </ServiceGrid>
      <Section>
        <p className="font-color-dark-gray">На&nbsp;выходе команда получает не&nbsp;абстрактное описание ЦА, а&nbsp;рабочее понимание: кто ваши ключевые сегменты, как они принимают решение и&nbsp;что нужно менять, чтобы выбор чаще происходил в&nbsp;вашу пользу.</p>
      </Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Отдельная команда для&nbsp;проекта</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Работаем как встроенный юнит вашей команды.</p>
      </Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['управление']} title="Продюсер" description="Контролирует сроки, статусы и&nbsp;коммуникацию" />
        <ServicePoint tagsTop={['экспертиза']} title="Ведущий исследователь" description="Разрабатывает план исследования, отслеживает качество и&nbsp;отвечает за&nbsp;согласованный результат" />
        <ServicePoint tagsTop={['исследования']} title="Исследователь" description="Проводит интервью, анализирует мотивацию, барьеры и&nbsp;причины выбора, фиксирует сегменты и&nbsp;потребности, формирует выводы и&nbsp;презентует их&nbsp;команде" />
      </ServicePointRow>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Директору по&nbsp;маркетингу" tags={['CMO']} />
        <ServicePoint title="Продуктовой команде" tags={['product']} animDelay={2} />
        <ServicePoint title="Владельцу бизнеса" animDelay={3} />
        <ServicePoint title="Бренд&#x2011;команде" tags={['brand']} animDelay={4} />
        <ServicePoint title="Руководителю исследований" tags={['research']} />
        <ServicePoint title="Команде обновления продукта или позиционирования" animDelay={2} />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы&nbsp;получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Чёткое понимание аудитории" description="Поймёте, кто ваш клиент и&nbsp;чем сегменты отличаются друг от&nbsp;друга" />
        <ServicePoint title="Причины выбора и&nbsp;отказа" description="Зафиксируем, что влияет на&nbsp;решение в&nbsp;вашу пользу или против вас" animDelay={2} />
        <ServicePoint title="Мотивы, барьеры и&nbsp;триггеры" description="Покажем, как люди думают и&nbsp;что для&nbsp;них действительно важно" animDelay={3} />
        <ServicePoint title="Рекомендации по&nbsp;продукту и&nbsp;коммуникации" description="Команда поймёт, что изменить, чтобы лучше попадать в&nbsp;потребности аудитории" animDelay={4} />
        <ServicePoint title="Основание для&nbsp;решений" description="Результаты можно использовать в&nbsp;маркетинге, продукте, брендинге и&nbsp;стратегии" />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Сроки и&nbsp;стоимость</h2></div></Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['сроки']} title="от&nbsp;3 до&nbsp;4 недель" description="+&nbsp;1&nbsp;неделя за&nbsp;дополнительный сегмент" />
        <ServicePoint tagsTop={['стоимость']} title="от&nbsp;500&nbsp;000&nbsp;₽" description="+&nbsp;от&nbsp;200&nbsp;000&nbsp;₽ за&nbsp;дополнительный сегмент" />
      </ServicePointRow>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;делаем и&nbsp;как</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Бриф', description: 'Погружаемся в&nbsp;задачу, контекст рынка и&nbsp;текущие вопросы команды', tag: 'старт' },
        { num: '2', title: 'Сегменты', description: 'Определяем, какие сегменты и&nbsp;точки выбора важно исследовать', tag: 'scope' },
        { num: '3', title: 'Полевой этап', description: 'Проводим интервью или опрос по&nbsp;нужным сегментам', tag: 'данные' },
      ]} />
      <ProcessSteps steps={[
        { num: '4', title: 'Анализ', description: 'Анализируем мотивацию, барьеры, триггеры и&nbsp;причины выбора', tag: 'анализ' },
        { num: '5', title: 'Сегменты и&nbsp;выводы', description: 'Формируем сегменты и&nbsp;выводы', tag: 'модель' },
        { num: '6', title: 'Рекомендации', description: 'Передаём рекомендации по&nbsp;продукту, офферу и&nbsp;коммуникации', tag: 'итог' },
      ]} />

      <Section><div className="text-h1-wrapper" style={{ marginBottom: 'var(--32px)' }}><h2 className="h1">Кейсы</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--16px)' }}>
          <div className="anim"><p className="text-regular font-color-black"><strong>MOEX</strong></p><p className="text-regular font-color-dark-gray">Понимание сегментов и&nbsp;причин выбора, ориентиры для&nbsp;коммуникации</p></div>
          <div className="anim"><p className="text-regular font-color-black"><strong>ОТП&nbsp;Банк</strong></p><p className="text-regular font-color-dark-gray">Сегментация и&nbsp;анализ мотивов выбора для&nbsp;продукта и&nbsp;предложения</p></div>
          <div className="anim"><p className="text-regular font-color-black"><strong>MAX</strong></p><p className="text-regular font-color-dark-gray">Исследование аудитории для&nbsp;продуктовой и&nbsp;маркетинговой команд</p></div>
        </div>
      </Section>

      <ContactCard intro="Обсудим исследование вашей аудитории?" />
    </>
  )
}
