import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section
      id="despre"
      aria-labelledby="about-title"
      className="bg-olive-950 py-20 sm:py-28"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-10 px-5 sm:px-8 md:grid-cols-[200px_1fr] md:gap-14 lg:grid-cols-[260px_1fr]">
        <Reveal>
          <div className="mx-auto size-40 overflow-hidden rounded-full bg-olive-900 ring-1 ring-cream-50/10 sm:size-48 md:mx-0 md:size-full">
            <Image
              src="/logo-vm.png"
              alt="Logo Manuela Vlașin"
              width={320}
              height={320}
              className="h-full w-full object-contain p-3"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="text-center md:text-left">
            <h2
              id="about-title"
              className="font-display text-[28px] leading-[1.1] text-cream-50 sm:text-[36px]"
            >
              Sunt <span className="italic text-gold-400">Manuela</span>.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.65] text-cream-100/80 sm:text-[17px]">
              Ajut femeile să își construiască un corp definit, feminin și
              puternic. Am o bază solidă în{" "}
              <em className="not-italic text-gold-300">calisthenics</em> — de
              acolo vine rigoarea antrenamentelor mele: simple, dar eficiente.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
