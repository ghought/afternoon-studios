"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const services = [
  {
    title: "Landing Page Sprint",
    price: "$2,000+",
    timeline: "2–5 days",
    description:
      "Polished marketing sites for products, launches, and businesses. Responsive, modern, deployed to your domain.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "Prototype Sprint",
    price: "$6,000+",
    timeline: "1–2 weeks",
    description:
      "Functional first versions of apps, tools, and products. Real code, real user flows, ready to test or demo.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Interactive Experience",
    price: "$5,000+",
    timeline: "1–2 weeks",
    description:
      "Branded microsites, web games, and campaign experiences built to get attention and engagement.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    gradient: "from-accent/20 to-orange-500/20",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <SectionReveal delay={index * 0.1}>
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        data-hover
        className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/30 hover:bg-card-hover"
      >
        {/* Background gradient */}
        <motion.div
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`}
        />

        <div className="relative z-10">
          <div className="mb-6 inline-flex rounded-xl border border-border bg-background/50 p-3 text-accent">
            {service.icon}
          </div>

          <h3 className="font-display text-2xl font-bold">{service.title}</h3>

          <div className="mt-3 flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold text-accent">
              {service.price}
            </span>
            <span className="font-mono text-xs tracking-wider text-muted">
              / {service.timeline}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted">
            {service.description}
          </p>
        </div>
      </motion.div>
    </SectionReveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <p className="font-mono text-sm tracking-widest text-accent uppercase">
            Services
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
            What I build
          </h2>
          <p className="mt-4 max-w-lg text-muted">
            Three focused offerings. Fixed scope, clear pricing, fast delivery.
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
