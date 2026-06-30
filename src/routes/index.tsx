import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizon Works — Websites, automation, growth systems" },
      {
        name: "description",
        content:
          "Horizon Works is an independent practice building websites, automation, and growth systems for businesses that have outgrown their tools.",
      },
      { property: "og:title", content: "Horizon Works" },
      {
        property: "og:description",
        content:
          "Websites, automation, and growth systems for businesses that have outgrown their tools.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HorizonHome,
});

function HorizonHome() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main className="mx-auto max-w-[1180px] px-8 md:px-16">
        <Hero />
        <Section n="02" title="Services">
          <Services />
        </Section>
        <Section n="03" title="Approach">
          <Approach />
        </Section>
        <Section n="04" title="Selected work">
          <Work />
        </Section>
        <Section n="05" title="Notes from clients">
          <Notes />
        </Section>
        <Section n="06" title="Contact" last>
          <Contact />
        </Section>
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Primitives ---------- */

function Nav() {
  return (
    <header className="border-b border-border">
      <div className="mx-auto max-w-[1180px] px-8 md:px-16 h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-sm tracking-[0.18em] uppercase">
          Horizon Works
        </a>
        <nav className="hidden md:flex items-center gap-10 text-[13px] text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">Services</a>
          <a href="#approach" className="hover:text-foreground transition-colors">Approach</a>
          <a href="#work" className="hover:text-foreground transition-colors">Work</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Eyebrow({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 text-[11px] tracking-[0.22em] uppercase text-primary">
      <span>{n}</span>
      <span className="h-px w-8 bg-border" />
      <span className="text-muted-foreground">{children}</span>
    </div>
  );
}

function Section({
  n,
  title,
  children,
  last,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  const id = title.toLowerCase().split(" ")[0];
  return (
    <section
      id={id}
      className={`py-24 md:py-32 ${last ? "" : "border-b border-border"}`}
    >
      <Eyebrow n={n}>{title}</Eyebrow>
      <div className="mt-14">{children}</div>
    </section>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="pt-20 md:pt-28 pb-24 md:pb-32 border-b border-border">
      <Eyebrow n="01">Practice</Eyebrow>
      <motion.h1
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="mt-12 max-w-[20ch] text-balance font-display text-4xl md:text-6xl font-medium leading-[1.05] tracking-[-0.02em]"
      >
        Websites, automation, and growth systems for businesses that have outgrown their tools.
      </motion.h1>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 max-w-3xl">
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          Horizon Works is an independent practice. We take on a small number of
          engagements each quarter and stay involved long after launch.
        </p>
        <p className="text-[15px] leading-relaxed text-muted-foreground">
          Based remotely. Working with founders, operators, and professional
          services teams in Europe, the UK, and North America.
        </p>
      </div>

      <div className="mt-16">
        <a
          href="#contact"
          className="inline-flex items-center gap-3 text-sm text-foreground border-b border-primary pb-1 hover:text-primary transition-colors"
        >
          Request an introduction
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}

/* ---------- Services ---------- */

const services = [
  {
    roman: "I",
    title: "Websites",
    body: "Marketing sites, landing pages, and portfolios designed to convert and built to last. Considered typography, fast load, search-engine ready.",
    items: ["Business websites", "Landing pages", "Portfolio sites", "SEO foundations"],
  },
  {
    roman: "II",
    title: "Automation",
    body: "We connect the tools the business already runs on and remove the repetitive work between them — email, WhatsApp, CRM, data sync.",
    items: ["Workflow design", "Lead routing", "Email & WhatsApp", "Data integration"],
  },
  {
    roman: "III",
    title: "Lead systems",
    body: "End-to-end capture, qualification, and booking. Wired into a calendar, a pipeline, and a follow-up sequence that runs without supervision.",
    items: ["Capture funnels", "CRM setup", "Appointment booking", "Customer tracking"],
  },
];

function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
      {services.map((s) => (
        <article key={s.title}>
          <div className="flex items-baseline gap-3">
            <span className="font-display text-primary text-sm">{s.roman}.</span>
            <h3 className="font-display text-2xl tracking-tight">{s.title}</h3>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            {s.body}
          </p>
          <ul className="mt-8 space-y-2 text-[13px] text-foreground/80">
            {s.items.map((i) => (
              <li key={i} className="flex gap-3">
                <span className="text-primary">—</span>
                {i}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}

/* ---------- Approach ---------- */

const approach = [
  { n: "01", title: "Discover", body: "We learn the business — operations, customers, where time is bleeding." },
  { n: "02", title: "Build", body: "We design, ship the site, and wire the automations end-to-end." },
  { n: "03", title: "Launch", body: "We deploy, instrument analytics, and hand over a documented system." },
  { n: "04", title: "Scale", body: "We iterate against real data — improving conversion and automating growth." },
];

function Approach() {
  return (
    <div>
      <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
        Each engagement runs in four stages over four to eight weeks. We work in
        the open, share progress weekly, and avoid the agency rituals — no
        decks, no theatre.
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-4 border-t border-border">
        {approach.map((p, i) => (
          <div
            key={p.n}
            className={`py-8 md:py-10 md:pr-8 ${
              i !== approach.length - 1 ? "md:border-r border-border" : ""
            } ${i !== 0 ? "md:pl-8" : ""}`}
          >
            <div className="text-[11px] tracking-[0.22em] uppercase text-primary">
              {p.n}
            </div>
            <div className="mt-6 font-display text-xl">{p.title}</div>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              {p.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Selected work ---------- */

const work = [
  { name: "Coastal Cafe", sector: "Hospitality", scope: "Website & reservations", year: "2024" },
  { name: "Northline Physio", sector: "Healthcare", scope: "Intake automation", year: "2024" },
  { name: "Pure Supplements", sector: "Retail", scope: "Storefront & retention", year: "2023" },
  { name: "Marcus Vale", sector: "Professional", scope: "Brand site & booking", year: "2023" },
];

function Work() {
  return (
    <div>
      <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
        A selection of recent engagements. Detailed case studies available on
        request.
      </p>
      <ul className="mt-14 border-t border-border">
        {work.map((w) => (
          <li
            key={w.name}
            className="grid grid-cols-12 gap-4 py-6 border-b border-border items-baseline group"
          >
            <div className="col-span-12 md:col-span-4 font-display text-lg">
              {w.name}
            </div>
            <div className="col-span-6 md:col-span-3 text-[13px] uppercase tracking-[0.18em] text-muted-foreground">
              {w.sector}
            </div>
            <div className="col-span-6 md:col-span-4 text-[14px] text-foreground/80">
              {w.scope}
            </div>
            <div className="hidden md:block md:col-span-1 text-right text-[13px] text-muted-foreground tabular-nums">
              {w.year}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------- Notes ---------- */

const notes = [
  {
    quote:
      "They rebuilt our site and automated the entire enquiry pipeline. We now see every lead and respond the same day. It feels less like an agency and more like a small, very competent operations team.",
    name: "Amelia Chen",
    role: "Owner — Coastal Cafe",
  },
  {
    quote:
      "Horizon Works translated a messy collection of spreadsheets into a system that runs itself. The work was calm, considered, and quietly excellent.",
    name: "Dr. Rohan Patel",
    role: "Director — Northline Physio",
  },
];

function Notes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
      {notes.map((n) => (
        <figure key={n.name}>
          <blockquote className="font-display text-xl md:text-[22px] leading-snug text-foreground/95">
            “{n.quote}”
          </blockquote>
          <figcaption className="mt-8 text-[13px] tracking-[0.12em] uppercase text-muted-foreground">
            {n.name}
            <span className="text-primary"> · </span>
            {n.role}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
      <div className="md:col-span-5">
        <p className="text-[15px] leading-relaxed text-muted-foreground max-w-sm">
          For new engagements and introductions. We respond within one business
          day.
        </p>
        <dl className="mt-12 space-y-6 text-[14px]">
          <ContactRow label="Email" value="hello@horizonworks.co" href="mailto:hello@horizonworks.co" />
          <ContactRow label="WhatsApp" value="+1 (000) 000 0000" href="https://wa.me/10000000000" />
          <ContactRow label="Calendar" value="Schedule a 30-min call" href="#" />
        </dl>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSubmitted(true);
        }}
        className="md:col-span-7"
      >
        {submitted ? (
          <div className="border-t border-border pt-10">
            <div className="font-display text-2xl">Thank you.</div>
            <p className="mt-3 text-[14px] text-muted-foreground max-w-md">
              We have your note and will reply within one business day.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
            <UnderlineField label="Name" name="name" />
            <UnderlineField label="Business" name="business" />
            <UnderlineField label="Email" name="email" type="email" />
            <UnderlineField label="Phone" name="phone" />
            <div className="md:col-span-2">
              <UnderlineLabel>Service</UnderlineLabel>
              <select
                required
                defaultValue=""
                className="mt-3 w-full bg-transparent border-b border-border pb-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
              >
                <option value="" disabled>Select a service</option>
                <option className="bg-background">Website</option>
                <option className="bg-background">Automation</option>
                <option className="bg-background">Lead systems</option>
                <option className="bg-background">Not sure yet</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <UnderlineLabel>Message</UnderlineLabel>
              <textarea
                required
                rows={3}
                className="mt-3 w-full bg-transparent border-b border-border pb-3 text-[15px] focus:outline-none focus:border-primary transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-7 py-3 text-sm font-medium hover:bg-electric transition-colors"
              >
                Send enquiry
                <span aria-hidden>→</span>
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="grid grid-cols-[100px_1fr] gap-6 items-baseline border-b border-border pb-5">
      <dt className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
        {label}
      </dt>
      <dd>
        <a href={href} className="text-foreground hover:text-primary transition-colors">
          {value}
        </a>
      </dd>
    </div>
  );
}

function UnderlineLabel({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
      {children}
    </label>
  );
}

function UnderlineField({
  label,
  name,
  type = "text",
}: {
  label: string;
  name: string;
  type?: string;
}) {
  return (
    <div>
      <UnderlineLabel>{label}</UnderlineLabel>
      <input
        required
        name={name}
        type={type}
        className="mt-3 w-full bg-transparent border-b border-border pb-3 text-[15px] focus:outline-none focus:border-primary transition-colors"
      />
    </div>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-[1180px] px-8 md:px-16 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] tracking-[0.16em] uppercase text-muted-foreground">
        <div>Horizon Works</div>
        <div>© {new Date().getFullYear()} — All rights reserved</div>
      </div>
    </footer>
  );
}
