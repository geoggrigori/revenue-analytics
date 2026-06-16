export interface MonthPoint {
  month: string; // e.g. "Jan"
  revenue_cents: number;
  orders: number;
}

export interface Channel {
  name: string;
  revenue_cents: number;
}

export interface Product {
  name: string;
  revenue_cents: number;
  units: number;
}

export interface Summary {
  total_revenue_cents: number;
  orders: number;
  aov_cents: number;
  growth_pct: number;
  months: MonthPoint[];
  channels: Channel[];
  top_products: Product[];
}
