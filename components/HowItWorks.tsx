import { howItWorks } from "@/lib/content";

const icons = [GiftIcon, ConvertIcon, RoofIcon];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {howItWorks.title}
          </h2>
          <p className="mt-4 text-lg text-ink-600">{howItWorks.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div
                key={step.number}
                className="relative rounded-2xl border border-ink-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md"
              >
                <span className="absolute right-6 top-6 text-5xl font-black text-brand-50">
                  {step.number}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-ink-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-ink-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GiftIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M20 12v9H4v-9M2 7h20v5H2zM12 22V7M12 7S11 3 8.5 3 6 7 12 7M12 7s1-4 3.5-4S18 7 12 7" />
    </svg>
  );
}

function ConvertIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M16 3h5v5M21 3l-7 7M8 21H3v-5M3 21l7-7" />
    </svg>
  );
}

function RoofIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M3 11.5 12 4l9 7.5M5 10.5V20h14v-9.5M9.5 20v-5h5v5" />
    </svg>
  );
}
