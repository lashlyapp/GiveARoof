import Link from "next/link";
import { org } from "@/lib/content";

export function CtaBand() {
  return (
    <section className="bg-brand-500">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Join the movement to end homelessness in three years.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-50">
          Your miles, points, or gift become a safe place to sleep tonight.
          Every contribution gives someone a roof — and a fresh start.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={org.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-base font-semibold text-brand-700 shadow-sm transition-colors hover:bg-brand-50"
          >
            Donate now
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
