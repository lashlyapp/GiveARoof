"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { hero } from "@/lib/content";

const AUTOPLAY_MS = 6000;

export function Hero() {
  const slides = hero.slides;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (next: number) => setIndex((next + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    timer.current = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      AUTOPLAY_MS,
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused, slides.length]);

  return (
    <section
      className="relative isolate flex min-h-[88vh] items-center overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured"
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 -z-10 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== index}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: slide.position }}
          />
        </div>
      ))}

      {/* Readability overlay */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink-950/85 via-ink-950/65 to-ink-950/35"
      />

      {/* Content */}
      <div className="mx-auto w-full max-w-6xl px-4 pt-24 pb-28 sm:px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
            {hero.eyebrow}
          </span>
          {/* keyed by index so the message re-animates as slides change */}
          <div key={index} className="hero-text-in">
            <h1 className="mt-5 min-h-[3.3em] text-balance text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:min-h-0 sm:text-5xl lg:text-6xl">
              {slides[index].title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-100">
              {slides[index].subtitle}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg transition-colors hover:bg-brand-600"
            >
              {hero.primaryCta.label}
            </a>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/40 px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              {hero.secondaryCta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Controls */}
      {slides.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/20 sm:block"
          >
            <Chevron dir="left" />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-white/30 bg-white/10 p-2.5 text-white backdrop-blur transition-colors hover:bg-white/20 sm:block"
          >
            <Chevron dir="right" />
          </button>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2.5">
            {slides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index
                    ? "w-7 bg-brand-500"
                    : "w-2.5 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}

function Chevron({ dir }: { dir: "left" | "right" }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {dir === "left" ? <path d="M15 18l-6-6 6-6" /> : <path d="M9 18l6-6-6-6" />}
    </svg>
  );
}
