interface Props {
  label: string;
  value: string;
  delta?: number;
}

export function Kpi({ label, value, delta }: Props) {
  const up = (delta ?? 0) >= 0;
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold tracking-tight text-slate-900">
        {value}
      </p>
      {delta !== undefined && (
        <p
          className={`mt-1 text-xs font-medium ${
            up ? "text-emerald-600" : "text-rose-600"
          }`}
        >
          {up ? "▲" : "▼"} {Math.abs(delta).toFixed(1)}% vs last month
        </p>
      )}
    </div>
  );
}
