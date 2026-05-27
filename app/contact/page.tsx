import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { org } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Give A Roof — questions, partnerships, media, or to learn how to donate airline miles and hotel points.",
};

export default function ContactPage() {
  return (
    <section className="bg-white pt-28 pb-20 sm:pt-32">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-ink-900 sm:text-5xl">
            Get in touch
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-600">
            Whether you want to donate miles and points, explore a partnership,
            or ask a question about our work — we&apos;d love to hear from you.
          </p>

          <dl className="mt-10 space-y-6 text-sm">
            <div>
              <dt className="font-semibold uppercase tracking-wider text-ink-400">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${org.email}`}
                  className="text-lg font-medium text-brand-700 hover:text-brand-800"
                >
                  {org.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wider text-ink-400">
                Mailing address
              </dt>
              <dd className="mt-1 text-lg text-ink-800">{org.address}</dd>
            </div>
            <div>
              <dt className="font-semibold uppercase tracking-wider text-ink-400">
                Tax ID (EIN)
              </dt>
              <dd className="mt-1 text-lg text-ink-800">{org.ein}</dd>
            </div>
          </dl>
        </div>

        <div className="rounded-3xl border border-ink-100 bg-white p-7 shadow-sm sm:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
