export function strip(pieces, ...value) {
  return pieces.reduce((prev, curr, index) => (
    prev += curr + (value[index] || '')
  ), '').replace(/^\s*/gm, '');
}
