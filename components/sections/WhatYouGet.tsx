import { Reveal } from "@/components/motion/Reveal";
import { Bolt, Tally } from "@/components/ui/Decor";

export function WhatYouGet() {
  return (
    <section
      id="ce-primesti"
      aria-labelledby="what-title"
      className="relative overflow-hidden bg-olive-950 py-20 sm:py-28"
    >
      <Tally className="pointer-events-none absolute right-8 top-12 hidden w-16 text-cream-50/15 md:block" />
      <Tally className="pointer-events-none absolute bottom-16 left-8 hidden w-14 -rotate-6 text-cream-50/15 md:block" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <div className="inline-flex items-center gap-2">
              <Bolt className="w-4 text-gold-500" />
              <span className="text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
                Direct pe email
              </span>
              <Bolt className="w-4 text-gold-500" />
            </div>
            <h2
              id="what-title"
              className="mt-4 font-display text-[30px] leading-[1.08] text-cream-50 sm:text-[42px]"
            >
              Ce vei primi pe email
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
          <Reveal delay={0.05}>
            <Card
              number="01"
              emoji="🔥"
              title="Antrenament ABDOMEN"
              duration="15 min"
              lines={[
                "Focus pe lower abs + core stabil.",
                "Fără mișcări inutile sau complicate.",
              ]}
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Card
              number="02"
              emoji="🍑"
              title="Antrenament FESIERI"
              duration="15 min"
              lines={[
                "Activare + tonifiere reală.",
                "Fără să îți suprasoliciți spatele.",
              ]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  number: string;
  emoji: string;
  title: string;
  duration: string;
  lines: string[];
};

function Card({ number, emoji, title, duration, lines }: CardProps) {
  return (
    <article className="group relative flex h-full flex-col border border-cream-50/10 bg-olive-900/40 p-7 transition-colors hover:border-gold-500/50 sm:p-8">
      <div className="flex items-baseline justify-between">
        <span className="font-display text-[40px] leading-none text-gold-400 sm:text-[56px]">
          {number}
        </span>
        <span className="inline-flex items-center gap-1.5 bg-gold-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-olive-950">
          {duration}
        </span>
      </div>
      <h3 className="mt-6 font-display text-[24px] leading-tight text-cream-50 sm:text-[28px]">
        <span aria-hidden="true" className="mr-2">
          {emoji}
        </span>
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-[15px] leading-[1.55] text-cream-100/80 sm:text-base">
        {lines.map((l) => (
          <li key={l} className="flex items-start gap-2.5">
            <span
              aria-hidden="true"
              className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-500"
            />
            <span>{l}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
