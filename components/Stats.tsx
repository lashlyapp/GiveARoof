import { stats } from "@/lib/content";

export function Stats() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 rounded-3xl border border-ink-100 bg-ink-50/50 p-8 sm:p-10 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value} className="text-center">
              <p className="text-3xl font-extrabold tracking-tight text-brand-600 sm:text-4xl">
                {stat.value}
              </p>
              <p className="mx-auto mt-2 max-w-[16rem] text-sm leading-relaxed text-ink-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
