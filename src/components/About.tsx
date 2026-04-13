"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          {/* Interactive doodle area */}
          <SectionReveal>
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl border border-border bg-card">
              <InteractiveDoodle />
            </div>
          </SectionReveal>

          {/* Bio */}
          <SectionReveal delay={0.15}>
            <p className="font-mono text-sm tracking-widest text-accent uppercase">
              About
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Hey, I&apos;m Garrett
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              <p>
                I run Afternoon Studios — a one-person studio for people who
                need something real built fast. Landing pages, prototypes,
                interactive experiences.
              </p>
              <p>
                No decks, no committees, no six-week timelines. Just fast,
                opinionated work that&apos;s ready to ship.
              </p>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 font-mono text-xs tracking-wider text-muted transition-all hover:border-accent/40 hover:text-foreground"
              >
                GitHub
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                data-hover
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2 font-mono text-xs tracking-wider text-muted transition-all hover:border-accent/40 hover:text-foreground"
              >
                X / Twitter
              </a>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

function InteractiveDoodle() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Floating animated shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 20 + i * 15,
            height: 20 + i * 15,
            border: "1px solid",
            borderColor: i % 2 === 0 ? "var(--accent)" : "var(--border)",
            opacity: 0.3 + i * 0.1,
          }}
          animate={{
            x: [0, Math.sin(i * 1.5) * 40, 0],
            y: [0, Math.cos(i * 1.5) * 40, 0],
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Center G */}
      <motion.span
        className="relative z-10 font-display text-8xl font-bold text-accent"
        animate={{ rotate: [0, 2, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        G
      </motion.span>
    </div>
  );
}
