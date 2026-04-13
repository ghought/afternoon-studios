"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import SectionReveal from "./SectionReveal";

const categories = [
  { value: "all", label: "All" },
  { value: "game", label: "Games" },
  { value: "interactive", label: "Interactive" },
  { value: "experiment", label: "Experiments" },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-hover
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent/30 hover:bg-card-hover ${
        project.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Emoji preview area */}
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-card to-background ${
          project.featured ? "h-64 md:h-80" : "h-48 md:h-56"
        }`}
      >
        <motion.span
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? [0, -5, 5, 0] : 0,
          }}
          transition={{ duration: 0.4 }}
          className={`select-none ${
            project.featured ? "text-7xl md:text-8xl" : "text-5xl md:text-6xl"
          }`}
        >
          {project.emoji}
        </motion.span>

        {/* Hover overlay with glow */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-accent/10 to-transparent"
        />

        {/* Tags */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-background/80 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-muted backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Featured badge */}
        {project.featured && (
          <span className="absolute top-3 right-3 rounded-full bg-accent/20 px-2.5 py-0.5 font-mono text-[10px] tracking-wider text-accent">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-xl font-bold">{project.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
          className="mt-4 flex items-center gap-2 text-sm font-medium text-accent"
        >
          <span>Coming soon</span>
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => p.category === filter);

  // Sort so featured items come first
  const sorted = [...filtered].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <section id="work" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="font-mono text-sm tracking-widest text-accent uppercase">
            Portfolio
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            The work
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Games, experiments, and interactive things for the internet.
            Everything here is live and playable.
          </p>
        </SectionReveal>

        {/* Filter */}
        <SectionReveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                data-hover
                className={`rounded-full px-5 py-2 font-mono text-xs tracking-wider transition-all ${
                  filter === cat.value
                    ? "bg-accent text-background"
                    : "border border-border text-muted hover:border-accent/40 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Grid */}
        <motion.div
          layout
          className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {sorted.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
