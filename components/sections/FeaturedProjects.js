import Container from "../layout/Container";
import SectionHeading from "../layout/SectionHeading";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects({ projects = [] }) {
  return (
    <section className="bg-[#fdfbf8] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects with clarity, depth, and confident execution."
          description="A concise set of releases where strategy meets craft."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
