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

// Inputs for the upstream POST /api/register-lead.
export const registerLeadSchema = subscribeSchema;
export type RegisterLeadInput = z.infer<typeof registerLeadSchema>;

// Inputs for the upstream POST /api/update-lead. `nume` is carried only so
// the server action can fall back to register-lead on a 404.
export const updateLeadSchema = subscribeSchema.extend({
  plan: z.enum(["14-day", "7-day"]).nullable(),
});
export type UpdateLeadInput = z.infer<typeof updateLeadSchema>;
