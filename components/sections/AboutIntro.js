import Container from "../layout/Container";
import SectionHeading from "../layout/SectionHeading";

export default function AboutIntro({ highlights = [] }) {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <SectionHeading
          eyebrow="About"
          title="Design that feels decisive, human, and future-proof."
          description="I combine strategy, product thinking, and sharp visual design to shape portfolios, brands, and digital experiences."
        />
        <div className="grid gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-neutral-200/70 bg-neutral-50 p-6"
            >
              <p className="text-base font-semibold text-neutral-900">
                {item.title}
              </p>
              <p className="mt-2 text-sm text-neutral-600">{item.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
