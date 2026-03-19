import Image from 'next/image'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { ButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Container } from '@/components/elements/container'
import { BrandCard, BrandsCardsMultiColumn } from '@/components/sections/brands-cards-multi-column'
import { ComparisonHeroCard, ComparisonTable } from '@/components/sections/competitor-comparison'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { HeroTwoColumnWithPhoto } from '@/components/sections/hero-two-column-with-photo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { SiteCTA } from '@/components/sections/site-cta'
import { SiteNavbar } from '@/components/sections/site-navbar'
import { getAllCompetitorSlugs, getCompetitorBySlug } from '../data'

export async function generateStaticParams() {
  return getAllCompetitorSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const data = getCompetitorBySlug(slug)
  if (!data) return {}

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `https://www.yuzuu.co/alternative-to/${slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
    },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const data = getCompetitorBySlug(slug)
  if (!data) notFound()

  return (
    <>
      <SiteNavbar />

      {/* Hero */}
      <HeroTwoColumnWithPhoto
        eyebrow={
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-700 ring-1 ring-emerald-200">
            <span className="size-1.5 rounded-full bg-emerald-400" />
            {data.heroEyebrow}
          </span>
        }
        headline={
          <>
            {data.heroHeadline.pre}
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
              {data.heroHeadline.emphasis}
            </span>
            {data.heroHeadline.post}
          </>
        }
        subheadline={<p>{data.heroSubheadline}</p>}
        cta={
          <div className="flex flex-wrap items-center gap-4">
            <ButtonLink
              href="https://app.yuzuu.co/signup"
              size="lg"
              target="_blank"
              rel="noopener noreferrer"
              className="!bg-gradient-to-r !from-orange-500 !to-rose-500 !text-white !shadow-lg hover:!from-orange-600 hover:!to-rose-600"
            >
              Try Yuzuu Free →
            </ButtonLink>
            <a href="#comparison" className="text-sm font-medium text-mist-700 hover:text-orange-500">
              See full comparison ↓
            </a>
          </div>
        }
        photo={
          <ComparisonHeroCard
            competitorName={data.name}
            competitorCons={data.quickComparisonCompetitor}
            yuzuuPros={data.quickComparisonYuzuu}
            badge={data.heroBadge}
          />
        }
      />

      {/* Trust Bar */}
      <section className="bg-mist-950 py-5">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {data.trustItems.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-white/70">
                <span className="size-1.5 shrink-0 rounded-full bg-orange-500" />
                {item.bold && <strong className="text-white">{item.bold}</strong>}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Comparison Table */}
      <ComparisonTable competitorName={data.name} intro={data.comparisonIntro} rows={data.comparisonRows} />

      {/* Why Switch */}
      <BrandsCardsMultiColumn
        eyebrow={
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-semibold text-transparent">
            Why Brands Switch
          </span>
        }
        headline={data.whyHeadline}
        subheadline={<p>{data.whySubheadline}</p>}
      >
        {data.whyCards.map((card, i) => (
          <BrandCard
            key={i}
            logo={
              <div className="flex size-12 items-center justify-center rounded-xl bg-mist-950/5 text-2xl">
                {card.emoji}
              </div>
            }
            headline={card.headline}
            text={card.text}
          />
        ))}
      </BrandsCardsMultiColumn>

      {/* Pain Points */}
      <section className="bg-mist-950 py-16">
        <Container className="flex flex-col gap-10 sm:gap-16">
          <div className="flex max-w-2xl flex-col gap-6">
            <div className="flex flex-col gap-2">
              <div className="text-sm/7 font-semibold">
                <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                  Real Problems, Real Solutions
                </span>
              </div>
              <h2 className="font-display text-[2rem]/10 tracking-tight text-pretty text-white sm:text-5xl/14">
                {data.painHeadline}
              </h2>
            </div>
            <p className="text-base/7 text-mist-400">{data.painSubheadline}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.painPoints.map((pain, i) => (
              <div key={i} className="flex flex-col gap-5 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
                <p className="font-display text-base/7 italic text-white/70">&ldquo;{pain.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-xs font-bold text-white">
                    {pain.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">{pain.name}</p>
                    <p className="text-xs text-white/40">{pain.role}</p>
                  </div>
                </div>
                <div className="rounded-lg bg-emerald-500/10 px-4 py-3 ring-1 ring-inset ring-emerald-500/20">
                  <p className="text-sm/6 text-emerald-400">
                    <strong className="text-white">Yuzuu&apos;s approach:</strong> {pain.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <BrandsCardsMultiColumn
        eyebrow={
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-semibold text-transparent">
            Every pixel that screams AI costs you money
          </span>
        }
        headline="AI Product Photos that you won't be ashamed to use."
        subheadline={
          <p>
            Visitors don&apos;t say &ldquo;this looks fake&rdquo;, they just leave.{' '}
            <span className="font-semibold">
              Here, you create studio and lifestyle photos so realistic people don&apos;t question them.
            </span>
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

      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="Transparent pricing, no surprises"
        subheadline={<p>{data.pricingSubheadline}</p>}
        plans={
          <>
            <Plan
              name="50 credits"
              price="$27"
              period="one-time payment"
              subheadline={<p>50 Product Photos (Studio & Lifestyle)</p>}
              features={[
                '4K quality',
                'Unlimited products',
                'Unlimited photoshoots',
                'Unlimited brands',
                'Use anywhere: PDPs, ads, socials, etc...',
              ]}
              cta={
                <SoftButtonLink
                  href="https://app.yuzuu.co/signup"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get 5 photos for free
                </SoftButtonLink>
              }
            />
            <Plan
              name="100 credits"
              price="$47"
              period="one-time payment"
              subheadline={<p>100 Product Photos (Studio & Lifestyle)</p>}
              badge="Most popular"
              features={[
                '4K quality',
                'Unlimited products',
                'Unlimited photoshoots',
                'Unlimited brands',
                'Use anywhere: PDPs, ads, socials, etc...',
              ]}
              cta={
                <ButtonLink
                  href="https://app.yuzuu.co/signup"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!bg-gradient-to-r !from-orange-500 !to-rose-500 !text-white !shadow-lg hover:!from-orange-600 hover:!to-rose-600"
                >
                  Get 5 photos for free
                </ButtonLink>
              }
            />
            <Plan
              name="200 credits"
              price="$97"
              period="one-time payment"
              subheadline={<p>200 Product Photos (Studio & Lifestyle)</p>}
              features={[
                '4K quality',
                'Unlimited products',
                'Unlimited photoshoots',
                'Unlimited brands',
                'Use anywhere: PDPs, ads, socials, etc...',
              ]}
              cta={
                <SoftButtonLink
                  href="https://app.yuzuu.co/signup"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get 5 photos for free
                </SoftButtonLink>
              }
            />
          </>
        }
      />

      {/* FAQ */}
      <FAQsTwoColumnAccordion headline="Common questions" subheadline={`Everything you need to know before switching from ${data.name} or traditional photography.`}>
        {data.faqs.map((faq, i) => (
          <Faq key={i} id={`faq-alt-${i}`} question={faq.question} answer={<p>{faq.answer}</p>} />
        ))}
      </FAQsTwoColumnAccordion>

      {/* CTA */}
      <SiteCTA />
    </>
  )
}
