import Link from "next/link";
import Image from "next/image";
import { nav, org } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-ink-200">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Image
              src="/images/give-a-roof-logo.png"
              alt="Give A Roof"
              width={696}
              height={633}
              className="h-14 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-300">
              Turning unused travel rewards into a roof over someone&apos;s
              head.
            </p>
            <a
              href={org.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-600"
            >
              Donate now
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink-300 transition-colors hover:text-brand-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>
            <address className="mt-4 space-y-2 text-sm not-italic text-ink-300">
              <p>{org.address}</p>
              <p>
                <a
                  href={`mailto:${org.email}`}
                  className="transition-colors hover:text-brand-400"
                >
                  {org.email}
                </a>
              </p>
              <p className="pt-2 text-ink-400">EIN: {org.ein}</p>
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-800 pt-6 text-xs leading-relaxed text-ink-400">
          <p>
            {org.name} is a registered 501(c)(3) nonprofit organization in the
            State of California. Donations are tax-deductible to the fullest
            extent allowed by law.
          </p>
          <p className="mt-2">
            &copy; {year} {org.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
