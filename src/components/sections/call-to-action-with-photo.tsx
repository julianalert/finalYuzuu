import Image from 'next/image'
import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'

export function CallToActionWithPhoto({
  headline,
  subheadline,
  cta,
  className,
  ...props
}: {
  headline: ReactNode
  subheadline?: ReactNode
  cta?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-mist-950 dark:bg-mist-900">
          <div className="flex flex-col lg:flex-row">
            {/* Text side */}
            <div className="flex flex-col justify-center gap-6 px-10 py-14 lg:w-1/2 lg:px-16 lg:py-20">
              <h2 className="font-display text-[2rem]/10 tracking-tight text-pretty text-white sm:text-5xl/14">
                {headline}
              </h2>
              {subheadline && (
                <p className="text-base/7 text-mist-400">{subheadline}</p>
              )}
              {cta && <div>{cta}</div>}
            </div>

            {/* Photo side */}
            <div className="relative lg:w-1/2">
              <div className="aspect-[4/3] w-full lg:aspect-auto lg:h-full lg:min-h-[420px]">
                <Image
                  src="/img/photoshoots/atelier du chocolat2.png"
                  alt="Atelier du Chocolat product photoshoot"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
