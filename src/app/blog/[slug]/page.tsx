import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'

import { BlogToc } from '@/components/elements/blog-toc'
import { Container } from '@/components/elements/container'
import { BlogFaq } from '@/components/elements/blog-faq'
import { CategoryPrompt } from '@/components/elements/category-prompt'
import { DecisionGrid } from '@/components/elements/decision-grid'
import { PromptAnatomy } from '@/components/elements/prompt-anatomy'
import { PromptComparison } from '@/components/elements/prompt-comparison'
import { PromptInclude } from '@/components/elements/prompt-include'
import { ToolCard, ToolQuote, ToolVerdict } from '@/components/elements/tool-card'
import { ToolsComparisonTable } from '@/components/elements/tools-comparison-table'
import { Document } from '@/components/elements/document'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { Breadcrumbs } from '@/components/elements/breadcrumbs'
import { Link } from '@/components/elements/link'
import { SiteCTA } from '@/components/sections/site-cta'
import { SiteNavbar } from '@/components/sections/site-navbar'
import { extractToc, getAllPosts, getPost } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Yuzuu`,
    description: post.excerpt,
    alternates: {
      canonical: `https://www.yuzuu.co/blog/${slug}`,
    },
    openGraph: {
      title: `${post.title} | Yuzuu`,
      description: post.excerpt,
      type: 'article',
      images: [
        {
          url: `https://www.yuzuu.co${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | Yuzuu`,
      description: post.excerpt,
      images: [`https://www.yuzuu.co${post.image}`],
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  const toc = extractToc(post.content)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: `https://www.yuzuu.co${post.image}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      '@type': 'Organization',
      name: 'Yuzuu',
      url: 'https://www.yuzuu.co',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Yuzuu',
      logo: { '@type': 'ImageObject', url: 'https://www.yuzuu.co/img/thumbnail.png' },
    },
    mainEntityOfPage: `https://www.yuzuu.co/blog/${slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.yuzuu.co' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.yuzuu.co/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.yuzuu.co/blog/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteNavbar />

      <section className="py-16">
        <Container className="flex flex-col gap-10 sm:gap-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-6">
            <Breadcrumbs
              items={[
                { label: 'Home', href: '/' },
                { label: 'Blog', href: '/blog' },
                { label: post.title },
              ]}
            />
            <Heading className="max-w-3xl text-center">{post.title}</Heading>
            <Text size="lg" className="flex max-w-xl flex-col gap-4 text-center">
              <p>Published on {post.date}</p>
            </Text>
          </div>

          {/* Cover image */}
          <div className="mx-auto w-full max-w-3xl overflow-hidden rounded-xl outline -outline-offset-1 outline-black/5 dark:outline-white/5">
            <Image
              src={post.image}
              alt={post.imageAlt}
              width={2000}
              height={1400}
              className="w-full object-cover"
              priority
            />
          </div>

          {/* TOC + Content */}
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-[220px_1fr]">
            {/* TOC */}
            <BlogToc entries={toc} />

            {/* Post body */}
            <Document className="min-w-0 max-w-2xl">
              <MDXRemote
                source={post.content}
                options={{
                  mdxOptions: {
                    rehypePlugins: [rehypeSlug],
                  },
                }}
                components={{
                  img: (props) => (
                    <Image
                      src={props.src ?? ''}
                      alt={props.alt ?? ''}
                      width={1200}
                      height={800}
                      className="rounded-lg"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                  ),
                  BlogFaq,
                  CategoryPrompt,
                  DecisionGrid,
                  PromptComparison,
                  PromptAnatomy,
                  PromptInclude,
                  ToolCard,
                  ToolQuote,
                  ToolVerdict,
                  ToolsComparisonTable,
                }}
              />
            </Document>
          </div>
        </Container>
      </section>

      <SiteCTA />

      {(() => {
        const relatedPosts = getAllPosts().filter((p) => p.slug !== slug)
        if (relatedPosts.length === 0) return null
        return (
          <section className="py-16">
            <Container className="flex flex-col gap-8">
              <h2 className="font-display text-2xl/8 tracking-tight text-mist-950 dark:text-white sm:text-3xl/10">
                Keep reading
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group flex flex-col gap-3 rounded-xl p-1 transition-colors"
                  >
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        width={800}
                        height={560}
                        className="h-full w-full bg-white object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-xs text-mist-500">{p.date}</p>
                      <p className="text-sm font-semibold text-mist-950 group-hover:text-orange-500 dark:text-white dark:group-hover:text-orange-400">
                        {p.title}
                      </p>
                      <p className="line-clamp-2 text-sm text-mist-600 dark:text-mist-400">{p.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        )
      })()}
    </>
  )
}
