import { podcast } from "@/lib/content";

export function Podcast() {
  return (
    <section id="listen" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {podcast.title}
          </h2>
          <p className="mt-4 text-lg text-ink-600">{podcast.subtitle}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-100 shadow-sm">
          <iframe
            title="Give A Roof podcast episode"
            src={`https://widget.spreaker.com/player?episode_id=${podcast.episodeId}&theme=light&playlist=false`}
            width="100%"
            height="200"
            loading="lazy"
            frameBorder="0"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  );
}
