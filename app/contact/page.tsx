import type { Metadata } from "next";
import { org } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Give A Roof — questions, partnerships, media, or to learn how to donate airline miles and hotel points.",
};

const details = [
  {
    label: "Email",
    value: org.email,
    href: `mailto:${org.email}`,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Mailing address",
    value: org.address,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "Tax ID (EIN)",
    value: org.ein,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 9h8M8 13h8M8 17h5" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <section className="bg-white pt-28 pb-20 sm:pt-32">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
          Get in touch
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-600">
          Whether you want to donate miles and points, explore a partnership, or
          ask a question about our work — we&apos;d love to hear from you. Email
          us directly and we&apos;ll get back to you soon.
        </p>

        <dl className="mt-12 grid gap-5 text-left sm:grid-cols-3">
          {details.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-ink-100 bg-white p-6 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                {item.icon}
              </div>
              <dt className="mt-4 text-xs font-semibold uppercase tracking-wider text-ink-400">
                {item.label}
              </dt>
              <dd className="mt-1.5 text-base font-medium text-ink-900">
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-brand-700 hover:text-brand-800"
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${org.email}`}
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-8 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-600"
          >
            Email us
          </a>
          <a
            href={org.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-ink-200 px-8 py-3.5 text-base font-semibold text-ink-800 transition-colors hover:bg-ink-50"
          >
            Donate now
          </a>
        </div>
      </div>
    </section>
  );
}
