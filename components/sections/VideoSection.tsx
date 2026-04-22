"use client";

import { Play } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/motion/Reveal";

const VIDEO_URL = "";

export function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      aria-labelledby="video-caption"
      className="bg-olive-950 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal>
          <div className="relative aspect-video w-full overflow-hidden border border-cream-50/10 bg-olive-900">
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
                className="group grid h-full w-full place-items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-400"
              >
                <span className="grid size-16 place-items-center rounded-full bg-gold-500 text-cream-50 transition-transform duration-200 group-hover:scale-105 sm:size-20">
                  <Play className="size-6 fill-current sm:size-8" aria-hidden="true" />
                </span>
              </button>
            )}
          </div>
          <p
            id="video-caption"
            className="mt-5 text-center text-[14px] text-cream-100/60 sm:text-[15px]"
          >
            Vezi exact cum arată antrenamentele.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
