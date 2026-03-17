import Image from 'next/image'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import rehypeSlug from 'rehype-slug'

import { BlogToc } from '@/components/elements/blog-toc'
import { Container } from '@/components/elements/container'
import { CategoryPrompt } from '@/components/elements/category-prompt'
import { PromptAnatomy } from '@/components/elements/prompt-anatomy'
import { PromptComparison } from '@/components/elements/prompt-comparison'
import { PromptInclude } from '@/components/elements/prompt-include'
import { Document } from '@/components/elements/document'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { SiteCTA } from '@/components/sections/site-cta'
import { SiteNavbar } from '@/components/sections/site-navbar'
import { extractToc, getPost } from '@/lib/blog'

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)

  if (!post) {
    notFound()
  }

  const toc = extractToc(post.content)

  return (
    <>
      <SiteNavbar />

      <section className="py-16">
        <Container className="flex flex-col gap-10 sm:gap-16">
          {/* Header */}
          <div className="flex flex-col items-center gap-6">
            <p className="text-sm/7 font-semibold text-mist-700 dark:text-mist-400">
              <a
                href="/blog"
                className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent"
              >
                ← Blog
              </a>
            </p>
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
                components={{ CategoryPrompt, PromptComparison, PromptAnatomy, PromptInclude }}
              />
            </Document>
          </div>
        </Container>
      </section>

      <SiteCTA />
    </>
  )
}
