import { Reveal } from "@/components/motion/Reveal";

export function WhatYouGet() {
  return (
    <section
      id="ce-primesti"
      aria-labelledby="what-title"
      className="bg-olive-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Direct pe email
            </p>
            <h2
              id="what-title"
              className="mt-3 font-display text-[30px] leading-[1.1] text-cream-50 sm:text-[40px]"
            >
              Ce vei primi
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
          <Reveal delay={0.05}>
            <Card
              number="01"
              tag="15 min"
              title="Antrenament abdomen"
              lines={[
                "Focus pe lower abs + core stabil.",
                "Fără mișcări inutile sau complicate.",
              ]}
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Card
              number="02"
              tag="15 min"
              title="Antrenament fesieri"
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
  tag: string;
  title: string;
  lines: string[];
};

function Card({ number, tag, title, lines }: CardProps) {
  return (
    <article className="flex h-full flex-col border border-cream-50/10 p-7 sm:p-8">
      <div className="flex items-baseline justify-between">
        <span className="font-display text-[40px] leading-none text-gold-400 sm:text-[56px]">
          {number}
        </span>
        <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-cream-100/55">
          {tag}
        </span>
      </div>
      <h3 className="mt-6 font-display text-[24px] leading-tight text-cream-50 sm:text-[28px]">
        {title}
      </h3>
      <ul className="mt-4 space-y-2 text-[15px] leading-[1.55] text-cream-100/80 sm:text-base">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
    </article>
  );
}
