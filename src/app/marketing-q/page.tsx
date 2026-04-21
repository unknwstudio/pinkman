import type { Metadata } from 'next'
import './marketing-q.css'

export const metadata: Metadata = {
  title: 'Участие в конкурсах',
  robots: { index: false, follow: false },
}

/* ── Pinkman logo (same SVG used in Nav) ── */
const PINKMAN_SVG = (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="36" height="36">
    <path d="M21.8368 4.41815H7.18411L0 47H14.5816L16.0042 38.637L36.703 43.8639C43.0335 45.4668 48.0126 42.3306 49.1507 35.222C51.5691 20.0292 49.5063 4 33.9289 4C29.1632 4 23.4017 7.13614 20.4143 12.0146L21.8368 4.41815ZM36.2051 29.9951L21.3389 26.2318C22.3348 21.9806 26.9582 16.6143 32.862 17.799C37.272 18.705 37.4143 25.5348 36.2051 29.9951Z" fill="currentColor"/>
  </svg>
)

/* ── Checkmark SVG for card selection indicator ── */
const CHECK_SVG = (
  <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

/* ── Contest data ── */
const CONTESTS = [
  {
    id: 'c1',
    name: 'Золотой Сайт',
    prestige: 'top' as const,
    categories: ['Сайт', 'UX/UI'],
    deadline: 'Сентябрь 2026',
    description: 'Крупнейший российский конкурс в\u00a0диджитале. Победа\u00a0\u2014 сильный аргумент для B2B-клиентов и\u00a0PR.',
    fee: '25\u00a0000\u00a0\u20bd',
  },
  {
    id: 'c2',
    name: 'Tagline Awards',
    prestige: 'top' as const,
    categories: ['Digital', 'Брендинг'],
    deadline: 'Ноябрь 2026',
    description: 'Индустриальная премия за\u00a0digital-проекты. Высокая видимость среди агентств и\u00a0клиентов.',
    fee: '35\u00a0000\u00a0\u20bd',
  },
  {
    id: 'c3',
    name: 'E+ Awards',
    prestige: 'top' as const,
    categories: ['Маркетинг', 'Эффективность'],
    deadline: 'Февраль 2027',
    description: 'Премия за\u00a0эффективность в\u00a0маркетинге (ex.\u00a0Effie Russia). Фокус на\u00a0измеримых бизнес-результатах, 500+\u00a0экспертов в\u00a0жюри.',
    fee: '95\u00a0000\u00a0\u20bd',
  },
  {
    id: 'c4',
    name: 'Рейтинг Рунета',
    prestige: 'high' as const,
    categories: ['Сайт', 'Дизайн'],
    deadline: 'Круглый год',
    description: 'Крупнейший рейтинг веб-студий и\u00a0агентств. Размещение кейса повышает видимость в\u00a0отрасли.',
    fee: 'Бесплатно',
  },
  {
    id: 'c5',
    name: 'AdIndex Awards',
    prestige: 'high' as const,
    categories: ['Маркетинг', 'Digital'],
    deadline: 'Октябрь 2026',
    description: 'Премия за\u00a0эффективные рекламные и\u00a0маркетинговые решения. Фокус на\u00a0результатах.',
    fee: '15\u00a0000\u00a0\u20bd',
  },
]

export default function MarketingQPage() {
  return (
    <div className="mq">
      {/* ── Header ── */}
      <div className="mq-hdr">
        <div className="mq-container">
          <div className="mq-hdr__logo">{PINKMAN_SVG}</div>
          <h1 className="mq-hdr__title">Участие в&nbsp;конкурсах</h1>
        </div>
      </div>

      {/* ── Intro ── */}
      <div className="mq-container">
        <p className="mq-intro">
          Выберите конкурсы, в&nbsp;которых хотите участвовать. Мы&nbsp;подготовим кейсы
          и&nbsp;материалы&nbsp;&mdash; от&nbsp;вас потребуется согласование текстов
          и&nbsp;оплата взносов.
        </p>
        <p className="mq-intro mq-intro--hint">
          <strong>Нажмите на&nbsp;карточку</strong>, чтобы выбрать или убрать конкурс.
        </p>
      </div>

      {/* ── Section title ── */}
      <div className="mq-container">
        <div className="mq-divider" />
        <p className="mq-sec-title">Конкурсы</p>
        <p className="mq-sec-sub">Выберите подходящие</p>
      </div>

      {/* ── Contest cards ── */}
      <div className="mq-container">
        <div className="mq-cards">
          {CONTESTS.map((c) => (
            <div key={c.id} className="mq-card-wrap">
              <input type="checkbox" className="cd-input" id={c.id} />
              <label className="cd" htmlFor={c.id}>
                <div className="cd-top">
                  <div className="cd-name">{c.name}</div>
                  <div className="cd-chk">{CHECK_SVG}</div>
                </div>
                <div className="cd-tags">
                  <span className={`tg ${c.prestige === 'top' ? 'tg-top' : 'tg-hi'}`}>
                    {c.prestige === 'top' ? '\u2605 Топ' : '\u25CF Высокий'}
                  </span>
                  {c.categories.map((cat) => (
                    <span key={cat} className="tg">{cat}</span>
                  ))}
                  <span className="tg tg-dl">{'\u23F0'} {c.deadline}</span>
                </div>
                <div className="cd-desc">{c.description}</div>
                <div className="cd-bot">
                  <div className="cd-fee">{c.fee} <span>взнос</span></div>
                </div>
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* ── Responsibilities ── */}
      <div className="mq-container">
        <div className="mq-resp-grid">
          <div className="mq-resp-card">
            <h3 className="mq-resp-title">
              <i className="mq-dot mq-dot--pk" />
              Pinkman
            </h3>
            <ul className="mq-resp-list">
              <li>Подготовка кейса: тексты, визуал, структура</li>
              <li>Оформление заявки по&nbsp;требованиям конкурса</li>
              <li>Подача материалов в&nbsp;срок</li>
              <li>Отслеживание статуса и&nbsp;результатов</li>
            </ul>
          </div>
          <div className="mq-resp-card">
            <h3 className="mq-resp-title">
              <i className="mq-dot mq-dot--cl" />
              Клиент
            </h3>
            <ul className="mq-resp-list">
              <li>Согласование текстов и&nbsp;фактов в&nbsp;кейсе</li>
              <li>Оплата конкурсных взносов (если применимо)</li>
              <li>Предоставление данных и&nbsp;метрик для кейса</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="mq-container mq-cta-wrap">
        <div className="mq-cta">
          Выбрали конкурсы? <strong>Отправьте скриншот этой страницы</strong> нам&nbsp;&mdash;
          и&nbsp;мы&nbsp;согласуем план.
        </div>
      </div>

      {/* ── Sticky bottom panel (CSS-only show/hide) ── */}
      <div className="bp">
        <div className="bp-label">{'\u2713'} Конкурсы выбраны</div>
        <div className="bp-hint">Сделайте скриншот и&nbsp;отправьте нам</div>
      </div>
    </div>
  )
}
