import type { MonthPoint } from "@/lib/types";
import { formatUSD } from "@/lib/format";

export function RevenueBars({ months }: { months: MonthPoint[] }) {
  const max = Math.max(...months.map((m) => m.revenue_cents));

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        Monthly revenue
      </h2>
      <div className="flex h-48 items-end gap-2">
        {months.map((m) => (
          <div
            key={m.month}
            className="group flex h-full flex-1 flex-col items-center"
          >
            <div className="relative flex w-full flex-1 items-end">
              <div
                className="w-full rounded-t bg-gradient-to-t from-violet-600 to-violet-400 transition-all group-hover:from-violet-700 group-hover:to-violet-500"
                style={{ height: `${(m.revenue_cents / max) * 100}%` }}
                title={`${m.month}: ${formatUSD(m.revenue_cents)}`}
              />
            </div>
            <span className="mt-1.5 text-[10px] text-slate-400">{m.month}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
