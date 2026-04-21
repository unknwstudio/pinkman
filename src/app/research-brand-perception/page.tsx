import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Восприятие бренда: как вас видит аудитория',
  description: 'Исследование восприятия бренда — как вас считывают люди, какие ассоциации возникают и что скорректировать, чтобы бренд работал на бизнес-задачу.',
  alternates: {
    canonical: 'https://pinkman.ru/research-brand-perception/',
  },
}

export default function ResearchBrandPerceptionPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Восприятие бренда: как&nbsp;вас видит аудитория</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Помогаем понять, как&nbsp;аудитория воспринимает ваш бренд, с&nbsp;какими смыслами и&nbsp;ассоциациями вас связывает и&nbsp;что нужно скорректировать, чтобы бренд считывался точнее и&nbsp;работал на&nbsp;бизнес&#x2011;задачу.</h2></div></Section>

      {/* ── В каких ситуациях ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">В&nbsp;каких ситуациях можем помочь</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Бренд существует, но&nbsp;непонятно восприятие"
          description="Непонятно, как его реально воспринимает аудитория"
        />
        <ServicePoint
          title="Коммуникация не&nbsp;даёт эффекта"
          description="Бюджеты идут, но&nbsp;нужной реакции и&nbsp;результата нет"
          animDelay={2}
        />
        <ServicePoint
          title="Нужна корректировка образа"
          description="Хотите поправить образ бренда без&nbsp;полного ребрендинга"
          animDelay={3}
        />
        <ServicePoint
          title="Бренд считывается не&nbsp;так"
          description="Есть ощущение, что бренд считывается не&nbsp;так, как хотелось&nbsp;бы"
          animDelay={4}
        />
        <ServicePoint
          title="Разница по&nbsp;сегментам"
          description="Важно понять различия восприятия по&nbsp;сегментам аудитории"
        />
        <ServicePoint
          title="Данные для&nbsp;PR и&nbsp;маркетинга"
          description="Нужно собрать данные для&nbsp;PR, маркетинга или бренд&#x2011;команды"
          animDelay={2}
        />
      </ServiceGrid>

      {/* ── Что мы предлагаем ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;предлагаем</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Проводим исследование восприятия бренда, чтобы понять, как вас видят люди, какие ассоциации у&nbsp;них возникают и&nbsp;какие сигналы стоит усилить или скорректировать.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint
          title="Текущее восприятие"
          tags={['образ']}
          description="Изучаем текущее восприятие бренда"
        />
        <ServicePoint
          title="Ассоциации и&nbsp;смыслы"
          tags={['образ', 'сигналы']}
          description="Анализируем ассоциации, смыслы и&nbsp;образ"
          animDelay={2}
        />
        <ServicePoint
          title="Разрыв восприятия"
          tags={['желаемое vs фактическое']}
          description="Выявляем разрыв между желаемым и&nbsp;фактическим восприятием"
          animDelay={3}
        />
        <ServicePoint
          title="Сегменты аудитории"
          tags={['различия']}
          description="Смотрим различия между сегментами аудитории"
          animDelay={4}
        />
        <ServicePoint
          title="Рекомендации"
          tags={['коммуникация', 'позиционирование']}
          description="Формируем рекомендации по&nbsp;коммуникации и&nbsp;позиционированию"
        />
      </ServiceGrid>
      <Section>
        <p className="font-color-dark-gray">На&nbsp;выходе команда получает не&nbsp;абстрактное мнение о&nbsp;бренде, а&nbsp;понятную картину: как вас считывают сейчас, что в&nbsp;образе работает, что мешает и&nbsp;как это можно корректировать.</p>
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
          description="Ведёт проект и&nbsp;координирует работу"
        />
        <ServicePoint
          tagsTop={['экспертиза']}
          title="Ведущий исследователь"
          description="Собирает исследовательскую рамку и&nbsp;формирует выводы"
        />
      </ServicePointRow>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['исследования']}
          title="Исследователь"
          description="Проводит интервью, опросы и&nbsp;анализ восприятия по&nbsp;сегментам"
        />
        <ServicePoint
          tagsTop={['стратегия']}
          title="Стратег&nbsp;/ бренд&#x2011;специалист"
          description="Помогает перевести выводы в&nbsp;рекомендации по&nbsp;позиционированию и&nbsp;коммуникации"
        />
      </ServicePointRow>

      {/* ── Кому подходит ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Бренд&#x2011;команде" tags={['brand']} />
        <ServicePoint title="Директору по&nbsp;маркетингу" tags={['CMO']} animDelay={2} />
        <ServicePoint title="PR&#x2011;команде" tags={['PR']} animDelay={3} />
        <ServicePoint title="Владельцу бизнеса" animDelay={4} />
        <ServicePoint title="Команде обновления коммуникации или позиционирования" tags={['коммуникация']} />
      </ServiceGrid>

      {/* ── Что вы получите ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы&nbsp;получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Понимание текущего восприятия"
          description="Увидите реальные ассоциации и&nbsp;образ в&nbsp;глазах аудитории"
        />
        <ServicePoint
          title="Разрыв желаемого и&nbsp;фактического"
          description="Станет ясно, где бренд считывается не&nbsp;так, как хотелось&nbsp;бы"
          animDelay={2}
        />
        <ServicePoint
          title="Различия по&nbsp;сегментам"
          description="Поймёте, как разные аудитории видят вас по&#x2011;разному"
          animDelay={3}
        />
        <ServicePoint
          title="Рекомендации по&nbsp;коммуникации"
          description="Команда поймёт, какие сигналы стоит усилить или скорректировать"
          animDelay={4}
        />
        <ServicePoint
          title="Основание для&nbsp;бренд&#x2011;решений"
          description="Результаты можно использовать в&nbsp;PR, маркетинге и&nbsp;бренд&#x2011;стратегии"
        />
      </ServiceGrid>

      {/* ── Сроки и стоимость ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Сроки и&nbsp;стоимость</h2></div></Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['сроки']}
          title="от&nbsp;3 до&nbsp;6 недель"
        />
        <ServicePoint
          tagsTop={['стоимость']}
          title="от&nbsp;600&nbsp;000&nbsp;₽"
        />
      </ServicePointRow>

      {/* ── Процесс ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;делаем и&nbsp;как</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Бриф', description: 'Определяем, что именно важно понять про&nbsp;бренд и&nbsp;его восприятие', tag: 'старт' },
        { num: '2', title: 'Сегменты', description: 'Формируем сегменты аудитории и&nbsp;исследовательский подход', tag: 'подход' },
        { num: '3', title: 'Полевой этап', description: 'Проводим опросы, интервью или комбинированное исследование', tag: 'данные' },
      ]} />
      <ProcessSteps steps={[
        { num: '4', title: 'Анализ', description: 'Анализируем ассоциации, образ и&nbsp;различия между сегментами', tag: 'анализ' },
        { num: '5', title: 'Картина восприятия', description: 'Формируем картину текущего восприятия бренда', tag: 'образ' },
        { num: '6', title: 'Рекомендации', description: 'Передаём рекомендации по&nbsp;корректировке образа и&nbsp;коммуникации', tag: 'итог' },
      ]} />

      {/* ── Кейсы ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: 'var(--32px)' }}><h2 className="h1">Кейсы</h2></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--16px)' }}>
          <div className="anim">
            <p className="text-regular font-color-black"><strong>MOEX</strong></p>
            <p className="text-regular font-color-dark-gray">Исследование восприятия бренда и&nbsp;ориентиры для&nbsp;корректировки коммуникации</p>
          </div>
        </div>
      </Section>

      <ContactCard intro="Обсудим исследование восприятия вашего бренда?" />
    </>
  )
}
