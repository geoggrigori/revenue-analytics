import type { MonthPoint } from "@/lib/types";

// Grafico de linha (SVG puro) da evolucao de pedidos.
export function TrendLine({ months }: { months: MonthPoint[] }) {
  const W = 480;
  const H = 160;
  const pad = 8;
  const values = months.map((m) => m.orders);
  const max = Math.max(...values);
  const min = Math.min(...values);
  const span = max - min || 1;

  const pts = values.map((v, i) => {
    const x = pad + (i / (values.length - 1)) * (W - pad * 2);
    const y = H - pad - ((v - min) / span) * (H - pad * 2);
    return [x, y] as const;
  });

  const line = pts.map(([x, y]) => `${x},${y}`).join(" ");
  const area = `${pad},${H - pad} ${line} ${W - pad},${H - pad}`;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <h2 className="mb-4 text-lg font-semibold text-slate-900">Orders trend</h2>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="h-40 w-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
        <polygon points={area} fill="url(#area)" />
        <polyline
          points={line}
          fill="none"
          stroke="#7c3aed"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        {pts.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="3" fill="#7c3aed" />
        ))}
      </svg>
    </div>
  );
}
