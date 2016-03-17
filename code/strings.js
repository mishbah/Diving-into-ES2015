export function strip(pieces, ...value) {
  var str = ''
  pieces.forEach((piece, index) => {
    let val = value[index] || ''
    str = str + piece + val
  })
  return str.replace(/^\s*/gm, '')
}
