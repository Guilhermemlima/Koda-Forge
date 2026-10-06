import type { MetadataRoute } from 'next'
import { SITE_URL, ROUTES } from '@/lib/site'

/* Gera /sitemap.xml. O diagnóstico apontou que ele não existia, e sem ele
   o Google demora mais para descobrir as páginas. */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
