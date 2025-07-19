import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { dummyUsers } from "@/app/data/dummyUser";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {       

        try {
          if (!credentials?.email || !credentials?.password) return null;
          const user = dummyUsers.find(user => 
            user.email === credentials.email &&
            user.password === credentials.password
          );
          if (!user) throw new Error('Invalid Email or password');
          return user;
        } catch (error) {
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt", // Add this line
  },
  secret: process.env.AUTH_SECRET, // Make sure you have this
  trustHost: true, // Add this for development
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    }
  },
  pages: {
    signIn: "/login",
    error: "/login",
  },
  debug: process.env.NODE_ENV === "development",
});