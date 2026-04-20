import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import CaseCard from '@/components/CaseCard/CaseCard'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Аутстафф CG-специалистов',
  description: 'CG-дженералисты и 3D/Motion-артисты pinkman для проектного сотрудничества и аутстаффа.',
  robots: { index: false, follow: false },
}

const BEHANCE_ICON = (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M7.42 8.57c.76 0 1.46.06 2.1.18.64.12 1.19.33 1.65.62.46.28.82.67 1.08 1.17.26.5.4 1.12.4 1.87 0 .81-.18 1.49-.55 2.03-.37.54-.91.98-1.63 1.32.98.28 1.71.77 2.2 1.46.48.69.72 1.53.72 2.52 0 .8-.15 1.49-.46 2.07-.31.58-.73 1.06-1.26 1.42-.53.37-1.13.63-1.81.8-.68.17-1.38.26-2.1.26H0V8.57h7.42zm-.45 5.8c.63 0 1.14-.15 1.55-.45.4-.3.6-.78.6-1.44 0-.37-.07-.67-.2-.91a1.52 1.52 0 00-.55-.55 2.2 2.2 0 00-.78-.28 4.76 4.76 0 00-.93-.08H3.14v3.71h3.83zm.21 6.08c.35 0 .68-.03 1-.1.32-.07.6-.19.84-.34.24-.16.44-.38.58-.66.14-.28.21-.63.21-1.05 0-.83-.23-1.43-.7-1.8-.47-.35-1.09-.53-1.87-.53H3.14v4.48h4.04zM17.85 21c.43.41 1.06.62 1.88.62.58 0 1.09-.15 1.52-.44.42-.29.69-.59.78-.91h2.7c-.43 1.34-1.09 2.3-1.98 2.87-.89.58-1.96.87-3.21.87-.88 0-1.67-.14-2.38-.42a4.79 4.79 0 01-1.78-1.17 5.13 5.13 0 01-1.11-1.81 6.78 6.78 0 01-.39-2.34c0-.82.13-1.59.41-2.3a5.4 5.4 0 011.14-1.85 5.2 5.2 0 011.77-1.22 5.71 5.71 0 012.29-.45c.93 0 1.75.18 2.46.54.71.36 1.29.85 1.76 1.46.45.6.78 1.3.97 2.08.2.78.27 1.6.21 2.46h-7.92c0 .88.3 1.67.73 2.08zM21.04 13.85c-.34-.37-.92-.57-1.65-.57-.47 0-.87.08-1.18.24-.32.16-.57.35-.77.58-.19.22-.32.46-.4.71-.07.25-.11.47-.12.67h4.89c-.07-.76-.33-1.26-.77-1.63zM15.51 9.79h6.19v1.51h-6.19z"/>
  </svg>
)

export default function OutstaffCgPage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section>
        <div className="text-big-wrapper">
          <p className="text-big">CG&#x2011;специалисты</p>
        </div>
      </Section>

      <Section>
        <div className="text-h2-wrapper">
          <h2>
            Подбираем CG&#x2011;дженералистов, 3D/Motion&#x2011;артистов.
            Работаем попроектно и&nbsp;на&nbsp;аутстафф.
          </h2>
        </div>
      </Section>

      {/* ── Сергей Малкин ── */}
      <Section>
        <div className={`${styles.person} anim`}>
          <div className={styles.photo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/cg/sergey-malkin.jpg" alt="Сергей Малкин" />
          </div>
          <div className={styles.info}>
            <h2 className={`h1 font-color-black ${styles.name}`}>Сергей Малкин</h2>
            <p className={`font-color-dark-gray ${styles.role}`}>
              CG&#x2011;generalist, работает попроектно с&nbsp;крупными студиями:
              Сила Света, Flame CGI, SNCG Studio, Pinkman.
            </p>
            <span className={styles.available}>Доступен с&nbsp;23&nbsp;апреля</span>

            <div className={styles.softwareBlock}>
              <h4 className="font-color-black">Софт</h4>
              <div className={styles.softwareCols}>
                <div>
                  <p className="text-small font-color-dark-gray" style={{ margin: '0 0 4px 0' }}>Основной</p>
                  <ul className={`${styles.softwareList} font-color-dark-gray`}>
                    <li>Cinema4D + Redshift / Octane</li>
                    <li>Houdini, Nuke</li>
                    <li>After Effects + Mocha + Red Giant</li>
                    <li>PFTrack</li>
                  </ul>
                </div>
                <div>
                  <p className="text-small font-color-dark-gray" style={{ margin: '0 0 4px 0' }}>Дополнительно</p>
                  <ul className={`${styles.softwareList} font-color-dark-gray`}>
                    <li>JangaFX</li>
                    <li>Marvelous Designer</li>
                    <li>SpeedTree Modeler</li>
                    <li>AI</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={styles.projectBlock}>
              <h4 className="font-color-black">Недавние проекты</h4>
              <p className="font-color-dark-gray">Газпром&nbsp;— выставочные инсталляции</p>
              <p className="font-color-dark-gray">Флуимуцил&nbsp;— реклама на&nbsp;ТВ</p>
              <p className="font-color-dark-gray">Премия SLAY&nbsp;— 2&nbsp;анонс&#x2011;ролика</p>
              <p className="font-color-dark-gray">
                <strong>Центр Исламской цивилизации.</strong>{' '}
                Разработка арок с&nbsp;представителями правительства&nbsp;— как&nbsp;голограммы,
                которые общаются с&nbsp;человеком, когда он&nbsp;к&nbsp;ним подходит.
                7&nbsp;персонажей, по&nbsp;3&nbsp;шота на&nbsp;каждого. Итого 21&nbsp;шот&nbsp;—
                от&nbsp;кеинга до&nbsp;цветокоррекции и&nbsp;сведения липсинка,
                в&nbsp;том числе работал как&nbsp;композер. Помимо арок&nbsp;— делал
                инсталляции для&nbsp;экспозиции центра.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Анимация + видео — превью работ перед кейсом «Синяя птица» */}
      <Section>
        <div className={`${styles.videoBox} anim`}>
          <iframe
            src="https://kinescope.io/embed/cbbab9a5-8a96-4295-a014-8f726053d5ee?autoplay=1&muted=1&loop=1"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            title="Анимация — Сергей Малкин"
          />
        </div>
      </Section>
      <Section>
        <div className={`${styles.videoBox} anim`}>
          <iframe
            src="https://kinescope.io/embed/91ca0a4c-117c-49af-9471-b32072704154?autoplay=1&muted=1&loop=1"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            title="Видео — Сергей Малкин"
          />
        </div>
      </Section>

      {/* Синяя Птица — кейс с сайта */}
      <div className="service-cases-section">
        <div className="service-grid">
          <CaseCard
            chips={['шоу-контент', 'CG', 'графика']}
            year="2025"
            title="Сценический визуал для&nbsp;«Синей птицы»"
            subtitle="Фоны к&nbsp;номерам шоу&nbsp;— 19&nbsp;видеофонов для&nbsp;12-го сезона"
            href="/projects/scenicheskiy-vizual-dlya-siney-pticy-fony-k-nomeram-shou/"
            imgSrc="/images/69aacdcc619e6cb9f4fcab3c_0.webp"
            imgSrcSet="/images/69aacdcc619e6cb9f4fcab3c_0-p-500.webp 500w, /images/69aacdcc619e6cb9f4fcab3c_0-p-800.webp 800w, /images/69aacdcc619e6cb9f4fcab3c_0-p-1080.webp 1080w, /images/69aacdcc619e6cb9f4fcab3c_0-p-1600.webp 1600w, /images/69aacdcc619e6cb9f4fcab3c_0.webp 2000w"
            imgAlt="Сценический визуал для Синей птицы"
          />

          <CaseCard
            chips={['motion', 'LED-борты', 'стадионы']}
            year="2025"
            title="Яндекс Свои Плюсы"
            subtitle="Анимация для&nbsp;стадионов и&nbsp;LED&#x2011;бортов рекламной кампании"
            href="/projects/masshtabirovali-svoi-plyusy----programmu-loyalnosti-yandeksa/"
            imgSrc="/images/69a4984c9b3b101b65e15e36_Rectangle 1004241.webp"
            imgSrcSet="/images/69a4984c9b3b101b65e15e36_Rectangle 1004241-p-500.webp 500w, /images/69a4984c9b3b101b65e15e36_Rectangle 1004241-p-800.webp 800w, /images/69a4984c9b3b101b65e15e36_Rectangle 1004241-p-1080.webp 1080w, /images/69a4984c9b3b101b65e15e36_Rectangle 1004241-p-1600.webp 1600w, /images/69a4984c9b3b101b65e15e36_Rectangle 1004241-p-2000.webp 2000w"
            imgAlt="Яндекс Свои Плюсы — LED-борты"
          />
        </div>
      </div>

      <Section>
        <div className={styles.divider} />
      </Section>

      {/* ── Даниил Губарь ── */}
      <Section>
        <div className={`${styles.person} anim`}>
          <div className={styles.photo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/cg/daniil-gubar.jpg" alt="Даниил Губарь" />
          </div>
          <div className={styles.info}>
            <h2 className={`h1 font-color-black ${styles.name}`}>Даниил Губарь</h2>
            <p className={`font-color-dark-gray ${styles.role}`}>3D&nbsp;/ Motion&#x2011;artist</p>

            <a
              className={styles.behanceLink}
              href="https://www.behance.net/dastii"
              target="_blank"
              rel="noopener noreferrer"
            >
              {BEHANCE_ICON}
              <span>
                <span style={{ display: 'block', fontSize: '12px', opacity: 0.8, fontWeight: 400 }}>Портфолио на Behance</span>
                <span className="handle">behance.net/dastii&nbsp;↗</span>
              </span>
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <div className={`${styles.videoBox} anim`}>
          <iframe
            src="https://kinescope.io/embed/b91f39c6-468e-42b3-a3f9-dac4ec52f052?autoplay=1&muted=1&loop=1"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            title="Шоурил Даниила Губаря"
          />
        </div>
      </Section>

      <Section>
        <div className={styles.divider} />
      </Section>

      {/* ── Егор Лавлинский ── */}
      <Section>
        <div className={`${styles.person} anim`}>
          <div className={styles.photo}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/cg/egor-lavlinsky.jpg" alt="Егор Лавлинский" />
          </div>
          <div className={styles.info}>
            <h2 className={`h1 font-color-black ${styles.name}`}>Егор Лавлинский</h2>
            <p className={`font-color-dark-gray ${styles.role}`}>
              Senior 3D&#x2011;motion&nbsp;/ CG&nbsp;generalist&nbsp;/ C4D&nbsp;/ Houdini&nbsp;/ AI
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className={`${styles.videoBox} anim`}>
          <iframe
            src="https://kinescope.io/embed/f0c3f41a-b251-448b-b8c1-437d704c7d01?autoplay=1&muted=1&loop=1"
            allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
            title="Шоурил Егора Лавлинского"
          />
        </div>
      </Section>

      <div style={{ height: 'var(--64px)' }} />
    </>
  )
}
