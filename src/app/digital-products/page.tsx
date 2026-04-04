import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ServiceCasesGrid from '@/components/ServiceCasesGrid/ServiceCasesGrid'

export const metadata: Metadata = {
  title: 'Цифровые продукты',
  description: 'Продуктовый дизайн, про который хорошо подумали',
  alternates: {
    canonical: 'https://pinkman.ru/digital-products/',
  },
}

export default function DigitalProductsPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Цифровые продукты</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Продуктовый дизайн, про&nbsp;который хорошо подумали</h2></div></Section>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">UX-исследования</h2>
            <p className="font-color-dark-gray">Понимаем, как&nbsp;пользователи взаимодействуют с&nbsp;продуктом. Интервью, юзабилити-тесты, карты сценариев&nbsp;— находим проблемы и&nbsp;точки роста, прежде чем начинать дизайн</p>
          </div>
          <div className="service__picture">
            <img alt="" className="service__img hide-mobile" loading="eager"
              src="/images/682a60386fd9bb45b8360898_dp1 (1).webp" width={2624} height={852} />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682a605d92514d91b4f789c1_dp1mob.webp"
              srcSet="/images/682a605d92514d91b4f789c1_dp1mob-p-500.webp 500w, /images/682a605d92514d91b4f789c1_dp1mob.webp 688w"
              width={688} height={2004} />
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">Дизайн MVP и&nbsp;продуктов</h2>
            <p className="font-color-dark-gray">Проектируем логику продукта: от&nbsp;общей структуры до&nbsp;мельчайших сценариев. Учитываем бизнес-цели, поведение пользователей и&nbsp;ограничения разработки</p>
          </div>
          <div className="service__picture">
            <img alt="" className="service__img hide-mobile" loading="eager"
              src="/images/682a6089a4b3f53ee86c0baf_dp2.webp" width={2624} height={852} />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682a609b00d93f05c1cb5467_dp2mob.webp"
              srcSet="/images/682a609b00d93f05c1cb5467_dp2mob-p-500.webp 500w, /images/682a609b00d93f05c1cb5467_dp2mob.webp 686w"
              width={686} height={1540} />
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">Интерфейсы и&nbsp;веб-сервисы</h2>
            <p className="font-color-dark-gray">Делаем UI для&nbsp;сложных систем: от&nbsp;личных кабинетов до&nbsp;внутренних платформ и&nbsp;дашбордов. Прорабатываем каждый экран, чтобы было понятно, удобно и&nbsp;быстро</p>
          </div>
          <div className="service__picture">
            <img alt="" className="service__img hide-mobile" loading="eager"
              src="/images/682a60d1413f6b916e3cf518_dp3.webp" width={2624} height={824} />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682a60e3379497ff5729c636_dp3mob.webp"
              srcSet="/images/682a60e3379497ff5729c636_dp3mob-p-500.webp 500w, /images/682a60e3379497ff5729c636_dp3mob.webp 686w"
              width={686} height={868} />
          </div>
        </div>
      </div>

      {/* ── When to call us — horizontal row ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Когда обращаться</h2></div></Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['команда']}
          title="Нет своей UX-команды"
          description="Подключаемся как&nbsp;внешняя продуктовая команда: проектируем сценарии, делаем интерфейсы, помогаем запускать фичи — от&nbsp;аналитики до&nbsp;курирования разработки"
        />
        <ServicePoint
          tagsTop={['данные']}
          title="Мало данных для&nbsp;решений"
          description="Интервью, поведенческий анализ, тесты&nbsp;— собираем инсайты, которые помогают принимать продуктовые решения на&nbsp;основе метрик и&nbsp;исследований"
        />
        <ServicePoint
          tagsTop={['запуск']}
          title="Нужен MVP"
          description="Быстро проверим гипотезу без&nbsp;потери в&nbsp;качестве. Спроектируем логику, отрисуем интерфейсы, сопроводим на&nbsp;этапе разработки"
        />
      </ServicePointRow>

      {/* ── How we work — process steps ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Как&nbsp;работаем</h2></div></Section>
      <ProcessSteps steps={[
        {
          num: '1',
          title: 'Погружение',
          description: 'Изучаем продукт, цели бизнеса и&nbsp;пользователей. Интервью, метрики, конкурентный анализ',
          tag: 'старт',
        },
        {
          num: '2',
          title: 'Исследование',
          description: 'Юзабилити-тесты, карты сценариев&nbsp;— находим проблемы и&nbsp;точки роста до&nbsp;начала дизайна',
          tag: 'данные',
        },
        {
          num: '3',
          title: 'Проектирование',
          description: 'Логика продукта, структура, сценарии, wireframes и&nbsp;кликабельные прототипы',
          tag: 'дизайн',
        },
        {
          num: '4',
          title: 'Запуск',
          description: 'Финальный UI, дизайн-система, сопровождение разработки и&nbsp;QA после&nbsp;релиза',
          tag: 'итог',
        },
      ]} />

      {/* ── Extra detail ── */}
      <ServiceGrid>
        <ServicePoint
          title="Встраиваемся в&nbsp;команду"
          tags={['agile', 'спринты', 'дизайн-поддержка']}
          description="Работаем по&nbsp;спринтам, берем задачи в&nbsp;бэклог, участвуем в&nbsp;грумингах. Ни&nbsp;один процесс не&nbsp;прерывается"
        />
        <ServicePoint
          title="Дизайн-система в&nbsp;комплекте"
          tags={['компоненты', 'токены', 'документация']}
          description="По&nbsp;итогам проекта передаем структурированную дизайн-систему с&nbsp;компонентами, токенами и&nbsp;документацией для&nbsp;разработчиков"
          animDelay={2}
        />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кейсы</h2></div></Section>
      <ServiceCasesGrid cases={[
        {
          title: 'FUN&SUN',
          desc: '2 года улучшаем сайт и\u00a0приложение туроператора',
          year: '2024',
          cats: ['Интерфейсы', 'Исследования', 'Веб-дизайн'],
          img: '/images/680b76236866e23af5ff4c24_funsun.webp',
          imgSrcSet: '/images/680b76236866e23af5ff4c24_funsun-p-500.webp 500w, /images/680b76236866e23af5ff4c24_funsun-p-800.webp 800w, /images/680b76236866e23af5ff4c24_funsun-p-1080.webp 1080w, /images/680b76236866e23af5ff4c24_funsun.webp 1248w',
          href: '/projects/2-goda-uluchshaem-sayt-i-prilozhenie-turoperatora-fun-sun',
        },
        {
          title: 'X5 Tech',
          desc: '5 лет работаем над\u00a0внутренними продуктами крупного ритейлера',
          year: '2025',
          cats: ['Интерфейсы', 'Исследования'],
          img: '/images/682a62c6379497ff572ac960_Frame 175.webp',
          imgSrcSet: '/images/682a62c6379497ff572ac960_Frame 175-p-500.webp 500w, /images/682a62c6379497ff572ac960_Frame 175-p-800.webp 800w, /images/682a62c6379497ff572ac960_Frame 175-p-1080.webp 1080w, /images/682a62c6379497ff572ac960_Frame 175.webp 1248w',
        },
        {
          title: 'Уралсиб',
          desc: 'Заложили дизайн-основу корпоративного портала банка',
          year: '2022',
          cats: ['Интерфейсы', 'Исследования'],
          img: '/images/682a64342e614eeb7f9c12b9_Frame 176.webp',
          imgSrcSet: '/images/682a64342e614eeb7f9c12b9_Frame 176-p-500.webp 500w, /images/682a64342e614eeb7f9c12b9_Frame 176-p-800.webp 800w, /images/682a64342e614eeb7f9c12b9_Frame 176-p-1080.webp 1080w, /images/682a64342e614eeb7f9c12b9_Frame 176.webp 1248w',
        },
      ]} />
    </>
  )
}
