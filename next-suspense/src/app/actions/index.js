'use server'

import { increment as dbIncrement } from '../../db/count'

export async function increment() {
  await dbIncrement()
}
