"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Something went wrong. Please try again.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
        <h3 className="text-xl font-bold text-ink-900">Thank you!</h3>
        <p className="mt-2 text-ink-600">
          Your message is on its way. We&apos;ll be in touch soon.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-brand-700 hover:text-brand-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field
          label="Email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <Field label="Subject" name="subject" />
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-ink-800"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-ink-900 shadow-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
        />
      </div>

      {/* Honeypot field for spam bots — hidden from humans */}
      <div className="hidden" aria-hidden>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p className="text-sm font-medium text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center rounded-full bg-brand-500 px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-colors hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-800">
        {label}
        {required && <span className="text-brand-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="mt-1.5 w-full rounded-xl border border-ink-200 px-4 py-2.5 text-ink-900 shadow-sm outline-none transition-colors focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
      />
    </div>
  );
}
