import Container from "../layout/Container";

export default function ProjectOverview({ summary, details = [] }) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            Overview
          </p>
          <p className="mt-4 text-lg text-neutral-700">{summary}</p>
        </div>
        <div className="grid gap-6">
          {details.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-5 py-4"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium text-neutral-900">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
