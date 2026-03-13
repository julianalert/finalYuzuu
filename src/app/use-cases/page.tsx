import Image from 'next/image'

import { ButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { SiteCTA } from '@/components/sections/site-cta'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { SiteNavbar } from '@/components/sections/site-navbar'

export default function Page() {
  return (
    <>
      <SiteNavbar />
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        headline="How Brands Use Yuzuu"
        subheadline={
          <p>
            See how e-commerce brands create high-converting product photos with AI.
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
      {/* Use Cases */}
      <FeaturesTwoColumnWithDemos
        id="use-cases"
        className="!pt-0 !mt-0"
        features={
          <>
            <Feature
              className="p-1"
              demo={
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/img/use-cases/creating-new-brand.png"
                    alt="Creating a new brand"
                    width={2000}
                    height={1400}
                    className="w-full h-full object-cover bg-white"
                  />
                </div>
              }
              headline="New Brand Photoshoot"
              subheadline={
                <p>
                  We help e-commerce brands create a complete photoshoot from scratch.
                </p>
              }
              cta={
                <Link href="img/use-cases/creating-new-brand.pdf" className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-semibold text-transparent" target="_blank" rel="noopener noreferrer">
                  See the use case →
                </Link>
              }
            />
            <Feature
              className="p-1"
              demo={
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/img/use-cases/product-page-update.png"
                    alt="Product photo"
                    width={2000}
                    height={1400}
                    className="w-full h-full object-cover"
                  />
                </div>
              }
              headline="Product Page Update"
              subheadline={
                <p>From photos that create doubt to photos that build trust.</p>
              }
              cta={
                <Link href="/img/use-cases/product-page-update.pdf" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text font-semibold text-transparent">
                  See the use case →
                </Link>
              }
            />
            <Feature
              className="p-1"
              demo={
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/img/use-cases/model-consistency.png"
                    alt="Product photo"
                    width={2000}
                    height={1400}
                    className="w-full h-full object-cover"
                  />
                </div>
              }
              headline="Fashion Model Consistency"
              subheadline={
                <p>We ensure consistent model representation across all photos. Especially important for fashion brands.</p>
              }
              cta={
                <Link href="#" target="_blank" rel="noopener noreferrer" className="text-mist-950 dark:text-white">
                  Use case coming soon →
                </Link>
              }
            />
            <Feature
              className="p-1"
              demo={
                <div className="aspect-video overflow-hidden">
                  <Image
                    src="/img/use-cases/new-product-launch.png"
                    alt="Product photo"
                    width={2000}
                    height={1400}
                    className="w-full h-full object-cover"
                  />
                </div>
              }
              headline="New Product Launch"
              subheadline={
                <p>From a simple product photo to a full-blown photoshoot. Studio shots and lifestyle scenes.</p>
              }
              cta={
                <Link href="#" className="text-mist-950 dark:text-white">
                  Use case coming soon →
                </Link>
              }
            />
          </>
        }
      />
      {/* CTA with Photo */}
      <SiteCTA />
    </>
  )
}
