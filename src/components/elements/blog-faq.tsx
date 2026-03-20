'use client'

import { useState } from 'react'

function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-mist-200 dark:border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-sm font-semibold text-mist-950 dark:text-white">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={[
            'size-4 shrink-0 text-mist-400 transition-transform duration-200 dark:text-mist-600',
            open ? 'rotate-180' : '',
          ].join(' ')}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 text-sm/7 text-mist-600 dark:text-mist-400">{children}</div>
      )}
    </div>
  )
}

export function BlogFaq({ items }: { items: string }) {
  const parsed: { q: string; a: string }[] = items
    .split('|||')
    .map((pair) => {
      const [q, a] = pair.split('::').map((s) => s.trim())
      return { q, a }
    })
    .filter((item) => item.q && item.a)

  return (
    <div className="not-prose my-8 rounded-xl border border-orange-200 bg-orange-50/30 p-6 dark:border-orange-500/20 dark:bg-orange-500/3">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-rose-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </div>
        <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent">
          Frequently asked questions
        </span>
      </div>
      <div>
        {parsed.map((item, i) => (
          <FaqItem key={i} question={item.q}>
            {item.a}
          </FaqItem>
        ))}
      </div>
    </div>
  )
}
