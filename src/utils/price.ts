export function formatPrice(price: number, currency = "EUR") {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  });

  return formatter.format(price);
}
