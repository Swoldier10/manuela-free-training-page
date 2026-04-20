import { Reveal } from "@/components/motion/Reveal";

export function Differentiator() {
  return (
    <section
      aria-labelledby="diff-title"
      className="relative overflow-hidden bg-gradient-olive-inverse texture-grain py-24 sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl"
      />
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
              Diferența
            </p>
            <h2
              id="diff-title"
              className="mx-auto mt-4 max-w-3xl font-display text-[34px] leading-[1.1] tracking-tight text-cream-50 sm:text-[52px]"
            >
              Nu sunt antrenamente{" "}
              <span className="italic text-gold-400">„random”</span> de pe
              internet.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.7] text-cream-100/75 sm:text-lg">
              Sunt gândite astfel încât să simți diferența după primele antrenamente.
              Nu pierzi timpul cu exerciții inutile și nu ai nevoie de echipament
              sau experiență.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              <Pill text="Control, nu agitație" />
              <Pill text="Tehnică, nu trucuri" />
              <Pill text="Rezultate, nu promisiuni" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Pill({ text }: { text: string }) {
  return (
    <span className="rounded-full border border-cream-50/10 bg-olive-950/70 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-cream-100/75 backdrop-blur">
      {text}
    </span>
  );
}
