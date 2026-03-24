"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p className="mt-3 text-muted text-lg max-w-lg mx-auto">
            Open to conversations about product leadership, AI strategy, and
            building things that matter.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:debroy@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-hover transition-colors"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href="https://linkedin.com/in/debroy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-primary font-medium hover:bg-surface-elevated transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a
              href="https://github.com/debster9755"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-primary font-medium hover:bg-surface-elevated transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> Riga, Latvia
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} /> +371 2637 0091
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6 text-center">
      <p className="text-sm text-muted">
        &copy; {new Date().getFullYear()} Deb Roy. Built with Next.js,
        Tailwind CSS &amp; Framer Motion.
      </p>
    </footer>
  );
}
