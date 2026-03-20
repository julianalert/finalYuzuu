import type { ReactNode } from 'react'

export function ToolCard({
  rank,
  name,
  tagline,
  pricing,
  output,
  children,
}: {
  rank: string
  name: string
  tagline: string
  pricing: string
  output?: string
  children?: ReactNode
}) {
  const isTop = rank === '1'

  return (
    <div
      className={[
        'not-prose relative my-8 overflow-hidden rounded-xl border',
        isTop
          ? 'border-orange-300 bg-orange-50/50 dark:border-orange-500/30 dark:bg-orange-500/5'
          : 'border-mist-200 bg-white dark:border-white/10 dark:bg-white/3',
      ].join(' ')}
    >
      {isTop && (
        <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-gradient-to-br from-orange-400/20 to-rose-400/20 blur-3xl" />
      )}

      {/* Header */}
      <div className={[
        'relative flex flex-col gap-4 p-6 pb-0',
      ].join(' ')}>
        <div className="flex items-start gap-3">
          <span
            className={[
              'mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold',
              isTop
                ? 'bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow-lg shadow-orange-500/25'
                : 'bg-mist-100 text-mist-500 dark:bg-white/10 dark:text-mist-400',
            ].join(' ')}
          >
            {rank}
          </span>
          <div className="flex-1">
            <div className="flex items-center gap-2.5">
              <h3 className="!mt-0 text-xl font-semibold text-mist-950 dark:text-white">{name}</h3>
              {isTop && (
                <span className="rounded-md bg-gradient-to-r from-orange-500 to-rose-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                  Editor&apos;s pick
                </span>
              )}
            </div>
            <p className={[
              'mt-0.5 text-sm italic',
              isTop ? 'text-orange-600 dark:text-orange-400' : 'text-mist-500 dark:text-mist-400',
            ].join(' ')}>
              {tagline}
            </p>
          </div>
        </div>

        {/* Meta chips */}
        <div className="flex flex-wrap gap-2 border-b border-mist-200 pb-5 dark:border-white/10">
          <span className="flex items-center gap-1.5 text-xs text-mist-500 dark:text-mist-400">
            <span className="font-semibold text-mist-950 dark:text-white">{pricing}</span>
          </span>
          {output && (
            <>
              <span className="text-mist-300 dark:text-white/15">·</span>
              <span className="text-xs text-mist-500 dark:text-mist-400">{output}</span>
            </>
          )}
        </div>
      </div>

      {/* Body content */}
      {children && (
        <div className="relative space-y-4 p-6 pt-5 text-sm/7 text-mist-600 dark:text-mist-400 [&_strong]:font-semibold [&_strong]:text-mist-950 dark:[&_strong]:text-white">
          {children}
        </div>
      )}
    </div>
  )
}

export function ToolQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="relative my-2 border-l-[3px] border-orange-400 py-1 pl-5 text-lg/8 font-medium italic text-orange-600 dark:border-orange-500 dark:text-orange-400">
      &ldquo;{children}&rdquo;
    </blockquote>
  )
}

export function ToolVerdict({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2 rounded-lg border-l-[3px] border-emerald-400 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700 dark:border-emerald-500/50 dark:bg-emerald-500/5 dark:text-emerald-400">
      {children}
    </div>
  )
}
