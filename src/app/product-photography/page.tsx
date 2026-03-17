import type { Metadata } from 'next'
import Image from 'next/image'

import { ButtonLink } from '@/components/elements/button'
import { SiteCTA } from '@/components/sections/site-cta'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { SiteNavbar } from '@/components/sections/site-navbar'
import { SiloCategoryCardsSection } from '@/components/sections/silo-category-cards'
import { AfterImagesRowSection } from '@/components/sections/after-images-row'
import { BrandCard, BrandsCardsMultiColumn } from '@/components/sections/brands-cards-multi-column'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Container } from '@/components/elements/container'
import { industries, products, styles } from './data'

const SILO_CARDS = [
  { id: '1', title: 'Product Photography', category: 'Studio', image: '/img/product-photography/product-photography.png' },
  { id: '2', title: 'Fashion Photography', category: 'Fashion', image: '/img/product-photography/fashion-product-hotography.png' },
  { id: '3', title: 'Fashion Photo', category: 'Fashion', image: '/img/product-photography/fashion-product-photo.png' },
  { id: '4', title: 'Food & Supplements', category: 'Food', image: '/img/product-photography/food-supplements-photo.png' },
  { id: '5', title: 'Home Decor', category: 'Home', image: '/img/product-photography/home-decor-photography.png' },
  { id: '6', title: 'Lifestyle', category: 'Lifestyle', image: '/img/product-photography/lifestyle-product-photo.png' },
  { id: '7', title: 'Studio', category: 'Studio', image: '/img/product-photography/studio-photo.png' },
]

export const metadata: Metadata = {
  title: 'AI Product Photography — All Styles, Products & Industries | Yuzuu',
  description:
    'Explore AI-generated product photography by industry, product type, and visual style. Studio, lifestyle, cinematic, UGC and more — created in minutes, not days.',
  alternates: {
    canonical: 'https://www.yuzuu.co/product-photography',
  },
}

export default function Page() {
  return (
    <>
      <SiteNavbar />

      <HeroLeftAlignedWithDemo
        id="hero"
        headline="Product Photography: Ideas, Examples & Styles"
        subheadline={
          <p>
            Explore product photography ideas, styles, and examples for different industries and products. Get inspiration and generate professional product photos instantly.
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
              Generate 5 photos for free
            </ButtonLink>
            <p className="flex items-center gap-2 text-sm italic text-mist-700 dark:text-mist-400">
              💳 no credit card needed
            </p>
          </div>
        }
        demo={<AfterImagesRowSection cards={SILO_CARDS} />}
      />

      <SiloCategoryCardsSection
        id="by-industry"
        title="Product Photography By Industry"
        description="Product photography tailored to your sector: beauty, fashion, electronics, food, and more."
        items={industries}
      />

      <SiloCategoryCardsSection
        id="by-product"
        title="Product Photography By Product"
        description="From perfume to gaming mice, find the exact product photography you need and see how you can easily create it with AI."
        items={products}
      />

      <SiloCategoryCardsSection
        id="by-style"
        title="Product Photography By Style"
        description="Studio-clean, cinematic, UGC, luxury, flatlay: choose the visual style that fits your brand."
        items={styles}
      />

      <SiteCTA />

      <BrandsCardsMultiColumn
        id="how-it-works"
        headline="How it works"
        subheadline={
          <p>
            Three steps. No studio. No photographer. Just great product photos.
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

      <FAQsTwoColumnAccordion
        id="faqs"
        headline="Product Photography FAQs"
        subheadline={
          <p>Everything you need to know about product photography.</p>
        }
      >
        <Faq
          id="pp-faq-1"
          question="What is product photography?"
          answer={
            <>
              <p>
                Product photography is the practice of photographing physical goods to use in marketing, e-commerce listings, ads, and social media. The goal is simple: make a product look as appealing and trustworthy as possible so shoppers feel confident buying it.
              </p>
              <p>
                Good product photography does more than show what something looks like. It communicates quality, builds brand identity, and removes the doubt that stops people from clicking "Add to Cart". It's one of the highest-leverage investments any e-commerce brand can make.
              </p>
            </>
          }
        />
        <Faq
          id="pp-faq-2"
          question="How do you photograph products for e-commerce?"
          answer={
            <>
              <p>
                Traditional e-commerce product photography involves a camera, controlled lighting (usually softboxes or a light tent), a backdrop (typically white or grey), and a tripod. You shoot multiple angles, then edit in post-production to correct colour, remove shadows, and clean up the background.
              </p>
              <p>
                It takes equipment, skill, and time, which is why most brands spend thousands per shoot. With AI product photography like Yuzuu, you skip all of that: upload a photo of your product, and our AI generates studio-quality and lifestyle images in under a minute, ready to publish directly to your product pages.
              </p>
            </>
          }
        />
        <Faq
          id="pp-faq-3"
          question="What background is best for product photography?"
          answer={
            <>
              <p>
                It depends on the context. For marketplace listings (Amazon, Shopify, etc.), a pure white background (#FFFFFF) is the industry standard: clean, distraction-free, and required by most platforms. For brand websites and social media, coloured, textured, or lifestyle backgrounds perform better because they create mood and context.
              </p>
              <p>
                The best background is the one that matches where the photo will be used. With AI, you don't have to choose. Generate the same product on a white studio background for your PDP, then drop it into a lifestyle scene for your ads, all from the same original photo.
              </p>
            </>
          }
        />
        <Faq
          id="pp-faq-4"
          question="What lighting is used for product photography?"
          answer={
            <>
              <p>
                The most common setups are softbox lighting (diffused, even light that minimises harsh shadows), ring lights (popular for small products and cosmetics), and natural window light (free, soft, but inconsistent). Professional studios use a combination of key lights, fill lights, and rim lights to shape the product and separate it from the background.
              </p>
              <p>
                Getting lighting right is one of the hardest parts of product photography. It takes practice and expensive gear. AI-generated product photos sidestep the problem entirely: our models are trained on thousands of professional shoots, so the lighting is always consistent, controlled, and optimised for your product type without touching a single light switch.
              </p>
            </>
          }
        />
        <Faq
          id="pp-faq-5"
          question="Can AI generate product photography?"
          answer={
            <>
              <p>
                Yes, and it's far more capable than most people expect. Modern AI product photography tools like Yuzuu can place your real product into ultra-realistic studio and lifestyle scenes that are indistinguishable from a professional shoot. The AI preserves your product's exact appearance (colours, labels, textures, shape) while generating a completely new, photorealistic environment around it.
              </p>
              <p>
                This isn't a filter or a simple background remover. It's a full creative system that understands lighting, perspective, depth, and brand aesthetics. Brands using Yuzuu have seen an average 12.68% improvement in conversion rate, because the photos look real and are built on real product images.
              </p>
            </>
          }
        />
      </FAQsTwoColumnAccordion>

      <section id="what-is-product-photography" className="py-12">
        <Container className="flex flex-col gap-8">
          <h2 className="font-display text-4xl/12 tracking-tight text-mist-950 dark:text-white sm:text-5xl/16">
            What is Product Photography?
          </h2>
          <div className="flex flex-col gap-4 text-sm/7 text-mist-700 dark:text-mist-400">
            <p>
              Product photography is the practice of creating high-quality images that showcase a product in the most
              appealing and informative way possible. These images are used on e-commerce stores, marketplaces, ads, and
              social media to help potential customers understand what the product looks like and why they should buy it.
            </p>
            <p>
              In online shopping, product photos often matter more than the product description. Since customers can't
              touch or try the item, the images must communicate details like texture, quality, size, and design. Strong
              product photography builds trust, highlights the product's key features, and makes a brand look more
              professional.
            </p>
            <p>
              There are several styles commonly used in product photography.{' '}
              <strong className="font-semibold text-mist-950 dark:text-white">Studio photography</strong> focuses on
              clean backgrounds and controlled lighting to clearly present the product.{' '}
              <strong className="font-semibold text-mist-950 dark:text-white">Lifestyle photography</strong> places the
              product in real-world situations to help customers imagine using it.{' '}
              <strong className="font-semibold text-mist-950 dark:text-white">Minimalist shots</strong> use simple
              compositions to emphasize the product itself, while{' '}
              <strong className="font-semibold text-mist-950 dark:text-white">cinematic product photography</strong>{' '}
              uses dramatic lighting and mood to create a more premium or emotional look.
            </p>
            <p>
              The right style depends on the product, the brand identity, and where the image will be used: whether on
              a product page, a marketplace listing, or an advertising campaign.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
