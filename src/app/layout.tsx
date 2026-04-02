import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav/Nav'
import Footer from '@/components/Footer/Footer'
import ScrollAnimator from '@/components/ScrollAnimator/ScrollAnimator'
import SmoothScroller from '@/components/SmoothScroller/SmoothScroller'
import PageTransition from '@/components/PageTransition/PageTransition'

const OG_IMAGE = '/images/6717d958e16fdfb6e86dc87d_og.jpg'
const DEFAULT_DESCRIPTION = 'Делаем продуктовый дизайн для корпораций с 2015 года. Обновляем сайт и коммуникации банка ВТБ, создаем внутренние продукты X5. Работаем с банками, ритейлом, страхованием, логистикой.'

export const metadata: Metadata = {
  metadataBase: new URL('https://pinkman.ru'),
  title: {
    default: 'Студия Пинкман\u00a0\u2014 AI\u2011дизайн бизнес партнер',
    template: '%s \u2014 Студия Пинкман',
  },
  description: DEFAULT_DESCRIPTION,
  openGraph: {
    type: 'website',
    siteName: 'Студия Пинкман',
    locale: 'ru_RU',
    images: [{ url: OG_IMAGE, width: 1800, height: 945, alt: 'Студия Пинкман' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://pinkman.ru' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WEHHG5XKMC" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-WEHHG5XKMC');` }} />
      </head>
      <body>
        {/* smooth-wrapper / smooth-content are required by GSAP ScrollSmoother.
            The outer div is made position:fixed by ScrollSmoother; the inner div
            is the actual scrollable content that gets translated. */}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {/* layout-wrap carries the flex column — keeping display:flex off <body>
                fixes Chrome's backdrop-filter bug on position:fixed descendants */}
            <div className="layout-wrap">
              <Nav />
              <main>
                <PageTransition>{children}</PageTransition>
              </main>
              <Footer />
              <ScrollAnimator />
            </div>
          </div>
        </div>
        {/* SmoothScroller is a null-render client component — just bootstraps GSAP */}
        <SmoothScroller />
      </body>
    </html>
  )
}
