'use server'

import { revalidatePath } from 'next/cache'
import { increment as dbIncrement } from '../../db/count'

export async function increment() {
  await dbIncrement()
  revalidatePath('')
}
