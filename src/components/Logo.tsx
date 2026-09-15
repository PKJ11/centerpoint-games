import Link from "next/link";

export default function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/centre-point-logo.svg"
        alt="Centre Point School"
        className={`${className} w-auto`}
      />
      <span className="rounded-full bg-[var(--brand-mist)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-[var(--brand-blue)]">
        Games Zone
      </span>
    </Link>
  );
}
