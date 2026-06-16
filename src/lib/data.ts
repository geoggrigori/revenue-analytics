import type { Channel, MonthPoint, Product, Summary } from "./types";

// Dados de demonstracao deterministicos para um dashboard de receita.
const MONTHS: MonthPoint[] = [
  { month: "Jan", revenue_cents: 182_400_00, orders: 1240 },
  { month: "Feb", revenue_cents: 196_100_00, orders: 1318 },
  { month: "Mar", revenue_cents: 174_900_00, orders: 1190 },
  { month: "Apr", revenue_cents: 211_300_00, orders: 1402 },
  { month: "May", revenue_cents: 228_700_00, orders: 1510 },
  { month: "Jun", revenue_cents: 244_500_00, orders: 1624 },
  { month: "Jul", revenue_cents: 239_800_00, orders: 1588 },
  { month: "Aug", revenue_cents: 261_200_00, orders: 1731 },
  { month: "Sep", revenue_cents: 278_900_00, orders: 1842 },
  { month: "Oct", revenue_cents: 295_600_00, orders: 1955 },
  { month: "Nov", revenue_cents: 333_100_00, orders: 2210 },
  { month: "Dec", revenue_cents: 358_400_00, orders: 2387 },
];

const CHANNELS: Channel[] = [
  { name: "Online store", revenue_cents: 1_284_000_00 },
  { name: "Marketplace", revenue_cents: 742_000_00 },
  { name: "Wholesale", revenue_cents: 538_000_00 },
  { name: "Retail", revenue_cents: 231_000_00 },
];

const TOP_PRODUCTS: Product[] = [
  { name: "Aurora Wireless Headset", revenue_cents: 412_900_00, units: 9120 },
  { name: "Nimbus Smart Scale", revenue_cents: 286_500_00, units: 11440 },
  { name: "Vertex Standing Desk", revenue_cents: 254_100_00, units: 1870 },
  { name: "Pulse Fitness Band", revenue_cents: 198_700_00, units: 14260 },
  { name: "Cedar Desk Lamp", revenue_cents: 141_300_00, units: 8050 },
];

export function getSummary(): Summary {
  const total = MONTHS.reduce((s, m) => s + m.revenue_cents, 0);
  const orders = MONTHS.reduce((s, m) => s + m.orders, 0);
  const last = MONTHS[MONTHS.length - 1].revenue_cents;
  const prev = MONTHS[MONTHS.length - 2].revenue_cents;
  return {
    total_revenue_cents: total,
    orders,
    aov_cents: Math.round(total / orders),
    growth_pct: ((last - prev) / prev) * 100,
    months: MONTHS,
    channels: CHANNELS,
    top_products: TOP_PRODUCTS,
  };
}
