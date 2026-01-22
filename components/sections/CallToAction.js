import Container from "../layout/Container";
import { ButtonLink } from "../ui/Button";

export default function CallToAction({
  title,
  description,
  cta = { label: "Start a project", href: "/contact" },
}) {
  return (
    <section className="bg-neutral-950 py-20 sm:py-24">
      <Container className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Next step
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-neutral-300">
            {description}
          </p>
        </div>
        <ButtonLink href={cta.href} variant="ghost" className="text-neutral-900">
          {cta.label}
        </ButtonLink>
      </Container>
    </section>
  );
}
