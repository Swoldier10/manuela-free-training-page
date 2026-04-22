"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { forwardRef, useState } from "react";
import { useForm } from "react-hook-form";
import { subscribeSchema, type SubscribeInput } from "@/lib/schema";
import { cn } from "@/lib/utils";
import { CtaButton } from "./CtaButton";

type Props = {
  id?: string;
  ctaLabel?: string;
  compact?: boolean;
  surface?: "card" | "plain";
  onSuccess?: (nume: string) => void;
};

export function LeadForm({
  id = "form",
  ctaLabel = "Vreau antrenamentele gratuite",
  compact = false,
  surface = "card",
  onSuccess,
}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [serverError, setServerError] = useState<string | null>(null);
  const [sentName, setSentName] = useState<string>("");

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
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json?.ok) {
        setServerError(
          typeof json?.error === "string"
            ? json.error
            : "Ceva nu a mers. Mai încearcă o dată în câteva secunde.",
        );
        setStatus("error");
        return;
      }
      setSentName(data.nume);
      setStatus("success");
      onSuccess?.(data.nume);
    } catch {
      setServerError(
        "Nu am putut trimite acum. Verifică conexiunea și mai încearcă.",
      );
      setStatus("error");
    }
  }

  const wrapperBase =
    surface === "card"
      ? "rounded-3xl border border-cream-50/10 bg-olive-900 p-6 sm:p-8 shadow-[0_30px_80px_-40px_rgba(11,11,11,0.25)]"
      : "";

  if (status === "success") {
    return (
      <div
        id={id}
        className={cn(wrapperBase, "text-center")}
        role="status"
        aria-live="polite"
      >
        <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full bg-gold-500/15 ring-1 ring-gold-500/40">
          <CheckCircle2 className="size-7 text-gold-400" />
        </div>
        <h3 className="font-display text-2xl sm:text-3xl text-cream-50">
          Gata, {sentName}!
        </h3>
        <p className="mt-3 text-[15px] leading-relaxed text-cream-100/80">
          Ți-am trimis pe email ambele antrenamente. Verifică și folder-ul
          <span className="mx-1 font-semibold text-gold-400">Spam</span>
          sau
          <span className="mx-1 font-semibold text-gold-400">Promoții</span>
          dacă nu ajung în 2-3 minute.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-olive-800/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-cream-100/70">
          <Sparkles className="size-4 text-gold-400" />
          Succes la primul antrenament
        </div>
      </div>
    );
  }

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
            Începe acum — gratuit
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
          label="Cum te pot striga?"
          id="lead-nume"
          autoComplete="given-name"
          error={errors.nume?.message}
          {...register("nume")}
        />
        <Field
          label="Adresa ta de email"
          id="lead-email"
          type="email"
          autoComplete="email"
          inputMode="email"
          error={errors.email?.message}
          {...register("email")}
        />

        {serverError ? (
          <p
            className="rounded-2xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-700"
            role="alert"
          >
            {serverError}
          </p>
        ) : null}

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

        <p className="text-center text-[11px] leading-relaxed text-cream-100/55">
          🔒 Nu trimit spam. Primești doar antrenamente și informații utile.
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
