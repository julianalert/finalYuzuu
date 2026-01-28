import Image from 'next/image'

import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { BeforeAfterSlider } from '@/components/elements/before-after-slider'
import { BeforeAfterSideBySide } from '@/components/elements/before-after-side-by-side'
import { BeforeAfterSideBySideExamples } from '@/components/elements/before-after-side-by-side-examples'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CloudArrowUpIcon } from '@/components/icons/cloud-arrow-up-icon'
import { SparklesIcon } from '@/components/icons/sparkles-icon'
import { PhotoIcon } from '@/components/icons/photo-icon'
import { ShieldExclamationIcon } from '@/components/icons/shield-exclamation-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import { BrandCard, BrandsCardsMultiColumn } from '@/components/sections/brands-cards-multi-column'
import { AfterImagesRowSection } from '@/components/sections/after-images-row'
export default function Page() {
  return (
    <>
      <NavbarWithLinksActionsAndCenteredLogo
        id="navbar"
        links={
          <>
            <NavbarLink href="#brands">How it works?</NavbarLink>
            <NavbarLink href="#features">Use Cases</NavbarLink>
            <NavbarLink href="#testimonial">Testimonials</NavbarLink>
            <NavbarLink href="#pricing">Pricing</NavbarLink>
          </>
        }
        logo={
          <NavbarLogo href="/">
            <Image
              src="/img/logos/yuzuu.svg"
              alt="Yuzuu"
              className="dark:hidden"
              width={85}
              height={28}
            />
            <Image
              src="/img/logos/yuzuu-white.svg"
              alt="Yuzuu"
              className="not-dark:hidden"
              width={85}
              height={28}
            />
          </NavbarLogo>
        }
        actions={
          <>
            <ButtonLink 
              href="#pricing"
              className="!bg-gradient-to-r !from-orange-500 !to-rose-500 !text-white !shadow-lg hover:!from-orange-600 hover:!to-rose-600"
            >
              Your first 5 photos for $7
            </ButtonLink>
          </>
        }
      />
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        
        headline="AI Product Photos that don't look like AI"
        subheadline={
          <p>
            DFY Ultra-realistic studio & lifestyle photos for e-commerce, without hiring models or booking a studio. Perfect for product pages, ads, social media, and more.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#pricing" size="lg">
              Get my first 5 photos for $7
            </ButtonLink>

            <p className="flex items-center gap-2 text-sm italic text-mist-700 dark:text-mist-400">
              <ShieldExclamationIcon className="size-4" /> Unlimited revisions, money back guarantee
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
        headline="AI Product Photos that you'll use on your PDPs."
          subheadline={
            <p>
              Visitors don't say "this looks fake", they just leave. <br />
              <span className="font-semibold">So we create photos & videos that feel real enough to trust.</span>
            </p>
          }
      >
        <BrandCard
          logo={
            <CloudArrowUpIcon className="size-8 text-mist-950 dark:text-white" />
          }
          headline="1. Send your product details"
          text="You send us your product photo, your brand guidelines and your target audience."
          footnote="Takes 2 minutes."
        />
        <BrandCard
          logo={
            <SparklesIcon className="size-8 text-mist-950 dark:text-white" />
          }
          headline="2. We do our magic"
          text="Your product is integrated into ultra-realistic scenes to improve the trustworthiness of your brand."
          footnote="24-48 hours delivery."
        />
        <BrandCard
          logo={
            <PhotoIcon className="size-8 text-mist-950 dark:text-white" />
          }
          headline="3. You get images you'll use on your PDPs"
          text="You finally can use pictures that don't make you look like a fraud."
          footnote="+12.68% conversion rate improvement, based on 24 customers' use cases."
        />
      </BrandsCardsMultiColumn>
      {/* Top Features - Duplicated Cards */}
      <FeaturesTwoColumnWithDemos
        id="top-features"
        className="!pt-0"
        features={
          <>
            <Feature
              className="p-1"
              demo={
                <BeforeAfterSideBySide
                  beforeImage={{
                    src: '/img/products/noomiBefore.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                    className: 'bg-white',
                  }}
                  afterImage={{
                    src: '/img/products/noomiAfter.png',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
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
              className="p-1"
              demo={
                <BeforeAfterSideBySide
                  beforeImage={{
                    src: '/img/products/littleBefore.jpg',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/littleAfter.png',
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
              className="p-1"
              demo={
                <BeforeAfterSideBySide
                  beforeImage={{
                    src: '/img/products/product3.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/result3.png',
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
              className="p-1"
              demo={
                <BeforeAfterSideBySide
                  beforeImage={{
                    src: '/img/products/pwrrrUpdate.jpg',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/pwrrr4.png',
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
              className="p-1"
              demo={
                <BeforeAfterSideBySide
                  beforeImage={{
                    src: '/img/products/bunnyLamp.jpeg',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                    className: 'bg-white',
                  }}
                  afterImage={{
                    src: '/img/products/bunnyLampFinal.png',
                    alt: 'After product photo',
                    width: 2000,
                    height: 1400,
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
              className="p-1"
              demo={
                <BeforeAfterSideBySide
                  beforeImage={{
                    src: '/img/products/bookCover.jpg',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/bookAds.png',
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
      />
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
        headline="It's about making visual content that help e-commerce owners like you make more money."
        subheadline={
          <p>
            We analyze your market, product, and audience to create photos and videos that build trust, and turn attention into revenue.
          </p>
          
        }
      >
        <Stat stat="+12.68%" text="Avg Converion Rate Increase." />
        <Stat stat="+92.45%" text="Retention Rate from our customers" />
      </StatsWithGraph>
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
              We reshaped our whole brand with the help of Yuzuu's service. We're extremely happy with the results. 
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
      {/* More Examples - Duplicated Cards */}
      <FeaturesTwoColumnWithDemos
        id="more-examples"
        className="!pt-0 [&>div>div]:!gap-y-0.5 [&>div>div]:!gap-x-2"
        features={
          <>
            <Feature
              className="!p-0 !bg-transparent [&>div:first-child]:!p-0 [&>div:last-child]:!hidden"
              demo={
                <BeforeAfterSideBySideExamples
                  beforeImage={{
                    src: '/img/products/sezaneBefore.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                    className: 'bg-white',
                  }}
                  afterImage={{
                    src: '/img/products/sezaneAfter.png',
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
                    src: '/img/products/hymacsBefore.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/hymacsAfter.png',
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
                    src: '/img/products/gragioBefore.jpg',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/gragioAfter.png',
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
                    src: '/img/products/bunnyLamp.jpeg',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/lampAfter.png',
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
                    src: '/img/products/beforeArea.png',
                    alt: 'Before product photo',
                    width: 2000,
                    height: 1400,
                  }}
                  afterImage={{
                    src: '/img/products/afterArea.png',
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
      />
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Isn't AI product photography obvious?"
          answer={
            <>
              It usually is.
              <br />
              That's the problem.
              <br />
              <br />
              Most AI photos are over-polished, over-lit, and instantly feel fake.
              <br />
              My approach is the opposite: subtle, imperfect, believable.
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
              Yes — that's exactly what it's built for.
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
              I optimize for:
              <br />
              "This feels real enough to trust."
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
              They won't ask — and that's the point.
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
              You can — and you should, when it makes sense.
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
          question="What if the result doesn't feel right?"
          answer={
            <>
              Then we fix it.
              <br />
              <br />
              If something feels off — lighting, integration, realism — it gets adjusted.
              <br />
              The goal isn't delivery.
              <br />
              The goal is confidence using the image on your PDP.
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
      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="Pricing to fit your business needs."
        subheadline={<p>Not happy with the final pictures? We'll refund you. No questions asked.</p>}
        plans={
          <>
            <Plan
              name="Single Product"
              price="$7"
              originalPrice="$47"
              period="one-time payment"
              badge="First order offer"
              subheadline={<p>Perfect for quick visuals need, launching or updating a new product.</p>}
              features={[
                '5 ultra-realistic photos',
                'Studio + Lifestyle mix',
                '4K Resolution',
                'PDP, ads & socials ready',
                'Visual direction based on your ICPs',
                'Consistent brand identity across all visuals',
                '48 hours delivery',
                'Unlimited revisions',
              ]}
              cta={
                <ButtonLink 
                  href="https://buy.stripe.com/14AbJ2bZI1dugRX4SveME04" 
                  size="lg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="!bg-gradient-to-r !from-orange-500 !to-rose-500 !text-white !shadow-lg hover:!from-orange-600 hover:!to-rose-600"
                >
                  Improve your PDP for $7
                </ButtonLink>
              }
            />
            <Plan
              name="Essentials Pack"
              price="$97"
              period="one-time payment"
              subheadline={<p>Perfect to launch or update a collection of products.</p>}
              badge="Most popular"
              features={[
                'Up to 5 products covered',
                '25 ultra-realistic photos (studio + lifestyle)',
                '4K Resolution',
                'PDP, ads & socials ready',
                'Consistent lighting & mood across SKUs',
                'Visual direction based on your ICPs',
                'Consistent brand identity across all visuals',
                '72 hours delivery',
                'Unlimited revisions',
              ]}
              cta={
                <SoftButtonLink href="https://buy.stripe.com/3cIbJ27Js2hygRXacPeME09" size="lg" target="_blank" rel="noopener noreferrer">
                  Get started for $97
                </SoftButtonLink>
              }
            />
            <Plan
              name="Branding Pack"
              price="$297"
              period="one-time payment"
              subheadline={<p>For brands that want a recognizable, premium look everywhere.</p>}
              features={[
                'Up to 20 products covered',
                '100 ultra-realistic photos (studio + lifestyle) per product',
                'Consistent brand identity across all visuals',
                'Usable across website, ads & socials',
                'Direct communication with the artist',
                '5-days delivery',
                'Unlimited revisions',
              ]}
              cta={
                <SoftButtonLink href="https://buy.stripe.com/4gM6oI8NwaO48lr70DeME08" size="lg" target="_blank" rel="noopener noreferrer">
                  Get started - $297
                </SoftButtonLink>
              }
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
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
      />
    </>
  )
}
