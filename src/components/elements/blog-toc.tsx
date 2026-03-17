'use client'

import { useEffect, useRef, useState } from 'react'

import type { TocEntry } from '@/lib/blog'

export function BlogToc({ entries }: { entries: TocEntry[] }) {
  const [activeId, setActiveId] = useState<string>('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const headingIds = entries.map((e) => e.id)

    observerRef.current = new IntersectionObserver(
      (observations) => {
        // Find the topmost heading that is intersecting
        const visible = observations
          .filter((o) => o.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      {
        rootMargin: '0px 0px -60% 0px',
        threshold: 0,
      },
    )

    headingIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observerRef.current?.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [entries])

  if (entries.length === 0) return null

  return (
    <aside className="hidden lg:block">
        <div className="sticky top-24 flex flex-col gap-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-mist-500 dark:text-mist-500">
          In this post
        </p>
        <nav className="flex flex-col gap-0.5">
          {entries.map((entry) => {
            const isActive = activeId === entry.id
            return (
              <a
                key={entry.id}
                href={`#${entry.id}`}
                className={[
                  'rounded-md px-2 py-1 text-sm/6 transition-all',
                  entry.level === 3 ? 'pl-4' : 'font-semibold',
                  isActive
                    ? 'bg-orange-50 dark:bg-orange-500/10'
                    : 'text-mist-600 hover:text-mist-950 dark:text-mist-400 dark:hover:text-white',
                ].join(' ')}
              >
                {isActive ? (
                  <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                    {entry.text}
                  </span>
                ) : (
                  entry.text
                )}
              </a>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
