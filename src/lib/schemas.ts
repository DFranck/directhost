import { object, string, z } from "zod";

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

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});
