import type { Metadata } from 'next'
import Section from '@/components/Section/Section'
import ServiceGrid from '@/components/ServiceGrid/ServiceGrid'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import StatGrid from '@/components/StatGrid/StatGrid'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import ContactCard from '@/components/ContactCard/ContactCard'

export const metadata: Metadata = {
  title: 'Кейс — разработка сайта Pinkman',
  description: 'Сайт топовой дизайн-студии теперь обновляет нейронка — легко, без разработчиков.',
  alternates: {
    canonical: 'https://pinkman.ru/case-pinkman-site/',
  },
}

export default function CasePinkmanSitePage() {
  return (
    <>
      {/* ── Hero ── */}
      <Section>
        <div style={{ marginBottom: 'var(--8px)' }}>
          <p className="text-small is__chip">Кейс&nbsp;&mdash; разработка сайта</p>
        </div>
        <div className="text-big-wrapper">
          <p className="text-big">Сайт топовой дизайн&#x2011;студии теперь обновляет нейронка&nbsp;&mdash; легко, без&nbsp;разработчиков</p>
        </div>
      </Section>

      <Section><div className="text-h2-wrapper"><h2>Перенесли сайт с&nbsp;Webflow на&nbsp;собственное решение с&nbsp;нейронками&nbsp;&mdash; теперь любой из&nbsp;команды может вносить изменения в&nbsp;прод за&nbsp;несколько минут, без&nbsp;ожидания разработчиков и&nbsp;лишних костов для&nbsp;новых блоков и&nbsp;страниц.</h2></div></Section>

      <Section>
        <p className="text-regular font-color-dark-gray"><a href="https://pinkman.ru" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>pinkman.ru</a></p>
      </Section>

      {/* ── Результат ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">Результат</h2></div></Section>
      <StatGrid items={[
        { value: '~7 дней', label: 'полный перенос и отладка сайта' },
        { value: '0 мин', label: 'ожидание разработчика для любых правок' },
        { value: '6+', label: 'человек обновляют сайт самостоятельно' },
        { value: '4 дня → мин', label: 'публикация кейса с новыми блоками' },
      ]} />

      {/* ── Проблема ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}><h2 className="h1">Проблема</h2></div>
        <p className="font-color-dark-gray">Сайт студии работал на&nbsp;Webflow&nbsp;&mdash; популярной зарубежной платформе. После ряда ограничений сайт перестал открываться у&nbsp;российской аудитории. Основной канал коммуникации с&nbsp;клиентами работал через раз, форма обратной связи&nbsp;&mdash; нестабильно.</p>
        <p className="font-color-dark-gray" style={{ marginTop: 'var(--16px)' }}>Перенос на&nbsp;новый конструктор с&nbsp;кастомизацией требовал больших денежных и, самое важное, временных затрат&nbsp;&mdash; около полутора месяцев с&nbsp;учётом рисков и&nbsp;технических сложностей. А&nbsp;сайт должен работать и&nbsp;корректно открываться уже сейчас.</p>
        <p className="font-color-dark-gray" style={{ marginTop: 'var(--16px)' }}>Параллельно существовала операционная боль&nbsp;&mdash; и&nbsp;у&nbsp;неё было два уровня:</p>
      </Section>

      <ServicePointRow>
        <ServicePoint
          tagsTop={['мелкие правки']}
          title="Часы ожидания"
          description="Поменять ссылку, текст или картинку технически было возможно через встроенную админку&nbsp;&mdash; но&nbsp;интерфейс был ориентирован на&nbsp;разработчиков. На&nbsp;практике быстро это умели делать лишь несколько человек, и&nbsp;любая мелочь превращалась в&nbsp;задачу с&nbsp;очередью."
        />
        <ServicePoint
          tagsTop={['структурные изменения']}
          title="До&nbsp;4 дней"
          description="Если нужно было изменить логику страницы или добавить нестандартный блок&nbsp;&mdash; сначала маркетолог формировал задачу, дизайнер отрисовывал макет, потом разработчик верстал. Опубликовать кейс с&nbsp;изменёнными блоками раньше чем через 4&nbsp;дня было невозможно."
        />
        <ServicePoint variant="default" title="" description="" />
      </ServicePointRow>

      {/* ── До и после ── */}
      <Section><div className="text-h1-wrapper"><h2 className="h1">До&nbsp;и&nbsp;после</h2></div></Section>
      <ServicePointRow>
        <ServicePoint
          tagsTop={['было']}
          title="Как было"
          description="Сайт не&nbsp;открывается в&nbsp;России. Мелкая правка&nbsp;&mdash; только через нескольких человек с&nbsp;очередью. Новый блок&nbsp;&mdash; ждать дизайнера и&nbsp;разработчика. Публикация кейса с&nbsp;новыми блоками: до&nbsp;4&nbsp;дней."
        />
        <ServicePoint
          tagsTop={['стало']}
          title="Как стало"
          description="Сайт работает для&nbsp;всей российской аудитории. Любую правку делает любой сотрудник с&nbsp;доступом. Новый блок&nbsp;&mdash; только через запрос в&nbsp;чате нейронки. Публикация кейса: минуты."
        />
        <ServicePoint variant="default" title="" description="" />
      </ServicePointRow>

      {/* ── Решение ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}><h2 className="h1">Решение</h2></div>
        <p className="font-color-dark-gray">Мы&nbsp;перенесли сайт на&nbsp;собственное решение с&nbsp;AI&#x2011;ассистентом в&nbsp;основе. Теперь вносить изменения может любой человек из&nbsp;команды без&nbsp;технических навыков&nbsp;&mdash; отдел продаж, продуктовый отдел, дизайнеры, основатели студии. Баг, правка, новый кейс&nbsp;&mdash; исправляется сразу, без&nbsp;заявок и&nbsp;ожиданий.</p>
      </Section>

      <ProcessSteps steps={[
        { num: '1', title: 'Перенос', description: 'Полный перенос сайта с&nbsp;Webflow на&nbsp;собственное решение', tag: '~3 дня' },
        { num: '2', title: 'Отладка', description: 'Точечные правки, проверка всех страниц и&nbsp;корректности отображения', tag: '3–4 дня' },
        { num: '✓', title: 'Полный запуск', description: 'Против полутора месяцев на&nbsp;перенос через классическую разработку', tag: '~7 дней' },
      ]} />

      {/* ── UI-kit ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}><h2 className="h1">Внутренний UI&#x2011;kit, который растёт вместе с&nbsp;сайтом</h2></div>
        <p className="font-color-dark-gray">В&nbsp;основе решения&nbsp;&mdash; собственный UI&#x2011;kit: набор визуальных констант и&nbsp;компонентов, которым пользуется нейронка при&nbsp;каждом запросе. Это означает, что любой новый блок или страница автоматически соответствует стилистике сайта. Нейронка не&nbsp;просто выполняет задачи&nbsp;&mdash; она развивает UI&#x2011;kit исходя из&nbsp;новых запросов, сохраняя визуальную целостность без&nbsp;участия дизайнера.</p>
        <p className="font-color-dark-gray" style={{ marginTop: 'var(--16px)' }}>Раньше, чтобы поменять ссылку на&nbsp;сайте, нужно было писать разработчику и&nbsp;ждать. Сейчас это делает любой человек из&nbsp;команды за&nbsp;минуту.</p>
      </Section>

      {/* ── CTA ── */}
      <Section><div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}><h2 className="h1">Хотите так&nbsp;же?</h2></div>
        <p className="font-color-dark-gray">Если ваш сайт работает на&nbsp;зарубежной платформе или обновление контента занимает дни&nbsp;&mdash; расскажем, как это решить для&nbsp;вашего бизнеса.</p>
      </Section>

      <ContactCard intro="Обсудить проект?" role="Управляющий партнер Юрий Григоренко&nbsp;— расскажет, как&nbsp;это работает и&nbsp;подойдёт&nbsp;ли вам." />
    </>
  )
}
