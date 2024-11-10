import { read, write } from './orm'

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function increment() {
  let count = read()
  count++
  write(count)

  return count
}

export async function decrement() {
  let count = write()
  count--
  write(count)

  return count
}

export async function getCount() {
  /* await sleep(1000) */

  return read()
}
