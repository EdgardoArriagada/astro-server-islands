'use client'

import { useTransition } from 'react'
import { increment } from '../actions'

export function IncrementButton() {
  const [isPending, startTransition] = useTransition()
  // very important to create arrow function for the increment and not use shorthand only
  return (
    <button onClick={() => startTransition(() => increment())}>
      Increment
    </button>
  )
}
