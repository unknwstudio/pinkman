import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServiceCasesGrid from '@/components/ServiceCasesGrid/ServiceCasesGrid'

export const metadata: Metadata = {
  title: 'Multimedia & Phygital',
  description: 'Интерактивные спецпроекты и новый бренд-опыт',
  alternates: {
    canonical: 'https://pinkman.ru/multimedia-phygital/',
  },
}

export default function MultimediaPhygitalPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Multimedia &amp; Phygital</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Интерактивные спецпроекты и&nbsp;новый бренд-опыт</h2></div></Section>

      <ServiceGrid>
        <Link href="/outsource-multimedia/" className="service-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
          <ServicePoint
            tagsTop={['аутсорс']}
            title="Аутсорс мультимедиа&#x2011;команды"
            description="Встраиваемся в&nbsp;ваш проект уже завтра. CGI, motion, UI, AI&#x2011;контент&nbsp;&mdash; в&nbsp;срок, в&nbsp;бюджет, без&nbsp;потери смысла."
            afterTitle={
              <div className="small-button small-button--cases w-inline-block" style={{ marginTop: 'var(--16px)', display: 'inline-flex' }}>
                <p className="text-regular small-button-text">Подробнее</p>
                <div className="small-button-arrow-wrapper">
                  <img alt="" className="small-button-arrow" loading="eager" src="/images/67152c3278a3dccbefe124b3_arrow-grey.svg" />
                  <img alt="" className="button-arrow__active" loading="eager" src="/images/66f6e23524a454603f7d5540_arrow-white.svg" />
                </div>
              </div>
            }
          />
        </Link>
      </ServiceGrid>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">AR / VR</h2>
            <p className="font-color-dark-gray">Интегрируем иммерсивные технологии в&nbsp;маркетинг, ритейл и&nbsp;ивенты. Прорабатываем сценарии, делаем 3D и&nbsp;интерфейсы, собираем под&nbsp;ключ</p>
          </div>
          <div className="service__picture">
            <img alt="" className="service__img hide-mobile" loading="eager"
              src="/images/682aff6810703914676a4d87_m1.webp" width={2624} height={852} />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682aff77a7b7b7e8063d8456_m1mob.webp"
              srcSet="/images/682aff77a7b7b7e8063d8456_m1mob-p-500.webp 500w, /images/682aff77a7b7b7e8063d8456_m1mob.webp 686w"
              width={686} height={906} />
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">Интерактивные инсталляции</h2>
            <p className="font-color-dark-gray">Создаём инсталляции и&nbsp;оформляем пространства с&nbsp;технологичной визуальной частью&nbsp;— для&nbsp;выставок, презентаций и&nbsp;бренд-мероприятий</p>
          </div>
          <div className="service__picture">
            <img alt="" className="service__img hide-mobile" loading="eager"
              src="/images/682affa1142ae3b66be54ed4_m2.webp" width={2624} height={852} />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682affb888e04d40f868a901_m2mob.webp"
              srcSet="/images/682affb888e04d40f868a901_m2mob-p-500.webp 500w, /images/682affb888e04d40f868a901_m2mob.webp 686w"
              width={686} height={888} />
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">Выставочные проекты</h2>
            <p className="font-color-dark-gray">Разрабатываем музейные проекты и&nbsp;экспозиции на&nbsp;стыке цифрового и&nbsp;офлайн-опыта: от&nbsp;идеи и&nbsp;сценария до&nbsp;реализации, монтажа и&nbsp;печатных материалов</p>
          </div>
          <div className="service__picture">
            <img alt="" className="service__img hide-mobile" loading="eager"
              src="/images/682affe67434316939544690_m3.webp" width={2624} height={852} />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682b000a9ead6e45d8f0bc0d_m3mob.webp"
              srcSet="/images/682b000a9ead6e45d8f0bc0d_m3mob-p-500.webp 500w, /images/682b000a9ead6e45d8f0bc0d_m3mob.webp 690w"
              width={690} height={2070} />
          </div>
        </div>
      </div>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Когда обращаться</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Нужен новый формат взаимодействия с&nbsp;аудиторией" tags={['интерактив','физический контакт','цифровая активация']} description="Если хотите вовлечь пользователей через интерактив, физический контакт или&nbsp;цифровую активацию" />
        <ServicePoint title="Проект требует много разной экспертизы" tags={['концепт','UX','3D-графика','сет-дизайн','интерактивы','физическая реализация']} description="Берем на&nbsp;себя весь процесс: от&nbsp;концепта, UX и&nbsp;3D-графики до&nbsp;сет-дизайна, интерактивов и&nbsp;физической реализации" />
        <ServicePoint title="Хотите использовать AR/VR в&nbsp;коммуникациях" tags={['дополненная реальность','VR','AR']} description="Поможем встроить технологии в&nbsp;продукт или&nbsp;кампанию: продумываем, проектируем, делаем рабочее решение" />
        <ServicePoint title="Хотите усилить бренд-опыт" tags={['диджитал','офлайн']} description="Создаём запоминающиеся сценарии присутствия бренда в&nbsp;пространстве, диджитале или&nbsp;их комбинации" />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кейсы</h2></div></Section>
      <ServiceCasesGrid cases={[
        {
          title: 'Сбер х Пушкинский музей',
          desc: 'Спроектировали приложение и\u00a0AR-активности для\u00a0выставки Снейдерса',
          year: '2024',
          cats: ['BTL и\u00a0ивенты', '3D/Motion-design', 'Интерфейсы'],
          img: '/images/680b77bf92a7c82e815dca6d_sneyders.webp',
          imgSrcSet: '/images/680b77bf92a7c82e815dca6d_sneyders-p-500.webp 500w, /images/680b77bf92a7c82e815dca6d_sneyders-p-800.webp 800w, /images/680b77bf92a7c82e815dca6d_sneyders-p-1080.webp 1080w, /images/680b77bf92a7c82e815dca6d_sneyders.webp 1248w',
          href: '/projects/sproektirovali-prilozhenie-i-ar-aktivnosti-dlya-vystavki-sneydersa-v-pushkinskom-muzee',
        },
        {
          title: 'Сбер х Еврейский музей',
          desc: 'Мобильное приложение и\u00a0дизайн-поддержка выставки про\u00a0Бродского',
          year: '2024',
          cats: ['BTL и\u00a0ивенты', '3D/Motion-design', 'Интерфейсы'],
          img: '/images/681229f38e06cabc183bbec4_Frame 174.webp',
          imgSrcSet: '/images/681229f38e06cabc183bbec4_Frame 174-p-500.webp 500w, /images/681229f38e06cabc183bbec4_Frame 174-p-800.webp 800w, /images/681229f38e06cabc183bbec4_Frame 174-p-1080.webp 1080w, /images/681229f38e06cabc183bbec4_Frame 174.webp 1248w',
          href: '/projects/mobilnoe-prilozhenie-i-dizayn-podderzhka-vystavki-pro-brodskogo',
        },
        {
          title: 'VK Порталы',
          desc: 'Спроектировали чат-бота и\u00a0100 экранов для\u00a0управления мультимедийным проектом',
          year: '2023',
          cats: ['BTL и\u00a0ивенты', 'Интерфейсы'],
          img: '/images/680b76b7c91ad25c42587b6c_vkportal.webp',
          imgSrcSet: '/images/680b76b7c91ad25c42587b6c_vkportal-p-500.webp 500w, /images/680b76b7c91ad25c42587b6c_vkportal-p-800.webp 800w, /images/680b76b7c91ad25c42587b6c_vkportal-p-1080.webp 1080w, /images/680b76b7c91ad25c42587b6c_vkportal.webp 1248w',
          href: '/projects/sdelali-chat-bota-i-sproektirovali-100-ekranov-dlya-proekta-vk-portaly',
        },
      ]} />

    </>
  )
}
