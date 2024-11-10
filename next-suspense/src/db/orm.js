import fs from 'fs'
import path from 'path'

const countFilePath = path.join(__dirname, 'count.txt')

export const read = () => {
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

export const write = (count) => {
  try {
    fs.writeFileSync(countFilePath, count.toString(), 'utf8')
  } catch (err) {
    console.error('Error writing count to file:', err)
  }
}
