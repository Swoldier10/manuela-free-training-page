import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section
      id="despre"
      aria-labelledby="about-title"
      className="relative bg-olive-900 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[360px_1fr] lg:gap-16 lg:px-8">
        <Reveal>
          <div className="relative mx-auto aspect-square w-64 max-w-full sm:w-80 lg:w-full">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-full bg-gradient-to-br from-gold-500/40 via-gold-500/5 to-transparent blur-xl"
            />
            <div className="relative grid h-full w-full place-items-center overflow-hidden rounded-full bg-olive-950 ring-1 ring-cream-50/10">
              <Image
                src="/logo-vm.png"
                alt="Logo Manuela Vlașin"
                width={320}
                height={320}
                className="h-full w-full object-contain p-2 invert"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center lg:text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
              Despre mine
            </p>
            <h2
              id="about-title"
              className="mt-3 font-display text-[32px] leading-[1.1] text-cream-50 sm:text-[44px]"
            >
              Sunt <span className="italic text-gold-400">Manuela</span>.
            </h2>
            <div className="mx-auto mt-6 max-w-xl space-y-4 text-base leading-[1.7] text-cream-100/80 sm:text-lg lg:mx-0">
              <p>
                Ajut femeile să își construiască un corp{" "}
                <span className="text-cream-50 font-medium">definit, feminin</span>{" "}
                și{" "}
                <span className="text-cream-50 font-medium">puternic</span>.
              </p>
              <p>
                Am o bază solidă în <em className="text-gold-400 not-italic">calisthenics</em>,
                unde controlul corpului este esențial — iar asta se reflectă în
                modul în care sunt construite antrenamentele mele: simple, dar
                extrem de eficiente.
              </p>
            </div>
            <p className="mt-8 font-display text-2xl italic text-cream-50">
              — Manuela
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
