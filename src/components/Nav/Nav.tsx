'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SERVICE_LINKS, SERVICE_SLUGS, SITE_VERSION, ACCENT_COLORS } from '@/lib/constants'

const PINKMAN_SVG = (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path d="M21.8368 4.41815H7.18411L0 47H14.5816L16.0042 38.637L36.703 43.8639C43.0335 45.4668 48.0126 42.3306 49.1507 35.222C51.5691 20.0292 49.5063 4 33.9289 4C29.1632 4 23.4017 7.13614 20.4143 12.0146L21.8368 4.41815ZM36.2051 29.9951L21.3389 26.2318C22.3348 21.9806 26.9582 16.6143 32.862 17.799C37.272 18.705 37.4143 25.5348 36.2051 29.9951Z" fill="currentColor"/>
  </svg>
)

export default function Nav() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen]       = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [scrollHidden, setScrollHidden] = useState(false)
  const [pkServicesOpen, setPkServicesOpen] = useState(false)

  // Derive active-state booleans from pathname
  const slug        = pathname.split('/').filter(Boolean)[0] ?? ''
  const isHome      = slug === ''
  const isPortfolio = slug === 'projects'
  const isServices  = (SERVICE_SLUGS as readonly string[]).includes(slug)
  const isContacts  = slug === 'contact-us'

  // Apply per-page accent colour as CSS variable on <body>
  useEffect(() => {
    const color = ACCENT_COLORS[pathname] ?? '#f5f5f5'
    document.body.style.setProperty('--page-accent', color)
    document.body.style.backgroundColor = color
  }, [pathname])

  // Scroll-hide header
  useEffect(() => {
    let lastY = window.scrollY
    const handler = () => {
      const y = window.scrollY
      setScrollHidden(y > lastY && y > 80 && !menuOpen)
      lastY = y
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [menuOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setServicesOpen(false)
  }, [pathname])

  const closeMenu = () => { setMenuOpen(false); setServicesOpen(false) }

  return (
    <>
      {/* ── Static header bar (logo + hamburger, all viewports) ── */}
      <div>
        <div className="menu-space" />
        <div
          className={`header-new w-nav${scrollHidden ? ' header--hidden' : ''}`}
          role="banner"
        >
          <div className="header-container">
            <div className="div-block">
              <Link className="brand-logo-link w-nav-brand" href="/">
                <div className="menu__logo-new w-embed">{PINKMAN_SVG}</div>
              </Link>

              {/* Hamburger button */}
              <button
                className={`mobile-menu-btn w-nav-button${menuOpen ? ' is-open' : ''}`}
                aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(o => !o)}
              >
                {menuOpen
                  ? <span className="nav-close" aria-hidden="true">✕</span>
                  : <span className="nav-burger" aria-hidden="true"><i/><i/><i/></span>
                }
              </button>
            </div>

            {/* Desktop nav links (hidden on mobile via CSS) */}
            <nav className="nav-menu w-nav-menu" role="navigation">
              <div className="header-wrapper">
                <div className="header-links-list">
                  <Link className="header-btn" href="/">Главная</Link>
                  <Link className="header-btn" href="/projects/">Портфолио</Link>

                  {/* Services dropdown — desktop */}
                  <div className="header-dropdown-wrapper hide-mobile w-dropdown">
                    <div className="dropdown-trigger w-dropdown-toggle">
                      <div className="header-btn">Услуги</div>
                    </div>
                    <nav className="header-dropdown w-dropdown-list">
                      <div className="header-dropdown-content-wrapper">
                        <div className="header-dropdown-column">
                          {SERVICE_LINKS.map(({ href, label }) => (
                            <Link
                              key={href}
                              href={href}
                              className={`header-dropdown-link w-inline-block${pathname === href ? ' w--current' : ''}`}
                              aria-current={pathname === href ? 'page' : undefined}
                            >
                              <p className="text-regular middle">{label}</p>
                              <div className="header-dropdown-img" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </nav>
                  </div>

                  <Link className="header-btn" href="/contact-us/">Контакты</Link>
                  <Link className="mobile-nav-discuss" href="/contact-us/">Обсудить проект</Link>
                </div>

                <div className="button-header-wrapper">
                  <Link className="big-button bg-color-pink w-inline-block" href="/contact-us/">
                    <p className="text-regular">Обсудить проект</p>
                    <div className="button-arrow-wrapper">
                      <div className="button-arrow__not-active w-embed">
                        <svg fill="none" height="100%" viewBox="0 0 24 24" width="100%" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.6677 15.2266C17.6677 15.4401 17.5948 15.6172 17.449 15.7578C17.3083 15.8984 17.1443 15.9688 16.9568 15.9688C16.7641 15.9688 16.5974 15.8958 16.4568 15.75C16.3214 15.6042 16.2537 15.4401 16.2537 15.2578V12.3672L16.3943 8.71875L15.1052 10.1797L7.34741 17.9297C7.20679 18.0703 7.04272 18.1406 6.85522 18.1406C6.72502 18.1406 6.60522 18.1068 6.49585 18.0391C6.38647 17.9714 6.29793 17.8828 6.23022 17.7734C6.16252 17.6589 6.12866 17.5391 6.12866 17.4141C6.12866 17.2318 6.20158 17.0677 6.34741 16.9219L14.0896 9.16406L15.5427 7.89062L11.7302 8.01562H9.01147C8.82918 8.01562 8.66512 7.94792 8.51929 7.8125C8.37866 7.67188 8.30835 7.50781 8.30835 7.32031C8.30835 7.13281 8.37606 6.96875 8.51147 6.82812C8.64689 6.68229 8.82397 6.60938 9.04272 6.60938H16.9021C17.1365 6.60938 17.3214 6.67969 17.4568 6.82031C17.5922 6.96094 17.6599 7.14323 17.6599 7.36719L17.6677 15.2266Z" fill="#818181"/>
                        </svg>
                      </div>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img alt="" className="button-arrow__active" loading="eager" src="/images/66f6e23524a454603f7d5540_arrow-white.svg"/>
                    </div>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ── Mobile overlay ── */}
      <div
        className={`nav-mob-overlay${menuOpen ? ' is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="nav-mob__list">
          <Link className={`nav-mob__link${isHome ? ' nav-mob__link--active' : ''}`} href="/" onClick={closeMenu}>
            Главная
          </Link>
          <Link className={`nav-mob__link${isPortfolio ? ' nav-mob__link--active' : ''}`} href="/projects/" onClick={closeMenu}>
            Портфолио
          </Link>

          {/* Services accordion */}
          <div className="nav-mob__services">
            <button
              className="nav-mob__services-trigger"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen(o => !o)}
            >
              Услуги
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="nav-mob__arrow"
                src="/images/67105d51be89304a2b3da27f_arrow-dropdown.svg"
                alt=""
                loading="lazy"
                style={{ transform: servicesOpen ? '' : 'rotate(180deg)' }}
              />
            </button>
            {servicesOpen && (
              <div className="nav-mob__sub">
                {SERVICE_LINKS.map(({ href, label }) => (
                  <Link key={href} className="nav-mob__sub-link" href={href} onClick={closeMenu}>
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link className={`nav-mob__link${isContacts ? ' nav-mob__link--active' : ''}`} href="/contact-us/" onClick={closeMenu}>
            Контакты
          </Link>
          <Link className="nav-mob__cta" href="/contact-us/" onClick={closeMenu}>
            Обсудить проект
          </Link>
        </nav>
      </div>

      {/* ── Desktop floating bottom bar ── */}
      <div className="pk-bar">
        <Link className="pk-bar__logo" href="/">{PINKMAN_SVG}</Link>
        <nav className="pk-bar__links">
          <Link className={`pk-bar__link${isHome ? ' pk-bar__link--active' : ''}`} href="/">Главная</Link>
          <Link className={`pk-bar__link${isPortfolio ? ' pk-bar__link--active' : ''}`} href="/projects/">Портфолио</Link>

          <div className="pk-bar__item" onMouseEnter={() => setPkServicesOpen(true)} onMouseLeave={() => setPkServicesOpen(false)}>
            <span className={`pk-bar__link${isServices ? ' pk-bar__link--active' : ''}`}>Услуги</span>
            {pkServicesOpen && (
              <div className="pk-bar__dropdown">
                {SERVICE_LINKS.map(({ href, label }) => (
                  <Link
                    key={href}
                    className={`pk-bar__drop-link${pathname === href ? ' pk-bar__drop-link--active' : ''}`}
                    href={href}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link className={`pk-bar__link${isContacts ? ' pk-bar__link--active' : ''}`} href="/contact-us/">Контакты</Link>
        </nav>
        <Link className="pk-bar__cta" href="/contact-us/">Обсудить проект</Link>
      </div>

    </>
  )
}
