import Link from 'next/link'
import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'
import { Container } from '@/components/elements/container'

export function SiloItemCard({
  label,
  href,
  className,
}: {
  label: string
  href: string
  className?: string
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'group flex items-center justify-between rounded-xl bg-mist-950/2.5 px-5 py-4 transition-colors hover:bg-mist-950/5 dark:bg-white/5 dark:hover:bg-white/10',
        className,
      )}
    >
      <span className="text-sm/7 font-medium text-mist-950 dark:text-white">{label}</span>
      <span className="text-mist-400 transition-transform group-hover:translate-x-0.5 dark:text-mist-500">→</span>
    </Link>
  )
}

export function SiloCategoryCardsSection({
  title,
  description,
  items,
  className,
  ...props
}: {
  title: string
  description?: string
  items: { slug: string; label: string }[]
  basePath?: string
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-12', className)} {...props}>
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-4xl/12 tracking-tight text-mist-950 dark:text-white sm:text-5xl/16">
            {title}
          </h2>
          {description && (
            <p className="text-sm/7 text-mist-700 dark:text-mist-400">{description}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {[...items].sort((a, b) => a.label.localeCompare(b.label)).map((item) => (
            <SiloItemCard
              key={item.slug}
              label={item.label}
              href={`/product-photography/${item.slug}`}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
