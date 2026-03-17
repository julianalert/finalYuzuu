export function CategoryPrompt({ prompt, vary }: { prompt: string; vary: string }) {
  const varyItems = vary.split(',').map((s) => s.trim()).filter(Boolean)

  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-orange-200 dark:border-orange-500/20">
      {/* Example prompt */}
      <div className="relative flex flex-col gap-3 bg-orange-50/60 p-5 dark:bg-orange-500/5">
        {/* Decorative glow */}
        <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-gradient-to-br from-orange-400/20 to-rose-400/20 blur-2xl" />
        <div className="flex items-center gap-2">
          <div className="flex size-6 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-rose-500 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="size-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
            </svg>
          </div>
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent">
            Example prompt
          </span>
        </div>
        <p className="relative text-sm/7 text-mist-700 italic dark:text-mist-300">
          &ldquo;{prompt}&rdquo;
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-orange-100 dark:bg-orange-500/15" />

      {/* What to vary */}
      <div className="flex flex-col gap-3 bg-white px-5 py-4 dark:bg-white/2">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth={1.5} stroke="currentColor" className="size-4 shrink-0 text-mist-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-widest text-mist-500 dark:text-mist-400">
            What to vary
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {varyItems.map((item) => (
            <span
              key={item}
              className="rounded-md bg-mist-100 px-2.5 py-1 text-xs text-mist-600 dark:bg-white/8 dark:text-mist-400"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
