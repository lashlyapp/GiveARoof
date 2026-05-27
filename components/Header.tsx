"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav, org } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Transparent only while sitting over the home hero (not scrolled, menu closed).
  const transparent = isHome && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        transparent ? "bg-transparent" : "bg-white/95 shadow-sm backdrop-blur"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/images/give-a-roof-logo.png"
            alt="Give A Roof"
            width={696}
            height={633}
            priority
            className={`h-11 w-auto transition-[filter] ${
              transparent ? "brightness-0 invert" : ""
            }`}
          />
          <span className="sr-only">{org.name}</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <ul
            className={`flex items-center gap-7 text-sm font-medium ${
              transparent ? "text-white" : "text-ink-700"
            }`}
          >
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`transition-colors ${
                    transparent ? "hover:text-brand-300" : "hover:text-brand-600"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <DonateButton />
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className={`inline-flex items-center justify-center rounded-md p-2 md:hidden ${
            transparent ? "text-white" : "text-ink-800"
          }`}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-ink-800 hover:bg-ink-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <DonateButton className="w-full justify-center" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function DonateButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={org.donateUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 ${className}`}
    >
      Donate
    </a>
  );
}
