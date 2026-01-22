export default function Card({ className = "", children }) {
  return (
    <div
      className={`rounded-3xl border border-neutral-200/70 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.12)] backdrop-blur ${className}`}
    >
      {children}
    </div>
  );
}
