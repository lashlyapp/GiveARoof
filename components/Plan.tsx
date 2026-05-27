import Image from "next/image";
import { plan, book } from "@/lib/content";

export function Plan() {
  return (
    <section id="the-plan" className="bg-ink-950 py-20 text-ink-100 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
        <article>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {plan.title}
          </h2>
          <p className="mt-3 text-sm font-medium uppercase tracking-wider text-brand-400">
            {plan.byline}
          </p>
          <div className="mt-7 space-y-5 text-lg leading-relaxed text-ink-200">
            {plan.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>

        <aside className="lg:pt-2">
          <div className="rounded-3xl border border-ink-800 bg-ink-900 p-7">
            <div className="flex justify-center">
              <Image
                src={book.cover}
                alt={`${book.title} book cover`}
                width={308}
                height={447}
                className="h-64 w-auto rounded-lg shadow-2xl"
              />
            </div>
            <h3 className="mt-6 text-center text-xl font-bold text-white">
              {book.title}
            </h3>
            <p className="mt-1 text-center text-sm text-ink-300">
              {book.subtitle}
            </p>
            <p className="mt-4 text-center text-sm leading-relaxed text-ink-300">
              {book.description}
            </p>
            <a
              href={book.buyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Buy the book
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
