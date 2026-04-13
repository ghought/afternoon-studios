"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const steps = [
  {
    number: "01",
    title: "Scope",
    description: "Define exactly what's being built and what \"done\" means.",
  },
  {
    number: "02",
    title: "Build",
    description: "Fast execution with a focus on craft and polish.",
  },
  {
    number: "03",
    title: "Review",
    description: "One structured revision round.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Deployed, handed off, ready to go.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="font-mono text-sm tracking-widest text-accent uppercase">
            Process
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            How it works
          </h2>
        </SectionReveal>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent md:left-1/2 md:block" />

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 0.1}>
                <div
                  className={`relative flex items-start gap-8 md:gap-16 ${
                    i % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Number dot */}
                  <div className="relative z-10 hidden md:absolute md:left-1/2 md:flex md:-translate-x-1/2">
                    <motion.div
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.15 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-background font-mono text-sm text-accent"
                    >
                      {step.number}
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div
                    className={`flex-1 md:w-1/2 ${
                      i % 2 === 1 ? "md:text-right" : ""
                    }`}
                  >
                    <span className="font-mono text-xs tracking-widest text-accent md:hidden">
                      {step.number}
                    </span>
                    <h3 className="font-display text-2xl font-bold md:text-3xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-muted">{step.description}</p>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden flex-1 md:block" />
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
