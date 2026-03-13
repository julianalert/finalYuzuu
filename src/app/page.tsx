import Image from 'next/image'

import { Container } from '@/components/elements/container'
import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { BeforeAfterSlider } from '@/components/elements/before-after-slider'
import { BeforeAfterSideBySideExamples } from '@/components/elements/before-after-side-by-side-examples'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { ShieldExclamationIcon } from '@/components/icons/shield-exclamation-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { SiteCTA } from '@/components/sections/site-cta'
import { SiteNavbar } from '@/components/sections/site-navbar'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'
import { BrandCard, BrandsCardsMultiColumn } from '@/components/sections/brands-cards-multi-column'
import { AfterImagesRowSection } from '@/components/sections/after-images-row'
export default function Page() {
  return (
    <>
      <SiteNavbar />
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        
        headline="AI Product Photos that don't look like AI"
        subheadline={
          <p>
            Ultra-realistic studio & lifestyle photos for e-commerce, without hiring models or booking a studio. Perfect for product pages, ads, social media, and more.
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
               🔥 1,337 photos created this week
            </p>
          </div>
        }
        demo={
          <>
            <AfterImagesRowSection />
            {/* <BeforeAfterSlider
              className="rounded-lg"
              wallpaper="blue"
              placement="bottom"
              beforeImage={{
                src: '/img/products/afterArea.png',
                alt: 'Before product photo',
                width: 2000,
                height: 1400,
              }}
              afterImage={{
                src: '/img/products/beforeArea.png',
                alt: 'After product photo',
                width: 2000,
                height: 1400,
              }}
            />
            */}
          </>
        }
      />
      {/* Brands */}
      <BrandsCardsMultiColumn
        id="brands"
        eyebrow={
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-semibold text-transparent">
            Every pixel that screams AI costs you money
          </span>
        }
        headline="AI Product Photos that you won't be ashamed to use."
          subheadline={
            <p>
              Visitors don't say "this looks fake", they just leave. <br />
              <span className="font-semibold">Here, you create studio and lifestyle photos so realistic people don’t question them.</span>
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
          footnote="+12.68% conversion rate improvement, based on 24 customers' use cases."
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
      {/* Features */}
      {/* <FeaturesTwoColumnWithDemos
        id="features"
        className="!pt-0"
        features={
          <>
            <Feature
              demo={
                <BeforeAfterSlider
                  wallpaper="purple"
                  placement="bottom"
                  beforeImage={{
                    src: '/img/products/noomiAfter.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/noomiBefore.png',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                    className: 'bg-white',
                  }}
                />
              }
              headline="PDP Update"
              subheadline={
                <p>
                  We help you update your PDP with new photos that are more realistic and engaging.
                </p>
              }

            />
            <Feature
              demo={
                <BeforeAfterSlider
                  wallpaper="blue"
                  placement="bottom"
                  beforeImage={{
                    src: '/img/products/littleAfter.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/littleBefore.jpg',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                  }}
                />
              }
              headline="Quick Visuals Need"
              subheadline={
                <p>Sometimes, you need a quick visual to get your point across. You take a quick picture of your product and we make it look good.</p>
              }
            />
            <Feature
              demo={
                <BeforeAfterSlider
                  wallpaper="blue"
                  placement="bottom"
                  beforeImage={{
                    src: '/img/products/result3.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/product3.png',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                  }}
                />
              }
              headline="Lifestyle Photos without the Hassle"
              subheadline={
                <p>We create lifestyle photos that are perfect for your product. No need to hire a model or book a studio.</p>
              }
            />
            <Feature
              demo={
                <BeforeAfterSlider
                  wallpaper="purple"
                  placement="bottom"
                  beforeImage={{
                    src: '/img/products/pwrrr4.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/pwrrrUpdate.jpg',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                  }}
                />
              }
              headline="Conversion Rate Improvement"
              subheadline={
                <p>We turn bad AI photos into good ones. So you re establish trust with your customers. And sell more.</p>
              }
            />
            <Feature
              demo={
                <BeforeAfterSlider
                  wallpaper="green"
                  placement="bottom"
                  beforeImage={{
                    src: '/img/products/bunnyLampFinal.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/bunnyLamp.jpeg',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                    className: 'bg-white',
                  }}
                />
              }
              headline="Product Launch"
              subheadline={
                <p>
                  We create product & lifestyle photos to help you launch your product and get more sales.
                </p>
              }

            />
            <Feature
              demo={
                <BeforeAfterSlider
                  wallpaper="brown"
                  placement="bottom"
                  beforeImage={{
                    src: '/img/products/bookAds.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/bookCover.jpg',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                  }}
                />
              }
              headline="Paid Ads Materials"
              subheadline={
                <p>We create photos that are perfect for paid ads.</p>
              }
            />
          </>
        }
      /> */}
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow={
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-semibold text-transparent">
            It's not about making beautiful photos
          </span>
        }
        headline="It's about making professional photos that helps you sell more."
        subheadline={
          <p>
            Our AI Creative Director analyzes your market, product, and audience to create photos that build trust, and turn attention into revenue.
          </p>
          
        }
      >
        <Stat stat="+12.68%" text="Avg Converion Rate Increase." />
        <Stat stat="+92.45%" text="Retention Rate from our customers" />
      </StatsWithGraph>
      {/* More Examples - Duplicated Cards */}
      {/* <FeaturesTwoColumnWithDemos
        id="more-examples"
        className="!pt-0 [&>div>div]:!gap-y-0.5 [&>div>div]:!gap-x-2"
        features={
          <>
            <Feature
              className="!p-0 !bg-transparent [&>div:first-child]:!p-0 [&>div:last-child]:!hidden"
              demo={
                <BeforeAfterSideBySideExamples
                  beforeImage={{
                    src: '/img/products/littleBefore.jpg',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                    className: 'bg-white',
                  }}
                  afterImage={{
                    src: '/img/products/littleAfter.png',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                  }}
                />
              }
              headline={null}
              subheadline={null}
            />
            <Feature
              className="!p-0 !bg-transparent [&>div:first-child]:!p-0 [&>div:last-child]:!hidden"
              demo={
                <BeforeAfterSideBySideExamples
                  beforeImage={{
                    src: '/img/products/coffee-product-photo.webp',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/coffee3.png',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                  }}
                />
              }
              headline={null}
              subheadline={null}
            />
            <Feature
              className="!p-0 !bg-transparent [&>div:first-child]:!p-0 [&>div:last-child]:!hidden"
              demo={
                <BeforeAfterSideBySideExamples
                  beforeImage={{
                    src: '/img/products/product3.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/ai-lifestyle-product-photo.png',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                  }}
                />
              }
              headline={null}
              subheadline={null}
            />
            <Feature
              className="!p-0 !bg-transparent [&>div:first-child]:!p-0 [&>div:last-child]:!hidden"
              demo={
                <BeforeAfterSideBySideExamples
                  beforeImage={{
                    src: '/img/products/model.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/fashionAfter.png',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                  }}
                />
              }
              headline={null}
              subheadline={null}
            />
            <Feature
              className="!p-0 !bg-transparent [&>div:first-child]:!p-0 [&>div:last-child]:!hidden"
              demo={
                <BeforeAfterSideBySideExamples
                  beforeImage={{
                    src: '/img/products/pwrrrBefore.jpg',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                    className: 'bg-white',
                  }}
                  afterImage={{
                    src: '/img/products/pwrrrAfter.png',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                  }}
                />
              }
              headline={null}
              subheadline={null}
            />
            <Feature
              className="!p-0 !bg-transparent [&>div:first-child]:!p-0 [&>div:last-child]:!hidden"
              demo={
                <BeforeAfterSideBySideExamples
                  beforeImage={{
                    src: '/img/products/BURBUJA.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/burbuja-room-photo-3.png',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
                  }}
                />
              }
              headline={null}
              subheadline={null}
            />
          </>
        }
      /> */}
      {/* Industry Cards */}
      <section id="industries" className="py-16">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <p className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-semibold text-transparent text-sm">
              See the transformation
            </p>
            <h2 className="font-display text-[2rem]/10 tracking-tight text-pretty text-mist-950 sm:text-5xl/14 dark:text-white">
            Works for any kind of product
            </h2>
            <p className="text-base/7 text-mist-700 dark:text-mist-400 max-w-2xl">
              From a plain product shot to a complete ai product photoshoot, tailored to your brand. All powered by AI and automated. 
            </p>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <BrandCard
          headline="Sport & Outdoor"
          text="High-energy visuals that put your gear in the field — trails, courts, and tracks. No studio. No compromise."
          footnote=""
          image={
            <Image
              src="/img/photoshoots/ai-product-photo-sport.png"
              alt="AI sport product photo"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          }
        />
        <BrandCard
          headline="Kids & Baby"
          text="Warm, playful scenes that build trust with parents. Your products look exactly as safe and fun as they are."
          footnote=""
          image={
            <Image
              src="/img/photoshoots/ai-product-photo-kids.png"
              alt="AI kids product photo"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          }
        />
        <BrandCard
          headline="Food & Beverage"
          text="Mouth-watering lifestyle shots that make people hungry just scrolling. No food stylist required."
          footnote=""
          image={
            <Image
              src="/img/photoshoots/ai-product-photo-food.png"
              alt="AI food product photo"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          }
        />
        <BrandCard
          headline="Home & Living"
          text="Cozy, aspirational interiors that make your home products feel like they already belong in someone's space."
          footnote=""
          image={
            <Image
              src="/img/photoshoots/ai-product-photo-home.png"
              alt="AI home product photo"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
            />
          }
        />
          </div>
        </Container>
      </section>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="What our customers are saying"
        
      >
        <Testimonial
          quote={
            <p>
              The pictures look amazing! Used them for my ads. They were perfect.
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
          name="Amir J Blake"
          byline="Author of Make Britain Poor Again"
        />
        <Testimonial
          quote={
            <p>
              We reshaped our whole brand with the help of Yuzuu. We're extremely happy with the results. 
            </p>
          }
          img={
            <Image
              src="/img/avatars/sarah.png"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Sarah Marshall"
          byline="Founder at Noomi"
        />
        <Testimonial
          quote={
            <p>
              All the pictures were great! We launched a paid ads campaign on TikTok and got one of our best performance. Can't recommend enough!
            </p>
          }
          img={
            <Image
              src="/img/avatars/ian.png"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Ian MacEachern"
          byline="Founder at Hymacs"
        />
      </TestimonialThreeColumnGrid>
      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="It's time to say goodbye to $10k photoshoots"
        subheadline={
          <p>
            Get studio &amp; lifestyle photos for your e-commerce brand, without hiring models or booking a studio.
          </p>
        }
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
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Isn't AI product photography obvious?"
          answer={
            <>
              It usually is. That's the problem.
              <br />
              Most AI photos are over-polished, over-lit, and instantly feel fake.
              <br />
              Our algorithm's approach is the opposite: subtle, imperfect, believable.
              <br />
              <br />
              If someone can tell it's AI, the job failed.
            </>
          }
        />
        <Faq
          id="faq-2"
          question="Will this work on real product pages, not just ads?"
          answer={
            <>
              Yes, and that's exactly what it's built for.
              <br />
              <br />
              These photos are designed to live on:
              <br />
              • PDPs
              <br />
              • Landing pages
              <br />
              • Paid ads
              <br />
              • Marketplaces
              <br />
              <br />
              They don't scream "campaign visual".
              <br />
              They blend in like a real studio shoot.
            </>
          }
        />
        <Faq
          id="faq-3"
          question="Are you redesigning or 'improving' my product?"
          answer={
            <>
              No.
              <br />
              <br />
              Your product stays 100% unchanged:
              <br />
              • Same proportions
              <br />
              • Same colors
              <br />
              • Same textures
              <br />
              • Same packaging details
              <br />
              <br />
              No creative interpretation.
              <br />
              No AI "enhancement".
            </>
          }
        />
        <Faq
          id="faq-4"
          question="How is this different from other AI photo tools?"
          answer={
            <>
              Most tools optimize for:
              <br />
              "Wow, this looks cool."
              <br />
              <br />
              Our tool optimize for:
              <br />
              "This feels real, I trust it."
              <br />
              <br />
              That means:
              <br />
              • Natural lighting (not studio-perfect)
              <br />
              • Realistic environments
              <br />
              • No AI smoothing or glow
              <br />
              • No stock-photo stiffness
              <br />
              <br />
              Conversion beats novelty. Every time.
            </>
          }
        />
        <Faq
          id="faq-5"
          question="Will customers know this was made with AI?"
          answer={
            <>
              They won't ask and that's the point.
              <br />
              <br />
              People don't think:
              <br />
              "Is this AI?"
              <br />
              <br />
              They think:
              <br />
              "Do I trust this product?"
              <br />
              <br />
              If the photo feels real, the question never comes up.
            </>
          }
        />
        <Faq
          id="faq-6"
          question="Why not just do a real photoshoot?"
          answer={
            <>
              You can and you should, when it makes sense.
              <br />
              <br />
              But real shoots are:
              <br />
              • Expensive
              <br />
              • Slow
              <br />
              • Hard to iterate
              <br />
              • Painful to reshoot for every variation
              <br />
              <br />
              This gives you studio-quality results, faster, cheaper, and without coordination hell.
            </>
          }
        />
        <Faq
          id="faq-7"
          question="Does the AI hallucinate sometimes?"
          answer={
            <>
              Yes, it happens.
              <br />
              <br />
              AI can occasionally distort a label, duplicate a design element, or misread a texture.
              <br />
              <br />
              It's not common, so no worries. But it's real, as with every other AI tool.
            </>
          }
        />
        <Faq
          id="faq-8"
          question="Who is this NOT for?"
          answer={
            <>
              Good question.
              <br />
              <br />
              This is not for:
              <br />
              • AI art projects
              <br />
              • Fantasy visuals
              <br />
              • Over-stylized branding
              <br />
              • People chasing trends instead of sales
              <br />
              <br />
              It's for brands who care about trust and conversion.
            </>
          }
        />
      </FAQsTwoColumnAccordion>
      {/* CTA with Photo */}
      <SiteCTA />
      {/* Pack examples 
      <section className="py-16" aria-labelledby="pack-examples-heading">
        <Container className="flex flex-col gap-10">
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-xl bg-mist-200 dark:bg-mist-800 aspect-[4/3]">
              <Image
                src="/img/examples/example1.png"
                alt="Example result 1 – pack illustration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative overflow-hidden rounded-xl bg-mist-200 dark:bg-mist-800 aspect-[4/3]">
              <Image
                src="/img/examples/example2.png"
                alt="Example result 2 – pack illustration"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </section> */}
      {/* Call To Action */}
      {/*<CallToActionSimple
        id="call-to-action"
        headline="Do you have a custom project in mind?"
        subheadline={
          <p>
            On-demand service for high-volume requests or full AI brand photoshoots.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="mailto:hello@yuzuu.co" size="lg">
            Contact us
            </ButtonLink>

            
          </div>
        }
      />*/}
    </>
  )
}
