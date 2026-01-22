export default function SectionHeading({
  className = "",
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-neutral-950 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base text-neutral-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
