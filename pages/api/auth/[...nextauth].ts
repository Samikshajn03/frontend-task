import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log("Received credentials:", credentials);
        const { email, password } = credentials ?? {};

        // Dummy login validation
        if (email && password) {
          return {
            id: "1",
            name: email.split("@")[0], 
            email,
            token: "dummy-token-123", // fake token
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
      if (user && "token" in user) {
        token.token = (user as { token: string }).token;
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        token: token.token as string,
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "dev-secret",
};

export default NextAuth(authOptions);
