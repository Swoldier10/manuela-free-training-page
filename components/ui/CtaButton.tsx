"use client";

import { Loader2 } from "lucide-react";
import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-bold uppercase whitespace-nowrap tracking-[0.06em] sm:tracking-[0.14em] transition-all duration-200 " +
  "disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 " +
  "active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-olive-950 hover:bg-gold-400 shadow-[0_10px_30px_-10px_rgba(212,185,136,0.55)] " +
    "hover:shadow-[0_14px_36px_-8px_rgba(212,185,136,0.65)]",
  secondary:
    "bg-cream-50 text-olive-950 hover:bg-cream-100 shadow-[0_10px_30px_-12px_rgba(247,243,234,0.4)]",
  ghost:
    "bg-transparent text-cream-50 border border-cream-50/20 hover:border-gold-400 hover:text-gold-400",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-4 sm:px-6 text-[12px] sm:text-sm rounded-full",
  lg: "h-[52px] sm:h-14 px-5 sm:px-8 text-[12px] sm:text-[15px] rounded-full",
};

export const CtaButton = forwardRef<HTMLButtonElement, Props>(function CtaButton(
  {
    variant = "primary",
    size = "lg",
    loading = false,
    className,
    children,
    disabled,
    ...rest
  },
  ref,
) {
  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(base, variants[variant], sizes[size], className)}
      {...rest}
    >
      {loading ? (
        <Loader2 className="size-5 animate-spin" aria-hidden="true" />
      ) : null}
      <span>{children}</span>
    </button>
  );
});
