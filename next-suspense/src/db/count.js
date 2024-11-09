let count = 0

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function increment() {
  count++
  console.log('le count', count)

  return count
}

export async function decrement() {
  count--

  return count
}

export async function getCount() {
  await sleep(1000)
  return count
}
