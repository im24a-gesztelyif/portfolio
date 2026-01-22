import Link from "next/link";

const baseStyles =
  "inline-flex items-center justify-center gap-2 rounded-full font-sans text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent disabled:pointer-events-none disabled:opacity-50";

const variants = {
  primary:
    "bg-neutral-900 text-white shadow-[0_15px_40px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:bg-neutral-800",
  ghost:
    "bg-white/60 text-neutral-900 ring-1 ring-neutral-200 backdrop-blur hover:bg-white",
  outline:
    "bg-transparent text-neutral-900 ring-1 ring-neutral-400 hover:bg-neutral-900 hover:text-white",
  dark:
    "bg-neutral-950 text-white ring-1 ring-neutral-800 hover:bg-neutral-900",
};

const sizes = {
  sm: "h-9 px-4",
  md: "h-11 px-6",
  lg: "h-12 px-7 text-base",
};

export function Button({
  className = "",
  size = "md",
  variant = "primary",
  type = "button",
  ...props
}) {
  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}

export function ButtonLink({
  className = "",
  size = "md",
  variant = "primary",
  href,
  ...props
}) {
  return (
    <Link
      href={href}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    />
  );
}
