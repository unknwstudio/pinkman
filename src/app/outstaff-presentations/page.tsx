import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Аутстафф дизайнеров презентаций с AI',
  description: 'Дизайнеры презентаций с AI-скиллами для проектного сотрудничества и аутстаффа.',
  robots: { index: false, follow: false },
}

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

      <div style={{ height: 'var(--64px)' }} />
    </>
  )
}
