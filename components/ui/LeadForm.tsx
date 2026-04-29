"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { registerLead } from "@/app/actions/leads";
import { subscribeSchema, type SubscribeInput } from "@/lib/schema";
import { setLeadCache } from "@/lib/storage";
import { cn } from "@/lib/utils";
import { CtaButton } from "./CtaButton";

type Props = {
  id?: string;
  ctaLabel?: string;
  compact?: boolean;
  surface?: "card" | "plain";
};

export function LeadForm({
  id = "form",
  ctaLabel = "Vreau antrenamentele gratuite",
  compact = false,
  surface = "card",
}: Props) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "loading">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubscribeInput>({
    resolver: zodResolver(subscribeSchema),
    defaultValues: { nume: "", email: "" },
    mode: "onBlur",
  });

  async function onSubmit(data: SubscribeInput) {
    setStatus("loading");
    setServerError(null);

    const nume = data.nume.trim();
    const email = data.email.trim().toLowerCase();

    const result = await registerLead({ nume, email });
    if (!result.ok) {
      setStatus("idle");
      setServerError(result.error);
      return;
    }

    setLeadCache({ nume, email });
    router.push("/offer-14-day");
  }

  const wrapperBase =
    surface === "card"
      ? "rounded-3xl border border-cream-50/10 bg-olive-900 p-6 sm:p-8 shadow-[0_30px_80px_-40px_rgba(11,11,11,0.25)]"
      : "";

  return (
    <form
      id={id}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className={cn(wrapperBase)}
    >
      {!compact && (
        <div className="text-center sm:text-left">
          <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.22em] text-gold-400">
            Începe acum · gratuit
          </p>
          <h3 className="font-display text-[26px] sm:text-[30px] leading-[1.1] text-cream-50">
            Trimite-mi antrenamentele
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-cream-100/70">
            Le primești instant pe email. Fără echipament, fără complicații.
          </p>
        </div>
      )}

      <div className={cn("space-y-4", !compact && "mt-6")}>
        <Field
          label="Numele tău"
          id="lead-nume"
          autoComplete="given-name"
          error={errors.nume?.message}
          {...register("nume")}
        />
        <Field
          label="Adresa ta de email (principală)"
          id="lead-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          error={errors.email?.message}
          {...register("email")}
        />

        <CtaButton
          type="submit"
          loading={status === "loading"}
          className="w-full"
          size="lg"
        >
          <span className="flex items-center gap-2">
            {ctaLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </span>
        </CtaButton>

        {serverError ? (
          <p
            role="alert"
            className="text-center text-xs text-red-700"
          >
            {serverError}
          </p>
        ) : null}

        <p className="text-center text-[11px] leading-relaxed text-cream-100/55">
          🔒 Nu trimit spam. Primești antrenamentele promise.
        </p>
      </div>
    </form>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  id: string;
  error?: string;
};

const Field = forwardRef<HTMLInputElement, FieldProps>(function Field(
  { label, id, error, className, ...rest },
  ref,
) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-[11px] font-semibold uppercase tracking-[0.18em] text-cream-100/75"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={id}
        aria-invalid={Boolean(error) || undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn(
          "w-full rounded-xl border border-cream-50/20 bg-olive-900 px-4 py-3.5 text-[15px] text-cream-50 placeholder:text-cream-200/50",
          "transition-colors focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/25",
          error && "border-red-500/60 focus:border-red-500 focus:ring-red-500/20",
          className,
        )}
        {...rest}
      />
      {error ? (
        <p
          id={`${id}-error`}
          className="mt-1.5 text-xs text-red-700"
          role="alert"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
});
