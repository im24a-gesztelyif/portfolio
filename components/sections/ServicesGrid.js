import Container from "../layout/Container";
import SectionHeading from "../layout/SectionHeading";

export default function ServicesGrid({ services = [] }) {
  return (
    <section className="bg-[#fdfbf8] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="A focused set of services, crafted for modern brands."
          description="Every engagement blends strategy, story, and precise execution."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-[0_25px_60px_rgba(15,23,42,0.08)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-neutral-400">
                {service.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-neutral-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-neutral-600">{service.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
