"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight, IdCard, UserRound, Sparkles } from "lucide-react";
import { saveUser } from "@/lib/user";

export default function LoginCard() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !roll.trim()) {
      setError("Please enter both your name and roll number.");
      return;
    }
    setError("");
    setLoading(true);
    saveUser({ name: name.trim(), roll: roll.trim() });
    setTimeout(() => {
      router.push("/dashboard");
    }, 650);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: -6 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="glass relative w-full max-w-md overflow-hidden rounded-3xl p-8 shadow-[0_20px_60px_-15px_rgba(6,55,151,0.35)]"
      style={{ perspective: 1000 }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-[#1eaeea] to-[#063797] opacity-20 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-gradient-to-br from-[#ff6600] to-[#ed904a] opacity-20 blur-2xl" />

      <div className="relative mb-6 flex items-center gap-2">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#063797] to-[#1eaeea] text-white shadow-lg">
          <Sparkles size={18} />
        </span>
        <div>
          <p className="font-heading text-lg font-semibold text-[var(--brand-navy)]">
            Player Sign-in
          </p>
          <p className="text-xs text-[var(--brand-blue)]/70">
            No password needed — just your details
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
        <label className="group relative flex items-center gap-3 rounded-xl border border-[var(--brand-blue)]/15 bg-white/70 px-4 py-3 transition focus-within:border-[var(--brand-sky)] focus-within:shadow-[0_0_0_4px_rgba(30,174,234,0.15)]">
          <UserRound size={18} className="shrink-0 text-[var(--brand-blue)]/60" />
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className="w-full bg-transparent text-sm text-[var(--brand-navy)] outline-none placeholder:text-[var(--brand-navy)]/40"
            autoComplete="off"
          />
        </label>

        <label className="group relative flex items-center gap-3 rounded-xl border border-[var(--brand-blue)]/15 bg-white/70 px-4 py-3 transition focus-within:border-[var(--brand-sky)] focus-within:shadow-[0_0_0_4px_rgba(30,174,234,0.15)]">
          <IdCard size={18} className="shrink-0 text-[var(--brand-blue)]/60" />
          <input
            value={roll}
            onChange={(e) => setRoll(e.target.value)}
            placeholder="Roll number"
            className="w-full bg-transparent text-sm text-[var(--brand-navy)] outline-none placeholder:text-[var(--brand-navy)]/40"
            autoComplete="off"
          />
        </label>

        {error && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="text-xs font-medium text-[var(--brand-orange)]"
          >
            {error}
          </motion.p>
        )}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
          className="group relative mt-2 flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[var(--brand-blue)] via-[#0c4bb8] to-[var(--brand-sky)] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[var(--brand-blue)]/30 disabled:opacity-80"
        >
          <span
            className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100"
            style={{
              backgroundImage:
                "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
            }}
          />
          <span className="relative">{loading ? "Entering the zone..." : "Enter Games Zone"}</span>
          {!loading && <ArrowRight size={16} className="relative transition group-hover:translate-x-1" />}
        </motion.button>
      </form>

      <p className="relative mt-5 text-center text-[11px] leading-relaxed text-[var(--brand-navy)]/50">
        This is a friendly, password-free sign-in just to personalise your dashboard.
      </p>
    </motion.div>
  );
}
