import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import marbleImg from "@/assets/editorial-marble.jpg";
import deskImg from "@/assets/editorial-desk.jpg";

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

const sections = [
  { n: "01", id: "top", title: "Practice" },
  { n: "02", id: "capabilities", title: "Capabilities" },
  { n: "03", id: "services", title: "Services" },
  { n: "04", id: "approach", title: "Approach" },
  { n: "05", id: "work", title: "Selected work" },
  { n: "06", id: "clients", title: "Clients" },
  { n: "07", id: "contact", title: "Contact" },
];

function HorizonHome() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <Marquee />
      <main>
        <Hero />
        <Capabilities />
        <Services />
        <Approach />
        <Work />
        <Sectors />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ============ Shell ============ */

function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[1280px] px-8 md:px-14 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <span className="inline-block size-1.5 rounded-full bg-primary" />
          <span className="font-display text-[13px] tracking-[0.22em] uppercase">
            Horizon Works
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-[12px] tracking-[0.16em] uppercase text-muted-foreground">
          {sections.slice(1).map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-foreground transition-colors">
              {s.title}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-[12px] tracking-[0.16em] uppercase text-primary hover:text-electric transition-colors"
        >
          Enquire →
        </a>
      </div>
    </header>
  );
}

function Marquee() {
  const items = [
    "Est. 2021",
    "Independent practice",
    "Remote · London / Lisbon / NYC",
    "Currently booking Q2",
    "Selected engagements only",
    "Est. 2021",
    "Independent practice",
    "Remote · London / Lisbon / NYC",
    "Currently booking Q2",
    "Selected engagements only",
  ];
  return (
    <div className="border-b border-border overflow-hidden">
      <div className="flex gap-12 py-3 animate-[marquee_45s_linear_infinite] whitespace-nowrap text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t} <span className="text-primary">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[1280px] px-8 md:px-14">{children}</div>;
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

/* ============ Hero ============ */

function Hero() {
  return (
    <section id="top" className="border-b border-border">
      <Container>
        <div className="grid grid-cols-12 gap-x-8 pt-16 md:pt-24 pb-20 md:pb-28">
          {/* Left: index */}
          <aside className="col-span-12 md:col-span-3 order-2 md:order-1 mt-16 md:mt-0">
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              Index
            </div>
            <ul className="mt-6 space-y-3">
              {sections.map((s) => (
                <li key={s.id} className="flex items-baseline gap-3 text-[13px]">
                  <span className="text-primary font-display">{s.n}</span>
                  <a
                    href={`#${s.id}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Right: headline */}
          <div className="col-span-12 md:col-span-9 order-1 md:order-2">
            <Eyebrow n="01">Practice — Independent since 2021</Eyebrow>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 font-display text-[44px] md:text-[78px] lg:text-[92px] font-medium leading-[0.98] tracking-[-0.025em] text-balance"
            >
              An operating system
              <br />
              for businesses that
              <br />
              <span className="italic font-normal text-primary/90">have outgrown</span>{" "}
              their tools.
            </motion.h1>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl">
              <p className="text-[15px] leading-[1.65] text-foreground/85">
                Horizon Works builds the websites, automations and growth
                systems that mid-market and founder-led companies depend on.
                We take on a small number of engagements each quarter and
                stay involved long after launch.
              </p>
              <p className="text-[15px] leading-[1.65] text-muted-foreground">
                Composed teams. Senior practitioners. No deck theatre, no
                resource pyramid — the people you meet are the people who
                ship.
              </p>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-sm text-foreground border-b border-primary pb-1 hover:text-primary transition-colors"
              >
                Request an introduction <span aria-hidden>→</span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 text-sm text-muted-foreground border-b border-transparent hover:border-border hover:text-foreground pb-1 transition-colors"
              >
                Review selected work <span aria-hidden>↓</span>
              </a>
            </div>

            {/* Meta strip */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-y-8 border-t border-border pt-8">
              {[
                ["Founded", "MMXXI"],
                ["Engagements", "12 / yr"],
                ["Locations", "LDN · LIS · NYC"],
                ["Practice", "Independent"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                    {k}
                  </div>
                  <div className="mt-2 font-display text-base tracking-wide">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============ Capabilities ============ */

function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border">
      <Container>
        <div className="grid grid-cols-12 gap-x-8 py-24 md:py-32">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow n="02">Capabilities</Eyebrow>
          </div>
          <div className="col-span-12 md:col-span-9 mt-10 md:mt-0">
            <p className="font-display text-2xl md:text-[34px] leading-[1.25] tracking-[-0.015em] text-balance max-w-3xl">
              We work where strategy, design and engineering meet. Three
              practices, one team — composed to the engagement.
            </p>

            <div className="mt-20 grid grid-cols-12 gap-8 items-start">
              <div className="col-span-12 md:col-span-7">
                <ul className="divide-y divide-border border-y border-border">
                  {[
                    ["A.", "Brand & site systems", "Identity, narrative, marketing site, CMS."],
                    ["B.", "Workflow automation", "n8n, internal tools, AI-augmented operations."],
                    ["C.", "Lead & revenue systems", "Funnels, CRM, booking, lifecycle."],
                    ["D.", "Ongoing partnership", "Quarterly cycles, measurement, iteration."],
                  ].map(([k, title, body]) => (
                    <li
                      key={k}
                      className="grid grid-cols-12 gap-4 py-7 items-baseline"
                    >
                      <span className="col-span-1 font-display text-primary text-sm">{k}</span>
                      <div className="col-span-11 md:col-span-5 font-display text-lg tracking-tight">
                        {title}
                      </div>
                      <p className="col-span-12 md:col-span-6 text-[14px] text-muted-foreground leading-relaxed">
                        {body}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block col-span-5">
                <div className="aspect-[4/5] overflow-hidden border border-border">
                  <img
                    src={marbleImg}
                    alt=""
                    loading="lazy"
                    width={1280}
                    height={1280}
                    className="size-full object-cover"
                  />
                </div>
                <p className="mt-4 text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                  Fig. 01 — Composition
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============ Services ============ */

const services = [
  {
    roman: "I",
    title: "Websites",
    body: "Marketing sites, landing pages, and portfolios designed to convert and built to last. Considered typography, fast load, search-engine ready.",
    deliverables: ["Strategy & narrative", "Visual identity", "Headless CMS build", "Search foundations"],
    timeline: "4 – 6 weeks",
    investment: "from £14k",
  },
  {
    roman: "II",
    title: "Automation",
    body: "We connect the tools the business already runs on and remove the repetitive work between them — email, WhatsApp, CRM, data sync.",
    deliverables: ["Process mapping", "n8n workflow build", "CRM integration", "Internal tooling"],
    timeline: "3 – 5 weeks",
    investment: "from £9k",
  },
  {
    roman: "III",
    title: "Lead systems",
    body: "End-to-end capture, qualification, and booking. Wired into a calendar, a pipeline, and a follow-up sequence that runs without supervision.",
    deliverables: ["Funnel design", "Pipeline setup", "Booking & reminders", "Lifecycle sequences"],
    timeline: "4 – 8 weeks",
    investment: "from £12k",
  },
];

function Services() {
  return (
    <section id="services" className="border-b border-border">
      <Container>
        <div className="py-24 md:py-32">
          <div className="grid grid-cols-12 gap-x-8">
            <div className="col-span-12 md:col-span-3">
              <Eyebrow n="03">Services</Eyebrow>
            </div>
            <p className="col-span-12 md:col-span-9 mt-10 md:mt-0 font-display text-2xl md:text-[34px] leading-[1.25] tracking-[-0.015em] text-balance max-w-3xl">
              Three offerings, sold individually or composed into a single
              engagement.
            </p>
          </div>

          <div className="mt-20 border-t border-border">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="grid grid-cols-12 gap-x-8 gap-y-6 py-14 border-b border-border"
              >
                <div className="col-span-12 md:col-span-1">
                  <div className="font-display text-primary text-2xl">{s.roman}</div>
                </div>
                <div className="col-span-12 md:col-span-3">
                  <h3 className="font-display text-3xl md:text-4xl tracking-tight">
                    {s.title}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <p className="text-[15px] leading-[1.7] text-foreground/85">
                    {s.body}
                  </p>
                  <ul className="mt-7 grid grid-cols-2 gap-y-2 text-[13px] text-muted-foreground">
                    {s.deliverables.map((d) => (
                      <li key={d} className="flex gap-2.5">
                        <span className="text-primary">—</span> {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-12 md:col-span-3 md:border-l md:pl-8 border-border space-y-6">
                  <div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                      Timeline
                    </div>
                    <div className="mt-2 font-display text-lg">{s.timeline}</div>
                  </div>
                  <div>
                    <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                      Investment
                    </div>
                    <div className="mt-2 font-display text-lg text-primary">
                      {s.investment}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block col-span-12 text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                  No. 0{i + 1} / 03
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============ Approach ============ */

const approach = [
  {
    n: "01",
    title: "Discover",
    body: "Two weeks of structured discovery — interviews with operators, a process audit, and a written brief. The output is a clear picture of the business and the system that fits it.",
    artefact: "Strategy memo",
  },
  {
    n: "02",
    title: "Build",
    body: "We design, prototype, and ship in weekly cycles. You review every Friday; the team integrates feedback the following Monday. No surprises, no late-stage reveals.",
    artefact: "Working software, every week",
  },
  {
    n: "03",
    title: "Launch",
    body: "Production deploy on infrastructure you own. Analytics, monitoring, and a written runbook handed over alongside the code.",
    artefact: "Deployed system & runbook",
  },
  {
    n: "04",
    title: "Scale",
    body: "Optional retainer for measurement, iteration, and continuous improvement. Quarterly business reviews against the metrics that matter.",
    artefact: "Quarterly review",
  },
];

function Approach() {
  return (
    <section id="approach" className="border-b border-border">
      <Container>
        <div className="py-24 md:py-32">
          <div className="grid grid-cols-12 gap-x-8">
            <div className="col-span-12 md:col-span-3">
              <Eyebrow n="04">Approach</Eyebrow>
            </div>
            <div className="col-span-12 md:col-span-9 mt-10 md:mt-0">
              <h2 className="font-display text-2xl md:text-[34px] leading-[1.25] tracking-[-0.015em] text-balance max-w-3xl">
                Engagements run in four stages over six to twelve weeks. We
                work in the open and share progress weekly.
              </h2>
            </div>
          </div>

          <div className="mt-20 border-t border-border">
            {approach.map((p) => (
              <div
                key={p.n}
                className="grid grid-cols-12 gap-x-8 gap-y-4 py-10 border-b border-border items-start"
              >
                <div className="col-span-3 md:col-span-2">
                  <div className="font-display text-5xl md:text-6xl text-primary/90 tabular-nums">
                    {p.n}
                  </div>
                </div>
                <div className="col-span-9 md:col-span-3">
                  <div className="font-display text-2xl tracking-tight">{p.title}</div>
                  <div className="mt-3 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                    Artefact / {p.artefact}
                  </div>
                </div>
                <p className="col-span-12 md:col-span-7 text-[15px] leading-[1.7] text-foreground/85 max-w-2xl">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============ Selected work ============ */

const work = [
  { name: "Coastal Cafe", sector: "Hospitality", scope: "Website & reservations", year: "2024" },
  { name: "Northline Physio", sector: "Healthcare", scope: "Intake automation", year: "2024" },
  { name: "Pure Supplements", sector: "Retail", scope: "Storefront & retention", year: "2023" },
  { name: "Marcus Vale", sector: "Professional services", scope: "Brand site & booking", year: "2023" },
  { name: "Field & Forge", sector: "Light industrial", scope: "Lead pipeline rebuild", year: "2023" },
  { name: "Atelier Mara", sector: "Studio", scope: "Portfolio & commerce", year: "2022" },
];

function Work() {
  return (
    <section id="work" className="border-b border-border">
      <Container>
        <div className="py-24 md:py-32">
          <div className="grid grid-cols-12 gap-x-8">
            <div className="col-span-12 md:col-span-3">
              <Eyebrow n="05">Selected work</Eyebrow>
            </div>
            <p className="col-span-12 md:col-span-9 mt-10 md:mt-0 font-display text-2xl md:text-[34px] leading-[1.25] tracking-[-0.015em] text-balance max-w-3xl">
              A selection of recent engagements. Case studies on request.
            </p>
          </div>

          {/* Featured */}
          <div className="mt-20 grid grid-cols-12 gap-x-8 gap-y-10 items-start">
            <div className="col-span-12 md:col-span-7">
              <div className="aspect-[4/3] overflow-hidden border border-border">
                <img
                  src={deskImg}
                  alt="Featured engagement — Northline Physio"
                  loading="lazy"
                  width={1600}
                  height={1280}
                  className="size-full object-cover"
                />
              </div>
            </div>
            <div className="col-span-12 md:col-span-5 md:pt-6">
              <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                Featured engagement · No. 04
              </div>
              <h3 className="mt-6 font-display text-3xl md:text-4xl tracking-tight">
                Northline Physio
              </h3>
              <p className="mt-6 text-[15px] leading-[1.7] text-foreground/85">
                A multi-site clinic outgrowing manual intake. We rebuilt the
                booking flow, automated paperwork, and wired follow-ups into
                a single pipeline — recovering twelve hours per week per
                practitioner.
              </p>
              <dl className="mt-10 border-t border-border divide-y divide-border">
                {[
                  ["Sector", "Healthcare"],
                  ["Scope", "Site, intake, CRM, reminders"],
                  ["Year", "2024"],
                ].map(([k, v]) => (
                  <div key={k} className="grid grid-cols-12 py-3.5 items-baseline">
                    <dt className="col-span-4 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                      {k}
                    </dt>
                    <dd className="col-span-8 text-[14px]">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Index list */}
          <div className="mt-24">
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground mb-6">
              Index of engagements
            </div>
            <ul className="border-t border-border">
              {work.map((w, i) => (
                <li
                  key={w.name}
                  className="grid grid-cols-12 gap-4 py-6 border-b border-border items-baseline group hover:bg-white/[0.015] transition-colors -mx-2 px-2"
                >
                  <div className="col-span-1 text-[12px] tabular-nums text-muted-foreground font-display">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="col-span-11 md:col-span-4 font-display text-lg tracking-tight">
                    {w.name}
                  </div>
                  <div className="col-span-6 md:col-span-3 text-[12px] tracking-[0.18em] uppercase text-muted-foreground">
                    {w.sector}
                  </div>
                  <div className="col-span-6 md:col-span-3 text-[14px] text-foreground/80">
                    {w.scope}
                  </div>
                  <div className="hidden md:block md:col-span-1 text-right text-[13px] text-muted-foreground tabular-nums">
                    {w.year}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============ Sectors ============ */

function Sectors() {
  const list = [
    "Hospitality",
    "Healthcare",
    "Retail",
    "Professional services",
    "Studios & ateliers",
    "Light industrial",
    "Coaching & advisory",
    "Wellness",
  ];
  return (
    <section className="border-b border-border">
      <Container>
        <div className="py-24 md:py-28 grid grid-cols-12 gap-x-8">
          <div className="col-span-12 md:col-span-3">
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              Sectors served
            </div>
          </div>
          <div className="col-span-12 md:col-span-9 mt-8 md:mt-0">
            <ul className="flex flex-wrap gap-x-10 gap-y-4 font-display text-2xl md:text-[32px] tracking-tight leading-tight">
              {list.map((s, i) => (
                <li key={s} className="flex items-center gap-10">
                  <span className="hover:text-primary transition-colors cursor-default">
                    {s}
                  </span>
                  {i !== list.length - 1 && (
                    <span className="text-primary/60 text-base">◆</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ============ Notes ============ */

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
    <section id="clients" className="border-b border-border">
      <Container>
        <div className="py-24 md:py-32 grid grid-cols-12 gap-x-8 gap-y-16">
          <div className="col-span-12 md:col-span-3">
            <Eyebrow n="06">Clients</Eyebrow>
          </div>
          {notes.map((n, i) => (
            <figure
              key={n.name}
              className={`col-span-12 md:col-span-${i === 0 ? "9 md:col-start-4" : "8 md:col-start-4"}`}
            >
              <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                Note {String(i + 1).padStart(2, "0")}
              </div>
              <blockquote className="mt-6 font-display text-2xl md:text-[30px] leading-[1.3] tracking-[-0.01em] text-foreground/95 text-balance">
                <span className="text-primary mr-2">“</span>
                {n.quote}
                <span className="text-primary ml-1">”</span>
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 text-[12px] tracking-[0.16em] uppercase text-muted-foreground">
                <span className="h-px w-10 bg-primary" />
                {n.name} · {n.role}
              </figcaption>
              {i === 0 && <div className="mt-16 border-b border-border" />}
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ============ Contact ============ */

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <section id="contact">
      <Container>
        <div className="py-24 md:py-32 grid grid-cols-12 gap-x-8 gap-y-16">
          <div className="col-span-12 md:col-span-5">
            <Eyebrow n="07">Contact</Eyebrow>
            <h2 className="mt-10 font-display text-3xl md:text-5xl tracking-[-0.02em] leading-[1.05] text-balance">
              For new engagements and introductions.
            </h2>
            <p className="mt-6 text-[15px] leading-[1.7] text-muted-foreground max-w-md">
              We reply within one business day. If your need is urgent, the
              fastest channel is WhatsApp.
            </p>
            <dl className="mt-14 space-y-5 text-[14px] border-t border-border">
              <ContactRow label="Email" value="hello@horizonworks.co" href="mailto:hello@horizonworks.co" />
              <ContactRow label="WhatsApp" value="+1 (000) 000 0000" href="https://wa.me/10000000000" />
              <ContactRow label="Calendar" value="Schedule a 30-min call" href="#" />
              <ContactRow label="Press" value="press@horizonworks.co" href="mailto:press@horizonworks.co" />
            </dl>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="col-span-12 md:col-span-7 md:pl-12 md:border-l border-border"
          >
            {submitted ? (
              <div className="pt-2">
                <div className="text-[11px] tracking-[0.22em] uppercase text-primary">
                  Received
                </div>
                <div className="mt-6 font-display text-3xl">Thank you.</div>
                <p className="mt-4 text-[15px] text-muted-foreground max-w-md">
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
                    <option className="bg-background">Composed engagement</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <UnderlineLabel>Message</UnderlineLabel>
                  <textarea
                    required
                    rows={3}
                    placeholder="A few lines about your business and what you'd like to change."
                    className="mt-3 w-full bg-transparent border-b border-border pb-3 text-[15px] placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                  />
                </div>
                <div className="md:col-span-2 mt-4 flex items-center justify-between gap-6 flex-wrap">
                  <p className="text-[12px] text-muted-foreground max-w-xs">
                    By sending you agree to be contacted about your enquiry.
                    We do not share your details.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-3.5 text-[13px] tracking-[0.16em] uppercase font-medium hover:bg-electric transition-colors"
                  >
                    Send enquiry <span aria-hidden>→</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </Container>
    </section>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-6 items-baseline border-b border-border pb-4 pt-4">
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

/* ============ Footer ============ */

function Footer() {
  return (
    <footer className="border-t border-border">
      <Container>
        <div className="py-20 grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="size-1.5 rounded-full bg-primary inline-block" />
              <span className="font-display text-[13px] tracking-[0.22em] uppercase">
                Horizon Works
              </span>
            </div>
            <p className="mt-8 font-display text-2xl md:text-[28px] leading-[1.2] tracking-tight max-w-md text-balance">
              An independent practice for websites, automation, and growth
              systems.
            </p>
          </div>

          <FooterCol title="Practice">
            <FooterLink href="#capabilities">Capabilities</FooterLink>
            <FooterLink href="#services">Services</FooterLink>
            <FooterLink href="#approach">Approach</FooterLink>
            <FooterLink href="#work">Selected work</FooterLink>
          </FooterCol>
          <FooterCol title="Office">
            <FooterText>London · Lisbon · NYC</FooterText>
            <FooterText>Mon — Fri · 09:00 — 18:00</FooterText>
            <FooterText>Remote engagements worldwide</FooterText>
          </FooterCol>
          <FooterCol title="Contact">
            <FooterLink href="mailto:hello@horizonworks.co">hello@horizonworks.co</FooterLink>
            <FooterLink href="https://wa.me/10000000000">WhatsApp</FooterLink>
            <FooterLink href="#contact">Schedule a call</FooterLink>
          </FooterCol>
        </div>

        <div className="border-t border-border py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] tracking-[0.2em] uppercase text-muted-foreground">
          <div>© {new Date().getFullYear()} Horizon Works — All rights reserved</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors">Imprint</a>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="col-span-6 md:col-span-2 md:col-start-auto">
      <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
        {title}
      </div>
      <ul className="mt-6 space-y-3 text-[13px]">{children}</ul>
    </div>
  );
}
function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="text-foreground/85 hover:text-primary transition-colors">
        {children}
      </a>
    </li>
  );
}
function FooterText({ children }: { children: React.ReactNode }) {
  return <li className="text-muted-foreground">{children}</li>;
}
