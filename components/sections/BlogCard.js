import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <Link
      href={post.href}
      className="group flex h-full flex-col justify-between rounded-3xl border border-neutral-200 bg-white/80 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-neutral-300"
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
          {post.category}
        </p>
        <h3 className="mt-4 text-xl font-semibold text-neutral-950">
          {post.title}
        </h3>
        <p className="mt-3 text-sm text-neutral-600">{post.excerpt}</p>
      </div>
      <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
        {post.date}
      </p>
    </Link>
  );
}
