import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { BlueprintHero } from "@/components/BlueprintHero";
import { OurWork } from "@/components/OurWork";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
} from "lucide-react";
import logoMark from "@/assets/horizon-works-mark.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Horizon Works — Systems That Scale Businesses" },
      {
        name: "description",
        content:
          "Horizon Works is a premium digital agency building websites, AI automation, and lead generation systems for ambitious small and medium businesses.",
      },
      { property: "og:title", content: "Horizon Works — Systems That Scale Businesses" },
      {
        property: "og:description",
        content:
          "Websites, AI automation, and growth systems engineered for businesses that refuse to stay small.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HorizonHome,
});

/* -------------------------------- data -------------------------------- */

const stats = [
  { value: "22+", label: "Projects Built" },
  { value: "500+", label: "Leads Generated" },
  { value: "24/7", label: "Automation Systems" },
];

const services = [
  {
    n: "01",
    title: "Website Development",
    body: "Conversion-focused websites engineered to generate leads, close sales, and establish category authority.",
    points: ["Custom design systems", "Performance & SEO", "CMS & integrations"],
  },
  {
    n: "02",
    title: "AI Automation",
    body: "Custom AI agents, chatbots, and workflow bots that remove repetitive work from your team's day.",
    points: ["24/7 AI assistants", "Ops automation", "Custom integrations"],
  },
  {
    n: "03",
    title: "Lead Generation",
    body: "Systems that identify, capture, and qualify high-intent prospects on autopilot — fed straight to sales.",
    points: ["Outbound engines", "Funnel design", "CRM pipelines"],
  },
  {
    n: "04",
    title: "Workflow Optimization",
    body: "We audit your operations end-to-end and rebuild the friction points as fast, reliable, documented systems.",
    points: ["Process audit", "Tool consolidation", "SOPs & training"],
  },
];

const process = [
  {
    n: "01",
    title: "Discovery",
    body: "Diagnose the business, quantify the gap, define the outcome.",
  },
  { n: "02", title: "Strategy", body: "Blueprint the system, map the stack, ship a written plan." },
  {
    n: "03",
    title: "Execution",
    body: "Design, build, integrate. Weekly progress, no vanity meetings.",
  },
  {
    n: "04",
    title: "Scale",
    body: "Optimize, monitor, iterate. We stay accountable for the number.",
  },
];

const faqs = [
  {
    q: "Who do you work with?",
    a: "Small and medium businesses ready to invest in real infrastructure — not one-off tactics. Typical engagements start at ₹8k.",
  },
  {
    q: "How fast can you ship?",
    a: "Most websites go live in 3–5 weeks. Automation systems are scoped in sprints of 2 weeks. Speed is a design constraint, not an afterthought.",
  },
  {
    q: "Do you retain ownership of what you build?",
    a: "No. Everything — code, workflows, accounts, documentation — is yours. We hand over the keys and stay on retainer if you want us to.",
  },
  {
    q: "Can you integrate with our existing stack?",
    a: "Yes. Supabase, HubSpot, Notion, Airtable, Slack, custom APIs — we build on what you already run.",
  },
];

const pricing = [
  {
    name: "STARTER",
    price: "₹5,000",
    description:
      "Perfect for small businesses and personal brands taking their first professional step online.",
    features: [
      "3–5 pages",
      "Responsive design",
      "Contact / enquiry form",
      "Basic SEO",
      "Deployment",
    ],
  },
  {
    name: "PROFESSIONAL",
    price: "₹10,000",
    description:
      "Our most popular choice for growing businesses that need a polished, high-converting presence.",
    features: [
      "5–8 pages",
      "Premium UI",
      "Smooth animations",
      "WhatsApp integration",
      "Enquiry system",
      "SEO optimization",
      "Deployment",
    ],
    popular: true,
  },
  {
    name: "BUSINESS",
    price: "₹15,000+",
    description:
      "Built for serious businesses that need custom systems, automation, and ongoing control.",
    features: [
      "Custom design",
      "Advanced animations",
      "CMS / database",
      "Business automation",
      "Admin functionality",
      "Maintenance",
    ],
  },
];

/* -------------------------------- ui -------------------------------- */

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-6 border-b-4 border-primary pb-6 mb-16">
      <div className="font-display text-primary text-5xl md:text-7xl font-bold leading-none">
        [{n}]
      </div>
      <div className="label-mono text-foreground">{children}</div>
      <div className="ml-auto hidden md:block h-px flex-1 bg-primary/40" />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b-4 border-primary bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={logoMark.url}
            alt="Horizon Works logo"
            className="h-9 w-9 md:h-10 md:w-10 object-contain"
          />

          <span className="font-display text-lg md:text-xl font-bold tracking-tight">
            HORIZON<span className="text-primary">/</span>WORKS
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 label-mono text-muted-foreground">
          <a href="#services" className="hover:text-primary transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-primary transition-colors">
            Process
          </a>
          <a href="#work" className="hover:text-primary transition-colors">
            Work
          </a>
          <a href="#pricing" className="hover:text-primary transition-colors">
            Pricing
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <a
          href="#contact"
          className="brutal-border bg-primary text-primary-foreground label-mono px-4 md:px-6 py-3 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
        >
          Book Call →
        </a>
      </div>
    </header>
  );
}

function Ticker() {
  const items = [
    "WEBSITES",
    "AI AUTOMATION",
    "LEAD GENERATION",
    "WORKFLOW SYSTEMS",
    "GROWTH INFRASTRUCTURE",
  ];
  const row = [...items, ...items, ...items, ...items];
  return (
    <div className="border-y-4 border-primary bg-primary text-primary-foreground overflow-hidden">
      <div className="flex marquee_mobile md:marquee_laptop whitespace-nowrap py-4">
        {row.map((t, i) => (
          <span
            key={i}
            className="font-display font-bold text-xl md:text-2xl px-8 flex items-center gap-8"
          >
            {t} <span className="text-primary-foreground/60">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative border-b-4 border-primary pt-24 md:pt-28">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-12 md:py-20">
        {/* top meta bar */}
        <div className="flex items-center justify-between label-mono text-muted-foreground border-b-2 border-primary/40 pb-4 mb-12">
          <span className="text-primary">● LIVE — TAKING PROJECTS FOR Q3</span>
          <span className="hidden md:inline">EST. 2023 / GLOBAL / REMOTE-FIRST</span>
          <span>[HW—001]</span>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-8">
            <div className="label-mono text-primary mb-8">HORIZON WORKS / DIGITAL AGENCY</div>
            <h1 className="font-display font-bold tracking-tighter leading-[0.9] text-[15vw] md:text-[9.5rem] lg:text-[8.5rem] xl:text-[9.5rem]">
              BUILDING
              <br />
              <span className="text-primary">SYSTEMS</span>
              <br />
              THAT SCALE
              <br />
              BUSINESSES.
            </h1>

            <div className="grid grid-cols-12 gap-6 mt-14">
              <p className="col-span-12 md:col-span-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
                We design websites, deploy AI automation, and engineer lead generation systems for
                small and medium businesses that refuse to stay small.
              </p>
              <div className="col-span-12 md:col-span-5 flex flex-col gap-4">
                <a
                  href="#contact"
                  className="group brutal-border bg-primary text-primary-foreground px-6 py-5 flex items-center justify-between hover:-translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  <span className="font-display font-bold text-lg">START A PROJECT</span>
                  <ArrowUpRight className="!size-6" />
                </a>
                <a
                  href="#work"
                  className="group brutal-border bg-transparent text-foreground px-6 py-5 flex items-center justify-between hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <span className="font-display font-bold text-lg">SEE THE WORK</span>
                  <ArrowRight className="!size-6" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — geometric block + stats */}
          <div className="col-span-12 lg:col-span-4">
            <div className="relative brutal-border bg-surface aspect-[4/5] overflow-hidden">
              <BlueprintHero />
            </div>

            <div className="mt-6 grid grid-cols-3 lg:grid-cols-1 gap-2 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="brutal-border bg-background p-3 sm:p-4 md:p-6 hover:bg-primary hover:text-primary-foreground transition-colors group min-w-0"
                >
                  <div className="font-display font-bold text-2xl xs:text-3xl sm:text-4xl md:text-5xl leading-none text-primary group-hover:text-primary-foreground">
                    {s.value}
                  </div>

                  <div className="label-mono mt-2 text-[9px] xs:text-[10px] sm:text-xs leading-tight break-words text-muted-foreground group-hover:text-primary-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="border-b-4 border-primary">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-32">
        <SectionLabel n="01">Services</SectionLabel>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] mb-6">
              Four disciplines.
              <br />
              <span className="text-primary">One system.</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Every engagement combines strategy, design, engineering, and automation — delivered as
              one accountable operating system for growth.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="brutal-border bg-background p-6 md:p-8 group hover:-translate-x-1 hover:-translate-y-1 hover:brutal-shadow transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="font-display font-bold text-3xl text-primary">[{s.n}]</div>
                  <ArrowUpRight className="!size-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-bold text-2xl md:text-3xl mb-4 leading-tight">
                  {s.title.toUpperCase()}
                </h3>
                <p className="text-muted-foreground mb-6">{s.body}</p>
                <ul className="border-t-2 border-primary/40 pt-4 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 label-mono text-foreground">
                      <span className="h-2 w-2 bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-b-4 border-primary bg-surface/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-32">
        <SectionLabel n="02">Process</SectionLabel>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 brutal-border">
          {process.map((p, i) => (
            <div
              key={p.n}
              className={`relative p-8 md:p-10 bg-background hover:bg-primary hover:text-primary-foreground transition-colors group ${
                i < process.length - 1 ? "md:border-r-4 border-primary" : ""
              } ${i < 2 ? "border-b-4 md:border-b-0 border-primary" : ""} ${
                i === 2 ? "border-b-4 lg:border-b-0 border-primary" : ""
              }`}
            >
              <div className="font-display font-bold text-6xl md:text-7xl text-primary group-hover:text-primary-foreground mb-8">
                {p.n}
              </div>
              <h3 className="font-display font-bold text-2xl mb-3 uppercase tracking-tight">
                {p.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-primary-foreground/80">
                {p.body}
              </p>
              <div className="absolute top-6 right-6 label-mono opacity-40">STEP</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Results() {
  const results = [
    { k: "AVG. TIME TO LAUNCH", v: "28 DAYS" },
    { k: "AVG. PIPELINE LIFT", v: "3.1×" },
    { k: "CLIENT RETENTION", v: "94%" },
    { k: "HOURS AUTOMATED / MO", v: "1,200+" },
  ];
  return (
    <section className="border-b-4 border-primary bg-primary text-primary-foreground">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {results.map((r, i) => (
            <div
              key={r.k}
              className={`p-6 md:p-8 ${i < 3 ? "border-r-0 lg:border-r-4 border-primary-foreground" : ""} ${
                i % 2 === 0 ? "border-r-4 lg:border-r-4 border-primary-foreground" : ""
              } ${i < 2 ? "border-b-4 lg:border-b-0 border-primary-foreground" : ""}`}
            >
              <div className="font-display font-bold text-4xl md:text-6xl leading-none">{r.v}</div>
              <div className="label-mono mt-4 opacity-80">{r.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="border-b-4 border-primary bg-surface/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-32">
        <SectionLabel n="04">Pricing</SectionLabel>

        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.9] mb-6">
              Choose the right
              <br />
              <span className="text-primary">website</span> for your business.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-end">
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg lg:ml-auto">
              Simple, transparent packages designed to take your business online.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col p-8 md:p-10 transition-all ${
                plan.popular
                  ? "bg-primary text-primary-foreground brutal-border brutal-shadow-lg"
                  : "bg-background brutal-border hover:-translate-x-1 hover:-translate-y-1 hover:brutal-shadow"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background text-foreground border-4 border-primary px-4 py-1 label-mono">
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <div
                  className={`label-mono mb-4 ${plan.popular ? "text-primary-foreground/80" : "text-primary"}`}
                >
                  {plan.name}
                </div>
                <div className="font-display font-bold text-5xl md:text-6xl leading-none mb-4">
                  {plan.price}
                </div>
                <p
                  className={`text-base leading-relaxed ${plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}`}
                >
                  {plan.description}
                </p>
              </div>

              <div
                className={`flex-1 border-t-4 pt-8 mb-10 ${plan.popular ? "border-primary-foreground/30" : "border-primary/40"}`}
              >
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-4">
                      <span
                        className={`h-2 w-2 mt-2 shrink-0 ${plan.popular ? "bg-primary-foreground" : "bg-primary"}`}
                      />
                      <span className="font-display font-bold text-lg leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className={`group w-full py-5 px-6 font-display font-bold text-lg uppercase flex items-center justify-between transition-all ${
                  plan.popular
                    ? "bg-background text-foreground brutal-border hover:-translate-x-1 hover:-translate-y-1"
                    : "bg-primary text-primary-foreground brutal-border hover:-translate-x-1 hover:-translate-y-1"
                }`}
              >
                <span>Get Started</span>
                <ArrowUpRight className="!size-5 group-hover:rotate-45 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg md:text-xl">
            Need something custom?{" "}
            <a
              href="#contact"
              className="text-primary font-display font-bold underline decoration-2 underline-offset-4 hover:text-electric transition-colors"
            >
              Let's build it around your business.
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-b-4 border-primary">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-32">
        <SectionLabel n="05">FAQ</SectionLabel>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="font-display font-bold text-5xl md:text-6xl leading-[0.9]">
              Straight
              <br />
              <span className="text-primary">answers.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 brutal-border divide-y-4 divide-primary">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <button
                  key={f.q}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-6 md:p-8 hover:bg-primary hover:text-primary-foreground transition-colors group"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="flex-1">
                      <div className="label-mono text-primary group-hover:text-primary-foreground mb-3">
                        [{String(i + 1).padStart(2, "0")}]
                      </div>
                      <div className="font-display font-bold text-2xl md:text-3xl">{f.q}</div>
                    </div>
                    <div className="brutal-border w-12 h-12 flex items-center justify-center shrink-0">
                      {isOpen ? <Minus className="!size-5" /> : <Plus className="!size-5" />}
                    </div>
                  </div>
                  {isOpen && (
                    <p className="mt-6 text-muted-foreground group-hover:text-primary-foreground/80 max-w-2xl">
                      {f.a}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [state, setState] = useState<"idle" | "sent">("idle");
  return (
    <section id="contact" className="border-b-4 border-primary bg-surface/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-32">
        <SectionLabel n="06">Contact</SectionLabel>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display font-bold text-5xl md:text-7xl leading-[0.9]">
              LET'S BUILD
              <br />
              <span className="text-primary">SOMETHING</span>
              <br />
              THAT LASTS.
            </h2>
            <p className="text-muted-foreground text-lg mt-8 max-w-md">
              Tell us the outcome you're chasing. We'll respond within one business day with a
              blueprint, timeline, and honest opinion.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <a
                href="mailto:hello@horizonworks.co"
                className="brutal-border p-5 flex items-center gap-4 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Mail className="!size-6 text-primary group-hover:text-primary-foreground" />
                <div>
                  <div className="label-mono text-muted-foreground">EMAIL</div>
                  <div className="font-display font-bold text-lg">hello@horizonworks.co</div>
                </div>
              </a>
              <a
                href="https://wa.me/10000000000"
                className="brutal-border p-5 flex items-center gap-4 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <MessageSquare className="!size-6 text-primary" />
                <div>
                  <div className="label-mono text-muted-foreground">WHATSAPP</div>
                  <div className="font-display font-bold text-lg">Message us directly</div>
                </div>
              </a>
              <a
                href="#"
                className="brutal-border p-5 flex items-center gap-4 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Calendar className="!size-6 text-primary" />
                <div>
                  <div className="label-mono text-muted-foreground">BOOK A CALL</div>
                  <div className="font-display font-bold text-lg">30-min discovery call</div>
                </div>
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setState("sent");
            }}
            className="col-span-12 lg:col-span-7 brutal-border bg-background p-6 md:p-10"
          >
            {state === "sent" ? (
              <div className="py-16 text-center">
                <div className="font-display font-bold text-5xl text-primary mb-4">✓ SENT</div>
                <p className="text-muted-foreground">
                  We received your brief. Expect a reply within one business day.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6">
                <label className="col-span-2 md:col-span-1">
                  <div className="label-mono text-primary mb-2">01 / NAME</div>
                  <input
                    required
                    className="w-full bg-transparent border-b-4 border-primary/40 focus:border-primary outline-none py-3 font-display text-xl"
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="col-span-2 md:col-span-1">
                  <div className="label-mono text-primary mb-2">02 / COMPANY</div>
                  <input
                    className="w-full bg-transparent border-b-4 border-primary/40 focus:border-primary outline-none py-3 font-display text-xl"
                    placeholder="Acme Inc."
                  />
                </label>
                <label className="col-span-2 md:col-span-1">
                  <div className="label-mono text-primary mb-2">03 / EMAIL</div>
                  <input
                    required
                    type="email"
                    className="w-full bg-transparent border-b-4 border-primary/40 focus:border-primary outline-none py-3 font-display text-xl"
                    placeholder="you@company.com"
                  />
                </label>
                <label className="col-span-2 md:col-span-1">
                  <div className="label-mono text-primary mb-2">04 / BUDGET</div>
                  <select className="w-full bg-transparent border-b-4 border-primary/40 focus:border-primary outline-none py-3 font-display text-xl">
                    <option className="bg-background">₹5k</option>
                    <option className="bg-background">₹10k</option>
                    <option className="bg-background">₹15k+</option>
                  </select>
                </label>
                <label className="col-span-2">
                  <div className="label-mono text-primary mb-2">05 / WHAT ARE YOU BUILDING?</div>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-transparent border-b-4 border-primary/40 focus:border-primary outline-none py-3 font-display text-lg resize-none"
                    placeholder="A short paragraph about the project, timeline, and the outcome you want."
                  />
                </label>
                <button
                  type="submit"
                  className="col-span-2 brutal-border bg-primary text-primary-foreground py-5 font-display font-bold text-xl uppercase hover:-translate-x-1 hover:-translate-y-1 transition-transform flex items-center justify-between px-6"
                >
                  <span>Send Brief</span>
                  <ArrowUpRight className="!size-6" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-16">
        <div className="grid grid-cols-12 gap-6 pb-12 border-b-2 border-primary/40">
          <div className="col-span-12 md:col-span-6">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={logoMark.url}
                alt="Horizon Works logo"
                className="h-10 w-10 object-contain"
              />

              <span className="font-display text-xl font-bold tracking-tight">
                HORIZON<span className="text-primary">/</span>WORKS
              </span>
            </div>
            <p className="font-display font-bold text-3xl md:text-4xl leading-tight max-w-lg">
              Modern technology, automation, and design for sustainable growth.
            </p>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="label-mono text-primary mb-4">MENU</div>
            <ul className="space-y-2 font-display text-lg">
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-primary transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-primary transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="label-mono text-primary mb-4">CONTACT</div>
            <ul className="space-y-2 font-display text-lg">
              <li>
                <a
                  href="mailto:hello@horizonworks.co"
                  className="hover:text-primary transition-colors"
                >
                  hello@horizonworks.co
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 label-mono text-muted-foreground">
          <span>© {new Date().getFullYear()} HORIZON WORKS — ALL RIGHTS RESERVED</span>
          <span>BUILT IN-HOUSE / NO TEMPLATES</span>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------- page -------------------------------- */

function HorizonHome() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Ticker />
      <Services />
      <Process />
      <OurWork />
      <Results />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
