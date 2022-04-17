export const hexToRgb = (hex: string, opacity: number) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  if (result) {
    return `rgba(${parseInt(result[1], 16)}, ${parseInt(
      result[2],
      16,
    )}, ${parseInt(result[3], 16)}, ${opacity})`
  }

  return ""
}
