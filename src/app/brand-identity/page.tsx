import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'
import CaseCard from '@/components/CaseCard/CaseCard'

export const metadata: Metadata = {
  title: 'Брендинг и айдентика',
  description: 'Делаем стратегию компании ясной, выстраиваем вокруг неё бренд-платформу, айдентику и реальные материалы.',
  alternates: {
    canonical: 'https://pinkman.ru/brand-identity/',
  },
}

export default function BrandIdentityPage() {
  return (
    <>
      <Section><div className="text-big-wrapper"><p className="text-big">Брендинг и&nbsp;айдентика</p></div></Section>

      <Section><div className="text-h2-wrapper"><h2>Делаем стратегию компании ясной, выстраиваем вокруг неё бренд&#x2011;платформу, айдентику и&nbsp;реальные материалы. Создаём не&nbsp;брендбук в&nbsp;стол, а&nbsp;систему, которая влияет на&nbsp;продажи, найм и&nbsp;инвестиции.</h2></div></Section>

      <Section>
        <p className="text-regular font-color-dark-gray" style={{ maxWidth: '720px' }}><strong>В&nbsp;партнёрстве с&nbsp;лучшими креативными директорами, стратегами, командами индустрии</strong></p>
      </Section>

      {/* ── Какие проблемы мы решаем ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Какие проблемы мы&nbsp;решаем</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Видение живёт только в&nbsp;голове основателя"
          description="Команда, клиенты и&nbsp;инвесторы считывают разное"
        />
        <ServicePoint
          title="Бренд не&nbsp;соответствует уровню бизнеса"
          description="Компания выросла, а&nbsp;айдентика осталась на&nbsp;уровне первого логотипа"
          animDelay={2}
        />
        <ServicePoint
          title="Брендбук есть, но&nbsp;не&nbsp;работает"
          description="Дизайнеры не&nbsp;понимают логику масштабирования, менеджеры не&nbsp;могут объяснить, чем вы&nbsp;отличаетесь от&nbsp;конкурентов"
          animDelay={3}
        />
        <ServicePoint
          title="Нет внятного позиционирования"
          description="Вы&nbsp;конкурируете только ценой, упуская смыслы"
          animDelay={4}
        />
        <ServicePoint
          title="Каждый носитель делается с&nbsp;нуля"
          description="Нет визуальной системы&nbsp;&mdash; большие расходы на&nbsp;производство дизайн&#x2011;материалов"
        />
        <ServicePoint
          title="Сложно привлекать сильных кандидатов"
          description="Бренд не&nbsp;транслирует амбиции и&nbsp;направление компании"
          animDelay={2}
        />
      </ServiceGrid>

      {/* ── Что мы предлагаем ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;предлагаем</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Комплексную разработку бренда: от&nbsp;стратегии до&nbsp;работающей визуальной системы, которую команда применяет самостоятельно.</p>
        <p className="font-color-dark-gray" style={{ marginTop: 'var(--16px)' }}>Мы&nbsp;начинаем работу не&nbsp;с&nbsp;брендбука. Для начала запускаем самые востребованные носители&nbsp;&mdash; презентацию для&nbsp;инвесторов, сайт, носители для&nbsp;рекламной кампании. Бренд проверяется в&nbsp;деле. Систему фиксируем после&nbsp;&mdash; на&nbsp;основе того, что действительно сработало, для&nbsp;создания функционального брендбука.</p>
        <p className="font-color-dark-gray" style={{ marginTop: 'var(--16px)' }}>Исследуем за&nbsp;пределами вашей категории: смежные индустрии, культурный контекст, неочевидные референсы. Находим позиционирование, которое выделяет, а&nbsp;не&nbsp;копирует конкурентов.</p>
      </Section>

      {/* ── Выделенная команда ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Выделенная команда на&nbsp;проекте</h2></div></Section>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['стратегия']}
          title="Стратег"
          description="Интервью с&nbsp;ключевой командой, исследование, бренд&#x2011;платформа&nbsp;&mdash; видение, миссии, ценности, TOV"
        />
        <ServicePoint
          tagsTop={['концепция']}
          title="Креативный директор"
          description="Концепция айдентики, которая отражает направление компании"
        />
        <ServicePoint
          tagsTop={['визуал']}
          title="Арт&#x2011;директор"
          description="Визуальный контроль от&nbsp;первого артефакта до&nbsp;финальных носителей"
        />
      </ServicePointRow>
      <ServiceGrid spaced={false}>
        <ServicePoint
          title="Мультидисциплинарные дизайнеры"
          tags={['статика', 'motion', 'AI&#x2011;шаблоны']}
          description="Для быстрого масштабирования на&nbsp;все каналы коммуникации"
        />
        <ServicePoint
          title="Копирайтер"
          tags={['TOV', 'ключевые сообщения']}
          description="TOV, ключевые сообщения, тексты для&nbsp;носителей"
          animDelay={2}
        />
      </ServiceGrid>

      {/* ── Кому подходит ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Кому подходит</h2></div></Section>
      <Section>
        <p className="font-color-dark-gray">Вы&nbsp;строите или перезапускаете бренд и&nbsp;хотите, чтобы он&nbsp;отражал реальную амбицию бизнеса, а&nbsp;не&nbsp;просто &laquo;выглядел красиво&raquo;. Работаете на&nbsp;конкурентном рынке, где нужно выделяться смыслом, а&nbsp;не&nbsp;только продуктом и&nbsp;ценой.</p>
      </Section>
      <ServiceGrid>
        <ServicePoint
          title="Основателям и&nbsp;CEO"
          tags={['рост', 'трансформация']}
          description="На&nbsp;этапе роста или трансформации бизнеса"
        />
        <ServicePoint
          title="Директорам по&nbsp;маркетингу"
          tags={['система', 'не&nbsp;разовый дизайн']}
          description="Кому нужна система, а&nbsp;не&nbsp;разовый дизайн"
          animDelay={2}
        />
        <ServicePoint
          title="Продуктовым командам"
          tags={['новый продукт', 'новый рынок']}
          description="Выводящим новый продукт или направление на&nbsp;рынок"
          animDelay={3}
        />
        <ServicePoint
          title="Компаниям перед раундом"
          tags={['инвестиции', 'ребрендинг']}
          description="Перед раундом инвестиций, выходом на&nbsp;новый рынок или ребрендингом"
          animDelay={4}
        />
      </ServiceGrid>
      <Section>
        <p className="font-color-dark-gray">Важно получить бренд, который работает на&nbsp;привлечение клиентов, инвесторов и&nbsp;талантов&nbsp;&mdash; без&nbsp;постоянных усилий на&nbsp;объяснение &laquo;кто мы&nbsp;и&nbsp;зачем&raquo;.</p>
      </Section>

      {/* ── Что вы получите ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;вы&nbsp;получите в&nbsp;результате</h2></div></Section>
      <ServiceGrid>
        <ServicePoint
          title="Бренд&#x2011;платформа"
          tags={['видение', 'миссия', 'ценности', 'TOV']}
          description="Основа для&nbsp;всех решений в&nbsp;компании, не&nbsp;только маркетинга"
        />
        <ServicePoint
          title="Концепция айдентики"
          tags={['визуальный язык']}
          description="Построенная на&nbsp;стратегии: передаёт направление компании до&nbsp;прочтения текста"
          animDelay={2}
        />
        <ServicePoint
          title="Реальные материалы"
          tags={['презентация', 'сайт', 'рекламные носители']}
          description="Презентация для&nbsp;инвесторов, сайт, носители для&nbsp;запуска рекламных кампаний&nbsp;&mdash; проверенные на&nbsp;реальной аудитории"
          animDelay={3}
        />
        <ServicePoint
          title="Дизайн&#x2011;система с&nbsp;AI&#x2011;пайплайнами"
          tags={['motion', 'шаблоны', 'принципы']}
          description="Команда масштабирует без&nbsp;вас"
          animDelay={4}
        />
        <ServicePoint
          title="Единый бренд во&nbsp;всех точках контакта"
          tags={['сайт', 'найм', 'презентация', 'офис']}
          description="От&nbsp;сайта до&nbsp;найма, от&nbsp;презентации до&nbsp;офиса"
        />
      </ServiceGrid>

      {/* ── Как мы работаем ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Что&nbsp;мы&nbsp;делаем и&nbsp;как</h2></div></Section>
      <ProcessSteps compact steps={[
        { num: '1', title: 'Интервью', description: 'Проводим интервью с&nbsp;ключевой командой&nbsp;&mdash; фиксируем видение, ценности, амбиции', tag: 'старт' },
        { num: '2', title: 'Исследование', description: 'Исследуем рынок, конкурентов и&nbsp;смежные индустрии&nbsp;&mdash; ищем пространство для&nbsp;позиционирования', tag: 'аналитика' },
        { num: '3', title: 'Бренд&#x2011;платформа', description: 'Формируем видение, миссии, ценности, TOV, ключевые сообщения', tag: 'стратегия' },
        { num: '4', title: 'Айдентика', description: 'Разрабатываем концепцию айдентики на&nbsp;основе стратегии', tag: 'дизайн' },
      ]} />
      <ProcessSteps steps={[
        { num: '5', title: 'Запуск носителей', description: 'Проектируем и&nbsp;запускаем презентацию, сайт, материалы для&nbsp;рекламных кампаний', tag: 'продакшен' },
        { num: '6', title: 'Тестирование', description: 'Тестируем на&nbsp;реальной аудитории, собираем обратную связь', tag: 'проверка' },
        { num: '7', title: 'Система', description: 'Фиксируем дизайн&#x2011;принципы из&nbsp;того, что сработало: гайдлайны, motion, AI&#x2011;шаблоны', tag: 'система' },
        { num: '8', title: 'Передача', description: 'Передаём систему команде&nbsp;&mdash; с&nbsp;обучением и&nbsp;пайплайнами для&nbsp;самостоятельной работы', tag: 'итог' },
      ]} />

      {/* ── Кейсы ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Кейсы</h2></div></Section>

      <div className="service-cases-section">
        <div className="service-grid">
          <CaseCard
            chips={['Брендинг', 'Карьерный бренд']}
            year="2026"
            title="СИБУР"
            subtitle="Зонтичный карьерный бренд для&nbsp;нефтехимической компании"
            description="Разработка зонтичного бренда СИБУР для&nbsp;упаковки программ карьерной траектории для&nbsp;СУЗов и&nbsp;ВУЗов"
            href="/projects/sibur-kariernyy-brend"
            imgSrc="/images/_cases/sibur/sibur-cover.webp"
            imgAlt="СИБУР"
          />
          <CaseCard
            chips={['Брендинг', 'Сайт', 'Приложение']}
            year="2025"
            title="Норма"
            subtitle="Брендинг, мобильное приложение и&nbsp;сайт для&nbsp;сети химчисток"
            description="Разработали брендинг, мобильное приложение и&nbsp;сайт для&nbsp;сети химчисток &laquo;Норма&raquo;"
            href="/projects/norma"
            imgSrc="/images/_cases/norma/norma-cover.webp"
            imgAlt="Норма"
          />
          <CaseCard
            chips={['Брендинг', 'Айдентика', 'Мерч']}
            year="2026"
            title="Плавательный"
            subtitle="Айдентика и&nbsp;мерч для&nbsp;СТМ бренда &laquo;Плавательный&raquo;"
            imgSrc="/images/_cases/brand-identity/plavatelniy-cover.jpg"
            imgAlt="Плавательный"
            noAvif
          />
          <CaseCard
            chips={['Брендинг', 'Айдентика', 'Финансы']}
            year="2025"
            title="Сбербанк страхование жизни"
            subtitle="Брендинг и&nbsp;айдентика для&nbsp;Сбербанка страхование жизни"
            imgSrc="/images/_cases/brand-identity/sbsg-cover.jpg"
            imgAlt="Сбербанк страхование жизни"
            noAvif
          />
          <CaseCard
            chips={['Айдентика', 'Премиум']}
            year="2025"
            title="Bontel"
            subtitle="Премиальная айдентика для&nbsp;утилитарного предмета безопасности"
            description="Превратили утилитарный предмет безопасности в&nbsp;стильный элемент интерьера. Определили миссию и&nbsp;tone&#x2011;of&#x2011;voice бренда: &laquo;Спокойствие вместо хаоса&raquo;."
            imgSrc="/images/_cases/brand-identity/bontel-cover.jpg"
            imgAlt="Bontel"
            noAvif
          />
          <CaseCard
            chips={['Айдентика', 'Мерч', 'Одежда']}
            year="2025"
            title="Ozon Univer"
            subtitle="Айдентика и&nbsp;мерч Ozon&nbsp;Univer. Дизайн коллекции одежды и&nbsp;аксессуаров"
            description="Концепция &laquo;Комфортного роста&raquo;: природные мотивы создают уютную среду для&nbsp;учебы и&nbsp;развития навыков."
            imgSrc="/images/_cases/brand-identity/ozon-cover.jpg"
            imgAlt="Ozon Univer"
            noAvif
          />
          <CaseCard
            chips={['Брендинг', 'Мероприятия', 'Финансы']}
            year="2025"
            title="ПСБ"
            subtitle="Брендинг и&nbsp;фирменный стиль мероприятий для&nbsp;банка ПСБ"
            imgSrc="/images/_cases/brand-identity/psb-cover.jpg"
            imgAlt="ПСБ"
            noAvif
          />
        </div>
      </div>

      <ContactCard intro="Обсудим ваш бренд?" />
    </>
  )
}
