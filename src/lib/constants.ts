export const SITE_VERSION = 'CLDNXT-346203'

/** All service-page slugs — used by Nav to flag the Услуги tab as active */
export const SERVICE_SLUGS = [
  'sites',
  'digital-products',
  'communications-design',
  'multimedia-phygital',
  'outsource-multimedia',
  'outstaff-ai',
  'ai-video',
  'ux-research-redesign',
  'creative-movie-production',
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
  '/outstaff-ai/':               '#FFEC5F',
  '/ai-video/':                  '#f5f5f5',
  '/ux-research-redesign/':      '#EBFAF3',
  '/creative-movie-production/': '#FFF3E6',
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
  { href: '/digital-products/',          label: 'Цифровые продукты' },
  { href: '/communications-design/',     label: 'Дизайн коммуникаций' },
  { href: '/multimedia-phygital/',       label: 'Multimedia\u00a0&\u00a0Phygital' },
  { href: '/outsource-multimedia/',      label: 'Аутсорс мультимедиа' },
  { href: '/outstaff-ai/',               label: 'Аутстафф AI\u2011дизайнеров' },
  { href: '/ai-video/',                  label: 'AI\u2011ролики для OLV\u00a0+\u00a0DOOH' },
  { href: '/ux-research-redesign/',      label: 'UX\u2011исследования при редизайне' },
  { href: '/creative-movie-production/', label: 'Креатив и съёмка роликов' },
] as const
