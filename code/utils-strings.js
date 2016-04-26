export const strip = (pieces, ...values) =>
  pieces
    .reduce((concatStr, piece, indx) => `${concatStr}${piece}${values[indx] || ''}`, '')
    .replace(/^\s*/gm, '');
