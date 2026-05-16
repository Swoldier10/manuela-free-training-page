import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BOOKING_URL } from "./constants";

type Variant = "primary" | "ghost";
type Size = "md" | "lg";

type Props = {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  showArrow?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-bold uppercase whitespace-nowrap tracking-[0.06em] sm:tracking-[0.14em] " +
  "transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-400 active:scale-[0.98] select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold-500 text-olive-950 hover:bg-gold-400 " +
    "shadow-[0_14px_36px_-10px_rgba(168,131,37,0.5)] hover:shadow-[0_18px_44px_-8px_rgba(196,156,58,0.65)]",
  ghost:
    "bg-transparent text-cream-50 border border-cream-50/20 hover:border-gold-400 hover:text-gold-400",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-4 sm:px-6 text-[12px] sm:text-sm rounded-full",
  lg: "h-[52px] sm:h-14 px-5 sm:px-8 text-[12px] sm:text-[15px] rounded-full",
};

export function BookingCta({
  children = "Programează sesiunea 1:1 gratuită",
  variant = "primary",
  size = "lg",
  className,
  showArrow = true,
}: Props) {
  return (
    <a
      href={BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(base, variants[variant], sizes[size], className)}
    >
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
      ) : null}
    </a>
  );
}
