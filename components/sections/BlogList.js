import Container from "../layout/Container";
import SectionHeading from "../layout/SectionHeading";
import BlogCard from "./BlogCard";

export default function BlogList({ posts = [] }) {
  return (
    <section className="bg-[#f8f6f2] py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Journal"
          title="Notes on process, identity, and product design."
          description="Short pieces that explain choices, constraints, and outcomes."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogCard key={post.href} post={post} />
          ))}
        </div>
      </Container>
    </section>
  );
}
