import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Аутстафф дизайнеров презентаций с AI',
  description: 'Дизайнеры презентаций с AI-скиллами для проектного сотрудничества и аутстаффа.',
  robots: { index: false, follow: false },
}

const BEHANCE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.42 8.57c.76 0 1.46.06 2.1.18.64.12 1.19.33 1.65.62.46.28.82.67 1.08 1.17.26.5.4 1.12.4 1.87 0 .81-.18 1.49-.55 2.03-.37.54-.91.98-1.63 1.32.98.28 1.71.77 2.2 1.46.48.69.72 1.53.72 2.52 0 .8-.15 1.49-.46 2.07-.31.58-.73 1.06-1.26 1.42-.53.37-1.13.63-1.81.8-.68.17-1.38.26-2.1.26H0V8.57h7.42zm-.45 5.8c.63 0 1.14-.15 1.55-.45.4-.3.6-.78.6-1.44 0-.37-.07-.67-.2-.91a1.52 1.52 0 00-.55-.55 2.2 2.2 0 00-.78-.28 4.76 4.76 0 00-.93-.08H3.14v3.71h3.83zm.21 6.08c.35 0 .68-.03 1-.1.32-.07.6-.19.84-.34.24-.16.44-.38.58-.66.14-.28.21-.63.21-1.05 0-.83-.23-1.43-.7-1.8-.47-.35-1.09-.53-1.87-.53H3.14v4.48h4.04zM17.85 21c.43.41 1.06.62 1.88.62.58 0 1.09-.15 1.52-.44.42-.29.69-.59.78-.91h2.7c-.43 1.34-1.09 2.3-1.98 2.87-.89.58-1.96.87-3.21.87-.88 0-1.67-.14-2.38-.42a4.79 4.79 0 01-1.78-1.17 5.13 5.13 0 01-1.11-1.81 6.78 6.78 0 01-.39-2.34c0-.82.13-1.59.41-2.3a5.4 5.4 0 011.14-1.85 5.2 5.2 0 011.77-1.22 5.71 5.71 0 012.29-.45c.93 0 1.75.18 2.46.54.71.36 1.29.85 1.76 1.46.45.6.78 1.3.97 2.08.2.78.27 1.6.21 2.46h-7.92c0 .88.3 1.67.73 2.08zM21.04 13.85c-.34-.37-.92-.57-1.65-.57-.47 0-.87.08-1.18.24-.32.16-.57.35-.77.58-.19.22-.32.46-.4.71-.07.25-.11.47-.12.67h4.89c-.07-.76-.33-1.26-.77-1.63zM15.51 9.79h6.19v1.51h-6.19z"/>
  </svg>
)

export default function OutstaffPresentationsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section>
        <div className="text-big-wrapper">
          <p className="text-big">Аутстафф дизайнеров презентаций с&nbsp;AI</p>
        </div>
      </Section>

      <Section>
        <div className="text-h2-wrapper">
          <h2>
            Подбираем дизайнеров презентаций с&nbsp;продвинутыми AI&#x2011;скиллами.
            Работаем попроектно и&nbsp;на&nbsp;аутстафф.
          </h2>
        </div>
      </Section>

      {/* ── Дарина Калнина ── */}
      <Section>
        <div className={`${styles.person} anim`}>
          <div className={styles.photo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/presentations/darina.jpg" alt="Дарина Калнина" />
          </div>
          <div className={styles.info}>
            <h2 className={`h1 font-color-black ${styles.name}`}>Дарина Калнина</h2>
            <p className={`font-color-dark-gray ${styles.role}`}>
              UX/UI design&nbsp;/ presentations&nbsp;/ dashboards&nbsp;/ AI
            </p>

            <div className={styles.projectBlock}>
              <h4 className="font-color-black">Опыт</h4>
              <ul className={styles.projectList}>
                <li>
                  <strong>Pinkman.</strong> Создание брендбуков, презентаций, баннеров,
                  интерфейсов для&nbsp;крупнейших российских компаний
                  (Яндекс, Сбер, ПСБ и&nbsp;другие).
                </li>
                <li>Шаблоны презентаций на&nbsp;четырёх платформах: Figma, PPT, KeyNote, Google&nbsp;Slides.</li>
                <li>Библиотека CRM для&nbsp;Яндекс&nbsp;AdTech.</li>
                <li>AI&#x2011;графика для&nbsp;Музея «Страна&nbsp;Побед»: 200+ генераций в&nbsp;тематике Пакулина.</li>
              </ul>
            </div>

            <a
              className={styles.externalLink}
              href="https://www.figma.com/design/7VOHUWQNryZV5CoLJXpfWU/CV?node-id=2007-2260&t=kwa2911fZGYMQ4d1-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Примеры презентаций в&nbsp;Figma ↗
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div className={`${styles.gallery} anim`}>
          {['darina-01', 'darina-02', 'darina-03', 'darina-04', 'darina-05', 'darina-06'].map((name) => (
            <div key={name} className={styles.galleryItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/presentations/${name}.jpg`} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className={styles.divider} />
      </Section>

      {/* ── Роман Стрельников ── */}
      <Section>
        <div className={`${styles.person} anim`}>
          <div className={styles.photo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/presentations/roman.jpg" alt="Роман Стрельников" />
          </div>
          <div className={styles.info}>
            <h2 className={`h1 font-color-black ${styles.name}`}>Роман Стрельников</h2>
            <p className={`font-color-dark-gray ${styles.role}`}>
              Графический дизайнер&nbsp;/ брендинг&nbsp;/ презентации&nbsp;/ AI
            </p>

            <div className={styles.projectBlock}>
              <h4 className="font-color-black">Опыт</h4>
              <ul className={styles.projectList}>
                <li><strong>Зима в&nbsp;Москве</strong>&nbsp;— визуализация пространств через AI, презентации.</li>
                <li><strong>IVI</strong>&nbsp;— редакционный дизайн, обложки фильмов с&nbsp;AI.</li>
                <li><strong>СБСЖ</strong>&nbsp;— дизайн носителей, брендинг.</li>
                <li>Вёрстка презентаций <strong>OZON, Авито</strong>.</li>
                <li>Дизайн навигации офисного пространства.</li>
                <li>Поддержка <strong>Яндекс&nbsp;Еды</strong> (перфоманс&#x2011;материалы).</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className={`${styles.gallery} anim`}>
          {['roman-01', 'roman-02', 'roman-03', 'roman-04', 'roman-05', 'roman-06', 'roman-07', 'roman-08', 'roman-09'].map((name) => (
            <div key={name} className={styles.galleryItem}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/presentations/${name}.jpg`} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className={styles.divider} />
      </Section>

      {/* ── Мария Мещерина ── */}
      <Section>
        <div className={`${styles.person} anim`}>
          <div className={styles.photo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/presentations/maria.jpg" alt="Мария Мещерина" />
          </div>
          <div className={styles.info}>
            <h2 className={`h1 font-color-black ${styles.name}`}>Мария Мещерина</h2>
            <p className={`font-color-dark-gray ${styles.role}`}>
              Дизайнер презентаций, годовых отчётов&nbsp;+ AI
            </p>

            <a
              className={styles.behanceLink}
              href="https://www.behance.net/Zoika"
              target="_blank"
              rel="noopener noreferrer"
            >
              {BEHANCE_ICON}
              <span>
                <span style={{ display: 'block', fontSize: '12px', opacity: 0.8, fontWeight: 400 }}>Портфолио по&nbsp;презентациям</span>
                <span style={{ fontSize: '18px' }}>behance.net/Zoika&nbsp;↗</span>
              </span>
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div className={`${styles.videoBox} anim`}>
          <iframe
            src="https://kinescope.io/embed/f821b1e0-97df-48d7-8220-2365e187d42c?autoplay=1&muted=1&loop=1"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            title="AI-ролик — Мария Мещерина"
          />
        </div>
      </Section>

      <div style={{ height: 'var(--64px)' }} />
    </>
  )
}
