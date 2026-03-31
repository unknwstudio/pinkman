import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ContactCard from '@/components/ContactCard/ContactCard'
import CaseCard from '@/components/CaseCard/CaseCard'

export const metadata: Metadata = {
  title: 'Аутсорс мультимедиа-команды',
  description: 'Встраиваемся в ваш проект уже завтра. CGI, motion, UI, AI-контент — в срок, в бюджет, без потери смысла.',
  alternates: {
    canonical: 'https://pinkman.ru/outsource-multimedia/',
  },
}

export default function OutsourceMultimediaPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Аутсорс мультимедиа-команды</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Встраиваемся в&nbsp;ваш проект уже&nbsp;завтра. CGI, motion, UI, AI-контент&nbsp;— в&nbsp;срок, в&nbsp;бюджет, без&nbsp;потери смысла.</h2></div></Section>

      <Section>
        <div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Нет времени и&nbsp;проверенных подрядчиков</h2></div>
        <p className="font-color-dark-gray">Мультимедиа-студии рождают идеи внутри, реализация&nbsp;— снаружи. Сильные подрядчики заняты на&nbsp;месяц вперёд, сборная из&nbsp;фрилансеров&nbsp;— риск. А&nbsp;старт нужен уже&nbsp;завтра.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Нет времени на&nbsp;раскачку" tags={['жёсткие дедлайны','старт завтра']} description="Проект должен идти с&nbsp;первого дня&nbsp;— сплачивать команду некогда." />
        <ServicePoint title="Высокие репутационные риски" tags={['топовые клиенты','нельзя облажаться']} description="Работаете с&nbsp;топовыми клиентами. Ошибка подрядчика&nbsp;— ваша репутация перед заказчиком." />
      </ServiceGrid>

      <Section>
        <div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Аутсорс вовлечённой команды</h2></div>
        <p className="font-color-dark-gray">Встраиваемся как&nbsp;внутренний юнит&nbsp;— с&nbsp;визуальным контролем и&nbsp;производственной дисциплиной. Сетапимся под&nbsp;проект, стартуем завтра.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint title="Продюсер" tags={['статусы','сроки','координация']} description="Контролирует ход работ, ведёт коммуникацию. Вы&nbsp;всегда знаете, что&nbsp;происходит." />
        <ServicePoint title="Арт-директор" tags={['визуальная рамка','визуальный язык']} description="Держит визуальный язык от&nbsp;первого брифа до&nbsp;финальной сдачи. Синхронизируется с&nbsp;архитектурой." />
        <ServicePoint title="Супервайзер" tags={['технические спеки','форматы']} description="Разрешения, кодеки, форматы&nbsp;— всё под&nbsp;спецификации экранов. В&nbsp;день монтажа ничего не&nbsp;ломается." />
        <ServicePoint title="Мультидисциплинарные дизайнеры" tags={['3D','UX/UI','моушн','AI']} description="Всё в&nbsp;одной команде. Состав&nbsp;— под&nbsp;специфику и&nbsp;масштаб проекта." />
      </ServiceGrid>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint title="Сдача в&nbsp;срок и&nbsp;в&nbsp;бюджет" tags={['качество','сроки','бюджет']} description="Высокий уровень, выдержанные сроки, бюджет без&nbsp;сюрпризов. Результат, который работает в&nbsp;индустрии." />
        <ServicePoint title="Репутационные риски сняты" tags={['перед клиентом','без&nbsp;сюрпризов']} description="Берём ответственность за&nbsp;результат&nbsp;— ваш клиент не&nbsp;пострадает. В&nbsp;день монтажа ничего не&nbsp;ломается." />
        <ServicePoint title="Мультидисциплинарный результат" tags={['3D','motion','UI','AI']} description="3D, motion, UI, AI&nbsp;— из&nbsp;одних рук, в&nbsp;единой эстетике." />
        <ServicePoint title="80+ часов освобождены" tags={['эффективность']} description="Не&nbsp;тратите время на&nbsp;поиск подрядчиков, фиксацию договорённостей и&nbsp;координацию с&nbsp;каждым." />
      </ServiceGrid>

      <Section>
        <div className="text-h1-wrapper" style={{marginBottom:'1rem'}}><h2 className="h1">Что&nbsp;мы делаем и&nbsp;как</h2></div>
        <div className="list-wrapper padding-32px"><div className="list">
          {[
            'Встраиваемся в&nbsp;структуру проекта',
            'Синхронизируемся с&nbsp;архитектурой, ограничениями и&nbsp;дедлайнами',
            'Разрабатываем единую визуальную систему для&nbsp;всех точек контакта',
            'Производим 3D, моушн, UI, AI-контент',
            'Еженедельные синки, структурированная коммуникация',
            'Общее облако с&nbsp;чистой структурой и&nbsp;неймингом файлов',
            'Сопровождаем до&nbsp;финальной сдачи',
          ].map((s, i) => (
            <div key={i} className="list-item-wrapper">
              <div className="bullet-wrapper-left"><h3 dangerouslySetInnerHTML={{__html:`${i+1}.&nbsp;${s}`}} /></div>
            </div>
          ))}
        </div></div>
      </Section>

      <Section><div className="text-h1-wrapper"><h2 className="h1">Кейсы</h2></div></Section>
      <div className="service-cases-section">
        <div className="service-grid">

          <CaseCard
            chips={['AR', 'инсталляция', 'музей']}
            year="2025"
            title="Сбер&nbsp;× Пушкинский музей"
            subtitle="AR-инсталляция «Франс Снейдерс и&nbsp;фламандский натюрморт XVII&nbsp;века»"
            description="Спроектировали приложение и&nbsp;AR-активности для&nbsp;выставки. Оживили картины с&nbsp;помощью AR, создали масштабную AR-инсталляцию для&nbsp;входа в&nbsp;музей."
            result={{ label: 'Результат:', value: 'запустили проект за&nbsp;1&nbsp;месяц вместе с&nbsp;разработкой' }}
            href="/projects/sproektirovali-prilozhenie-i-ar-aktivnosti-dlya-vystavki-sneydersa-v-pushkinskom-muzee/"
            imgSrc="/images/682b086c2526a109f26f4986_Frame 174.webp"
            imgSrcSet="/images/682b086c2526a109f26f4986_Frame 174-p-500.webp 500w, /images/682b086c2526a109f26f4986_Frame 174-p-800.webp 800w, /images/682b086c2526a109f26f4986_Frame 174-p-1080.webp 1080w, /images/682b086c2526a109f26f4986_Frame 174.webp 1248w"
            imgAlt="Сбер × Пушкинский музей"
          />

          <CaseCard
            chips={['шоу-контент', 'графика сцены']}
            year="2026"
            title="The Game Awards"
            subtitle="Шоу-контент и&nbsp;графика сцены для&nbsp;крупнейшей игровой премии"
          />

          <CaseCard
            chips={['инсталляции', 'expo']}
            year="2026"
            title="The World Health Expo, Дубай"
            subtitle="Контент для&nbsp;инсталляций международной выставки здоровья"
          />

          <CaseCard
            chips={['инсталляции', 'открытие']}
            year="2025"
            title="Открытие Пермской галереи"
            subtitle="Контент для&nbsp;инсталляций к&nbsp;открытию галереи"
          />

          <CaseCard
            chips={['интерактивная выставка']}
            year="2025"
            title="Музей «Страна Побед»"
            subtitle="Контент для&nbsp;интерактивной выставки"
          />

          <CaseCard
            chips={['3D-мэппинг', 'motion', 'концерт']}
            year="2025"
            title="Pinkman&nbsp;× Сила света"
            subtitle="Center of&nbsp;Islamic Civilization, 3D-мэппинг для&nbsp;«Манжерок», 180+ минут видео для&nbsp;концерта ANNA ASTI"
          />

        </div>
      </div>

      <ContactCard
        intro="Обсудим проект?"
        role="Аккаунт-директор Юрий Григоренко&nbsp;— расскажет про&nbsp;состав команды, сроки и&nbsp;стоимость под&nbsp;ваш проект."
      />
    </>
  )
}
