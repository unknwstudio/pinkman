import Link from 'next/link'

interface ContactCardProps {
  intro?: string
  role?: string
  phone?: string
  email?: string
}

export default function ContactCard({
  intro = 'Обсудим ваши задачи?',
  role = 'Аккаунт\u2011директор Юрий Григоренко\u00a0— подберёт команду и\u00a0расскажет, как\u00a0это работает.',
  phone = '+79153110332',
  email = 'grig@pinkman.ru',
}: ContactCardProps) {
  return (
    <div className="portfolio-section contacts-main-section">
      <div className="main-container">
        <div className="contacts-card">
          <p className="contacts-intro">{intro}</p>
          <p className="contacts-role">{role}</p>
          <div className="contacts-links">
            <Link className="contacts-link-btn" href={`tel:${phone}`}>
              +7&nbsp;915&nbsp;311&nbsp;03&nbsp;32
            </Link>
            <Link className="contacts-link-btn contacts-link-btn--light" href={`mailto:${email}`}>
              {email}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
