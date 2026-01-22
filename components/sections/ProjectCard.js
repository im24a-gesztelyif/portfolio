import Link from "next/link";
import Badge from "../ui/Badge";

export default function ProjectCard({ project }) {
  return (
    <Link
      href={project.href}
      className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-neutral-300"
    >
      <div>
        <div className="flex items-center justify-between">
          <Badge className="bg-neutral-900 text-white">
            {project.category}
          </Badge>
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-400">
            {project.year}
          </span>
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-neutral-950">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-neutral-600">
          {project.description}
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-neutral-200 px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
}
