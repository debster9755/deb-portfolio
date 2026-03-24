"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Tag } from "@/components/ui/tag";
import {
  Brain,
  BarChart3,
  Cloud,
  ShieldCheck,
  Award,
} from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "GenAI & Data Science",
    color: "from-blue-500 to-purple-500",
    skills: [
      "LLM Orchestration",
      "Agentic Workflows",
      "AI Evals",
      "RAG",
      "LangGraph",
      "Claude Code",
      "Agentforce",
      "Prompt Engineering",
    ],
    certs: [
      "IBM Gen AI Engineering",
      "ISO 42001 Lead Auditor (AI Governance)",
      "Microsoft AI Product Manager",
    ],
  },
  {
    icon: BarChart3,
    title: "Analytics & BI",
    color: "from-emerald-500 to-teal-500",
    skills: [
      "Python",
      "SQL",
      "BigQuery",
      "Tableau",
      "ETL / Data Pipelines",
      "Data Modeling",
      "BABOK Framework",
    ],
    certs: ["IBM Business Analyst", "IBM Data Analyst", "Google BI"],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    color: "from-sky-500 to-blue-500",
    skills: [
      "AWS",
      "Kubernetes",
      "Terraform (IaC)",
      "Microservices",
      "Edge Compute",
      "CDN",
    ],
    certs: [],
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & GRC",
    color: "from-red-500 to-orange-500",
    skills: [
      "Zero Trust",
      "SOC 2",
      "ISO 27001",
      "GDPR",
      "PCI-DSS",
      "HIPAA",
      "IAM",
    ],
    certs: [
      "CISM",
      "CEH",
      "CompTIA Security+",
      "Google Cybersecurity",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface-elevated">
      <div className="container-narrow mx-auto">
        <SectionHeading
          title="Skills & Certifications"
          subtitle="Cross-domain expertise across AI, Analytics, Cloud, and Security"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={item}
              className="rounded-xl border border-border bg-surface p-6 hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-2.5 rounded-lg bg-gradient-to-br ${cat.color} text-white`}
                >
                  <cat.icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-primary">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {cat.skills.map((skill) => (
                  <Tag key={skill} variant="default">
                    {skill}
                  </Tag>
                ))}
              </div>

              {cat.certs.length > 0 && (
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center gap-1.5 mb-2">
                    <Award size={14} className="text-warning" />
                    <span className="text-xs font-semibold text-muted uppercase tracking-wider">
                      Certifications
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.certs.map((cert) => (
                      <Tag key={cert} variant="success">
                        {cert}
                      </Tag>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
