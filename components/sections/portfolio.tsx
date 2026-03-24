"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import {
  ExternalLink,
  Github,
  Zap,
  Globe,
  Shield,
  Brain,
  BarChart3,
  Scale,
  TrendingUp,
  Users,
  FileText,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface Product {
  name: string;
  tagline: string;
  description: string;
  role?: string;
  outcomes: { label: string; value: string }[];
  scale?: string;
  architecture?: {
    phases: { title: string; description: string }[];
    callout?: { title: string; description: string };
  };
  tags: { label: string; variant: "default" | "success" | "warning" | "purple" | "pink" | "muted" }[];
  links?: { label: string; href: string; icon: "github" | "external" }[];
}

const products: Product[] = [
  {
    name: "Akamai Early Hints",
    tagline: "Web performance at global scale — HTTP 103 preloading",
    description:
      "A web performance feature built on the HTTP 103 status code that sends early 'hints' to the browser to preload critical resources (CSS, JS, images) while the server processes the main request.",
    role: "Owned end-to-end: identified Core Web Vitals opportunities, wrote requirements, ran structured A/B and multivariate experiments on preload sequencing, and authored the official product launch blog. Accelerated GTM from 18 months to 6 months via Agile transformation.",
    outcomes: [
      { label: "LCP Improvement", value: "30%" },
      { label: "SEO Uplift", value: "10%" },
      { label: "Cloud Revenue Increase", value: "5%" },
    ],
    scale:
      "Operates at ~30% of global web traffic — billions of page loads worldwide.",
    tags: [
      { label: "E-commerce / Retail", variant: "default" },
      { label: "OTA / Travel", variant: "success" },
      { label: "FinTech / BFSI", variant: "purple" },
      { label: "Web Performance", variant: "warning" },
      { label: "Core Web Vitals", variant: "pink" },
    ],
    links: [
      {
        label: "Live Blog",
        href: "https://www.akamai.com/blog/performance/akamai-early-hints-improving-user-experience",
        icon: "external",
      },
    ],
  },
  {
    name: "CA11yFlow",
    tagline:
      "Enterprise AI Compliance Agent — Automated WCAG Remediation",
    description:
      "An AI-driven Accessibility Compliance Agent within enterprise Salesforce ecosystems that automates WCAG validation and direct code remediation workflows.",
    outcomes: [
      { label: "Lawsuit Risk Mitigation", value: "Multi-$M" },
      { label: "Manual Audit Cost Reduction", value: "40-60%" },
      { label: "Feature Time-to-Market", value: "~30% faster" },
    ],
    architecture: {
      phases: [
        {
          title: "Phase 1: Intelligent Discovery",
          description:
            "Playwright headless browser scans DOM for structural/ARIA issues, extracting JSON artifacts.",
        },
        {
          title: "Phase 2: Generative Remediation",
          description:
            "Claude LLM analyzes JSON in the IDE to categorize gaps against WCAG and generate precise fixes without breaking behavior.",
        },
        {
          title: "Phase 3: Verification & Deployment",
          description:
            "Human-in-the-Loop (HITL) review via Side-by-Side Diff View. Explicit approval required before Git commit and PR.",
        },
      ],
      callout: {
        title: "Why Deterministic + Probabilistic AI?",
        description:
          "Enterprise code deployments demand exact functional accuracy. Standard generic LLMs pose unacceptable hallucination risks. The Hybrid Architecture uses a deterministic layer (axe-core) for strict baseline UI compliance, and reserves the probabilistic layer (Claude LLM) strictly for generating contextual fixes. This combines the scientific certainty of static analysis with the dynamic reasoning power of AI, creating an audit-defensible, enterprise-safe pipeline.",
      },
    },
    tags: [
      { label: "SaaS", variant: "default" },
      { label: "Accessibility (WCAG)", variant: "success" },
      { label: "AI Automation", variant: "purple" },
      { label: "DevSecOps", variant: "warning" },
      { label: "Enterprise Software", variant: "pink" },
    ],
    links: [
      {
        label: "Read Article",
        href: "https://medium.com/@debayan2k/tech-series-from-audit-to-action-building-ca11yflow-an-ai-powered-accessibility-guardian-cb0908dbdf07",
        icon: "external",
      },
    ],
  },
  {
    name: "ARC-PM",
    tagline:
      "AI-Native Regulation & Collaborative Project Manager for iGaming",
    description:
      "Production-grade, AI-powered GRC (Governance, Risk & Compliance) and project management platform purpose-built for the iGaming & Casino Technology industry. Solves the $30M+ annual risk problem for iGaming operators through intelligent compliance automation.",
    outcomes: [
      { label: "GRC Assessment Speed", value: "99% faster" },
      { label: "PM Admin Overhead Reduction", value: "90%" },
      { label: "Compliance Coverage", value: "30% → 100%" },
      { label: "Risk Exposure Avoided", value: "$30M-$85M/yr" },
    ],
    tags: [
      { label: "iGaming / Casino Tech", variant: "default" },
      { label: "GRC & Compliance", variant: "warning" },
      { label: "AI-Powered", variant: "purple" },
      { label: "Project Management", variant: "success" },
      { label: "Multilingual", variant: "pink" },
    ],
    links: [
      {
        label: "Live App",
        href: "https://arc-pm.vercel.app/",
        icon: "external",
      },
      {
        label: "GitHub",
        href: "https://github.com/debster9755/arc-pm",
        icon: "github",
      },
    ],
  },
  {
    name: "InnovateAssess AI",
    tagline:
      "AI-Powered R&D Tax Credit & Grant Eligibility Assessment",
    description:
      "Automates evaluation of corporate IT projects against the OECD Frascati Manual to determine eligibility for government R&D tax incentives and grants. Uses a LangGraph state machine pipeline with fan-out/fan-in parallel evaluation of 5 Frascati criteria (Novelty, Creativity, Uncertainty, Systematic Approach, Transferability).",
    outcomes: [
      { label: "Assessment Time", value: "Weeks → Minutes" },
      { label: "Manual Dossier Hours Saved", value: "100+/project" },
      { label: "Consistency", value: "Audit-Defensible" },
    ],
    tags: [
      { label: "Tax Tech / FinTech", variant: "default" },
      { label: "RegTech", variant: "warning" },
      { label: "R&D Tax Credits", variant: "success" },
      { label: "Agentic AI / LangGraph", variant: "purple" },
      { label: "EU Compliance", variant: "pink" },
    ],
    links: [
      {
        label: "Live App",
        href: "https://innovateassess-ai.vercel.app/",
        icon: "external",
      },
      {
        label: "GitHub",
        href: "https://github.com/debster9755/innovateassess-ai",
        icon: "github",
      },
    ],
  },
  {
    name: "RegPM",
    tagline:
      "Regulatory Project Manager — Compliance-to-Delivery Bridge",
    description:
      "Enterprise-grade, AI-driven compliance-to-delivery bridge for PMs in highly regulated industries. Automates translation of dense regulatory text into actionable Agile workflows and standardizes multilingual team communication into audit-ready English logs. Supports 50+ languages with full audit trail export.",
    outcomes: [
      { label: "Regulatory Translation", value: "Weeks → Minutes" },
      { label: "Languages Supported", value: "50+" },
      { label: "Audit Trail", value: "Automated JSON Export" },
    ],
    tags: [
      { label: "Defense / Aerospace", variant: "default" },
      { label: "iGaming", variant: "success" },
      { label: "RegTech", variant: "warning" },
      { label: "AI Automation", variant: "purple" },
      { label: "Multilingual", variant: "pink" },
    ],
    links: [
      {
        label: "Live App",
        href: "https://reg-pm.vercel.app/",
        icon: "external",
      },
      {
        label: "GitHub",
        href: "https://github.com/debster9755/RegPM",
        icon: "github",
      },
    ],
  },
];

function OutcomeCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center p-3 rounded-lg bg-surface-elevated border border-border text-center min-w-[120px]">
      <span className="text-xl md:text-2xl font-bold text-gradient">{value}</span>
      <span className="text-xs text-muted mt-1">{label}</span>
    </div>
  );
}

function ArchitectureTimeline({
  phases,
}: {
  phases: { title: string; description: string }[];
}) {
  return (
    <div className="mt-6">
      <h4 className="text-sm font-semibold text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
        <Zap size={14} className="text-accent" /> Architecture
      </h4>
      <div className="space-y-4">
        {phases.map((phase, i) => (
          <motion.div
            key={phase.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-success flex items-center justify-center text-white text-xs font-bold shrink-0">
                {i + 1}
              </div>
              {i < phases.length - 1 && (
                <div className="w-0.5 h-full bg-border mt-1" />
              )}
            </div>
            <div className="pb-4">
              <h5 className="text-sm font-semibold text-primary">
                {phase.title}
              </h5>
              <p className="text-sm text-muted mt-1">{phase.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ProductShowcase({ product, index }: { product: Product; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-border bg-surface overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <div
        className={`flex flex-col ${
          isEven ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Image area */}
        <div className="lg:w-2/5 p-6 flex items-center justify-center bg-slate-50">
          <ImagePlaceholder
            label={`${product.name} Screenshot`}
            className="w-full"
          />
        </div>

        {/* Content area */}
        <div className="lg:w-3/5 p-6 md:p-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              <h3 className="text-2xl font-bold text-primary">
                {product.name}
              </h3>
              <p className="text-sm text-accent font-medium mt-1">
                {product.tagline}
              </p>
            </div>
            {product.links && (
              <div className="flex gap-2 shrink-0">
                {product.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-border hover:bg-surface-elevated transition-colors"
                    title={link.label}
                  >
                    {link.icon === "github" ? (
                      <Github size={18} className="text-muted" />
                    ) : (
                      <ExternalLink size={18} className="text-muted" />
                    )}
                  </a>
                ))}
              </div>
            )}
          </div>

          <p className="text-muted text-sm leading-relaxed">
            {product.description}
          </p>

          {product.role && (
            <div className="mt-4 p-3 rounded-lg bg-accent/5 border-l-4 border-l-accent">
              <p className="text-sm text-primary">
                <span className="font-semibold">My Role: </span>
                {product.role}
              </p>
            </div>
          )}

          {product.scale && (
            <div className="mt-3 flex items-center gap-2 text-sm">
              <Globe size={14} className="text-success shrink-0" />
              <span className="text-muted">
                <span className="font-medium text-primary">Scale:</span>{" "}
                {product.scale}
              </span>
            </div>
          )}

          {/* Outcomes */}
          <div className="mt-5 flex flex-wrap gap-3">
            {product.outcomes.map((o) => (
              <OutcomeCard key={o.label} {...o} />
            ))}
          </div>

          {/* Architecture timeline */}
          {product.architecture && (
            <>
              <ArchitectureTimeline phases={product.architecture.phases} />
              {product.architecture.callout && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="mt-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200"
                >
                  <h5 className="text-sm font-bold text-purple-800 flex items-center gap-2">
                    <Shield size={14} />
                    {product.architecture.callout.title}
                  </h5>
                  <p className="text-xs text-purple-700 mt-2 leading-relaxed">
                    {product.architecture.callout.description}
                  </p>
                </motion.div>
              )}
            </>
          )}

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {product.tags.map((tag) => (
              <Tag key={tag.label} variant={tag.variant}>
                {tag.label}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="section-padding">
      <div className="container-narrow mx-auto">
        <SectionHeading
          title="Product Portfolio"
          subtitle="Tangible products with measurable ROI and real-world business impact"
        />

        <div className="space-y-10">
          {products.map((product, i) => (
            <ProductShowcase key={product.name} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
