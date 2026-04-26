import type { Metadata } from "next";
import Link from "next/link";
import { Greeting } from "@/components/ui/Greeting";
import { Logo } from "@/components/ui/Logo";
import { TriggerEmail } from "@/components/ui/TriggerEmail";
import { Reveal } from "@/components/motion/Reveal";
import { resolvePlan, type Plan } from "@/lib/plans";

export const metadata: Metadata = {
  title: "Mulțumesc · Manuela Vlașin",
  description: "Mulțumesc pentru încredere — totul este pregătit.",
  robots: { index: false, follow: false },
};

type SP = { p?: string | string[] };

const INBOX_NOTE =
  "Verifică inbox-ul (și folderul Spam/Promotions, dacă nu le vezi imediat).";

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<SP>;
}) {
  const { p } = await searchParams;
  const plan = resolvePlan(p);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-olive-950 py-6 sm:py-8 lg:py-6">
      <TriggerEmail plan={plan} />
      <header className="relative z-10 mx-auto flex w-full max-w-xl items-center gap-3 px-5 sm:px-8">
        <Logo size={64} />
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-cream-100/70">
          Manuela Vlașin · Personal Trainer
        </p>
      </header>

      <div className="relative z-10 mx-auto flex w-full max-w-xl flex-col items-center px-5 pt-12 pb-10 text-center sm:px-8 sm:pt-16 sm:pb-12">
        <Reveal>
          <Greeting />
          <span className="text-glow-gold-sm inline-block text-[10px] font-bold uppercase tracking-[0.32em] text-gold-400 sm:text-[11px]">
            Mulțumesc
          </span>
          <CaseBody plan={plan} />
        </Reveal>

        <Reveal delay={0.1}>
          <Link
            href="/"
            className="mt-12 inline-block text-[11px] font-medium uppercase tracking-[0.22em] text-cream-100/60 underline underline-offset-4 transition-colors hover:text-gold-400 sm:text-[12px]"
          >
            Înapoi la pagina principală
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function CaseBody({ plan }: { plan: Plan | null }) {
  if (plan === "14-day") {
    return (
      <>
        <h1 className="mt-5 font-display text-[32px] leading-[1.1] text-cream-50 sm:text-[44px]">
          Perfect — ai tot ce îți trebuie 🔥
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[16px] leading-[1.6] text-cream-100/85 sm:text-[17px]">
          Ai acces acum la:
        </p>
        <BulletList
          items={[
            "Antrenamentele pentru abdomen și fesieri",
            "Planul de nutriție pe 14 zile",
          ]}
        />
        <p className="mx-auto mt-7 max-w-md text-[15px] leading-[1.6] text-cream-100/75 sm:text-base">
          Ți-am trimis toate detaliile pe email. {INBOX_NOTE}
        </p>
      </>
    );
  }

  if (plan === "7-day") {
    return (
      <>
        <h1 className="mt-5 font-display text-[32px] leading-[1.1] text-cream-50 sm:text-[44px]">
          Bună alegere — începi simplu 👌
        </h1>
        <p className="mx-auto mt-6 max-w-md text-[16px] leading-[1.6] text-cream-100/85 sm:text-[17px]">
          Ai acces acum la:
        </p>
        <BulletList
          items={[
            "Antrenamentele pentru abdomen și fesieri",
            "Planul de nutriție pe 7 zile",
          ]}
        />
        <p className="mx-auto mt-7 max-w-md text-[15px] leading-[1.6] text-cream-100/75 sm:text-base">
          Ți-am trimis toate detaliile pe email. {INBOX_NOTE}
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className="mt-5 font-display text-[32px] leading-[1.1] text-cream-50 sm:text-[44px]">
        Totul este gata ✅
      </h1>
      <p className="mx-auto mt-6 max-w-md text-[16px] leading-[1.6] text-cream-100/85 sm:text-[17px]">
        Ți-am trimis pe email cele două antrenamente: abdomen și fesieri.
      </p>
      <p className="mx-auto mt-3 max-w-md text-[15px] leading-[1.6] text-cream-100/75 sm:text-base">
        {INBOX_NOTE}
      </p>
    </>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mx-auto mt-4 inline-flex max-w-md flex-col gap-2.5 text-left text-[15px] leading-[1.55] text-cream-100/90 sm:text-base">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            aria-hidden="true"
            className="mt-0.5 text-[15px] font-bold text-gold-400 sm:text-base"
          >
            ✔
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
