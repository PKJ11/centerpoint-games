"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { clearUser, type CPUser } from "@/lib/user";
import Logo from "@/components/Logo";

export default function Navbar({ user }: { user: CPUser }) {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const initials = user.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0]?.toUpperCase())
    .join("");

  function handleLogout() {
    clearUser();
    router.push("/");
  }

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? "glass shadow-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo className="h-8" />

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2.5 rounded-full border border-[var(--brand-blue)]/15 bg-white/70 py-1.5 pl-1.5 pr-4 sm:flex">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-peach)] text-xs font-bold text-white">
              {initials || "CP"}
            </span>
            <div className="leading-tight">
              <p className="text-xs font-semibold text-[var(--brand-navy)]">{user.name}</p>
              <p className="text-[10px] text-[var(--brand-navy)]/50">Roll No. {user.roll}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 rounded-full border border-[var(--brand-blue)]/15 bg-white/70 px-3.5 py-2 text-xs font-semibold text-[var(--brand-navy)] transition hover:border-[var(--brand-orange)]/40 hover:text-[var(--brand-orange)]"
          >
            <LogOut size={14} />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>
      </div>
    </motion.header>
  );
}
