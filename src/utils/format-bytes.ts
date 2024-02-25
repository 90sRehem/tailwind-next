export function convertBytes(bytes: number): string {
  const KILOBYTE = 1024
  const SIZES = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB']

  if (bytes === 0) {
    return '0 Byte'
  }

  const index = Math.floor(Math.log(bytes) / Math.log(KILOBYTE))
  const formattedSize = (bytes / Math.pow(KILOBYTE, index)).toFixed(2)

  return `${formattedSize} ${SIZES[index]}`
}
