import fs from 'fs'
import path from 'path'

const countFilePath = path.join(__dirname, 'count.txt')

const readCountFromFile = () => {
  try {
    const data = fs.readFileSync(countFilePath, 'utf8')
    return parseInt(data, 10) || 0
  } catch (err) {
    if (err.code === 'ENOENT') {
      fs.writeFileSync(countFilePath, '0', 'utf8')
      return 0
    } else {
      console.error('Error reading count from file:', err)
      return 0
    }
  }
}

const writeCountToFile = (count) => {
  try {
    fs.writeFileSync(countFilePath, count.toString(), 'utf8')
  } catch (err) {
    console.error('Error writing count to file:', err)
  }
}

const sleep = async (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export async function increment() {
  const count = readCountFromFile()
  count++
  writeCountToFile(count)

  console.log('le count', count)
  return count
}

export async function decrement() {
  const count = readCountFromFile()
  count--
  writeCountToFile(count)

  return count
}

export async function getCount() {
  /* await sleep(1000) */

  return readCountFromFile()
}
