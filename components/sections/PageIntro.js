import Container from "../layout/Container";

export default function PageIntro({ title, description, meta = [] }) {
  return (
    <section className="bg-[#f8f6f2] py-20 sm:py-24">
      <Container>
        <h1 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base text-neutral-600 sm:text-lg">
          {description}
        </p>
        {meta.length ? (
          <div className="mt-8 flex flex-wrap gap-6 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
            {meta.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        ) : null}
      </Container>
    </section>
  );
}
