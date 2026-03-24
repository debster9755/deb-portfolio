"use client";

import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Skills } from "@/components/sections/skills";
import { Portfolio } from "@/components/sections/portfolio";
import { Experience } from "@/components/sections/experience";
import { Contact, Footer } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
