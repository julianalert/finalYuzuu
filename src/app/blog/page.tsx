import Image from 'next/image'

import { ButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { SiteCTA } from '@/components/sections/site-cta'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { SiteNavbar } from '@/components/sections/site-navbar'
import { getAllPosts } from '@/lib/blog'

export default function Page() {
  const posts = getAllPosts()

  return (
    <>
      <SiteNavbar />
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        headline="Blog"
        subheadline={
          <p>
            Guides, tips, and insights on product photography for e-commerce brands, with or without AI.
          </p>
        }
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
      {/* Blog Posts */}
      <FeaturesTwoColumnWithDemos
        id="blog-posts"
        className="!pt-0 !mt-0"
        features={
          <>
            {posts.map((post) => (
              <Feature
                key={post.slug}
                className="p-1"
                demo={
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.imageAlt}
                        width={2000}
                        height={1400}
                        className="w-full h-full object-cover bg-white transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>
                }
                headline={
                  <Link href={`/blog/${post.slug}`} className="hover:underline">
                    {post.title}
                  </Link>
                }
                subheadline={
                  <>
                    <p className="text-xs text-mist-500 dark:text-mist-500">{post.date}</p>
                    <p>{post.excerpt}</p>
                  </>
                }
                cta={
                  <Link
                    href={`/blog/${post.slug}`}
                    className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-semibold text-transparent"
                  >
                    Read article →
                  </Link>
                }
              />
            ))}
          </>
        }
      />
      {/* CTA */}
      <SiteCTA />
    </>
  )
}
