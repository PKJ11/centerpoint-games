"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function AuroraBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const blob1X = useTransform(sx, (v) => v * 40);
  const blob1Y = useTransform(sy, (v) => v * 30);
  const blob2X = useTransform(sx, (v) => v * -50);
  const blob2Y = useTransform(sy, (v) => v * -35);
  const blob3X = useTransform(sx, (v) => v * 25);
  const blob3Y = useTransform(sy, (v) => v * -25);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mx.set(nx);
      my.set(ny);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mx, my]);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid animate-grid-pan opacity-60" />
      <motion.div
        style={{ x: blob1X, y: blob1Y }}
        className="animate-float-slow absolute -left-32 -top-24 h-[420px] w-[420px] rounded-full bg-[#1eaeea]/30 blur-[110px]"
      />
      <motion.div
        style={{ x: blob2X, y: blob2Y }}
        className="animate-float-slower absolute right-[-140px] top-1/4 h-[480px] w-[480px] rounded-full bg-[#063797]/25 blur-[120px]"
      />
      <motion.div
        style={{ x: blob3X, y: blob3Y }}
        className="animate-float-slow absolute bottom-[-160px] left-1/3 h-[420px] w-[420px] rounded-full bg-[#ff6600]/20 blur-[120px]"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />
    </div>
  );
}
