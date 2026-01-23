import Image from 'next/image'

import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { BeforeAfterSlider } from '@/components/elements/before-after-slider'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CloudArrowUpIcon } from '@/components/icons/cloud-arrow-up-icon'
import { SparklesIcon } from '@/components/icons/sparkles-icon'
import { PhotoIcon } from '@/components/icons/photo-icon'
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

export default function Page() {
  return (
    <>
      <NavbarWithLinksActionsAndCenteredLogo
        id="navbar"
        links={
          <>
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
            <ButtonLink href="#">Your first 5 photos for $1</ButtonLink>
          </>
        }
      />
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        
        headline="AI Product Photos that you'll use on your PDPs"
        subheadline={
          <p>
            DFY Ultra-realistic product & lifestyle photos for e-commerce, without hiring models or booking a studio. Perfect for product pages, ads, social media, and more.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <ButtonLink href="#" size="lg">
              Get my first 5 photos for $1
            </ButtonLink>

            <PlainButtonLink href="#" size="lg">
              See how it works <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <BeforeAfterSlider
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
        }
      />
      {/* Brands */}
      <BrandsCardsMultiColumn
        id="brands"
        eyebrow="How it works?"
        headline="Every pixel that screams AI costs you money."
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
          text="Your product is integrated into ultra-realistic scenes."
          footnote="24-48 hours delivery."
        />
        <BrandCard
          logo={
            <PhotoIcon className="size-8 text-mist-950 dark:text-white" />
          }
          headline="3. You get conversion-optimized images"
          text="You can use the images on your PDP, ads, social media, and more."
          footnote="Immediate impact on your sales."
        />
      </BrandsCardsMultiColumn>
      {/* Features */}
      <FeaturesTwoColumnWithDemos
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
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="It's not about making beautiful photos"
        headline="It's about making visual content that help e-commerce owners like you make more money."
        subheadline={
          <p>
            We analyze your market, product and target audience. We understand data to create photos & videos that works. Aka that print $$$. Period.
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
        subheadline={<p>We've given these customers a significant discount in exchange for their honest reviews.</p>}
      >
        <Testimonial
          quote={
            <p>
              Oatmeal has completely transformed our customer support operations. To be fair, we weren't doing any
              customer support at all so the bar was pretty low.
            </p>
          }
          img={
            <Image
              src="/img/avatars/10-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Jordan Rogers"
          byline="Founder at Anomaly"
        />
        <Testimonial
          quote={
            <p>
              We use Oatmeal's automation features to make cancellation requests disappear into a black hole, improving
              our retention rates by over 300%.
            </p>
          }
          img={
            <Image
              src="/img/avatars/15-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Lynn Marshall"
          byline="Founder at Pine Labs"
        />
        <Testimonial
          quote={
            <p>
              I've been using the spare time that Oatmeal has freed up to work not just one, but two other jobs, all
              while hitting my core KPIs. My bosses have no idea.
            </p>
          }
          img={
            <Image
              src="/img/avatars/13-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Rajat Singh"
          byline="Head of Support at Concise"
        />
        <Testimonial
          quote={
            <p>
              Oatmeal has given us key insights into how much our customers absolutely hate using our product and how we
              can improve it to stop them from leaving us.
            </p>
          }
          img={
            <Image
              src="/img/avatars/12-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="John Walters"
          byline="CPO at Orbital"
        />
        <Testimonial
          quote={
            <p>
              As a solo founder, Oatmeal has been a lifesaver. It makes it look like Looply is an actual company with
              multiple employees, when in reality it's just me and an AI.
            </p>
          }
          img={
            <Image
              src="/img/avatars/11-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Noah Gold"
          byline="CEO at Looply"
        />
        <Testimonial
          quote={
            <p>
              Thanks to Oatmeal, we've managed to cut our support costs in half by laying off dozens of employees, while
              still improving response times and customer satisfaction.
            </p>
          }
          img={
            <Image
              src="/img/avatars/14-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Mark Levinson"
          byline="COO at Quirk"
        />
      </TestimonialThreeColumnGrid>
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
        plans={
          <>
            <Plan
              name="Starter"
              price="$12"
              period="/mo"
              subheadline={<p>Small teams getting started with shared inboxes</p>}
              features={[
                'Shared inbox for up to 2 mailboxes',
                'Tagging & assignment',
                'Private notes',
                'Automatic replies',
                'Email support',
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
                </SoftButtonLink>
              }
            />
            <Plan
              name="Growth"
              price="$49"
              period="/mo"
              subheadline={<p>Growing teams needing collaboration and insights</p>}
              badge="Most popular"
              features={[
                'Everything in Starter',
                'Inbox Agent',
                'Unlimited mailboxes',
                'Collision detection',
                'Snippets and templates',
                'Reporting dashboard',
                'Slack integration',
              ]}
              cta={
                <ButtonLink href="#" size="lg">
                  Start free trial
                </ButtonLink>
              }
            />
            <Plan
              name="Pro"
              price="$299"
              period="/mo"
              subheadline={<p>Support-focused organizations and larger teams</p>}
              features={[
                'Everything in Growth',
                'Custom roles & permissions',
                'Automation engine',
                'API access',
                'SLA tracking',
                'SSO support',
                'SOC 2 compliance',
              ]}
              cta={
                <SoftButtonLink href="#" size="lg">
                  Start free trial
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
