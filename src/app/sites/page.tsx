import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import StatGrid from '@/components/StatGrid/StatGrid'
import CaseCard from '@/components/CaseCard/CaseCard'

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
            <img alt="" className="service__img hide-mobile" loading="eager" sizes="100vw"
              src="/images/6829dd5bc35528c6ea9fe39a_Frame 174.webp"
              srcSet="/images/6829dd5bc35528c6ea9fe39a_Frame 174-p-500.webp 500w, /images/6829dd5bc35528c6ea9fe39a_Frame 174-p-800.webp 800w, /images/6829dd5bc35528c6ea9fe39a_Frame 174-p-1080.webp 1080w, /images/6829dd5bc35528c6ea9fe39a_Frame 174.webp 2624w" />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682a4b0416632e09b8f54d98_Group 2131328290.webp"
              srcSet="/images/682a4b0416632e09b8f54d98_Group 2131328290-p-500.webp 500w, /images/682a4b0416632e09b8f54d98_Group 2131328290.webp 686w" />
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
            <img alt="" className="service__img hide-mobile" loading="eager" sizes="100vw"
              src="/images/682a425168c274c43157d27c_Frame 421.webp"
              srcSet="/images/682a425168c274c43157d27c_Frame 421-p-500.webp 500w, /images/682a425168c274c43157d27c_Frame 421-p-800.webp 800w, /images/682a425168c274c43157d27c_Frame 421-p-1080.webp 1080w, /images/682a425168c274c43157d27c_Frame 421.webp 2624w" />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682a4c60ad8829907f9a66fc_Frame 2131331595 (1).webp"
              srcSet="/images/682a4c60ad8829907f9a66fc_Frame 2131331595 (1)-p-500.webp 500w, /images/682a4c60ad8829907f9a66fc_Frame 2131331595 (1).webp 686w" />
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
            <img alt="" className="service__img hide-mobile" loading="eager" sizes="100vw"
              src="/images/682a4392bb81a9ae14b5e4a9_Frame 422.webp"
              srcSet="/images/682a4392bb81a9ae14b5e4a9_Frame 422-p-500.webp 500w, /images/682a4392bb81a9ae14b5e4a9_Frame 422-p-800.webp 800w, /images/682a4392bb81a9ae14b5e4a9_Frame 422-p-1080.webp 1080w, /images/682a4392bb81a9ae14b5e4a9_Frame 422.webp 2624w" />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682a4cb1350f72e44a18deb4_Frame 2131331603.webp"
              srcSet="/images/682a4cb1350f72e44a18deb4_Frame 2131331603-p-500.webp 500w, /images/682a4cb1350f72e44a18deb4_Frame 2131331603.webp 686w" />
          </div>
        </div>
      </div>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Результаты в&nbsp;цифрах</h2></div></Section>
      <StatGrid items={[
        { value: '10+', label: 'лет делаем сайты для&nbsp;крупного бизнеса' },
        { value: '7+', label: 'российских и&nbsp;международных наград', note: 'только по проектам ВТБ' },
        { value: '40%', label: 'средний рост конверсии', note: 'на проектах редизайна' },
        { value: 'топ-2', label: 'рейтинга цифровой зрелости', note: 'SDI360, 2023 — ВТБ' },
      ]} />

      <Section><div className="text-h1-wrapper"><h2 className="h1">Когда обращаться</h2></div></Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['01']}
          title="У&nbsp;вас большой бизнес"
          description="Банк? Корпорация? Множество направлений и&nbsp;целевых аудиторий? Мы именно для&nbsp;таких задач. Делаем масштабные веб-платформы с&nbsp;продуманными сценариями для&nbsp;разных аудиторий"
        />
        <ServicePoint
          tagsTop={['02']}
          title="Продукт сложно объяснить"
          description="У&nbsp;вас крутой продукт, но&nbsp;клиенты не&nbsp;понимают, зачем он им? Мы сделаем продуктовый сайт, который донесет ценность через структуру, язык и&nbsp;визуал"
        />
        <ServicePoint
          tagsTop={['03']}
          title="Сайт есть, результата нет"
          description="Когда сайт не&nbsp;помогает бизнесу и&nbsp;нужен редизайн на&nbsp;основе аналитики. Найдем проблемные места и&nbsp;предложим UX-решения, базирующиеся на&nbsp;реальных данных"
        />
      </ServicePointRow>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кейсы</h2></div></Section>
      <div className="service-cases-section">
        <div className="service-grid">

          <CaseCard
            chips={['банки', 'корпоративный сайт']}
            year="2019–2025"
            title="ВТБ"
            subtitle="5 лет развивали сайт топ-3 банка России"
            description="Спроектировали и&nbsp;реализовали комплексный сайт с&nbsp;продуманной продуктовой структурой. Создали и&nbsp;внедрили единую дизайн-систему, новую систему навигации, архитектуру сайта и&nbsp;пользовательский опыт"
            result={{ label: 'Результат:', value: '7+ российских и&nbsp;международных наград, банк в&nbsp;топ-2 рейтинга цифровой зрелости (SDI360, 2023)' }}
            imgSrc="/images/682a4691d3200066718f09bc_Frame 174 (1).webp"
            imgSrcSet="/images/682a4691d3200066718f09bc_Frame 174 (1)-p-500.webp 500w, /images/682a4691d3200066718f09bc_Frame 174 (1)-p-800.webp 800w, /images/682a4691d3200066718f09bc_Frame 174 (1)-p-1080.webp 1080w, /images/682a4691d3200066718f09bc_Frame 174 (1).webp 1248w"
            imgSrcMobile="/images/682a469c3da8b54b3e2f3a83_Frame 175 (1).webp"
            imgSrcSetMobile="/images/682a469c3da8b54b3e2f3a83_Frame 175 (1)-p-500.webp 500w, /images/682a469c3da8b54b3e2f3a83_Frame 175 (1).webp 622w"
          />

          <CaseCard
            chips={['банки', 'корпоративный сайт']}
            year="2023-н.в."
            title="ОТП Банк"
            subtitle="1,5 года делаем сайт международного банка лучше"
            description="Создали масштабную корпоративную платформу с&nbsp;десятками разделов для&nbsp;различных целевых аудиторий. Разработали сложную информационную архитектуру, которая логично объединяет множество банковских продуктов и&nbsp;сервисов для&nbsp;частных лиц, бизнеса и&nbsp;премиальных клиентов"
            result={{ label: 'Результат:', value: '40% — средний рост конверсии по&nbsp;продуктам' }}
            href="/projects/1-5-goda-razvivaem-sayt-otp-banka-uvelichili-konversiyu-na-40/"
            imgSrc="/images/682a586162b17387d3a5d03b_Frame 176.webp"
            imgSrcSet="/images/682a586162b17387d3a5d03b_Frame 176-p-500.webp 500w, /images/682a586162b17387d3a5d03b_Frame 176-p-800.webp 800w, /images/682a586162b17387d3a5d03b_Frame 176-p-1080.webp 1080w, /images/682a586162b17387d3a5d03b_Frame 176.webp 1248w"
            imgSrcMobile="/images/682a58746fd9bb45b831e79c_Frame 177 (1).webp"
            imgSrcSetMobile="/images/682a58746fd9bb45b831e79c_Frame 177 (1)-p-500.webp 500w, /images/682a58746fd9bb45b831e79c_Frame 177 (1).webp 622w"
          />

          <CaseCard
            chips={['цифровые продукты']}
            year="2023–2024"
            title="API Яндекс Карты"
            subtitle="Сделали лучший сайт года для&nbsp;геосервисов Яндекса"
            description="Разработали эффективный продуктовый сайт, который наглядно демонстрирует возможности API-инструментов и&nbsp;сценарии их использования. Создали понятную систему навигации и&nbsp;информационную архитектуру, которая помогает разработчикам и&nbsp;бизнесу быстро находить нужную информацию и&nbsp;принимать решение об&nbsp;использовании сервиса"
            result={{ label: 'Результат:', value: 'Лучший сайт года (Tagline Awards 2024), конверсия выросла на&nbsp;1,1 п.п.' }}
            href="/projects/sdelali-redizayn-sayta-geoservisov-yandeksa-dlya-biznesa/"
            imgSrc="/images/682a5bc4a5ca3597ed91714a_Frame 178.webp"
            imgSrcSet="/images/682a5bc4a5ca3597ed91714a_Frame 178-p-500.webp 500w, /images/682a5bc4a5ca3597ed91714a_Frame 178-p-800.webp 800w, /images/682a5bc4a5ca3597ed91714a_Frame 178-p-1080.webp 1080w, /images/682a5bc4a5ca3597ed91714a_Frame 178.webp 1248w"
            imgSrcMobile="/images/682a5be32e614eeb7f97cab6_Frame 179 (2).webp"
            imgSrcSetMobile="/images/682a5be32e614eeb7f97cab6_Frame 179 (2)-p-500.webp 500w, /images/682a5be32e614eeb7f97cab6_Frame 179 (2).webp 622w"
          />

        </div>
      </div>
    </>
  )
}
