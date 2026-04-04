import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Контакты',
  description: 'Обсудите проект с командой Пинкман. Напишите нам в Telegram или на email.',
  alternates: {
    canonical: 'https://pinkman.ru/contact-us/',
  },
}

export default function ContactUsPage() {
  return (
    <>
      <div className="contacts-hero-section">
        <div className="main-container">
          <div className="contacts-hero-inner">
            <p className="text-big contacts-headline">Контакты</p>
          </div>
        </div>
      </div>

      <div className="portfolio-section contacts-main-section">
        <div className="main-container">
          <div className="contacts-card">
            <p className="contacts-intro">Чтобы начать — напишите Юре Григоренко.</p>
            <p className="contacts-role">Директор ответит на&nbsp;вопросы, подготовит смету, соберёт команду.</p>
            <div className="contacts-links">
              <a className="contacts-link-btn" href="https://t.me/grig44" target="_blank" rel="noopener noreferrer">
                <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.58-.46.72-.93.45l-2.57-1.9-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.61 4.71-4.25c.2-.18-.05-.28-.32-.1L7.9 14.88 5.4 14.1c-.56-.17-.57-.56.12-.83l8.93-3.44c.46-.17.87.11.19.97z" fill="currentColor" />
                </svg>
                Телеграм
              </a>
              <a className="contacts-link-btn contacts-link-btn--light" href="https://max.ru/u/f9LHodD0cOLGmNXsCKv4ib6sndokpq017yhtgo9oCIplQdTTW4hLd7Z8fn8" target="_blank" rel="noopener noreferrer">
                <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor" />
                </svg>
                MAX
              </a>
              <a className="contacts-link-btn contacts-link-btn--light" href="mailto:yg@pinkman.ru">
                <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
                </svg>
                E-mail
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-section contacts-legal-section">
        <div className="main-container">
          <div className="text-h3-wrapper is__text-color-dark-wrapper contacts-legal">
            <h3 className="text-h3-mb">ООО «Студия Пинкман»</h3>
            <h3 className="text-h3-mb">ИНН 9721052900</h3>
            <h3 className="text-h3-mb">Основной код ОКВЭД: 62.09</h3>
            <h3 className="text-h3-mb">Виды деятельности в&nbsp;области ИТ: 1.01, 1.04, 1.05</h3>
            <h3>109507, Москва г, Самаркандский Бульвар 137А,<br />корпус 11, квартира 116</h3>
          </div>
        </div>
      </div>
    </>
  )
}
