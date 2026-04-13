export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: "game" | "interactive" | "experiment";
  liveUrl?: string;
  featured: boolean;
  emoji: string;
};

export const projects: Project[] = [
  {
    id: "out-of-office",
    title: "Out Of Office",
    description:
      "A top-down stealth-puzzle game. Think Severance meets early Zelda.",
    tags: ["Game", "Puzzle", "Canvas"],
    category: "game",
    featured: true,
    emoji: "🏢",
  },
  {
    id: "alibi",
    title: "Alibi",
    description:
      "Five suspects. Three clues. One liar. A new mystery every day.",
    tags: ["Game", "Daily", "Next.js"],
    category: "game",
    featured: true,
    emoji: "🔍",
  },
  {
    id: "the-last-click",
    title: "The Last Click",
    description:
      "A website with one button. One click at a secret number breaks the site forever.",
    tags: ["Experiment", "Concept", "Interactive"],
    category: "experiment",
    featured: true,
    emoji: "🔴",
  },
  {
    id: "rank-it",
    title: "Rank It",
    description:
      "A New York Times-inspired daily game where you rank things.",
    tags: ["Game", "Daily", "React"],
    category: "game",
    featured: false,
    emoji: "📊",
  },
  {
    id: "yes-or-no",
    title: "Yes Or No",
    description: "A party game that starts conversations.",
    tags: ["Game", "Party", "Interactive"],
    category: "interactive",
    featured: false,
    emoji: "🎉",
  },
  {
    id: "the-waiting-room",
    title: "The Waiting Room",
    description: "A website where you wait in line.",
    tags: ["Experiment", "Concept", "WebSocket"],
    category: "experiment",
    featured: false,
    emoji: "⏳",
  },
  {
    id: "pigeon-impossible",
    title: "Pigeon Impossible",
    description:
      "An 8-bit arcade game where you play as a pigeon terrorizing the city.",
    tags: ["Game", "Arcade", "Canvas"],
    category: "game",
    featured: false,
    emoji: "🐦",
  },
];
