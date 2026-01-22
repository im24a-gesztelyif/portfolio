export default function Textarea({ className = "", rows = 5, ...props }) {
  return (
    <textarea
      rows={rows}
      className={`w-full rounded-2xl border border-neutral-200 bg-white/80 px-4 py-3 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-orange-200 ${className}`}
      {...props}
    />
  );
}
