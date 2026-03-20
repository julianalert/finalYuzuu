export function DecisionGrid({ items }: { items: string }) {
  const parsed = items
    .split('|||')
    .map((entry) => {
      const [condition, description, pick] = entry.split('::').map((s) => s.trim())
      return { condition, description, pick }
    })
    .filter((item) => item.condition && item.pick)

  return (
    <div className="not-prose my-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
      {parsed.map((item) => (
        <div
          key={item.condition}
          className="flex flex-col gap-2 rounded-xl border border-mist-200 bg-mist-50 p-5 transition-colors hover:border-orange-200 hover:bg-orange-50/40 dark:border-white/10 dark:bg-white/5 dark:hover:border-orange-500/20 dark:hover:bg-orange-500/5"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
            {item.condition}
          </span>
          {item.description && (
            <p className="text-sm/6 text-mist-600 dark:text-mist-400">{item.description}</p>
          )}
          <p className="mt-auto text-sm font-semibold text-mist-950 dark:text-white">
            <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">→</span>{' '}
            {item.pick}
          </p>
        </div>
      ))}
    </div>
  )
}
