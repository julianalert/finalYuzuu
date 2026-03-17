export function PromptComparison({ vague, detailed }: { vague: string; detailed: string }) {
  return (
    <div className="not-prose my-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {/* Vague prompt */}
      <div className="flex flex-col gap-3 rounded-xl border border-mist-200 bg-mist-50 p-5 dark:border-white/10 dark:bg-white/5">
        <div className="flex items-center gap-2">
          <span className="flex size-5 items-center justify-center rounded-full bg-mist-200 text-xs dark:bg-white/10">
            ✕
          </span>
          <span className="text-xs font-semibold uppercase tracking-widest text-mist-500 dark:text-mist-400">
            Vague brief
          </span>
        </div>
        <p className="text-sm/6 text-mist-600 dark:text-mist-400">
          &ldquo;{vague}&rdquo;
        </p>
        <p className="text-xs text-mist-400 dark:text-mist-600 italic">Generic. Flat. Forgettable.</p>
      </div>

      {/* Detailed prompt */}
      <div className="relative flex flex-col gap-3 overflow-hidden rounded-xl border border-orange-200 bg-orange-50/60 p-5 dark:border-orange-500/20 dark:bg-orange-500/5">
        <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-gradient-to-br from-orange-400/20 to-rose-400/20 blur-2xl" />
        <div className="flex items-center gap-2">
          <span className="flex size-5 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-xs text-white">
            ✓
          </span>
          <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-xs font-semibold uppercase tracking-widest text-transparent">
            Detailed brief
          </span>
        </div>
        <p className="text-sm/6 text-mist-700 dark:text-mist-300">
          &ldquo;{detailed}&rdquo;
        </p>
        <p className="text-xs text-orange-400 italic">Cinematic. Specific. Converts.</p>
      </div>
    </div>
  )
}
