import { getSummary } from "@/lib/data";
import { formatUSD, formatNumber } from "@/lib/format";
import { Kpi } from "@/components/Kpi";
import { RevenueBars } from "@/components/RevenueBars";
import { TrendLine } from "@/components/TrendLine";
import { ChannelSplit } from "@/components/ChannelSplit";

export default function Page() {
  const s = getSummary();

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Revenue Analytics
        </h1>
        <p className="mt-1 text-sm text-slate-500">
          Sample sales analytics dashboard — KPIs, trends and channel breakdown.
        </p>
      </header>

      <section className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Kpi
          label="Total revenue"
          value={formatUSD(s.total_revenue_cents, true)}
        />
        <Kpi label="Orders" value={formatNumber(s.orders)} />
        <Kpi label="Avg. order value" value={formatUSD(s.aov_cents)} />
        <Kpi
          label="Revenue (Dec)"
          value={formatUSD(s.months[s.months.length - 1].revenue_cents, true)}
          delta={s.growth_pct}
        />
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <RevenueBars months={s.months} />
        <TrendLine months={s.months} />
      </section>

      <section className="mt-6 grid gap-6 lg:grid-cols-2">
        <ChannelSplit channels={s.channels} />

        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <h2 className="mb-4 text-lg font-semibold text-slate-900">
            Top products
          </h2>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400">
                <th className="pb-2 font-medium">Product</th>
                <th className="pb-2 text-right font-medium">Units</th>
                <th className="pb-2 text-right font-medium">Revenue</th>
              </tr>
            </thead>
            <tbody>
              {s.top_products.map((p) => (
                <tr key={p.name} className="border-t border-slate-100">
                  <td className="py-2 text-slate-700">{p.name}</td>
                  <td className="py-2 text-right tabular-nums text-slate-500">
                    {formatNumber(p.units)}
                  </td>
                  <td className="py-2 text-right tabular-nums text-slate-700">
                    {formatUSD(p.revenue_cents, true)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="mt-10 text-center text-xs text-slate-400">
        Demo data · built with Next.js, TypeScript and Tailwind CSS.
      </footer>
    </main>
  );
}
