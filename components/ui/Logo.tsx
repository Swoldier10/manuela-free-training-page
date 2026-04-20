import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  size?: number;
  className?: string;
  invert?: boolean;
  priority?: boolean;
};

export function Logo({ size = 56, className, invert = false, priority }: Props) {
  return (
    <Image
      src="/logo-vm.png"
      alt="Manuela Vlașin"
      width={size}
      height={size}
      priority={priority}
      className={cn(
        "rounded-full",
        invert && "invert",
        className,
      )}
    />
  );
}
