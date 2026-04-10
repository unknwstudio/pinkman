import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Section from '@/components/Section/Section'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ServicePoint from '@/components/ServicePoint/ServicePoint'

export const metadata: Metadata = {
  title: 'Аутстафф дизайнеров pinkman для Сбермаркетинга',
  robots: { index: false, follow: false },
}

/** Wraps `term` inside the left-column text with the site's AI-blue accent. */
function accent(text: string, term: string): ReactNode {
  const idx = text.indexOf(term)
  if (idx === -1) return text
  return (
    <>
      {text.slice(0, idx)}
      <span style={{ color: '#f03882' }}>{text.slice(idx, idx + term.length)}</span>
      {text.slice(idx + term.length)}
    </>
  )
}

const OFFER_ITEMS: { left: string; hl: string; right: string }[] = [
  {
    left: 'Мультидисциплинарных дизайнеров с\u00a0продвинутыми AI-скиллами в\u00a0графике. Под ваши типовые задачи подбираются максимально релевантные дизайнеры из\u00a0студии и\u00a0базы талантов студии\u00a0— с\u00a0кем мы\u00a0работаем на\u00a0реальных проектах ежедневно',
    hl: 'Мультидисциплинарных дизайнеров с\u00a0продвинутыми AI-скиллами',
    right: 'понимаем, какие у\u00a0вас типовые и\u00a0не\u00a0типовые задачи и\u00a0подбираем релевантного дизайнера\u00a0/ в\u00a0студии дизайн-лид, который занимается дизайнером для\u00a0обеспечения высокого качества работы',
  },
  {
    left: 'Отдельная команда продакшена\u00a0— продюсер, лид, ведущие дизайнеры, дизайнеры',
    hl: 'Отдельная команда продакшена',
    right: 'всегда понятно, у\u00a0кого что в\u00a0работе и\u00a0когда будет результат',
  },
  {
    left: 'Еженедельное совместное планирование, чтобы взять в\u00a0работу действительно то, что в\u00a0приоритете',
    hl: 'Еженедельное совместное планирование',
    right: 'предлагаем сделать по\u00a0понедельникам или четвергам в\u00a013:00',
  },
  {
    left: 'Самостоятельно управляем ёмкостью команд под\u00a0ваши задачи, имеем базу талантов для\u00a0любого типа задачи',
    hl: 'Самостоятельно управляем ёмкостью команд',
    right: 'от\u00a0вас только задачи, от\u00a0нас их\u00a0решение, реализация и\u00a0поиск ресурсов',
  },
  {
    left: 'Имеем возможность брать задачи вне\u00a0планирования, вне\u00a0рабочего времени с\u00a0двойной оплатой. Продюсер показывает прозрачно все затраченные часы',
    hl: 'задачи вне\u00a0планирования',
    right: 'можем усилить команду в\u00a0будни и\u00a0в\u00a0выходные, обычно оплата ×2',
  },
  {
    left: 'Мультидисциплинарны и\u00a0вариативны по\u00a0задачам маркетинга, которые можем взять в\u00a0работу и\u00a0предоставить по\u00a0ним качественный результат',
    hl: 'Мультидисциплинарны и\u00a0вариативны',
    right: 'статика, motion, CG, AI\u00a0продакшен: от\u00a0баннеров до\u00a0спецпроектов (и\u00a0не\u00a0только)',
  },
  {
    left: 'Проводим совместное ретро раз в\u00a0квартал, чтобы улучшить процессы',
    hl: 'ретро раз в\u00a0квартал',
    right: 'обсудим, что было хорошо, а\u00a0что можно улучшить',
  },
  {
    left: 'Подготовим внутренние гайды и\u00a0описание процессов проекта, чтобы ускорить работу над\u00a0задачами и\u00a0запуск рекламных кампаний',
    hl: 'внутренние гайды',
    right: 'сохраняем драгоценные минуты на\u00a0онбординг и\u00a0погружение, всегда ожидаемое качество за\u00a0счёт чек-листов',
  },
]

const TABLE_ROWS: [string, string, string][] = [
  ['Зарплата на\u00a0руки', '~200\u00a0000\u00a0₽', '\u2014'],
  ['Gross (с\u00a0учётом НДФЛ\u00a013%)', '~230\u00a0000\u00a0₽', '\u2014'],
  ['Страховые взносы (~30% от\u00a0gross)', '~69\u00a0000\u00a0₽', '\u2014'],
  ['Итого: зарплата\u00a0+ налоги', '~299\u00a0000\u00a0₽', '\u2014'],
  ['Техника и\u00a0ПО (Figma, Adobe и\u00a0др.)', '~15\u00a0000–20\u00a0000\u00a0₽/мес', 'включено'],
  ['Онбординг и\u00a0обучение', '~20\u00a0000–50\u00a0000\u00a0₽ разово', 'включено'],
  ['HR-поддержка (рекрутер, кадровик)', '~10\u00a0000–15\u00a0000\u00a0₽/мес', 'включено'],
  ['Больничные и\u00a0отпуска', 'риск простоя, замену ищете сами', 'замена на\u00a0стороне студии'],
  ['Сорсинг и\u00a0найм (4–8\u00a0недель)', 'время HR\u00a0+ руководителя', 'не\u00a0требуется'],
]

const RISKS = [
  'Замена специалиста\u00a0— ответственность студии',
  'Непрерывность работы гарантирована',
  'Никаких простоев в\u00a0производстве',
]

const COSTS = [
  'Никаких налогов и\u00a0страховых взносов',
  'Никаких расходов на\u00a0технику и\u00a0лицензии ПО',
  'Никаких затрат на\u00a0онбординг\u00a0— продюсер берёт это на\u00a0себя',
  'Никаких HR-расходов',
]

export default function OutstaffingSbermarketingPage() {
  return (
    <div style={{ maxWidth: '1440px', margin: '0 auto', width: '100%' }}>
      {/* ── Hero ── */}
      <Section>
        <div className="text-big-wrapper">
          <p className="text-big">Аутстафф дизайнеров pinkman для&nbsp;Сбермаркетинга</p>
        </div>
      </Section>

      {/* ── Что мы предлагаем ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Что мы&nbsp;предлагаем</h2>
        </div>
        <p className="font-color-dark-gray">
          Мультидисциплинарных дизайнеров (от&nbsp;250&nbsp;000 рублей в&nbsp;месяц за&nbsp;одного дизайнера). В&nbsp;таком формате мы&nbsp;работаем сейчас с&nbsp;ГПБ, Яндекс Плюс, Яндекс Открытая Кухня. Команды от&nbsp;1 до&nbsp;8&nbsp;человек.
        </p>
        <p className="font-color-dark-gray" style={{ marginTop: 'var(--24px)' }}>
          Если необходима целая команда продакшена, соберем релевантную команду под&nbsp;ваш запрос от&nbsp;Pinkman. Это полноценная производственная единица с&nbsp;продюсером, лидом и&nbsp;дизайнерами, встроенная в&nbsp;вашу команду. Так мы&nbsp;работаем с&nbsp;Яндекс AdTech, Магнит, Яндекс Лавка, ВТБ. Команды от&nbsp;4 до&nbsp;32&nbsp;человек.
        </p>
      </Section>

      {/* ── Two-column offer list ── */}
      <Section>
        <div className="list-wrapper padding-32px">
          {OFFER_ITEMS.map((item, i) => (
            <div
              key={i}
              className="list-item-wrapper"
              style={{ justifyContent: 'flex-start', alignItems: 'flex-start', gap: 'var(--64px)' }}
            >
              <p style={{ flex: 1, fontWeight: 600, lineHeight: 1.4 }}>
                {accent(item.left, item.hl)}
              </p>
              <p className="font-color-dark-gray" style={{ flex: 1, lineHeight: 1.5 }}>
                {item.right}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Экономика ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Почему аутстафф дизайнера pinkman выгоднее, чем&nbsp;штатный найм</h2>
        </div>
      </Section>

      <Section>
        <div className="callout-box anim">
          <p className="text-regular">
            Экономия при аутстаффе: <strong>~75&nbsp;000–90&nbsp;000&nbsp;₽ в&nbsp;месяц</strong>, или <strong>~900&nbsp;000–1&nbsp;000&nbsp;000&nbsp;₽ в&nbsp;год</strong>
          </p>
        </div>
      </Section>

      <Section>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 'clamp(13px, 1.4vw, 16px)' }}>
            <thead>
              <tr>
                {['Статья расходов', 'Штатный дизайнер', 'Аутстафф Pinkman'].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '12px 16px',
                      fontWeight: 600,
                      borderBottom: '2px solid #e8e8e8',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(([label, staff, pinkman], i) => (
                <tr key={i} style={{ borderBottom: '1px solid #f0f0f0' }}>
                  <td style={{ padding: '11px 16px', color: '#555' }}>{label}</td>
                  <td style={{ padding: '11px 16px', color: '#555' }}>{staff}</td>
                  <td
                    style={{
                      padding: '11px 16px',
                      color: pinkman === 'включено' ? '#1a9e5c' : pinkman === '\u2014' ? '#bbb' : '#555',
                    }}
                  >
                    {pinkman}
                  </td>
                </tr>
              ))}
              <tr style={{ background: '#0d0d0d' }}>
                <td style={{ padding: '14px 16px', fontWeight: 700, color: '#fff', borderRadius: '12px 0 0 12px' }}>ИТОГО в&nbsp;месяц</td>
                <td style={{ padding: '14px 16px', fontWeight: 700, color: '#fff' }}>~325&nbsp;000–340&nbsp;000&nbsp;₽</td>
                <td style={{ padding: '14px 16px', fontWeight: 700, color: '#fff', borderRadius: '0 12px 12px 0' }}>250&nbsp;000&nbsp;₽</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Экономия времени на&nbsp;найм</h2>
        </div>
        <p className="font-color-dark-gray">
          Поиск и&nbsp;отбор одного дизайнера занимает в&nbsp;среднем 4–8&nbsp;недель и&nbsp;требует времени HR, нанимающего менеджера и&nbsp;руководителя на&nbsp;интервью. При аутстаффе эти часы освобождаются полностью&nbsp;— команда готова к&nbsp;работе сразу.
        </p>
      </Section>

      {/* ── Нет операционных рисков ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Нет операционных рисков</h2>
        </div>
        <p className="font-color-dark-gray" style={{ marginBottom: 'var(--24px)' }}>
          При штатном найме больничные, отпуска, декрет и&nbsp;увольнение&nbsp;— ваша проблема. При аутстаффе:
        </p>
        <div className="list-wrapper padding-32px">
          <div className="list">
            {RISKS.map((item, i) => (
              <div key={i} className="list-item-wrapper">
                <div className="bullet-wrapper-left">
                  <h3>{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Нет скрытых расходов ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Нет скрытых расходов</h2>
        </div>
        <p className="font-color-dark-gray" style={{ marginBottom: 'var(--24px)' }}>
          При аутстаффе от&nbsp;Pinkman:
        </p>
        <div className="list-wrapper padding-32px">
          <div className="list">
            {COSTS.map((item, i) => (
              <div key={i} className="list-item-wrapper">
                <div className="bullet-wrapper-left">
                  <h3>{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Итого ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Итого</h2>
        </div>
      </Section>
      <ServicePointRow>
        <ServicePoint
          title="Аутстафф от&nbsp;Pinkman"
          description="250&nbsp;000&nbsp;₽/мес"
        />
        <ServicePoint
          title="Штатный дизайнер"
          description="~325&nbsp;000–340&nbsp;000&nbsp;₽/мес"
          animDelay={2}
        />
      </ServicePointRow>

      {/* ── Контакты ── */}
      <div className="portfolio-section contacts-main-section">
        <div className="main-container">
          <div className="contacts-card">
            <p className="contacts-intro">Аккаунт-директор: Юрий&nbsp;Григоренко</p>
            <p className="contacts-role">
              <a href="https://t.me/grig44" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>@grig44</a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="mailto:grig@pinkman.ru" style={{ color: 'inherit' }}>grig@pinkman.ru</a>
              &nbsp;&nbsp;·&nbsp;&nbsp;
              <a href="tel:+79153110332" style={{ color: 'inherit' }}>+7&nbsp;915&nbsp;311&nbsp;03&nbsp;32</a>
            </p>
            <div className="contacts-links">
              <a
                className="contacts-link-btn"
                href="https://t.me/grig44"
                target="_blank"
                rel="noopener noreferrer"
              >
                Написать в&nbsp;Telegram
              </a>
              <a
                className="contacts-link-btn contacts-link-btn--light"
                href="mailto:grig@pinkman.ru"
              >
                grig@pinkman.ru
              </a>
              <a
                className="contacts-link-btn contacts-link-btn--light"
                href="tel:+79153110332"
              >
                +7&nbsp;915&nbsp;311&nbsp;03&nbsp;32
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
