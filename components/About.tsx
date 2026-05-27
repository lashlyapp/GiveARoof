import { about, org } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-ink-50/60 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {about.title}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-600">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-100 bg-ink-100 text-sm">
          <DetailItem label="Founded" value={org.founded} />
          <DetailItem label="Founder" value={org.founder} />
          <DetailItem label="Status" value="501(c)(3) nonprofit" />
          <DetailItem label="EIN" value={org.ein} />
          <DetailItem label="Location" value="Cupertino, California" full />
        </dl>
      </div>
    </section>
  );
}

function DetailItem({
  label,
  value,
  full = false,
}: {
  label: string;
  value: string;
  full?: boolean;
}) {
  return (
    <div className={`bg-white p-5 ${full ? "col-span-2" : ""}`}>
      <dt className="text-xs font-semibold uppercase tracking-wider text-ink-400">
        {label}
      </dt>
      <dd className="mt-1 font-semibold text-ink-900">{value}</dd>
    </div>
  );
}
