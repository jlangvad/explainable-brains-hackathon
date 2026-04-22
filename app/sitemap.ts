import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: '2026-04-22',
      changeFrequency: 'weekly',
      priority: 1,
    },
  ]
}
