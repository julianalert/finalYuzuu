import { clsx } from 'clsx/lite'
import type { ComponentProps } from 'react'

export function Document({ children, className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      className={clsx(
        'space-y-4 text-sm/7 text-mist-700 dark:text-mist-400 [&_a]:font-semibold [&_a]:text-mist-950 [&_a]:underline [&_a]:underline-offset-4 dark:[&_a]:text-white [&_figcaption]:mt-3 [&_figcaption]:text-center [&_figcaption]:text-xs [&_figcaption]:text-mist-500 [&_figcaption]:italic dark:[&_figcaption]:text-mist-500 [&_figure]:my-8 [&_figure]:overflow-hidden [&_figure]:rounded-xl [&_figure]:outline [&_figure]:-outline-offset-1 [&_figure]:outline-black/5 dark:[&_figure]:outline-white/5 [&_figure_img]:w-full [&_h2]:text-xl/8 [&_h2]:font-semibold [&_h2]:text-mist-950 [&_h2]:not-first:mt-10 dark:[&_h2]:text-white [&_h3]:text-base/8 [&_h3]:font-medium [&_h3]:text-mist-950 [&_h3]:not-first:mt-8 dark:[&_h3]:text-white [&_h4]:text-sm/7 [&_h4]:font-medium [&_h4]:text-mist-950 [&_h4]:not-first:mt-6 dark:[&_h4]:text-white [&_li]:pl-2 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:font-semibold [&_strong]:text-mist-950 dark:[&_strong]:text-white [&_ul]:list-[square] [&_ul]:pl-6 [&_ul]:marker:text-mist-400 dark:[&_ul]:marker:text-mist-600',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
