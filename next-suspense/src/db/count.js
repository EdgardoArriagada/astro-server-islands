const count = {
  value: 0,
}

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function increment() {
  count.value++

  return count.value
}

export async function decrement() {
  count.value--

  return count.value
}

export async function getCount() {
  await sleep(1000)
  return count.value
}
