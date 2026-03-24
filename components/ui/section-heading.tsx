"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="mb-12"
      id={id}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 h-1 w-16 bg-gradient-to-r from-accent to-success rounded-full" />
    </motion.div>
  );
}
