import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Globe,
  Zap,
  Target,
  Workflow,
  MessageSquare,
  Calendar,
  Sparkles,
  Gauge,
  Headphones,
  ShieldCheck,
  Rocket,
  Check,
  Phone,
  Mail,
  Building2,
  User,
  ChevronRight,
} from "lucide-react";
import heroBg from "@/assets/hero-horizon.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizon Works — Websites, Automation & Growth" },
      {
        name: "description",
        content:
          "Horizon Works builds high-performance websites, AI automation, and lead generation systems that help small and medium businesses grow.",
      },
      { property: "og:title", content: "Horizon Works — Websites, Automation & Growth" },
      {
        property: "og:description",
        content:
          "We help businesses attract more customers, automate repetitive work, and scale efficiently.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HorizonHome,
});

const services = [
  {
    icon: Globe,
    title: "Website Development",
    blurb:
      "Conversion-focused business sites, landing pages, and portfolios — fast, responsive, SEO-ready.",
    items: ["Business websites", "Landing pages", "Portfolio sites", "SEO foundations"],
  },
  {
    icon: Zap,
    title: "AI Automation",
    blurb:
      "We connect your tools and remove the repetitive work — email, WhatsApp, CRM, data sync.",
    items: ["Workflow automation", "Lead routing", "Email & WhatsApp bots", "Data sync"],
  },
  {
    icon: Target,
    title: "Lead Generation",
    blurb:
      "End-to-end funnels that capture, qualify and book — wired straight into your calendar.",
    items: ["Capture funnels", "CRM setup", "Appointment booking", "Customer tracking"],
  },
];

const process = [
  { n: "01", title: "Discover", body: "We learn the business, the goals, and where time is bleeding." },
  { n: "02", title: "Build", body: "Design, ship the site, wire the automations end-to-end." },
  { n: "03", title: "Launch", body: "Deploy, instrument analytics, hand over a system that runs." },
  { n: "04", title: "Scale", body: "Iterate on data — improve conversion and automate growth." },
];

const why = [
  { icon: Sparkles, title: "Modern technology", body: "Next-gen stacks built for speed and longevity." },
  { icon: Rocket, title: "Fast delivery", body: "Most engagements live within 2–4 weeks." },
  { icon: Gauge, title: "Business-focused", body: "Every build maps to a measurable outcome." },
  { icon: Workflow, title: "Automation expertise", body: "n8n, AI agents, CRM and pipeline wiring." },
  { icon: Headphones, title: "Ongoing support", body: "We stay on after launch — you're never stranded." },
  { icon: ShieldCheck, title: "Reliable & secure", body: "Hardened deploys, monitored uptime, clean code." },
];

const portfolio = [
  {
    tag: "Hospitality",
    title: "Coastal Cafe",
    challenge: "Drowning in phone bookings, no online presence.",
    solution: "New site + WhatsApp ordering + reservations into Google Calendar.",
    outcome: "+62% reservations",
  },
  {
    tag: "Health",
    title: "Northline Physio",
    challenge: "Manual intake forms and missed follow-ups.",
    solution: "Lead funnel, automated intake, CRM and reminder sequences.",
    outcome: "3.4× qualified leads",
  },
  {
    tag: "Retail",
    title: "Pure Supplements",
    challenge: "Static catalog, zero retention loops.",
    solution: "Shopify-style storefront, email automation, loyalty workflows.",
    outcome: "+38% repeat orders",
  },
  {
    tag: "Coaching",
    title: "Marcus Vale",
    challenge: "Consulting calendar booked through DMs.",
    solution: "Personal brand site with embedded booking + lead scoring.",
    outcome: "12 hrs/wk saved",
  },
];

const testimonials = [
  {
    quote:
      "Horizon Works rebuilt our site and automated the entire enquiry pipeline. We finally see every lead — and follow up the same day.",
    name: "Amelia Chen",
    role: "Owner, Coastal Cafe",
  },
  {
    quote:
      "They translated our messy spreadsheets into a system that just runs. Bookings doubled in the first quarter.",
    name: "Dr. Rohan Patel",
    role: "Director, Northline Physio",
  },
  {
    quote:
      "Genuinely the most senior partner we've worked with. Calm, fast, and the work is sharp.",
    name: "Marcus Vale",
    role: "Executive Coach",
  },
];

function HorizonHome() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Services />
      <Process />
      <WhyUs />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/40 border-b border-border">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <div className="size-7 rounded-md bg-gradient-to-br from-primary to-electric grid place-items-center shadow-glow">
            <div className="size-2 rounded-sm bg-background" />
          </div>
          Horizon Works
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#process" className="hover:text-foreground transition">Process</a>
          <a href="#work" className="hover:text-foreground transition">Work</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:bg-foreground/90 transition"
        >
          Book a call <ArrowRight className="size-4" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="size-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3 py-1 text-xs text-muted-foreground"
        >
          <span className="size-1.5 rounded-full bg-electric animate-pulse" />
          Now booking Q1 engagements
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="mt-6 max-w-4xl text-balance text-5xl md:text-7xl lg:text-[88px] font-semibold leading-[0.95] tracking-tight"
        >
          Websites,{" "}
          <span className="bg-gradient-to-r from-foreground via-electric to-primary bg-clip-text text-transparent">
            automation
          </span>{" "}
          & growth.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground"
        >
          We help businesses attract more customers, automate repetitive work, and
          scale efficiently — without the bloat of a traditional agency.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-glow hover:opacity-95 transition"
          >
            Book a consultation
            <ArrowRight className="size-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-6 py-3 text-sm font-medium hover:bg-surface transition"
          >
            View services
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
        >
          {[
            ["48+", "Sites shipped"],
            ["2–4 wk", "Avg. delivery"],
            ["120+", "Workflows live"],
            ["98%", "Client retention"],
          ].map(([k, v]) => (
            <div key={v}>
              <div className="font-display text-3xl md:text-4xl font-semibold">{k}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <div className="h-px w-8 bg-border" />
      {children}
    </div>
  );
}

function Services() {
  return (
    <section id="services" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Services</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl text-balance">
              A modern stack for the modern business.
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Three disciplines, one operating system. We pick the right combination for
            where you are — then ship it.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-surface noise ${
                i === 0 ? "md:col-span-3 md:row-span-2" : "md:col-span-3"
              }`}
            >
              <div className="relative p-8 md:p-10 h-full flex flex-col">
                <div className="flex items-start justify-between">
                  <div className="size-12 rounded-2xl bg-gradient-to-br from-primary/30 to-electric/10 border border-border grid place-items-center">
                    <s.icon className="size-5 text-electric" />
                  </div>
                  <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition" />
                </div>
                <h3 className="mt-8 text-2xl md:text-3xl font-semibold tracking-tight">{s.title}</h3>
                <p className="mt-3 text-muted-foreground max-w-md">{s.blurb}</p>
                <ul className="mt-6 grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-muted-foreground">
                      <Check className="size-3.5 text-electric" /> {it}
                    </li>
                  ))}
                </ul>
                {i === 0 && (
                  <div className="mt-auto pt-10">
                    <div className="rounded-2xl border border-border bg-background/40 p-5">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        Featured
                      </div>
                      <div className="mt-1 font-display text-lg">
                        Custom websites engineered for conversion — not just decoration.
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}

          {/* Bento extras */}
          <div className="md:col-span-2 rounded-3xl border border-border bg-gradient-to-br from-primary/20 to-transparent p-8 flex flex-col justify-between min-h-44">
            <MessageSquare className="size-6 text-electric" />
            <div>
              <div className="font-display text-xl font-semibold">WhatsApp pipelines</div>
              <p className="text-sm text-muted-foreground mt-1">
                Two-way conversations, routed and logged automatically.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 rounded-3xl border border-border bg-surface p-8 flex flex-col justify-between min-h-44">
            <Calendar className="size-6 text-electric" />
            <div>
              <div className="font-display text-xl font-semibold">Booking systems</div>
              <p className="text-sm text-muted-foreground mt-1">
                Embedded calendars wired to your CRM and reminders.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 rounded-3xl border border-border bg-surface p-8 flex flex-col justify-between min-h-44">
            <Workflow className="size-6 text-electric" />
            <div>
              <div className="font-display text-xl font-semibold">n8n workflows</div>
              <p className="text-sm text-muted-foreground mt-1">
                Self-hosted automation that scales without per-seat fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Process</SectionLabel>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl text-balance">
          Four steps from idea to growth engine.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {process.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="bg-surface p-8 md:p-10 min-h-56 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-electric text-sm">{p.n}</span>
                <ChevronRight className="size-4 text-muted-foreground" />
              </div>
              <div className="mt-10">
                <div className="font-display text-2xl font-semibold">{p.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <SectionLabel>Why Horizon Works</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl text-balance">
              Built like a product team, priced like a partner.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {why.map((w) => (
            <div
              key={w.title}
              className="group rounded-2xl border border-border bg-surface p-6 hover:bg-surface-elevated transition"
            >
              <div className="size-10 rounded-xl bg-background border border-border grid place-items-center">
                <w.icon className="size-5 text-electric" />
              </div>
              <div className="mt-5 font-display text-lg font-semibold">{w.title}</div>
              <p className="text-sm text-muted-foreground mt-1">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="work" className="py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Selected work</SectionLabel>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl text-balance">
          Real businesses. Measurable outcomes.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {portfolio.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-3xl border border-border bg-surface overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-electric/20 to-transparent" />
                <div className="absolute inset-0 grid-bg opacity-50" />
                <div className="absolute bottom-4 left-6 text-xs uppercase tracking-widest text-muted-foreground bg-background/60 border border-border rounded-full px-3 py-1">
                  {p.tag}
                </div>
                <div className="absolute top-4 right-4 font-display text-3xl text-foreground/90">
                  {p.outcome}
                </div>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                <dl className="mt-5 grid grid-cols-1 gap-3 text-sm">
                  <Row label="Challenge" value={p.challenge} />
                  <Row label="Solution" value={p.solution} />
                  <Row label="Outcome" value={p.outcome} highlight />
                </dl>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="grid grid-cols-[110px_1fr] gap-4 items-start">
      <dt className="text-[11px] uppercase tracking-widest text-muted-foreground pt-0.5">{label}</dt>
      <dd className={highlight ? "text-electric font-medium" : "text-foreground/90"}>{value}</dd>
    </div>
  );
}

function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel>Clients</SectionLabel>
        <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl text-balance">
          Trusted by founders who count their hours.
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="rounded-3xl border border-border bg-surface p-8 flex flex-col h-full"
            >
              <blockquote className="font-display text-lg leading-snug text-foreground/95">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-border">
                <div className="font-medium">{t.name}</div>
                <div className="text-sm text-muted-foreground">{t.role}</div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-28 border-t border-border">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionLabel>Get in touch</SectionLabel>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-balance">
              Let's map your growth engine.
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Tell us where you are. We'll come back within one business day with a
              clear path forward — no decks, no fluff.
            </p>

            <div className="mt-10 space-y-3">
              <a
                href="https://wa.me/10000000000"
                className="flex items-center justify-between rounded-2xl border border-border bg-surface p-5 hover:bg-surface-elevated transition"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-background border border-border grid place-items-center">
                    <MessageSquare className="size-5 text-electric" />
                  </div>
                  <div>
                    <div className="font-medium">WhatsApp us</div>
                    <div className="text-sm text-muted-foreground">Fastest response</div>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground" />
              </a>
              <a
                href="#"
                className="flex items-center justify-between rounded-2xl border border-border bg-surface p-5 hover:bg-surface-elevated transition"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-xl bg-background border border-border grid place-items-center">
                    <Calendar className="size-5 text-electric" />
                  </div>
                  <div>
                    <div className="font-medium">Schedule a 30-min consult</div>
                    <div className="text-sm text-muted-foreground">Free discovery call</div>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground" />
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="rounded-3xl border border-border bg-surface p-6 md:p-8"
          >
            {submitted ? (
              <div className="h-full min-h-96 flex flex-col items-center justify-center text-center">
                <div className="size-14 rounded-full bg-electric/20 grid place-items-center">
                  <Check className="size-6 text-electric" />
                </div>
                <h3 className="mt-5 font-display text-2xl font-semibold">Got it.</h3>
                <p className="mt-2 text-muted-foreground max-w-sm">
                  We'll be in touch within one business day to set up a call.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Field icon={User} label="Name" name="name" placeholder="Jane Doe" />
                <Field icon={Building2} label="Business name" name="business" placeholder="Acme Co." />
                <Field icon={Mail} label="Email" name="email" type="email" placeholder="you@company.com" />
                <Field icon={Phone} label="Phone" name="phone" placeholder="+1 555 0100" />
                <div className="md:col-span-2">
                  <Label>Service required</Label>
                  <select
                    required
                    className="w-full mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>Website Development</option>
                    <option>AI Automation</option>
                    <option>Lead Generation</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <Label>Message</Label>
                  <textarea
                    required
                    rows={4}
                    placeholder="A few lines about your goals…"
                    className="w-full mt-2 rounded-xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="md:col-span-2 mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-glow hover:opacity-95 transition"
                >
                  Send message <ArrowRight className="size-4" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="text-xs uppercase tracking-widest text-muted-foreground">{children}</label>;
}

function Field({
  icon: Icon,
  label,
  name,
  type = "text",
  placeholder,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div className="relative mt-2">
        <Icon className="size-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          required
          name={name}
          type={type}
          placeholder={placeholder}
          className="w-full rounded-xl border border-border bg-background pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <div className="flex items-center gap-2 font-display font-semibold">
          <div className="size-6 rounded-md bg-gradient-to-br from-primary to-electric" />
          Horizon Works
        </div>
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Horizon Works. Websites, automation & growth.
        </div>
      </div>
    </footer>
  );
}
