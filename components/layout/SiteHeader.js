import Link from "next/link";
import Container from "./Container";
import { ButtonLink } from "../ui/Button";

export default function SiteHeader({
  navItems = [],
  cta = { label: "Start a project", href: "/contact" },
}) {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/70 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-neutral-900"
        >
          Flav.
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden h-10 items-center rounded-full border border-neutral-200 px-4 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500 md:inline-flex">
            Available 2026
          </span>
          <ButtonLink
            href={cta.href}
            size="sm"
            className="hidden md:inline-flex"
          >
            {cta.label}
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
