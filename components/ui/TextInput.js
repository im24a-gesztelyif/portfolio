export default function TextInput({ className = "", ...props }) {
  return (
    <input
      className={`h-12 w-full rounded-2xl border border-neutral-200 bg-white/80 px-4 text-sm text-neutral-900 outline-none transition focus:border-neutral-400 focus:ring-2 focus:ring-orange-200 ${className}`}
      {...props}
    />
  );
}
