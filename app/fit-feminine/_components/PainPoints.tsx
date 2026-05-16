import { Reveal } from "@/components/motion/Reveal";
import { Stripes } from "@/components/ui/Decor";

const PAINS = [
  "Ai încercat să slăbești de mai multe ori, dar după câteva săptămâni ai renunțat pentru că nu vedeai rezultate clare?",
  "Simți că faci „câte puțin din toate” — antrenamente random, rețete de pe internet, sfaturi de pe TikTok — dar corpul tău nu se schimbă?",
  "Vrei abdomen mai plat, picioare mai definite și fesieri mai fermi, dar nu vrei să mergi la sală sau nu ai timp pentru antrenamente complicate?",
  "Te-ai săturat să începi mereu de luni și să ajungi după câteva zile în același punct?",
  "Îți dorești să arăți feminin, dar și puternic — nu doar să slăbești pe cântar, ci să îți schimbi forma corpului?",
];

export function PainPoints() {
  return (
    <section
      aria-labelledby="pains-title"
      className="relative overflow-hidden bg-olive-900 py-20 sm:py-28"
    >
      <Stripes className="pointer-events-none absolute -right-24 -top-16 w-[22rem] text-olive-700" />
      <Stripes className="pointer-events-none absolute -left-28 -bottom-20 w-[20rem] rotate-180 text-olive-700" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
            Te regăsești?
          </span>
          <h2
            id="pains-title"
            className="mt-4 font-display text-[30px] leading-[1.08] tracking-tight text-cream-50 sm:text-[42px]"
          >
            Te regăsești în una dintre situațiile{" "}
            <span className="text-glow-gold font-accent text-gold-400">
              de mai jos
            </span>
            ?
          </h2>
        </Reveal>

        <ul className="mt-12 space-y-4 sm:mt-14">
          {PAINS.map((p, i) => (
            <Reveal key={p} delay={i * 0.05}>
              <li className="flex items-start gap-4 border-b border-cream-50/10 pb-4 text-[16px] leading-[1.55] text-cream-100/90 sm:text-[18px]">
                <span
                  aria-hidden="true"
                  className="mt-2.5 size-1.5 shrink-0 rounded-full bg-gold-500"
                />
                <span>{p}</span>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.25}>
          <p className="mt-12 text-[17px] leading-[1.65] text-cream-50 sm:text-[19px]">
            Dacă ai răspuns „da” la cel puțin una dintre întrebări, cel mai
            probabil{" "}
            <span className="font-accent text-gold-400">
              problema nu este că nu ai voință
            </span>
            . Problema este că nu ai avut încă un plan clar, adaptat pentru tine,
            pe care să îl poți urma suficient de mult încât corpul tău să înceapă
            să răspundă.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
