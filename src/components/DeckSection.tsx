"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Brain,
  Type,
  Flame,
  RotateCcw,
  Hand,
  type LucideIcon,
} from "lucide-react";
import { games } from "@/lib/games";

type Category = {
  id: string;
  title: string;
  blurb: string;
  icon: LucideIcon;
  gradient: string;
  gameIds: string[];
};

const categories: Category[] = [
  {
    id: "word-wizards",
    title: "Word Wizards",
    blurb: "Scramble, unscramble and race to piece letters back together.",
    icon: Type,
    gradient: "from-[#1eaeea] to-[#0c2156]",
    gameIds: ["anagram-letter-swap", "anagram-word-builder"],
  },
  {
    id: "logic-legends",
    title: "Logic Legends",
    blurb: "Grids and patterns that train your brain to spot what's next.",
    icon: Brain,
    gradient: "from-[#063797] to-[#1eaeea]",
    gameIds: ["symmetric-pattern", "sudoku"],
  },
  {
    id: "danger-zone",
    title: "Danger Zone",
    blurb: "Dodge lava and defuse bombs in these quick-reflex challenges.",
    icon: Flame,
    gradient: "from-[#ff6600] to-[#ed904a]",
    gameIds: ["knight", "arrow"],
  },
];

function gameTitle(id: string) {
  return games.find((g) => g.id === id)?.title ?? id;
}

export default function DeckSection() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  return (
    <section className="relative overflow-hidden py-24">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[var(--brand-sky)]/10 blur-[120px]"
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--brand-mist)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
            <Hand size={14} className="text-[var(--brand-orange)]" />
            Pick your deck
          </span>
          <h2 className="font-playful text-4xl text-[var(--brand-navy)] sm:text-5xl">
            Three decks. Six games. Zero boring bits.
          </h2>
          <p className="mt-4 text-sm text-[var(--brand-navy)]/60 sm:text-base">
            Every game on Centre Point is sorted into a themed deck. Tap a
            card to flip it over and peek at what&apos;s inside.
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -left-6 top-10 hidden h-40 w-28 lg:block"
          >
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-2xl border border-white/60 bg-gradient-to-br from-[var(--brand-blue)] to-[var(--brand-navy)] shadow-lg"
                style={{
                  transform: `rotate(${(i - 1) * 7}deg) translateY(${i * 4}px)`,
                  opacity: 0.25 + i * 0.2,
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((cat, index) => {
              const Icon = cat.icon;
              const isFlipped = !!flipped[cat.id];
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, x: -140, y: 30, rotate: -10, scale: 0.75 }}
                  whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    type: "spring",
                    stiffness: 90,
                    damping: 14,
                    delay: index * 0.15,
                  }}
                  className="h-72 [perspective:1200px]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setFlipped((f) => ({ ...f, [cat.id]: !f[cat.id] }))
                    }
                    aria-label={`Flip ${cat.title} card`}
                    className="relative h-full w-full text-left [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{
                      transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col rounded-3xl border border-white/60 bg-white/85 p-6 shadow-[0_20px_45px_-15px_rgba(6,55,151,0.35)] [backface-visibility:hidden]">
                      <div
                        className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-md`}
                      >
                        <Icon size={22} />
                      </div>
                      <h3 className="font-playful mb-2 text-xl text-[var(--brand-navy)]">
                        {cat.title}
                      </h3>
                      <p className="flex-1 text-sm leading-relaxed text-[var(--brand-navy)]/60">
                        {cat.blurb}
                      </p>
                      <div className="flex items-center justify-between text-xs font-semibold text-[var(--brand-blue)]">
                        <span>{cat.gameIds.length} games inside</span>
                        <span className="flex items-center gap-1 text-[var(--brand-navy)]/40">
                          Tap to open <RotateCcw size={12} />
                        </span>
                      </div>
                    </div>

                    <div
                      className={`absolute inset-0 flex flex-col justify-between rounded-3xl bg-gradient-to-br ${cat.gradient} p-6 text-white shadow-[0_20px_45px_-15px_rgba(6,55,151,0.45)] [backface-visibility:hidden]`}
                      style={{ transform: "rotateY(180deg)" }}
                    >
                      <div>
                        <h3 className="font-playful mb-3 text-lg">{cat.title}</h3>
                        <ul className="space-y-2 text-sm">
                          {cat.gameIds.map((id) => (
                            <li
                              key={id}
                              className="rounded-lg bg-white/15 px-3 py-2 backdrop-blur-sm"
                            >
                              {gameTitle(id)}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-semibold text-white/80">
                        Tap to flip back <RotateCcw size={12} />
                      </span>
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
