import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  size?: number;
  className?: string;
  priority?: boolean;
};

export function Logo({ size = 56, className, priority }: Props) {
  return (
    <Image
      src="/images/logo-vm.png"
      alt="Manuela Vlașin"
      width={size}
      height={size}
      priority={priority}
      className={cn("rounded-full", className)}
    />
  );
}
