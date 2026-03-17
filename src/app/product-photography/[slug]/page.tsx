import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { ButtonLink } from '@/components/elements/button'
import { SiteCTA } from '@/components/sections/site-cta'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { SiteNavbar } from '@/components/sections/site-navbar'
import { getItemBySlug, getAllSlugs } from '../data'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = getItemBySlug(slug)

  if (!item) return {}

  return {
    title: `${item.heroTitle} — AI-Generated | Yuzuu`,
    description: item.description,
    alternates: {
      canonical: `https://www.yuzuu.co/product-photography/${slug}`,
    },
    openGraph: {
      title: `${item.heroTitle} — AI-Generated | Yuzuu`,
      description: item.description,
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const item = getItemBySlug(slug)

  if (!item) notFound()

  return (
    <>
      <SiteNavbar />

      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={
          <p className="text-sm/7 font-semibold text-mist-700 dark:text-mist-400">
            <a
              href="/product-photography"
              className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"
            >
              ← Product Photography
            </a>
          </p>
        }
        headline={item.heroTitle}
        subheadline={<p>{item.description}</p>}
        cta={
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <ButtonLink
              href="https://app.yuzuu.co/signup"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="!bg-gradient-to-r !from-orange-500 !to-rose-500 !text-white !shadow-lg hover:!from-orange-600 hover:!to-rose-600"
            >
              Get 5 photos for free
            </ButtonLink>
            <p className="flex items-center gap-2 text-sm italic text-mist-700 dark:text-mist-400">
              💳 no credit card needed
            </p>
          </div>
        }
      />

      <SiteCTA />
    </>
  )
}
