import type { Metadata } from 'next'
import ContactCard from '@/components/ContactCard/ContactCard'
import ServiceListItem from '@/components/ServiceListItem/ServiceListItem'
import HeroSection from '@/components/HeroSection/HeroSection'
import ParallaxPhoto from '@/components/ScrollReveal/ParallaxPhoto'
import ClientLogosGrid from '@/components/ClientLogosGrid/ClientLogosGrid'

export const metadata: Metadata = {
  title: 'Студия Пинкман\u00a0— AI-партнёр в дизайне',
  description: 'Делаем продуктовый дизайн для корпораций с 2015 года. Обновляем сайт и коммуникации банка ВТБ, создаем внутренние продукты X5. Работаем с банками, ритейлом, страхованием, логистикой.',
  alternates: {
    canonical: 'https://pinkman.ru/',
  },
}


const SERVICES_FEATURED = [
  { label: 'Дизайн коммуникаций', href: '/communications-design' },
  { label: 'Видеоролики (AI, CG, съёмки)', href: '/video-production' },
]

const SERVICES = [
  { label: 'Сайты', href: '/sites' },
  { label: 'Мультимедиа контент', href: '/multimedia-phygital' },
  { label: 'Аутстафф дизайнеров', href: '/outstaff-designers' },
  { label: 'Брендинг и\u00a0айдентика', href: '/branding' },
  { label: 'Исследования', href: '/research' },
]

const CLIENT_LOGOS = [
  { src: '/images/6733c4af5ce5d0d010f917ae_simple30.svg', alt: 'Simple' },
  { src: '/images/6733bf780dc545b33f50ef4b_tbank.svg', alt: 'Т-Банк' },
  { src: '/images/67153b51b3d3434dc365398f_ROSGOS.svg', alt: 'Росгосстрах' },
  { src: '/images/6733c43df8a68ccb2c1a7155_leroymerlin.svg', alt: 'Leroy Merlin' },
  { src: '/images/6733c1add064e1d2c0ef7cc7_x5group.svg', alt: 'X5 Group' },
  { src: '/images/67153b70916491a30bc461b8_PSB.svg', alt: 'ПСБ' },
  { src: '/images/6733c0b3006b3ed17267e2a3_rosbank.svg', alt: 'Росбанк' },
  { src: '/images/6733bfe242b98d8df14ca3b0_vtb.svg', alt: 'ВТБ' },
  { src: '/images/67153b2b3e2b509cff911efa_GAZPROMBANK.svg', alt: 'Газпромбанк' },
  { src: '/images/6733c08429df76947dacacd7_otpbank.svg', alt: 'ОТП Банк' },
  { src: '/images/6733c3b0dc9bdfa5624094b0_cyan.svg', alt: 'Cyan' },
  { src: '/images/67153b6004557e36d67d4c8c_GAZPROM.svg', alt: 'Газпром' },
  { src: '/images/6733c46b278798a3a2e364bd_funsun.svg', alt: 'FUN&SUN' },
  { src: '/images/6733c15832ffab686b2a0b2b_absolut.svg', alt: 'Абсолют' },
  { src: '/images/67153b68e716bcdd2fe1b99c_MTS.svg', alt: 'МТС' },
  { src: '/images/67153b764a9c4e45ec32eef4_YANDEX.svg', alt: 'Яндекс' },
  { src: '/images/6733c1e29cec761373ba6802_samolet.svg', alt: 'Самолёт' },
  { src: '/images/6733c38ea2107a3a31d7b106_vk.svg', alt: 'VK' },
  { src: '/images/67153b7c7294daf1eef7b29d_URALSIB.svg', alt: 'Уралсиб' },
  { src: '/images/6733c3605073d7bc78bc8d39_netology.svg', alt: 'Нетология' },
  { src: '/images/6733c10dd3cdc82aeec0a2c0_hamkorbank.svg', alt: 'Hamkor Bank' },
  { src: '/images/6733c415e5d0acfa661d45c2_okko.svg', alt: 'Okko' },
  { src: '/images/6733c04f4652f9513c929588_sberbank.svg', alt: 'Сбербанк' },
  { src: '/images/6733c3d40dc545b33f54cab4_ivi.svg', alt: 'Иви' },
]

export default function HomePage() {
  return (
    <>
      {/* ── Hero (entrance + parallax handled by HeroSection client component) ── */}
      <HeroSection />

      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-h2-wrapper">
            <h2 className="anim">Утром — KV и&nbsp;баннеры. Днём — ресайзы и&nbsp;продуктовые страницы. Вечером — интерфейсы и&nbsp;моушен. В&nbsp;перерывах — AI-концепты и&nbsp;AR-активности.</h2>
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-h2-wrapper">
            <h2 className="anim">Наш обычный день уже&nbsp;10 лет. В&nbsp;партнёрстве с&nbsp;Яндексом, ВТБ, ОТП, Сбером, X5, Т-Банком и&nbsp;другими смелыми брендами.</h2>
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-h2-wrapper">
            <h2 className="anim">Студия с&nbsp;невозможной производительностью, огромной экспертизой и&nbsp;сумасшедшим качеством. Реальный партнёр, который работает в&nbsp;одной команде.</h2>
          </div>
        </div>
      </div>

      <div className="spacing" />

      {/* ── Services list ── */}
      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-h2-wrapper">
            <h2 className="anim">Лучше всего мы делаем:</h2>
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="main-container">
          <div className="list-wrapper padding-32px">
            <div className="list">
              {SERVICES_FEATURED.map((s, i) => (
                <ServiceListItem
                  key={s.href}
                  label={s.label}
                  href={s.href}
                  animDelay={i > 0 ? Math.min(i, 4) as 1 | 2 | 3 | 4 : undefined}
                />
              ))}
            </div>
          </div>
          <div className="services-separator" />
          <div className="list-wrapper padding-32px">
            <div className="list">
              {SERVICES.map((s, i) => (
                <ServiceListItem
                  key={s.href}
                  label={s.label}
                  href={s.href}
                  animDelay={i > 0 ? Math.min(i, 4) as 1 | 2 | 3 | 4 : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="spacing" />

      {/* ── Full-width photo ── */}
      <div className="image-section">
        <div className="image-section__img">
          <ParallaxPhoto
            src="/images/670ea6853791772722428373_home-page-image.webp"
            srcSet="/images/670ea6853791772722428373_home-page-image-p-500.webp 500w, /images/670ea6853791772722428373_home-page-image-p-800.webp 800w, /images/670ea6853791772722428373_home-page-image-p-1080.webp 1080w, /images/670ea6853791772722428373_home-page-image-p-1600.webp 1600w, /images/670ea6853791772722428373_home-page-image-p-2000.webp 2000w, /images/670ea6853791772722428373_home-page-image-p-2600.webp 2600w, /images/670ea6853791772722428373_home-page-image.webp 2880w"
            sizes="(max-width: 2880px) 100vw, 2880px"
            width={2880}
            height={3334}
          />
        </div>
      </div>

      {/* ── Developing section ── */}
      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-h1-wrapper">
            <h2 className="h1 anim">Развиваем много лет</h2>
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-h2-wrapper">
            <h2 className="anim">Делаем удобнее, круче, красивее и не&nbsp;собираемся останавливаться</h2>
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="developing-container">

            {/* ── VTB block ── */}
            <div className="developing-block col-1 anim">
              {/* Desktop row 1: logo+awards left, hero image right */}
              <div className="developing-row col-2">
                <div className="col-1">
                  <div className="developing-logo">
                    <img alt="ВТБ" className="developing-logo__img" src="/images/681b8aef7fa22633a64dc5df_VTB.svg" />
                    <h2>2019-2025</h2>
                  </div>
                  <div className="developing-text-bottom">
                    <p className="developing-text">1x Золотой сайт<br />1x Tagline Awards<br />1x Рейтинг Рунета<br />2x Awwwards<br />1x Киберпросвет<br />1x Eventiada</p>
                  </div>
                </div>
                <img
                  alt="ВТБ"
                  className="developing-image"
                  sizes="(max-width: 1302px) 100vw, 1302px"
                  src="/images/681b8ca20e5fa3ed921dc5e0_Frame 2131331942.webp"
                  srcSet="/images/681b8ca20e5fa3ed921dc5e0_Frame 2131331942-p-500.webp 500w, /images/681b8ca20e5fa3ed921dc5e0_Frame 2131331942-p-800.webp 800w, /images/681b8ca20e5fa3ed921dc5e0_Frame 2131331942-p-1080.webp 1080w, /images/681b8ca20e5fa3ed921dc5e0_Frame 2131331942.webp 1302w"
                  width={1302}
                  height={636}
                />
              </div>
              {/* Desktop row 2: gallery left, text right */}
              <div className="developing-row col-2">
                <div className="col-1">
                  <div className="col-3-w-area">
                    <img alt="" className="developing-image" src="/images/681b93885c03ba50cbf37cc0_Frame 2131331909.webp" width={422} height={422} />
                    <picture>
                      <source type="image/avif" srcSet="/images/681b92dabf0d4e7c1a39f649_Frame 2131331908.avif" />
                      <img
                        alt=""
                        className="developing-image"
                        sizes="(max-width: 861px) 100vw, 861px"
                        src="/images/681b92dabf0d4e7c1a39f649_Frame 2131331908.png"
                        srcSet="/images/681b92dabf0d4e7c1a39f649_Frame 2131331908-p-500.png 500w, /images/681b92dabf0d4e7c1a39f649_Frame 2131331908-p-800.png 800w, /images/681b92dabf0d4e7c1a39f649_Frame 2131331908.png 861w"
                        width={861}
                        height={422}
                      />
                    </picture>
                  </div>
                  <div className="col-3">
                    <picture><source type="image/avif" srcSet="/images/681b95f15ad8c01ba415eccf_Frame 2131331568.avif" /><img alt="" className="developing-image" src="/images/681b95f15ad8c01ba415eccf_Frame 2131331568.jpg" width={422} height={423} /></picture>
                    <picture><source type="image/avif" srcSet="/images/681b96042fe162c63ba8d86c_Free_Billboard_Mockup_v01 2.avif" /><img alt="" className="developing-image" src="/images/681b96042fe162c63ba8d86c_Free_Billboard_Mockup_v01 2.jpg" width={422} height={423} /></picture>
                    <picture><source type="image/avif" srcSet="/images/681b961744fcff24c996bc93_Frame 2131331569.avif" /><img alt="" className="developing-image" src="/images/681b961744fcff24c996bc93_Frame 2131331569.jpg" width={422} height={423} /></picture>
                  </div>
                </div>
                <div className="col-1 col-1--8gap">
                  <p className="developing-text">Разработали <strong>1000+</strong> иллюстраций</p>
                  <p className="developing-text">Создали новую <strong>систему навигации, архитектуру сайта</strong> и <strong>пользовательский опыт</strong></p>
                  <p className="developing-text">Разработали и&nbsp;внедрили <strong>дизайн-систему</strong></p>
                  <p className="developing-text"><strong>Организовали работу</strong> большой команды дизайнеров и <strong>интегрировали</strong> её в&nbsp;продуктовые команды</p>
                  <p className="developing-text"><strong>Сократили time2market</strong> до&nbsp;нескольких часов</p>
                </div>
              </div>
              {/* Mobile-only row */}
              <div className="developing-row col-1 mobile">
                <div className="developing-logo">
                  <img alt="ВТБ" className="developing-logo__img" src="/images/681b8aef7fa22633a64dc5df_VTB.svg" />
                  <h2>2019-2025</h2>
                </div>
                <img
                  alt=""
                  className="developing-image"
                  sizes="(max-width: 685px) 100vw, 685px"
                  src="/images/681bca6de2182fd5263ae349_Frame 2131331942 (1).webp"
                  srcSet="/images/681bca6de2182fd5263ae349_Frame 2131331942 (1)-p-500.webp 500w, /images/681bca6de2182fd5263ae349_Frame 2131331942 (1).webp 685w"
                  width={685}
                  height={457}
                />
                <p className="developing-text">Разработали <strong>1000+</strong> иллюстраций</p>
                <picture>
                  <source type="image/avif" srcSet="/images/681b92dabf0d4e7c1a39f649_Frame 2131331908.avif" />
                  <img
                    alt=""
                    className="developing-image"
                    sizes="(max-width: 861px) 100vw, 861px"
                    src="/images/681b92dabf0d4e7c1a39f649_Frame 2131331908.png"
                    srcSet="/images/681b92dabf0d4e7c1a39f649_Frame 2131331908-p-500.png 500w, /images/681b92dabf0d4e7c1a39f649_Frame 2131331908-p-800.png 800w, /images/681b92dabf0d4e7c1a39f649_Frame 2131331908.png 861w"
                    width={861}
                    height={422}
                  />
                </picture>
                <p className="developing-text">Создали новую <strong>систему навигации, архитектуру сайта</strong> и <strong>пользовательский опыт</strong></p>
                <p className="developing-text">Разработали и&nbsp;внедрили <strong>дизайн-систему</strong></p>
                <picture>
                  <source type="image/avif" srcSet="/images/681bca9beb8fb039e4f5da86_Frame 2131331912.avif" />
                  <img
                    alt=""
                    className="developing-image"
                    sizes="(max-width: 686px) 100vw, 686px"
                    src="/images/681bca9beb8fb039e4f5da86_Frame 2131331912.png"
                    srcSet="/images/681bca9beb8fb039e4f5da86_Frame 2131331912-p-500.png 500w, /images/681bca9beb8fb039e4f5da86_Frame 2131331912.png 686w"
                    width={686}
                    height={651}
                  />
                </picture>
                <p className="developing-text"><strong>Организовали работу</strong> большой команды дизайнеров и <strong>интегрировали</strong> её в продуктовые команды</p>
                <p className="developing-text"><strong>Сократили time2market</strong> до нескольких часов</p>
                <img
                  alt=""
                  className="developing-image"
                  sizes="(max-width: 687px) 100vw, 687px"
                  src="/images/681bcb1b2e9074bb32ba85e7_Frame 2131331949.png"
                  srcSet="/images/681bcb1b2e9074bb32ba85e7_Frame 2131331949-p-500.png 500w, /images/681bcb1b2e9074bb32ba85e7_Frame 2131331949.png 687w"
                  width={687}
                  height={349}
                />
                <p className="developing-text">1x Золотой сайт<br />1x Tagline Awards<br />1x Рейтинг Рунета<br />2x Awwwards<br />1x Киберпросвет<br />1x Eventiada</p>
              </div>
            </div>

            {/* ── OTP block ── */}
            <div className="developing-block col-1 anim">
              {/* Desktop row 1: logo left, stats+image right */}
              <div className="developing-row col-2">
                <div className="developing-logo">
                  <img alt="ОТП Банк" className="developing-logo__img" src="/images/681ba9d2154bb4307b274549.svg" />
                  <h2>2023-н.в.</h2>
                </div>
                <div className="col-2 col-2--36gap">
                  <div className="col-1 col-1--4gap">
                    <p className="developing-text">🥇 Золотой сайт 2025<br />Лучший сайт банка</p>
                  </div>
                  <div className="col-1 col-1--4gap">
                    <p className="developing-text">Глубина просмотра <strong>— 3</strong></p>
                    <p className="developing-text">Показатель отказов <strong>— 18%</strong></p>
                    <p className="developing-text">Рост конверсии <strong>— 40%</strong></p>
                    <p className="developing-text">Время на&nbsp;сайте <strong>— 3:35</strong></p>
                  </div>
                </div>
              </div>
              {/* Desktop row 2: big-image left, gallery right */}
              <div className="developing-row col-2">
                <div className="col-1">
                  <div className="col-1">
                    <img
                      alt=""
                      className="developing-image"
                      sizes="(max-width: 1008px) 100vw, 1008px"
                      src="/images/681bb34297bbc7a7a9127997_Frame 2131331869.webp"
                      srcSet="/images/681bb34297bbc7a7a9127997_Frame 2131331869-p-500.webp 500w, /images/681bb34297bbc7a7a9127997_Frame 2131331869-p-800.webp 800w, /images/681bb34297bbc7a7a9127997_Frame 2131331869.webp 1008w"
                  width={1008}
                  height={673}
                />
                    <p className="developing-text">ОТП Банк — один из&nbsp;лидеров на&nbsp;рынке розничного кредитования и&nbsp;банковских услуг в&nbsp;России</p>
                  </div>
                </div>
                <div className="col-1">
                  <picture>
                    <source type="image/avif" srcSet="/images/681bb38ecb5abd20c87e0860_Frame 2131331870-p-1080.avif 1080w, /images/681bb38ecb5abd20c87e0860_Frame 2131331870.avif 1302w" sizes="(max-width: 1302px) 100vw, 1302px" />
                    <img
                      alt=""
                      className="developing-image"
                      sizes="(max-width: 1302px) 100vw, 1302px"
                      src="/images/681bb38ecb5abd20c87e0860_Frame 2131331870.png"
                      srcSet="/images/681bb38ecb5abd20c87e0860_Frame 2131331870-p-500.png 500w, /images/681bb38ecb5abd20c87e0860_Frame 2131331870-p-800.png 800w, /images/681bb38ecb5abd20c87e0860_Frame 2131331870-p-1080.png 1080w, /images/681bb38ecb5abd20c87e0860_Frame 2131331870.png 1302w"
                      width={1302}
                      height={672}
                    />
                  </picture>
                  <div className="col-2">
                    <div className="col-1 col-1--4gap">
                      <p className="developing-text"><strong>100+</strong> страниц</p>
                      <p className="developing-text"><strong>300+</strong> иллюстраций</p>
                      <p className="developing-text"><strong>Онлайн и&nbsp;офлайн</strong> активности</p>
                    </div>
                    <picture>
                      <source type="image/avif" srcSet="/images/681bb42503ab947a72120b76_Frame 2131331872.avif" />
                      <img
                        alt=""
                        className="developing-image"
                        sizes="(max-width: 641px) 100vw, 641px"
                        src="/images/681bb42503ab947a72120b76_Frame 2131331872.png"
                        srcSet="/images/681bb42503ab947a72120b76_Frame 2131331872-p-500.png 500w, /images/681bb42503ab947a72120b76_Frame 2131331872.png 641w"
                        width={641}
                        height={374}
                      />
                    </picture>
                  </div>
                </div>
              </div>
              {/* Mobile-only row */}
              <div className="developing-row col-1 mobile">
                <div className="developing-logo">
                  <img alt="ОТП Банк" className="developing-logo__img" src="/images/681ba9d2154bb4307b274549.svg" />
                  <h2>2023-н.в.</h2>
                </div>
                <img
                  alt=""
                  className="developing-image"
                  sizes="(max-width: 686px) 100vw, 686px"
                  src="/images/681bce315c000289491ed6a5_Frame 2131331869 (1).webp"
                  srcSet="/images/681bce315c000289491ed6a5_Frame 2131331869 (1)-p-500.webp 500w, /images/681bce315c000289491ed6a5_Frame 2131331869 (1).webp 686w"
                  width={686}
                  height={353}
                />
                <p className="developing-text">ОТП Банк — один из&nbsp;лидеров на рынке розничного кредитования и&nbsp;банковских услуг в&nbsp;России</p>
                <img
                  alt=""
                  className="developing-image"
                  sizes="(max-width: 686px) 100vw, 686px"
                  src="/images/681bce1cf3803562b2473eb9_Frame 2131331871 (1) (1).webp"
                  srcSet="/images/681bce1cf3803562b2473eb9_Frame 2131331871 (1) (1)-p-500.webp 500w, /images/681bce1cf3803562b2473eb9_Frame 2131331871 (1) (1).webp 686w"
                  width={686}
                  height={391}
                />
                <div className="col-1 col-1--2gap-mob">
                  <p className="developing-text">Глубина просмотра <strong>— 3</strong></p>
                  <p className="developing-text">Показатель отказов <strong>— 18%</strong></p>
                  <p className="developing-text">Рост конверсии <strong>— 40%</strong></p>
                  <p className="developing-text">Время на&nbsp;сайте <strong>— 3:35</strong></p>
                </div>
                <picture>
                  <source type="image/avif" srcSet="/images/681bce3db3d112316bb4b950_Frame 2131331872.avif" />
                  <img
                    alt=""
                    className="developing-image"
                    sizes="(max-width: 686px) 100vw, 686px"
                    src="/images/681bce3db3d112316bb4b950_Frame 2131331872.png"
                    srcSet="/images/681bce3db3d112316bb4b950_Frame 2131331872-p-500.png 500w, /images/681bce3db3d112316bb4b950_Frame 2131331872.png 686w"
                    width={686}
                    height={401}
                  />
                </picture>
                <div className="col-1 col-1--2gap-mob">
                  <p className="developing-text"><strong>100+</strong> страниц</p>
                  <p className="developing-text"><strong>300+</strong> иллюстраций</p>
                  <p className="developing-text"><strong>Онлайн и&nbsp;офлайн</strong> активности</p>
                </div>
                <picture>
                  <source type="image/avif" srcSet="/images/681bb38ecb5abd20c87e0860_Frame 2131331870-p-1080.avif 1080w, /images/681bb38ecb5abd20c87e0860_Frame 2131331870.avif 1302w" sizes="(max-width: 1302px) 100vw, 1302px" />
                  <img
                    alt=""
                    className="developing-image"
                    sizes="(max-width: 1302px) 100vw, 1302px"
                    src="/images/681bb38ecb5abd20c87e0860_Frame 2131331870.png"
                    srcSet="/images/681bb38ecb5abd20c87e0860_Frame 2131331870-p-500.png 500w, /images/681bb38ecb5abd20c87e0860_Frame 2131331870-p-800.png 800w, /images/681bb38ecb5abd20c87e0860_Frame 2131331870-p-1080.png 1080w, /images/681bb38ecb5abd20c87e0860_Frame 2131331870.png 1302w"
                    width={1302}
                    height={672}
                  />
                </picture>
                <p className="developing-text"><strong>Бронза</strong> на&nbsp;Workspace</p>
              </div>
            </div>

            {/* ── Яндекс Еда block ── */}
            <div className="developing-block col-1 anim">
              {/* Desktop row 1: logo left, stats right */}
              <div className="developing-row col-2">
                <div className="developing-logo">
                  <img alt="Яндекс Еда" className="developing-logo__img" src="/images/681bb80989deb2eb087c95fc_eats.svg" />
                  <h2>2023-н.в.</h2>
                </div>
                <div className="col-2 col-2--36gap">
                  <div className="col-1 col-1--4gap">
                    <p className="developing-text">Взяли <strong>серебро</strong><br />на&nbsp;E+ Awards 2024</p>
                  </div>
                  <div className="col-1 col-1--4gap">
                    <p className="developing-text"><strong>100+</strong> моушен-роликов</p>
                    <p className="developing-text"><strong>10</strong> крупных спецпроектов</p>
                    <p className="developing-text"><strong>6</strong> медиакитов</p>
                    <p className="developing-text"><strong>1000+</strong> слайдов</p>
                    <p className="developing-text"><strong>xxm</strong> аудитория дизайна</p>
                  </div>
                </div>
              </div>
              {/* Desktop row 2: text + 2 images (col-3 col3--fix-columns) */}
              <div className="developing-row col-3 col3--fix-columns">
                <div className="col-1 col-1--4gap">
                  <p className="developing-text"><strong>Два года</strong> дизайн-поддержки фудтех-проектов Яндекса<br />в <strong>10+</strong> странах</p>
                </div>
                <img
                  alt=""
                  className="developing-image"
                  sizes="(max-width: 1388px) 100vw, 1388px"
                  src="/images/681bbb09cb4a2b51729ef6b9_Frame 2131331925 (1).webp"
                  srcSet="/images/681bbb09cb4a2b51729ef6b9_Frame 2131331925 (1)-p-500.webp 500w, /images/681bbb09cb4a2b51729ef6b9_Frame 2131331925 (1)-p-800.webp 800w, /images/681bbb09cb4a2b51729ef6b9_Frame 2131331925 (1)-p-1080.webp 1080w, /images/681bbb09cb4a2b51729ef6b9_Frame 2131331925 (1).webp 1388w"
                  width={1388}
                  height={516}
                />
                <picture>
                  <source type="image/avif" srcSet="/images/681bbb24c95eafdf2e96ea6a_Frame 2131328289.avif" />
                  <img
                    alt=""
                    className="developing-image"
                    sizes="(max-width: 605px) 100vw, 605px"
                    src="/images/681bbb24c95eafdf2e96ea6a_Frame 2131328289.png"
                    srcSet="/images/681bbb24c95eafdf2e96ea6a_Frame 2131328289-p-500.png 500w, /images/681bbb24c95eafdf2e96ea6a_Frame 2131328289.png 605w"
                    width={605}
                    height={515}
                  />
                </picture>
              </div>
              {/* Desktop row 3: 3 images (col-3 col3--fix-columns) */}
              <div className="developing-row col-3 col3--fix-columns">
                <img
                  alt=""
                  className="developing-image"
                  sizes="(max-width: 595px) 100vw, 595px"
                  src="/images/681bbfcd10be7ac1904e4879_Frame 2131331920.webp"
                  srcSet="/images/681bbfcd10be7ac1904e4879_Frame 2131331920-p-500.webp 500w, /images/681bbfcd10be7ac1904e4879_Frame 2131331920.webp 595w"
                  width={595}
                  height={633}
                />
                <picture>
                  <source type="image/avif" srcSet="/images/681bbfd9d97c4462eb111b27_Frame 2131331902-p-1080.avif 1080w, /images/681bbfd9d97c4462eb111b27_Frame 2131331902.avif 1392w" sizes="(max-width: 1392px) 100vw, 1392px" />
                  <img
                    alt=""
                    className="developing-image"
                    sizes="(max-width: 1392px) 100vw, 1392px"
                    src="/images/681bbfd9d97c4462eb111b27_Frame 2131331902.png"
                    srcSet="/images/681bbfd9d97c4462eb111b27_Frame 2131331902-p-500.png 500w, /images/681bbfd9d97c4462eb111b27_Frame 2131331902-p-800.png 800w, /images/681bbfd9d97c4462eb111b27_Frame 2131331902-p-1080.png 1080w, /images/681bbfd9d97c4462eb111b27_Frame 2131331902.png 1392w"
                    width={1392}
                    height={634}
                  />
                </picture>
                <img
                  alt=""
                  className="developing-image"
                  sizes="(max-width: 604px) 100vw, 604px"
                  src="/images/681bbfe4a2111d8a1fe54b5e_Frame 2131331947 (1).webp"
                  srcSet="/images/681bbfe4a2111d8a1fe54b5e_Frame 2131331947 (1)-p-500.webp 500w, /images/681bbfe4a2111d8a1fe54b5e_Frame 2131331947 (1).webp 604w"
                  width={604}
                  height={633}
                />
              </div>
              {/* Mobile-only row */}
              <div className="developing-row col-1 mobile">
                <div className="developing-logo">
                  <img alt="Яндекс Еда" className="developing-logo__img" src="/images/681bb80989deb2eb087c95fc_eats.svg" />
                  <h2>2023-н.в.</h2>
                </div>
                <p className="developing-text"><strong>Два года</strong> дизайн-поддержки фудтех-проектов Яндекса в <strong>10+</strong> странах</p>
                <img
                  alt=""
                  className="developing-image"
                  sizes="(max-width: 686px) 100vw, 686px"
                  src="/images/681bd06e8ec58b8f900c7d6a_Frame 2131331926 1.webp"
                  srcSet="/images/681bd06e8ec58b8f900c7d6a_Frame 2131331926 1-p-500.webp 500w, /images/681bd06e8ec58b8f900c7d6a_Frame 2131331926 1.webp 686w"
                  width={686}
                  height={872}
                />
                <div className="col-1 col-1--2gap-mob">
                  <p className="developing-text"><strong>100+</strong> моушен-роликов</p>
                  <p className="developing-text"><strong>10</strong> крупных спецпроектов</p>
                  <p className="developing-text"><strong>6</strong> медиакитов</p>
                  <p className="developing-text"><strong>1000+</strong> слайдов</p>
                  <p className="developing-text"><strong>xxm</strong> аудитория дизайна</p>
                </div>
                <img
                  alt=""
                  className="developing-image"
                  sizes="(max-width: 595px) 100vw, 595px"
                  src="/images/681bbfcd10be7ac1904e4879_Frame 2131331920.webp"
                  srcSet="/images/681bbfcd10be7ac1904e4879_Frame 2131331920-p-500.webp 500w, /images/681bbfcd10be7ac1904e4879_Frame 2131331920.webp 595w"
                  width={595}
                  height={633}
                />
                <p className="developing-text">Взяли <strong>серебро</strong><br />на&nbsp;E+ Awards 2024</p>
              </div>
            </div>

        </div>
      </div>

      <div className="spacing" />

      {/* ── Clients ── */}
      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-h1-wrapper">
            <h2 className="h1 anim">Клиенты</h2>
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="main-container padding-0">
          <ClientLogosGrid logos={CLIENT_LOGOS} />
        </div>
      </div>

      <div className="spacing" />

      {/* ── Contact ── */}
      <ContactCard />
    </>
  )
}
