"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Linkedin, Github, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center section-padding pt-32"
    >
      <div className="container-narrow mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6"
          >
            <MapPin size={14} />
            Riga, Latvia &middot; EU Mobility
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight">
            Deb Roy
          </h1>
          <h2 className="mt-3 text-xl md:text-2xl font-semibold">
            <span className="text-gradient">AI Product Manager</span>
            <span className="text-muted"> | </span>
            <span className="text-primary">Triple-Certified Analyst</span>
          </h2>
          <h3 className="mt-1 text-lg text-muted font-medium">
            Technology Strategy Leader &middot; GenAI &amp; Cloud Architect
          </h3>

          <p className="mt-6 text-muted text-lg leading-relaxed max-w-2xl">
            Triple-Certified Analyst (IBM Business Analyst, IBM Data Analyst,
            Google BI) and AI Product Manager with cross-domain expertise
            spanning{" "}
            <span className="text-primary font-medium">
              Fintech, SaaS, OTT Media, Cloud, and Cybersecurity
            </span>
            . Specialised in fusing GenAI, Business Intelligence, Cloud-Native
            Architecture, and Human-Centric Strategy to drive business
            resilience, regulatory compliance, and measurable growth.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="mailto:debroy@example.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-hover transition-colors"
            >
              <Mail size={16} />
              Get in Touch
            </a>
            <a
              href="https://linkedin.com/in/debroy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-primary text-sm font-medium hover:bg-surface-elevated transition-colors"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://github.com/debster9755"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border text-primary text-sm font-medium hover:bg-surface-elevated transition-colors"
            >
              <Github size={16} />
              GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#skills"
            className="text-muted hover:text-accent transition-colors animate-bounce"
          >
            <ArrowDown size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
