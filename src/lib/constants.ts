export const SITE_VERSION = process.env.NEXT_PUBLIC_BUILD_ID ?? 'dev'

/** All service-page slugs — used by Nav to flag the Услуги tab as active */
export const SERVICE_SLUGS = [
  'sites',
  'digital-products',
  'communications-design',
  'multimedia-phygital',
  'outsource-multimedia',
  'outstaff-designers',
  'video-production',
  'ai-video',
  'research',
  'ux-research-redesign',
  'creative-movie-production',
  'branding',
  'event-identity',
] as const

export type ServiceSlug = (typeof SERVICE_SLUGS)[number]

/** Per-route accent colour — sets --page-accent CSS variable on <body> */
export const ACCENT_COLORS: Record<string, string> = {
  '/':                           '#f5f5f5',
  '/projects/':                  '#f5f5f5',
  '/contact-us/':                '#f5f5f5',
  '/privacy-policy/':            '#f5f5f5',
  '/sites/':                     '#f5f5f5',
  '/digital-products/':          '#f5f5f5',
  '/communications-design/':     '#f5f5f5',
  '/multimedia-phygital/':       '#f5f5f5',
  '/outsource-multimedia/':      '#f5f5f5',
  '/outstaff-designers/':         '#FFEC5F',
  '/video-production/':           '#f5f5f5',
  '/ai-video/':                  '#f5f5f5',
  '/research/':                   '#f5f5f5',
  '/ux-research-redesign/':      '#EBFAF3',
  '/creative-movie-production/': '#FFF3E6',
  '/branding/':                   '#f5f5f5',
  '/event-identity/':            '#F3EAFF',
  '/talent-hub/':                '#f5f5f5',
}

/** Nav links shown in mobile overlay + desktop bar */
export const NAV_LINKS = [
  { href: '/',           label: 'Главная' },
  { href: '/projects/',  label: 'Портфолио' },
  { href: '/contact-us/', label: 'Контакты' },
] as const

/** Service links inside the Услуги dropdown */
export const SERVICE_LINKS = [
  { href: '/sites/',                     label: 'Сайты' },
  { href: '/communications-design/',     label: 'Дизайн коммуникаций' },
  { href: '/video-production/',           label: 'Видеоролики (AI, CG, съёмки)' },
  { href: '/multimedia-phygital/',       label: 'Мультимедиа для\u00a0музеев, концертов и\u00a0шоу' },
  { href: '/branding/',                   label: 'Брендинг и\u00a0айдентика' },
  { href: '/outstaff-designers/',          label: 'Аутстафф дизайнеров' },
  { href: '/research/',                   label: 'Исследования' },
] as const
