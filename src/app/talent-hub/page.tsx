import type { Metadata } from 'next'
import Link from 'next/link'
import Section from '@/components/Section/Section'
import ServicePointRow from '@/components/ServicePointRow/ServicePointRow'
import ServicePoint from '@/components/ServicePoint/ServicePoint'
import ProcessSteps from '@/components/ProcessSteps/ProcessSteps'
import TalentHubBar from '@/components/TalentHubBar/TalentHubBar'
import FaqAccordion from '@/components/FaqAccordion/FaqAccordion'

export const metadata: Metadata = {
  title: 'Pinkman Talent Hub',
  description:
    'Собираем вокруг себя талантливых специалистов с опытом, чтобы делать вместе проекты фестивального уровня.',
  alternates: {
    canonical: 'https://pinkman.ru/talent-hub/',
  },
}

const FAQ_ITEMS = [
  {
    question: 'Как попасть в&nbsp;штат?',
    answer:
      'В&nbsp;штат студии можно попасть только опытному специалисту, который поработал с&nbsp;нами попроектно и&nbsp;зарекомендовал себя. Хочет в&nbsp;дальнейшем развиваться как ведущий специалист, вырасти в&nbsp;дизайн-лида.',
  },
  {
    question: 'Как можно с&nbsp;вами поработать попроектно?',
    answer:
      'Заполнить <a href="https://airtable.com/appNFasdKaA7VMRcv/pagNXJJsEKtJhwys5/form" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">форму</a>, пройти <a href="https://airtable.com/appNFasdKaA7VMRcv/pagIoxATuyvLeg6FS/form" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">тестовые задания</a>. На&nbsp;основе отклика и&nbsp;тестового задания мы&nbsp;добавим тебя в&nbsp;нашу базу талантов и&nbsp;будем активно звать на&nbsp;проекты + можно самостоятельно откликаться на&nbsp;задачи на&nbsp;нашей платформе.',
  },
  {
    question: 'У&nbsp;вас есть бесплатные / платные стажировки для&nbsp;начинающих?',
    answer:
      'Мы&nbsp;не&nbsp;предлагаем бесплатные стажировки, не&nbsp;нанимаем в&nbsp;штат студии на&nbsp;таком этапе развития, но&nbsp;у&nbsp;нас есть тестовые задания на&nbsp;основе реальных задач. Если вы&nbsp;делаете их&nbsp;на&nbsp;высоком уровне качества, креативно, продюсеры и&nbsp;лиды студии позовут вас для&nbsp;проектного сотрудничества на&nbsp;оплачиваемые задачи!',
  },
  {
    question: 'У&nbsp;меня нет опыта, но&nbsp;я&nbsp;хочу с&nbsp;вами работать',
    answer:
      'Скажем честно, придется потрудиться. Лучше начать с&nbsp;курсов <a href="https://wannabe.ru/" target="_blank" rel="noopener noreferrer" style="text-decoration:underline">wannabe.ru</a>, очень-очень стараться и&nbsp;проявляться. После&nbsp;&mdash; пройти тестовые. Это сложный путь, но&nbsp;стойкость, упорство и&nbsp;старания будут вознаграждены, все мы&nbsp;(дизайн-директора / дизайн-лиды) были когда-то начинающими дизайнерами.',
  },
  {
    question: 'Я&nbsp;оставил отклик, что дальше?',
    answer:
      'На&nbsp;одну размещенную вакансию мы&nbsp;в&nbsp;среднем получаем от&nbsp;500 откликов, очень рекомендуем отклик сопровождать тестовым заданием, они для&nbsp;нас идут в&nbsp;приоритетном порядке. Ваш отклик отсмотрит дизайн-директор, лид студии или ведущий дизайнер. На&nbsp;основе портфолио мы&nbsp;добавим вас в&nbsp;базу талантов или отправим отказ. Мы&nbsp;не&nbsp;используем AI для&nbsp;оценки портфолио и&nbsp;навыков, отсматриваем все вручную! Поэтому ценим отклики, которым уделили время и&nbsp;дополнили тестовыми заданиями.',
  },
  {
    question: 'Я&nbsp;сделал тестовое, что дальше?',
    answer:
      'Супер! Отклики с&nbsp;тестовыми заданиями отсматриваются в&nbsp;приоритетном порядке нашими дизайн-директорами / лидами / ведущими дизайнерами. С&nbsp;почты talent@pinkman.studio вам придет письмо с&nbsp;подробным ревью. Обычно это занимает от&nbsp;3-х дней до&nbsp;2-х недель, в&nbsp;зависимости от&nbsp;нагрузки команды. По&nbsp;результатам тестового вас добавят в&nbsp;базу талантов и&nbsp;будут активно звать на&nbsp;проекты, в&nbsp;случае отказа&nbsp;&mdash; отправим развернутый фидбек.',
  },
]

const PINKMAN_LOGO = (
  <svg viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
    <path d="M21.8368 4.41815H7.18411L0 47H14.5816L16.0042 38.637L36.703 43.8639C43.0335 45.4668 48.0126 42.3306 49.1507 35.222C51.5691 20.0292 49.5063 4 33.9289 4C29.1632 4 23.4017 7.13614 20.4143 12.0146L21.8368 4.41815ZM36.2051 29.9951L21.3389 26.2318C22.3348 21.9806 26.9582 16.6143 32.862 17.799C37.272 18.705 37.4143 25.5348 36.2051 29.9951Z" fill="currentColor"/>
  </svg>
)

export default function TalentHubPage() {
  return (
    <>
      {/* ── Custom sticky bar ── */}
      <TalentHubBar />

      {/* ── Logo ── */}
      <Section>
        <div style={{ paddingTop: 'var(--16px)', paddingBottom: 0 }}>
          <Link href="https://pinkman.ru" className="th-page-logo">
            {PINKMAN_LOGO}
          </Link>
        </div>
      </Section>

      {/* ── Hero ── */}
      <Section>
        <div className="text-big-wrapper">
          <p className="text-big">Pinkman Talent Hub</p>
        </div>
      </Section>
      <Section>
        <div className="text-h2-wrapper">
          <h2>
            Собираем вокруг себя талантливых специалистов с&nbsp;опытом,
            чтобы делать вместе проекты фестивального уровня
            в&nbsp;рамках проектного сотрудничества.
          </h2>
        </div>
      </Section>
      <Section>
        <div className="text-h2-wrapper" style={{ paddingTop: 0 }}>
          <p className="font-color-dark-gray text-regular">
            Чтобы попасть в&nbsp;нашу базу талантов, нужно оставить отклик
            через форму и&nbsp;пройти тестовые задания. Ребята из&nbsp;базы
            талантов получают доступ к&nbsp;задачам, которые можно взять
            в&nbsp;работу + активные предложения о&nbsp;проектном сотрудничестве
            со&nbsp;стороны продюсеров и&nbsp;лидов студии.
          </p>
        </div>
      </Section>

      {/* ── Intro CTA buttons ── */}
      <Section>
        <div className="th-intro-buttons th-intro-buttons--fixed anim">
          <a
            className="th-intro-btn th-intro-btn--primary"
            href="https://airtable.com/appNFasdKaA7VMRcv/pagIoxATuyvLeg6FS/form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Пройти тестовые задания
          </a>
          <p className="th-intro-note">
            Все отклики с&nbsp;тестовыми имеют высокий приоритет для&nbsp;нас
            и&nbsp;разбираются в&nbsp;первую очередь
          </p>
          <a
            className="th-intro-btn th-intro-btn--secondary"
            href="https://airtable.com/appNFasdKaA7VMRcv/pagNXJJsEKtJhwys5/form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Оставить отклик через форму
          </a>
          <a
            href="mailto:talent@pinkman.studio"
            className="contacts-link-btn contacts-link-btn--light"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: 'var(--8px)' }}
          >
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
            </svg>
            Спросить, если что-то непонятно
          </a>
          <p className="th-intro-note">
            Если очень хочется через почту оставить отклик, лучше не&nbsp;надо,
            минус балл:) Для&nbsp;этого есть общая форму и&nbsp;форма с&nbsp;тестовыми заданиями
          </p>
        </div>
      </Section>

      {/* ── Кого мы ищем ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Кого мы&nbsp;ищем</h2>
        </div>
      </Section>

      {/* Плашка с зачёркиванием (п.4: extra bottom margin) */}
      <Section>
        <div className="callout-box callout-box--yellow th-two-col-width anim" style={{ marginBottom: 'var(--32px)' }}>
          <p className="text-regular font-color-black">
            <s>Ищем крепких дизайнеров</s> так обычно пишут
            в&nbsp;99% вакансий, но&nbsp;мы&nbsp;постараемся рассказать,
            что это значит именно для&nbsp;нас
          </p>
        </div>
      </Section>

      {/* п.5: grid layout — cards in rows of 2 */}
      <ServicePointRow compact>
        <ServicePoint
          title="AI-ориентированных, кто может с&nbsp;помощью технологий получить необходимый результат"
          description="Мы&nbsp;ищем дизайнеров, которые кратно ускоряют свою работу с&nbsp;AI без&nbsp;потери качества. Сейчас кто угодно может произвести контент, но&nbsp;лишь единицы доводят его до&nbsp;необходимого качества на&nbsp;постпродакшене. Да, например, нужно до&nbsp;сих пор открывать фотошоп и&nbsp;знать, как поправить цветокоррекцию, как устранить артефакты, это базовые технические скиллы, которые мы&nbsp;ожидаем от&nbsp;дизайнеров в&nbsp;совокупности с&nbsp;AI-навыками."
        />
        <ServicePoint
          title="С&nbsp;опытом на&nbsp;реальных проектах. Со&nbsp;знанием того, как строится дизайн-процесс"
          description="В&nbsp;студии проекты с&nbsp;разной направленностью: от&nbsp;создания KV для&nbsp;рекламной кампании до&nbsp;полномасштабных музейных проектов. На&nbsp;отдельные части проекта нам нужны опытные дизайнеры, которые идейно, технически качественно и&nbsp;в&nbsp;срок смогут сделать свою часть работы."
          animDelay={2}
        />
      </ServicePointRow>

      {/* п.6: card with numbered list + mini callout */}
      <ServicePointRow compact>
        <ServicePoint
          title="Обязательных и&nbsp;ответственных"
        >
          <div>
            <p className="font-color-dark-gray">Тех, кто:</p>
            <ol className="th-numbered-list">
              <li>погружается в&nbsp;задачу, формирует решение и&nbsp;образ результата, утверждает подход с&nbsp;командой</li>
              <li>сообщает команде, когда и&nbsp;с&nbsp;чем вернется и&nbsp;правда возвращается :)</li>
              <li>информирует о&nbsp;задержках и&nbsp;сложностях заранее и&nbsp;предлагает возможные решения</li>
            </ol>
            <div className="th-mini-callout">
              Если вы&nbsp;делаете так, поздравляем, вы&nbsp;входите в&nbsp;2% всех дизайнеров, если нет, начинайте как можно скорее!
            </div>
          </div>
        </ServicePoint>
        <ServicePoint
          title="С&nbsp;большим потенциалом (high potential)"
          description="Дизайнерам с&nbsp;небольшим опытом непросто, но&nbsp;мы&nbsp;даем шанс проактивным, тем, кто обучается с&nbsp;невероятной скоростью и&nbsp;выдает хорошее качество после фидбека лида. Нет, мы&nbsp;не&nbsp;предлагаем бесплатные стажировки, не&nbsp;нанимаем в&nbsp;студию на&nbsp;таком этапе развития, но&nbsp;у&nbsp;нас есть тестовые задания на&nbsp;основе реальных задач. Если вы&nbsp;делаете их&nbsp;на&nbsp;высоком уровне качества, креативно, продюсеры и&nbsp;лиды студии будут постоянно предлагать вам работу!"
          animDelay={2}
        />
      </ServicePointRow>
      <ServicePointRow compact full>
        <ServicePoint
          title="Веселых)"
          description="Шутка) Но&nbsp;если честно, мы&nbsp;много времени проводим за&nbsp;работой, с&nbsp;таким настроем все получается по-красоте и&nbsp;как-то легче"
        />
      </ServicePointRow>

      {/* ── Callout — Особенно ищем ── */}
      <Section>
        <div className="callout-box th-two-col-width anim">
          <h3 className="font-color-black" style={{ marginBottom: 'var(--8px)' }}>
            Особенно ищем прямо сейчас ⭐️
          </h3>
          <p className="text-regular font-color-dark-gray">
            Дизайнеров на&nbsp;концепты интерфейсов, AI-дизайнеров на&nbsp;статику
            и&nbsp;ролики, CG-специалистов, motion-дизайнеров, 3D-дизайнеров
          </p>
        </div>
      </Section>

      {/* ── Что нужно сделать (п.7: text inside step 2 card) ── */}
      <Section>
        <div className="text-h1-wrapper">
          <h2 className="h1">Что нужно сделать, чтобы начать с&nbsp;нами работать попроектно?</h2>
        </div>
      </Section>
      <ProcessSteps
        compact
        steps={[
          {
            num: '1',
            title: 'Заполнить форму',
            description: '<a class="th-intro-btn th-intro-btn--secondary th-step-btn" href="https://airtable.com/appNFasdKaA7VMRcv/pagNXJJsEKtJhwys5/form" target="_blank" rel="noopener noreferrer">Оставить отклик</a>',
            tag: 'отклик',
          },
          {
            num: '2',
            title: 'Сделать тестовое задание по\u00a0интересующему направлению',
            description: '<div class="th-intro-buttons"><a class="th-intro-btn th-intro-btn--primary th-step-btn" href="https://airtable.com/appNFasdKaA7VMRcv/pagIoxATuyvLeg6FS/form" target="_blank" rel="noopener noreferrer">Пройти тестовые</a></div><p class="th-intro-note" style="margin-top:12px">Задания подготовлены на&nbsp;основе реальных задач, в&nbsp;случае успешного выполнения, мы&nbsp;добавляем вас в&nbsp;нашу \u2728базу талантов\u2728 и&nbsp;активно зовем на&nbsp;задачи. Дополнительно, можно самостоятельно откликаться на&nbsp;задачи на&nbsp;нашей платформе.<br/><br/>Все тестовые задания отсматривают наши арт-директора, лиды студии и&nbsp;ведущие дизайнеры, мы&nbsp;отправляем обратную связь каждому лично на&nbsp;почту.</p>',
            tag: 'тестовое',
          },
        ]}
      />

      {/* ── Некоторые наблюдения ── */}
      <Section>
        <div className="callout-box callout-box--yellow anim">
          <h3 className="font-color-black" style={{ marginBottom: 'var(--8px)' }}>
            Некоторые наблюдения:
          </h3>
          <p className="text-regular font-color-dark-gray" style={{ marginBottom: 'var(--16px)' }}>
            Тестовые дают шанс вам заявить о&nbsp;себе среди 500 откликов
            (столько в&nbsp;среднем откликаются на&nbsp;одну нашу вакансию),
            даже если ваше портфолио давно не&nbsp;обновлялось / проекты
            под&nbsp;nda.
          </p>
          <p className="text-regular font-color-dark-gray" style={{ marginBottom: 'var(--16px)' }}>
            Мы&nbsp;разработали их&nbsp;с&nbsp;заботой о&nbsp;вас и&nbsp;индустрии,
            чтобы оценивать ваш профиль не&nbsp;только по&nbsp;красивому портфолио,
            но&nbsp;и&nbsp;по&nbsp;результатам реальных задач, так как люди нанимают
            вас на&nbsp;конкретные работы&nbsp;&mdash; сделать анимацию, сделать
            баннер и&nbsp;др. Дополнительно, у&nbsp;вас появляется классная
            возможность получить качественный фидбек по&nbsp;своей работе
            от&nbsp;топовых дизайн-директоров, лидов, ведущих дизайнеров студии.
          </p>
          <p className="text-regular font-color-dark-gray">
            Опытные специалисты проактивно делают тестовые, так как ищут
            постоянный поток интересных проектов, которые можно получить
            только через студии. Ребята&nbsp;же без&nbsp;опыта /
            с&nbsp;низким качеством работ пишут нам и&nbsp;находят множество
            отговорок. Всем есть над&nbsp;чем подумать
          </p>
        </div>
      </Section>

      {/* ── Что дальше? (п.8: large pink text) ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Что дальше?</h2>
        </div>
      </Section>
      <Section>
        <p className="th-accent-text anim">
          Самых-самых мы&nbsp;добавляем в&nbsp;нашу базу талантов, где продюсеры,
          лиды, ведущие дизайнеры ищут специалистов для&nbsp;разных задач
          и&nbsp;проектов. Самые опытные и&nbsp;талантливые в&nbsp;дальнейшем
          загружены работой на&nbsp;несколько месяцев вперед.
        </p>
      </Section>

      {/* ── Форматы работы (п.9: compact gaps) ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Форматы работы</h2>
        </div>
      </Section>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['01']}
          title="Все официально, заключаем Договор, подписываем NDA, потребуется СЗ или ИП. Оплата обсуждается перед стартом работ по&nbsp;каждой задаче и&nbsp;проекту"
        />
        <ServicePoint
          tagsTop={['02']}
          title="Краткосрочно / на&nbsp;отдельные задачи"
          description="Можно поделать небольшие интересные задачки и&nbsp;заработать деньги, особенно, если на&nbsp;основной работе нет места креативным задачам."
          animDelay={2}
        />
      </ServicePointRow>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['03']}
          title="Попроектно / занятость на&nbsp;квартал"
          description="Если ты&nbsp;суперский специалист, наши продюсеры от&nbsp;тебя не&nbsp;отстанут и&nbsp;обеспечат тебя проектами вдолгую."
        />
        <ServicePoint
          tagsTop={['04']}
          title="Если ты&nbsp;зарекомендовал себя попроектно и&nbsp;у&nbsp;нас случился метч, зовем в&nbsp;штат студии!"
          animDelay={2}
        />
      </ServicePointRow>

      {/* ── Почему ребятам нравится (п.10: compact on last row too) ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Почему ребятам нравится работать с&nbsp;нами попроектно и&nbsp;они хотят попасть в&nbsp;базу талантов?</h2>
        </div>
      </Section>
      <Section>
        <div className="text-h2-wrapper" style={{ paddingTop: 0 }}>
          <p className="font-color-dark-gray text-regular">
            Мы&nbsp;спросили у&nbsp;ребят, которые уже с&nbsp;нами, что их&nbsp;привлекает
            в&nbsp;работе с&nbsp;pinkman. И&nbsp;вот, что они особенно отметили:
          </p>
        </div>
      </Section>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['01']}
          title="Внимательный арт-дирекшен с&nbsp;корректной обратной связью"
        />
        <ServicePoint
          tagsTop={['02']}
          title="Приятная и&nbsp;четкая коммуникация на&nbsp;всех этапах, здоровая атмосфера, без&nbsp;токсиков"
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['03']}
          title="Очень-очень интересные проекты, которые можно найти только в&nbsp;студии: музейные проекты, концертные мероприятия, рекламные кампании"
          animDelay={3}
        />
      </ServicePointRow>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['04']}
          title="Разнообразные проекты: от&nbsp;мелких задачек на&nbsp;пару часов до&nbsp;профессиональных фуллтайм вызовов"
        />
        <ServicePoint
          tagsTop={['05']}
          title="Развитие собственных скиллов благодаря команде"
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['06']}
          title="Оплата всегда четко и&nbsp;вовремя"
          animDelay={3}
        />
      </ServicePointRow>
      <ServicePointRow compact>
        <ServicePoint
          tagsTop={['07']}
          title="Ноль бюрократии, электронный документооборот без&nbsp;сканов и&nbsp;подписей. Пару кликов и&nbsp;готово"
        />
        <ServicePoint
          tagsTop={['08']}
          title="Причастность к&nbsp;команде и&nbsp;к&nbsp;результату"
          description="Несмотря на&nbsp;проектную работу, ты&nbsp;часть команды, которая делает качественный результат, приглашаем тебя на&nbsp;демо, внутренние обучения и&nbsp;хихикаем в&nbsp;чатиках."
          animDelay={2}
        />
        <ServicePoint
          tagsTop={['09']}
          title="Pinkman вдохновляет, внутри все без&nbsp;исключения профессионалы"
          animDelay={3}
        />
      </ServicePointRow>

      {/* ── FAQ ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">FAQ</h2>
        </div>
      </Section>
      <Section>
        <FaqAccordion items={FAQ_ITEMS} />
      </Section>

      {/* ── Контакты (п.2: тестовые first, п.11: pink callout) ── */}
      <Section>
        <div className="text-h1-wrapper" style={{ marginBottom: '1rem' }}>
          <h2 className="h1">Контакты</h2>
        </div>
      </Section>
      <Section>
        <div className="th-intro-buttons th-intro-buttons--fixed anim">
          <a
            className="th-intro-btn th-intro-btn--primary"
            href="https://airtable.com/appNFasdKaA7VMRcv/pagIoxATuyvLeg6FS/form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Пройти тестовые задания
          </a>
          <div className="callout-box callout-box--pink-sm">
            Все отклики с&nbsp;тестовыми имеют высокий приоритет для&nbsp;нас
            и&nbsp;разбираются в&nbsp;первую очередь. Мы&nbsp;не&nbsp;используем
            AI для&nbsp;оценки портфолио и&nbsp;навыков, отсматриваем все
            вручную! Поэтому ценим отклики, которым уделили время
            и&nbsp;дополнили тестовыми заданиями.
          </div>
          <a
            className="th-intro-btn th-intro-btn--secondary"
            href="https://airtable.com/appNFasdKaA7VMRcv/pagNXJJsEKtJhwys5/form"
            target="_blank"
            rel="noopener noreferrer"
          >
            Оставить отклик через форму
          </a>
          <a
            href="mailto:talent@pinkman.studio"
            className="contacts-link-btn contacts-link-btn--light"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginTop: 'var(--8px)' }}
          >
            <svg fill="none" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor" />
            </svg>
            Спросить, если что-то непонятно
          </a>
          <p className="th-intro-note">
            Если очень хочется через почту оставить отклик, лучше не&nbsp;надо,
            минус балл:) Для&nbsp;этого есть формы выше
          </p>
        </div>
      </Section>

      {/* Bottom padding so sticky bar doesn't overlap content */}
      <div style={{ height: '140px' }} />
    </>
  )
}
