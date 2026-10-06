import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

/* Gera /robots.txt, que estava retornando 404, e aponta o sitemap para
   o Google encontrá-lo sozinho. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // A rota de API só recebe o POST do formulário; não há o que indexar.
      disallow: '/api/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
