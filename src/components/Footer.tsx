"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="font-display text-lg font-bold">Afternoon Studios</p>
          <p className="mt-1 font-mono text-xs text-muted">
            Built in the afternoon{time ? ` — ${time}` : ""}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:hello@afternoonstudios.com"
            data-hover
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            hello@afternoonstudios.com
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            className="font-mono text-xs text-muted transition-colors hover:text-accent"
          >
            X
          </a>
        </div>

        <p className="font-mono text-xs text-muted/50">
          &copy; {new Date().getFullYear()} Afternoon Studios
        </p>
      </div>
    </footer>
  );
}
