'use client'

import { increment } from '../actions'

export function IncrementButton() {
  // very important to create arrow function for the increment and not use shorthand only
  return <button onClick={() => increment()}>Increment</button>
}
