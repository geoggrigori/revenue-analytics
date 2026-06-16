import type { Channel } from "@/lib/types";
import { formatUSD } from "@/lib/format";

export function ChannelSplit({ channels }: { channels: Channel[] }) {
  const total = channels.reduce((s, c) => s + c.revenue_cents, 0);

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">
        Revenue by channel
      </h2>
      <div className="space-y-3">
        {channels.map((c) => {
          const pct = (c.revenue_cents / total) * 100;
          return (
            <div key={c.name}>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-slate-600">{c.name}</span>
                <span className="tabular-nums text-slate-500">
                  {formatUSD(c.revenue_cents, true)} · {pct.toFixed(0)}%
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-violet-500 to-violet-400"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
