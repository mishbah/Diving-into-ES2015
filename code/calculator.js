export const items = [
  { amount: 10, taxable: true },
  { amount: 22, taxable: false },
  { amount: 13.45, taxable: true }
]

export function calculate({ taxRate = 8, items = [] }) {
  var total = parseFloat(0)

  items.forEach(function(item) {
    if (item.taxable) {
      total += item.amount + (item.amount * (taxRate / 100))
    } else {
      total += item.amount
    }
  })

  return total
}
