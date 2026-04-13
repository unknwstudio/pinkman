import type { MetadataRoute } from 'next'
import casesData from '@/lib/cases.json'

const BASE = 'https://pinkman.ru'

const STATIC_PAGES: MetadataRoute.Sitemap = [
  { url: `${BASE}/`,                          lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
  { url: `${BASE}/projects/`,                 lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
  { url: `${BASE}/sites/`,                    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/digital-products/`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/communications-design/`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/multimedia-phygital/`,      lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  { url: `${BASE}/outsource-multimedia/`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/ai-video/`,                 lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/creative-movie-production/`,lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/outstaff-designers/`,        lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/ux-research-redesign/`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
  { url: `${BASE}/contact-us/`,               lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  { url: `${BASE}/privacy-policy/`,           lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const casePages: MetadataRoute.Sitemap = Object.keys(casesData).map((slug) => ({
    url: `${BASE}/projects/${slug}/`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.6,
  }))

  return [...STATIC_PAGES, ...casePages]
}
