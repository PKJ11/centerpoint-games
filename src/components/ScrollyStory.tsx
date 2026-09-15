"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Sparkles, Brain, Rocket } from "lucide-react";
import handsUp from "../../public/images/hands-up.jpg";
import studentWriting from "../../public/images/student-writing.jpg";

export default function ScrollyStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.08]);
  const bgDim = useTransform(scrollYProgress, [0, 0.5, 1], [0.55, 0.35, 0.6]);

  const productScale = useTransform(
    scrollYProgress,
    [0, 0.12, 0.5, 0.88, 1],
    [0.55, 1, 1.1, 1, 0.6]
  );
  const productX = useTransform(scrollYProgress, [0, 0.5, 1], ["-6%", "16%", "-14%"]);
  const productY = useTransform(scrollYProgress, [0, 0.3, 0.5, 0.7, 1], [40, -10, -30, -10, 40]);
  const productRotate = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 4, -5]);
  const productOpacity = useTransform(
    scrollYProgress,
    [0, 0.07, 0.93, 1],
    [0, 1, 1, 0]
  );

  const text1Opacity = useTransform(scrollYProgress, [0.04, 0.16, 0.4, 0.48], [0, 1, 1, 0]);
  const text1Y = useTransform(scrollYProgress, [0.04, 0.16, 0.4, 0.48], [50, 0, 0, -50]);

  const text2Opacity = useTransform(scrollYProgress, [0.54, 0.66, 0.9, 0.98], [0, 1, 1, 0]);
  const text2Y = useTransform(scrollYProgress, [0.54, 0.66, 0.9, 0.98], [50, 0, 0, -50]);

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          aria-hidden
          style={{ y: bgY, scale: bgScale }}
          className="absolute inset-[-6%] -z-20"
        >
          <Image
            src={handsUp}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <motion.div
          aria-hidden
          style={{ opacity: bgDim }}
          className="absolute inset-0 -z-10 bg-[var(--brand-navy)]"
        />
        <div aria-hidden className="absolute inset-0 -z-10 bg-grid opacity-10" />

        <motion.div
          style={{
            scale: productScale,
            x: productX,
            y: productY,
            rotate: productRotate,
            opacity: productOpacity,
          }}
          className="pointer-events-none absolute left-1/2 top-1/2 w-[240px] -translate-x-1/2 -translate-y-1/2 sm:w-[300px] lg:w-[340px]"
        >
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-white/40 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]">
            <Image
              src={studentWriting}
              alt="Student diving into a puzzle"
              width={340}
              height={340}
              className="aspect-square w-full object-cover"
            />
          </div>
          <span className="absolute -bottom-4 -right-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[var(--brand-orange)] to-[var(--brand-peach)] text-white shadow-lg">
            <Sparkles size={22} />
          </span>
        </motion.div>

        <motion.div
          style={{ opacity: text1Opacity, y: text1Y }}
          className="absolute left-[6%] z-10 max-w-sm sm:max-w-md"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <GraduationCap size={14} className="text-[var(--brand-sky)]" />
            About Centre Point
          </span>
          <h2 className="font-playful text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            One school. Three campuses. A whole lot of curious minds.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            Centre Point School in Nagpur has been growing bright young
            thinkers from Grade 1 all the way to Grade 12, across three CBSE
            campuses built for academic excellence. This Games Zone is our
            playful side project — because the best learning happens when it
            doesn&apos;t feel like homework.
          </p>
        </motion.div>

        <motion.div
          style={{ opacity: text2Opacity, y: text2Y }}
          className="absolute right-[6%] z-10 max-w-sm text-right sm:max-w-md"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
            <Brain size={14} className="text-[var(--brand-orange)]" />
            Why kids keep coming back
          </span>
          <h2 className="font-playful text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Games that sneak in a little brain training.
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80 sm:text-base">
            Every game here turns numbers, letters and patterns into a
            friendly battle of wits. No boring drills — just puzzles,
            speed rounds and logic challenges that quietly sharpen the
            mind, one round at a time.
          </p>
          <div className="mt-5 flex items-center justify-end gap-2 text-xs font-semibold text-white/70">
            <Rocket size={14} className="text-[var(--brand-sky)]" />
            Scroll on to grab your deck of games
          </div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 h-1 w-40 -translate-x-1/2 overflow-hidden rounded-full bg-white/20">
          <motion.div
            style={{ width: progressWidth }}
            className="h-full rounded-full bg-gradient-to-r from-[var(--brand-sky)] to-[var(--brand-orange)]"
          />
        </div>
      </div>
    </section>
  );
}
