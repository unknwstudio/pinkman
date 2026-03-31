import Link from 'next/link'
import { SITE_VERSION } from '@/lib/constants'

export default function Footer() {
  return (
    <section className="portfolio-section">
      <div className="main-container">
        <div className="footer-top">
          <Link className="logo w-inline-block" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Pinkman"
              className="footer-logo-img"
              loading="lazy"
              src="/images/6707b04527ff818e4b97457d_pinkman-black.svg"
            />
          </Link>
          <div className="footer-right">
            <p className="text-regular font-color-black">© pinkman 2016—..</p>
            <Link
              className="text-regular font-color-black hover"
              href="/privacy-policy/"
              target="_blank"
            >
              Политика обработки персональных данных
            </Link>
          </div>
        </div>
        <span className="site-version">version {SITE_VERSION}</span>
      </div>
    </section>
  )
}
