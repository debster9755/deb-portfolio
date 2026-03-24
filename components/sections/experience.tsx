"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import { Building2, Calendar } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Certinia (formerly FinancialForce)",
    role: "Manager — Product Management & Solutions",
    period: "2023 – Present",
    location: "Riga, Latvia",
    highlights: [
      "Own enterprise SaaS product strategy for Services Estimator within the Salesforce ecosystem",
      "Drive AI-powered SDLC transformation, integrating GenAI agents into development workflows",
      "Lead cross-functional delivery across engineering, QA, UX, and compliance teams",
      "Architect managed package solutions with deep Salesforce platform expertise",
    ],
    tags: ["Enterprise SaaS", "Salesforce", "AI/SDLC", "Product Strategy"],
  },
  {
    company: "Akamai Technologies",
    role: "Senior Product Manager — Solutions & Growth",
    period: "2021 – 2023",
    location: "Bangalore, India",
    highlights: [
      "Owned end-to-end product lifecycle for web performance and security solutions at global CDN scale",
      "Accelerated Early Hints GTM from 18 months to 6 months via Agile transformation",
      "Drove 5% cloud revenue increase through data-driven experimentation and A/B testing",
      "Managed products serving ~30% of global web traffic",
    ],
    tags: ["CDN/Edge", "Web Performance", "Revenue Growth", "A/B Testing"],
  },
  {
    company: "Akamai Technologies",
    role: "Senior Solutions Engineer",
    period: "2019 – 2021",
    location: "Bangalore, India",
    highlights: [
      "Designed enterprise architecture for security and performance solutions across APAC accounts",
      "Pre-sales technical leadership for deals worth $2M+",
      "Deep system design for CDN, WAF, DDoS, and bot management solutions",
    ],
    tags: ["Architecture", "Pre-Sales", "Cybersecurity", "Enterprise"],
  },
  {
    company: "Wasabi Technologies",
    role: "Cloud Solutions Consultant",
    period: "2018 – 2019",
    location: "Remote / India",
    highlights: [
      "Built 0-to-1 cloud storage solutions for partners and enterprise customers",
      "Developed partner ecosystem integrations across backup, media, and surveillance verticals",
    ],
    tags: ["Cloud Storage", "0-to-1", "Partner Ecosystem"],
  },
  {
    company: "Sendbird",
    role: "Technical Account Manager",
    period: "2017 – 2018",
    location: "Remote / India",
    highlights: [
      "Managed API-first platform integrations for enterprise messaging customers",
      "Bridge between engineering and customer success for real-time communications stack",
    ],
    tags: ["API Platforms", "Real-Time Comms", "Developer Relations"],
  },
  {
    company: "MoEngage",
    role: "Director — Customer Success & Solutions",
    period: "2015 – 2017",
    location: "Bangalore, India",
    highlights: [
      "Built and led customer success team from ground up; owned retention and expansion metrics",
      "Drove SaaS adoption and lifecycle management across MarTech customer base",
      "Implemented data-driven customer health scoring and churn prediction workflows",
    ],
    tags: ["Team Leadership", "Customer Success", "MarTech", "SaaS Retention"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-surface-elevated">
      <div className="container-narrow mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Enterprise product leadership across SaaS, Cloud, Security, and AI"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-border hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                variants={item}
                className="flex gap-6"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center pt-1.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-success flex items-center justify-center text-white shrink-0 z-10">
                    <Building2 size={18} />
                  </div>
                </div>

                {/* Content card */}
                <div className="flex-1 rounded-xl border border-border bg-surface p-6 hover:shadow-md hover:border-accent/30 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-primary">
                        {exp.role}
                      </h3>
                      <p className="text-accent font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-muted shrink-0">
                      <Calendar size={12} />
                      {exp.period} &middot; {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-1.5 mb-4">
                    {exp.highlights.map((h, hi) => (
                      <li
                        key={hi}
                        className="text-sm text-muted flex gap-2 items-start"
                      >
                        <span className="text-accent mt-1.5 shrink-0">
                          &bull;
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Tag key={tag} variant="muted">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
