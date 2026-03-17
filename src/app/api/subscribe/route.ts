import { NextRequest, NextResponse } from 'next/server'

const LOOPS_API_KEY = process.env.LOOPS_API_KEY
const LOOPS_LIST_ID = 'cmmrxx4g30et80iyb5saw7x0w'

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
  }

  if (!LOOPS_API_KEY) {
    return NextResponse.json({ error: 'Server misconfiguration.' }, { status: 500 })
  }

  const res = await fetch('https://app.loops.so/api/v1/contacts/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${LOOPS_API_KEY}`,
    },
    body: JSON.stringify({
      email,
      mailingLists: { [LOOPS_LIST_ID]: true },
    }),
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    return NextResponse.json({ error: body.message ?? 'Subscription failed.' }, { status: res.status })
  }

  return NextResponse.json({ success: true })
}
