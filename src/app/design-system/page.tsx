import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'
import CaseCard from '@/components/CaseCard/CaseCard'
import StepList from '@/components/StepList/StepList'
import ServiceSection from '@/components/ServiceSection/ServiceSection'
import SmallButton from '@/components/SmallButton/SmallButton'
import ServiceListItem from '@/components/ServiceListItem/ServiceListItem'

export const metadata: Metadata = {
  title: 'Design System',
  description: 'Pinkman component library and typography reference',
}

function DSLabel({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: 'monospace', fontSize: 11, fontWeight: 600,
      letterSpacing: '0.08em', textTransform: 'uppercase', color: '#999',
      marginBottom: 12, paddingBottom: 8, borderBottom: '1px solid #e8e8e8',
    }}>
      {children}
    </div>
  )
}

function DSBlock({ label, children, pad = true }: { label: string; children: React.ReactNode; pad?: boolean }) {
  return (
    <div style={{ marginBottom: 48, ...(pad ? { padding: '0 40px' } : {}) }}>
      <DSLabel>{label}</DSLabel>
      {children}
    </div>
  )
}

function DSDivider({ title }: { title: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, margin: '72px 40px 40px' }}>
      <span style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 700, color: '#222', whiteSpace: 'nowrap' }}>{title}</span>
      <div style={{ flex: 1, height: 1, background: '#ddd' }} />
    </div>
  )
}

export default function DesignSystemPage() {
  return (
    <div style={{ paddingBottom: 120 }}>

      <Section>
        <div className="text-big-wrapper">
          <p className="text-big">Design System</p>
        </div>
      </Section>
      <Section>
        <div className="text-h2-wrapper">
          <h2>Все компоненты, типографика и&nbsp;элементы интерфейса сайта</h2>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════
          TYPOGRAPHY
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="TYPOGRAPHY" />

      <DSBlock label=".text-big  —  60px / 90% lh / −0.05em  (hero heading)">
        <p className="text-big">Пинкман&nbsp;— AI&#x2011;дизайн</p>
      </DSBlock>

      <DSBlock label="h2 in .text-h2-wrapper  —  fluid bold subtitle">
        <div className="text-h2-wrapper" style={{ paddingTop: 0 }}>
          <h2>Продуктовый дизайн, про&nbsp;который хорошо подумали</h2>
        </div>
      </DSBlock>

      <DSBlock label=".h1 (rendered as h2)  —  section heading">
        <h2 className="h1">Когда обращаться</h2>
      </DSBlock>

      <DSBlock label=".h3-bold  —  24px / 28px lh / −0.04em  (case card title)">
        <h3 className="h3-bold font-color-black">Яндекс Плюс AdTech&nbsp;— «Свои плюсы»</h3>
      </DSBlock>

      <DSBlock label="h3 default  —  process step / bullet label">
        <h3>1.&nbsp;Погружаемся в&nbsp;контекст на&nbsp;брифе</h3>
      </DSBlock>

      <DSBlock label=".text-regular  —  16px / 20px lh  (body / nav)">
        <p className="text-regular">Делаем масштабные веб-платформы с&nbsp;множеством разделов, сложной инфраструктурой и&nbsp;продуманными сценариями.</p>
      </DSBlock>

      <DSBlock label=".text-small  —  12px / 16px lh  (chip label / meta)">
        <p className="text-small">Результат: решили больше 400 задач за&nbsp;2 года</p>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          COLOUR UTILITIES
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="COLOUR UTILITIES" />

      <DSBlock label=".font-color-black  —  total black, headings">
        <p className="text-regular font-color-black">Текст в&nbsp;цвете total-black</p>
      </DSBlock>

      <DSBlock label=".font-color-dark-gray  —  descriptions">
        <p className="text-regular font-color-dark-gray">Текст в&nbsp;цвете dark-gray</p>
      </DSBlock>

      <DSBlock label=".font-color-medium-grey  —  dates / meta">
        <p className="text-regular font-color-medium-grey">Текст в&nbsp;цвете medium-grey</p>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          CHIPS
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="CHIP  —  .text-small.is__chip" />

      <DSBlock label="chip — default pill tag (used in case cards, filter bar, service points)">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <p className="text-small is__chip">AI OLV</p>
          <p className="text-small is__chip">федеральная кампания</p>
          <p className="text-small is__chip">motion-графика</p>
          <p className="text-small is__chip">full AI</p>
          <p className="text-small is__chip">интерфейсы</p>
          <p className="text-small is__chip">Веб-дизайн</p>
          <p className="text-small is__chip">3D/Motion-design</p>
        </div>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          BUTTONS
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="BUTTONS" />

      <DSBlock label=".big-button.bg-color-pink  —  primary CTA (header, contact card)">
        <a className="big-button bg-color-pink w-inline-block" href="#" style={{ display: 'inline-flex', padding: '16px 24px', gap: 12, borderRadius: 99, textDecoration: 'none' }}>
          <p className="text-regular">Обсудить проект</p>
          <div className="button-arrow-wrapper" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="button-arrow__not-active w-embed">
              <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.6677 15.2266C17.6677 15.4401 17.5948 15.6172 17.449 15.7578C17.3083 15.8984 17.1443 15.9688 16.9568 15.9688C16.7641 15.9688 16.5974 15.8958 16.4568 15.75C16.3214 15.6042 16.2537 15.4401 16.2537 15.2578V12.3672L16.3943 8.71875L15.1052 10.1797L7.34741 17.9297C7.20679 18.0703 7.04272 18.1406 6.85522 18.1406C6.72502 18.1406 6.60522 18.1068 6.49585 18.0391C6.38647 17.9714 6.29793 17.8828 6.23022 17.7734C6.16252 17.6589 6.12866 17.5391 6.12866 17.4141C6.12866 17.2318 6.20158 17.0677 6.34741 16.9219L14.0896 9.16406L15.5427 7.89062L11.7302 8.01562H9.01147C8.82918 8.01562 8.66512 7.94792 8.51929 7.8125C8.37866 7.67188 8.30835 7.50781 8.30835 7.32031C8.30835 7.13281 8.37606 6.96875 8.51147 6.82812C8.64689 6.68229 8.82397 6.60938 9.04272 6.60938H16.9021C17.1365 6.60938 17.3214 6.67969 17.4568 6.82031C17.5922 6.96094 17.6599 7.14323 17.6599 7.36719L17.6677 15.2266Z" fill="#818181" />
              </svg>
            </div>
          </div>
        </a>
      </DSBlock>

      <DSBlock label=".small-button  —  arrow icon button (case cards, service lists, best-cases popup). Variant: .small-button--cases adds a larger hit target for cards.">
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Base variant — used in service lists / best-cases popups */}
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginBottom: 6 }}>.small-button</div>
            <a className="small-button w-inline-block" href="#">
              <p className="text-regular small-button-text">Подробнее</p>
              <div className="small-button-arrow-wrapper">
                <img alt="" className="small-button-arrow" loading="eager" src="/images/67152c3278a3dccbefe124b3_arrow-grey.svg" />
                <img alt="" className="button-arrow__active" loading="eager" src="/images/66f6e23524a454603f7d5540_arrow-white.svg" />
              </div>
            </a>
          </div>
          {/* Cases variant — used inside CaseCard components */}
          <div>
            <div style={{ fontFamily: 'monospace', fontSize: 10, color: '#aaa', marginBottom: 6 }}>.small-button.small-button--cases</div>
            <a className="small-button small-button--cases w-inline-block" href="#">
              <p className="text-regular small-button-text">Подробнее</p>
              <div className="small-button-arrow-wrapper">
                <img alt="" className="small-button-arrow" loading="eager" src="/images/67152c3278a3dccbefe124b3_arrow-grey.svg" />
                <img alt="" className="button-arrow__active" loading="eager" src="/images/66f6e23524a454603f7d5540_arrow-white.svg" />
              </div>
            </a>
          </div>
        </div>
      </DSBlock>

      <DSBlock label=".pk-bar__cta  —  floating nav CTA pill">
        <a className="pk-bar__cta" href="#" style={{ display: 'inline-block' }}>
          Обсудить проект
        </a>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          CONTACT LINK BUTTONS
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="CONTACT LINK BUTTONS  —  .contacts-link-btn" />

      <DSBlock label=".contacts-link-btn  (dark, primary)  +  .contacts-link-btn--light  (outline)">
        <div className="contacts-links" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <a className="contacts-link-btn" href="#">
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8.02c-.12.58-.46.72-.93.45l-2.57-1.9-1.24 1.19c-.14.14-.25.25-.51.25l.18-2.61 4.71-4.25c.2-.18-.05-.28-.32-.1L7.9 14.88 5.4 14.1c-.56-.17-.57-.56.12-.83l8.93-3.44c.46-.17.87.11.19.97z" fill="currentColor" />
            </svg>
            Телеграм
          </a>
          <a className="contacts-link-btn contacts-link-btn--light" href="#">
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" fill="currentColor" />
            </svg>
            MAX
          </a>
          <a className="contacts-link-btn contacts-link-btn--light" href="#">
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
            </svg>
            E-mail
          </a>
        </div>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          FOOTER / UTILITY
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="FOOTER + UTILITY" />

      <DSBlock label="footer-top — logo + copyright + privacy link">
        <div className="footer-top" style={{ borderTop: '1px solid #e8e8e8', paddingTop: 24 }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img alt="Pinkman" className="footer-logo-img" src="/images/6707b04527ff818e4b97457d_pinkman-black.svg" />
          </div>
          <div className="footer-right" style={{ display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap' }}>
            <p className="text-regular font-color-black">© pinkman 2016—..</p>
            <a className="text-regular font-color-black hover" href="/privacy-policy">Политика обработки персональных данных</a>
          </div>
        </div>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          ANIMATION
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="SCROLL ANIMATION  —  .anim  (IntersectionObserver)" />

      <DSBlock label=".anim  —  opacity 0 + translateY(18px), resolves to .anim.in on scroll. Stagger: data-d=&quot;1–4&quot;">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="anim in" style={{ padding: '16px 20px', background: '#f5f5f5', borderRadius: 12 }}>
            <p className="text-regular font-color-black">Элемент без задержки (.anim — уже .in)</p>
          </div>
          <div className="anim in" data-d="1" style={{ padding: '16px 20px', background: '#f5f5f5', borderRadius: 12 }}>
            <p className="text-regular font-color-black">data-d=&quot;1&quot; — delay 0.10s</p>
          </div>
          <div className="anim in" data-d="2" style={{ padding: '16px 20px', background: '#f5f5f5', borderRadius: 12 }}>
            <p className="text-regular font-color-black">data-d=&quot;2&quot; — delay 0.20s</p>
          </div>
          <div className="anim in" data-d="3" style={{ padding: '16px 20px', background: '#f5f5f5', borderRadius: 12 }}>
            <p className="text-regular font-color-black">data-d=&quot;3&quot; — delay 0.30s</p>
          </div>
        </div>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          SECTION
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="COMPONENT  —  Section" />

      <DSBlock label="Section  —  .portfolio-section > .main-container wrapper" pad={false}>
        <Section>
          <p className="text-regular font-color-dark-gray">Содержимое внутри Section — добавляет горизонтальные отступы и вертикальный ритм.</p>
        </Section>
      </DSBlock>

      <DSBlock label="Section  —  with style prop" pad={false}>
        <Section style={{ background: '#fff0f5', borderRadius: 16 }}>
          <p className="text-regular font-color-dark-gray">Section с кастомным style на .main-container.</p>
        </Section>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          SERVICE POINT + GRID
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="COMPONENT  —  ServicePoint  +  ServiceGrid" />

      <DSBlock label="ServicePoint — variant=white (default), tags below title" pad={false}>
        <ServiceGrid spaced={false}>
          <ServicePoint
            title="Нет своей UX-команды"
            tags={['пользовательские сценарии', 'интерфейсы', 'аналитика']}
            description="Подключаемся как&nbsp;внешняя продуктовая команда: разбираемся в&nbsp;задачах, проектируем сценарии."
          />
        </ServiceGrid>
      </DSBlock>

      <DSBlock label="ServicePoint — tagsTop (icon chips above title)" pad={false}>
        <ServiceGrid spaced={false}>
          <ServicePoint tagsTop={['↓cost']} title="Стоимость ассета снижается" animDelay={1} />
          <ServicePoint tagsTop={['×2']} title="Дизайн-мощность без расширения штата" animDelay={2} />
          <ServicePoint tagsTop={['AI→']} title="Доступ к инструментам через партнёра" animDelay={3} />
        </ServiceGrid>
      </DSBlock>

      <DSBlock label="ServicePoint — children (custom right-side content)" pad={false}>
        <ServiceGrid spaced={false}>
          <ServicePoint title="Форматы выдачи" tags={['на выбор']}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              <p className="text-small is__chip">Figma-файл</p>
              <p className="text-small is__chip">PDF-отчёт</p>
              <p className="text-small is__chip">Miro-доска</p>
            </div>
          </ServicePoint>
        </ServiceGrid>
      </DSBlock>

      <DSBlock label="ServiceGrid — spaced (full section spacing)" pad={false}>
        <ServiceGrid>
          <ServicePoint title="Продюсер" tags={['статусы', 'сроки']} description="Контролирует ход работ." animDelay={1} />
          <ServicePoint title="Арт-директор" tags={['визуал', 'идея']} description="Держит визуальный язык." animDelay={2} />
          <ServicePoint title="AI-дизайнеры" tags={['3D', 'моушн']} description="Графика, анимация и AI." animDelay={3} />
        </ServiceGrid>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          CASE CARD
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="COMPONENT  —  CaseCard" />

      <DSBlock label="CaseCard — with image + result + button" pad={false}>
        <div className="service-cases-section">
          <div className="service-grid">
            <CaseCard
              chips={['банки', 'корпоративный сайт']}
              year="2019–2025"
              title="ВТБ"
              subtitle="5 лет развивали сайт топ-3 банка России"
              description="Спроектировали комплексный сайт с&nbsp;единой дизайн-системой и&nbsp;продуктовой архитектурой."
              result={{ label: 'Результат:', value: '7+ российских и&nbsp;международных наград' }}
              href="/projects/1-5-goda-razvivaem-sayt-otp-banka-uvelichili-konversiyu-na-40"
              imgSrc="/images/682a4691d3200066718f09bc_Frame 174 (1).webp"
              imgSrcSet="/images/682a4691d3200066718f09bc_Frame 174 (1)-p-500.webp 500w, /images/682a4691d3200066718f09bc_Frame 174 (1)-p-800.webp 800w, /images/682a4691d3200066718f09bc_Frame 174 (1)-p-1080.webp 1080w, /images/682a4691d3200066718f09bc_Frame 174 (1).webp 1248w"
            />
          </div>
        </div>
      </DSBlock>

      <DSBlock label="CaseCard — text only (no image, no button)" pad={false}>
        <div className="service-cases-section">
          <div className="service-grid">
            <CaseCard
              chips={['AI OLV']}
              year="2026"
              title="AI OLV-ролики для&nbsp;РК Яндекс Казахстан"
              subtitle="Серия рекламных AI-роликов для&nbsp;федеральной кампании."
            />
          </div>
        </div>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          STEP LIST
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="COMPONENT  —  StepList" />

      <DSBlock label="StepList — numbered process steps" pad={false}>
        <Section>
          <StepList steps={[
            'Погружаемся в&nbsp;контекст на&nbsp;брифе',
            'Готовим решение под&nbsp;запрос',
            'Разрабатываем сценарий и&nbsp;раскадровку',
            'Производим контент по&nbsp;утверждённой рамке',
          ]} />
        </Section>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          SERVICE SECTION
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="COMPONENT  —  ServiceSection" />

      <DSBlock label="ServiceSection — text left + image right" pad={false}>
        <ServiceSection
          title="Корпоративные сайты"
          description="Десятки разделов. Множество аудиторий. Сложная структура. Наша специализация&nbsp;— масштабные веб-проекты для&nbsp;крупного бизнеса."
          imgSrc="/images/6829dd5bc35528c6ea9fe39a_Frame 174.webp"
          imgSrcSet="/images/6829dd5bc35528c6ea9fe39a_Frame 174-p-500.webp 500w, /images/6829dd5bc35528c6ea9fe39a_Frame 174-p-800.webp 800w, /images/6829dd5bc35528c6ea9fe39a_Frame 174-p-1080.webp 1080w, /images/6829dd5bc35528c6ea9fe39a_Frame 174.webp 2624w"
        />
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          CONTACT CARD
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="COMPONENT  —  ContactCard" />

      <DSBlock label="ContactCard — default props" pad={false}>
        <ContactCard />
      </DSBlock>

      <DSBlock label="ContactCard — custom intro + role" pad={false}>
        <ContactCard
          intro="Обсудим проект?"
          role="Аккаунт-директор Юрий Григоренко — расскажет про&nbsp;состав команды, сроки и&nbsp;стоимость под&nbsp;ваш проект."
        />
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          SMALL BUTTON COMPONENT
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="COMPONENT  —  SmallButton" />

      <DSBlock label="SmallButton — with text (href only, cases modifier optional)">
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <SmallButton href="#" text="Подробнее" />
          <SmallButton href="#" text="Подробнее" cases />
        </div>
      </DSBlock>

      <DSBlock label="SmallButton — icon-only (no text prop)">
        <SmallButton href="#" />
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          SERVICE LIST ITEM COMPONENT
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="COMPONENT  —  ServiceListItem" />

      <DSBlock label="ServiceListItem — full-row link with animated button on hover" pad={false}>
        <Section>
          <div className="list-wrapper padding-32px">
            <div className="list">
              <ServiceListItem label="Сайты" href="/sites" />
              <ServiceListItem label="Цифровые продукты" href="/digital-products" animDelay={1} />
              <ServiceListItem label="Дизайн коммуникаций" href="/communications-design" animDelay={2} />
            </div>
          </div>
        </Section>
      </DSBlock>

      {/* ════════════════════════════════════════════════════════
          VERSION STAMP  —  always last
      ════════════════════════════════════════════════════════ */}
      <DSDivider title="VERSION" />

      <DSBlock label=".site-version  —  monospace version stamp in footer">
        <span className="site-version" style={{ display: 'block' }}>version CLD345715</span>
      </DSBlock>

    </div>
  )
}
