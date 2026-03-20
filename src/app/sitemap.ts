import type { MetadataRoute } from 'next'

import { getAllPosts } from '@/lib/blog'
import { getAllSlugs as getAllProductPhotographySlugs } from './product-photography/data'
import { getAllCompetitorSlugs } from './alternative-to/data'

const BASE_URL = 'https://www.yuzuu.co'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/product-photography`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/pricing`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/use-cases`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/guide`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
  ]

  const blogPages: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const productPhotographyPages: MetadataRoute.Sitemap = getAllProductPhotographySlugs().map((slug) => ({
    url: `${BASE_URL}/product-photography/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const alternativePages: MetadataRoute.Sitemap = getAllCompetitorSlugs().map((slug) => ({
    url: `${BASE_URL}/alternative-to/${slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages, ...productPhotographyPages, ...alternativePages]
}
