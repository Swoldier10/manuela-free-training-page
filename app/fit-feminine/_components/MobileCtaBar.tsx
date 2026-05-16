import { BookingCta } from "./BookingCta";

export function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-cream-50/10 bg-olive-950/95 px-4 pt-3 backdrop-blur md:hidden"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 0.75rem)" }}
    >
      <BookingCta size="md" className="w-full">
        Programează sesiunea gratuită
      </BookingCta>
    </div>
  );
}
