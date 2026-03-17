import Link from 'next/link'

import { ElDialog, ElDialogPanel } from '@tailwindplus/elements/react'
import { clsx } from 'clsx/lite'
import type { ComponentProps, ReactNode } from 'react'
import { ChevronIcon } from '@/components/icons/chevron-icon'

export function NavbarLink({
  children,
  href,
  className,
  ...props
}: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return (
    <Link
      href={href}
      className={clsx(
        'group inline-flex items-center justify-between gap-2 text-3xl/10 font-medium text-mist-950 lg:text-sm/7 dark:text-white',
        className,
      )}
      {...props}
    >
      {children}
      <span className="inline-flex p-1.5 opacity-0 group-hover:opacity-100 lg:hidden" aria-hidden="true">
        <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </span>
    </Link>
  )
}

export function NavbarDropdownItem({
  href,
  icon,
  title,
  subtitle,
}: {
  href: string
  icon?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
}) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 rounded-lg px-3 py-2.5 hover:bg-mist-950/5 dark:hover:bg-white/10"
    >
      {icon && (
        <span className="mt-0.5 shrink-0 max-lg:hidden">{icon}</span>
      )}
      <span className="flex flex-col gap-0.5">
        <span className="text-sm font-medium text-mist-950 lg:text-sm dark:text-white max-lg:text-xl/9">{title}</span>
        {subtitle && <span className="text-xs text-mist-600 dark:text-mist-400">{subtitle}</span>}
      </span>
    </Link>
  )
}

export function NavbarDropdown({
  label,
  children,
}: {
  label: ReactNode
  children: ReactNode
}) {
  return (
    <div className="group relative">
      {/* Desktop trigger */}
      <button className="hidden lg:inline-flex items-center gap-1 text-sm/7 font-medium text-mist-950 dark:text-white cursor-pointer">
        {label}
        <ChevronIcon className="rotate-90 opacity-60 size-2.5" />
      </button>

      {/* Desktop dropdown panel */}
      <div className="hidden lg:group-hover:block absolute top-full left-1/2 -translate-x-1/2 pt-2 z-20">
        <div className="w-72 rounded-xl border border-mist-950/10 bg-mist-100 p-2 shadow-lg dark:border-white/10 dark:bg-mist-900">
          {children}
        </div>
      </div>

      {/* Mobile: flat list */}
      <div className="lg:hidden flex flex-col">
        <span className="text-3xl/10 font-medium text-mist-950 dark:text-white">{label}</span>
        <div className="mt-1 flex flex-col gap-1 pl-4 border-l-2 border-mist-950/10 dark:border-white/10">{children}</div>
      </div>
    </div>
  )
}

export function NavbarLogo({ className, href, ...props }: { href: string } & Omit<ComponentProps<'a'>, 'href'>) {
  return <Link href={href} {...props} className={clsx('inline-flex items-stretch', className)} />
}

export function NavbarWithLinksActionsAndCenteredLogo({
  links,
  logo,
  actions,
  className,
  ...props
}: {
  links: ReactNode
  logo: ReactNode
  actions: ReactNode
} & ComponentProps<'header'>) {
  return (
    <header className={clsx('sticky top-0 z-10 bg-mist-100 dark:bg-mist-950', className)} {...props}>
      <style>{`:root { --scroll-padding-top: 5.25rem }`}</style>
      <nav>
        <div className="mx-auto flex h-(--scroll-padding-top) max-w-7xl items-center gap-4 px-6 lg:px-10">
          <div className="flex flex-1 gap-8 max-lg:hidden">{links}</div>
          <div className="flex items-center">{logo}</div>
          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="hidden shrink-0 items-center gap-5 lg:flex">{actions}</div>

            <button
              command="show-modal"
              commandfor="mobile-menu"
              aria-label="Toggle menu"
              className="inline-flex rounded-full p-1.5 text-mist-950 hover:bg-mist-950/10 lg:hidden dark:text-white dark:hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path
                  fillRule="evenodd"
                  d="M3.748 8.248a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75ZM3.748 15.75a.75.75 0 0 1 .75-.751h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <ElDialog className="lg:hidden">
          <dialog id="mobile-menu" className="backdrop:bg-transparent">
            <ElDialogPanel className="fixed inset-0 bg-mist-100 px-6 py-6 lg:px-10 dark:bg-mist-950">
              <div className="flex justify-end">
                <button
                  command="close"
                  commandfor="mobile-menu"
                  aria-label="Toggle menu"
                  className="inline-flex rounded-full p-1.5 text-mist-950 hover:bg-mist-950/10 dark:text-white dark:hover:bg-white/10"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flex flex-col gap-6">{links}</div>
            </ElDialogPanel>
          </dialog>
        </ElDialog>
      </nav>
    </header>
  )
}
