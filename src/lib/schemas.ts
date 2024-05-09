import { z } from "zod";

export const contactFormSchema = z.object({
  firstname: z.string().min(2).max(15),
  lastname: z.string().min(2).max(15),
  email: z.string().email(),
  phone: z.string().min(10).max(10),
  compagny: z.string(),
});

export const devisFormSchema = z.object({
  firstname: z.string(),
});
