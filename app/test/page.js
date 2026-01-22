import {
  AboutIntro,
  Badge,
  BlogList,
  Button,
  ButtonLink,
  CallToAction,
  Card,
  ContactSection,
  Container,
  FeaturedProjects,
  Hero,
  PageIntro,
  ProjectOverview,
  Section,
  SectionHeading,
  ServicesGrid,
  SiteFooter,
  SiteHeader,
  StatsRow,
  TextInput,
  Textarea,
} from "../../components";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const socialItems = [
  { label: "Dribbble", href: "https://dribbble.com" },
  { label: "Behance", href: "https://behance.net" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const projects = [
  {
    href: "/projects/aurora",
    category: "Identity",
    year: "2025",
    title: "Aurora Studio",
    description: "A bright, modular identity system for a creative lab.",
    tags: ["Branding", "Visual", "Launch"],
  },
  {
    href: "/projects/kinetic",
    category: "Product",
    year: "2024",
    title: "Kinetic OS",
    description: "A product suite for high-velocity teams and makers.",
    tags: ["Product", "UI", "Systems"],
  },
  {
    href: "/projects/atlas",
    category: "Web",
    year: "2024",
    title: "Atlas Capital",
    description: "A refined digital presence for a boutique fund.",
    tags: ["Web", "Strategy", "Direction"],
  },
];

const posts = [
  {
    href: "/blog/identity-notes",
    category: "Journal",
    title: "Building identity systems that breathe",
    excerpt: "How to design brand systems that stay flexible without losing edge.",
    date: "Oct 12, 2025",
  },
  {
    href: "/blog/product-cadence",
    category: "Process",
    title: "Designing with product cadence",
    excerpt: "A field guide for moving fast without losing craft.",
    date: "Sep 06, 2025",
  },
  {
    href: "/blog/launch-playbook",
    category: "Launch",
    title: "A launch playbook for creative teams",
    excerpt: "Aligning narrative, visuals, and rollout for maximum impact.",
    date: "Aug 22, 2025",
  },
];

const services = [
  {
    label: "Strategy",
    title: "Positioning & narrative",
    body: "Clear market positioning with a story that feels human and confident.",
  },
  {
    label: "Design",
    title: "Visual systems",
    body: "Logos, identity systems, and design language that scale.",
  },
  {
    label: "Digital",
    title: "Web experiences",
    body: "High-end marketing sites and portfolio experiences built to convert.",
  },
  {
    label: "Product",
    title: "Interface design",
    body: "Sleek, functional UI that balances clarity with craft.",
  },
];

const highlights = [
  {
    title: "10+ years in digital design",
    body: "Building portfolios, brands, and product experiences globally.",
  },
  {
    title: "Hands-on from strategy to ship",
    body: "From discovery sessions through launch-ready design systems.",
  },
  {
    title: "Collaborative by default",
    body: "Embedded working style with founders, teams, and agencies.",
  },
];

const stats = [
  {
    value: "45+",
    label: "Launches",
    detail: "Product + brand releases delivered worldwide.",
  },
  {
    value: "96%",
    label: "Retention",
    detail: "Clients returning for long-term partnerships.",
  },
  {
    value: "12",
    label: "Awards",
    detail: "Recognized across design and digital platforms.",
  },
];

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader navItems={navItems} />
      <Hero
        title="Modern portfolios and digital identities with precision and soul."
        subtitle="A test page to showcase all components together. Clean, spacious, and confidently minimal."
      />
      <Section className="bg-white">
        <Container className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Toolkit"
              title="Core UI building blocks"
              description="Buttons, badges, cards, and inputs set the visual tone."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="dark">Dark</Button>
              <ButtonLink href="/projects">Button link</ButtonLink>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Badge>Featured</Badge>
              <Badge className="bg-rose-500">New</Badge>
              <Badge className="bg-orange-500">Studio</Badge>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <TextInput placeholder="Your name" />
              <TextInput placeholder="Email address" type="email" />
              <Textarea placeholder="Short message" />
            </div>
          </div>
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
              Card
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-neutral-950">
              A sleek surface for focused content.
            </h3>
            <p className="mt-3 text-sm text-neutral-600">
              Use cards for highlights, featured projects, or contextual
              callouts.
            </p>
          </Card>
        </Container>
      </Section>
      <StatsRow stats={stats} />
      <AboutIntro highlights={highlights} />
      <ServicesGrid services={services} />
      <FeaturedProjects projects={projects} />
      <BlogList posts={posts} />
      <PageIntro
        title="Project snapshot"
        description="A tight page intro component for internal pages."
        meta={["2025", "Case study", "Remote"]}
      />
      <ProjectOverview
        summary="We crafted a brand identity and web experience that made a boutique studio feel premium, sharp, and future-forward."
        details={[
          { label: "Timeline", value: "6 weeks" },
          { label: "Scope", value: "Identity, Web, System" },
          { label: "Location", value: "Istanbul + Remote" },
        ]}
      />
      <ContactSection />
      <CallToAction
        title="Want the polished version?"
        description="Let us shape the next iteration together and make the site feel unmistakably yours."
      />
      <SiteFooter navItems={navItems} socialItems={socialItems} />
    </div>
  );
}
