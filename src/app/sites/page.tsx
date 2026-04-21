import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import StatGrid from '@/components/StatGrid/StatGrid'
import ServiceCasesGrid from '@/components/ServiceCasesGrid/ServiceCasesGrid'

export const metadata: Metadata = {
  title: 'Сайты',
  description: 'Делаем очень большие сайты и экосистемы',
  alternates: {
    canonical: 'https://pinkman.ru/sites/',
  },
}

export default function SitesPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Сайты</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Делаем очень большие сайты и&nbsp;экосистемы</h2></div></Section>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">Корпоративные сайты</h2>
            <p className="font-color-dark-gray">Десятки разделов. Множество аудиторий. Сложная структура. Наша специализация&nbsp;— масштабные веб-проекты для&nbsp;крупного бизнеса</p>
          </div>
          <div className="service__picture">
            <picture>
              <source type="image/avif" srcSet="/images/6829dd5bc35528c6ea9fe39a_Frame 174-p-500.avif 500w, /images/6829dd5bc35528c6ea9fe39a_Frame 174-p-800.avif 800w, /images/6829dd5bc35528c6ea9fe39a_Frame 174-p-1080.avif 1080w, /images/6829dd5bc35528c6ea9fe39a_Frame 174.avif 2624w" sizes="100vw" />
              <img alt="" className="service__img hide-mobile" loading="eager" sizes="100vw"
                src="/images/6829dd5bc35528c6ea9fe39a_Frame 174.webp"
                srcSet="/images/6829dd5bc35528c6ea9fe39a_Frame 174-p-500.webp 500w, /images/6829dd5bc35528c6ea9fe39a_Frame 174-p-800.webp 800w, /images/6829dd5bc35528c6ea9fe39a_Frame 174-p-1080.webp 1080w, /images/6829dd5bc35528c6ea9fe39a_Frame 174.webp 2624w"
                width={2624} height={852} />
            </picture>
            <picture>
              <source type="image/avif" srcSet="/images/682a4b0416632e09b8f54d98_Group 2131328290-p-500.avif 500w, /images/682a4b0416632e09b8f54d98_Group 2131328290.avif 686w" sizes="100vw" />
              <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
                src="/images/682a4b0416632e09b8f54d98_Group 2131328290.webp"
                srcSet="/images/682a4b0416632e09b8f54d98_Group 2131328290-p-500.webp 500w, /images/682a4b0416632e09b8f54d98_Group 2131328290.webp 686w"
                width={686} height={1240} />
            </picture>
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">Продуктовые сайты</h2>
            <p className="font-color-dark-gray">Рассказываем о&nbsp;продукте так, чтобы им начали пользоваться. Создаем сайты, которые объясняют сложное простыми словами и&nbsp;дизайном и&nbsp;конвертируют посетителей в&nbsp;клиентов</p>
          </div>
          <div className="service__picture">
            <picture>
              <source type="image/avif" srcSet="/images/682a425168c274c43157d27c_Frame 421-p-500.avif 500w, /images/682a425168c274c43157d27c_Frame 421-p-800.avif 800w, /images/682a425168c274c43157d27c_Frame 421-p-1080.avif 1080w, /images/682a425168c274c43157d27c_Frame 421.avif 2624w" sizes="100vw" />
              <img alt="" className="service__img hide-mobile" loading="eager" sizes="100vw"
                src="/images/682a425168c274c43157d27c_Frame 421.webp"
                srcSet="/images/682a425168c274c43157d27c_Frame 421-p-500.webp 500w, /images/682a425168c274c43157d27c_Frame 421-p-800.webp 800w, /images/682a425168c274c43157d27c_Frame 421-p-1080.webp 1080w, /images/682a425168c274c43157d27c_Frame 421.webp 2624w"
                width={2624} height={852} />
            </picture>
            <picture>
              <source type="image/avif" srcSet="/images/682a4c60ad8829907f9a66fc_Frame 2131331595 (1)-p-500.avif 500w, /images/682a4c60ad8829907f9a66fc_Frame 2131331595 (1).avif 686w" sizes="100vw" />
              <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
                src="/images/682a4c60ad8829907f9a66fc_Frame 2131331595 (1).webp"
                srcSet="/images/682a4c60ad8829907f9a66fc_Frame 2131331595 (1)-p-500.webp 500w, /images/682a4c60ad8829907f9a66fc_Frame 2131331595 (1).webp 686w"
                width={686} height={911} />
            </picture>
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">Лендинги и&nbsp;промо-сайты</h2>
            <p className="font-color-dark-gray">Без&nbsp;воды и&nbsp;шаблонов. Четкая структура, понятные месседжи, высокая конверсия</p>
          </div>
          <div className="service__picture">
            <picture>
              <source type="image/avif" srcSet="/images/682a4392bb81a9ae14b5e4a9_Frame 422-p-500.avif 500w, /images/682a4392bb81a9ae14b5e4a9_Frame 422-p-800.avif 800w, /images/682a4392bb81a9ae14b5e4a9_Frame 422-p-1080.avif 1080w, /images/682a4392bb81a9ae14b5e4a9_Frame 422.avif 2624w" sizes="100vw" />
              <img alt="" className="service__img hide-mobile" loading="eager" sizes="100vw"
                src="/images/682a4392bb81a9ae14b5e4a9_Frame 422.webp"
                srcSet="/images/682a4392bb81a9ae14b5e4a9_Frame 422-p-500.webp 500w, /images/682a4392bb81a9ae14b5e4a9_Frame 422-p-800.webp 800w, /images/682a4392bb81a9ae14b5e4a9_Frame 422-p-1080.webp 1080w, /images/682a4392bb81a9ae14b5e4a9_Frame 422.webp 2624w"
                width={2624} height={852} />
            </picture>
            <picture>
              <source type="image/avif" srcSet="/images/682a4cb1350f72e44a18deb4_Frame 2131331603-p-500.avif 500w, /images/682a4cb1350f72e44a18deb4_Frame 2131331603.avif 686w" sizes="100vw" />
              <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
                src="/images/682a4cb1350f72e44a18deb4_Frame 2131331603.webp"
                srcSet="/images/682a4cb1350f72e44a18deb4_Frame 2131331603-p-500.webp 500w, /images/682a4cb1350f72e44a18deb4_Frame 2131331603.webp 686w"
                width={686} height={899} />
            </picture>
          </div>
        </div>
      </div>

      {/* ── Metrics strip ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">В&nbsp;цифрах</h2></div></Section>
      <StatGrid items={[
        { value: '10+', label: 'лет делаем сайты для крупного бизнеса' },
        { value: '7+', label: 'наград за сайты ВТБ — российских и международных' },
        { value: '40%', label: 'средний рост конверсии на проектах редизайна' },
        { value: 'топ‑2', label: 'рейтинга цифровой зрелости SDI360 2023' },
      ]} />

      {/* ── When to call us — horizontal row ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Когда обращаться</h2></div></Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['01']}
          title="У&nbsp;вас большой бизнес"
          description="Банк? Корпорация? Множество направлений и&nbsp;целевых аудиторий? Делаем масштабные веб-платформы со&nbsp;сложной инфраструктурой и&nbsp;продуманными сценариями"
        />
        <ServicePoint
          tagsTop={['02']}
          title="Продукт сложно объяснить"
          description="У&nbsp;вас крутой продукт, но&nbsp;клиенты не&nbsp;понимают, зачем он им? Сделаем продуктовый сайт, который донесет ценность через структуру, язык и&nbsp;визуал"
        />
        <ServicePoint
          tagsTop={['03']}
          title="Сайт есть, результата нет"
          description="Когда сайт не&nbsp;помогает бизнесу&nbsp;— найдем проблемные места и&nbsp;предложим UX-решения на&nbsp;основе аналитики и&nbsp;пользовательских данных"
        />
      </ServicePointRow>

      {/* ── Deep-dive grid ── */}
      <ServiceGrid>
        <ServicePoint
          title="Делаете масштабный веб-проект"
          tags={['интеграции', 'сложная логика', 'корпоративные клиенты']}
          description="Если ваш проект требует сложных инфраструктурных решений, интеграции с&nbsp;внутренними системами или&nbsp;поддержки сложной логики и&nbsp;пользовательских сценариев"
        />
        <ServicePoint
          title="Нужна дизайн-система"
          tags={['масштаб', 'единый язык', 'компоненты']}
          description="Строим дизайн-системы, которые живут годами&nbsp;— единый язык для&nbsp;продукта, разработки и&nbsp;маркетинга. Минимум расхождений, максимум скорости"
          animDelay={2}
        />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кейсы</h2></div></Section>
      <ServiceCasesGrid cases={[
        {
          title: 'ВТБ',
          desc: '5 лет развивали сайт и\u00a0цифровые коммуникации ТОП-3 банка России',
          year: '2024',
          cats: ['Веб-дизайн', 'Интерфейсы', '3D/Motion-design', 'Сайты корпораций'],
          img: '/images/682a4691d3200066718f09bc_Frame 174 (1).webp',
          imgSrcSet: '/images/682a4691d3200066718f09bc_Frame 174 (1)-p-500.webp 500w, /images/682a4691d3200066718f09bc_Frame 174 (1)-p-800.webp 800w, /images/682a4691d3200066718f09bc_Frame 174 (1)-p-1080.webp 1080w, /images/682a4691d3200066718f09bc_Frame 174 (1).webp 1248w',
        },
        {
          title: 'ОТП Банк',
          desc: '1,5 года делаем сайт банка лучше\u00a0— увеличили конверсию на\u00a040%',
          year: '2025',
          cats: ['Веб-дизайн', 'Исследования', 'Сайты корпораций'],
          img: '/images/680b76c9f1bb4eb6c0f384fb_otp.webp',
          imgSrcSet: '/images/680b76c9f1bb4eb6c0f384fb_otp-p-500.webp 500w, /images/680b76c9f1bb4eb6c0f384fb_otp-p-800.webp 800w, /images/680b76c9f1bb4eb6c0f384fb_otp-p-1080.webp 1080w, /images/680b76c9f1bb4eb6c0f384fb_otp.webp 1248w',
          href: '/projects/1-5-goda-razvivaem-sayt-otp-banka-uvelichili-konversiyu-na-40',
        },
        {
          title: 'API Яндекс Карты',
          desc: 'Сделали редизайн сайта геосервисов Яндекса для\u00a0бизнеса и\u00a0получили кучу наград',
          year: '2024',
          cats: ['Веб-дизайн', 'Интерфейсы', 'Сайты корпораций'],
          img: '/images/6818bccf9f96a2532b76569c_Frame 176 (2).webp',
          imgSrcSet: '/images/6818bccf9f96a2532b76569c_Frame 176 (2)-p-500.webp 500w, /images/6818bccf9f96a2532b76569c_Frame 176 (2)-p-800.webp 800w, /images/6818bccf9f96a2532b76569c_Frame 176 (2)-p-1080.webp 1080w, /images/6818bccf9f96a2532b76569c_Frame 176 (2).webp 1248w',
          href: '/projects/sdelali-redizayn-sayta-geoservisov-yandeksa-dlya-biznesa',
        },
      ]} />
    </>
  )
}
