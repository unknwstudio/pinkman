import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import StatGrid from '@/components/StatGrid/StatGrid'
import CaseCard from '@/components/CaseCard/CaseCard'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Дизайн коммуникаций',
  description: 'Масштабируемый визуальный контент для брендов',
  alternates: {
    canonical: 'https://pinkman.ru/communications-design/',
  },
}

export default function CommunicationsDesignPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Дизайн коммуникаций</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Масштабируемый визуальный контент для&nbsp;брендов</h2></div></Section>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">Дизайн для&nbsp;маркетинга</h2>
            <p className="font-color-dark-gray">KV, баннеры, ресайзы и&nbsp;любые digital-материалы. Работаем по&nbsp;гайдлайнам, быстро адаптируем к&nbsp;разным форматам и&nbsp;собираем большие объёмы графики под&nbsp;кампании и&nbsp;на&nbsp;потоке</p>
          </div>
          <div className="service__picture">
            <img alt="" className="service__img hide-mobile" loading="eager"
              src="/images/682a6b06d7d614e5dbce03ec_dc1.webp" width={2624} height={852} />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682a6b4a315fe0e5d7f437bf_dc1mob.webp"
              srcSet="/images/682a6b4a315fe0e5d7f437bf_dc1mob-p-500.webp 500w, /images/682a6b4a315fe0e5d7f437bf_dc1mob.webp 686w"
              width={686} height={1845} />
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">3D, motion, CGI</h2>
            <p className="font-color-dark-gray">Работаем с&nbsp;большими объемами 3D-графики и&nbsp;сжатыми сроками. Делаем моушен высокого качества для&nbsp;DOOH, naked eye, ТВ и&nbsp;онлайна. Масштабируем продакшен под&nbsp;задачи и&nbsp;каналы</p>
          </div>
          <div className="service__picture">
            <img alt="" className="service__img hide-mobile" loading="eager"
              src="/images/682a6b83b04cabb3d464a3b5_dc2.webp" width={2624} height={852} />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682a6b98292840b5a7ae3c85_dc2mob.webp"
              srcSet="/images/682a6b98292840b5a7ae3c85_dc2mob-p-500.webp 500w, /images/682a6b98292840b5a7ae3c85_dc2mob.webp 692w"
              width={692} height={937} />
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">Брендинг</h2>
            <p className="font-color-dark-gray">Создаём визуальную стратегию бренда: от&nbsp;идеи и&nbsp;логотипа до&nbsp;системы носителей. Прорабатываем айдентику и&nbsp;адаптируем её под&nbsp;цифровую среду, маркетинг и&nbsp;офлайн-коммуникации</p>
          </div>
          <div className="service__picture">
            <img alt="" className="service__img hide-mobile" loading="eager"
              src="/images/682a6bdc3520fbfb6ffab04c_dc3.webp" width={2624} height={852} />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682a6bf4a5ca3597ed9994b6_dc3mob.webp"
              srcSet="/images/682a6bf4a5ca3597ed9994b6_dc3mob-p-500.webp 500w, /images/682a6bf4a5ca3597ed9994b6_dc3mob.webp 689w"
              width={689} height={1977} />
          </div>
        </div>
      </div>

      <div className="service-section">
        <div className="service">
          <div className="service__text">
            <h2 className="font-color-black">VFX и&nbsp;AI-графика</h2>
            <p className="font-color-dark-gray">Делаем вирусные ролики под&nbsp;ключ для&nbsp;соцсетей с&nbsp;визуальными эффектами, AI-графикой и&nbsp;фокусом на&nbsp;охваты</p>
          </div>
          <div className="service__picture">
            <img alt="" className="service__img hide-mobile" loading="eager"
              src="/images/682a6c28876c3a1a4098d33a_dc4.webp" width={2624} height={852} />
            <img alt="" className="service__img hide-desktop" loading="eager" sizes="100vw"
              src="/images/682a6c445f3ba61580a05292_dc4mob.webp"
              srcSet="/images/682a6c445f3ba61580a05292_dc4mob-p-500.webp 500w, /images/682a6c445f3ba61580a05292_dc4mob.webp 686w"
              width={686} height={1490} />
          </div>
        </div>
      </div>

      {/* ── Scale in numbers ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Масштаб в&nbsp;цифрах</h2></div></Section>
      <StatGrid items={[
        { value: '182', label: 'уникальных KV для Газпромбанка', note: '+ 3711 ресайзов, 52 иллюстрации' },
        { value: '75+', label: 'форматов DOOH для ребрендинга Т-Банка', note: '4 ролика naked eye' },
        { value: '100', label: 'моушн-роликов для брендов Яндекс Еды', note: '10 спецпроектов, премия E+ Awards' },
      ]} />

      {/* ── When to come — 5 points in a row ── */}
      <Section><div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Когда обращаться</h2></div></Section>
      <ServicePointRow>
        <ServicePoint tagsTop={['объём']} title="Нужны большие объёмы и&nbsp;высокое качество" description="Регулярный поток визуального контента в&nbsp;едином стиле&nbsp;— с&nbsp;вниманием к&nbsp;деталям, гайдлайнам и&nbsp;целям маркетинга" />
        <ServicePoint tagsTop={['ресурсы']} title="Не&nbsp;хватает ресурсов в&nbsp;дизайн-команде" description="Подключаемся и&nbsp;берём на&nbsp;себя полный цикл производства визуальных материалов" />
        <ServicePoint tagsTop={['система']} title="Нужно упорядочить визуальные коммуникации" description="Создаём дизайн-системы, описываем стандарты, приводим визуал к&nbsp;единой логике" />
        <ServicePoint tagsTop={['форматы']} title="Ищете современные и&nbsp;гибкие решения" description="3D и&nbsp;motion-графика, которую можно быстро адаптировать под&nbsp;разные каналы и&nbsp;форматы" />
        <ServicePoint tagsTop={['охваты']} title="Нужен актуальный контент для&nbsp;соцсетей" description="Видео с&nbsp;AI и&nbsp;VFX&nbsp;— свежие идеи, внимание аудитории и&nbsp;большой охват" />
      </ServicePointRow>

      {/* ── How we work ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Как&nbsp;работаем</h2></div></Section>
      <ProcessSteps steps={[
        { num: '1', title: 'Бриф', description: 'Погружаемся в&nbsp;задачу, цели кампании и&nbsp;гайдлайны бренда', tag: 'старт' },
        { num: '2', title: 'Стратегия', description: 'Определяем визуальную рамку, стиль и&nbsp;форматы для&nbsp;всех каналов', tag: 'рамка' },
        { num: '3', title: 'Продакшен', description: 'Производим контент в&nbsp;рамках гайдлайнов&nbsp;— KV, баннеры, 3D, моушен', tag: 'создание' },
        { num: '4', title: 'Адаптация', description: 'Ресайзим под&nbsp;все форматы и&nbsp;каналы, автоматизируем где возможно', tag: 'форматы' },
        { num: '5', title: 'Сдача', description: 'Итоговые файлы с&nbsp;чистой структурой и&nbsp;понятным неймингом', tag: 'итог' },
      ]} />

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кейсы</h2></div></Section>
      <div className="service-cases-section">
        <div className="service-grid">

          <CaseCard
            chips={['банки', 'дизайн коммуникаций']}
            year="2023-н.в."
            title="Газпромбанк"
            subtitle="1,5 года помогаем поддерживать дизайн коммуникаций банка"
            description="Мы предоставили квалифицированных дизайнеров для&nbsp;работы в&nbsp;рамках существующих дизайн-процессов банка, обеспечили быструю и&nbsp;качественную интеграцию дизайнеров в&nbsp;инхаус-команду банка, поддержали направление перформанс-маркетинга в&nbsp;создании креативов и&nbsp;сократили time-to-market"
            result={{ label: 'Результат:', value: 'сделали 182 уникальных кей вижуала, 3711 ресайзов, 52 иллюстрации, 34 анимации' }}
            href="/projects/1-5-goda-pomogaem-podderzhivat-dizayn-kommunikaciy-gazprombanka-na-autstaffe/"
            imgSrc="/images/682aee8146f1e27a3163a9ef_Frame 174.webp"
            imgSrcSet="/images/682aee8146f1e27a3163a9ef_Frame 174-p-500.webp 500w, /images/682aee8146f1e27a3163a9ef_Frame 174-p-800.webp 800w, /images/682aee8146f1e27a3163a9ef_Frame 174-p-1080.webp 1080w, /images/682aee8146f1e27a3163a9ef_Frame 174.webp 1248w"
          />

          <CaseCard
            chips={['банки', 'моушен']}
            year="2024"
            title="Т-Банк"
            subtitle="Сделали моушен для&nbsp;рекламной кампании ребрендинга банка"
            description="Взяли горящую задачу и&nbsp;в&nbsp;сжатые сроки сделали видео для&nbsp;naked eye и&nbsp;десятки форматов DOOH. Ускорили работу в&nbsp;2,5 раза за&nbsp;счет автоматизации ресайзов. Помогли запустить масштабную кампанию по&nbsp;всей России с&nbsp;high-end моушеном"
            result={{ label: 'Результат:', value: '4 ролика для&nbsp;naked eye, 75+ ресайзов для&nbsp;DOOH' }}
            href="/projects/sdelali-moushen-dlya-rebrendinga-t-banka/"
            imgSrc="/images/682aef0460393fd7bfbd9ca6_Frame 175.webp"
            imgSrcSet="/images/682aef0460393fd7bfbd9ca6_Frame 175-p-500.webp 500w, /images/682aef0460393fd7bfbd9ca6_Frame 175-p-800.webp 800w, /images/682aef0460393fd7bfbd9ca6_Frame 175-p-1080.webp 1080w, /images/682aef0460393fd7bfbd9ca6_Frame 175.webp 1248w"
          />

          <CaseCard
            chips={['фудтех', 'дизайн коммуникаций']}
            year="2023-н.в."
            title="Яндекс Еда"
            subtitle="Больше года работаем на&nbsp;дизайн-поддержке фудтех-брендов Яндекса"
            description="Работаем с&nbsp;ценовой и&nbsp;имиджевой коммуникацией. Делаем буквально всё, что&nbsp;приходит в&nbsp;голову, когда думаешь про&nbsp;коммуникационный дизайн: KV, 3D, моушен, гайдлайны, лендинги, POSM, спецпроекты"
            result={{ label: 'Результат:', value: '100 моушн-роликов, 10 спецпроектов, сотни баннеров и&nbsp;3D для&nbsp;5 разных брендов, премия E+ Awards за&nbsp;лучший партнёрский спецпроект' }}
            imgSrc="/images/682aefc9b8d3564d1df58dcd_Frame 176.webp"
            imgSrcSet="/images/682aefc9b8d3564d1df58dcd_Frame 176-p-500.webp 500w, /images/682aefc9b8d3564d1df58dcd_Frame 176-p-800.webp 800w, /images/682aefc9b8d3564d1df58dcd_Frame 176-p-1080.webp 1080w, /images/682aefc9b8d3564d1df58dcd_Frame 176.webp 1248w"
          />

        </div>
      </div>

      <ContactCard intro="Обсудим проект?" role="Аккаунт&#x2011;директор Юрий Григоренко&nbsp;— расскажет про&nbsp;состав команды, сроки и&nbsp;стоимость под&nbsp;ваш проект." />
    </>
  )
}
