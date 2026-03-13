import { ButtonLink, SoftButtonLink } from '@/components/elements/button'
import { SiteCTA } from '@/components/sections/site-cta'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { SiteNavbar } from '@/components/sections/site-navbar'

export default function Page() {
  return (
    <>
      <SiteNavbar />
      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="It's time to say goodbye to $10k photoshoots"
        subheadline={
          <p>
            Get studio &amp; lifestyle photos for your e-commerce brand, without hiring models or booking a studio.
          </p>
        }
        plans={
          <>
            <Plan
              name="50 credits"
              price="$27"
              period="one-time payment"
              subheadline={<p>50 Product Photos (Studio & Lifestyle)</p>}
              features={[
                '4K quality',
                'Unlimited products',
                'Unlimited photoshoots',
                'Unlimited brands',
                'Use anywhere: PDPs, ads, socials, etc...',
              ]}
              cta={
                <SoftButtonLink
                  href="https://app.yuzuu.co/signup"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get 5 photos for free
                </SoftButtonLink>
              }
            />
            <Plan
              name="100 credits"
              price="$47"
              period="one-time payment"
              subheadline={<p>100 Product Photos (Studio & Lifestyle)</p>}
              badge="Most popular"
              features={[
                '4K quality',
                'Unlimited products',
                'Unlimited photoshoots',
                'Unlimited brands',
                'Use anywhere: PDPs, ads, socials, etc...',
              ]}
              cta={
                <ButtonLink
                  href="https://app.yuzuu.co/signup"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="!bg-gradient-to-r !from-orange-500 !to-rose-500 !text-white !shadow-lg hover:!from-orange-600 hover:!to-rose-600"
                >
                  Get 5 photos for free
                </ButtonLink>
              }
            />
            <Plan
              name="200 credits"
              price="$97"
              period="one-time payment"
              subheadline={<p>200 Product Photos (Studio & Lifestyle)</p>}
              features={[
                '4K quality',
                'Unlimited products',
                'Unlimited photoshoots',
                'Unlimited brands',
                'Use anywhere: PDPs, ads, socials, etc...',
              ]}
              cta={
                <SoftButtonLink
                  href="https://app.yuzuu.co/signup"
                  size="lg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get 5 photos for free
                </SoftButtonLink>
              }
            />
          </>
        }
      />
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Questions & Answers">
        <Faq
          id="faq-1"
          question="Isn't AI product photography obvious?"
          answer={
            <>
              It usually is. That's the problem.
              <br />
              Most AI photos are over-polished, over-lit, and instantly feel fake.
              <br />
              Our algorithm's approach is the opposite: subtle, imperfect, believable.
              <br />
              <br />
              If someone can tell it's AI, the job failed.
            </>
          }
        />
        <Faq
          id="faq-2"
          question="Will this work on real product pages, not just ads?"
          answer={
            <>
              Yes, and that's exactly what it's built for.
              <br />
              <br />
              These photos are designed to live on:
              <br />
              • PDPs
              <br />
              • Landing pages
              <br />
              • Paid ads
              <br />
              • Marketplaces
              <br />
              <br />
              They don't scream "campaign visual".
              <br />
              They blend in like a real studio shoot.
            </>
          }
        />
        <Faq
          id="faq-3"
          question="Are you redesigning or 'improving' my product?"
          answer={
            <>
              No.
              <br />
              <br />
              Your product stays 100% unchanged:
              <br />
              • Same proportions
              <br />
              • Same colors
              <br />
              • Same textures
              <br />
              • Same packaging details
              <br />
              <br />
              No creative interpretation.
              <br />
              No AI "enhancement".
            </>
          }
        />
        <Faq
          id="faq-4"
          question="How is this different from other AI photo tools?"
          answer={
            <>
              Most tools optimize for:
              <br />
              "Wow, this looks cool."
              <br />
              <br />
              Our tool optimize for:
              <br />
              "This feels real, I trust it."
              <br />
              <br />
              That means:
              <br />
              • Natural lighting (not studio-perfect)
              <br />
              • Realistic environments
              <br />
              • No AI smoothing or glow
              <br />
              • No stock-photo stiffness
              <br />
              <br />
              Conversion beats novelty. Every time.
            </>
          }
        />
        <Faq
          id="faq-5"
          question="Will customers know this was made with AI?"
          answer={
            <>
              They won't ask and that's the point.
              <br />
              <br />
              People don't think:
              <br />
              "Is this AI?"
              <br />
              <br />
              They think:
              <br />
              "Do I trust this product?"
              <br />
              <br />
              If the photo feels real, the question never comes up.
            </>
          }
        />
        <Faq
          id="faq-6"
          question="Why not just do a real photoshoot?"
          answer={
            <>
              You can and you should, when it makes sense.
              <br />
              <br />
              But real shoots are:
              <br />
              • Expensive
              <br />
              • Slow
              <br />
              • Hard to iterate
              <br />
              • Painful to reshoot for every variation
              <br />
              <br />
              This gives you studio-quality results, faster, cheaper, and without coordination hell.
            </>
          }
        />
        <Faq
          id="faq-7"
          question="Does the AI hallucinate sometimes?"
          answer={
            <>
              Yes, it happens.
              <br />
              <br />
              AI can occasionally distort a label, duplicate a design element, or misread a texture.
              <br />
              <br />
              It's not common, so no worries. But it's real, as with every other AI tool.
            </>
          }
        />
        <Faq
          id="faq-8"
          question="Who is this NOT for?"
          answer={
            <>
              Good question.
              <br />
              <br />
              This is not for:
              <br />
              • AI art projects
              <br />
              • Fantasy visuals
              <br />
              • Over-stylized branding
              <br />
              • People chasing trends instead of sales
              <br />
              <br />
              It's for brands who care about trust and conversion.
            </>
          }
        />
      </FAQsTwoColumnAccordion>
      {/* CTA with Photo */}
      <SiteCTA />
    </>
  )
}
