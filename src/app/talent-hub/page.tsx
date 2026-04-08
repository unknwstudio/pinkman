import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import TalentHubBar from '@/components/TalentHubBar/TalentHubBar'
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion'

export const metadata: Metadata = {
  title: 'Pinkman Talent Hub',
  description:
    'Собираем вокруг себя талантливых специалистов с опытом, чтобы делать вместе проекты фестивального уровня.',
  alternates: {
    canonical: 'https://pinkman.ru/talent-hub/',
  },
}

const FAQ_ITEMS = [
  {
    question: 'Как попасть в&nbsp;штат?',
    answer:
      'Только опытному специалисту, который поработал с&nbsp;нами попроектно и&nbsp;зарекомендовал себя.',
  },
  {
    question: 'Как поработать попроектно?',
    answer:
      'Заполнить форму и&nbsp;пройти тестовые задания.',
  },
  {
    question: 'Есть ли&nbsp;стажировки?',
    answer:
      'Бесплатных стажировок нет, но&nbsp;есть тестовые задания на&nbsp;основе реальных задач с&nbsp;оплачиваемым результатом.',
  },
  {
    question: 'Нет опыта, но&nbsp;хочу с&nbsp;вами работать',
    answer:
      'Рекомендуем начать с&nbsp;курсов <a href="https://wannabe.ru" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">wannabe.ru</a>, потом пройти тестовые.',
  },
  {
    question: 'Оставил отклик, что дальше?',
    answer:
      'Отклик отсмотрит дизайн-директор или&nbsp;лид. Тестовые идут в&nbsp;приоритет.',
  },
  {
    question: 'Сделал тестовое, что дальше?',
    answer:
      'Придёт письмо с&nbsp;ревью с&nbsp;talent@pinkman.studio в&nbsp;течение 3&nbsp;дней&nbsp;&mdash; 2&nbsp;недель.',
  },
]

export default function TalentHubPage() {
  return (
    <>
      {/* ── Custom sticky bar ── */}
      <TalentHubBar />

      {/* ── Hero ── */}
      <Section>
        <div className="text-big-wrapper">
          <p className="text-big">Pinkman Talent Hub</p>
        </div>
      </Section>
      <Section>
        <div className="text-h2-wrapper">
          <h2>
            Собираем вокруг себя талантливых специалистов с&nbsp;опытом,
            чтобы делать вместе проекты фестивального уровня
            в&nbsp;рамках проектного сотрудничества.
          </h2>
        </div>
      </Section>
      <Section>
        <div className="text-h2-wrapper" style={{ paddingTop: 0 }}>
          <p className="font-color-dark-gray text-regular">
            Чтобы попасть в&nbsp;нашу базу талантов, нужно оставить отклик
            через форму и&nbsp;пройти тестовые задания.
          </p>
        </div>
      </Section>

      {/* ── Кого мы ищем ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Кого мы&nbsp;ищем</h2>
        </div>
      </Section>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['AI']}
          title="AI-ориентированных"
          description="Кто может с&nbsp;помощью технологий получить необходимый результат."
        />
        <ServicePoint
          tagsTop={['опыт']}
          title="С&nbsp;опытом на&nbsp;реальных проектах"
          description="Со&nbsp;знанием того, как строится дизайн-процесс."
          animDelay={2}
        />
      </ServicePointRow>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['ответственность']}
          title="Обязательных и&nbsp;ответственных"
        />
        <ServicePoint
          tagsTop={['high potential']}
          title="С&nbsp;большим потенциалом"
          animDelay={2}
        />
      </ServicePointRow>

      {/* ── Callout — Особенно ищем ── */}
      <Section>
        <div className="callout-box anim">
          <h3 className="font-color-black" style={{ marginBottom: 'var(--8px)' }}>
            Особенно ищем прямо сейчас
          </h3>
          <p className="text-regular font-color-dark-gray">
            Дизайнеров на&nbsp;концепты интерфейсов, AI-дизайнеров на&nbsp;статику
            и&nbsp;ролики, CG-специалистов, motion-дизайнеров, 3D-дизайнеров
          </p>
        </div>
      </Section>

      {/* ── Что нужно сделать ── */}
      <Section>
        <div className="text-h1-wrapper">
          <h2 className="h1">Что нужно сделать, чтобы начать работать с&nbsp;нами</h2>
        </div>
      </Section>
      <ProcessSteps
        compact
        steps={[
          {
            num: '1',
            title: 'Заполнить форму',
            description: '<a href="https://airtable.com/appNFasdKaA7VMRcv/pagNXJJsEKtJhwys5/form" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">Оставить отклик</a>',
            tag: 'отклик',
          },
          {
            num: '2',
            title: 'Пройти тестовое задание',
            description: '<a href="https://airtable.com/appNFasdKaA7VMRcv/pagIoxATuyvLeg6FS/form" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">Пройти тестовые</a>',
            tag: 'тестовое',
          },
        ]}
      />
      <Section>
        <div className="text-h2-wrapper" style={{ paddingTop: 0 }}>
          <p className="font-color-dark-gray text-regular">
            Все тестовые задания отсматривают наши арт-директора, лиды студии
            и&nbsp;ведущие дизайнеры. Мы&nbsp;отправляем обратную связь каждому
            лично на&nbsp;почту.
          </p>
        </div>
      </Section>

      {/* ── Форматы работы ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Форматы работы</h2>
        </div>
      </Section>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['01']}
          title="Всё официально"
          description="Договор, NDA, СЗ или ИП. Оплата обсуждается перед стартом по&nbsp;каждой задаче."
        />
        <ServicePoint
          tagsTop={['02']}
          title="Краткосрочно"
          description="На&nbsp;отдельные задачи."
          animDelay={2}
        />
      </ServicePointRow>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['03']}
          title="Попроектно"
          description="Занятость на&nbsp;квартал."
        />
        <ServicePoint
          tagsTop={['04']}
          title="Путь в&nbsp;штат"
          description="После проектной работы&nbsp;&mdash; возможность попасть в&nbsp;штат студии."
          animDelay={2}
        />
      </ServicePointRow>

      {/* ── Почему ребятам нравится ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Почему ребятам нравится работать с&nbsp;нами</h2>
        </div>
      </Section>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['01']}
          title="Внимательный арт-дирекшен"
          description="С&nbsp;корректной обратной связью."
        />
        <ServicePoint
          tagsTop={['02']}
          title="Приятная и&nbsp;чёткая коммуникация"
          description="Здоровая атмосфера."
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['03']}
          title="Интересные проекты"
          description="Музейные, концертные, рекламные кампании."
          animDelay={3}
        />
      </ServicePointRow>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['04']}
          title="Разнообразные проекты"
          description="От&nbsp;мелких задачек до&nbsp;фуллтайм вызовов."
        />
        <ServicePoint
          tagsTop={['05']}
          title="Развитие скиллов"
          description="Благодаря команде."
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['06']}
          title="Оплата чётко и&nbsp;вовремя"
          animDelay={3}
        />
      </ServicePointRow>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['07']}
          title="Ноль бюрократии"
          description="Электронный документооборот."
        />
        <ServicePoint
          tagsTop={['08']}
          title="Причастность к&nbsp;команде"
          description="Причастность к&nbsp;команде и&nbsp;результату."
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['09']}
          title="Профессионалы"
          description="Внутри все без&nbsp;исключения профессионалы."
          animDelay={3}
        />
      </ServicePointRow>

      {/* ── FAQ ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">FAQ</h2>
        </div>
      </Section>
      <Section>
        <FaqAccordion items={FAQ_ITEMS} />
      </Section>

      {/* ── Контакты ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Контакты</h2>
        </div>
        <div style={{ paddingTop: 'var(--8px)' }}>
          <a
            href="mailto:talent@pinkman.studio"
            className="contacts-link-btn contacts-link-btn--light"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
            </svg>
            talent@pinkman.studio
          </a>
        </div>
      </Section>

      {/* Bottom padding so sticky bar doesn't overlap content */}
      <div style={{ height: '140px' }} />
    </>
  )
}
