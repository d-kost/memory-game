export const getFormatDate = (timestamp: number): string => {
  const date = new Date(timestamp)
  return date.toLocaleDateString('ru', { hour: '2-digit', minute: '2-digit' })
}

export const getFormatSeconds = (seconds: number): string => {
  var date = new Date(seconds * 1000)
  return date.toISOString().substr(11, 8)
}
