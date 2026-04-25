import { z } from "zod";

export const subscribeSchema = z.object({
  nume: z
    .string()
    .trim()
    .min(2, "Te rog scrie-mi prenumele tău (minim 2 caractere).")
    .max(60, "Prenumele pare prea lung. Încearcă o formă mai scurtă."),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email("Adresa de email nu pare validă. Mai verifică o dată."),
});

export type SubscribeInput = z.infer<typeof subscribeSchema>;

export const sendSchema = subscribeSchema.extend({
  plan: z.enum(["14-day", "7-day"]).nullable(),
});

export type SendInput = z.infer<typeof sendSchema>;
