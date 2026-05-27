import { video } from "@/lib/content";

export function VideoFeature() {
  return (
    <section id="watch" className="bg-ink-50/60 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
            {video.title}
          </h2>
          <p className="mt-4 text-lg text-ink-600">{video.subtitle}</p>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-ink-100 bg-black shadow-lg">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}`}
              title={video.caption}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <p className="mt-3 text-center text-sm text-ink-500">{video.caption}</p>
      </div>
    </section>
  );
}
