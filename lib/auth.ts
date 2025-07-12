
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./db";
import { env } from "./env";
import { emailOTP } from "better-auth/plugins";
import { resend } from "./resend";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql", // or "mysql", "postgresql", ...etc
  }),
  socialProviders: {
    github: {
      clientId: env.AUTH_GITHUB_CLIENT_ID,
      clientSecret: env.AUTH_GITHUB_SECRET,
    },
  },

  plugins: [
    emailOTP({
      async sendVerificationOTP({ email, otp }) {
        // implement sending the email to the user
        await resend.emails.send({
          from: "LMSAPP <onboarding@resend.dev>",
          to: [email],
          subject: "Welcomee to Our LMS Website - Please verify your email",
          html: `<p>Your OPT is <strong>${otp}</strong></p>`,
        });
      },
    }),
    admin(),
  ],
});
