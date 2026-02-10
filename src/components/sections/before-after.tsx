import type { ComponentProps } from 'react'
import { BeforeAfterSideBySide } from '../elements/before-after-side-by-side'
import { Feature, FeaturesTwoColumnWithDemos } from './features-two-column-with-demos'

export function BeforeAfterSection(
  props: Omit<ComponentProps<typeof FeaturesTwoColumnWithDemos>, 'features'>
) {
  return (
    <FeaturesTwoColumnWithDemos
      id="top-features"
      className="!pt-0"
      {...props}
      features={
        <>
          <Feature
            className="p-1"
            demo={
              <BeforeAfterSideBySide
                showBadges={false}
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
                showBadges={false}
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
                showBadges={false}
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
                showBadges={false}
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
                showBadges={false}
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
                showBadges={false}
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
  )
}
