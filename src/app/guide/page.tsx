import Image from 'next/image'

import { Eyebrow } from '@/components/elements/eyebrow'
import { GuideSignupForm } from '@/components/elements/guide-signup-form'
import { Section } from '@/components/elements/section'
import { Subheading } from '@/components/elements/subheading'
import { Text } from '@/components/elements/text'
import { CheckmarkIcon } from '@/components/icons/checkmark-icon'
import { BrandCard, BrandsCardsMultiColumn } from '@/components/sections/brands-cards-multi-column'
import { HeroWithDemoOnBackground } from '@/components/sections/hero-with-demo-on-background'
import { SiteNavbar } from '@/components/sections/site-navbar'
import { TestimonialLargeQuote } from '@/components/sections/testimonial-with-large-quote'

const outcomes = [
  'Say no to photographer fees and delays (goodbye the $5k invoice).',
  "Create product photos people don't question.",
  'Create tons of variations depending on your needs: Ads, PDPs, socials, launches.',
  'Make infinite versions without losing consistency: different angles, backgrounds, seasons, campaigns — but the same brand style.',
  'Control the output with no compromises: no back and forth, no waiting for revisions.',
  'Test as many variations as you want without losing time or money.',
  'Focus on what matters most for your business: no more wasted time managing timelines, coordinating people for photoshoots, etc.',
]

const comingNext = [
  'How to Create Consistent Models',
  'How to Create Ads That Convert',
  'How to Create a Complete Brand Photoshoot',
]

export default function GuidePage() {
  return (
    <>
      <SiteNavbar />

      {/* Hero */}
      <HeroWithDemoOnBackground
        id="hero"
        headline="The complete guide to AI product photography"
        subheadline={
          <p>
            Everything you need to know to create ultra-realistic product photos with AI.
          </p>
        }
        cta={<GuideSignupForm className="max-w-full" />}
        demo={
          <Image
            src="/img/ai-product-photography-guide.png"
            alt="AI product photography guide"
            width={3440}
            height={1500}
          />
        }
      />

      {/* What's inside */}
      <BrandsCardsMultiColumn
        className="!pt-0"
        id="how-it-works"
        eyebrow={
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-semibold text-transparent">
            What's inside
          </span>
        }
        headline="A complete suite of courses to help you master AI product photography."
        subheadline={
          <p>
            We're giving you our secret sauce to create studio and lifestyle photos so realistic people don't question them.
          </p>
        }
      >
        <BrandCard
          headline="How to create studio photos with AI"
          text="Includes tools used, workflows, prompts, examples and step-by-step guide."
          image={
            <Image
              src="/img/guide/ai-studio-photo.png"
              alt="How to create studio photos with AI"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          }
        />
        <BrandCard
          headline="How to create product photos with AI"
          text="Includes tools used, workflows, prompts, examples and step-by-step guide."
          image={
            <Image
              src="/img/guide/ai-product-photo.webp"
              alt="How to create product photos with AI"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          }
        />
        <BrandCard
          headline="How to create lifestyle photos"
          text="Includes tools used, workflows, prompts, examples and step-by-step guide."
          image={
            <Image
              src="/img/guide/ai-lifestyle-photo.png"
              alt="How to create lifestyle photos"
              width={800}
              height={500}
              className="w-full object-cover"
            />
          }
        />
      </BrandsCardsMultiColumn>

      

      {/* Coming next */}
      <Section className="!pt-0">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Eyebrow>
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                Coming next
              </span>
            </Eyebrow>
            <Subheading>More chapters on the way</Subheading>
          </div>
          <div className="flex flex-col divide-y divide-mist-950/10 dark:divide-white/10">
            {comingNext.map((title) => (
              <div key={title} className="flex items-center justify-between gap-4 py-5">
                <span className="text-base font-medium text-mist-950 dark:text-white">{title}</span>
                <span className="shrink-0 inline-flex rounded-full px-2 py-0.5 text-xs/6 font-semibold bg-orange-500/10 text-orange-500 dark:bg-orange-500/20 dark:text-orange-400">
                  Coming soon
                </span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonial */}
      <TestimonialLargeQuote
        id="testimonial"
        media={
          <div className="flex items-center gap-4 sm:gap-6">
            <Image
              src="/img/guide/bookCover.webp"
              alt="AI Product Photography Guide cover"
              width={300}
              height={420}
              className="rounded-lg shadow-lg h-32 sm:h-44 w-auto"
            />
            <Image
              src="/img/guide/bookAfter.webp"
              alt="AI Product Photography Guide pages"
              width={300}
              height={420}
              className="rounded-lg shadow-lg h-32 sm:h-44 w-auto"
            />
          </div>
        }
        quote={
          <p>
            I used to spend $3,000 on a photoshoot every quarter. Now I get better results in 30 minutes for a fraction of the price. The guide helped me understand exactly how to get the most out of AI product photography.
          </p>
        }
        img={
          <Image
            src="/img/avatars/amir.jpg"
            alt=""
            className="not-dark:bg-white/75 dark:bg-black/75"
            width={160}
            height={160}
          />
        }
        name="Amir J. Blake"
        byline="Author of Make Britain Poor Again"
      />

       

      

     
    </>
  )
}
