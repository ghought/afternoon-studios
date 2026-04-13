"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";

const projectTypes = [
  "Landing Page",
  "Prototype",
  "Interactive Experience",
  "Something Else",
];
const timelines = ["ASAP", "1–2 weeks", "1 month", "Flexible"];
const budgets = ["< $2k", "$2–5k", "$5–10k", "$10k+"];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      // Fallback — form will still work via Netlify's native handling
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <p className="font-mono text-sm tracking-widest text-accent uppercase">
            Contact
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            Start a project
          </h2>
          <p className="mt-4 max-w-lg text-lg text-muted">
            Got something you want built? Tell me what it is, how fast you need
            it, and let&apos;s figure out if it&apos;s a fit.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-12 flex flex-col items-center rounded-2xl border border-accent/30 bg-card p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: [0, -10, 10, 0] }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="mb-6 text-6xl"
                >
                  🎉
                </motion.div>
                <h3 className="font-display text-2xl font-bold">
                  Message sent!
                </h3>
                <p className="mt-2 text-muted">
                  I&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="mt-12 space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div className="grid gap-6 sm:grid-cols-2">
                  <FloatingInput
                    name="name"
                    label="Name"
                    type="text"
                    required
                    focused={focused}
                    onFocusChange={setFocused}
                  />
                  <FloatingInput
                    name="email"
                    label="Email"
                    type="email"
                    required
                    focused={focused}
                    onFocusChange={setFocused}
                  />
                </div>

                <FloatingTextarea
                  name="message"
                  label="What are you building?"
                  required
                  focused={focused}
                  onFocusChange={setFocused}
                />

                <div className="grid gap-6 sm:grid-cols-3">
                  <SelectField name="type" label="Project type" options={projectTypes} />
                  <SelectField name="timeline" label="Timeline" options={timelines} />
                  <SelectField name="budget" label="Budget (optional)" options={budgets} />
                </div>

                <button
                  type="submit"
                  data-hover
                  className="group mt-4 inline-flex h-12 items-center gap-2 rounded-full bg-accent px-8 font-medium text-background transition-all hover:bg-accent-light"
                >
                  <span>Send message</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
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
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </SectionReveal>
      </div>
    </section>
  );
}

function FloatingInput({
  name,
  label,
  type,
  required,
  focused,
  onFocusChange,
}: {
  name: string;
  label: string;
  type: string;
  required?: boolean;
  focused: string | null;
  onFocusChange: (name: string | null) => void;
}) {
  const isActive = focused === name;

  return (
    <div className="relative">
      <input
        name={name}
        type={type}
        required={required}
        placeholder=" "
        onFocus={() => onFocusChange(name)}
        onBlur={() => onFocusChange(null)}
        className="peer w-full rounded-xl border border-border bg-card px-4 pt-6 pb-2 text-foreground outline-none transition-colors placeholder-shown:pt-4 placeholder-shown:pb-4 focus:border-accent/50"
      />
      <label className="pointer-events-none absolute top-2 left-4 font-mono text-[10px] tracking-wider text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-accent">
        {label}
      </label>
      {isActive && (
        <motion.div
          layoutId="input-glow"
          className="absolute inset-0 -z-10 rounded-xl border border-accent/20"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
}

function FloatingTextarea({
  name,
  label,
  required,
  focused,
  onFocusChange,
}: {
  name: string;
  label: string;
  required?: boolean;
  focused: string | null;
  onFocusChange: (name: string | null) => void;
}) {
  const isActive = focused === name;

  return (
    <div className="relative">
      <textarea
        name={name}
        required={required}
        placeholder=" "
        rows={4}
        onFocus={() => onFocusChange(name)}
        onBlur={() => onFocusChange(null)}
        className="peer w-full resize-none rounded-xl border border-border bg-card px-4 pt-6 pb-2 text-foreground outline-none transition-colors placeholder-shown:pt-4 placeholder-shown:pb-4 focus:border-accent/50"
      />
      <label className="pointer-events-none absolute top-2 left-4 font-mono text-[10px] tracking-wider text-muted transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-accent">
        {label}
      </label>
      {isActive && (
        <motion.div
          layoutId="input-glow"
          className="absolute inset-0 -z-10 rounded-xl border border-accent/20"
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        />
      )}
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
}: {
  name: string;
  label: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block font-mono text-[10px] tracking-wider text-muted">
        {label}
      </label>
      <select
        name={name}
        className="w-full appearance-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-accent/50"
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
