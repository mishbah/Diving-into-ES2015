export function taxedPrice(price, taxRate, taxable) {
  if (!taxable) return price
  return price + (price * taxRate / 100)
}
