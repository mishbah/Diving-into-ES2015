export function calculateTax({ price, taxRate, isTaxable }) {
  if (!isTaxable) return 0;
  return price * taxRate / 100;
}
