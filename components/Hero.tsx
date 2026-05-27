import Link from "next/link";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white pt-28 pb-16 sm:pt-32 sm:pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-100/50 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-700">
            {hero.eyebrow}
          </span>
          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600">
            {hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
            >
              {hero.primaryCta.label}
            </a>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-1.5 rounded-full px-5 py-3.5 text-base font-semibold text-ink-800 transition-colors hover:text-brand-600"
            >
              {hero.secondaryCta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-sm rounded-3xl border border-ink-100 bg-white p-8 shadow-xl shadow-brand-900/5">
      <div className="flex justify-center">
        <RoofIcon className="h-20 w-20 text-brand-500" />
      </div>
      <div className="mt-6 space-y-4">
        <div className="rounded-2xl bg-brand-50 p-5 text-center">
          <p className="text-3xl font-extrabold text-brand-700">$25B</p>
          <p className="mt-1 text-sm text-ink-600">
            in airline miles &amp; hotel points sitting unused
          </p>
        </div>
        <div className="flex items-center justify-center text-ink-400" aria-hidden>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
        <div className="rounded-2xl bg-ink-900 p-5 text-center">
          <p className="text-3xl font-extrabold text-white">Nights of shelter</p>
          <p className="mt-1 text-sm text-ink-300">
            dignity and hope, one roof at a time
          </p>
        </div>
      </div>
    </div>
  );
}

function RoofIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10.5V20h14v-9.5" />
      <path d="M9.5 20v-5h5v5" />
    </svg>
  );
}
