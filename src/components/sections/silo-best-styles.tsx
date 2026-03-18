import Link from 'next/link'
import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { Container } from '@/components/elements/container'
import { SunIcon } from '@/components/icons/sun-icon'
import { SparklesIcon } from '@/components/icons/sparkles-icon'
import { CameraIcon } from '@/components/icons/camera-icon'
import { MagnifyingGlassIcon } from '@/components/icons/magnifying-glass-icon'
import { Squares2StackedIcon } from '@/components/icons/squares-2-stacked-icon'
import { CameraVideoIcon } from '@/components/icons/camera-video-icon'
import { LightingBoltIcon } from '@/components/icons/lighting-bolt-icon'
import { SlidersIcon } from '@/components/icons/sliders-icon'
import { MapPinIcon } from '@/components/icons/map-pin-icon'
import { StarIcon } from '@/components/icons/star-icon'
import { LightBulbIcon } from '@/components/icons/light-bulb-icon'
import { PhotoIcon } from '@/components/icons/photo-icon'

const STYLE_ICONS: Record<string, ReactNode> = {
  'lifestyle':          <SunIcon />,
  'studio-clean':       <SparklesIcon />,
  'studio':             <CameraIcon />,
  'macro-detail':       <MagnifyingGlassIcon />,
  'flatlay':            <Squares2StackedIcon />,
  'ugc':                <CameraVideoIcon />,
  'dramatic-lighting':  <LightingBoltIcon />,
  'minimalist':         <SlidersIcon />,
  'outdoor':            <MapPinIcon />,
  'luxury':             <StarIcon />,
  'cinematic':          <CameraVideoIcon />,
  'creative':           <LightBulbIcon />,
  'default':            <PhotoIcon />,
}

export type BestStyle = {
  slug: string
  label: string
  why: string
}

export function SiloBestStyles({
  industry,
  styles,
  className,
  ...props
}: {
  industry: string
  styles: BestStyle[]
} & ComponentProps<'section'>) {
  return (
    <section className={clsx('py-12', className)} {...props}>
      <Container className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="font-display text-4xl/12 tracking-tight text-mist-950 dark:text-white sm:text-5xl/16">
            Best {industry} Product Photography Styles
          </h2>
          <p className="text-sm/7 text-mist-700 dark:text-mist-400">
            The three visual styles that work best for {industry.toLowerCase()} brands, and why.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {styles.map((style) => (
            <Link
              key={style.slug}
              href={`/product-photography/${style.slug}`}
              className="group flex flex-col justify-between gap-6 rounded-xl bg-mist-950/2.5 p-6 transition-colors hover:bg-mist-950/5 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <div className="flex flex-col gap-3">
                <div className="flex size-8 items-center justify-center rounded-lg bg-mist-950/5 text-mist-950 dark:bg-white/10 dark:text-white [&_svg]:size-4">
                  {STYLE_ICONS[style.slug] ?? STYLE_ICONS['default']}
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base/8 font-medium text-mist-950 dark:text-white">{style.label}</h3>
                  <p className="text-sm/7 text-mist-700 dark:text-mist-400">{style.why}</p>
                </div>
              </div>
              <span className="text-sm font-medium text-mist-400 transition-transform group-hover:translate-x-0.5 dark:text-mist-500">
                See examples →
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
