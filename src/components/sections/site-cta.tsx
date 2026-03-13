import { ButtonLink } from '@/components/elements/button'
import { CallToActionWithPhoto } from '@/components/sections/call-to-action-with-photo'

export function SiteCTA() {
  return (
    <CallToActionWithPhoto
      id="cta-photo"
      image={{ src: '/img/photoshoots/TALO.png', alt: 'TALO product photoshoot' }}
      headline="Your first photoshoot for free"
      subheadline="Give it a try now, the results might surprise you. It won't cost you anything."
      cta={
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
          <ButtonLink
            href="https://app.yuzuu.co/signup"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            color="light"
          >
            Let's get started →
          </ButtonLink>
          <p className="text-sm italic text-mist-500">💳 No credit card needed</p>
        </div>
      }
    />
  )
}
