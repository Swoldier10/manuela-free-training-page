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

// Payload accepted by `POST /api/meta-capi`. Mirrors the standard Meta
// Pixel events we fire in the funnel; the route handler enriches with
// IP/UA/_fbp/_fbc on the server before forwarding to the Graph API.
export const metaCapiSchema = z.object({
  event: z.enum(["Lead", "ViewContent", "InitiateCheckout", "Purchase"]),
  eventId: z.string().min(1).max(100),
  eventSourceUrl: z.string().url(),
  value: z.number().positive().max(100000).optional(),
  contentName: z.string().min(1).max(120).optional(),
  lead: z
    .object({
      nume: z.string().trim().min(1).max(60),
      email: z.string().trim().toLowerCase().email(),
    })
    .optional(),
});
export type MetaCapiInput = z.infer<typeof metaCapiSchema>;
