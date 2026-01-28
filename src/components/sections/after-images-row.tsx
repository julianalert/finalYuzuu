'use client'

import { clsx } from 'clsx/lite'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export type SliderCard = {
  id: string
  title: string
  category: string
  image: string
  href?: string
}

// Static cards – edit title, category; images from /public/img/products
const SLIDER_CARDS: SliderCard[] = [
  { id: '1', title: 'PDP Update', category: 'Product', image: '/img/products/noomiAfter.png' },
  { id: '2', title: 'After Area', category: 'Product', image: '/img/products/afterArea.png' },
  { id: '3', title: 'Lifestyle', category: 'Product', image: '/img/products/result3.png' },
  { id: '4', title: 'Quick Visuals', category: 'Product', image: '/img/products/littleAfter.png' },
  { id: '5', title: 'Conversion', category: 'Product', image: '/img/products/pwrrr4.png' },
  { id: '6', title: 'Product Launch', category: 'Product', image: '/img/products/bunnyLampFinal.png' },
  { id: '7', title: 'Paid Ads', category: 'Product', image: '/img/products/bookAds.png' },
  { id: '8', title: 'Brand', category: 'Product', image: '/img/products/gragioAfter.png' },
]

const CARD_WIDTH = 200
const CARD_GAP = 12
const SNAP_OFFSET = CARD_WIDTH + CARD_GAP

function AfterImagesSliderInner() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const cards = SLIDER_CARDS

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState)
    const ro = new ResizeObserver(updateScrollState)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      ro.disconnect()
    }
  }, [cards.length])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: direction === 'left' ? -SNAP_OFFSET : SNAP_OFFSET, behavior: 'smooth' })
  }

  if (!cards.length) return null

  return (
    <div className="relative w-full">
      {/* Left fade */}
      <div
        className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-r from-mist-100 to-transparent dark:from-mist-950 sm:w-24"
        aria-hidden
      />
      {/* Right fade */}
      <div
        className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 bg-gradient-to-l from-mist-100 to-transparent dark:from-mist-950 sm:w-24"
        aria-hidden
      />

      {/* Scroll buttons */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-mist-200 bg-white/90 shadow-md transition-colors hover:bg-white dark:border-mist-700 dark:bg-mist-800/90 dark:hover:bg-mist-800 sm:left-4"
          aria-label="Scroll left"
        >
          <svg className="h-5 w-5 text-mist-700 dark:text-mist-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>
      )}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-mist-200 bg-white/90 shadow-md transition-colors hover:bg-white dark:border-mist-700 dark:bg-mist-800/90 dark:hover:bg-mist-800 sm:right-4"
          aria-label="Scroll right"
        >
          <svg className="h-5 w-5 text-mist-700 dark:text-mist-300" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
      )}

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto overflow-y-hidden pl-0 pr-1 py-2 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {cards.map((card) => {
          const cardContent = (
            <div className="relative w-[180px] flex-shrink-0 overflow-hidden rounded-xl bg-mist-100 shadow-md ring-1 ring-mist-300/50 dark:bg-mist-800 dark:ring-mist-600/30 sm:w-[200px] aspect-[3/4]">
              <Image
                src={card.image}
                alt=""
                fill
                className="object-cover"
                sizes="200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {/* Text overlay on cards – commented out to hide title/category
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <p className="line-clamp-1 text-sm font-medium text-white drop-shadow-sm">
                  {card.title}
                </p>
                <span className="mt-1 inline-block text-xs font-medium text-white/90">
                  {card.category}
                </span>
              </div>
              */}
            </div>
          )

          return (
            <div
              key={card.id}
              className="scroll-snap-start scroll-snap-align-center"
              style={{ scrollSnapAlign: 'start' }}
            >
              {card.href ? (
                <Link
                  href={card.href}
                  className="block rounded-xl transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2"
                >
                  {cardContent}
                </Link>
              ) : (
                <div className="block rounded-xl transition-transform duration-200 hover:scale-[1.02]">
                  {cardContent}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function AfterImagesRowSection({ className, ...props }: React.ComponentProps<'section'>) {
  return (
    <section
      className={clsx('w-screen max-w-none py-6', className)}
      style={{ marginLeft: 'calc(-50vw + 50%)' }}
      {...props}
    >
      <AfterImagesSliderInner />
    </section>
  )
}
