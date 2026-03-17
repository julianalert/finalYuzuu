export function PromptInclude({ items }: { items: string }) {
  const list = items.split(',').map((s) => s.trim()).filter(Boolean)
  return (
    <div className="not-prose my-4 flex flex-wrap items-center gap-2 rounded-lg border border-orange-100 bg-orange-50/50 px-4 py-3 dark:border-orange-500/15 dark:bg-orange-500/5">
      <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-orange-500">
        Include
      </span>
      <span className="text-orange-200 dark:text-orange-800">·</span>
      {list.map((item) => (
        <span
          key={item}
          className="rounded-md bg-white px-2 py-0.5 text-xs text-mist-600 shadow-sm ring-1 ring-mist-200 dark:bg-white/5 dark:text-mist-400 dark:ring-white/10"
        >
          {item}
        </span>
      ))}
    </div>
  )
}
