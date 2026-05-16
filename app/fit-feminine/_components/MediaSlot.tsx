import Image from "next/image";
import { ImagePlus } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  aspect: string;
  label: string;
  hint?: string;
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

export function MediaSlot({
  aspect,
  label,
  hint,
  src,
  alt,
  priority = false,
  className,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: Props) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio: aspect }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="texture-grain absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gold-500/40 bg-olive-900/40 px-6 text-center">
          <ImagePlus
            className="size-8 text-gold-400/70 sm:size-9"
            aria-hidden="true"
          />
          <p className="font-display text-[15px] text-cream-50 sm:text-[17px]">
            {label}
          </p>
          {hint ? (
            <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-cream-100/55 sm:text-[11px]">
              {hint}
            </p>
          ) : null}
        </div>
      )}
    </div>
  );
}
