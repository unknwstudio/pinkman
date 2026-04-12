'use client'

import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import Link from 'next/link'
import gsap, { Flip } from '@/lib/gsap'

const CATEGORIES = [
  'Все проекты',
  'Веб-дизайн',
  'Бренд и\u00a0контент',
  'Спецпроекты',
  'BTL и\u00a0ивенты',
  'Брендинг',
  'Исследования',
  'Сайты на\u00a0no-code',
  'Дизайн коммуникаций',
  '3D/Motion-design',
  'Интерфейсы',
  'Сайты корпораций',
]

type Case = {
  title: string
  desc: string
  year: string
  cats: string[]
  img?: string
  imgSrcSet?: string
  href?: string
}

const CASES: Case[] = [
  // ── 2026 ──────────────────────────────────────────────────────────────
  {
    title: 'Норма',
    desc: 'Разработали брендинг, мобильное приложение и сайт для сети химчисток',
    year: '2026',
    cats: ['Брендинг', 'Веб-дизайн', 'Интерфейсы'],
    img: '/images/_cases/norma/norma-cover.webp',
    href: '/projects/norma',
  },
  {
    title: 'СИБУР',
    desc: 'Зонтичный карьерный бренд для нефтехимической компании',
    year: '2026',
    cats: ['Брендинг'],
    img: '/images/_cases/sibur/sibur-cover.webp',
    href: '/projects/sibur-kariernyy-brend',
  },
  {
    title: 'Яндекс Го Казахстан',
    desc: 'Подготовили AI-ролики для федеральной рекламной кампании с\u00a0множеством ресайзов',
    year: '2026',
    cats: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    img: '/images/_cases/yagno-kazakh/horizontal.png',
    href: '/projects/yandex-go-kazakhstan',
  },
  {
    title: 'AI-ролик для Яндекс.Сплит',
    desc: 'Рекламный AI-ролик для различных каналов коммуникации',
    year: '2026',
    cats: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    img: '/images/_cases/yandex-split/image 2090012112.png',
    href: '/projects/ai-rolik-dlya-yandex-split',
  },
  {
    title: 'AI-ролик для Bootlegger',
    desc: 'Рекламный AI-ролик для трансляции в\u00a0кинотеатре Пионер',
    year: '2026',
    cats: ['Бренд и\u00a0контент', 'AI', '3D/Motion-design'],
    img: '/images/_cases/bootlegger/image 2090012112.png',
    href: '/projects/ai-rolik-dlya-bootlegger',
  },
  // ── 2025 ──────────────────────────────────────────────────────────────
  {
    title: 'Синяя птица',
    desc: 'Подготовили 19 видеофонов и\u00a0оживили персонажей для номеров шоу',
    year: '2025',
    cats: ['Бренд и\u00a0контент', 'Спецпроекты'],
    img: '/images/69aae24b7c2dab0e74e8a302_Frame-2136139030.webp',
    imgSrcSet: '/images/69aae24b7c2dab0e74e8a302_Frame-2136139030-p-500.webp 500w, /images/69aae24b7c2dab0e74e8a302_Frame-2136139030-p-800.webp 800w, /images/69aae24b7c2dab0e74e8a302_Frame-2136139030-p-1080.webp 1080w, /images/69aae24b7c2dab0e74e8a302_Frame-2136139030.webp 1248w',
    href: '/projects/scenicheskiy-vizual-dlya-siney-pticy-fony-k-nomeram-shou',
  },
  {
    title: 'Свои Плюсы',
    desc: 'Всего за\u00a02 месяца сделали редизайн и\u00a0полностью обновили ключевой канал коммуникации',
    year: '2025',
    cats: ['Бренд и\u00a0контент', '3D/Motion-design'],
    img: '/images/69a43d4c9c4d979bb18d08a3_Frame 174.webp',
    imgSrcSet: '/images/69a43d4c9c4d979bb18d08a3_Frame 174-p-500.webp 500w, /images/69a43d4c9c4d979bb18d08a3_Frame 174-p-800.webp 800w, /images/69a43d4c9c4d979bb18d08a3_Frame 174-p-1080.webp 1080w, /images/69a43d4c9c4d979bb18d08a3_Frame 174.webp 1248w',
    href: '/projects/masshtabirovali-svoi-plyusy----programmu-loyalnosti-yandeksa',
  },
  {
    title: 'Сбер НПФ',
    desc: 'Обновили сайт негосударственного пенсионного фонда Сбербанка',
    year: '2025',
    cats: ['Веб-дизайн', 'Исследования', 'Сайты корпораций'],
    img: '/images/68d55d1e9a752dbe263fe0fe_Frame 174 (4).webp',
    imgSrcSet: '/images/68d55d1e9a752dbe263fe0fe_Frame 174 (4)-p-500.webp 500w, /images/68d55d1e9a752dbe263fe0fe_Frame 174 (4)-p-800.webp 800w, /images/68d55d1e9a752dbe263fe0fe_Frame 174 (4)-p-1080.webp 1080w, /images/68d55d1e9a752dbe263fe0fe_Frame 174 (4).webp 1248w',
    href: '/projects/sdelali-novyy-sayt-dlya-sber-npf',
  },
  {
    title: 'ОТП Банк',
    desc: '1,5 года делаем сайт банка лучше — увеличили конверсию на\u00a040%',
    year: '2025',
    cats: ['Веб-дизайн', 'Исследования', 'Сайты корпораций'],
    img: '/images/680b76c9f1bb4eb6c0f384fb_otp.webp',
    imgSrcSet: '/images/680b76c9f1bb4eb6c0f384fb_otp-p-500.webp 500w, /images/680b76c9f1bb4eb6c0f384fb_otp-p-800.webp 800w, /images/680b76c9f1bb4eb6c0f384fb_otp-p-1080.webp 1080w, /images/680b76c9f1bb4eb6c0f384fb_otp.webp 1248w',
    href: '/projects/1-5-goda-razvivaem-sayt-otp-banka-uvelichili-konversiyu-na-40',
  },
  {
    title: 'Газпромбанк',
    desc: '1,5 года помогаем поддерживать дизайн коммуникаций банка на\u00a0аутстаффе',
    year: '2025',
    cats: ['Дизайн коммуникаций', '3D/Motion-design'],
    img: '/images/680b764199c920914c0a7c5b_gpb.webp',
    imgSrcSet: '/images/680b764199c920914c0a7c5b_gpb-p-500.webp 500w, /images/680b764199c920914c0a7c5b_gpb-p-800.webp 800w, /images/680b764199c920914c0a7c5b_gpb-p-1080.webp 1080w, /images/680b764199c920914c0a7c5b_gpb.webp 1248w',
    href: '/projects/1-5-goda-pomogaem-podderzhivat-dizayn-kommunikaciy-gazprombanka-na-autstaffe',
  },
  {
    title: 'X5 Tech',
    desc: '5 лет работаем над\u00a0внутренними продуктами крупного ритейлера',
    year: '2025',
    cats: ['Интерфейсы', 'Исследования'],
  },
  {
    title: 'Т-Банк',
    desc: 'Сделали стиль и\u00a0лендинг для\u00a0спецпроекта Т=Математика с\u00a0нуля за\u00a03 недели',
    year: '2025',
    cats: ['Веб-дизайн', '3D/Motion-design'],
    img: '/images/68237c69e06cd1f8df488716_Frame 174.webp',
    imgSrcSet: '/images/68237c69e06cd1f8df488716_Frame 174-p-500.webp 500w, /images/68237c69e06cd1f8df488716_Frame 174-p-800.webp 800w, /images/68237c69e06cd1f8df488716_Frame 174-p-1080.webp 1080w, /images/68237c69e06cd1f8df488716_Frame 174.webp 1248w',
    href: '/projects/sdelali-stil-i-lending-dlya-specproekta-t-banka-za-3-nedeli',
  },
  {
    title: 'Яндекс Еда',
    desc: '2 года работаем с\u00a0дизайном коммуникаций фудтех-проектов Яндекса в\u00a0нескольких странах',
    year: '2025',
    cats: ['Дизайн коммуникаций', '3D/Motion-design'],
    img: '/images/683eccfa54b8a997cf797735_Frame 174 (2).webp',
    imgSrcSet: '/images/683eccfa54b8a997cf797735_Frame 174 (2)-p-500.webp 500w, /images/683eccfa54b8a997cf797735_Frame 174 (2)-p-800.webp 800w, /images/683eccfa54b8a997cf797735_Frame 174 (2)-p-1080.webp 1080w, /images/683eccfa54b8a997cf797735_Frame 174 (2).webp 1248w',
    href: '/projects/2-goda-dizayn-podderzhki-yandeks-edy',
  },
  {
    title: 'Prodamus',
    desc: 'Сделали брендинг для\u00a0экосистемы финтех-сервисов и\u00a0гайдлайн для\u00a0масштабирования и\u00a0развития',
    year: '2025',
    cats: ['Бренд и\u00a0контент'],
    img: '/images/689de85cb9c4e911a3a1dbd3_Frame 174 (3).webp',
    imgSrcSet: '/images/689de85cb9c4e911a3a1dbd3_Frame 174 (3)-p-500.webp 500w, /images/689de85cb9c4e911a3a1dbd3_Frame 174 (3)-p-800.webp 800w, /images/689de85cb9c4e911a3a1dbd3_Frame 174 (3)-p-1080.webp 1080w, /images/689de85cb9c4e911a3a1dbd3_Frame 174 (3).webp 1248w',
    href: '/projects/sdelali-brending-dlya-ekosistemy-finteh-servisov-prodamus',
  },
  {
    title: 'Международный жилищный конгресс',
    desc: 'Сделали сайт для\u00a0ведущего делового мероприятия в\u00a0сфере недвижимости',
    year: '2025',
    cats: ['Веб-дизайн'],
  },
  {
    title: 'ОТП Банк',
    desc: 'Меняем дизайн коммуникаций банка в\u00a0офлайне: видео, велком-паки и\u00a0т.д.',
    year: '2025',
    cats: ['Бренд и\u00a0контент', 'Дизайн коммуникаций', '3D/Motion-design'],
  },
  {
    title: 'Ютека',
    desc: 'Сделали ролик для\u00a0ТВ-кампании большого аптечного маркетплейса.',
    year: '2025',
    cats: ['Бренд и\u00a0контент', '3D/Motion-design'],
    img: '/images/680b768db1c5ee1deb64c739_uteka.webp',
    imgSrcSet: '/images/680b768db1c5ee1deb64c739_uteka-p-500.webp 500w, /images/680b768db1c5ee1deb64c739_uteka-p-800.webp 800w, /images/680b768db1c5ee1deb64c739_uteka-p-1080.webp 1080w, /images/680b768db1c5ee1deb64c739_uteka.webp 1248w',
    href: '/projects/sdelali-rolik-dlya-tv-reklamy-yuteki',
  },
  // ── 2024 ──────────────────────────────────────────────────────────────
  {
    title: 'Т-Банк',
    desc: 'Сделали моушен про\u00a0ренейминг банка для\u00a03D-кубов и\u00a0медиафасадов по\u00a0всей России',
    year: '2024',
    cats: ['Бренд и\u00a0контент', '3D/Motion-design'],
    img: '/images/680b761258fa82867ec8654d_tbankvideo.webp',
    imgSrcSet: '/images/680b761258fa82867ec8654d_tbankvideo-p-500.webp 500w, /images/680b761258fa82867ec8654d_tbankvideo-p-800.webp 800w, /images/680b761258fa82867ec8654d_tbankvideo-p-1080.webp 1080w, /images/680b761258fa82867ec8654d_tbankvideo.webp 1248w',
    href: '/projects/sdelali-moushen-dlya-rebrendinga-t-banka',
  },
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
    title: 'FUN&SUN',
    desc: '2 года улучшаем сайт и\u00a0приложение туроператора',
    year: '2024',
    cats: ['Интерфейсы', 'Исследования', 'Веб-дизайн'],
    img: '/images/680b76236866e23af5ff4c24_funsun.webp',
    imgSrcSet: '/images/680b76236866e23af5ff4c24_funsun-p-500.webp 500w, /images/680b76236866e23af5ff4c24_funsun-p-800.webp 800w, /images/680b76236866e23af5ff4c24_funsun-p-1080.webp 1080w, /images/680b76236866e23af5ff4c24_funsun.webp 1248w',
    href: '/projects/2-goda-uluchshaem-sayt-i-prilozhenie-turoperatora-fun-sun',
  },
  {
    title: 'VK',
    desc: 'Подготовили VFX-ролик для\u00a0спецпроекта «Мамин лайк»',
    year: '2024',
    cats: ['Бренд и\u00a0контент', '3D/Motion-design'],
  },
  {
    title: 'Сбер х Еврейский музей',
    desc: 'Мобильное приложение и\u00a0дизайн-поддержка выставки про Бродского',
    year: '2024',
    cats: ['BTL и\u00a0ивенты', '3D/Motion-design', 'Интерфейсы'],
    img: '/images/681229f38e06cabc183bbec4_Frame 174.webp',
    imgSrcSet: '/images/681229f38e06cabc183bbec4_Frame 174-p-500.webp 500w, /images/681229f38e06cabc183bbec4_Frame 174-p-800.webp 800w, /images/681229f38e06cabc183bbec4_Frame 174-p-1080.webp 1080w, /images/681229f38e06cabc183bbec4_Frame 174.webp 1248w',
    href: '/projects/mobilnoe-prilozhenie-i-dizayn-podderzhka-vystavki-pro-brodskogo',
  },
  {
    title: 'ВТБ',
    desc: '5 лет развивали сайт и\u00a0цифровые коммуникации ТОП-3 банка России',
    year: '2024',
    cats: ['Веб-дизайн', 'Интерфейсы', '3D/Motion-design', 'Сайты корпораций'],
  },
  {
    title: 'Hamkor Bank',
    desc: 'Трансформировали сайт банка из\u00a0Узбекистана в\u00a0цифровой канал продаж',
    year: '2024',
    cats: ['Веб-дизайн', 'Интерфейсы'],
    img: '/images/680b765f6caf19b581dcc03f_hamkor.webp',
    imgSrcSet: '/images/680b765f6caf19b581dcc03f_hamkor-p-500.webp 500w, /images/680b765f6caf19b581dcc03f_hamkor-p-800.webp 800w, /images/680b765f6caf19b581dcc03f_hamkor-p-1080.webp 1080w, /images/680b765f6caf19b581dcc03f_hamkor.webp 1248w',
    href: '/projects/transformirovali-sayt-banka-hamkor-v-cifrovoy-kanal-prodazh',
  },
  {
    title: 'X5 Dialog',
    desc: 'Провели исследования, сделали редизайн и\u00a0увеличили в\u00a02 раза конверсию платформы',
    year: '2024',
    cats: ['Веб-дизайн', 'Исследования'],
    img: '/images/680b7652098cf4449bc913de_x5dialog.webp',
    imgSrcSet: '/images/680b7652098cf4449bc913de_x5dialog-p-500.webp 500w, /images/680b7652098cf4449bc913de_x5dialog-p-800.webp 800w, /images/680b7652098cf4449bc913de_x5dialog-p-1080.webp 1080w, /images/680b7652098cf4449bc913de_x5dialog.webp 1248w',
    href: '/projects/uvelichili-v-2-raza-konversiyu-platformy-servisov-dlya-partnerov-x5',
  },
  {
    title: 'Росбанк',
    desc: '4 года работали на\u00a0аутстаффе: провели рефакторинг дизайн-системы, сделали редизайн',
    year: '2024',
    cats: ['Интерфейсы', 'Исследования', 'Сайты корпораций'],
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
  {
    title: 'Сбер х Пушкинский музей',
    desc: 'Сделали игровое мобильное приложение со\u00a0Сберкотом и\u00a0ИИ к\u00a0112-му дню рождения музея',
    year: '2024',
    cats: ['BTL и\u00a0ивенты', 'Интерфейсы', 'Дизайн коммуникаций'],
    img: '/images/68122eb9ab3c926efd770f2f_Frame 174.webp',
    imgSrcSet: '/images/68122eb9ab3c926efd770f2f_Frame 174-p-500.webp 500w, /images/68122eb9ab3c926efd770f2f_Frame 174-p-800.webp 800w, /images/68122eb9ab3c926efd770f2f_Frame 174-p-1080.webp 1080w, /images/68122eb9ab3c926efd770f2f_Frame 174.webp 1248w',
    href: '/projects/igrovoe-mobilnoe-prilozhenie-so-sberkotom-i-ii',
  },
  // ── 2023 и ранее ──────────────────────────────────────────────────────
  {
    title: 'Paynet',
    desc: 'Сделали редизайн приложения узбекской платежной системы за\u00a0месяц с\u00a0ростом конверсии',
    year: '2023',
    cats: ['Интерфейсы', 'Исследования'],
    img: '/images/680b8288f5c20f2e9eb565ab_paynet.webp',
    imgSrcSet: '/images/680b8288f5c20f2e9eb565ab_paynet-p-500.webp 500w, /images/680b8288f5c20f2e9eb565ab_paynet-p-800.webp 800w, /images/680b8288f5c20f2e9eb565ab_paynet-p-1080.webp 1080w, /images/680b8288f5c20f2e9eb565ab_paynet.webp 1248w',
    href: '/projects/sproektirovali-mvp-prilozheniya-paynet-za-mesyac',
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
  {
    title: 'Unpredictably.io',
    desc: 'Создали масштабный коммерческий пак из\u00a0сотен уникальных 3D-иконок для\u00a0дизайнеров',
    year: '2023',
    cats: ['3D/Motion-design', 'Бренд и\u00a0контент'],
    img: '/images/67fd2a4c99621f7b4fbabcfc_Frame 65.webp',
    href: '/projects/sdelali-ogromnyy-3d-pak-ikonok-dlya-kommercheskogo-ispolzovaniya',
  },
  {
    title: 'Сбербанк',
    desc: 'Разработали лендинг для\u00a0аудитории молодых предпринимателей с\u00a03D-иллюстрациями',
    year: '2023',
    cats: ['Веб-дизайн', '3D/Motion-design', 'Сайты корпораций'],
  },
  {
    title: 'Центр Зотов',
    desc: 'Нарисовали баннеры, ресайзы и\u00a0анимацию для\u00a0цифровых коммуникаций культурного центра',
    year: '2023',
    cats: ['Дизайн коммуникаций', '3D/Motion-design'],
  },
  {
    title: 'МТС',
    desc: 'Поддержали дизайном HR-коммуникаций телеком-оператора',
    year: '2023',
    cats: ['Дизайн коммуникаций', '3D/Motion-design'],
  },
  {
    title: 'МТС',
    desc: 'Помогли в\u00a0развитии дизайн-системы бренда',
    year: '2023',
    cats: ['Веб-дизайн'],
  },
  {
    title: 'Уралсиб',
    desc: 'Переодели карьерный сайт банка за\u00a03 недели и\u00a0увеличили конверсию в\u00a0найм в\u00a03 раза',
    year: '2023',
    cats: ['Веб-дизайн', 'Сайты корпораций'],
  },
  {
    title: 'Мегамаркет',
    desc: 'Провели исследования веб-версии маркетплейса',
    year: '2023',
    cats: ['Исследования'],
  },
  {
    title: 'Иннополис',
    desc: 'Сделали сайт для\u00a0российского центра IT-индустрии, технологий и\u00a0образования',
    year: '2023',
    cats: ['Веб-дизайн', 'Исследования'],
  },
  {
    title: 'SberDevices',
    desc: 'Сделали баннеры для\u00a0линейки новых продуктов',
    year: '2023',
    cats: ['Дизайн коммуникаций'],
  },
  {
    title: 'Делимобиль',
    desc: 'Сделали редизайн системы рейтинга пользователей в\u00a0приложении каршеринга',
    year: '2023',
    cats: ['Интерфейсы', 'Исследования'],
  },
  {
    title: 'Газпромбанк Лизинг',
    desc: 'Сделали полный редизайн сайта ведущей лизинговой компании за\u00a03,5 месяца',
    year: '2023',
    cats: ['Веб-дизайн', '3D/Motion-design', 'Сайты корпораций'],
  },
  {
    title: 'Академия ПСБ',
    desc: 'Объединили два образовательных продукта банка в\u00a0единую платформу за\u00a03 месяца',
    year: '2023',
    cats: ['Веб-дизайн', 'Интерфейсы'],
    img: '/images/68062c43896b5aacc7d1381f_Frame 2131331568 (2).webp',
    href: '/projects/sdelali-dizayn-dlya-edinoy-obrazovatelnoy-platformy-akademii-psb-za-3-mesyaca',
  },
  {
    title: 'Иви',
    desc: '1000 изображений за\u00a0месяц: постеры, обложки и\u00a0фоны для\u00a0стримингового каталога',
    year: '2023',
    cats: ['Дизайн коммуникаций'],
    img: '/images/67dc4a4830ca6ba1d7b154f0_Rectangle 1004241 (7).webp',
    imgSrcSet: '/images/67dc4a4830ca6ba1d7b154f0_Rectangle 1004241 (7)-p-500.webp 500w, /images/67dc4a4830ca6ba1d7b154f0_Rectangle 1004241 (7)-p-800.webp 800w, /images/67dc4a4830ca6ba1d7b154f0_Rectangle 1004241 (7)-p-1080.webp 1080w, /images/67dc4a4830ca6ba1d7b154f0_Rectangle 1004241 (7).webp 1248w',
    href: '/projects/1000-izobrazheniy-dlya-onlayn-kinoteatra-ivi-za-mesyac',
  },
  {
    title: 'Simple Group',
    desc: 'Обновили сайт ведущего импортёра алкогольной продукции с\u00a0большой структурой',
    year: '2022',
    cats: ['Веб-дизайн', 'Интерфейсы'],
  },
  {
    title: 'МТС Музыка',
    desc: 'Обновили дизайн мобильного приложения стримингового сервиса',
    year: '2022',
    cats: ['Интерфейсы'],
  },
  {
    title: 'X5 Group',
    desc: 'Сделали корпоративный сайт для\u00a0крупнейшего российского ритейлера',
    year: '2022',
    cats: ['Веб-дизайн', 'Сайты корпораций'],
    img: '/images/682375ca350bb8620663152f_Frame 1948760326.webp',
    imgSrcSet: '/images/682375ca350bb8620663152f_Frame 1948760326-p-500.webp 500w, /images/682375ca350bb8620663152f_Frame 1948760326-p-800.webp 800w, /images/682375ca350bb8620663152f_Frame 1948760326-p-1080.webp 1080w, /images/682375ca350bb8620663152f_Frame 1948760326.webp 1248w',
    href: '/projects/sdelali-korporativnyy-sayt-dlya-krupneyshego-rossiyskogo-riteylera-x5-group',
  },
  {
    title: 'VK',
    desc: 'Моушн для\u00a0кампании «VK под\u00a0шубой» для\u00a03D-куба Catcher в\u00a0Москве',
    year: '2023',
    cats: ['Бренд и\u00a0контент', '3D/Motion-design'],
    img: '/images/67f64a6d38e338cd9daf066b_Rectangle 1004241 (13).webp',
    href: '/projects/novogodniy-promo-rolik-dlya-vk',
  },
  {
    title: 'Росгосстрах',
    desc: 'Переосмыслили сайт к\u00a0100-летнему юбилею компании, создали новую структуру и\u00a0дизайн-систему',
    year: '2021',
    cats: ['Веб-дизайн', 'Сайты корпораций'],
  },
  {
    title: 'Chatex',
    desc: 'Брендинг, чат-бот и\u00a0сайт для\u00a0криптовалютной биржи',
    year: '2021',
    cats: ['Брендинг', 'Бренд и\u00a0контент', 'Веб-дизайн'],
    img: '/images/69aac395a0d2361a5273370f_1.webp',
    imgSrcSet: '/images/69aac395a0d2361a5273370f_1-p-500.webp 500w, /images/69aac395a0d2361a5273370f_1-p-800.webp 800w, /images/69aac395a0d2361a5273370f_1-p-1080.webp 1080w, /images/69aac395a0d2361a5273370f_1.webp 1248w',
    href: '/projects/brending-chat-bot-i-sayt-dlya-kriptovalyutnoy-birzhi-chatex',
  },
  {
    title: 'Best Doctor',
    desc: 'Разработали новый стиль для\u00a0технологичного сервиса ДМС',
    year: '2021',
    cats: ['Брендинг', 'Дизайн коммуникаций'],
  },
  {
    title: 'Азбука Вкуса',
    desc: 'Сделали праздничный моушен для\u00a03D-кубов и\u00a0других поверхностей',
    year: '2023',
    cats: ['Бренд и\u00a0контент', '3D/Motion-design'],
    img: '/images/67f64d243eb24d45fb193fca_Rectangle 1004241 (16).webp',
    href: '/projects/novogodnee-promo-dlya-azbuki-vkusa',
  },
  {
    title: 'Нетология',
    desc: 'Провели масштабный ребрендинг образовательной платформы',
    year: '2020',
    cats: ['Брендинг', 'Дизайн коммуникаций'],
  },
]

export default function ProjectsPage() {
  const [active, setActive] = useState('Все проекты')
  const gridRef = useRef<HTMLDivElement>(null)
  // Stores the Flip state captured BEFORE React updates the DOM
  const flipStateRef = useRef<ReturnType<typeof Flip.getState> | null>(null)
  // Guard: skip hover tweens while Flip animation is running
  const isFlipping = useRef(false)

  // ── Card grid: stagger entrance + horizontal hover ───────────────────────
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return

    const isMobile = window.matchMedia('(max-width: 767px)').matches
    const isPointerFine = window.matchMedia('(pointer: fine)').matches

    const ctx = gsap.context(() => {
      const cards = Array.from(grid.querySelectorAll<HTMLElement>('.case-card-wrapper'))
      if (!cards.length) return

      gsap.fromTo(
        cards,
        { opacity: 0, y: isMobile ? 40 : 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power3.out',
          stagger: { amount: 0.5, from: 'start' },
          scrollTrigger: { trigger: grid, start: 'top 85%', once: true },
        },
      )
    }, grid)

    // Horizontal-only hover — pointer:fine devices only
    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.case-card-wrapper'))
    const cleanups: (() => void)[] = []

    if (isPointerFine) {
      cards.forEach((card) => {
        const img = card.querySelector<HTMLElement>('img.case-card-big___image')

        const onEnter = () => {
          if (isFlipping.current) return
          gsap.to(card, { x: 8, duration: 0.4, ease: 'power2.out', overwrite: 'auto' })
          if (img) gsap.to(img, { scale: 1.05, duration: 0.5, ease: 'power2.out' })
        }

        const onLeave = () => {
          if (isFlipping.current) return
          gsap.to(card, { x: 0, duration: 0.4, ease: 'power2.out', overwrite: 'auto' })
          if (img) gsap.to(img, { scale: 1, duration: 0.4, ease: 'power2.out' })
        }

        card.addEventListener('mouseenter', onEnter)
        card.addEventListener('mouseleave', onLeave)
        card.setAttribute('data-cursor', 'VIEW')

        cleanups.push(() => {
          card.removeEventListener('mouseenter', onEnter)
          card.removeEventListener('mouseleave', onLeave)
        })
      })
    }

    return () => {
      ctx.revert()
      cleanups.forEach((fn) => fn())
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  /** Whether a case card should be visible under the current filter */
  const isVisible = (c: Case) =>
    active === 'Все проекты' || c.cats.includes(active)

  /** Capture Flip snapshot BEFORE React touches the DOM, then update state */
  function handleFilter(cat: string) {
    if (cat === active) return
    const grid = gridRef.current
    if (grid) {
      // Lock current height so the grid never collapses while cards are display:none
      grid.style.minHeight = grid.offsetHeight + 'px'
      // All [data-flip-id] elements must be in the DOM — even hidden ones
      const items = grid.querySelectorAll('[data-flip-id]')
      flipStateRef.current = Flip.getState(items)
    }
    setActive(cat)
  }

  /** After React commits the new DOM, animate from the captured snapshot */
  useLayoutEffect(() => {
    const state = flipStateRef.current
    if (!state) return
    flipStateRef.current = null

    isFlipping.current = true
    Flip.from(state, {
      duration: 0.55,
      ease: 'power1.inOut',
      absolute: true,
      stagger: 0.04,
      onLeave: (els) =>
        gsap.to(els, { opacity: 0, scale: 0.85, duration: 0.25 }),
      onEnter: (els) =>
        gsap.fromTo(els, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 0.35 }),
      onComplete: () => {
        isFlipping.current = false
        const grid = gridRef.current
        if (!grid) return
        // Release the height lock now that the new layout has settled
        grid.style.minHeight = ''
        // Clear Flip's leftover inline scale/opacity so hover starts from a clean slate
        grid.querySelectorAll<HTMLElement>('.case-card-wrapper').forEach((c) => {
          if (c.style.display !== 'none') {
            gsap.set(c, { clearProps: 'scale,opacity,x,y' })
          }
        })
      },
    })
  }, [active])

  return (
    <>
      <div className="portfolio-section">
        <div className="main-container">
          <div className="text-big-wrapper">
            <p className="text-big">Портфолио (2016—..)</p>
          </div>
        </div>
      </div>

      <div className="portfolio-section">
        <div className="main-container">
          <div className="filter-chips-wrapper" style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 8 }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={`text-small is__chip${active === cat ? ' is__chip--active' : ''}`}
                style={{
                  background: active === cat ? '#1a1a1a' : undefined,
                  color: active === cat ? '#fff' : undefined,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="service-cases-section">
        <div className="service-grid" ref={gridRef}>
          {CASES.map((c, index) => {
            const visible = isVisible(c)
            // Include index to guarantee uniqueness even when title+year+cats[0] collide
            // (e.g. two "Сбер х Пушкинский музей 2024" entries with the same first category)
            const flipId = `case-${c.title}-${c.year}-${index}`
            return (
            <div
              key={flipId}
              data-flip-id={flipId}
              className="case-card-wrapper"
              style={visible ? undefined : { display: 'none' }}
            >
              {/* Full-card link — "Подробнее" button is visual-only (pointerEvents:none) */}
              {c.href ? (
                <Link href={c.href} style={{ display: 'block', textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
                  <div className="case-card-big">
                    <div className="case-card-big___left">
                      <div className="case-card-big-top">
                        <div className="cases-item__top-navigation">
                          <div className="cases-item__top-left">
                            {c.cats.map(cat => (
                              <p key={cat} className="text-small is__chip">{cat}</p>
                            ))}
                          </div>
                          <p className="text-regular font-color-medium-grey mob-text-s">{c.year}</p>
                        </div>
                        <div className="cases-item__title-wrapper">
                          <h3 className="h3-bold font-color-black">{c.title}</h3>
                          <h3 className="font-color-dark-gray mb-20">{c.desc}</h3>
                          <div className="case-card-big__btn-wrapper" style={{ pointerEvents: 'none' }}>
                            <span className="small-button small-button--cases w-inline-block">
                              <p className="text-regular small-button-text">Подробнее</p>
                              <div className="small-button-arrow-wrapper">
                                <img alt="" className="small-button-arrow" loading="eager" src="/images/67152c3278a3dccbefe124b3_arrow-grey.svg" />
                                <img alt="" className="button-arrow__active" loading="eager" src="/images/66f6e23524a454603f7d5540_arrow-white.svg" />
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    {c.img && (
                      <div className="case-card-big___right">
                        <img
                          alt={c.title}
                          className="case-card-big___image hide-mobile"
                          loading="lazy"
                          sizes="(max-width: 1248px) 100vw, 1248px"
                          src={c.img}
                          srcSet={c.imgSrcSet}
                          width={1248}
                          height={823}
                        />
                        <img
                          alt={c.title}
                          className="case-card-big___image hide-desktop"
                          loading="lazy"
                          sizes="100vw"
                          src={c.img}
                          srcSet={c.imgSrcSet}
                          width={1248}
                          height={823}
                        />
                      </div>
                    )}
                  </div>
                </Link>
              ) : (
                <div className="case-card-big">
                  <div className="case-card-big___left">
                    <div className="case-card-big-top">
                      <div className="cases-item__top-navigation">
                        <div className="cases-item__top-left">
                          {c.cats.map(cat => (
                            <p key={cat} className="text-small is__chip">{cat}</p>
                          ))}
                        </div>
                        <p className="text-regular font-color-medium-grey mob-text-s">{c.year}</p>
                      </div>
                      <div className="cases-item__title-wrapper">
                        <h3 className="h3-bold font-color-black">{c.title}</h3>
                        <h3 className="font-color-dark-gray mb-20">{c.desc}</h3>
                      </div>
                    </div>
                  </div>
                  {c.img && (
                    <div className="case-card-big___right">
                      <img
                        alt={c.title}
                        className="case-card-big___image hide-mobile"
                        loading="lazy"
                        sizes="(max-width: 1248px) 100vw, 1248px"
                        src={c.img}
                        srcSet={c.imgSrcSet}
                        width={1248}
                        height={823}
                      />
                      <img
                        alt={c.title}
                        className="case-card-big___image hide-desktop"
                        loading="lazy"
                        sizes="100vw"
                        src={c.img}
                        srcSet={c.imgSrcSet}
                        width={1248}
                        height={823}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )
          })}
        </div>
      </div>
    </>
  )
}
