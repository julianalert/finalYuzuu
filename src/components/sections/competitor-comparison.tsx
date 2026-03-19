import { clsx } from 'clsx/lite'
import type { ComparisonRow } from '@/app/alternative-to/data'
import { Container } from '../elements/container'
import { Eyebrow } from '../elements/eyebrow'
import { Subheading } from '../elements/subheading'
import { Text } from '../elements/text'

export function ComparisonHeroCard({
  competitorName,
  competitorCons,
  yuzuuPros,
  badge = 'Built for\ne-commerce',
}: {
  competitorName: string
  competitorCons: string[]
  yuzuuPros: string[]
  badge?: string
}) {
  return (
    <div className="relative">
      <div className="absolute -right-3 -top-3 z-10 whitespace-pre-line rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2.5 text-center text-xs/4 font-semibold text-white shadow-lg rotate-3">
        {badge}
      </div>
      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-mist-950/10">
        <div className="flex items-center gap-2 border-b border-mist-950/10 px-5 py-3.5">
          <div className="size-2.5 rounded-full bg-red-400" />
          <div className="size-2.5 rounded-full bg-yellow-400" />
          <div className="size-2.5 rounded-full bg-green-400" />
          <span className="ml-auto text-xs font-medium text-mist-500">Quick Comparison</span>
        </div>
        <div className="grid grid-cols-2">
          <div className="border-r border-mist-950/10 bg-mist-950/2.5 p-5">
            <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-mist-500">
              <span className="size-2 rounded-full bg-mist-400" />
              {competitorName}
            </div>
            <div className="flex flex-col gap-3">
              {competitorCons.map((con, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs/5 text-mist-600">
                  <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-red-100 text-[9px] text-red-600">
                    ✗
                  </div>
                  {con}
                </div>
              ))}
            </div>
          </div>
          <div className="p-5">
            <div className="mb-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-orange-500">
              <span className="size-2 rounded-full bg-orange-500" />
              Yuzuu
            </div>
            <div className="flex flex-col gap-3">
              {yuzuuPros.map((pro, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs/5 text-mist-700">
                  <div className="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-[9px] text-emerald-600">
                    ✓
                  </div>
                  {pro}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function ComparisonTable({
  competitorName,
  intro,
  rows,
}: {
  competitorName: string
  intro: string
  rows: ComparisonRow[]
}) {
  return (
    <section className="py-16" id="comparison">
      <Container className="flex flex-col gap-10 sm:gap-16">
        <div className="flex max-w-2xl flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Eyebrow>Feature Comparison</Eyebrow>
            <Subheading>Yuzuu vs {competitorName}</Subheading>
          </div>
          <Text className="text-pretty">{intro}</Text>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-[640px] overflow-hidden rounded-2xl ring-1 ring-mist-950/10">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-mist-950">
                  <th className="w-[32%] px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white/50">
                    Feature
                  </th>
                  <th className="w-[30%] px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-white/60">
                    {competitorName}
                  </th>
                  <th className="w-[30%] px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-orange-400">
                    <span className="flex items-center gap-2">
                      Yuzuu
                      <span className="rounded-full bg-orange-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                        Recommended
                      </span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className="border-b border-mist-950/10 transition-colors last:border-b-0 hover:bg-mist-950/2.5"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-mist-700">{row.feature}</td>
                    <td
                      className={clsx(
                        'px-6 py-4 text-sm',
                        row.competitor.status === 'positive' && 'text-emerald-600',
                        row.competitor.status === 'negative' && 'text-red-600/70',
                        row.competitor.status === 'neutral' && 'text-mist-500',
                      )}
                    >
                      {row.competitor.status === 'positive' && '✓ '}
                      {row.competitor.status === 'negative' && '✗ '}
                      {row.competitor.text}
                    </td>
                    <td
                      className={clsx(
                        'px-6 py-4 text-sm font-medium',
                        row.yuzuu.status === 'positive' && 'text-emerald-600',
                        row.yuzuu.status === 'negative' && 'text-red-600/70',
                        row.yuzuu.status === 'neutral' && 'text-mist-500',
                      )}
                    >
                      {row.yuzuu.status === 'positive' && '✓ '}
                      {row.yuzuu.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  )
}
