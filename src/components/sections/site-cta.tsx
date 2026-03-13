import { ButtonLink } from '@/components/elements/button'
import { CallToActionWithPhoto } from '@/components/sections/call-to-action-with-photo'

export function SiteCTA() {
  return (
    <CallToActionWithPhoto
      id="cta-photo"
      image={{ src: '/img/photoshoots/TALO.png', alt: 'TALO product photoshoot' }}
      headline="Your first photoshoot for free"
      subheadline="50+ brands improved conversions by an average of 12.68%. Will you do better?"
      cta={
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
          <ButtonLink
            href="https://app.yuzuu.co/signup"
            size="lg"
            target="_blank"
            rel="noopener noreferrer"
            color="light"
          >
            Give it a try now →
          </ButtonLink>
          <p className="text-sm italic text-mist-500">💳 No credit card needed</p>
        </div>
      }
    />
  )
}
