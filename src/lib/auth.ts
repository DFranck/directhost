import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { db } from "./prisma";
import { signInSchema } from "./schemas";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          const user = await db.user.findFirst({
            where: { email: email },
          });

          if (!user) {
            throw new Error("User not found");
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);

          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          return { ...user, id: user.id.toString() };
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Validation error:", error.errors);
          } else if (error instanceof Error) {
            console.error("Authorization error:", error.message);
          } else {
            console.error("Unknown error:", error);
          }
          return null;
        }
      },
    }),
  ],
});
