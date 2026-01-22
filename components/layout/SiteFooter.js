import Link from "next/link";
import Container from "./Container";

export default function SiteFooter({ navItems = [], socialItems = [] }) {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <Container className="grid gap-10 py-16 sm:grid-cols-[1.5fr_1fr]">
        <div>
          <p className="text-xl font-semibold text-neutral-900">Flav.</p>
          <p className="mt-3 max-w-md text-sm text-neutral-600">
            Designing products and digital identities with clarity, intent, and
            polish.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-3 text-sm font-medium text-neutral-600">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-neutral-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-sm font-medium text-neutral-600">
            {socialItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-neutral-900"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
