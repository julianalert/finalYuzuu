import type { Metadata } from 'next'

import { Link } from '@/components/elements/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { HeroSimpleCentered } from '@/components/sections/hero-simple-centered'
import { SiteNavbar } from '@/components/sections/site-navbar'

export const metadata: Metadata = {
  title: 'Page Not Found | Yuzuu',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <>
      <SiteNavbar />
      <HeroSimpleCentered
        headline="Page not found"
        subheadline={<p>Sorry, but the page you were looking for could not be found.</p>}
        cta={
          <Link href="/">
            Go back home <ArrowNarrowRightIcon />
          </Link>
        }
      />
    </>
  )
}
