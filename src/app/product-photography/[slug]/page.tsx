import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'

import { Breadcrumbs } from '@/components/elements/breadcrumbs'
import { ButtonLink } from '@/components/elements/button'
import { SiteCTA } from '@/components/sections/site-cta'
import { HeroTwoColumnWithPhoto } from '@/components/sections/hero-two-column-with-photo'
import { SiteNavbar } from '@/components/sections/site-navbar'
import { SiloPhotographyTips } from '@/components/sections/silo-photography-tips'
import { BrandCard, BrandsCardsMultiColumn } from '@/components/sections/brands-cards-multi-column'
import { SiloCategoryCardsSection } from '@/components/sections/silo-category-cards'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { SiloBestStyles } from '@/components/sections/silo-best-styles'
import { SiloPhotoExamples } from '@/components/sections/silo-photo-examples'
import { getItemBySlug, getAllSlugs, FALLBACK_IMAGE, FALLBACK_TIPS, FALLBACK_FAQS, FALLBACK_EXAMPLES, industries } from '../data'

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
    title: `${item.heroTitle} | Yuzuu`,
    description: item.description,
    alternates: {
      canonical: `https://www.yuzuu.co/product-photography/${slug}`,
    },
    openGraph: {
      title: `${item.heroTitle} | Yuzuu`,
      description: item.description,
      ...(item.image && {
        images: [{ url: `https://www.yuzuu.co${item.image}`, width: 1200, height: 630, alt: item.heroTitle }],
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${item.heroTitle} | Yuzuu`,
      description: item.description,
      ...(item.image && { images: [`https://www.yuzuu.co${item.image}`] }),
    },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const item = getItemBySlug(slug)

  if (!item) notFound()

  const siloFaqs = item.faqs ?? FALLBACK_FAQS
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: siloFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer.join(' ') },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.yuzuu.co' },
      { '@type': 'ListItem', position: 2, name: 'Product Photography', item: 'https://www.yuzuu.co/product-photography' },
      { '@type': 'ListItem', position: 3, name: item.heroTitle, item: `https://www.yuzuu.co/product-photography/${slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <SiteNavbar />

      <HeroTwoColumnWithPhoto
        id="hero"
        eyebrow={
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Product Photography', href: '/product-photography' },
              { label: item.label },
            ]}
          />
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
        photo={
          <div className="flex items-center justify-center w-full h-full">
            <Image
              src={item.image ?? FALLBACK_IMAGE}
              alt={item.heroTitle}
              width={800}
              height={600}
              className="w-full h-auto max-h-96 object-contain rounded-xl"
            />
          </div>
        }
      />

      <SiloPhotographyTips
        id="tips"
        subject={item.label}
        tips={item.tips ?? FALLBACK_TIPS}
      />

      <SiloPhotoExamples
        id="examples"
        industry={item.label}
        examples={item.examples ?? FALLBACK_EXAMPLES}
      />

      {item.bestStyles && item.bestStyles.length > 0 && (
        <SiloBestStyles
          id="best-styles"
          industry={item.label}
          styles={item.bestStyles}
        />
      )}

      <BrandsCardsMultiColumn
        id="how-it-works"
        eyebrow={
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-semibold text-transparent">
            How it works
          </span>
        }
        headline="Three steps. No studio. No photographer. Just great product photos."
        subheadline={
          <p>
            Here, you create studio and lifestyle photos so realistic people don't question them.
          </p>
        }
      >
        <BrandCard
          headline="1. Upload your product photos"
          text="PNG, JPG, or WebP format. Up to 10 photos at a time."
          footnote="Takes 2 seconds."
          image={
            <Image
              src="/img/photoshoots/upload.png"
              alt="Upload your product photos"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          }
        />
        <BrandCard
          headline="2. Our AI Creative Director does the magic"
          text="Your product is integrated into ultra-realistic scenes to improve the trustworthiness of your brand."
          footnote="Takes 30 seconds."
          image={
            <Image
              src="/img/photoshoots/magic.png"
              alt="We do our magic"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          }
        />
        <BrandCard
          headline="3. Your photoshoot is ready"
          text="You finally can use pictures that don't make you look like a fraud."
          footnote="+12.68% conversion rate improvement, based on 50+ customers' use cases."
          image={
            <Image
              src="/img/photoshoots/output.png"
              alt="You get images that don't scream AI"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          }
        />
      </BrandsCardsMultiColumn>

      <SiteCTA />

      <SiloCategoryCardsSection
        id="by-industry"
        title="Product Photography By Industry"
        description="Product photography tailored to your sector: beauty, fashion, electronics, food, and more."
        items={industries}
      />

      <FAQsTwoColumnAccordion
        id="faqs"
        headline={`${item.label} Product Photography FAQ`}
        subheadline={
          <p>Common questions about {item.label.toLowerCase()} product photography, answered.</p>
        }
      >
        {(item.faqs ?? FALLBACK_FAQS).map((faq, i) => (
          <Faq
            key={i}
            id={`faq-${item.slug}-${i}`}
            question={faq.question}
            answer={faq.answer.map((p, j) => <p key={j}>{p}</p>)}
          />
        ))}
      </FAQsTwoColumnAccordion>
    </>
  )
}
