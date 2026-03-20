import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/pricing2', '/404'],
      },
    ],
    sitemap: 'https://www.yuzuu.co/sitemap.xml',
  }
}
