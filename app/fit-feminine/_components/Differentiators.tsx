import { Reveal } from "@/components/motion/Reveal";
import { Tally } from "@/components/ui/Decor";

const DIFFS = [
  {
    title: "Direcție, nu informație",
    body: "Informație găsești peste tot. Problema e că prea multă informație te face să te blochezi. În Fit&Feminine ai un proces clar: ce faci, când faci, cum mănânci, ce urmărești, ce ajustezi.",
  },
  {
    title: "Construit pentru formă, nu doar pentru cântar",
    body: "Scopul nu este doar să scadă numărul de pe cântar. Este să îți schimbi compoziția corpului: mai puțină grăsime, mai mult tonus, o postură mai bună, un corp mai ferm.",
  },
  {
    title: "Nu ești lăsată singură",
    body: "Multe programe îți dau acces la materiale și apoi ești pe cont propriu. Aici lucrezi cu Manuela, primești feedback și poți corecta ce nu funcționează.",
  },
  {
    title: "Gândit pentru viața reală",
    body: "Nu ai nevoie de program perfect. Ai nevoie de un plan pe care îl poți respecta chiar și când ai muncă, familie, oboseală sau lipsă de motivație.",
  },
];

export function Differentiators() {
  return (
    <section
      aria-labelledby="diff-title"
      className="relative overflow-hidden bg-olive-950 py-20 sm:py-28"
    >
      <Tally className="pointer-events-none absolute right-10 top-16 hidden w-16 text-cream-50/15 md:block" />
      <Tally className="pointer-events-none absolute bottom-20 left-10 hidden w-14 -rotate-6 text-cream-50/15 md:block" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="text-center">
            <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
              Ce e diferit
            </span>
            <h2
              id="diff-title"
              className="mt-4 font-display text-[30px] leading-[1.08] text-cream-50 sm:text-[42px]"
            >
              Ce face Fit&amp;Feminine{" "}
              <span className="text-glow-gold font-accent text-gold-400">
                diferit
              </span>
              .
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 md:gap-6">
          {DIFFS.map((d, i) => (
            <Reveal key={d.title} delay={0.05 + i * 0.06}>
              <article className="relative flex h-full flex-col border-l-2 border-gold-500/60 bg-olive-900/40 p-7 transition-colors hover:bg-olive-900/60 sm:p-8">
                <h3 className="font-display text-[22px] leading-tight text-cream-50 sm:text-[26px]">
                  {d.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.65] text-cream-100/80 sm:text-base">
                  {d.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
