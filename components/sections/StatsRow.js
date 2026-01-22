export default function StatsRow({ stats = [] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-2xl border border-neutral-200 bg-white/70 p-6 text-left shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
        >
          <p className="text-3xl font-semibold text-neutral-950">
            {stat.value}
          </p>
          <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
            {stat.label}
          </p>
          {stat.detail ? (
            <p className="mt-3 text-sm text-neutral-600">{stat.detail}</p>
          ) : null}
        </div>
      ))}
    </div>
  );
}
