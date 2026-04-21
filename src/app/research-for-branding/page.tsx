import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Исследования для брендинга',
  description: 'Исследовательская основа для брендинга — айдентика и образ бренда, построенные на понимании аудитории, рынка и восприятия бизнеса.',
  alternates: {
    canonical: 'https://pinkman.ru/research-for-branding/',
  },
}

export default function ResearchForBrandingPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Исследования для&nbsp;брендинга</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Помогаем создать исследовательскую основу для&nbsp;брендинга, чтобы айдентика, визуальные коды и&nbsp;образ бренда строились не&nbsp;на&nbsp;субъективных мнениях, а&nbsp;на&nbsp;реальном понимании аудитории, рынка и&nbsp;восприятия бизнеса.</h2></div></Section>

      {/* ── В каких ситуациях ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">В&nbsp;каких ситуациях можем помочь</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Создаёте или обновляете бренд"
          description="Планируете новый бренд или&nbsp;ребрендинг, но&nbsp;не&nbsp;хотите строить решения только на&nbsp;вкусе команды или&nbsp;клиента"
        />
        <ServicePoint
          title="Хотите точнее попадать в&nbsp;аудиторию"
          description="Нужно глубже понять ЦА, чтобы айдентика и&nbsp;коммуникация попадали в&nbsp;её ожидания и&nbsp;восприятие"
          animDelay={2}
        />
        <ServicePoint
          title="Ищете смыслы и&nbsp;визуальные коды"
          description="Важно определить, какие смыслы, ассоциации и&nbsp;визуальные коды будут релевантны для&nbsp;бренда"
          animDelay={3}
        />
        <ServicePoint
          title="Нужна ментальная модель бизнеса"
          description="Нужно собрать более точную картину бизнеса перед стартом брендинга"
          animDelay={4}
        />
        <ServicePoint
          title="Много похожих решений в&nbsp;категории"
          description="Важно понять, как отстроиться на&nbsp;уровне образа и&nbsp;восприятия"
        />
        <ServicePoint
          title="Нужен исследовательский фундамент"
          description="База, на&nbsp;которую можно опереться при&nbsp;разработке бренд&#x2011;платформы и&nbsp;визуальной системы"
          animDelay={2}
        />
      </ServiceGrid>

      {/* ── Что мы предлагаем ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;предлагаем</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Перед стартом брендинга проводим исследование, которое помогает понять, как аудитория воспринимает категорию, продукт и&nbsp;сам бизнес.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint
          title="Целевая аудитория"
          tags={['ожидания']}
          description="Изучаем ЦА и&nbsp;её ожидания"
        />
        <ServicePoint
          title="Ассоциации и&nbsp;барьеры"
          tags={['триггеры', 'критерии']}
          description="Выявляем ассоциации, барьеры, триггеры и&nbsp;критерии восприятия"
          animDelay={2}
        />
        <ServicePoint
          title="Считываемость категории"
          tags={['рынок']}
          description="Анализируем, как люди считывают категорию и&nbsp;существующие решения на&nbsp;рынке"
          animDelay={3}
        />
        <ServicePoint
          title="Релевантные смыслы"
          tags={['образы']}
          description="Определяем, какие смыслы и&nbsp;образы действительно релевантны аудитории"
          animDelay={4}
        />
        <ServicePoint
          title="Ментальная модель"
          tags={['бизнес']}
          description="Формируем ментальную модель бизнеса и&nbsp;основу для&nbsp;будущего брендинга"
        />
      </ServiceGrid>
      <Section>
        <p className="font-color-dark-gray">На&nbsp;выходе клиент получает не&nbsp;абстрактные инсайты, а&nbsp;исследовательскую базу, которая помогает принимать более точные решения при&nbsp;разработке бренд&#x2011;платформы, айдентики и&nbsp;коммуникации.</p>
      </Section>

      {/* ── Команда ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Отдельная команда для&nbsp;исследования</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Работаем как встроенный юнит вашей команды.</p>
      </Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['управление']}
          title="Продюсер"
          description="Контролирует статусы, сроки и&nbsp;координирует проект"
        />
        <ServicePoint
          tagsTop={['экспертиза']}
          title="Ведущий исследователь"
          description="Определяет исследовательский фокус, собирает общую логику работы и&nbsp;формирует выводы"
        />
        <ServicePoint
          tagsTop={['исследования']}
          title="Исследователь"
          description="Проводит исследование, анализирует аудиторию, восприятие и&nbsp;контекст категории, готовит рекомендации в&nbsp;понятном формате"
        />
      </ServicePointRow>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['стратегия']}
          title="Стратег&nbsp;/ бренд&#x2011;специалист"
          description="Подключается к&nbsp;интерпретации выводов, чтобы перевести исследование в&nbsp;основу для&nbsp;брендинга"
        />
        <ServicePoint
          tagsTop={['дизайн']}
          title="Дизайнер"
          description="Использует результаты исследования как базу для&nbsp;разработки айдентики и&nbsp;визуальной системы"
        />
      </ServicePointRow>

      {/* ── Кому подходит ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Пакет подходит командам, которым важно строить брендинг на&nbsp;реальном понимании аудитории, а&nbsp;не&nbsp;на&nbsp;субъективных представлениях о&nbsp;том, «как&nbsp;должно быть».</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Директору по&nbsp;маркетингу" tags={['CMO']} />
        <ServicePoint title="Бренд&#x2011;директору" tags={['brand']} animDelay={2} />
        <ServicePoint title="Владельцу бизнеса" animDelay={3} />
        <ServicePoint title="Продуктовому маркетологу" animDelay={4} />
        <ServicePoint title="Команде, которая запускает новый бренд" tags={['запуск']} />
        <ServicePoint title="Команде редизайна или обновления айдентики" tags={['редизайн']} animDelay={2} />
      </ServiceGrid>

      {/* ── Что вы получите ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы&nbsp;получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Более точное понимание ЦА"
          description="Поймёте, какие ожидания, ассоциации и&nbsp;сигналы важны для&nbsp;людей в&nbsp;вашей категории"
        />
        <ServicePoint
          title="Ментальная модель бизнеса и&nbsp;бренда"
          description="Зафиксируем, как аудитория воспринимает продукт, компанию и&nbsp;контекст, в&nbsp;котором бренд должен существовать"
          animDelay={2}
        />
        <ServicePoint
          title="Ориентиры для&nbsp;бренд&#x2011;платформы"
          description="Поможем определить, на&nbsp;какие смыслы, образы и&nbsp;визуальные коды стоит опираться"
          animDelay={3}
        />
        <ServicePoint
          title="Снижение субъективности"
          description="Команда сможет принимать решения не&nbsp;только на&nbsp;основе вкуса или&nbsp;мнения стейкхолдеров"
          animDelay={4}
        />
        <ServicePoint
          title="Исследовательская основа"
          description="Результаты можно использовать как базу для&nbsp;разработки брендинга, коммуникации и&nbsp;визуальной системы"
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
          title="от&nbsp;500&nbsp;000&nbsp;₽"
        />
      </ServicePointRow>
      <Section>
        <p className="font-color-dark-gray">Стоимость и&nbsp;сроки зависят от&nbsp;глубины исследования, количества сегментов аудитории и&nbsp;состава исследовательских задач.</p>
      </Section>

      {/* ── Процесс ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;делаем и&nbsp;как</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Бриф', description: 'Погружаемся в&nbsp;контекст бизнеса, задачи брендинга, особенности продукта и&nbsp;цели проекта', tag: 'старт' },
        { num: '2', title: 'Фокус', description: 'Определяем, какие вопросы нужно прояснить до&nbsp;старта разработки бренда', tag: 'вопросы' },
        { num: '3', title: 'Аудитория', description: 'Изучаем аудиторию: её ожидания, мотивацию, восприятие категории и&nbsp;критерии выбора', tag: 'ЦА' },
      ]} />
      <ProcessSteps steps={[
        { num: '4', title: 'Рынок', description: 'Анализируем рынок, контекст и&nbsp;существующие визуальные и&nbsp;смысловые коды', tag: 'контекст' },
        { num: '5', title: 'Выводы', description: 'Формируем выводы о&nbsp;том, как должен восприниматься бренд и&nbsp;на&nbsp;что стоит опираться в&nbsp;разработке', tag: 'образ' },
        { num: '6', title: 'Передача', description: 'Передаём результаты в&nbsp;виде выводов, ориентиров и&nbsp;рекомендаций для&nbsp;бренд&#x2011;платформы и&nbsp;айдентики', tag: 'итог' },
      ]} />

      <ContactCard intro="Обсудим исследование под&nbsp;ваш брендинг?" />
    </>
  )
}
