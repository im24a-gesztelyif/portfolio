export default function Badge({ className = "", children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white ${className}`}
    >
      {children}
    </span>
  );
}
