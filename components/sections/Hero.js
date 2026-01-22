import { ButtonLink } from "../ui/Button";
import Container from "../layout/Container";

export default function Hero({
  title,
  subtitle,
  eyebrow = "Digital Designer",
  primaryCta = { label: "View projects", href: "/projects" },
  secondaryCta = { label: "Let us talk", href: "/contact" },
}) {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f2]">
      <div className="absolute -left-40 top-12 h-72 w-72 rounded-full bg-orange-200/40 blur-3xl" />
      <div className="absolute right-10 top-32 h-64 w-64 rounded-full bg-rose-200/40 blur-3xl" />
      <Container className="relative flex min-h-[70vh] flex-col justify-center py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-neutral-950 sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base text-neutral-600 sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink>
          <ButtonLink href={secondaryCta.href} variant="outline">
            {secondaryCta.label}
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
