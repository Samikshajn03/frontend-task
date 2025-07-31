// pages/api/auth/[...nextauth].ts

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
         console.log("Received credentials:", credentials);
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        // Dummy login validation
         if (email && password) {
    return {
      id: "1",
      name: email.split("@")[0], // Just take part before @ as name
      email,
      token: "dummy-token-123", // Dummy token for session
    };
  }

  return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = (user as any).token;
      }
      return token;
    },
    async session({ session, token }) {
      (session as any).token = token.token;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "dev-secret",
});
