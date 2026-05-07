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

// Inputs for the upstream POST /api/send-recipes.
export const sendRecipesSchema = subscribeSchema;
export type SendRecipesInput = z.infer<typeof sendRecipesSchema>;
