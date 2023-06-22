const maskText = (text: string, side: 'left' | 'right', length: number, maskInto?: string) => {
  const textArray = text.split('').map((char, i) => {
    let txtLength = length
    if (txtLength > text.length) {
      txtLength = text.length
    }
    if (side === 'left') {
      if (i >= txtLength) {
        if (maskInto) return maskInto
        return '*'
      }
      return char
    }
    if (i < text.length - txtLength) {
      if (maskInto) return maskInto
      return '*'
    }
    return char
  })
  return textArray.join('')
}

export default maskText
