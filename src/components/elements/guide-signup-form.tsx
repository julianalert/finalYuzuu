'use client'

import { useState } from 'react'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { Button } from '@/components/elements/button'

const REDIRECT_URL =
  'https://eight-numeric-3e2.notion.site/AI-Product-Photography-OS-2fed99bf52d78023a91ce962988c9a74?pvs=74'

export function GuideSignupForm({ className }: { className?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

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
    <div className={className}>
      <form
        onSubmit={handleSubmit}
        className="flex rounded-full p-1 inset-ring-1 bg-white/15 inset-ring-white/10 dark:bg-white/10 dark:inset-ring-white/10"
      >
        <input
          type="email"
          aria-label="Email address"
          placeholder="Enter your email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="min-w-0 flex-1 px-3 text-sm/7 focus:outline-hidden text-white placeholder:text-white/60"
        />
        <Button color="light" type="submit" disabled={status === 'loading'} className="cursor-pointer">
          {status === 'loading' ? 'Sending…' : <>Get the guide <ArrowNarrowRightIcon /></>}
        </Button>
      </form>
      {status === 'error' && (
        <p className="mt-2 text-sm text-red-300">{errorMsg}</p>
      )}
    </div>
  )
}
