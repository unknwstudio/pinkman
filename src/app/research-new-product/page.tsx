import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Новый продукт: валидация идеи и проработка решения',
  description: 'Валидация идеи нового продукта до старта разработки — чтобы команда не тратила ресурсы на слабую или невостребованную идею.',
  alternates: {
    canonical: 'https://pinkman.ru/research-new-product/',
  },
}

export default function ResearchNewProductPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Новый продукт: валидация идеи и&nbsp;проработка решения</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Помогаем понять, стоит&nbsp;ли запускать новый продукт, что действительно нужно аудитории и&nbsp;каким должно быть решение до&nbsp;старта разработки&nbsp;&mdash; чтобы команда не&nbsp;тратила ресурсы на&nbsp;слабую или невостребованную идею.</h2></div></Section>

      {/* ── В каких ситуациях ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">В&nbsp;каких ситуациях можем помочь</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Есть идея нового продукта"
          description="Но непонятно, есть&nbsp;ли в&nbsp;ней реальная ценность для&nbsp;аудитории"
        />
        <ServicePoint
          title="Нужно решение по&nbsp;инвестициям"
          description="Команда обсуждает гипотезу, но&nbsp;не&nbsp;может принять решение, стоит&nbsp;ли инвестировать в&nbsp;разработку"
          animDelay={2}
        />
        <ServicePoint
          title="Потребности пользователей"
          description="Нужно понять, что именно нужно пользователям и&nbsp;какие сценарии для&nbsp;них действительно важны"
          animDelay={3}
        />
        <ServicePoint
          title="Риск внутренних предположений"
          description="Есть риск собрать продукт на&nbsp;внутренних предположениях, а&nbsp;не&nbsp;на&nbsp;реальном спросе"
          animDelay={4}
        />
        <ServicePoint
          title="Снижение неопределённости"
          description="Важно сократить неопределённость до&nbsp;старта дизайна и&nbsp;разработки"
        />
        <ServicePoint
          title="Основа для&nbsp;первой версии"
          description="Нужна база, чтобы не&nbsp;закладывать лишние функции и&nbsp;не&nbsp;терять фокус"
          animDelay={2}
        />
      </ServiceGrid>

      {/* ── Что мы предлагаем ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;предлагаем</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">До&nbsp;старта разработки проводим работу, которая помогает понять, есть&nbsp;ли у&nbsp;идеи рыночный потенциал, какую задачу она должна решать и&nbsp;каким должно быть решение, чтобы оно было востребовано.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint
          title="Потребности и&nbsp;контекст"
          tags={['ЦА']}
          description="Изучаем потребности и&nbsp;контекст целевой аудитории"
        />
        <ServicePoint
          title="Спрос и&nbsp;ценность"
          tags={['валидация']}
          description="Проверяем спрос и&nbsp;ценность идеи"
          animDelay={2}
        />
        <ServicePoint
          title="Барьеры и&nbsp;критерии"
          tags={['ожидания']}
          description="Анализируем барьеры, ожидания и&nbsp;критерии выбора"
          animDelay={3}
        />
        <ServicePoint
          title="Ключевые сценарии"
          tags={['scope']}
          description="Определяем, какие сценарии и&nbsp;возможности действительно нужны пользователям"
          animDelay={4}
        />
        <ServicePoint
          title="Рынок и&nbsp;альтернативы"
          tags={['бенчмарки']}
          description="Смотрим рынок, альтернативы и&nbsp;лучшие практики"
        />
        <ServicePoint
          title="Рекомендации"
          tags={['состав', 'логика']}
          description="Формируем рекомендации по&nbsp;составу и&nbsp;логике будущего решения"
          animDelay={2}
        />
      </ServiceGrid>
      <Section>
        <p className="font-color-dark-gray">На&nbsp;выходе команда получает не&nbsp;просто ответ «нужно&nbsp;/ не&nbsp;нужно», а&nbsp;основу для&nbsp;продуктового решения: что стоит запускать, в&nbsp;каком виде и&nbsp;на&nbsp;что делать акцент в&nbsp;первой версии.</p>
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
          description="Определяет фокус проекта, собирает общую логику работы и&nbsp;формирует выводы"
        />
        <ServicePoint
          tagsTop={['исследования']}
          title="Продуктовый исследователь"
          description="Проводит интервью, анализирует потребности, барьеры и&nbsp;сигналы спроса"
        />
      </ServicePointRow>

      {/* ── Кому подходит ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="CPO&nbsp;/ Head of&nbsp;Product" tags={['CPO']} />
        <ServicePoint title="Владельцу продукта" tags={['Product Owner']} animDelay={2} />
        <ServicePoint title="Руководителю нового направления" animDelay={3} />
        <ServicePoint title="Основателю стартапа" tags={['founder']} animDelay={4} />
        <ServicePoint title="Продакт&#x2011;менеджеру" tags={['PM']} />
        <ServicePoint title="Команде запуска нового продукта или сервиса" tags={['запуск']} animDelay={2} />
      </ServiceGrid>

      {/* ── Что вы получите ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы&nbsp;получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Понимание реального спроса"
          description="Станет ясно, нужна&nbsp;ли идея аудитории и&nbsp;при&nbsp;каких условиях она может сработать"
        />
        <ServicePoint
          title="Что действительно нужно пользователям"
          description="Зафиксируем ключевые потребности, сценарии и&nbsp;ожидания"
          animDelay={2}
        />
        <ServicePoint
          title="Ориентиры для&nbsp;решения"
          description="Покажем, каким должен быть продукт на&nbsp;уровне логики, состава и&nbsp;ценности"
          animDelay={3}
        />
        <ServicePoint
          title="Снижение продуктовых рисков"
          description="Команда не&nbsp;будет инвестировать в&nbsp;гипотезу вслепую"
          animDelay={4}
        />
        <ServicePoint
          title="Основание для&nbsp;первой версии"
          description="Результаты можно использовать как базу для&nbsp;проектирования и&nbsp;дальнейшей проработки решения"
        />
      </ServiceGrid>

      {/* ── Сроки и стоимость ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Сроки и&nbsp;стоимость</h2></div></Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['сроки']}
          title="от&nbsp;2 до&nbsp;4 недель"
        />
        <ServicePoint
          tagsTop={['стоимость']}
          title="от&nbsp;500&nbsp;000&nbsp;₽"
        />
      </ServicePointRow>
      <Section>
        <p className="font-color-dark-gray">Стоимость и&nbsp;сроки зависят от&nbsp;глубины задачи, числа сегментов аудитории и&nbsp;объёма проверяемых гипотез.</p>
      </Section>

      {/* ── Процесс ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;делаем и&nbsp;как</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Бриф', description: 'Погружаемся в&nbsp;идею, контекст бизнеса, ограничения и&nbsp;цели запуска', tag: 'старт' },
        { num: '2', title: 'Фокус', description: 'Определяем, какие вопросы нужно прояснить до&nbsp;начала проектирования и&nbsp;разработки', tag: 'вопросы' },
        { num: '3', title: 'Аудитория', description: 'Изучаем аудиторию, её задачи, ожидания, барьеры и&nbsp;мотивацию', tag: 'ЦА' },
      ]} />
      <ProcessSteps steps={[
        { num: '4', title: 'Рынок', description: 'Анализируем рынок, альтернативы и&nbsp;существующие подходы', tag: 'контекст' },
        { num: '5', title: 'Выводы', description: 'Формируем выводы о&nbsp;спросе, ценности идеи и&nbsp;принципах будущего решения', tag: 'продукт' },
        { num: '6', title: 'Передача', description: 'Передаём рекомендации в&nbsp;формате, который можно использовать в&nbsp;дальнейшей продуктовой работе', tag: 'итог' },
      ]} />

      {/* ── Кейсы ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: 'var(--32px)' }}><h2 className="h1">Кейсы</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--16px)' }}>
          <div className="anim">
            <p className="text-regular font-color-black"><strong>VK Дети</strong></p>
            <p className="text-regular font-color-dark-gray">Валидация идеи нового продукта и&nbsp;ориентиры для&nbsp;состава первой версии</p>
          </div>
          <div className="anim">
            <p className="text-regular font-color-black"><strong>MAX</strong></p>
            <p className="text-regular font-color-dark-gray">Проработка спроса, ценности идеи и&nbsp;основы для&nbsp;проектирования решения</p>
          </div>
        </div>
      </Section>

      <ContactCard intro="Обсудим валидацию вашей идеи?" />
    </>
  )
}
