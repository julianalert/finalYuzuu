import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '../elements/container'
import { Document } from '../elements/document'
import { Heading } from '../elements/heading'
import { Text } from '../elements/text'

export function DocumentCentered({
  headline,
  subheadline,
  eyebrow,
  media,
  intro,
  className,
  children,
  ...props
}: {
  headline: ReactNode
  subheadline?: ReactNode
  eyebrow?: ReactNode
  media?: ReactNode
  intro?: ReactNode
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container className="flex flex-col gap-10 sm:gap-16">
        <div className="flex flex-col items-center gap-6">
          {eyebrow}
          <Heading className="max-w-5xl text-center">{headline}</Heading>
          {subheadline && (
            <Text size="lg" className="flex max-w-xl flex-col gap-4 text-center">
              {subheadline}
            </Text>
          )}
        </div>
        {(media || intro) && (
          <div className="mx-auto flex w-full max-w-2xl flex-col gap-6 -mt-6 sm:-mt-10">
            {media && (
              <div className="overflow-hidden rounded-xl outline -outline-offset-1 outline-black/5 dark:outline-white/5">
                {media}
              </div>
            )}
            {intro && (
              <p className="text-lg/8 font-medium text-mist-950 dark:text-white">{intro}</p>
            )}
          </div>
        )}
        <Document className="mx-auto max-w-2xl">{children}</Document>
      </Container>
    </section>
  )
}
