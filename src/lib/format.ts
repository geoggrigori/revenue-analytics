export function formatUSD(cents: number, compact = false): string {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    notation: compact ? "compact" : "standard",
    maximumFractionDigits: compact ? 1 : 0,
  });
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}
