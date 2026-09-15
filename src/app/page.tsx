import { Brain, PuzzleIcon, Trophy } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import LoginCard from "@/components/LoginCard";
import ScrollyStory from "@/components/ScrollyStory";
import DeckSection from "@/components/DeckSection";
import Logo from "@/components/Logo";
import { games } from "@/lib/games";

export default function Home() {
  return (
    <main className="relative isolate flex min-h-screen flex-1 flex-col">
      <div className="relative overflow-hidden">
      <AuroraBackground />

      <div className="mx-auto flex w-full max-w-6xl flex-col px-6 pb-16 pt-8">
        <Logo />

        <div className="mt-8 grid flex-1 grid-cols-1 items-center gap-14 lg:mt-16 lg:grid-cols-[1.15fr_1fr]">
          <div className="animate-fade-in-up">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--brand-blue)]/15 bg-white/70 px-4 py-1.5 text-xs font-semibold text-[var(--brand-blue)] backdrop-blur">
              <Trophy size={14} className="text-[var(--brand-orange)]" />
              10 brain games waiting for you
            </span>

            <h1 className="font-heading text-4xl font-semibold leading-[1.1] text-[var(--brand-navy)] sm:text-5xl lg:text-6xl">
              Play. Think.
              <br />
              <span className="text-gradient">Outsmart the grid.</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--brand-navy)]/65 sm:text-lg">
              Welcome to Centre Point&apos;s Games Zone — a hand-picked arcade of
              logic puzzles, word games and speed challenges. Sign in with your
              name and roll number to jump straight in.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-[var(--brand-navy)]/60">
              <div className="flex items-center gap-2">
                <Brain size={18} className="text-[var(--brand-blue)]" />
                Logic &amp; reasoning
              </div>
              <div className="flex items-center gap-2">
                <PuzzleIcon size={18} className="text-[var(--brand-orange)]" />
                Puzzles &amp; word play
              </div>
              <div className="flex items-center gap-2">
                <Trophy size={18} className="text-[var(--brand-sky)]" />
                Speed challenges
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-3">
              {games.slice(0, 6).map((g) => (
                <span
                  key={g.id}
                  className="rounded-full border border-[var(--brand-blue)]/10 bg-white/60 px-3 py-1.5 text-[11px] font-medium text-[var(--brand-navy)]/70 backdrop-blur transition hover:border-[var(--brand-sky)]/40 hover:text-[var(--brand-blue)]"
                >
                  {g.title}
                </span>
              ))}
              <span className="rounded-full border border-[var(--brand-blue)]/10 bg-white/60 px-3 py-1.5 text-[11px] font-medium text-[var(--brand-navy)]/70 backdrop-blur">
                +{games.length - 6} more
              </span>
            </div>

            <div className="animate-march-in mt-10 flex items-center gap-3">
              <img
                src="/mascot-pencils.gif"
                alt="Cartoon pencils marching, ready to play"
                className="animate-bob h-16 w-auto rounded-xl shadow-[0_12px_30px_-10px_rgba(6,55,151,0.35)] sm:h-20"
              />
              <p className="hidden max-w-[160px] text-xs italic leading-snug text-[var(--brand-navy)]/50 sm:block">
                Your brain cells, marching in for warm-up.
              </p>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <img
              src="/classroom-cheer.gif"
              alt=""
              aria-hidden
              className="animate-float-slow pointer-events-none absolute -right-6 -top-10 hidden w-[380px] rounded-3xl object-cover opacity-90 shadow-[0_25px_60px_-15px_rgba(6,55,151,0.4)] sm:block sm:w-[420px]"
              style={{ maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)" }}
            />
            <LoginCard />
          </div>
        </div>
      </div>
      </div>

      <ScrollyStory />
      <DeckSection />

      <footer className="mx-auto w-full max-w-6xl px-6 pb-10 pt-10">
        <div className="flex flex-col items-center justify-between gap-3 border-t border-[var(--brand-blue)]/10 pt-6 text-xs text-[var(--brand-navy)]/45 sm:flex-row">
          <p>© {new Date().getFullYear()} Centre Point School — Games Zone</p>
          <p>Built for curious minds.</p>
        </div>
      </footer>
    </main>
  );
}
