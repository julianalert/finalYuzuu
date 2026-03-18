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
              href="/product-photography"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="url(#pp-gradient)" className="size-5">
                  <defs>
                    <linearGradient id="pp-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#f43f5e" />
                    </linearGradient>
                  </defs>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                </svg>
              }
              title="Product Photography"
              subtitle="Browse all industries, products and styles"
            />
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
