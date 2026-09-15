"use client";

import { useRef, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Grid3x3,
  BookOpen,
  Library,
  Shuffle,
  LayoutGrid,
  Shapes,
  Puzzle,
  Gauge,
  Sigma,
  VenusAndMars,
  type LucideIcon,
} from "lucide-react";
import type { Game } from "@/lib/games";

const icons: Record<Game["icon"], LucideIcon> = {
  globe: Globe,
  grid: Grid3x3,
  book: BookOpen,
  library: Library,
  shuffle: Shuffle,
  "layout-grid": LayoutGrid,
  shapes: Shapes,
  puzzle: Puzzle,
  gauge: Gauge,
  sigma: Sigma,
  "venus-mars": VenusAndMars,
};

export default function GameCard({ game, index }: { game: Game; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const Icon = icons[game.icon];

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [10, -10]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-10, 10]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  return (
    <motion.a
      ref={ref}
      href={game.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 5) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-[0_10px_30px_-15px_rgba(6,55,151,0.3)] backdrop-blur-sm transition-shadow hover:shadow-[0_25px_50px_-15px_rgba(6,55,151,0.45)]"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(220px circle at ${gx} ${gy}, rgba(30,174,234,0.18), transparent 70%)`
          ),
        }}
      />

      <div
        style={{ transform: "translateZ(40px)" }}
        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${game.gradient} text-white shadow-md`}
      >
        <Icon size={22} />
      </div>

      <span
        style={{ transform: "translateZ(30px)" }}
        className="mb-2 inline-block w-fit rounded-full bg-[var(--brand-mist)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[var(--brand-blue)]"
      >
        {game.tag}
      </span>

      <h3
        style={{ transform: "translateZ(30px)" }}
        className="font-heading mb-2 text-lg font-semibold text-[var(--brand-navy)]"
      >
        {game.title}
      </h3>

      <p
        style={{ transform: "translateZ(20px)" }}
        className="mb-6 flex-1 text-sm leading-relaxed text-[var(--brand-navy)]/65"
      >
        {game.description}
      </p>

      <div
        style={{ transform: "translateZ(30px)" }}
        className="flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-blue)]"
      >
        Play now
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
        />
      </div>
    </motion.a>
  );
}
