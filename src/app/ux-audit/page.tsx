import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Экспресс-аудит продукта (UX + аналитика)',
  description: 'Помогаем быстро понять, где продукт теряет пользователей, конверсию и деньги — чтобы определить, что менять в первую очередь.',
  alternates: {
    canonical: 'https://pinkman.ru/ux-audit/',
  },
}

export default function UxAuditPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Экспресс&#x2011;аудит продукта</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Помогаем быстро понять, где продукт теряет пользователей, конверсию и&nbsp;деньги&nbsp;&mdash; чтобы определить, что менять в&nbsp;первую очередь без&nbsp;длинного цикла исследований.</h2></div></Section>

      {/* ── В каких ситуациях ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">В&nbsp;каких ситуациях можем помочь</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Продукт работает слабее, чем должен"
          description="Есть ощущение проблемы, но&nbsp;неясно, где именно она находится"
        />
        <ServicePoint
          title="Планируете редизайн"
          description="Хотите быстро понять основные точки потери перед началом работ"
          animDelay={2}
        />
        <ServicePoint
          title="Есть данные, но&nbsp;нет выводов"
          description="Нужно превратить аналитику в&nbsp;понятные действия"
          animDelay={3}
        />
        <ServicePoint
          title="Нужна быстрая картина"
          description="Без большого исследовательского проекта собрать рабочее понимание продукта"
          animDelay={4}
        />
        <ServicePoint
          title="Важно расставить приоритеты"
          description="Определить, что брать в&nbsp;работу в&nbsp;первую очередь, а&nbsp;что можно отложить"
        />
        <ServicePoint
          title="Нужен ориентир для&nbsp;команды"
          description="Понятная база перед доработками или редизайном"
          animDelay={2}
        />
      </ServiceGrid>

      {/* ── Что мы предлагаем ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;предлагаем</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Если нужно быстро собрать рабочую картину по&nbsp;продукту, мы&nbsp;проводим экспресс&#x2011;аудит на&nbsp;стыке UX, аналитики и&nbsp;рыночного контекста.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint
          title="Анализ данных клиента"
          tags={['аналитика']}
          description="Анализируем доступные данные клиента"
        />
        <ServicePoint
          title="Экспертный аудит"
          tags={['UX&#x2011;эвристики']}
          description="Проверяем продукт по&nbsp;эвристикам и&nbsp;экспертной оценке"
          animDelay={2}
        />
        <ServicePoint
          title="Клиентский путь"
          tags={['CJM', 'точки дропа']}
          description="Моделируем клиентский путь и&nbsp;фиксируем точки дропа"
          animDelay={3}
        />
        <ServicePoint
          title="Рынок и&nbsp;практики"
          tags={['бенчмарки']}
          description="Изучаем рынок и&nbsp;лучшие практики"
          animDelay={4}
        />
        <ServicePoint
          title="Качественная проверка"
          tags={['коридорные тесты', 'опросы']}
          description="При необходимости добавляем минимальный качественный блок"
        />
        <ServicePoint
          title="Гипотезы и&nbsp;рекомендации"
          tags={['приоритизация']}
          description="Формируем выводы в&nbsp;виде гипотез и&nbsp;рекомендаций"
          animDelay={2}
        />
      </ServiceGrid>
      <Section>
        <p className="font-color-dark-gray">На&nbsp;выходе клиент получает не&nbsp;просто список замечаний, а&nbsp;приоритизированное понимание, что влияет на&nbsp;продукт сильнее всего и&nbsp;что стоит брать в&nbsp;работу в&nbsp;первую очередь.</p>
      </Section>

      {/* ── Команда ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Отдельная команда для&nbsp;аудита</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Работаем как встроенный юнит вашей команды.</p>
      </Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['управление']}
          title="Продюсер"
          description="Контролирует статусы, сроки и&nbsp;координирует команду"
        />
        <ServicePoint
          tagsTop={['экспертиза']}
          title="Ведущий UX&#x2011;специалист"
          description="Определяет фокус аудита, собирает общую логику работы, формирует выводы и&nbsp;рекомендации"
        />
        <ServicePoint
          tagsTop={['исследования']}
          title="UX&#x2011;исследователь"
          description="Анализирует данные, проверяет сценарии, моделирует путь пользователя и&nbsp;фиксирует проблемные зоны"
        />
      </ServicePointRow>

      {/* ── Кому подходит ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Пакет подходит командам, которым нужно быстро понять, где продукт теряет эффективность и&nbsp;как подступиться к&nbsp;изменениям без&nbsp;длинного исследовательского цикла.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Директору по&nbsp;продукту" tags={['CPO']} />
        <ServicePoint title="Владельцу продукта" tags={['Product Owner']} animDelay={2} />
        <ServicePoint title="Директору по&nbsp;маркетингу" tags={['CMO']} animDelay={3} />
        <ServicePoint title="Продуктовому маркетологу" animDelay={4} />
        <ServicePoint title="Руководителю направления исследований" />
        <ServicePoint title="Команде перед редизайном" tags={['редизайн', 'обновления']} animDelay={2} />
      </ServiceGrid>

      {/* ── Что вы получите ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы&nbsp;получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Понимание ключевых проблем"
          description="Покажем, где продукт теряет пользователей, конверсию или понятность"
        />
        <ServicePoint
          title="Понимание причин потерь"
          description="Зафиксируем основные барьеры в&nbsp;интерфейсе, сценариях и&nbsp;клиентском пути"
          animDelay={2}
        />
        <ServicePoint
          title="Приоритетный список гипотез"
          description="Определим, что имеет смысл брать в&nbsp;работу в&nbsp;первую очередь"
          animDelay={3}
        />
        <ServicePoint
          title="Ориентир для&nbsp;следующих шагов"
          description="Поможем понять, достаточно ли&nbsp;точечных улучшений, нужен&nbsp;ли отдельный блок тестирования или стоит идти в&nbsp;полноценный редизайн"
          animDelay={4}
        />
        <ServicePoint
          title="База для&nbsp;команды дизайна"
          description="Рекомендации, на&nbsp;которые можно опираться в&nbsp;дальнейшей переработке продукта"
        />
      </ServiceGrid>

      {/* ── Сроки и стоимость ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Сроки и&nbsp;стоимость</h2></div></Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['аудит']}
          title="Экспресс&#x2011;аудит"
          description="от&nbsp;1 до&nbsp;2 недель &bull; от&nbsp;250&nbsp;000&nbsp;₽"
        />
        <ServicePoint
          tagsTop={['тесты']}
          title="Минимальный блок тестов"
          description="1&nbsp;неделя &bull; от&nbsp;150&nbsp;000&nbsp;₽"
        />
        <ServicePoint variant="default" title="" description="Подключаем как отдельный этап при необходимости" />
      </ServicePointRow>

      {/* ── Процесс ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;делаем и&nbsp;как</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Бриф', description: 'Погружаемся в&nbsp;задачу, контекст продукта, ограничения, цели бизнеса и&nbsp;доступные данные', tag: 'старт' },
        { num: '2', title: 'Аналитика', description: 'Анализируем продуктовую или веб&#x2011;аналитику, если она есть', tag: 'данные' },
        { num: '3', title: 'UX&#x2011;аудит', description: 'Проводим экспертный аудит продукта по&nbsp;UX&#x2011;эвристикам', tag: 'экспертиза' },
        { num: '4', title: 'CJM', description: 'Моделируем клиентский путь и&nbsp;фиксируем точки дропа, барьеры в&nbsp;сценариях', tag: 'путь' },
      ]} />
      <ProcessSteps steps={[
        { num: '5', title: 'Рынок', description: 'Анализируем конкурентные и&nbsp;смежные решения, определяем лучшие практики', tag: 'бенчмарки' },
        { num: '6', title: 'Проверка', description: 'При необходимости проводим коридорные тесты или короткие опросы', tag: 'качество' },
        { num: '7', title: 'Выводы', description: 'Формируем гипотезы и&nbsp;рекомендации, которые можно сразу брать в&nbsp;доработку', tag: 'итог' },
      ]} />

      {/* ── Кейсы ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: 'var(--32px)' }}><h2 className="h1">Кейсы</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--16px)' }}>
          <div className="anim">
            <p className="text-regular font-color-black"><strong>TJ Collection</strong></p>
            <p className="text-regular font-color-dark-gray">Быстрый разбор пользовательского пути и&nbsp;проблемных точек перед дальнейшими изменениями продукта</p>
          </div>
          <div className="anim">
            <p className="text-regular font-color-black"><strong>The Mashina</strong></p>
            <p className="text-regular font-color-dark-gray">Экспресс&#x2011;диагностика проблем в&nbsp;сценариях и&nbsp;формирование приоритетов для&nbsp;следующих шагов</p>
          </div>
        </div>
      </Section>

      <ContactCard intro="Обсудим аудит вашего продукта?" />
    </>
  )
}
