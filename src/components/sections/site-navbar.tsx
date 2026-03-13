import Image from 'next/image'
import { ButtonLink } from '@/components/elements/button'
import {
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
          <NavbarLink href="/#testimonial">Testimonials</NavbarLink>
          <NavbarLink href="/pricing">Pricing</NavbarLink>
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
