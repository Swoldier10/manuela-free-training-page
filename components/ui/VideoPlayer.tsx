"use client";

import { Play } from "lucide-react";
import { useRef, useState } from "react";

type Props = {
  src: string;
  poster: string;
  ariaLabel?: string;
};

export function VideoPlayer({
  src,
  poster,
  ariaLabel = "Redă videoul de prezentare",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  function handlePlay() {
    setStarted(true);
    requestAnimationFrame(() => {
      videoRef.current?.play().catch(() => {
        /* user-gesture / autoplay policies — controls remain visible */
      });
    });
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-cream-50/15 bg-olive-900">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={started}
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
      />
      {!started ? (
        <button
          type="button"
          onClick={handlePlay}
          aria-label={ariaLabel}
          className="group absolute inset-0 flex items-center justify-center bg-olive-950/15 transition-colors hover:bg-olive-950/5 focus-visible:outline-none"
        >
          <span className="grid size-16 place-items-center rounded-full bg-gold-500/30 text-olive-950/80 shadow-[0_8px_24px_-12px_rgba(168,131,37,0.35)] backdrop-blur-[2px] transition-all group-hover:scale-105 group-hover:bg-gold-500/55 group-hover:text-olive-950 sm:size-20">
            <Play className="size-6 fill-current sm:size-7" aria-hidden="true" />
          </span>
        </button>
      ) : null}
    </div>
  );
}
