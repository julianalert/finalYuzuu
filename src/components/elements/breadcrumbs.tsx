import Link from 'next/link'

export type BreadcrumbItem = {
  label: string
  href?: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-mist-500 dark:text-mist-400">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            {i > 0 && <span aria-hidden="true">/</span>}
            {item.href ? (
              <Link
                href={item.href}
                className="transition-colors hover:text-mist-950 dark:hover:text-white"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-mist-700 dark:text-mist-300">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
