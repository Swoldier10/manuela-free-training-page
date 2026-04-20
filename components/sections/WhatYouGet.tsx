import { Flame, Target, Mail, Timer } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";

export function WhatYouGet() {
  return (
    <section
      id="ce-primesti"
      aria-labelledby="what-title"
      className="relative bg-olive-950 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-olive-900/60 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
              <Mail className="size-3.5" aria-hidden="true" />
              Direct pe email
            </p>
            <h2
              id="what-title"
              className="mt-4 font-display text-[32px] leading-[1.1] text-cream-50 sm:text-[44px]"
            >
              Ce vei primi pe email
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
          <Reveal delay={0.05}>
            <WorkoutCard
              icon={<Flame className="size-6" strokeWidth={2} />}
              accent="from-orange-500/25 to-gold-500/10"
              emoji="🔥"
              title="Antrenament ABDOMEN"
              duration="15 min"
              tag="Lower abs + core stabil"
              bullets={[
                "Focus pe lower abs și un core cu adevărat stabil",
                "Fără mișcări inutile sau complicate",
                "Simți fiecare repetare — fără balans sau trișat",
              ]}
            />
          </Reveal>
          <Reveal delay={0.12}>
            <WorkoutCard
              icon={<Target className="size-6" strokeWidth={2} />}
              accent="from-rose-500/20 to-gold-500/10"
              emoji="🍑"
              title="Antrenament FESIERI"
              duration="15 min"
              tag="Activare + tonifiere reală"
              bullets={[
                "Activare corectă a fesierilor înainte să obosească quadricepsul",
                "Tonifiere reală, fără să îți suprasoliciți spatele",
                "Mișcări care merg direct unde trebuie",
              ]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  icon: React.ReactNode;
  accent: string;
  emoji: string;
  title: string;
  duration: string;
  tag: string;
  bullets: string[];
};

function WorkoutCard({
  icon,
  accent,
  emoji,
  title,
  duration,
  tag,
  bullets,
}: CardProps) {
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-cream-50/10 bg-olive-800/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-olive-800/80 sm:p-8"
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-gradient-to-br ${accent} blur-3xl opacity-80`}
      />

      <div className="relative flex items-center gap-4">
        <span className="grid size-14 place-items-center rounded-2xl bg-olive-950/70 text-gold-400 ring-1 ring-cream-50/10">
          {icon}
        </span>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-cream-100/60">
            {tag}
          </p>
          <h3 className="font-display text-[24px] leading-tight text-cream-50 sm:text-[28px]">
            <span aria-hidden="true" className="mr-1">
              {emoji}
            </span>
            {title}
          </h3>
        </div>
      </div>

      <div className="relative mt-5 inline-flex items-center gap-2 self-start rounded-full bg-gold-500/10 px-3 py-1 text-xs font-semibold text-gold-400 ring-1 ring-gold-500/20">
        <Timer className="size-3.5" aria-hidden="true" />
        {duration}
      </div>

      <ul className="relative mt-5 space-y-2.5">
        {bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-3 text-[15px] leading-[1.55] text-cream-100/80"
          >
            <span
              aria-hidden="true"
              className="mt-2 size-1.5 shrink-0 rounded-full bg-gold-400"
            />
            {b}
          </li>
        ))}
      </ul>
    </article>
  );
}
