"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Navbar from "@/components/Navbar";
import AuroraBackground from "@/components/AuroraBackground";
import GameCard from "@/components/GameCard";
import { games } from "@/lib/games";
import { getUser, type CPUser } from "@/lib/user";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<CPUser | null>(null);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const u = getUser();
    if (!u) {
      router.replace("/");
      return;
    }
    setUser(u);
    setChecked(true);
  }, [router]);

  if (!checked || !user) {
    return (
      <main className="flex min-h-screen flex-1 items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--brand-blue)]/20 border-t-[var(--brand-blue)]" />
      </main>
    );
  }

  return (
    <main className="relative isolate flex min-h-screen flex-1 flex-col overflow-hidden">
      <AuroraBackground />
      <Navbar user={user} />

      <div className="mx-auto w-full max-w-6xl flex-1 px-6 pb-20 pt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass relative overflow-hidden rounded-3xl px-7 py-8 sm:px-10 sm:py-10"
        >
          <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-gradient-to-br from-[#1eaeea] to-[#063797] opacity-20 blur-3xl" />
          <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--brand-mist)] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
            <Trophy size={13} className="text-[var(--brand-orange)]" />
            Welcome back
          </span>
          <h1 className="font-heading text-3xl font-semibold text-[var(--brand-navy)] sm:text-4xl">
            Hey {user.name.split(" ")[0]}, ready to play?
          </h1>
          <p className="mt-3 max-w-xl text-sm text-[var(--brand-navy)]/60 sm:text-base">
            Roll No. <span className="font-semibold text-[var(--brand-blue)]">{user.roll}</span>{" "}
            — pick a game below and jump straight into the challenge.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {games.map((game, i) => (
            <GameCard key={game.id} game={game} index={i} />
          ))}
        </div>
      </div>

      <footer className="relative z-10 border-t border-[var(--brand-blue)]/10 py-6 text-center text-xs text-[var(--brand-navy)]/45">
        © {new Date().getFullYear()} Centre Point School — Games Zone
      </footer>
    </main>
  );
}
