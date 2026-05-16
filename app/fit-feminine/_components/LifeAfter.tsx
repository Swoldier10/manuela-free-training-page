import { Reveal } from "@/components/motion/Reveal";
import { Dash, Stripes } from "@/components/ui/Decor";

export function LifeAfter() {
  return (
    <section
      aria-labelledby="life-title"
      className="relative overflow-hidden bg-olive-900 py-20 sm:py-28"
    >
      <Stripes className="pointer-events-none absolute -right-28 top-10 w-[22rem] text-olive-700" />
      <Stripes className="pointer-events-none absolute -left-32 -bottom-16 w-[24rem] rotate-180 text-olive-700" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal>
          <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
            După 12 săptămâni
          </span>
          <h2
            id="life-title"
            className="mt-4 font-display text-[30px] leading-[1.08] tracking-tight text-cream-50 sm:text-[42px]"
          >
            Cum ar putea arăta{" "}
            <span className="text-glow-gold font-accent text-gold-400">
              viața ta
            </span>
            .
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 text-[16px] leading-[1.75] text-cream-100/85 sm:text-[18px]">
            Imaginează-ți că nu te mai trezești cu aceeași frustrare când te uiți
            în oglindă. Hainele stau mai bine pe tine. Talia este mai definită.
            Fesierii sunt mai fermi. Picioarele arată mai tonifiate. Ai mai mult
            control asupra alimentației. Nu mai simți că trebuie să alegi între
            „dietă strictă” și „renunț complet”. Știi ce antrenamente să faci,
            știi ce să mănânci și știi cum să revii după o zi mai proastă.
          </p>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-4 text-[16px] leading-[1.75] text-cream-100/85 sm:text-[18px]">
            Asta nu se întâmplă pentru că ai găsit un truc.{" "}
            <span className="font-accent text-gold-400">
              Se întâmplă pentru că ai urmat un proces.
            </span>
          </p>
        </Reveal>

        <div className="mt-14 flex items-center gap-4 sm:mt-16">
          <Dash aria-hidden="true" className="h-[2px] flex-1 text-cream-50/15" />
          <span className="text-glow-gold-sm text-[10px] font-bold uppercase tracking-[0.28em] text-gold-400 sm:text-[11px]">
            Și dacă nu schimbi nimic?
          </span>
          <Dash aria-hidden="true" className="h-[2px] flex-1 text-cream-50/15" />
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 text-[16px] leading-[1.7] text-cream-100/85 sm:text-[18px]">
            Poți să mai aștepți. Să mai salvezi încă 20 de exerciții. Să mai
            începi o dietă luni. Să mai spui că „acum nu e momentul”. Să mai
            încerci singură încă 3 luni.
          </p>
          <p className="mt-4 text-[16px] leading-[1.7] text-cream-100/85 sm:text-[18px]">
            Dar trebuie să fii sinceră cu tine: dacă metoda de până acum ar fi
            funcționat, probabil ai fi avut deja rezultatul dorit.
          </p>
        </Reveal>

        <Reveal delay={0.28}>
          <p className="mt-8 text-center font-display text-[22px] leading-[1.3] text-cream-50 sm:text-[28px]">
            Nu ai nevoie de încă un început haotic. Ai nevoie de{" "}
            <span className="text-glow-gold font-accent text-gold-400">
              o decizie clară
            </span>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
