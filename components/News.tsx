import Image from "next/image";
import { news } from "@/lib/content";

export function News() {
  return (
    <section id="news" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {news.title}
          </h2>
          <p className="mt-4 text-lg text-ink-600">{news.subtitle}</p>
        </div>

        <ul className="mx-auto mt-12 max-w-4xl divide-y divide-ink-100 overflow-hidden rounded-2xl border border-ink-100">
          {news.articles.map((article, i) => (
            <li key={i}>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 px-6 py-5 transition-colors hover:bg-brand-50/60 sm:flex-row sm:items-center sm:gap-6"
              >
                <div className="flex h-12 shrink-0 items-center sm:w-44">
                  {"logo" in article && article.logo ? (
                    <Image
                      src={article.logo}
                      alt={article.outlet}
                      width={160}
                      height={48}
                      className="max-h-10 w-auto object-contain"
                    />
                  ) : (
                    <span className="text-sm font-bold uppercase tracking-wide text-brand-600">
                      {article.outlet}
                    </span>
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-ink-900 group-hover:text-brand-700">
                    {article.headline}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-500">{article.date}</p>
                </div>
                <span
                  className="hidden shrink-0 text-ink-300 transition-colors group-hover:text-brand-600 sm:block"
                  aria-hidden
                >
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
