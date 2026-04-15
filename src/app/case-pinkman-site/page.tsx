import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import StatGrid from '@/components/StatGrid/StatGrid'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'

export const metadata: Metadata = {
  title: 'Кейс — разработка сайта Pinkman',
  description: 'Сайт топовой дизайн-студии теперь обновляет нейронка — легко, без разработчиков.',
  alternates: {
    canonical: 'https://pinkman.ru/case-pinkman-site/',
  },
}

export default function CasePinkmanSitePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section>
        <div className="text-big-wrapper">
          <p className="text-big">Сайт топовой дизайн&#x2011;студии теперь обновляет нейронка — легко, без разработчиков</p>
        </div>
      </Section>

      <Section>
        <img
          src="/images/case-pinkman-hero.png"
          alt="Pinkman сайт"
          className="case-pinkman-hero-img"
          loading="eager"
        />
      </Section>

      <Section><div className="text-h2-wrapper"><h2>Перенесли сайт с&nbsp;Webflow на&nbsp;собственное решение с&nbsp;нейронками&nbsp;&mdash; теперь любой человек из&nbsp;команды может вносить изменения в&nbsp;прод за&nbsp;несколько минут, без&nbsp;ожидания разработчиков и&nbsp;лишних костов для&nbsp;новых блоков и&nbsp;страниц.</h2></div></Section>

      <Section>
        <a href="https://pinkman.ru" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
          <h2 className="h1" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>pinkman.ru&nbsp;↗</h2>
        </a>
      </Section>

      {/* ── Результат ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Результат</h2></div></Section>
      <StatGrid items={[
        { value: '~7 дней', label: 'полный перенос и отладка сайта' },
        { value: '0 мин', label: 'ожидание разработчика для любых правок' },
        { value: '6+', label: 'человек обновляют сайт самостоятельно' },
        { value: 'Несколько минут', label: 'публикация кейса с новыми блоками' },
      ]} />

      {/* ── Проблема — жёлтая плашка ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: 'var(--16px)' }}><h2 className="h1">Как было раньше</h2></div></Section>
      <Section>
        <div className="callout-box callout-box--yellow anim case-pinkman-card">
          <p className="text-regular font-color-black">Сайт студии работал на&nbsp;Webflow&nbsp;&mdash; популярной зарубежной платформе. После ряда ограничений сайт перестал открываться у&nbsp;российской аудитории. Основной канал коммуникации с&nbsp;клиентами работал через раз, форма обратной связи&nbsp;&mdash; нестабильно.</p>
          <p className="text-regular font-color-black" style={{ marginTop: 'var(--16px)' }}>Перенос на&nbsp;новый конструктор с&nbsp;кастомизацией требовал больших денежных и, самое важное, временных затрат&nbsp;&mdash; около полутора месяцев с&nbsp;учётом рисков и&nbsp;технических сложностей. А&nbsp;сайт должен работать и&nbsp;корректно открываться уже сейчас.</p>
          <p className="text-regular font-color-black" style={{ marginTop: 'var(--16px)' }}>Параллельно существовала операционная боль&nbsp;&mdash; и&nbsp;у&nbsp;неё было два уровня:</p>
        </div>
      </Section>

      <ServicePointRow>
        <ServicePoint
          tagsTop={['мелкие правки']}
          title="Часы ожидания"
          description="Поменять ссылку, текст или картинку технически было возможно через встроенную админку&nbsp;&mdash; но&nbsp;интерфейс был ориентирован на&nbsp;разработчиков. На&nbsp;практике быстро это умели делать лишь несколько человек, и&nbsp;любая мелочь превращалась в&nbsp;задачу с&nbsp;очередью."
        />
        <ServicePoint
          tagsTop={['структурные изменения']}
          title="От&nbsp;4 дней"
          description="Если нужно было изменить логику страницы или добавить нестандартный блок&nbsp;&mdash; сначала маркетолог формировал задачу, дизайнер отрисовывал макет, потом разработчик верстал. Опубликовать кейс с&nbsp;изменёнными блоками раньше чем через 4&nbsp;дня было невозможно."
        />
        <ServicePoint variant="default" title="" description="" />
      </ServicePointRow>

      {/* ── До и после — две карточки ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">До&nbsp;и&nbsp;после</h2></div></Section>
      <div className="service-points-section">
        <div className="case-pinkman-ba-grid">
          {/* Было */}
          <div className="case-pinkman-ba-card case-pinkman-ba-card--was case-pinkman-card">
            <p className="case-pinkman-ba-heading">Было</p>
            {[
              'Сайт не\u00a0открывается в\u00a0России',
              'Мелкая правка — только через одного человека',
              'Новый блок — ждать дизайнера и\u00a0разработчика',
              'Публикация кейса: 36–56 часов',
            ].map((text, i) => (
              <div key={i} className="case-pinkman-ba-row">
                <p className="text-regular font-color-black">{text}</p>
              </div>
            ))}
          </div>
          {/* Стало */}
          <div className="case-pinkman-ba-card case-pinkman-ba-card--now case-pinkman-card">
            <p className="case-pinkman-ba-heading">Стало</p>
            {[
              'Сайт работает для\u00a0всей российской аудитории',
              'Любую правку делает любой из\u00a06 сотрудников',
              'Новый блок — без\u00a0отдельного дизайна и\u00a0разработки',
              'Публикация кейса: минуты',
            ].map((text, i) => (
              <div key={i} className="case-pinkman-ba-row">
                <p className="text-regular font-color-black">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Решение — розовая плашка ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: 'var(--16px)' }}><h2 className="h1">Решение</h2></div></Section>
      <Section>
        <div className="callout-box anim case-pinkman-card">
          <p className="text-regular font-color-black">Мы&nbsp;перенесли сайт на&nbsp;собственное решение с&nbsp;AI&#x2011;ассистентом в&nbsp;основе. Теперь вносить изменения может любой человек из&nbsp;команды без&nbsp;технических навыков&nbsp;&mdash; отдел продаж, продуктовый отдел, дизайнеры, основатели студии. Баг, правка, новый кейс&nbsp;&mdash; исправляется сразу, без&nbsp;заявок и&nbsp;ожиданий.</p>
        </div>
      </Section>

      <div className="service-points-section">
        <div className="process-steps">
          <div className="process-steps__list" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="process-step case-pinkman-card">
              <div className="process-step__num">
                <span className="process-step__num-badge" style={{ background: '#444' }}>1</span>
                <span className="process-step__tag">~3 дня</span>
              </div>
              <h3>Перенос</h3>
              <p>Полный перенос сайта с&nbsp;Webflow на&nbsp;собственное решение</p>
            </div>
            <div className="process-step case-pinkman-card">
              <div className="process-step__num">
                <span className="process-step__num-badge" style={{ background: '#444' }}>2</span>
                <span className="process-step__tag">3–4 дня</span>
              </div>
              <h3>Отладка</h3>
              <p>Точечные правки, проверка всех страниц и&nbsp;корректности отображения</p>
            </div>
            <div className="process-step case-pinkman-card">
              <div className="process-step__num">
                <span className="process-step__num-badge">✓</span>
                <span className="process-step__tag">~7 дней</span>
              </div>
              <h3>Полный запуск</h3>
              <p>Против полутора месяцев на&nbsp;перенос через классическую разработку</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── UI-kit ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}><h2 className="h1">Внутренний UI&#x2011;kit, который растёт вместе с&nbsp;сайтом</h2></div>
        <p className="font-color-dark-gray">В&nbsp;основе решения&nbsp;&mdash; собственный UI&#x2011;kit: набор визуальных констант и&nbsp;компонентов, которым пользуется нейронка при&nbsp;каждом запросе. Это означает, что любой новый блок или страница автоматически соответствует стилистике сайта. Нейронка не&nbsp;просто выполняет задачи&nbsp;&mdash; она развивает UI&#x2011;kit исходя из&nbsp;новых запросов, сохраняя визуальную целостность без&nbsp;участия дизайнера.</p>
      </Section>
      <Section><div className="text-big-wrapper"><p className="text-big" style={{ color: '#555' }}>Раньше, чтобы поменять что&#x2011;то на&nbsp;сайте, нужно было писать разработчику и&nbsp;ждать. Сейчас это делает любой человек из&nbsp;команды за&nbsp;минуту.</p></div></Section>

      {/* ── CTA ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}><h2 className="h1">Хотите так&nbsp;же? Свяжитесь с&nbsp;нами!</h2></div>
        <p className="font-color-dark-gray">Если ваш сайт работает на&nbsp;зарубежной платформе или обновление контента занимает дни&nbsp;&mdash; расскажем, как это решить для&nbsp;вашего бизнеса.</p>
      </Section>

      {/* ── Контакты с фото Юры ── */}
      <div className="portfolio-section contacts-main-section">
        <div className="main-container">
          <div className="contacts-card" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--24px)' }}>
            <img
              src="/images/yura-grig.png"
              alt="Юрий Григоренко"
              style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
            />
            <div>
              <p className="contacts-role">Управляющий партнер Юрий Григоренко&nbsp;&mdash; расскажет, как&nbsp;это работает и&nbsp;подойдёт&nbsp;ли вам.</p>
              <div className="contacts-links">
                <Link className="contacts-link-btn" href="tel:+79153110332">
                  +7&nbsp;915&nbsp;311&nbsp;03&nbsp;32
                </Link>
                <Link className="contacts-link-btn contacts-link-btn--light" href="mailto:grig@pinkman.ru">
                  grig@pinkman.ru
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
