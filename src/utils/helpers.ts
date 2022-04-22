export const hexToRgb = (hex: string, opacity: number) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (result) {
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(
      result[2],
      16,
    )}, ${parseInt(result[3], 16)}, ${opacity})`
  }

  return ''
}

export const numToString = (value: number, length: number) => {
  let string = value.toString()
  if (string.length >= length) {
    return value
  }

  for (let i = length; i >= string.length; i--) {
    string = '0' + string
  }
  return string
}
