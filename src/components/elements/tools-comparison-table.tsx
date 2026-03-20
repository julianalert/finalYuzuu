const tools = [
  { rank: '1', name: 'Yuzuu', bestFor: 'Ultra-realistic product photos', pricing: '~$0.25/photo', realism: 5, ease: 5 },
  { rank: '2', name: 'Photoroom', bestFor: 'All-in-one high-volume workflow', pricing: 'From $12.99/mo', realism: 4, ease: 5 },
  { rank: '3', name: 'Claid.ai', bestFor: 'API-first technical teams', pricing: 'From $15/mo', realism: 4, ease: 3 },
  { rank: '4', name: 'Flair.ai', bestFor: 'Creative control & staging', pricing: 'From $10/mo', realism: 4, ease: 3 },
  { rank: '5', name: 'Pebblely', bestFor: 'Small sellers testing AI', pricing: 'Free / $19/mo', realism: 3, ease: 5 },
  { rank: '6', name: 'Caspa AI', bestFor: 'A/B testing visual performance', pricing: 'Contact', realism: 3, ease: 3 },
  { rank: '7', name: 'Pixelcut', bestFor: 'Budget-friendly mobile-first', pricing: 'Free / $9.99/mo', realism: 3, ease: 5 },
  { rank: '8', name: 'Instant Studio', bestFor: 'Shopify-native integration', pricing: 'Shopify App Store', realism: 3, ease: 4 },
  { rank: '9', name: 'Magic Studio', bestFor: 'Ad creative generation', pricing: 'From $49.99/mo', realism: 4, ease: 4 },
  { rank: '10', name: 'Claid.ai Pro', bestFor: 'Advanced editing + generation', pricing: 'From $50/mo', realism: 4, ease: 2 },
]

function Dots({ count, max = 5 }: { count: number; max?: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }, (_, i) => (
        <div
          key={i}
          className={[
            'size-2 rounded-full',
            i < count
              ? 'bg-gradient-to-r from-orange-500 to-rose-500'
              : 'bg-mist-200 dark:bg-white/10',
          ].join(' ')}
        />
      ))}
    </div>
  )
}

export function ToolsComparisonTable() {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-xl border border-orange-200 dark:border-orange-500/20">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="bg-orange-50/60 dark:bg-orange-500/5">
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-mist-500 dark:text-mist-400">#</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-mist-500 dark:text-mist-400">Tool</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-mist-500 dark:text-mist-400">Best for</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-mist-500 dark:text-mist-400">Pricing</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-mist-500 dark:text-mist-400">Realism</th>
              <th className="px-4 py-3 text-xs font-semibold uppercase tracking-widest text-mist-500 dark:text-mist-400">Ease</th>
            </tr>
          </thead>
          <tbody>
            {tools.map((tool, i) => (
              <tr
                key={tool.name}
                className={[
                  'border-t border-orange-100 transition-colors dark:border-orange-500/10',
                  i === 0
                    ? 'bg-orange-50/30 dark:bg-orange-500/3'
                    : 'bg-white hover:bg-mist-50 dark:bg-transparent dark:hover:bg-white/2',
                ].join(' ')}
              >
                <td className="px-4 py-3">
                  {i === 0 ? (
                    <span className="flex size-6 items-center justify-center rounded-md bg-gradient-to-br from-orange-500 to-rose-500 text-xs font-bold text-white">
                      {tool.rank}
                    </span>
                  ) : (
                    <span className="text-xs tabular-nums text-mist-400 dark:text-mist-600">{tool.rank}</span>
                  )}
                </td>
                <td className="px-4 py-3 font-semibold text-mist-950 dark:text-white">
                  {tool.name}
                </td>
                <td className="px-4 py-3 text-mist-600 dark:text-mist-400">{tool.bestFor}</td>
                <td className="px-4 py-3 text-mist-600 dark:text-mist-400">{tool.pricing}</td>
                <td className="px-4 py-3"><Dots count={tool.realism} /></td>
                <td className="px-4 py-3"><Dots count={tool.ease} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
