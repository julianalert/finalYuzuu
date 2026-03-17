import Image from 'next/image'
import { ButtonLink } from '@/components/elements/button'
import {
  NavbarDropdown,
  NavbarDropdownItem,
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'

export function SiteNavbar() {
  return (
    <NavbarWithLinksActionsAndCenteredLogo
      id="navbar"
      links={
        <>
          <NavbarLink href="/#brands">How it works?</NavbarLink>
          <NavbarLink href="/use-cases">Use Cases</NavbarLink>
          <NavbarLink href="/pricing">Pricing</NavbarLink>
          <NavbarDropdown label="Resources">
            <NavbarDropdownItem
              href="/guide"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="url(#guide-gradient)" className="size-5">
                  <defs>
                    <linearGradient id="guide-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                </svg>
              }
              title="Guide"
              subtitle="How to create product photography with AI"
            />
            <NavbarDropdownItem
              href="/blog"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="url(#blog-gradient)" className="size-5">
                  <defs>
                    <linearGradient id="blog-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              }
              title="Blog"
              subtitle="Guides and insights on AI product photography"
            />
          </NavbarDropdown>
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
          <NavbarLink href="https://app.yuzuu.co/signin" target="_blank" rel="noopener noreferrer">
            Log in
          </NavbarLink>
          <ButtonLink
            href="https://app.yuzuu.co/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="!bg-gradient-to-r !from-orange-500 !to-rose-500 !text-white !shadow-lg hover:!from-orange-600 hover:!to-rose-600"
          >
            Get 5 photos for free
          </ButtonLink>
        </>
      }
    />
  )
}
