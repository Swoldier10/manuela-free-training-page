import { Reveal } from "@/components/motion/Reveal";
import { Scribble, Stripes } from "@/components/ui/Decor";
import { MediaSlot } from "./MediaSlot";

const PILLARS = [
  {
    number: "01",
    title: "Plan adaptat ție",
    body: "Antrenamente și alimentație potrivite vieții tale, nu unui șablon generic.",
  },
  {
    number: "02",
    title: "1:1 cu Manuela",
    body: "O singură persoană care îți răspunde, te corectează și te ține pe traseu.",
  },
  {
    number: "03",
    title: "Check-in & responsabilizare",
    body: "Puncte clare de verificare, ca să vezi exact ce funcționează.",
  },
];

export function WhyItWorks() {
  return (
    <section
      aria-labelledby="why-title"
      className="relative overflow-hidden bg-olive-900 py-20 sm:py-28"
    >
      <Stripes className="pointer-events-none absolute -right-24 -top-16 w-[22rem] text-olive-700" />
      <Stripes className="pointer-events-none absolute -left-28 -bottom-20 w-[20rem] rotate-180 text-olive-700" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              De ce funcționează
            </span>
            <h2
              id="why-title"
              className="mt-4 font-display text-[30px] leading-[1.08] tracking-tight text-cream-50 sm:text-[42px]"
            >
              Nu mai mult efort. Mai multă{" "}
              <span className="relative inline-block whitespace-nowrap">
                <span className="text-glow-gold font-accent text-gold-400">
                  structură
                </span>
                <Scribble
                  aria-hidden="true"
                  className="glow-gold-sm absolute -bottom-1 left-0 h-2.5 w-full text-gold-500 sm:-bottom-1.5 sm:h-3"
                />
              </span>
              .
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-3 md:gap-6">
          {PILLARS.map((p, i) => (
            <Reveal key={p.number} delay={0.05 + i * 0.07}>
              <article className="group relative flex h-full flex-col border border-cream-50/10 bg-olive-950/40 p-7 transition-colors hover:border-gold-500/50 sm:p-8">
                <span className="text-glow-gold font-display text-[40px] leading-none text-gold-400 sm:text-[56px]">
                  {p.number}
                </span>
                <h3 className="mt-6 font-display text-[22px] leading-tight text-cream-50 sm:text-[26px]">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-cream-100/80 sm:text-base">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <MediaSlot
            aspect="16 / 9"
            label="Imagine lifestyle / coaching"
            hint="public/images/fit-feminine/lifestyle.jpg"
            sizes="(min-width: 1024px) 64rem, 100vw"
            className="mt-14 w-full sm:mt-16"
          />
        </Reveal>
      </div>
    </section>
  );
}
