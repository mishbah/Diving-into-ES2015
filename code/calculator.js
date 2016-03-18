import { strip } from './strings'

export const items = [
  { price: 10, taxable: true },
  { price: 22, taxable: false },
  { price: 13.45, taxable: true }
]

export default class Calculator {
  constructor(items = [], taxRate = 8) {
    this.items = items
    this.taxRate = taxRate
  }

  calculateTax(item) {
    if (!item.taxable) return 0
    return item.price * this.taxRate / 100
  }

  calculate() {
    let total = 0, totalTax = 0

    this.items.forEach(item => {
      total += item.price
      totalTax += this.calculateTax(item)
    })

    return [total, totalTax]
  }

  printReceipt() {
    var [total, totalTax] = this.calculate()

    return strip`
      ${this.items.map(item => item.price).join('\n')}
      ${'-'.repeat(30)}
      Sub-Total: ${total}
      ${'='.repeat(30)}
      Tax: ${totalTax}
      ${'='.repeat(30)}
      Total: ${total + totalTax}
    `
  }
}
