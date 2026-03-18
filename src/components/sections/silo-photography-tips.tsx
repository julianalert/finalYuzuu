import Link from 'next/link'
import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Container } from '../elements/container'
import { Subheading } from '../elements/subheading'
import { Text } from '../elements/text'
import { CheckmarkIcon } from '../icons/checkmark-icon'

export function SiloPhotographyTips({
  subject,
  tips,
  className,
  ...props
}: {
  subject: string
  tips: string[]
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-16', className)} {...props}>
      <Container>
        <div className="grid grid-cols-1 gap-x-2 rounded-xl bg-mist-950/2.5 p-2 lg:grid-cols-2 dark:bg-white/5">
          <div className="flex flex-col items-start justify-between gap-10 p-6 sm:p-10">
            <div className="flex flex-col gap-6">
              <Subheading>Tips for {subject} Product Photography</Subheading>
              <Text className="flex flex-col gap-4 text-pretty">
                <p>
                  Whether you are shooting with a professional setup or generating photos with AI, these tips will help
                  you get the most out of your {subject.toLowerCase()} product visuals.
                </p>
              </Text>
            </div>
            <Link
              href="https://app.yuzuu.co/signup"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-1 rounded-full bg-mist-950 px-4 py-2 text-sm/7 font-medium text-white hover:bg-mist-800 dark:bg-mist-300 dark:text-mist-950 dark:hover:bg-mist-200"
            >
              Get 5 photos for free
            </Link>
          </div>
          <div className="rounded-sm bg-mist-100 p-6 sm:p-10 dark:bg-mist-950">
            <ul className="grid grid-cols-1 gap-4">
              {tips.map((tip, index) => (
                <li key={index} className="flex gap-3 text-sm/6">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-xs bg-gradient-to-br from-orange-500 to-rose-500 mt-0.5">
                    <CheckmarkIcon className="size-3 stroke-white" />
                  </span>
                  <p className="text-mist-700 dark:text-mist-400">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
