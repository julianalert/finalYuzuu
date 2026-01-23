import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Section } from '../elements/section'
import { CheckmarkIcon } from '../icons/checkmark-icon'

export function Plan({
  name,
  price,
  originalPrice,
  period,
  subheadline,
  badge,
  features,
  cta,
  className,
}: {
  name: ReactNode
  price: ReactNode
  originalPrice?: ReactNode
  period?: ReactNode
  subheadline: ReactNode
  badge?: ReactNode
  features: ReactNode[]
  cta: ReactNode
} & ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'flex flex-col justify-between gap-6 rounded-xl bg-mist-950/2.5 p-6 sm:items-start dark:bg-white/5',
        className,
      )}
    >
      <div className="self-stretch">
        <div className="flex items-center justify-between mb-8">
          {badge && (
            <div className="order-last inline-flex rounded-full bg-mist-950/10 px-2 text-xs/6 font-medium text-mist-950 dark:bg-white/10 dark:text-white">
              {badge}
            </div>
          )}

          <h3 className="text-2xl/8 tracking-tight text-mist-950 dark:text-white">{name}</h3>
        </div>
        <div className="flex flex-col gap-1">
          <p className="inline-flex items-baseline gap-1">
            <span className="text-4xl/1 font-bold tracking-tight text-mist-950 dark:text-white">{price}</span>
            {originalPrice ? (
              <span className="inline-flex items-center gap-2">
                <span className="text-base/7 line-through text-mist-500 dark:text-mist-600">{originalPrice}</span>
                <span className="inline-flex rounded-full bg-orange-500/10 px-2 py-0.5 text-xs/6 font-semibold text-orange-500 dark:bg-orange-500/20 dark:text-orange-400">
                  {(() => {
                    try {
                      const original = typeof originalPrice === 'string' ? parseFloat(originalPrice.replace(/[^0-9.]/g, '')) : 0
                      const current = typeof price === 'string' ? parseFloat(price.replace(/[^0-9.]/g, '')) : 0
                      if (original > 0 && current > 0) {
                        const discount = Math.round((1 - current / original) * 100)
                        return `Save ${discount}%`
                      }
                    } catch {}
                    return 'Discount'
                  })()}
                </span>
              </span>
            ) : (
              period && <span className="text-base/7 text-mist-500 dark:text-mist-500">{period}</span>
            )}
          </p>
          {originalPrice && (
            <p className="text-xs/6 text-mist-600 dark:text-mist-500">First order only</p>
          )}
        </div>
        <div className="mt-4 flex flex-col gap-4 text-sm/6 text-mist-700 dark:text-mist-400">{subheadline}</div>
        <ul className="mt-4 space-y-2 text-sm/6 text-mist-700 dark:text-mist-400">
          {features.map((feature, index) => (
            <li key={index} className="flex gap-4">
              <CheckmarkIcon className="h-lh shrink-0 stroke-mist-950 dark:stroke-white" />
              <p>{feature}</p>
            </li>
          ))}
        </ul>
      </div>
      {cta}
    </div>
  )
}

export function PricingMultiTier({
  plans,
  ...props
}: {
  plans: ReactNode
} & ComponentProps<typeof Section>) {
  return (
    <Section {...props}>
      <div className="grid grid-cols-1 gap-2 sm:has-[>:nth-child(5)]:grid-cols-2 sm:max-lg:has-[>:last-child:nth-child(even)]:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none lg:has-[>:nth-child(5)]:grid-flow-row lg:has-[>:nth-child(5)]:grid-cols-3">
        {plans}
      </div>
    </Section>
  )
}
