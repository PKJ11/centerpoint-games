"use client";

import { useRef, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  Clock,
  Shuffle,
  BookOpen,
  Shapes,
  LayoutGrid,
  Flame,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { Game } from "@/lib/games";

const icons: Record<Game["icon"], LucideIcon> = {
  shuffle: Shuffle,
  book: BookOpen,
  shapes: Shapes,
  "layout-grid": LayoutGrid,
  flame: Flame,
  target: Target,
};

export default function GameCard({ game, index }: { game: Game; index: number }) {
  const ref = useRef<HTMLDivElement & HTMLAnchorElement>(null);
  const Icon = icons[game.icon];
  const comingSoon = !!game.comingSoon;

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

  function handleMouseMove(e: ReactMouseEvent<HTMLDivElement & HTMLAnchorElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  }

  function handleMouseLeave() {
    mx.set(0.5);
    my.set(0.5);
  }

  const Wrapper = comingSoon ? motion.div : motion.a;

  return (
    <Wrapper
      ref={ref}
      {...(comingSoon
        ? {}
        : { href: game.href, target: "_blank", rel: "noopener noreferrer" })}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 5) * 0.08, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/60 bg-white/80 p-6 shadow-[0_10px_30px_-15px_rgba(6,55,151,0.3)] backdrop-blur-sm transition-shadow hover:shadow-[0_25px_50px_-15px_rgba(6,55,151,0.45)] ${
        comingSoon ? "cursor-default opacity-90" : ""
      }`}
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

      {comingSoon && (
        <span className="absolute right-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-[var(--brand-navy)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white shadow-md">
          <Clock size={11} />
          Coming soon
        </span>
      )}

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

      {comingSoon ? (
        <div
          style={{ transform: "translateZ(30px)" }}
          className="flex items-center gap-1.5 text-sm font-semibold text-[var(--brand-navy)]/40"
        >
          Coming soon
        </div>
      ) : (
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
      )}
    </Wrapper>
  );
}
