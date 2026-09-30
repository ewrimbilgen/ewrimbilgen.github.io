import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useState } from "react";
import { HeroDiagram, D, DEFAULT_CAPTION } from "@/components/HeroDiagram";

const TITLE = "Evrim Bilgen · Technical Product Manager";
const DESCRIPTION =
  "Bridging deep software architecture and product strategy to ship production-grade AI products: search, RAG and LLM systems.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const LINKEDIN = "https://www.linkedin.com/in/evrim-bilgen";
const GITHUB = "https://github.com/ewrimbilgen";
const CV = "/Evrim_Bilgen_Resume.pdf";

const ACCENTS = ["bg-sage", "bg-sky", "bg-blush", "bg-sand"] as const;

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#lens" },
  { label: "Career", href: "#career" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const STATS = [
  { value: "10+", label: "years in product" },
  { value: "2M+", label: "research reports made searchable in plain language" },
  { value: "38M", label: "subscribers on the platform I helped transform" },
  { value: "50+", label: "people in the cross-functional team I led" },
];

type Work = {
  index: string;
  context: string;
  title: string;
  description: string;
  tags: string[];
  metric: string[];
};

const WORK: Work[] = [
  {
    index: "01",
    context: "Fractional TPM · AI Product",
    title: "Agentic RAG research assistant",
    description:
      "Enterprise analysts were losing hours across disconnected PDF libraries. Led the build of an assistant that breaks complex questions into search, retrieval and synthesis steps and answers with citations from internal documents. MVP delivered to 3 clients, now shaping the roadmap for a Series A startup.",
    tags: ["RAG", "LangChain", "Langfuse", "RAGAS"],
    metric: ["500K+ documents"],
  },
  {
    index: "02",
    context: "Fractional TPM · Developer Product",
    title: "LLM-powered SDK generator",
    description:
      "Shipped a tool that generates and maintains Python, TypeScript and Java SDKs straight from OpenAPI specs, reducing version drift across client libraries.",
    tags: ["LLM", "OpenAPI", "Python", "TypeScript", "Java"],
    metric: ["2–3 days to under 4 hours"],
  },
  {
    index: "03",
    context: "EMIS · Search",
    title: "Search relevance and latency",
    description:
      "APAC users waited up to 5 seconds per query and 30% of churned trials blamed search. Pulled the query logs, clustered behaviour to find where the long tail broke, then fixed Elasticsearch, caching and pagination in that order.",
    tags: ["Elasticsearch", "Query analysis", "Behavioural clustering"],
    metric: ["P95 latency −18%", "Zero-result −34%"],
  },
  {
    index: "04",
    context: "EMIS · Document Intelligence",
    title: "AI research layer over 2M+ PDFs",
    description:
      "Made the case for natural-language queries across the full report library and led the team through it.",
    tags: ["Semantic search", "LLM", "Product strategy"],
    metric: ["Research time −40%"],
  },
  {
    index: "05",
    context: "EMIS · Platform & APIs",
    title: "API contracts clients could build on",
    description:
      "Undocumented, inconsistent APIs were stretching client integrations to 6 weeks. Worked with client integration teams to find where they got stuck, then drove a refactor on OpenAPI standards with clear contracts and self-service docs.",
    tags: ["OpenAPI", "API design", "Developer experience"],
    metric: ["Integration 6 weeks to 10 days", "40+ enterprise clients"],
  },
  {
    index: "06",
    context: "Turkcell · Platform",
    title: "CRM and billing for 38M subscribers",
    description:
      "Led a 50+ person cross-functional team through a microservices transformation with CI/CD and observability, plus an ML customer-segmentation engine.",
    tags: ["Microservices", "CI/CD", "ML segmentation"],
    metric: ["Deploys 4h+ to under 30 min"],
  },
];

const EARLIER = [
  {
    context: "BR-AG (now Regnology) · Fintech",
    title: "Regulatory reporting that passes validation",
    body: "Redesigned data contracts for COREP and FINREP submissions, added ML risk flagging before filings reached regulators, and gave compliance self-service SQL.",
  },
  {
    context: "Mira · 0-to-1",
    title: "Behavioural scoring for iGaming",
    body: "ML propensity scoring, from concept to a production scoring service validated with A/B tests.",
  },
  {
    context: "Allianz · 0-to-1",
    title: "Mobile health insurance app",
    body: "Taken from nothing to 65% mobile adoption within 6 months, reducing call-centre load.",
  },
];

const LENS = [
  {
    label: "Search & Retrieval",
    title: "Relevance you can measure",
    body: "Elasticsearch, ranking, query understanding, long-tail and zero-result analysis, semantic and vector search.",
  },
  {
    label: "AI × Documents",
    title: "Grounded LLM products",
    body: "RAG over large corpora, citations and grounding, agentic workflows, evals with Langfuse and RAGAS.",
  },
  {
    label: "Platforms & APIs",
    title: "APIs developers adopt",
    body: "API design and versioning, OpenAPI, SDK automation, microservices.",
  },
  {
    label: "Data & Experimentation",
    title: "Decisions from data",
    body: "Python, SQL, behavioural clustering, predictive scoring, A/B testing, KPIs and OKRs.",
  },
];

const CHIPS = [
  "A/B testing",
  "KPIs & OKRs",
  "Python",
  "SQL",
  "Elasticsearch",
  "LangChain",
  "Hugging Face",
  "Langfuse",
  "RAGAS",
  "Claude",
  "Lovable",
  "OpenAPI",
  "AWS",
];

const CAREER = [
  { years: "2025–now", initials: "FT", company: "Fractional TPM", role: "AI product work with B2B SaaS and early-stage teams", location: "Remote" },
  {
    years: "2022–2025",
    initials: "EM",
    company: "ISI Emerging Markets / EMIS",
    role: "Senior Product Manager · teams in Bulgaria, China and the UK",
    location: "Warsaw",
  },
  { years: "2022", initials: "BR", company: "BR-AG (now Regnology)", role: "Senior Product Manager", location: "Poznań" },
  { years: "2020–2021", initials: "MI", company: "Mira", role: "Senior Product Manager", location: "WA, USA" },
  { years: "2017–2019", initials: "TC", company: "Turkcell", role: "Senior Product Manager", location: "Istanbul" },
  { years: "2015–2017", initials: "AZ", company: "Allianz", role: "Senior Product Owner", location: "Istanbul" },
  {
    years: "2013–2015",
    initials: "LO",
    company: "Logo Business",
    role: "Senior Software Analyst Developer",
    location: "Istanbul",
  },
  { years: "2010–2013", initials: "AX", company: "Axa Insurance", role: "Software Developer", location: "Istanbul" },
];

const ABOUT = [
  "I am a Technical Product Manager based in Istanbul, working on search, document intelligence and LLM-powered products.",
  "Before product, I spent five years as a software engineer at Axa and Logo. That background lets me go deep with engineers on architecture and still own the product decision.",
  "I have worked with teams in Turkey, Poland, Bulgaria, China, the UK and the USA, and today I work remotely with clients across time zones.",
  "Curiosity keeps me close to where AI is moving. I want to stay at that edge and bring what holds up into products people rely on.",
  "I studied Data Science and Business Analytics at the University of Warsaw (MSc) and Mathematics and Computer Programming at Maltepe University (BSc).",
];

const shell = "mx-auto w-full max-w-[1200px] px-4 sm:px-8";
const pillPrimary =
  "inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold text-cream transition-opacity hover:opacity-85";
const pillSecondary =
  "inline-flex items-center justify-center rounded-full border border-line bg-surface px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-sand";

function Portfolio() {
  const [active, setActive] = useState<string | null>(null);
  useReveal();

  return (
    <div className="min-h-screen bg-cream text-navy">
      {/* NAV */}
      <header className="sticky top-0 z-50 h-[72px] border-b border-line bg-cream/85 backdrop-blur-md">
        <div className={`${shell} flex h-full items-center justify-between gap-6`}>
          <a href="#top" className="text-xl font-extrabold tracking-tight">
            EB<span className="text-navy-grey">/</span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm font-medium text-ink transition-colors hover:text-navy">
                {l.label}
              </a>
            ))}
          </nav>
          <a href={CV} target="_blank" rel="noopener noreferrer" className={`${pillSecondary} px-5 py-2`}>
            CV ↗
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className={`${shell} reveal grid gap-12 pt-24 pb-16 sm:pb-24 lg:grid-cols-2 lg:items-center`}>
        <div>
          <p className="eyebrow">Istanbul · Technical Product Manager</p>
          <h1
            className="headline mt-6"
            style={{ fontSize: "clamp(72px, 11vw, 150px)", lineHeight: 0.86 }}
          >
            <span className="block">Evrim</span>
            <span className="block text-navy-grey">Bilgen.</span>
          </h1>
          <p className="mt-8 max-w-[34ch] text-hero-ink" style={{ fontSize: "clamp(20px, 2.4vw, 27px)", lineHeight: 1.3, textWrap: "balance" }}>
            Bridging deep software architecture and product strategy to ship production-grade AI products: search, RAG
            and LLM systems.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={pillPrimary}>
              LinkedIn ↗
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={pillSecondary}>
              GitHub ↗
            </a>
            <a href={CV} target="_blank" rel="noopener noreferrer" className={pillSecondary}>
              Download CV ↓
            </a>
          </div>
          <p className="mt-6 text-sm text-ink">
            Worked with teams in Turkey, Poland, Bulgaria, China, the UK and the USA.
          </p>
        </div>
        <div>
          <div
            id="herocard"
            className="hero-grid w-full overflow-hidden border border-line bg-surface"
            style={{ borderRadius: 28, aspectRatio: "640 / 470" }}
          >
            <HeroDiagram active={active} onActive={setActive} />
          </div>
          <p id="cap" className="mt-4 text-right text-sm text-ink">
            {active ? D[active] : DEFAULT_CAPTION}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="reveal border-y border-line">
        <div className={`${shell} grid grid-cols-2 lg:grid-cols-4`}>
          {STATS.map((s, i) => (
            <div
              key={s.value}
              className={`px-2 py-10 sm:px-6 ${i % 2 === 1 ? "border-l border-line" : ""} ${
                i >= 2 ? "border-t border-line lg:border-t-0" : ""
              } ${i === 2 ? "lg:border-l" : ""}`}
            >
              <p className="font-bold tracking-tight" style={{ fontSize: "clamp(40px, 6vw, 68px)", lineHeight: 1 }}>
                {s.value}
              </p>
              <p className="mt-3 text-base text-ink">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK */}
      <section id="work" className={`${shell} py-20 sm:py-28`}>
        <div className="reveal flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">01 · Selected work</p>
            <h2 className="headline mt-5" style={{ fontSize: "clamp(40px, 6vw, 76px)" }}>
              Outcomes, not features.
            </h2>
          </div>
          <p className="max-w-[30ch] text-base text-ink md:text-right">
            Targeting visceral friction, delivering undeniable movement.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6">
          {WORK.map((w) => (
            <article
              key={w.index}
              className="reveal grid gap-6 border border-line bg-surface p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-10 lg:grid-cols-[70px_1fr_240px]"
              style={{ borderRadius: 26 }}
            >
              <span className="font-mono text-sm text-navy-grey">{w.index}</span>
              <div>
                <p className="context-line">{w.context}</p>
                <h3 className="headline mt-3" style={{ fontSize: "clamp(26px, 3.4vw, 32px)" }}>
                  {w.title}
                </h3>
                <p className="mt-4 max-w-[62ch] text-ink" style={{ fontSize: "16.5px", lineHeight: 1.7 }}>
                  {w.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {w.tags.map((t, i) => (
                    <span
                      key={t}
                      className={`${ACCENTS[i % 4]} rounded-full px-3.5 py-1.5 text-xs font-medium text-navy`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-left text-[22px] font-bold leading-snug tracking-tight lg:text-right">
                {w.metric.map((m) => (
                  <p key={m}>{m}</p>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="eyebrow reveal mt-16">Earlier work</p>
        <div className="reveal mt-6 grid gap-6 md:grid-cols-3">
          {EARLIER.map((e) => (
            <article key={e.title} className="border border-line bg-surface p-7" style={{ borderRadius: 22 }}>
              <p className="context-line">{e.context}</p>
              <h3 className="mt-3 text-[19px] font-bold tracking-tight">{e.title}</h3>
              <p className="mt-3 text-[15.5px] text-ink" style={{ lineHeight: 1.7 }}>
                {e.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCT LENS */}
      <section id="lens" className="bg-navy text-cream">
        <div className={`${shell} reveal grid gap-14 py-20 sm:py-28 lg:grid-cols-2`}>
          <div>
            <p className="eyebrow text-dark-eyebrow" style={{ color: "var(--dark-eyebrow)" }}>
              02 · Product lens
            </p>
            <h2 className="headline mt-5" style={{ fontSize: "clamp(40px, 6vw, 76px)" }}>
              Search × AI × Platforms.
            </h2>
            <p className="mt-8 max-w-[46ch] text-dark-body" style={{ fontSize: 18, lineHeight: 1.75 }}>
              I work where search, AI and platforms meet: products that find the right information, reason over it, and
              plug cleanly into the systems around them.
            </p>
          </div>
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {LENS.map((l) => (
                <div
                  key={l.label}
                  className="border border-dark-line bg-dark-card"
                  style={{ borderRadius: 24, padding: 30 }}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-dark-eyebrow">{l.label}</p>
                  <h3 className="mt-3 text-2xl font-bold tracking-tight">{l.title}</h3>
                  <p className="mt-3 text-[15.5px] text-dark-body" style={{ lineHeight: 1.7 }}>
                    {l.body}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {CHIPS.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-dark-line px-4 py-2 text-xs font-medium text-dark-body"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CAREER */}
      <section id="career" className={`${shell} grid gap-14 py-20 sm:py-28 lg:grid-cols-[1fr_1.4fr]`}>
        <div className="reveal lg:sticky lg:top-[112px] lg:self-start">
          <p className="eyebrow">03 · Career</p>
          <h2 className="headline mt-5" style={{ fontSize: "clamp(40px, 5vw, 66px)" }}>
            From dev to prod.
          </h2>
          <p className="mt-7 max-w-[36ch] text-ink" style={{ lineHeight: 1.75 }}>
            Insurance, telecom, fintech, iGaming and research platforms, first as an engineer, then in product.
          </p>
        </div>
        <ul className="reveal divide-y divide-line border-t border-line">
          {CAREER.map((c, i) => (
            <li key={c.company} className="flex items-center gap-4 py-6 sm:gap-6">
              <span className="w-[86px] shrink-0 font-mono text-xs text-ink sm:text-sm">{c.years}</span>
              <span
                className={`${ACCENTS[i % 4]} flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl font-mono text-sm font-medium text-navy`}
              >
                {c.initials}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-bold tracking-tight">{c.company}</span>
                <span className="mt-1 block text-sm text-ink">{c.role}</span>
              </span>
              <span className="hidden shrink-0 rounded-full border border-line px-3.5 py-1.5 text-xs text-ink sm:inline-block">
                {c.location}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* ABOUT */}
      <section id="about" className={`${shell} reveal grid gap-12 py-20 sm:py-28 lg:grid-cols-2`}>
        <div>
          <p className="eyebrow">04 · About</p>
          <h2 className="headline mt-5" style={{ fontSize: "clamp(40px, 6vw, 72px)" }}>
            <span className="block">Engineer first.</span>
            <span className="block text-navy-grey">Product always.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-6">
          {ABOUT.map((p) => (
            <p key={p} className="text-ink" style={{ fontSize: 18, lineHeight: 1.85 }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-line">
        <div className={`${shell} reveal flex flex-col items-center py-20 text-center sm:py-28`}>
          <p className="eyebrow">05 · Contact</p>
          <h2 className="headline mt-5" style={{ fontSize: "clamp(56px, 9vw, 120px)" }}>
            Let's talk.
          </h2>
          <p className="mt-7 max-w-[40ch] text-ink" style={{ fontSize: 18, lineHeight: 1.75 }}>
            Open to Technical PM roles in search, RAG and AI products.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="mailto:bilgen.evrim@gmail.com" className={pillPrimary}>
              Email
            </a>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className={pillSecondary}>
              LinkedIn ↗
            </a>
            <a href={GITHUB} target="_blank" rel="noopener noreferrer" className={pillSecondary}>
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-line">
        <div className={`${shell} py-8 text-center text-sm text-ink`}>© 2026 Evrim Bilgen</div>
      </footer>
    </div>
  );
}
