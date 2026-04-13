import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Afternoon Studios — Fast websites, prototypes & interactive experiences",
  description:
    "Fast websites, prototypes, and interactive web experiences — built in days, not months. One-person studio by Garrett Houghton.",
  openGraph: {
    title: "Afternoon Studios",
    description:
      "Fast websites, prototypes, and interactive web experiences — built in days, not months.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
