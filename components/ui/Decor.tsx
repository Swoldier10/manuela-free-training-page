import type { SVGProps } from "react";

export function Stripes({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <rect x="-20" y="10" width="140" height="8" transform="rotate(-22 50 50)" opacity="0.55" />
      <rect x="-20" y="30" width="140" height="6" transform="rotate(-22 50 50)" opacity="0.4" />
      <rect x="-20" y="46" width="140" height="4" transform="rotate(-22 50 50)" opacity="0.25" />
    </svg>
  );
}

export function Tally({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 60 46"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
    >
      <line x1="6" y1="6" x2="6" y2="40" />
      <line x1="18" y1="6" x2="18" y2="40" />
      <line x1="30" y1="6" x2="30" y2="40" />
      <line x1="42" y1="6" x2="42" y2="40" />
      <line x1="2" y1="30" x2="48" y2="14" />
    </svg>
  );
}

export function Bolt({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 32"
      fill="currentColor"
    >
      <path d="M14 1 L2 17 L10 17 L8 31 L22 13 L14 13 Z" />
    </svg>
  );
}

export function Scribble({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 14"
      preserveAspectRatio="none"
      fill="none"
      {...rest}
    >
      <path
        d="M3,11 C 40,2 80,13 120,6 C 160,2 200,13 240,6 C 270,3 290,11 297,8"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Dash({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 2"
      preserveAspectRatio="none"
      fill="currentColor"
      {...rest}
    >
      <rect x="0" y="0" width="120" height="2" />
    </svg>
  );
}
