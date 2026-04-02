import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import CaseCard from '@/components/CaseCard/CaseCard'

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
      <div className="service-cases-section">
        <div className="service-grid">

          <CaseCard
            chips={['AR/VR', 'инсталляции']}
            year="2024"
            title="Сбер х Пушкинский музей"
            subtitle="Спроектировали приложение и&nbsp;AR-активности для&nbsp;выставки Снейдерса"
            description="Вместе с&nbsp;командами Sber Metaverse Tech и&nbsp;Event Lab СберМаркетинга работали над&nbsp;AR-контентом. Разработали дизайн-концепцию приложения выставки, оживили картины с&nbsp;помощью AR, спроектировали масштабную AR-инсталляцию для&nbsp;входа в&nbsp;музей, разработали и&nbsp;внедрили в&nbsp;приложение партнерский квест от&nbsp;Купера"
            result={{ label: 'Результат:', value: 'запустили проект за&nbsp;1 месяц вместе с&nbsp;разработкой' }}
            href="/projects/sproektirovali-prilozhenie-i-ar-aktivnosti-dlya-vystavki-sneydersa-v-pushkinskom-muzee/"
            imgSrc="/images/682b086c2526a109f26f4986_Frame 174.webp"
            imgSrcSet="/images/682b086c2526a109f26f4986_Frame 174-p-500.webp 500w, /images/682b086c2526a109f26f4986_Frame 174-p-800.webp 800w, /images/682b086c2526a109f26f4986_Frame 174-p-1080.webp 1080w, /images/682b086c2526a109f26f4986_Frame 174.webp 1248w"
          />

          <CaseCard
            chips={['выставочные проекты', 'интерфейсы']}
            year="2024"
            title="Сбер х Еврейский музей"
            subtitle="Мобильное приложение и&nbsp;дизайн-поддержка выставки про&nbsp;Бродского"
            description="Помогли сделать фиджитал-активности для&nbsp;выставочного проекта Еврейского музея и&nbsp;Сбера «Иосиф Бродский. Место не&nbsp;хуже любого». Разработали дизайн-концепцию приложения и&nbsp;дизайн-материалов для&nbsp;пространств выставки, покрыли работы от&nbsp;копирайтинга до&nbsp;3d-моделирования и&nbsp;анимации экспонатов выставки внутри приложения"
            result={{ label: 'Результат:', value: 'запустили проект за&nbsp;1 месяц вместе с&nbsp;разработкой' }}
            href="/projects/mobilnoe-prilozhenie-i-dizayn-podderzhka-vystavki-pro-brodskogo/"
            imgSrc="/images/682b08d4551152a1ec96f4f2_Frame 175.webp"
            imgSrcSet="/images/682b08d4551152a1ec96f4f2_Frame 175-p-500.webp 500w, /images/682b08d4551152a1ec96f4f2_Frame 175-p-800.webp 800w, /images/682b08d4551152a1ec96f4f2_Frame 175-p-1080.webp 1080w, /images/682b08d4551152a1ec96f4f2_Frame 175.webp 1248w"
          />

          <CaseCard
            chips={['phygital', 'интерфейсы']}
            year="2023"
            title="VK Порталы"
            subtitle="Спроектировали чат-бота для&nbsp;управления спецпроектом"
            description="Проект соцсети приурочен ко&nbsp;Дню России: каждый год на&nbsp;улицах нескольких городов страны устанавливаются большие интерактивные экраны&nbsp;— Порталы, через которые жители могут общаться друг с&nbsp;другом посредством телемоста. Мы с&nbsp;нуля разработали чат-бот и&nbsp;придумали логику его взаимодействия с&nbsp;порталами в&nbsp;9 городах России в&nbsp;10 разных сценариях"
            result={{ label: 'Результат:', value: 'спроектировали 100+ экранов интерфейса за&nbsp;2 недели' }}
            href="/projects/sdelali-chat-bota-i-sproektirovali-100-ekranov-dlya-proekta-vk-portaly/"
            imgSrc="/images/682b092689078f3c00738049_Frame 176.webp"
            imgSrcSet="/images/682b092689078f3c00738049_Frame 176-p-500.webp 500w, /images/682b092689078f3c00738049_Frame 176-p-800.webp 800w, /images/682b092689078f3c00738049_Frame 176-p-1080.webp 1080w, /images/682b092689078f3c00738049_Frame 176.webp 1248w"
          />

        </div>
      </div>
    </>
  )
}
