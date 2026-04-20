"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

// Placeholder — replace with the client's final video URL.
const VIDEO_URL = "";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      aria-labelledby="video-caption"
      className="relative bg-olive-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative mx-auto aspect-video w-full overflow-hidden rounded-3xl border border-cream-50/10 bg-olive-800 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.8)]">
            {playing && VIDEO_URL ? (
              <video
                src={VIDEO_URL}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(Boolean(VIDEO_URL))}
                aria-label="Redă video demonstrativ"
                className="group relative h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
              >
                {/* Gradient poster fallback */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-br from-olive-700 via-olive-900 to-olive-950"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(184,153,104,0.18),transparent_60%)]"
                />
                <div className="shimmer absolute inset-0 opacity-40" aria-hidden="true" />

                <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 p-6 text-center">
                  <span className="grid size-20 place-items-center rounded-full bg-gold-500 text-olive-950 shadow-[0_20px_60px_-15px_rgba(184,153,104,0.8)] transition-transform duration-300 group-hover:scale-110 sm:size-24">
                    <Play className="size-8 fill-current sm:size-10" aria-hidden="true" />
                  </span>
                  <p className="font-display text-lg text-cream-50 sm:text-xl">
                    Vezi antrenamentele în acțiune
                  </p>
                  <p className="max-w-xs text-xs text-cream-100/60 sm:text-sm">
                    {VIDEO_URL
                      ? "Apasă pentru redare"
                      : "Video disponibil în curând"}
                  </p>
                </div>
              </button>
            )}
          </div>
          <p
            id="video-caption"
            className="mt-6 text-center text-sm text-cream-100/70 sm:text-base"
          >
            Vezi exact cum arată antrenamentele și cum să le faci corect.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
