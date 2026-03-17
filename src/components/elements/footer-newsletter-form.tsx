'use client'

import { useState } from 'react'
import { NewsletterForm } from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'

const REDIRECT_URL =
  'https://eight-numeric-3e2.notion.site/AI-Product-Photography-OS-2fed99bf52d78023a91ce962988c9a74?pvs=74'

export function FooterNewsletterForm({
  headline,
  subheadline,
}: {
  headline: React.ReactNode
  subheadline: React.ReactNode
}) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const input = e.currentTarget.querySelector('input[type="email"]') as HTMLInputElement | null
    const email = input?.value ?? ''

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        const data = await res.json()
        setErrorMsg(data.error ?? 'Something went wrong.')
        setStatus('error')
        return
      }

      window.open(REDIRECT_URL, '_blank', 'noopener,noreferrer')
    } catch {
      setErrorMsg('Something went wrong. Please try again.')
      setStatus('error')
    }
  }

  return (
    <div>
      <NewsletterForm
        headline={headline}
        subheadline={subheadline}
        onSubmit={handleSubmit}
      />
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-500 dark:text-red-400">{errorMsg}</p>
      )}
    </div>
  )
}
