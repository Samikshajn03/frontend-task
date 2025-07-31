import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        if (email && password) {
          return {
            id: "1",
            name: email.split("@")[0],
            email,
            token: "dummy-token-123", // ✅ custom token
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
      if (user && typeof user === "object" && "token" in user) {
        // Attach the custom token to the JWT object
        return { ...token, token: (user as { token: string }).token };
      }
      return token;
    },
    async session({ session, token }) {
      // We safely cast `token` to include our custom field
      return {
        ...session,
        user: {
          ...session.user,
          token: typeof token.token === "string" ? token.token : "",
        },
      };
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "dev-secret",
};

export default NextAuth(authOptions);
