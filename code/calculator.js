import { calculateTax } from './math';

export const items = [
  { price: 10, isTaxable: true },
  { price: 22, isTaxable: false },
  { price: 13.45, isTaxable: true }
];

export function calculate({ taxRate = 8, items = [] }) {
  return items.reduce((prev, curr) => {
    prev.total += curr.price;
    prev.totalTax += calculateTax({ taxRate, ...curr });
    return prev;
  }, {
    total: 0,
    totalTax: 0
  });
}
