import Container from "../layout/Container";
import SectionHeading from "../layout/SectionHeading";
import { Button } from "../ui/Button";
import TextInput from "../ui/TextInput";
import Textarea from "../ui/Textarea";

export default function ContactSection() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <SectionHeading
          eyebrow="Contact"
          title="Ready to craft something sharp together?"
          description="Share a short overview of your project, timeline, and scope. I reply within 48 hours."
        />
        <form className="rounded-3xl border border-neutral-200 bg-neutral-50/80 p-8 shadow-[0_30px_70px_rgba(15,23,42,0.08)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <TextInput placeholder="Name" name="name" />
            <TextInput placeholder="Email" name="email" type="email" />
          </div>
          <TextInput
            className="mt-4"
            placeholder="Company or brand"
            name="company"
          />
          <Textarea
            className="mt-4"
            placeholder="Tell me about the project"
            name="message"
          />
          <div className="mt-6 flex items-center justify-between">
            <p className="text-xs text-neutral-500">
              Prefer email? hello@flav.studio
            </p>
            <Button type="submit">Send request</Button>
          </div>
        </form>
      </Container>
    </section>
  );
}
