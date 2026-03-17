import { Main } from '@/components/elements/main'
import { FooterNewsletterForm } from '@/components/elements/footer-newsletter-form'
import { XIcon } from '@/components/icons/social/x-icon'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  SocialLink,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Product Photos that do not look like AI - Yuzuu',
  description:
    'Ultra-realistic studio & lifestyle photos for e-commerce, without hiring models or booking a studio. Perfect for PDPs, ads, and social media.',
  keywords: [
    'AI product photography',
    'e-commerce photos',
    'product images',
    'lifestyle photography',
    'AI photography service',
    'PDP images',
    'conversion optimization',
  ],
  authors: [{ name: 'Yuzuu' }],
  creator: 'Yuzuu',
  metadataBase: new URL('https://www.yuzuu.co'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.yuzuu.co',
    siteName: 'Yuzuu',
    title: 'AI Product Photos that do not look like AI - Yuzuu',
    description:
      'Ultra-realistic studio & lifestyle photos for e-commerce, without hiring models or booking a studio.',
    images: [
      {
        url: 'https://www.yuzuu.co/img/thumbnail.png',
        width: 1200,
        height: 630,
        alt: 'Yuzuu AI Product Photography',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Product Photos that do not look like AI - Yuzuu',
    description:
      'DFY Ultra-realistic studio & lifestyle photos for e-commerce, without hiring models or booking a studio.',
    creator: '@notanothermrktr',
    images: ['https://www.yuzuu.co/img/thumbnail.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="a1af78f4-e22c-412d-9149-42af8e3897e4"
          strategy="afterInteractive"
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17912302186"
          strategy="afterInteractive"
        />
        <Script id="google-adwords" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17912302186');
          `}
        </Script>
        <>
          <Main>{children}</Main>

          <FooterWithNewsletterFormCategoriesAndSocialIcons
            id="footer"
            cta={
              <FooterNewsletterForm
                headline="Stay in the loop"
                subheadline={
                  <p>Get tips, product updates, and inspiration for your next AI product shoot.</p>
                }
              />
            }
            links={
              <>
                <FooterCategory title="Product">
                  <FooterLink href="/#brands">How it works</FooterLink>
                  <FooterLink href="/use-cases">Use cases</FooterLink>
                  <FooterLink href="/pricing">Pricing</FooterLink>
                  <FooterLink href="https://app.yuzuu.co/signup" target="_blank" rel="noopener noreferrer">Get started</FooterLink>
                </FooterCategory>
                <FooterCategory title="Resources">
                  <FooterLink href="/guide">Guide</FooterLink>
                  <FooterLink href="/blog">Blog</FooterLink>
                </FooterCategory>
                <FooterCategory title="Help center">
                  <FooterLink href="mailto:hello@yuzuu.co">Contact us</FooterLink>
                </FooterCategory>
              </>
            }
            fineprint="© 2026 Yuzuu, Inc · Built with 🧡 from 🇫🇷"
            socialLinks={
              <SocialLink href="https://x.com/juliendvr" name="X">
                <XIcon />
              </SocialLink>
            }
          />
        </>
      </body>
    </html>
  )
}
