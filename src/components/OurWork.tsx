import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

type Project = {
  n: string;
  name: string;
  short: string;
  category: string;
  type: string;
  url: string;
  domain: string;
  description: string;
  capabilities: string[];
  highlights: string[];
};

const PROJECTS: Project[] = [
  {
    n: "01",
    name: "D.K. Dubey Physiotherapy",
    short: "D.K. Dubey",
    category: "Healthcare / Physiotherapy",
    type: "Healthcare Website",
    url: "https://dkphysiotherapy.in/",
    domain: "dkphysiotherapy.in",
    description:
      "A professional healthcare website designed to present physiotherapy services, treatments, conditions, clinic information and appointment/contact options through a clean, trust-focused digital experience.",
    capabilities: ["Web Design", "Development", "Responsive UX"],
    highlights: [
      "Healthcare UX",
      "Service presentation",
      "Trust-focused design",
      "Responsive development",
      "Lead-generation structure",
    ],
  },
  {
    n: "02",
    name: "GZI Kart",
    short: "GZI Kart",
    category: "3D Supplement Shop / Immersive Web Experience",
    type: "3D Supplement Shop",
    url: "https://gzikart.shop/",
    domain: "gzikart.shop",
    description:
      "A visually rich supplement-shop experience built around 3D and immersive web design — interactive product presentation, scroll-based storytelling and modern frontend engineering.",
    capabilities: ["3D Web", "Interactive UI", "Product Experience", "Frontend Development"],
    highlights: [
      "3D web experiences",
      "Interactive product presentation",
      "Scroll-based experiences",
      "Immersive UI",
      "Product storytelling",
      "Modern frontend development",
    ],
  },
  {
    n: "03",
    name: "MVPS Academy",
    short: "MVPS Academy",
    category: "School / Education",
    type: "School Website",
    url: "https://mvpsacademy.in/",
    domain: "mvpsacademy.in",
    description:
      "A professional school website designed to establish a strong digital presence for an educational institution and make important information accessible to students, parents and visitors.",
    capabilities: ["Web Design", "Development", "Information Architecture", "Responsive UX"],
    highlights: [
      "School website architecture",
      "Education-focused UX",
      "Information organization",
      "Institutional branding",
      "Responsive development",
      "Parent/student-friendly navigation",
    ],
  },
  {
    n: "04",
    name: "Fraggo",
    short: "Fraggo",
    category: "Delicate-Item Delivery / Logistics System",
    type: "Delicate-Item Delivery System",
    url: "https://fraggo.shop/",
    domain: "fraggo.shop",
    description:
      "A custom digital delivery experience built for delicate-item logistics — a system designed around a specific operational problem rather than a generic storefront.",
    capabilities: ["System Design", "Delivery UX", "Web Development", "Responsive Interface"],
    highlights: [
      "Delivery workflow",
      "Delicate-item logistics",
      "Custom system design",
      "Service-focused UX",
      "Operational experience",
      "Responsive interface",
    ],
  },
];

const DEVICES = [
  { id: "desktop", label: "Desktop", width: "100%", ratio: "16 / 10" },
  { id: "tablet", label: "Tablet", width: "820px", ratio: "3 / 4" },
  { id: "mobile", label: "Mobile", width: "390px", ratio: "9 / 17" },
] as const;

type DeviceId = (typeof DEVICES)[number]["id"];

function LivePreview({ project, device }: { project: Project; device: DeviceId }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    setLoaded(false);
    setFailed(false);
    timer.current = setTimeout(() => setFailed((f) => (loadedRef.current ? f : true)), 9000);
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.url]);

  useEffect(() => {
    loadedRef.current = loaded;
  }, [loaded]);

  const cfg = DEVICES.find((d) => d.id === device)!;

  return (
    <div className="flex justify-center bg-ink/60 p-3 md:p-6">
      <div
        className="w-full transition-[max-width] duration-500 ease-out"
        style={{ maxWidth: cfg.width }}
      >
        <div
          className="relative w-full border-4 border-primary/60 bg-background overflow-hidden"
          style={{ aspectRatio: cfg.ratio }}
        >
          {!failed && (
            <iframe
              key={project.url + device}
              src={project.url}
              title={`${project.name} Live Preview`}
              loading="lazy"
              onLoad={() => {
                setLoaded(true);
                setFailed(false);
              }}
              onError={() => setFailed(true)}
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0 bg-background"
            />
          )}

          {!loaded && !failed && (
            <div className="absolute inset-0 flex items-center justify-center label-mono text-muted-foreground">
              LOADING LIVE SITE…
            </div>
          )}

          {failed && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="label-mono text-primary">LIVE PREVIEW UNAVAILABLE</div>
              <p className="text-muted-foreground max-w-sm">
                This website doesn&apos;t allow embedded previews.
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-border label-mono px-5 py-3 inline-flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                OPEN LIVE SITE <ArrowUpRight className="!size-4" />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function OurWork() {
  const [active, setActive] = useState(0);
  const [device, setDevice] = useState<DeviceId>("desktop");
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();
  const project = PROJECTS[active];

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="work" className="border-b-4 border-primary" ref={sectionRef}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-20 md:py-32">
        {/* header */}
        <div className="flex items-baseline gap-6 border-b-4 border-primary pb-6 mb-10">
          <div className="font-display text-primary text-5xl md:text-7xl font-bold leading-none">
            [03]
          </div>
          <div className="label-mono text-foreground">Selected Projects / Live Archive</div>
          <div className="ml-auto hidden md:block h-px flex-1 bg-primary/40" />
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-10 md:mb-14">
          <h2 className="col-span-12 lg:col-span-7 font-display font-bold uppercase text-5xl md:text-7xl xl:text-8xl leading-[0.9]">
            Our Work
          </h2>
          <p className="col-span-12 lg:col-span-5 text-lg md:text-xl text-muted-foreground self-end">
            Real websites. Real systems. Built by Horizon Works.
          </p>
        </div>

        {/* main showcase */}
        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* info column */}
          <div className="col-span-12 lg:col-span-4 order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={project.n}
                initial={reduce ? undefined : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduce ? undefined : { opacity: 0, x: 20 }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="brutal-border p-6 md:p-8 bg-background"
              >
                <div className="label-mono text-primary">
                  {project.n} / {String(PROJECTS.length).padStart(2, "0")}
                </div>
                <h3 className="font-display font-bold uppercase text-3xl md:text-4xl leading-none mt-4">
                  {project.name}
                </h3>
                <p className="label-mono text-muted-foreground mt-3">{project.category}</p>
                <p className="text-muted-foreground mt-6">{project.description}</p>

                <dl className="mt-8 space-y-4 border-t-4 border-primary pt-6">
                  <div className="flex justify-between gap-4">
                    <dt className="label-mono text-muted-foreground">Type</dt>
                    <dd className="label-mono text-right">{project.type}</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="label-mono text-muted-foreground">Status</dt>
                    <dd className="label-mono text-primary">Live</dd>
                  </div>
                  <div className="flex justify-between gap-4">
                    <dt className="label-mono text-muted-foreground">Domain</dt>
                    <dd className="label-mono text-right">{project.domain}</dd>
                  </div>
                </dl>

                <div className="mt-6 border-t-4 border-primary pt-6">
                  <div className="label-mono text-muted-foreground mb-3">Capabilities</div>
                  <ul className="flex flex-wrap gap-2">
                    {project.capabilities.map((c) => (
                      <li key={c} className="label-mono border-2 border-primary/50 px-3 py-1.5">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t-4 border-primary pt-6">
                  <div className="label-mono text-muted-foreground mb-3">Highlights</div>
                  <ul className="space-y-2 text-muted-foreground">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-3">
                        <span className="text-primary">/</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 brutal-border label-mono w-full px-5 py-4 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:-translate-x-1 hover:-translate-y-1 hover:brutal-shadow transition-transform"
                >
                  OPEN LIVE SITE <ArrowUpRight className="!size-4" />
                </a>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* preview column */}
          <div className="col-span-12 lg:col-span-8 order-2 flex flex-col gap-6">
            {/* device selector */}
            <div className="flex items-center gap-0 brutal-border w-fit">
              {DEVICES.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDevice(d.id)}
                  className={`label-mono px-4 md:px-6 py-3 border-r-4 last:border-r-0 border-primary transition-colors ${
                    device === d.id
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10 text-muted-foreground"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>

            {/* browser frame */}
            <div className="brutal-border bg-surface">
              <div className="flex items-center gap-3 border-b-4 border-primary px-4 py-3">
                <div className="flex gap-2">
                  <span className="size-3 border-2 border-primary/70" />
                  <span className="size-3 border-2 border-primary/70" />
                  <span className="size-3 border-2 border-primary/70" />
                </div>
                <div className="flex-1 min-w-0 border-2 border-primary/40 px-3 py-1.5">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={project.domain}
                      initial={reduce ? undefined : { opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduce ? undefined : { opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="label-mono block truncate text-muted-foreground"
                    >
                      {project.domain}
                    </motion.span>
                  </AnimatePresence>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${project.name} in a new tab`}
                  className="text-primary hover:text-foreground transition-colors"
                >
                  <ArrowUpRight className="!size-5" />
                </a>
              </div>

              {inView ? (
                <LivePreview project={project} device={device} />
              ) : (
                <div className="aspect-[16/10] flex items-center justify-center label-mono text-muted-foreground">
                  LIVE PREVIEW
                </div>
              )}
            </div>

            {/* project selector */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 brutal-border">
              {PROJECTS.map((p, i) => (
                <button
                  key={p.n}
                  type="button"
                  onClick={() => setActive(i)}
                  className={`text-left p-4 md:p-5 border-primary border-r-4 last:border-r-0 border-b-4 md:border-b-0 [&:nth-child(n+3)]:border-b-0 transition-colors ${
                    active === i
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10"
                  }`}
                >
                  <div className="label-mono opacity-70">{p.n}</div>
                  <div className="font-display font-bold uppercase text-lg md:text-xl leading-tight mt-1">
                    {p.short}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* final CTA */}
        <div className="mt-16 md:mt-24 brutal-border p-8 md:p-12 grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-8">
            <h3 className="font-display font-bold uppercase text-3xl md:text-5xl leading-none">
              Like what you see?
            </h3>
            <p className="text-muted-foreground text-lg mt-4">
              Let&apos;s build something equally sharp for your business.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
            <a
              href="#contact"
              className="brutal-border label-mono px-6 py-4 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:-translate-x-1 hover:-translate-y-1 hover:brutal-shadow transition-transform"
            >
              START A PROJECT <ArrowUpRight className="!size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
