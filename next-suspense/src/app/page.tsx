import { Suspense } from 'react'
import * as db from '../db/count'
import { IncrementButton } from './components/IncrementButton'

async function SlowComponent() {
  const count = await db.getCount()

  return <div>SlowComponent {count}</div>
}

export default function Home() {
  return (
    <div>
      <h2>Before SlowComponent</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <SlowComponent />
      </Suspense>
      <h2>After SlowComponent</h2>
      <IncrementButton />
    </div>
  )
}
